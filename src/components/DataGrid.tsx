import React, { useState, useMemo } from "react";
import clsx from "clsx";
import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
  Filter,
  ArrowUpDown,
  MoreHorizontal,
} from "lucide-react";

export interface DataGridColumn<T = any> {
  key: string;
  header: string;
  width?: string;
  sortable?: boolean;
  filterable?: boolean;
  render?: (value: any, row: T, index: number) => React.ReactNode;
  align?: "left" | "center" | "right";
}

export interface DataGridProps<T = any> {
  data: T[];
  columns: DataGridColumn<T>[];
  pageSize?: number;
  selectable?: boolean;
  onSelectionChange?: (selectedRows: T[]) => void;
  loading?: boolean;
  emptyMessage?: string;
  className?: string;
  density?: "compact" | "normal";
}

export const DataGrid = <T extends Record<string, any>>({
  data = [],
  columns,
  pageSize = 10,
  selectable = false,
  onSelectionChange,
  loading = false,
  emptyMessage = "No records found",
  className,
  density = "compact",
}: DataGridProps<T>) => {
  // State
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<Set<string | number>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");

  // Logic: Filtering
  const filteredData = useMemo(() => {
    return data.filter((row) => {
      const matchesSearch = Object.values(row).some((val) =>
        String(val).toLowerCase().includes(searchQuery.toLowerCase())
      );
      const matchesFilters = Object.entries(filters).every(([key, val]) =>
        String(row[key]).toLowerCase().includes(val.toLowerCase())
      );
      return matchesSearch && matchesFilters;
    });
  }, [data, searchQuery, filters]);

  // Logic: Sorting
  const sortedData = useMemo(() => {
    if (!sortKey) return filteredData;
    return [...filteredData].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      if (aVal === bVal) return 0;
      const result = aVal > bVal ? 1 : -1;
      return sortOrder === "asc" ? result : -result;
    });
  }, [filteredData, sortKey, sortOrder]);

  // Logic: Pagination
  const totalPages = Math.ceil(sortedData.length / pageSize);
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);

  // Handlers
  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const toggleSelectAll = () => {
    if (selectedIds.size === paginatedData.length) {
      setSelectedIds(new Set());
      onSelectionChange?.([]);
    } else {
      const newSelection = new Set(paginatedData.map((r) => r.id || r.key || JSON.stringify(r)));
      setSelectedIds(newSelection);
      onSelectionChange?.(paginatedData);
    }
  };

  const toggleSelectRow = (row: T) => {
    const id = row.id || row.key || JSON.stringify(row);
    const newSelection = new Set(selectedIds);
    if (newSelection.has(id)) {
      newSelection.delete(id);
    } else {
      newSelection.add(id);
    }
    setSelectedIds(newSelection);
    const selectedRows = data.filter((r) =>
      newSelection.has(r.id || r.key || JSON.stringify(r))
    );
    onSelectionChange?.(selectedRows);
  };

  // Styles
  const isCompact = density === "compact";
  const baseClasses = "flex flex-col w-full border border-hd-border rounded-md bg-hd-bg-light dark:bg-slate-900 dark:border-slate-700 overflow-hidden";
  const headerCellClasses = clsx(
    "bg-hd-bg-dark dark:bg-slate-800 border-b border-r border-hd-border dark:border-slate-700 font-bold text-hd-primary dark:text-slate-200 uppercase tracking-wider select-none",
    isCompact ? "px-1 py-1 text-[9px]" : "px-2 py-1.5 text-[10px]"
  );
  const bodyCellClasses = clsx(
    "border-b border-r border-hd-border dark:border-slate-700 text-hd-primary dark:text-slate-300 truncate",
    isCompact ? "px-1 py-0.5 text-[10px]" : "px-2 py-1 text-[11px]"
  );

  return (
    <div className={clsx(baseClasses, className)}>
      {/* Toolbar */}
      <div className="flex items-center justify-between p-1 border-b border-hd-border dark:border-slate-700 bg-hd-bg-light dark:bg-slate-900">
        <div className="relative flex items-center">
          <Search className="absolute left-1.5 w-3 h-3 text-hd-muted" />
          <input
            type="text"
            placeholder="Search all columns..."
            className="pl-5 pr-2 py-0.5 w-48 text-[10px] border border-hd-border dark:border-slate-700 rounded bg-hd-bg-dark dark:bg-slate-800 focus:ring-1 focus:ring-hd-focus outline-none dark:text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-1">
          <button className="p-1 hover:bg-hd-bg-dark dark:hover:bg-slate-800 rounded text-hd-muted">
            <Filter size={12} />
          </button>
          <button className="p-1 hover:bg-hd-bg-dark dark:hover:bg-slate-800 rounded text-hd-muted">
            <MoreHorizontal size={12} />
          </button>
        </div>
      </div>

      {/* Table Body */}
      <div className="overflow-auto max-h-[500px]">
        <table className="w-full border-collapse table-fixed">
          <thead className="sticky top-0 z-10">
            <tr>
              {selectable && (
                <th className={clsx(headerCellClasses, "w-8 text-center")}>
                  <input
                    type="checkbox"
                    className="w-3 h-3 rounded border-hd-border"
                    checked={selectedIds.size > 0 && selectedIds.size === paginatedData.length}
                    onChange={toggleSelectAll}
                  />
                </th>
              )}
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={clsx(
                    headerCellClasses,
                    col.sortable && "cursor-pointer hover:bg-hd-border dark:hover:bg-slate-700",
                    col.align === "center" && "text-center",
                    col.align === "right" && "text-right"
                  )}
                  style={{ width: col.width }}
                  onClick={() => col.sortable && handleSort(col.key)}
                >
                  <div className="flex items-center gap-1">
                    <span className="flex-1">{col.header}</span>
                    {col.sortable && (
                      <span className="text-hd-muted">
                        {sortKey === col.key ? (
                          sortOrder === "asc" ? <ChevronUp size={10} /> : <ChevronDown size={10} />
                        ) : (
                          <ArrowUpDown size={8} />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={columns.length + (selectable ? 1 : 0)} className="p-4 text-center">
                  <div className="animate-pulse flex flex-col gap-2">
                    {Array(5).fill(0).map((_, i) => (
                      <div key={i} className="h-4 bg-hd-bg-dark dark:bg-slate-800 rounded w-full" />
                    ))}
                  </div>
                </td>
              </tr>
            ) : paginatedData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (selectable ? 1 : 0)}
                  className="p-8 text-center text-[11px] text-hd-muted"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              paginatedData.map((row, idx) => {
                const rowId = row.id || row.key || JSON.stringify(row);
                const isSelected = selectedIds.has(rowId);
                return (
                  <tr
                    key={rowId}
                    className={clsx(
                      "hover:bg-hd-bg-dark dark:hover:bg-slate-800 transition-colors",
                      isSelected && "bg-blue-50 dark:bg-blue-900/20"
                    )}
                  >
                    {selectable && (
                      <td className={clsx(bodyCellClasses, "text-center")}>
                        <input
                          type="checkbox"
                          className="w-3 h-3 rounded border-hd-border"
                          checked={isSelected}
                          onChange={() => toggleSelectRow(row)}
                        />
                      </td>
                    )}
                    {columns.map((col) => (
                      <td
                        key={col.key}
                        className={clsx(
                          bodyCellClasses,
                          col.align === "center" && "text-center",
                          col.align === "right" && "text-right"
                        )}
                      >
                        {col.render ? col.render(row[col.key], row, idx) : row[col.key]}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between p-1 bg-hd-bg-dark dark:bg-slate-800 border-t border-hd-border dark:border-slate-700">
        <div className="text-[9px] text-hd-muted dark:text-slate-400">
          Showing {Math.min(sortedData.length, (currentPage - 1) * pageSize + 1)} to{" "}
          {Math.min(sortedData.length, currentPage * pageSize)} of {sortedData.length} entries
        </div>
        <div className="flex items-center gap-0.5">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(1)}
            className="p-1 rounded hover:bg-hd-border dark:hover:bg-slate-700 disabled:opacity-30"
          >
            <ChevronsLeft size={12} />
          </button>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="p-1 rounded hover:bg-hd-border dark:hover:bg-slate-700 disabled:opacity-30"
          >
            <ChevronLeft size={12} />
          </button>
          <span className="px-2 text-[10px] font-bold dark:text-white">
            {currentPage} / {totalPages || 1}
          </span>
          <button
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="p-1 rounded hover:bg-hd-border dark:hover:bg-slate-700 disabled:opacity-30"
          >
            <ChevronRight size={12} />
          </button>
          <button
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => setCurrentPage(totalPages)}
            className="p-1 rounded hover:bg-hd-border dark:hover:bg-slate-700 disabled:opacity-30"
          >
            <ChevronsRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};
