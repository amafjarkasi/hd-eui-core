import React, { useId } from "react";
import clsx from "clsx";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  /** Label text for the input */
  label?: string;
  /** Optional helper text displayed below the input */
  helperText?: string;
  /** Error message. If provided, the input will be styled with an error border */
  error?: string;
  /** The visual size of the input */
  size?: InputSize;
  /** Optional icon to display on the left side of the input */
  icon?: React.ReactNode;
  /** Optional element to display on the right side of the input */
  rightElement?: React.ReactNode;
  /** Container class name */
  containerClassName?: string;
}

/**
 * HD-EUI Elite Input
 * A high-density, precision-styled input component optimized for enterprise data entry.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      size = "md",
      icon,
      rightElement,
      className,
      disabled,
      id: customId,
      containerClassName,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const id = customId || generatedId;

    const sizeClasses: Record<InputSize, string> = {
      sm: "px-1 py-0.5 text-[9px] min-h-[20px]",
      md: "px-1.5 py-1 text-[10px] min-h-[24px]",
      lg: "px-2 py-1.5 text-[11px] min-h-[28px]",
    };

    const inputBaseClasses = clsx(
      "w-full bg-hd-bg-light dark:bg-hd-dark-bg",
      "text-hd-primary dark:text-hd-dark-text",
      "border border-hd-border dark:border-hd-dark-border",
      "rounded-sm transition-all duration-150",
      "placeholder:text-hd-muted dark:placeholder:text-hd-dark-text-muted",
      "focus:outline-none focus:ring-1 focus:ring-hd-focus focus:border-hd-focus",
      disabled &&
        "opacity-50 cursor-not-allowed bg-hd-bg-dark dark:bg-hd-dark-bg-alt",
      error &&
        "border-hd-error focus:ring-hd-error focus:border-hd-error dark:border-red-500",
      icon && "pl-5",
      rightElement && "pr-5",
    );

    return (
      <div className={clsx("flex flex-col gap-0.5 w-full", containerClassName)}>
        {label && (
          <label
            htmlFor={id}
            className="text-[8px] font-bold text-hd-primary dark:text-hd-dark-text-muted uppercase tracking-tight select-none"
          >
            {label}
          </label>
        )}

        <div className="relative flex items-center">
          {icon && (
            <div className="absolute left-1.5 flex items-center justify-center text-hd-muted pointer-events-none">
              {icon}
            </div>
          )}

          <input
            id={id}
            ref={ref}
            disabled={disabled}
            className={clsx(inputBaseClasses, sizeClasses[size], className)}
            {...props}
          />

          {rightElement && (
            <div className="absolute right-1.5 flex items-center justify-center">
              {rightElement}
            </div>
          )}
        </div>

        {(error || helperText) && (
          <span
            className={clsx(
              "text-[8px] leading-tight",
              error
                ? "text-hd-error dark:text-red-400"
                : "text-hd-muted dark:text-hd-dark-text-muted",
            )}
          >
            {error || helperText}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
