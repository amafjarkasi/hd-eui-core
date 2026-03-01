import React from "react";
import clsx from "clsx";

export interface CardProps {
  /** Card header title */
  title?: React.ReactNode;
  /** Optional content to display in the top right of the header */
  headerAction?: React.ReactNode;
  /** Card footer content */
  footer?: React.ReactNode;
  /** Main card content */
  children?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** If true, removes padding from the body section */
  noPadding?: boolean;
  /** Visual density variant */
  variant?: "default" | "bordered" | "flat";
}

/**
 * 💎 Card: A structured container for grouping related information.
 * Optimized for high-density enterprise layouts with hard borders and micro-padding.
 */
export const Card: React.FC<CardProps> = ({
  title,
  headerAction,
  footer,
  children,
  className,
  noPadding = false,
  variant = "default",
}) => {
  const baseClasses = clsx(
    "flex flex-col rounded-md overflow-hidden transition-all duration-200 animate-fade-in",
    "bg-hd-bg-light dark:bg-hd-dark-bg",
    {
      "border border-hd-border dark:border-hd-dark-border shadow-hd-sm":
        variant === "default",
      "border border-hd-border dark:border-hd-dark-border":
        variant === "bordered",
      "bg-hd-bg-dark dark:bg-hd-dark-bg-alt": variant === "flat",
    },
    className,
  );

  const headerClasses = clsx(
    "flex items-center justify-between px-2 py-1 border-b border-hd-border dark:border-hd-dark-border bg-hd-bg-dark dark:bg-hd-dark-bg-alt",
  );

  const bodyClasses = clsx("flex-1 min-w-0", {
    "p-2": !noPadding,
    "p-0": noPadding,
  });

  const footerClasses = clsx(
    "px-2 py-1 border-t border-hd-border dark:border-hd-dark-border bg-hd-bg-light dark:bg-hd-dark-bg text-muted-sm",
  );

  return (
    <div className={baseClasses}>
      {title && (
        <div className={headerClasses}>
          <h3 className="text-header text-hd-primary dark:text-hd-dark-text truncate">
            {title}
          </h3>
          {headerAction && (
            <div className="flex items-center ml-2">{headerAction}</div>
          )}
        </div>
      )}

      <div className={bodyClasses}>{children}</div>

      {footer && <div className={footerClasses}>{footer}</div>}
    </div>
  );
};

export default Card;
