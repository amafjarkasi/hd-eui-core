import React, { useState } from "react";
import clsx from "clsx";

export type TooltipPosition = "top" | "bottom" | "left" | "right";

export interface TooltipProps {
  content: React.ReactNode;
  position?: TooltipPosition;
  children: React.ReactNode;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = "top",
  children,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-1",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-1",
    left: "right-full top-1/2 -translate-y-1/2 mr-1",
    right: "left-full top-1/2 -translate-y-1/2 ml-1",
  };

  const arrowClasses = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-hd-primary dark:border-t-slate-800 border-x-transparent border-b-transparent",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-hd-primary dark:border-b-slate-800 border-x-transparent border-t-transparent",
    left: "left-full top-1/2 -translate-y-1/2 border-l-hd-primary dark:border-l-slate-800 border-y-transparent border-r-transparent",
    right: "right-full top-1/2 -translate-y-1/2 border-r-hd-primary dark:border-r-slate-800 border-y-transparent border-l-transparent",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={clsx(
            "absolute z-50 px-1.5 py-0.5 text-[9px] font-medium text-white bg-hd-primary dark:bg-slate-800 rounded shadow-sm whitespace-nowrap pointer-events-none animate-fade-in",
            positionClasses[position],
            className
          )}
        >
          {content}
          <div
            className={clsx(
              "absolute border-4",
              arrowClasses[position]
            )}
          />
        </div>
      )}
    </div>
  );
};
