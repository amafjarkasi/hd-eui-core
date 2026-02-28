import React from "react";
import clsx from "clsx";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisible?: number;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisible = 5,
  className,
}) => {
  if (totalPages <= 1) return null;

  const getVisiblePages = (): (number | string)[] => {
    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [];
    const start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(totalPages, start + maxVisible - 1);

    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push("...");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  const baseClass =
    "inline-flex items-center gap-0.5 p-0.5 bg-hd-bg-light border border-hd-border rounded-md text-[8px]";
  const buttonClass =
    "px-0.5 py-0.5 border border-transparent hover:bg-hd-bg-dark hover:text-hd-primary transition-colors cursor-pointer";
  const ellipsisClass = "px-1 py-0.5 text-hd-muted";
  const activeClass = "bg-hd-primary text-white font-bold";
  const disabledClass = "opacity-50 cursor-not-allowed";

  return (
    <nav className={clsx(baseClass, className)} aria-label="Pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={clsx(buttonClass, { [disabledClass]: currentPage === 1 })}
      >
        ‹
      </button>
      {visiblePages.map((page, index) =>
        typeof page === "number" ? (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={clsx(buttonClass, {
              [activeClass]: page === currentPage,
            })}
          >
            {page}
          </button>
        ) : (
          <span key={index} className={ellipsisClass}>
            {page}
          </span>
        ),
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={clsx(buttonClass, {
          [disabledClass]: currentPage === totalPages,
        })}
      >
        ›
      </button>
    </nav>
  );
};
