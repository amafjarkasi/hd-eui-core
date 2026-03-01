import React, { useEffect } from "react";
import clsx from "clsx";
import { Info, CheckCircle, AlertTriangle, XCircle, X } from "lucide-react";

export type AlertVariant = "info" | "success" | "warning" | "error";

export type AlertSize = "sm" | "md";

export interface AlertProps {
  /** The visual style variant of the alert */
  variant?: AlertVariant;
  /** The size of the alert */
  size?: AlertSize;
  /** Optional title for the alert */
  title?: string;
  /** Whether the alert can be dismissed manually */
  dismissible?: boolean;
  /** Callback triggered when the alert is dismissed */
  onDismiss?: () => void;
  /** Whether the alert should automatically dismiss after a duration */
  autoDismiss?: boolean;
  /** Duration in milliseconds before auto-dismissing (default: 5000) */
  duration?: number;
  /** Additional CSS classes */
  className?: string;
  /** Alert content */
  children?: React.ReactNode;
}

/**
 * 💎 Alert: A contextual feedback component for displaying important messages.
 * Optimized for high-density enterprise layouts with full dark mode support.
 */
export const Alert: React.FC<AlertProps> = ({
  variant = "info",
  size = "md",
  title,
  dismissible = false,
  onDismiss,
  autoDismiss = false,
  duration = 5000,
  children,
  className,
}) => {
  const baseClasses = clsx(
    "border border-hd-border dark:border-hd-dark-border rounded-md p-1 mb-1 relative flex items-start gap-1 transition-all duration-200 animate-fade-in",
    {
      "border-l-4 border-l-hd-focus bg-hd-bg-light dark:bg-hd-dark-bg":
        variant === "info",
      "border-l-4 border-l-green-500 bg-green-50 dark:bg-green-900/20":
        variant === "success",
      "border-l-4 border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/20":
        variant === "warning",
      "border-l-4 border-l-red-500 bg-red-50 dark:bg-red-900/20":
        variant === "error",
    },
  );

  const sizeClasses: Record<AlertSize, string> = {
    sm: "text-[8px]",
    md: "text-[9px]",
  };

  const iconClasses = "flex-shrink-0 w-3 h-3 mt-0.5";
  const contentClasses = "flex-1 min-w-0";

  useEffect(() => {
    if (autoDismiss && onDismiss && duration > 0) {
      const timer = setTimeout(() => onDismiss(), duration);
      return () => clearTimeout(timer);
    }
  }, [autoDismiss, onDismiss, duration]);

  const renderIcon = () => {
    const iconProps = { className: iconClasses, size: 12 };
    switch (variant) {
      case "info":
        return (
          <Info {...iconProps} className={clsx(iconClasses, "text-hd-focus")} />
        );
      case "success":
        return (
          <CheckCircle
            {...iconProps}
            className={clsx(iconClasses, "text-green-500")}
          />
        );
      case "warning":
        return (
          <AlertTriangle
            {...iconProps}
            className={clsx(iconClasses, "text-yellow-500")}
          />
        );
      case "error":
        return (
          <XCircle
            {...iconProps}
            className={clsx(iconClasses, "text-red-500")}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={clsx(baseClasses, sizeClasses[size], className)}
      role="alert"
    >
      {renderIcon()}
      <div className={contentClasses}>
        {title && (
          <div className="text-[10px] font-bold text-hd-primary dark:text-hd-dark-text mb-0.5">
            {title}
          </div>
        )}
        <div className="text-hd-primary dark:text-hd-dark-text leading-tight">
          {children}
        </div>
      </div>
      {(dismissible || autoDismiss) && onDismiss && (
        <button
          onClick={onDismiss}
          className="flex-shrink-0 w-3 h-3 text-hd-muted hover:text-hd-primary dark:hover:text-white transition-colors"
          aria-label="Dismiss alert"
        >
          <X size={10} />
        </button>
      )}
    </div>
  );
};

export default Alert;
