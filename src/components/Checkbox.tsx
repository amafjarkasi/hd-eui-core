import React from "react";
import clsx from "clsx";
import { Check } from "lucide-react";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
  disabled = false,
  className,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    onChange?.(e.target.checked);
  };

  const boxClasses = clsx(
    "flex items-center justify-center w-3 h-3 rounded border transition-all duration-200",
    checked
      ? "bg-hd-primary border-hd-primary dark:bg-hd-primary dark:border-hd-primary"
      : "bg-hd-bg-light dark:bg-slate-900 border-hd-border dark:border-slate-700",
    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:border-hd-focus",
  );

  return (
    <label className={clsx("inline-flex items-center gap-1.5 select-none", disabled ? "cursor-not-allowed" : "cursor-pointer", className)}>
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          {...props}
        />
        <div className={boxClasses}>
          {checked && <Check size={10} className="text-white" strokeWidth={3} />}
        </div>
      </div>
      {label && (
        <span className="text-[10px] font-medium text-hd-primary dark:text-slate-200 leading-none">
          {label}
        </span>
      )}
    </label>
  );
};
