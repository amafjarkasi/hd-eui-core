import React from "react";
import clsx from "clsx";
import { ArrowUpDown, ChevronUp, ChevronDown } from "lucide-react";

/**
 * Column definition for the Data Table.
 */
export interface Column<T = any> {
  /** Unique key for the column, matching a key in the data object */
  key: string;
  /** Header label to display */
  header: string;
  /** Optional fixed width (e.g., '100px', '10%') */
  width?: string;
  /** Text alignment */
  align?: "left" | "center" | "right";
  /** Custom renderer function for the cell content */
  render?: (value: any, row: T, index: number) => React.ReactNode;
  /** Whether the column is sortable */
  sortable?: boolean;
  /** Optional class name for the column cells */
  className?: string;
}

/**
 * Props for the Table component.
 */
export interface TableProps<T = any> {
  /** Array of data objects to display */
  data: T[];
  /** Array of column definitions */
  columns: Column<T>[];
  /** Whether the table is in a loading state */
  loading?: boolean;
  /** Message to display when no data is available */
  emptyMessage?: string;
  /** Whether to show alternating row colors */
  striped?: boolean;
  /** Callback triggered when a sortable header is clicked */
  onSort?: (key: string, direction: "asc" | "desc") => void;
  /** The current key being sorted */
  sortKey?: string;
  /** The current sort direction */
  sortDirection?: "asc" | "desc";
  /** Optional class name for the table container */
  className?: string;
}

/**
 * A high-density, enterprise-grade data table optimized for high-throughput information display.
 * Features include sorting, striped rows, loading skeletons, and full dark mode support.
 */
export const Table = <T extends Record<string, any>>({
  data = [],
  columns,
  loading = false,
  emptyMessage = "No records found",
  striped = true,
  onSort,
  sortKey,
  sortDirection,
  className,
}: TableProps<T>) => {
  const handleSort = (column: Column<T>) => {
    if (!column.sortable || !onSort) return;
    const isCurrent = sortKey === column.key;
    const direction = isCurrent && sortDirection === "asc" ? "desc" : "asc";
    onSort(column.key, direction);
  };

  return (
    <div
      className={clsx(
        "w-full overflow-x-auto border border-hd-border dark:border-hd-dark-border rounded-md bg-hd-bg-light dark:bg-hd-dark-bg transition-colors",
        className,
      )}
    >
      <table className="w-full border-collapse table-fixed text-left">
        <thead>
          <tr className="bg-hd-bg-dark dark:bg-hd-dark-bg-alt border-b border-hd-border dark:border-hd-dark-border">
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={() => handleSort(col)}
                style={{ width: col.width }}
                className={clsx(
                  "px-2 py-1 text-[11px] font-bold text-hd-primary dark:text-hd-dark-text uppercase tracking-wider select-none transition-colors",
                  col.sortable &&
                    "cursor-pointer hover:bg-hd-border/50 dark:hover:bg-hd-dark-border/50",
                  col.align === "center" && "text-center",
                  col.align === "right" && "text-right",
                )}
              >
                <div
                  className={clsx(
                    "flex items-center gap-1",
                    col.align === "center" && "justify-center",
                    col.align === "right" && "justify-end",
                  )}
                >
                  <span className="truncate">{col.header}</span>
                  {col.sortable && (
                    <span className="text-hd-muted dark:text-hd-dark-text-muted flex-shrink-0">
                      {sortKey === col.key ? (
                        sortDirection === "asc" ? (
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
            // Skeleton Loading State
            Array.from({ length: 5 }).map((_, i) => (
              <tr key={`skeleton-${i}`} className="animate-pulse">
                {columns.map((col) => (
                  <td key={`skeleton-td-${col.key}`} className="px-2 py-1.5">
                    <div className="h-2 bg-hd-bg-dark dark:bg-hd-dark-bg-alt rounded w-3/4" />
                  </td>
                ))}
              </tr>
            ))
          ) : data.length === 0 ? (
            // Empty State
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-8 text-center text-[10px] text-hd-muted dark:text-hd-dark-text-muted italic"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            // Data Rows
            data.map((row, rowIndex) => (
              <tr
                key={row.id || row.key || rowIndex}
                className={clsx(
                  "group transition-colors hover:bg-hd-bg-dark dark:hover:bg-hd-dark-bg-alt",
                  striped &&
                    rowIndex % 2 !== 0 &&
                    "bg-hd-bg-dark/30 dark:bg-hd-dark-bg-alt/20",
                )}
              >
                {columns.map((col) => {
                  const value = row[col.key];
                  return (
                    <td
                      key={col.key}
                      className={clsx(
                        "px-2 py-1 text-[10px] text-hd-primary dark:text-hd-dark-text truncate align-middle border-r border-hd-border/30 dark:border-hd-dark-border/20 last:border-r-0",
                        col.align === "center" && "text-center",
                        col.align === "right" && "text-right",
                        col.className,
                      )}
                    >
                      {col.render
                        ? col.render(value, row, rowIndex)
                        : String(value ?? "")}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
