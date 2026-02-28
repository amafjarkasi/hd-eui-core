import React from "react";
import clsx from "clsx";

export type SpinnerSize = "sm" | "md" | "lg";
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
    primary: "border-hd-primary bg-transparent",
    focus: "border-hd-focus bg-transparent",
    muted: "border-hd-muted bg-transparent",
    success: "border-green-500 bg-transparent",
    warning: "border-yellow-500 bg-transparent",
    error: "border-red-500 bg-transparent",
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
