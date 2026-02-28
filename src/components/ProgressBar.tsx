import React from "react";

interface ProgressBarProps {
  value?: number;
  indeterminate?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value = 0,
  indeterminate = false,
  variant = "primary",
  showLabel = false,
  className,
}) => {
  const variantClasses = {
    primary: "bg-hd-primary",
    success: "bg-green-500",
    danger: "bg-red-500",
  };

  return (
    <div
      className={`w-full h-2 bg-hd-bg-dark rounded-md overflow-hidden ${className}`}
    >
      <div
        className={`h-full transition-all duration-300 ease-in-out ${variantClasses[variant]} ${indeterminate ? "animate-pulse" : ""}`}
        style={{
          width: indeterminate ? "60%" : `${Math.min(value, 100)}%`,
          transformOrigin: indeterminate ? "center" : undefined,
        }}
      />
      {showLabel && (
        <div className="text-[9px] text-hd-muted mt-1">
          {indeterminate ? "Loading..." : `${Math.round(value)}%`}
        </div>
      )}
    </div>
  );
};
