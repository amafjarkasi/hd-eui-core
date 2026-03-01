import React, { useState } from "react";
import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CalendarProps {
  value?: Date;
  onChange?: (date: Date) => void;
  className?: string;
}

export const Calendar: React.FC<CalendarProps> = ({
  value = new Date(),
  onChange,
  className,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date(value.getFullYear(), value.getMonth(), 1));

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDateClick = (day: number) => {
    const selectedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    onChange?.(selectedDate);
  };

  const isSelected = (day: number) => {
    return (
      value.getDate() === day &&
      value.getMonth() === currentMonth.getMonth() &&
      value.getFullYear() === currentMonth.getFullYear()
    );
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === currentMonth.getMonth() &&
      today.getFullYear() === currentMonth.getFullYear()
    );
  };

  const { firstDay, daysInMonth } = getDaysInMonth(currentMonth);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDay }, (_, i) => i);

  return (
    <div className={clsx("w-56 p-2 bg-hd-bg-light dark:bg-slate-900 border border-hd-border dark:border-slate-700 rounded-md shadow-sm", className)}>
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={handlePrevMonth}
          className="p-1 hover:bg-hd-bg-dark dark:hover:bg-slate-800 rounded transition-colors dark:text-slate-400"
        >
          <ChevronLeft size={12} />
        </button>
        <span className="text-[10px] font-bold text-hd-primary dark:text-slate-200 uppercase tracking-tight">
          {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </span>
        <button
          onClick={handleNextMonth}
          className="p-1 hover:bg-hd-bg-dark dark:hover:bg-slate-800 rounded transition-colors dark:text-slate-400"
        >
          <ChevronRight size={12} />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-px mb-1">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <div key={d} className="text-center text-[8px] font-bold text-hd-muted dark:text-slate-500 uppercase">
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-px">
        {blanks.map((b) => (
          <div key={`b-${b}`} className="h-6" />
        ))}
        {days.map((d) => (
          <div
            key={d}
            onClick={() => handleDateClick(d)}
            className={clsx(
              "text-center text-[9px] h-6 flex items-center justify-center cursor-pointer rounded-sm transition-all",
              isSelected(d)
                ? "bg-hd-focus text-white font-bold"
                : isToday(d)
                ? "bg-blue-50 dark:bg-blue-900/30 text-hd-focus font-bold border border-hd-focus"
                : "hover:bg-hd-bg-dark dark:hover:bg-slate-800 text-hd-primary dark:text-slate-300"
            )}
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  );
};
