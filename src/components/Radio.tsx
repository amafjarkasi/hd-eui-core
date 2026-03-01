import React from "react";
import clsx from "clsx";

export interface RadioOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface RadioProps {
  name: string;
  options: RadioOption[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
  inline?: boolean;
}

export const Radio: React.FC<RadioProps> = ({
  name,
  options,
  value,
  onChange,
  label,
  disabled = false,
  className,
  inline = true,
}) => {
  return (
    <div className={clsx("flex flex-col gap-1", className)}>
      {label && (
        <label className="text-[8px] font-bold text-hd-primary dark:text-slate-400 uppercase tracking-tight">
          {label}
        </label>
      )}
      <div className={clsx("flex gap-2", inline ? "flex-row flex-wrap" : "flex-col")}>
        {options.map((option) => {
          const isChecked = value === option.value;
          const isOptionDisabled = disabled || option.disabled;

          return (
            <label
              key={option.value}
              className={clsx(
                "flex items-center gap-1 cursor-pointer select-none group",
                isOptionDisabled && "opacity-50 cursor-not-allowed"
              )}
            >
              <div className="relative flex items-center justify-center">
                <input
                  type="radio"
                  name={name}
                  value={option.value}
                  checked={isChecked}
                  onChange={() => !isOptionDisabled && onChange?.(option.value)}
                  disabled={isOptionDisabled}
                  className="sr-only"
                />
                <div
                  className={clsx(
                    "w-3 h-3 rounded-full border transition-all",
                    isChecked
                      ? "border-hd-focus bg-hd-focus"
                      : "border-hd-border dark:border-slate-700 bg-hd-bg-light dark:bg-slate-900 group-hover:border-hd-muted",
                    isOptionDisabled && "bg-hd-bg-dark dark:bg-slate-800"
                  )}
                >
                  {isChecked && (
                    <div className="absolute inset-0 m-auto w-1 h-1 bg-white rounded-full" />
                  )}
                </div>
              </div>
              <span className="text-[10px] text-hd-primary dark:text-slate-300">
                {option.label}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};
