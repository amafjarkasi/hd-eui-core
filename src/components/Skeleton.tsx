import React from "react";
import clsx from "clsx";

export type SkeletonVariant =
  | "text"
  | "rectangle"
  | "circle"
  | "avatar"
  | "square"
  | "paragraph";
export type SkeletonAnimation = "pulse" | "wave";

export interface SkeletonProps {
  variant?: SkeletonVariant;
  animation?: SkeletonAnimation;
  className?: string;
  width?: string;
  height?: string;
  lines?: number; // For paragraph variant
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = "rectangle",
  animation = "pulse",
  className,
  width,
  height,
  lines = 3,
}) => {
  const baseClasses =
    "bg-hd-bg-dark dark:bg-slate-800 border border-hd-border dark:border-slate-700";
  const animationClasses: Record<SkeletonAnimation, string> = {
    pulse: "animate-pulse",
    wave: "relative overflow-hidden",
  };
  const variantClasses: Record<SkeletonVariant, string> = {
    text: "h-4 w-full rounded",
    rectangle: "rounded-md",
    circle: "rounded-full",
    avatar: "rounded-full w-8 h-8", // Compact avatar size
    square: "rounded-md aspect-square",
    paragraph: "space-y-1",
  };

  const classes = clsx(baseClasses, animationClasses[animation], className);
  const style = width || height ? { width, height } : {};

  if (variant === "paragraph") {
    return (
      <div className={clsx(variantClasses.paragraph)}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={clsx(
              baseClasses,
              animationClasses[animation],
              "h-2 rounded",
              i === lines - 1 ? "w-3/4" : "w-full", // Last line shorter
            )}
          />
        ))}
      </div>
    );
  }

  if (animation === "wave") {
    return (
      <div className={clsx(classes, "relative")}>
        <div className={variantClasses[variant]} style={style} />
        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    );
  }

  return (
    <div className={clsx(classes, variantClasses[variant])} style={style} />
  );
};
