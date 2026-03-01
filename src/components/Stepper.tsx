import React, { useState } from "react";
import clsx from "clsx";

export interface StepperStep {
  label: string;
  completed?: boolean;
}

export interface StepperProps {
  steps: StepperStep[];
  currentStep?: number;
  onStepClick?: (index: number) => void;
  className?: string;
  vertical?: boolean;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep = 0,
  onStepClick,
  className,
  vertical = false,
}) => {
  const [active, setActive] = useState(currentStep);

  const handleStepClick = (index: number) => {
    setActive(index);
    onStepClick?.(index);
  };

  const containerClasses = clsx(
    "flex gap-0.5",
    vertical ? "flex-col items-start" : "flex-row items-center",
    className,
  );

  const stepItemClasses = clsx(
    "flex items-center gap-0.5 cursor-pointer",
    vertical ? "mb-0.5" : "",
  );

  const circleClasses = (isActive: boolean, completed: boolean) =>
    clsx(
      "w-2 h-2 rounded-full border border-hd-border flex items-center justify-center text-[7px] font-bold transition-colors",
      completed
        ? "bg-hd-primary text-white border-hd-primary"
        : isActive
          ? "bg-hd-focus text-white border-hd-focus"
          : "bg-hd-bg-light dark:bg-hd-dark-bg text-hd-muted dark:text-hd-dark-text-muted border-hd-border dark:border-hd-dark-border",
    );

  const labelClasses = (isActive: boolean) =>
    clsx(
      "text-[8px] leading-none",
      isActive
        ? "font-bold text-hd-primary dark:text-hd-dark-text"
        : "text-hd-muted dark:text-hd-dark-text-muted",
    );

  const lineClasses = "flex-1 h-0.5 bg-hd-border dark:bg-hd-dark-border";

  return (
    <div className={containerClasses}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div
            className={stepItemClasses}
            onClick={() => handleStepClick(index)}
          >
            <div
              className={circleClasses(
                active === index,
                step.completed || index < active,
              )}
            >
              {step.completed || index < active ? "✓" : index + 1}
            </div>
            {!vertical && (
              <div className={labelClasses(active === index)}>{step.label}</div>
            )}
          </div>
          {vertical && (
            <div className={labelClasses(active === index)}>{step.label}</div>
          )}
          {!vertical && index < steps.length - 1 && (
            <div className={lineClasses} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
