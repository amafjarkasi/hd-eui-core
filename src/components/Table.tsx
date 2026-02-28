import React from "react";
import clsx from "clsx";

interface Column<T = any> {
  key: string;
  header: string;
  width?: string;
  align?: "left" | "center" | "right";
  render?: (value: any, row: T, index: number) => React.ReactNode;
  sortable?: boolean;
}

interface TableProps<T = any> {
  data: T[];
  columns: Column<T>[];
  className?: string;
  loading?: boolean;
  emptyMessage?: string;
  striped?: boolean;
  onSort?: (key: string, direction: "asc" | "desc") => void;
  sortKey?: string;
  sortDirection?: "asc" | "desc";
}

export const Table = <T,>({
  data = [],
  columns,
  className,
  loading = false,
  emptyMessage = "No data available",
  striped = false,
  onSort,
  sortKey,
  sortDirection,
}: TableProps<T>) => {
  const baseTableClasses =
    "w-full border-collapse border border-hd-border bg-hd-bg-light text-hd-primary";
  const tableClasses = clsx(baseTableClasses, className);

  const headerClasses =
    "px-0.5 py-0.5 text-[11px] font-bold border border-hd-border bg-hd-bg-dark text-hd-primary uppercase tracking-wider";
  const cellClasses =
    "px-1 py-1 text-[10px] border border-hd-border align-top whitespace-nowrap";
  const stripedRowClass = "bg-hd-bg-light";
  const evenRowClass = striped ? "bg-hd-bg-light opacity-95" : "";

  if (loading) {
    return (
      <div className="w-full border border-hd-border rounded-md p-1">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="animate-pulse bg-hd-bg-dark h-4 w-full mb-1 rounded"
            ></div>
          ))}
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="w-full border border-hd-border rounded-md p-1">
        <p className="text-[10px] text-hd-muted text-center">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className={tableClasses}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={column.key}
                className={clsx(
                  headerClasses,
                  column.align && `text-${column.align}`,
                  column.width && `w-[${column.width}]`,
                  column.sortable && "hover:text-hd-focus",
                )}
                style={column.width ? { width: column.width } : {}}
                onClick={
                  column.sortable
                    ? () =>
                        onSort?.(
                          column.key,
                          sortDirection === "asc" ? "desc" : "asc",
                        )
                    : undefined
                }
              >
                <div className="flex items-center justify-between">
                  <span>{column.header}</span>
                  {column.sortable && sortKey === column.key && (
                    <span className="text-[8px]">
                      {sortDirection === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={clsx(
                cellClasses,
                rowIndex % 2 === 0 ? evenRowClass : "",
              )}
            >
              {columns.map((column, colIndex) => {
                const value = (row as any)[column.key];
                const renderedValue = column.render
                  ? column.render(value, row, rowIndex)
                  : value;
                return (
                  <td
                    key={colIndex}
                    className={clsx(
                      cellClasses,
                      column.align && `text-${column.align}`,
                    )}
                  >
                    {renderedValue}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
