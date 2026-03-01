import React, { useState } from "react";
import clsx from "clsx";
import { ChevronUp, ChevronDown } from "lucide-react";

export interface AccordionItem {
  title: React.ReactNode;
  content: React.ReactNode;
  id: string;
}

export interface AccordionProps {
  /** Array of accordion items */
  items: AccordionItem[];
  /** If true, allows multiple items to be open at once */
  allowMultiple?: boolean;
  /** Additional CSS classes for the container */
  className?: string;
}

/**
 * 💎 Accordion: A space-saving collapsible content section.
 * Optimized for high-density enterprise layouts with smooth transitions and full accessibility.
 */
export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className,
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div
      className={clsx(
        "border border-hd-border dark:border-hd-dark-border rounded-md overflow-hidden bg-hd-bg-light dark:bg-hd-dark-bg transition-colors",
        className,
      )}
    >
      {items.map((item, index) => {
        const isOpen = openItems.has(item.id);
        return (
          <div
            key={item.id}
            className={clsx(
              index > 0 &&
                "border-t border-hd-border dark:border-hd-dark-border",
            )}
          >
            <button
              className={clsx(
                "w-full text-left px-2 py-1 text-[11px] font-bold text-hd-primary dark:text-hd-dark-text hover:bg-hd-bg-dark dark:hover:bg-hd-dark-bg-alt flex justify-between items-center transition-colors hd-focus-ring",
              )}
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`${item.id}-content`}
            >
              <span className="truncate">{item.title}</span>
              {isOpen ? (
                <ChevronUp className="w-3 h-3 text-hd-muted dark:text-hd-dark-text-muted transition-transform" />
              ) : (
                <ChevronDown className="w-3 h-3 text-hd-muted dark:text-hd-dark-text-muted transition-transform" />
              )}
            </button>
            <div
              id={`${item.id}-content`}
              role="region"
              className={clsx(
                "overflow-hidden transition-all duration-200 ease-in-out",
                isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0",
              )}
            >
              <div className="px-2 py-1.5 text-[10px] text-hd-primary dark:text-hd-dark-text border-t border-hd-border dark:border-hd-dark-border bg-hd-bg-light dark:bg-hd-dark-bg">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
