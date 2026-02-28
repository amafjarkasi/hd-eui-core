import React from "react";
import clsx from "clsx";
import { LucideIcon, Loader2 } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  loading?: boolean;
  disabled?: boolean;
}

export const Button = ({
  variant = "primary",
  size = "md",
  icon: Icon,
  children,
  loading = false,
  disabled = false,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-md transition-all focus:outline-none focus:ring-1 focus:ring-hd-focus border";
  const sizeClasses = {
    sm: "px-1 py-0.5 text-[8px] min-h-[20px]",
    md: "px-1.5 py-1 text-[9px] min-h-[24px]",
    lg: "px-2 py-1.5 text-[10px] min-h-[28px]",
  };
  const variantClasses = {
    primary:
      "bg-hd-primary text-white border-hd-primary hover:bg-hd-primary-hover disabled:opacity-50 disabled:cursor-not-allowed",
    secondary:
      "bg-hd-muted text-hd-primary border-hd-muted hover:bg-hd-muted-hover disabled:opacity-50 disabled:cursor-not-allowed",
    outline:
      "border-hd-border text-hd-primary hover:bg-hd-primary-hover hover:text-white disabled:opacity-50 disabled:cursor-not-allowed",
    ghost:
      "text-hd-primary border-transparent hover:bg-hd-bg-dark disabled:opacity-50 disabled:cursor-not-allowed",
  };
  const iconClasses = "mr-1 flex-shrink-0";
  const loadingClasses = loading ? "opacity-50 cursor-not-allowed" : "";

  const classes = clsx(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    loadingClasses,
    props.className,
  );

  const effectiveDisabled = disabled || loading;

  return (
    <button className={classes} disabled={effectiveDisabled} {...props}>
      {loading && (
        <Loader2
          className={iconClasses}
          size={size === "sm" ? 8 : size === "md" ? 10 : 12}
        />
      )}
      {!loading && Icon && (
        <Icon
          className={iconClasses}
          size={size === "sm" ? 8 : size === "md" ? 10 : 12}
        />
      )}
      {children}
    </button>
  );
};
