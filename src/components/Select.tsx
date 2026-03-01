import React from "react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  options: SelectOption[];
  label?: string;
  value?: string | number;
  onChange?: (value: string | number) => void;
  error?: string;
  size?: "sm" | "md" | "lg";
}

export const Select: React.FC<SelectProps> = ({
  options,
  label,
  value,
  onChange,
  error,
  size = "md",
  className,
  disabled,
  ...props
}) => {
  const baseClasses = clsx(
    "appearance-none w-full bg-hd-bg-light dark:bg-slate-900 text-hd-primary dark:text-slate-200 border border-hd-border dark:border-slate-700 rounded-md transition-all focus:outline-none focus:ring-1 focus:ring-hd-focus focus:border-hd-focus pr-6",
    disabled && "opacity-50 cursor-not-allowed bg-hd-bg-dark dark:bg-slate-800",
    error && "border-red-500 focus:ring-red-500 focus:border-red-500"
  );

  const sizeClasses = {
    sm: "px-1 py-0.5 text-[9px] min-h-[20px]",
    md: "px-2 py-1 text-[10px] min-h-[24px]",
    lg: "px-2.5 py-1.5 text-[11px] min-h-[28px]",
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    onChange?.(val);
  };

  return (
    <div className={clsx("flex flex-col gap-0.5 w-full", className)}>
      {label && (
        <label className="text-[8px] font-bold text-hd-primary dark:text-slate-400 uppercase tracking-tight">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          className={clsx(baseClasses, sizeClasses[size])}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-1.5 pointer-events-none text-hd-muted">
          <ChevronDown size={10} />
        </div>
      </div>
      {error && <span className="text-[8px] text-red-500 mt-0.5">{error}</span>}
    </div>
  );
};
