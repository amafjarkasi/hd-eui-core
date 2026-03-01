import React, { useState } from "react";
import clsx from "clsx";

/**
 * Individual tab item definition.
 */
export interface TabItem {
  /** Unique identifier for the tab */
  id: string;
  /** Label to display on the tab button */
  label: string;
  /** Content to render when the tab is active */
  content: React.ReactNode;
  /** Optional icon to display next to the label */
  icon?: React.ReactNode;
  /** Whether the tab is disabled */
  disabled?: boolean;
}

/**
 * Props for the Tabs component.
 */
export interface TabsProps {
  /** Array of tab definitions */
  tabs: TabItem[];
  /** Index of the tab that should be active by default */
  defaultActive?: number;
  /** Callback triggered when the active tab changes */
  onChange?: (index: number) => void;
  /** Visual variant of the tabs */
  variant?: "line" | "pills";
  /** Additional CSS classes for the container */
  className?: string;
  /** Additional CSS classes for the tab list container */
  tabListClassName?: string;
  /** Additional CSS classes for the content area */
  contentClassName?: string;
}

/**
 * 💎 Tabs: A high-density navigation component for switching between views.
 * Supports line and pill variants with full dark mode integration.
 */
export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultActive = 0,
  onChange,
  variant = "line",
  className,
  tabListClassName,
  contentClassName,
}) => {
  const [active, setActive] = useState(defaultActive);

  const handleTabClick = (index: number) => {
    if (tabs[index].disabled) return;
    setActive(index);
    onChange?.(index);
  };

  const listClasses = clsx(
    "flex items-center gap-0.5 border-hd-border dark:border-hd-dark-border",
    {
      "border-b": variant === "line",
      "p-0.5 bg-hd-bg-dark dark:bg-hd-dark-bg-alt rounded-md":
        variant === "pills",
    },
    tabListClassName,
  );

  const getTabClasses = (isActive: boolean, isDisabled?: boolean) =>
    clsx(
      "flex items-center gap-1.5 px-2 py-1 text-[10px] font-bold transition-all duration-200 select-none hd-focus-ring",
      {
        // Line variant styles
        "border-b-2 -mb-[1px]": variant === "line",
        "border-hd-focus text-hd-primary dark:text-hd-dark-text":
          isActive && variant === "line",
        "border-transparent text-hd-muted hover:text-hd-primary dark:hover:text-hd-dark-text":
          !isActive && variant === "line",

        // Pills variant styles
        "rounded-sm": variant === "pills",
        "bg-hd-bg-light dark:bg-hd-dark-bg text-hd-primary dark:text-hd-dark-text shadow-hd-sm":
          isActive && variant === "pills",
        "text-hd-muted hover:text-hd-primary dark:hover:text-hd-dark-text":
          !isActive && variant === "pills",

        "opacity-40 cursor-not-allowed": isDisabled,
        "cursor-pointer": !isDisabled,
      },
    );

  return (
    <div className={clsx("flex flex-col w-full", className)}>
      <div role="tablist" className={listClasses}>
        {tabs.map((tab, index) => {
          const isActive = active === index;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              disabled={tab.disabled}
              className={getTabClasses(isActive, tab.disabled)}
              onClick={() => handleTabClick(index)}
            >
              {tab.icon && <span className="flex-shrink-0">{tab.icon}</span>}
              {tab.label}
            </button>
          );
        })}
      </div>
      <div
        id={`panel-${tabs[active]?.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${tabs[active]?.id}`}
        className={clsx("flex-1 animate-fade-in py-2", contentClassName)}
      >
        {tabs[active]?.content}
      </div>
    </div>
  );
};

export default Tabs;
