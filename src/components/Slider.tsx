import React from "react";
import clsx from "clsx";

export interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Slider: React.FC<SliderProps> = ({
  label,
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  className,
  disabled,
  ...props
}) => {
  return (
    <div className={clsx("flex flex-col gap-1 w-full", className)}>
      {label && (
        <div className="flex justify-between items-center">
          <label className="text-[8px] font-bold text-hd-primary dark:text-slate-400 uppercase tracking-tight">
            {label}
          </label>
          <span className="text-[9px] font-mono text-hd-focus dark:text-hd-focus">
            {value}
          </span>
        </div>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={clsx(
          "w-full h-1 bg-hd-bg-dark dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-hd-focus",
          disabled && "opacity-50 cursor-not-allowed"
        )}
        {...props}
      />
    </div>
  );
};
