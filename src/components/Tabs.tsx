import React, { useState } from "react";
import clsx from "clsx";

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultActive?: number;
  onChange?: (index: number) => void;
  className?: string;
  tabClassName?: string;
  contentClassName?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultActive = 0,
  onChange,
  className,
  tabClassName,
  contentClassName,
}) => {
  const [active, setActive] = useState(defaultActive);

  const handleTabClick = (index: number) => {
    setActive(index);
    onChange?.(index);
  };

  const baseTabClasses =
    "px-1.5 py-1 text-[9px] font-medium cursor-pointer transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-hd-focus";
  const activeTabClasses =
    "text-hd-primary dark:text-hd-dark-text border-b-2 border-hd-focus";
  const inactiveTabClasses =
    "text-hd-muted hover:text-hd-primary dark:hover:text-hd-dark-text border-b-2 border-transparent";
  const contentClasses = clsx(
    "mt-1 p-1 bg-hd-bg-light dark:bg-hd-dark-bg border border-hd-border dark:border-hd-dark-border rounded-md",
    contentClassName,
  );

  return (
    <div className={clsx("w-full", className)}>
      <div
        className={clsx(
          "flex gap-0 border-b border-hd-border dark:border-hd-dark-border bg-hd-bg-light dark:bg-hd-dark-bg-alt",
          tabClassName,
        )}
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            className={clsx(
              baseTabClasses,
              active === index ? activeTabClasses : inactiveTabClasses,
            )}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={contentClasses}>{tabs[active]?.content}</div>
    </div>
  );
};
