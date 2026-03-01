import React, { useEffect } from "react";
import clsx from "clsx";
import { X, Info, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

export type NotificationVariant = "info" | "success" | "warning" | "error";

export interface NotificationProps {
  title: string;
  message?: string;
  variant?: NotificationVariant;
  onClose?: () => void;
  duration?: number;
  className?: string;
}

export const Notification: React.FC<NotificationProps> = ({
  title,
  message,
  variant = "info",
  onClose,
  duration = 5000,
  className,
}) => {
  useEffect(() => {
    if (duration > 0 && onClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const variantClasses = {
    info: "border-hd-focus bg-white dark:bg-slate-900 text-hd-primary dark:text-slate-200",
    success: "border-green-500 bg-white dark:bg-slate-900 text-hd-primary dark:text-slate-200",
    warning: "border-yellow-500 bg-white dark:bg-slate-900 text-hd-primary dark:text-slate-200",
    error: "border-red-500 bg-white dark:bg-slate-900 text-hd-primary dark:text-slate-200",
  };

  const iconColorClasses = {
    info: "text-hd-focus",
    success: "text-green-500",
    warning: "text-yellow-500",
    error: "text-red-500",
  };

  const renderIcon = () => {
    const props = { size: 14, className: iconColorClasses[variant] };
    switch (variant) {
      case "success": return <CheckCircle {...props} />;
      case "warning": return <AlertTriangle {...props} />;
      case "error": return <XCircle {...props} />;
      default: return <Info {...props} />;
    }
  };

  return (
    <div
      className={clsx(
        "flex items-start gap-2 p-2 border-l-4 rounded shadow-lg transition-all animate-in slide-in-from-right-5",
        variantClasses[variant],
        className
      )}
      role="alert"
    >
      <div className="flex-shrink-0 mt-0.5">{renderIcon()}</div>
      <div className="flex-1 min-w-0">
        <h4 className="text-[11px] font-bold leading-tight">{title}</h4>
        {message && (
          <p className="text-[10px] text-hd-muted dark:text-slate-400 mt-0.5 leading-snug">
            {message}
          </p>
        )}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 text-hd-muted hover:text-hd-primary dark:hover:text-white transition-colors"
        >
          <X size={12} />
        </button>
      )}
    </div>
  );
};
