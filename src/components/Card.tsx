import React from "react";
import clsx from "clsx";
import { colors } from "../theme";

interface CardProps {
  title?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  footer,
  children,
  className,
}) => {
  const baseClasses = clsx(
    "bg-hd-bg-light border border-hd-border rounded-md overflow-hidden shadow-sm min-h-16",
    className,
  );

  return (
    <div className={baseClasses}>
      {title && (
        <div className="px-1 py-0.5 border-b border-hd-border bg-hd-bg-dark">
          <h3 className="text-[11px] font-bold text-hd-primary">{title}</h3>
        </div>
      )}
      <div className="p-1">{children}</div>
      {footer && (
        <div className="px-1 py-0.5 border-t border-hd-border bg-hd-bg-light">
          <div className="text-[9px] text-hd-muted">{footer}</div>
        </div>
      )}
    </div>
  );
};
