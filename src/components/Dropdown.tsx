import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { colors } from "../theme";

export type DropdownPlacement =
  | "bottom-left"
  | "bottom-right"
  | "top-left"
  | "top-right";

export interface DropdownOption {
  label: string;
  value: any;
  disabled?: boolean;
}

export interface DropdownProps {
  trigger: React.ReactNode;
  options: DropdownOption[];
  onSelect?: (value: any) => void;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  placement?: DropdownPlacement;
  className?: string;
  disabled?: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  options,
  onSelect,
  isOpen: controlledOpen,
  onOpenChange,
  placement = "bottom-left",
  className,
  disabled = false,
}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;
  const setOpen = (value: boolean) => {
    if (!isControlled) setUncontrolledOpen(value);
    onOpenChange?.(value);
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, setOpen]);

  const handleToggle = () => {
    if (disabled) return;
    setOpen(!open);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;
    switch (event.key) {
      case "Enter":
      case " ":
        setOpen(!open);
        break;
      case "Escape":
        setOpen(false);
        break;
    }
  };

  const handleOptionKeyDown = (
    event: React.KeyboardEvent,
    option: DropdownOption,
  ) => {
    switch (event.key) {
      case "Enter":
        handleSelect(option);
        break;
      case "Escape":
        setOpen(false);
        break;
    }
  };

  const handleSelect = (option: DropdownOption) => {
    if (option.disabled) return;
    onSelect?.(option.value);
    setOpen(false);
  };

  const menuClasses = clsx(
    "absolute z-50 bg-hd-bg-light border border-hd-border rounded-md shadow-sm max-h-48 overflow-auto py-0.5",
    {
      "top-full left-0": placement === "bottom-left",
      "top-full right-0": placement === "bottom-right",
      "bottom-full left-0": placement === "top-left",
      "bottom-full right-0": placement === "top-right",
    },
    open ? "block" : "hidden",
  );

  const itemClasses = clsx(
    "px-2 py-1 text-[10px] text-hd-primary hover:bg-hd-bg-dark cursor-pointer",
    "focus:outline-none focus:ring-2 focus:ring-hd-focus",
  );

  const disabledItemClasses = "text-hd-muted cursor-not-allowed";

  return (
    <div ref={dropdownRef} className={clsx("relative inline-block", className)}>
      <div
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className={
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        }
        tabIndex={disabled ? -1 : 0}
        role="button"
        aria-expanded={open}
        aria-haspopup="menu"
      >
        {trigger}
      </div>
      <div className={menuClasses} role="menu">
        {options.map((option, index) => (
          <div
            key={index}
            className={clsx(
              itemClasses,
              option.disabled && disabledItemClasses,
            )}
            onClick={() => handleSelect(option)}
            onKeyDown={(e) => handleOptionKeyDown(e, option)}
            tabIndex={option.disabled ? -1 : 0}
            role="menuitem"
            aria-disabled={option.disabled}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};
