import React from "react";
import clsx from "clsx";

export type BadgeVariant = "default" | "primary" | "muted";

export interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  children,
  className,
}) => {
  const baseClasses =
    "inline-flex items-center px-2 py-1 text-[9px] font-medium rounded-md";
  const variantClasses: Record<BadgeVariant, string> = {
    default: "bg-hd-bg-light text-hd-primary border border-hd-border",
    primary: "bg-hd-primary text-white",
    muted: "bg-hd-muted text-white",
  };

  const classes = clsx(baseClasses, variantClasses[variant], className);

  return <span className={classes}>{children}</span>;
};
