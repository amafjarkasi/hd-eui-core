import React, { useState, useMemo, useCallback } from "react";
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
  const [selectedIds, setSelectedIds] = useState<Set<string | number>>(
    new Set(),
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Logic: Filtering
  const filteredData = useMemo(() => {
    return data.filter((row) => {
      const matchesSearch = Object.values(row).some((val) =>
        String(val).toLowerCase().includes(searchQuery.toLowerCase()),
      );
      const matchesFilters = Object.entries(filters).every(([key, val]) =>
        String(row[key]).toLowerCase().includes(val.toLowerCase()),
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
  const handleSort = useCallback(
    (key: string) => {
      if (sortKey === key) {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
      } else {
        setSortKey(key);
        setSortOrder("asc");
      }
    },
    [sortKey, sortOrder],
  );

  const toggleSelectAll = useCallback(() => {
    if (selectedIds.size === paginatedData.length) {
      setSelectedIds(new Set());
      onSelectionChange?.([]);
    } else {
      const newSelection = new Set(
        paginatedData.map((r) => r.id || r.key || JSON.stringify(r)),
      );
      setSelectedIds(newSelection);
      onSelectionChange?.(paginatedData);
    }
  }, [selectedIds.size, paginatedData, onSelectionChange]);

  const toggleSelectRow = useCallback(
    (row: T) => {
      const id = row.id || row.key || JSON.stringify(row);
      const newSelection = new Set(selectedIds);
      if (newSelection.has(id)) {
        newSelection.delete(id);
      } else {
        newSelection.add(id);
      }
      setSelectedIds(newSelection);
      const selectedRows = data.filter((r) =>
        newSelection.has(r.id || r.key || JSON.stringify(r)),
      );
      onSelectionChange?.(selectedRows);
    },
    [selectedIds, data, onSelectionChange],
  );

  // Styles
  const isCompact = density === "compact";
  const baseClasses =
    "flex flex-col w-full border border-hd-border dark:border-hd-dark-border rounded-md bg-hd-bg-light dark:bg-hd-dark-bg overflow-hidden transition-colors";
  const headerCellClasses = clsx(
    "bg-hd-bg-dark dark:bg-hd-dark-bg-alt border-b border-r border-hd-border dark:border-hd-dark-border font-bold text-hd-primary dark:text-hd-dark-text uppercase tracking-wider select-none transition-colors",
    isCompact ? "px-1 py-1 text-[9px]" : "px-2 py-1.5 text-[10px]",
  );
  const bodyCellClasses = clsx(
    "border-b border-r border-hd-border dark:border-hd-dark-border text-hd-primary dark:text-hd-dark-text truncate align-middle",
    isCompact ? "px-1 py-0.5 text-[10px]" : "px-2 py-1 text-[11px]",
  );

  return (
    <div className={clsx(baseClasses, className)}>
      {/* Toolbar */}
      <div className="flex items-center justify-between p-1 border-b border-hd-border dark:border-hd-dark-border bg-hd-bg-light dark:bg-hd-dark-bg">
        <div className="relative flex items-center">
          <Search className="absolute left-1.5 w-3 h-3 text-hd-muted dark:text-hd-dark-text-muted" />
          <input
            type="text"
            placeholder="Search all columns..."
            className="pl-5 pr-2 py-0.5 w-48 text-[10px] border border-hd-border dark:border-hd-dark-border rounded bg-hd-bg-dark dark:bg-hd-dark-bg-alt focus:ring-1 focus:ring-hd-focus outline-none dark:text-white transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-1">
          <button className="p-1 hover:bg-hd-bg-dark dark:hover:bg-hd-dark-bg-alt rounded text-hd-muted dark:text-hd-dark-text-muted transition-colors">
            <Filter size={12} />
          </button>
          <button className="p-1 hover:bg-hd-bg-dark dark:hover:bg-hd-dark-bg-alt rounded text-hd-muted dark:text-hd-dark-text-muted transition-colors">
            <MoreHorizontal size={12} />
          </button>
        </div>
      </div>

      {/* Table Body */}
      <div className="overflow-auto max-h-[500px]">
        <table className="w-full border-collapse table-fixed">
          <thead className="sticky top-0 z-10 shadow-sm">
            <tr>
              {selectable && (
                <th className={clsx(headerCellClasses, "w-8 text-center")}>
                  <input
                    type="checkbox"
                    className="w-3 h-3 rounded border-hd-border dark:border-hd-dark-border accent-hd-focus"
                    checked={
                      selectedIds.size > 0 &&
                      selectedIds.size === paginatedData.length
                    }
                    onChange={toggleSelectAll}
                  />
                </th>
              )}
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={clsx(
                    headerCellClasses,
                    col.sortable &&
                      "cursor-pointer hover:bg-hd-border dark:hover:bg-hd-dark-border",
                    col.align === "center" && "text-center",
                    col.align === "right" && "text-right",
                  )}
                  style={{ width: col.width }}
                  onClick={() => col.sortable && handleSort(col.key)}
                >
                  <div className="flex items-center gap-1">
                    <span className="flex-1 truncate">{col.header}</span>
                    {col.sortable && (
                      <span className="text-hd-muted dark:text-hd-dark-text-muted flex-shrink-0">
                        {sortKey === col.key ? (
                          sortOrder === "asc" ? (
                            <ChevronUp size={10} strokeWidth={3} />
                          ) : (
                            <ChevronDown size={10} strokeWidth={3} />
                          )
                        ) : (
                          <ArrowUpDown size={8} className="opacity-30" />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-hd-border dark:divide-hd-dark-border">
            {loading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <tr key={`skeleton-${i}`} className="animate-pulse">
                  {selectable && <td className={bodyCellClasses} />}
                  {columns.map((col) => (
                    <td
                      key={`skeleton-td-${col.key}`}
                      className={bodyCellClasses}
                    >
                      <div className="h-2 bg-hd-bg-dark dark:bg-hd-dark-bg-alt rounded w-3/4" />
                    </td>
                  ))}
                </tr>
              ))
            ) : paginatedData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (selectable ? 1 : 0)}
                  className="px-4 py-8 text-center text-[10px] text-hd-muted dark:text-hd-dark-text-muted italic bg-hd-bg-light dark:bg-hd-dark-bg"
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
                      "group transition-colors hover:bg-hd-bg-dark dark:hover:bg-hd-dark-bg-alt",
                      isSelected
                        ? "bg-blue-50 dark:bg-hd-focus/10"
                        : "bg-hd-bg-light dark:bg-hd-dark-bg",
                    )}
                  >
                    {selectable && (
                      <td className={clsx(bodyCellClasses, "text-center")}>
                        <input
                          type="checkbox"
                          className="w-3 h-3 rounded border-hd-border dark:border-hd-dark-border accent-hd-focus"
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
                          col.align === "right" && "text-right",
                        )}
                      >
                        {col.render
                          ? col.render(row[col.key], row, idx)
                          : String(row[col.key] ?? "")}
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
      <div className="flex items-center justify-between p-1 bg-hd-bg-dark dark:bg-hd-dark-bg-alt border-t border-hd-border dark:border-hd-dark-border transition-colors">
        <div className="text-[9px] text-hd-muted dark:text-hd-dark-text-muted">
          Showing{" "}
          {Math.min(sortedData.length, (currentPage - 1) * pageSize + 1)} to{" "}
          {Math.min(sortedData.length, currentPage * pageSize)} of{" "}
          {sortedData.length} entries
        </div>
        <div className="flex items-center gap-0.5">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(1)}
            className="p-1 rounded hover:bg-hd-border dark:hover:bg-hd-dark-border disabled:opacity-30 transition-colors dark:text-hd-dark-text"
          >
            <ChevronsLeft size={12} />
          </button>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="p-1 rounded hover:bg-hd-border dark:hover:bg-hd-dark-border disabled:opacity-30 transition-colors dark:text-hd-dark-text"
          >
            <ChevronLeft size={12} />
          </button>
          <span className="px-2 text-[10px] font-bold dark:text-hd-dark-text">
            {currentPage} / {totalPages || 1}
          </span>
          <button
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="p-1 rounded hover:bg-hd-border dark:hover:bg-hd-dark-border disabled:opacity-30 transition-colors dark:text-hd-dark-text"
          >
            <ChevronRight size={12} />
          </button>
          <button
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => setCurrentPage(totalPages)}
            className="p-1 rounded hover:bg-hd-border dark:hover:bg-hd-dark-border disabled:opacity-30 transition-colors dark:text-hd-dark-text"
          >
            <ChevronsRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};
