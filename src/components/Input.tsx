import React from "react";
import clsx from "clsx";
import { colors } from "../theme";

export interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  label?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  size = "md",
  disabled = false,
  className,
  ...props
}) => {
  const baseClasses =
    "bg-hd-bg-light text-hd-primary border-hd-border rounded-md transition-colors focus:outline-none focus:ring-1 focus:ring-hd-focus focus:border-hd-focus";
  const sizeClasses: Record<NonNullable<InputProps["size"]>, string> = {
    sm: "px-1 py-0.5 text-[9px] leading-tight",
    md: "px-2 py-1 text-[10px] leading-none",
    lg: "px-3 py-1.5 text-[11px] leading-tight",
  };
  const disabledClasses = "opacity-50 cursor-not-allowed";

  const inputClasses = clsx(
    baseClasses,
    sizeClasses[size],
    disabled && disabledClasses,
    className,
  );

  return (
    <div className="flex flex-col space-y-0.5">
      {label && (
        <label className="text-[8px] font-bold text-hd-primary">{label}</label>
      )}
      <input className={inputClasses} disabled={disabled} {...props} />
    </div>
  );
};
