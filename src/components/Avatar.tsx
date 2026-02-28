import React from "react";
import clsx from "clsx";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface AvatarProps {
  src?: string;
  name: string;
  size?: AvatarSize;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  size = "md",
  className,
}) => {
  const sizeClasses: Record<AvatarSize, string> = {
    xs: "w-4 h-4 text-[6px]",
    sm: "w-6 h-6 text-[8px]",
    md: "w-8 h-8 text-[9px]",
    lg: "w-10 h-10 text-[10px]",
    xl: "w-12 h-12 text-[11px]",
  };

  const baseClasses = clsx(
    "rounded-full border border-hd-border bg-hd-bg-light text-hd-primary flex items-center justify-center overflow-hidden",
    sizeClasses[size],
    className,
  );

  const initials = name
    .trim()
    .split(/\s+/)
    .filter((part) => part.length > 0)
    .map((part) => part.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");

  return (
    <div className="relative">
      {src && (
        <img
          src={src}
          alt={name}
          className={baseClasses}
          onError={(e) => {
            const imgElement = e.currentTarget;
            imgElement.style.display = "none";
            const fallback = imgElement.nextSibling as HTMLElement;
            if (fallback) {
              fallback.style.display = "flex";
            }
          }}
        />
      )}
      <div className={clsx(baseClasses, src ? "hidden" : "")}>{initials}</div>
    </div>
  );
};
