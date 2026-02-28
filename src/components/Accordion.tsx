import React, { useState } from "react";
import clsx from "clsx";
import { ChevronUp, ChevronDown } from "lucide-react";

export interface AccordionItem {
  title: React.ReactNode;
  content: React.ReactNode;
  id: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

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
        "border border-hd-border rounded-md overflow-hidden",
        className,
      )}
    >
      {items.map((item, index) => {
        const isOpen = openItems.has(item.id);
        return (
          <div
            key={item.id}
            className={clsx(index > 0 && "border-t border-hd-border")}
          >
            <button
              className={clsx(
                "w-full text-left px-1 py-0.5 text-[11px] font-bold text-hd-primary hover:bg-hd-bg-light flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-hd-focus",
                className,
              )}
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`${item.id}-content`}
            >
              {item.title}
              {isOpen ? (
                <ChevronUp className="w-3 h-3 text-hd-muted transition-transform" />
              ) : (
                <ChevronDown className="w-3 h-3 text-hd-muted transition-transform" />
              )}
            </button>
            <div
              id={`${item.id}-content`}
              className={clsx(
                "px-1 py-0.5 text-[10px] text-hd-primary bg-hd-bg-light border-t border-hd-border transition-all duration-200",
                isOpen ? "block" : "hidden",
              )}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};
