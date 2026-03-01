import React from "react";
import clsx from "clsx";

export type ListType = "ul" | "ol";

export interface ListItem {
  key: string;
  content: React.ReactNode;
}

export type ListVariant = "dense" | "normal" | "relaxed";

export interface ListProps {
  type?: ListType;
  items: ListItem[];
  divided?: boolean;
  variant?: ListVariant;
  className?: string;
}

export const List: React.FC<ListProps> = ({
  type = "ul",
  items,
  divided = false,
  variant = "normal",
  className,
}) => {
  const baseClasses =
    "list-none space-y-1 text-hd-primary dark:text-hd-dark-text";
  const dividedClasses = divided
    ? "divide-y divide-hd-border dark:divide-hd-dark-border"
    : "";
  const variantClasses: Record<ListVariant, string> = {
    dense: "px-1 py-0.5 text-[9px] space-y-0.5",
    normal: "px-2 py-1 text-[10px] space-y-1",
    relaxed: "px-3 py-1.5 text-[11px] space-y-2",
  };

  const itemClasses = clsx(
    variantClasses[variant],
    divided ? "first:pt-0 last:pb-0" : "",
  );
  const listClasses = clsx(baseClasses, dividedClasses, className);

  const ListTag = type === "ol" ? "ol" : "ul";

  return (
    <ListTag className={listClasses}>
      {items.map((item, index) => (
        <li key={item.key} className={itemClasses}>
          {type === "ol" && <span className="mr-1">{index + 1}.</span>}
          {item.content}
        </li>
      ))}
    </ListTag>
  );
};
