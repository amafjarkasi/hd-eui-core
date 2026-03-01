import React from "react";
import clsx from "clsx";
import { LucideIcon, Loader2 } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The visual style variant of the button */
  variant?: ButtonVariant;
  /** The size of the button, optimized for high-density layouts */
  size?: ButtonSize;
  /** Optional Lucide icon to display before the label */
  icon?: LucideIcon;
  /** Whether the button is in a loading state */
  loading?: boolean;
  /** Whether the button should take up the full width of its container */
  fullWidth?: boolean;
}

/**
 * 💎 HD-EUI Button
 * An elite-tier, high-density button component designed for enterprise B2B interfaces.
 * Supports multiple variants, sizes, loading states, and full dark mode integration.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      icon: Icon,
      loading = false,
      disabled = false,
      fullWidth = false,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    // Base classes for the high-density aesthetic
    const baseClasses = clsx(
      "inline-flex items-center justify-center font-bold transition-all duration-150 active:scale-[0.98]",
      "rounded-sm border select-none hd-focus-ring",
      fullWidth ? "w-full" : "w-auto",
      (disabled || loading) && "opacity-50 cursor-not-allowed active:scale-100",
    );

    // Precision-tuned sizes for micro-typography
    const sizeClasses = {
      sm: "px-1.5 py-0.5 text-[8px] min-h-[20px] gap-1",
      md: "px-2 py-1 text-[9px] min-h-[24px] gap-1.5",
      lg: "px-3 py-1.5 text-[10px] min-h-[28px] gap-2",
    };

    // Professional monochrome-first variants
    const variantClasses = {
      primary: clsx(
        "bg-hd-primary border-hd-primary text-white",
        "hover:bg-hd-primary-hover hover:border-hd-primary-hover shadow-hd-sm",
      ),
      secondary: clsx(
        "bg-hd-bg-dark border-hd-border text-hd-primary",
        "hover:bg-hd-border dark:bg-hd-dark-bg-alt dark:border-hd-dark-border dark:text-hd-dark-text dark:hover:bg-hd-dark-border",
      ),
      outline: clsx(
        "bg-transparent border-hd-border text-hd-primary",
        "hover:border-hd-primary hover:text-hd-primary dark:border-hd-dark-border dark:text-hd-dark-text dark:hover:border-hd-focus",
      ),
      ghost: clsx(
        "bg-transparent border-transparent text-hd-primary",
        "hover:bg-hd-bg-dark dark:text-hd-dark-text dark:hover:bg-hd-dark-bg-alt",
      ),
    };

    const iconSize = size === "sm" ? 10 : size === "md" ? 12 : 14;

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={clsx(
          baseClasses,
          sizeClasses[size],
          variantClasses[variant],
          className,
        )}
        {...props}
      >
        {loading ? (
          <Loader2 className="animate-spin" size={iconSize} />
        ) : (
          Icon && <Icon size={iconSize} className="flex-shrink-0" />
        )}
        <span className="truncate">{children}</span>
      </button>
    );
  },
);

Button.displayName = "Button";
