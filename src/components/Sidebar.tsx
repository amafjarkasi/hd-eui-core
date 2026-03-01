import React from "react";
import clsx from "clsx";

export type SidebarPosition = "left" | "right";

export interface SidebarItem {
  id: string;
  label: string;
  icon?: React.ReactElement;
  children?: SidebarItem[];
}

export interface SidebarProps {
  items: SidebarItem[];
  activeItem?: string;
  position?: SidebarPosition;
  collapsed?: boolean;
  onItemClick?: (item: SidebarItem) => void;
  onToggleCollapse?: () => void;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  activeItem,
  position = "left",
  collapsed = false,
  onItemClick,
  onToggleCollapse,
  className,
}) => {
  const baseClasses =
    "flex flex-col h-full bg-hd-bg-light dark:bg-hd-dark-bg border-hd-border dark:border-hd-dark-border text-hd-primary dark:text-hd-dark-text text-[10px] transition-all duration-300 ease-in-out";
  const positionClasses = position === "left" ? "border-r" : "border-l";
  const widthClasses = collapsed ? "w-10" : "w-72"; // Denser: reduced from w-12 to w-10, w-80 to w-72

  const handleItemClick = (item: SidebarItem) => {
    onItemClick?.(item);
  };

  const renderItem = (item: SidebarItem, depth = 0): JSX.Element => {
    const isActive = activeItem === item.id;
    const hasChildren = item.children && item.children.length > 0;
    const itemClasses = clsx(
      "flex items-center gap-0.5 px-1.5 py-1 cursor-pointer hover:bg-hd-bg-dark dark:hover:bg-hd-dark-bg-alt border-b border-hd-border dark:border-hd-dark-border transition-colors duration-200", // Denser: px-2 to px-1.5, py-1.5 to py-1, gap-1 to gap-0.5
      isActive && "bg-hd-focus text-white",
      depth > 0 && "pl-3", // Denser: pl-4 to pl-3
    );

    return (
      <div key={item.id}>
        <div className={itemClasses} onClick={() => handleItemClick(item)}>
          {item.icon && (
            <span className="w-2.5 h-2.5 flex-shrink-0">{item.icon}</span>
          )}{" "}
          // Denser: w-3 h-3 to w-2.5 h-2.5
          {!collapsed && <span className="truncate">{item.label}</span>}
        </div>
        {!collapsed && hasChildren && (
          <div className="animate-fade-in duration-200">
            {item.children!.map((child) => renderItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={clsx(baseClasses, positionClasses, widthClasses, className)}
    >
      {onToggleCollapse && (
        <button
          className="p-1 text-hd-muted hover:text-hd-primary transition-colors duration-200" // Denser: p-2 to p-1
          onClick={onToggleCollapse}
        >
          {collapsed ? "▶" : "◀"}
        </button>
      )}
      <nav className="flex-1 overflow-y-auto animate-slide-in duration-300">
        {items.map((item) => renderItem(item))}
      </nav>
    </div>
  );
};
