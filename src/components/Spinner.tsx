import React from "react";
import clsx from "clsx";

export type SpinnerSize = "sm" | "md" | "lg";
export type SpinnerColor =
  | "primary"
  | "focus"
  | "muted"
  | "success"
  | "warning"
  | "error";

export interface SpinnerProps {
  size?: SpinnerSize;
  color?: SpinnerColor;
  animation?: "spin" | "pulse" | "bounce";
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  color = "focus",
  animation = "spin",
  className,
}) => {
  const baseClasses = "rounded-full border-solid";
  const animationClasses = {
    spin: "animate-spin border-b-2",
    pulse: "animate-pulse border-2",
    bounce: "animate-bounce border-2",
  };
  const sizeClasses: Record<SpinnerSize, string> = {
    sm: "h-2 w-2 border-[1px]",
    md: "h-3 w-3 border-[1.5px]",
    lg: "h-4 w-4 border-2",
  };
  const colorClasses: Record<SpinnerColor, string> = {
    primary: "border-hd-primary bg-transparent dark:border-hd-primary",
    focus: "border-hd-focus bg-transparent dark:border-hd-focus",
    muted: "border-hd-muted bg-transparent dark:border-hd-muted",
    success: "border-green-500 bg-transparent dark:border-green-400",
    warning: "border-yellow-500 bg-transparent dark:border-yellow-400",
    error: "border-red-500 bg-transparent dark:border-red-400",
  };

  const classes = clsx(
    baseClasses,
    animationClasses[animation],
    sizeClasses[size],
    colorClasses[color],
    className,
  );

  return <div className={classes} />;
};
