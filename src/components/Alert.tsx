import React, { useEffect } from "react";
import clsx from "clsx";
import { Info, CheckCircle, AlertTriangle, XCircle, X } from "lucide-react";

export type AlertVariant = "info" | "success" | "warning" | "error";

export type AlertSize = "sm" | "md";

export interface AlertProps {
  variant?: AlertVariant;
  size?: AlertSize;
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  autoDismiss?: boolean;
  duration?: number;
  className?: string;
  children?: React.ReactNode;
}

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
  const baseClasses =
    "border border-hd-border rounded-md p-1 mb-1 relative flex items-start gap-1";
  const sizeClasses: Record<AlertSize, string> = {
    sm: "text-[8px]",
    md: "text-[9px]",
  };
  const variantClasses: Record<AlertVariant, string> = {
    info: "border-l-4 border-hd-focus bg-hd-bg-light dark:bg-slate-900 dark:text-slate-200",
    success:
      "border-l-4 border-green-500 text-green-800 bg-green-50 dark:bg-green-900/20 dark:text-green-200",
    warning:
      "border-l-4 border-yellow-500 text-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 dark:text-yellow-200",
    error:
      "border-l-4 border-red-500 text-red-800 bg-red-50 dark:bg-red-900/20 dark:text-red-200",
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
    switch (variant) {
      case "info":
        return <Info className={iconClasses} />;
      case "success":
        return <CheckCircle className={iconClasses} />;
      case "warning":
        return <AlertTriangle className={iconClasses} />;
      case "error":
        return <XCircle className={iconClasses} />;
      default:
        return null;
    }
  };

  const classes = clsx(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className,
  );

  return (
    <div className={classes}>
      {renderIcon()}
      <div className={contentClasses}>
        {title && <div className="text-[10px] font-bold mb-0.5">{title}</div>}
        {children && <div className="text-[8px] leading-tight">{children}</div>}
      </div>
      {(dismissible || autoDismiss) && onDismiss && (
        <button
          onClick={onDismiss}
          className="flex-shrink-0 w-3 h-3 text-[8px] hover:text-hd-primary"
        >
          <X size={8} />
        </button>
      )}
    </div>
  );
};
