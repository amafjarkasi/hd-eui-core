import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X } from "lucide-react";

export interface DateRange {
  start: Date | null;
  end: Date | null;
}

export interface DateRangePickerProps {
  value?: DateRange;
  onChange?: (range: DateRange) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  value,
  onChange,
  placeholder = "Select date range",
  className,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [internalRange, setInternalRange] = useState<DateRange>(
    value || { start: null, end: null }
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value) setInternalRange(value);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "2-digit" });
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const handleDayClick = (day: number) => {
    const clickedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    let newRange: DateRange;

    if (!internalRange.start || (internalRange.start && internalRange.end)) {
      newRange = { start: clickedDate, end: null };
    } else {
      if (clickedDate < internalRange.start) {
        newRange = { start: clickedDate, end: internalRange.start };
      } else {
        newRange = { ...internalRange, end: clickedDate };
      }
    }

    setInternalRange(newRange);
    if (newRange.start && newRange.end) {
      onChange?.(newRange);
      setIsOpen(false);
    }
  };

  const isSelected = (day: number) => {
    const d = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return (
      (internalRange.start && d.getTime() === internalRange.start.getTime()) ||
      (internalRange.end && d.getTime() === internalRange.end.getTime())
    );
  };

  const isInRange = (day: number) => {
    if (!internalRange.start || !internalRange.end) return false;
    const d = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return d > internalRange.start && d < internalRange.end;
  };

  const { firstDay, daysInMonth } = getDaysInMonth(currentMonth);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDay }, (_, i) => i);

  return (
    <div ref={containerRef} className={clsx("relative inline-block w-full", className)}>
      <div
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={clsx(
          "flex items-center gap-1 px-2 py-1 border border-hd-border dark:border-slate-700 rounded bg-hd-bg-light dark:bg-slate-900 cursor-pointer transition-colors",
          disabled && "opacity-50 cursor-not-allowed",
          isOpen && "ring-1 ring-hd-focus border-hd-focus"
        )}
      >
        <CalendarIcon size={12} className="text-hd-muted" />
        <span className="flex-1 text-[10px] dark:text-slate-200 truncate">
          {internalRange.start ? (
            `${formatDate(internalRange.start)} ${internalRange.end ? `- ${formatDate(internalRange.end)}` : "..."}`
          ) : (
            <span className="text-hd-muted">{placeholder}</span>
          )}
        </span>
        {internalRange.start && (
          <X
            size={10}
            className="text-hd-muted hover:text-hd-primary"
            onClick={(e) => {
              e.stopPropagation();
              const reset = { start: null, end: null };
              setInternalRange(reset);
              onChange?.(reset);
            }}
          />
        )}
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-1 p-2 bg-hd-bg-light dark:bg-slate-800 border border-hd-border dark:border-slate-700 rounded-md shadow-lg w-56">
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
              className="p-1 hover:bg-hd-bg-dark dark:hover:bg-slate-700 rounded"
            >
              <ChevronLeft size={12} />
            </button>
            <span className="text-[10px] font-bold dark:text-white">
              {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </span>
            <button
              onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
              className="p-1 hover:bg-hd-bg-dark dark:hover:bg-slate-700 rounded"
            >
              <ChevronRight size={12} />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-px mb-1">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
              <div key={d} className="text-center text-[8px] font-bold text-hd-muted uppercase">
                {d}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-px">
            {blanks.map((b) => <div key={`b-${b}`} />)}
            {days.map((d) => (
              <div
                key={d}
                onClick={() => handleDayClick(d)}
                className={clsx(
                  "text-center text-[9px] py-1 cursor-pointer rounded-sm transition-colors",
                  isSelected(d)
                    ? "bg-hd-focus text-white font-bold"
                    : isInRange(d)
                    ? "bg-blue-50 dark:bg-blue-900/30 text-hd-primary dark:text-blue-200"
                    : "hover:bg-hd-bg-dark dark:hover:bg-slate-700 dark:text-slate-300"
                )}
              >
                {d}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
