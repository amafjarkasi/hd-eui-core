import React from "react";
import clsx from "clsx";

export interface CardGridProps {
  children: React.ReactNode[];
  columns?: number;
  gap?: "tight" | "ultra";
  responsive?: boolean;
  minWidth?: string;
  className?: string;
}

export const CardGrid: React.FC<CardGridProps> = ({
  children,
  columns = 3,
  gap = "ultra",
  responsive = false,
  minWidth,
  className,
}) => {
  const baseClasses =
    "grid border border-hd-border dark:border-hd-dark-border bg-hd-bg-light dark:bg-hd-dark-bg";
  const gridTemplate = responsive
    ? {
        gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth || "200px"}, 1fr))`,
      }
    : { gridTemplateColumns: `repeat(${columns}, 1fr)` };
  const gapClasses = {
    tight: "gap-1",
    ultra: "gap-2",
  };

  const classes = clsx(baseClasses, gapClasses[gap], className);

  return (
    <div className={classes} style={gridTemplate}>
      {children.map((child, index) => (
        <div
          key={index}
          className="border border-hd-border dark:border-hd-dark-border bg-hd-bg-light dark:bg-hd-dark-bg p-2"
        >
          {child}
        </div>
      ))}
    </div>
  );
};
