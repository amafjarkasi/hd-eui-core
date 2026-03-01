import React from "react";
import clsx from "clsx";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  currentItemClass?: string;
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = "/",
  currentItemClass = "text-hd-primary font-semibold",
  className,
}) => {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={clsx(
        "flex items-center text-[10px] text-hd-muted dark:text-hd-dark-text-muted gap-0.5",
        className,
      )}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <span className="text-hd-border dark:text-hd-dark-border px-0.5">
              {separator}
            </span>
          )}
          {item.href ? (
            <a
              href={item.href}
              className="text-hd-primary dark:text-hd-dark-text hover:text-hd-focus dark:hover:text-hd-focus transition-colors cursor-pointer px-1 py-0.5 rounded"
            >
              {item.label}
            </a>
          ) : (
            <span
              className={clsx(
                currentItemClass,
                "dark:text-hd-dark-text px-1 py-0.5",
              )}
            >
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
