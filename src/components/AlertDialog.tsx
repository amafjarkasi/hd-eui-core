import React from "react";
import clsx from "clsx";
import { Button } from "./Button";
import { Modal } from "./Modal";

export interface AlertDialogAction {
  label: string;
  variant?: "primary" | "secondary";
  onClick: () => void;
  disabled?: boolean;
}

export interface AlertDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  message: string;
  actions?: AlertDialogAction[];
  className?: string;
}

export const AlertDialog: React.FC<AlertDialogProps> = ({
  open,
  onOpenChange,
  title,
  message,
  actions = [],
  className,
}) => {
  const handleClose = () => onOpenChange(false);

  return (
    <Modal open={open} onClose={handleClose} size="sm" className={className}>
      <div className="px-2 py-1 dark:bg-hd-dark-bg">
        <h3 className="text-[11px] font-bold text-hd-primary dark:text-hd-dark-text mb-1">
          {title}
        </h3>
        <p className="text-[10px] text-hd-muted dark:text-hd-dark-text-muted mb-2">
          {message}
        </p>
        <div className="flex gap-1 justify-end">
          {actions.length > 0 ? (
            actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant || "secondary"}
                size="sm"
                onClick={action.onClick}
                disabled={action.disabled}
                className="px-2 py-1 text-[9px]"
              >
                {action.label}
              </Button>
            ))
          ) : (
            <Button
              variant="primary"
              size="sm"
              onClick={handleClose}
              className="px-2 py-1 text-[9px]"
            >
              OK
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};
