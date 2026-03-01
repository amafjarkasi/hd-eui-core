import React from "react";
import clsx from "clsx";

export type ModalSize = "sm" | "md" | "lg";

export interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  size?: ModalSize;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  open = false,
  onClose,
  title,
  children,
  footer,
  size = "md",
  className,
}) => {
  if (!open) return null;

  const overlayClasses =
    "fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50";
  const modalClasses = clsx(
    "bg-hd-bg-light dark:bg-hd-dark-bg border border-hd-border dark:border-hd-dark-border rounded-md overflow-hidden shadow-lg max-w-[90vw] max-h-[90vh]",
    {
      "w-80": size === "sm",
      "w-96": size === "md",
      "w-full max-w-4xl": size === "lg",
    },
    className,
  );

  const headerClasses =
    "px-2 py-1.5 border-b border-hd-border dark:border-hd-dark-border bg-hd-bg-dark dark:bg-hd-dark-bg-alt flex justify-between items-center";
  const titleClasses =
    "text-[11px] font-bold text-hd-primary dark:text-hd-dark-text flex-1";
  const closeClasses =
    "text-[9px] text-hd-muted dark:text-hd-dark-text-muted hover:text-hd-primary dark:hover:text-white cursor-pointer ml-1";

  const bodyClasses =
    "p-2 overflow-y-auto max-h-[60vh] text-[10px] dark:text-hd-dark-text";
  const footerClasses =
    "px-1.5 py-0.5 border-t border-hd-border dark:border-hd-dark-border bg-hd-bg-light dark:bg-hd-dark-bg flex justify-end space-x-0.5";

  return (
    <div className={overlayClasses} onClick={onClose}>
      <div className={modalClasses} onClick={(e) => e.stopPropagation()}>
        {title && (
          <div className={headerClasses}>
            <h3 className={titleClasses}>{title}</h3>
            {onClose && (
              <button onClick={onClose} className={closeClasses}>
                ×
              </button>
            )}
          </div>
        )}
        <div className={bodyClasses}>{children}</div>
        {footer && <div className={footerClasses}>{footer}</div>}
      </div>
    </div>
  );
};
