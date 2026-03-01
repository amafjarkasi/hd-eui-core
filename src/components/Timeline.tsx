import React from "react";
import clsx from "clsx";

export interface TimelineItem {
  id: string | number;
  title: React.ReactNode;
  description?: React.ReactNode;
  timestamp: string;
  icon?: React.ReactNode;
  status?: "success" | "warning" | "error" | "info";
}

export interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ items, className }) => {
  return (
    <div className={clsx("flex flex-col space-y-0", className)}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        const dotColorClasses = {
          success: "bg-green-500",
          warning: "bg-yellow-500",
          error: "bg-red-500",
          info: "bg-hd-focus",
        };

        return (
          <div key={item.id} className="flex group">
            {/* Left Rail */}
            <div className="flex flex-col items-center mr-2">
              <div
                className={clsx(
                  "w-2 h-2 rounded-full mt-1 z-10",
                  item.status ? dotColorClasses[item.status] : "bg-hd-border dark:bg-slate-600"
                )}
              >
                {item.icon && (
                  <div className="flex items-center justify-center w-full h-full text-[6px] text-white">
                    {item.icon}
                  </div>
                )}
              </div>
              {!isLast && (
                <div className="w-px flex-1 bg-hd-border dark:bg-slate-700 my-0.5" />
              )}
            </div>

            {/* Content */}
            <div className={clsx("pb-3 flex-1 min-w-0", !isLast && "border-b border-transparent")}>
              <div className="flex items-baseline justify-between gap-2">
                <h4 className="text-[10px] font-bold text-hd-primary dark:text-slate-200 truncate">
                  {item.title}
                </h4>
                <span className="text-[8px] text-hd-muted dark:text-slate-500 whitespace-nowrap">
                  {item.timestamp}
                </span>
              </div>
              {item.description && (
                <div className="text-[9px] text-hd-muted dark:text-slate-400 mt-0.5 leading-tight">
                  {item.description}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
