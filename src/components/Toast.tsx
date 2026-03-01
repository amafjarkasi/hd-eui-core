import React, { useEffect } from "react";
import clsx from "clsx";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";

export type ToastVariant = "success" | "error" | "info" | "warning";

export interface ToastProps {
  message: string;
  variant?: ToastVariant;
  duration?: number;
  onClose?: () => void;
  className?: string;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  variant = "info",
  duration = 5000,
  onClose,
  className,
}) => {
  useEffect(() => {
    if (duration > 0 && onClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const variantClasses = {
    success: "bg-green-500 text-white",
    error: "bg-red-50 text-red-800 border-red-200 dark:bg-red-900 dark:text-red-100 dark:border-red-800",
    info: "bg-hd-primary text-white",
    warning: "bg-yellow-50 text-yellow-800 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-100 dark:border-yellow-800",
  };

  const Icon = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info,
    warning: AlertTriangle,
  }[variant];

  return (
    <div
      className={clsx(
        "flex items-center gap-2 px-3 py-2 rounded-md shadow-lg border border-transparent transition-all animate-in fade-in slide-in-from-top-2",
        variantClasses[variant],
        className
      )}
      role="alert"
    >
      <Icon size={14} className="flex-shrink-0" />
      <span className="text-[10px] font-medium flex-1">{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="p-0.5 hover:bg-black/10 rounded transition-colors"
          aria-label="Close"
        >
          <X size={12} />
        </button>
      )}
    </div>
  );
};
