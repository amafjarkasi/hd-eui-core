import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { X, ChevronDown, Check } from "lucide-react";

export interface MultiSelectOption {
  label: string;
  value: string | number;
}

export interface MultiSelectProps {
  options: MultiSelectOption[];
  value?: (string | number)[];
  onChange?: (value: (string | number)[]) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  value = [],
  onChange,
  placeholder = "Select options...",
  label,
  disabled = false,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggleOption = (optionValue: string | number) => {
    const newValue = value.includes(optionValue)
      ? value.filter((v) => v !== optionValue)
      : [...value, optionValue];
    onChange?.(newValue);
  };

  const handleRemoveValue = (e: React.MouseEvent, optionValue: string | number) => {
    e.stopPropagation();
    onChange?.(value.filter((v) => v !== optionValue));
  };

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedOptions = options.filter((opt) => value.includes(opt.value));

  return (
    <div ref={containerRef} className={clsx("flex flex-col gap-0.5 w-full", className)}>
      {label && (
        <label className="text-[8px] font-bold text-hd-primary dark:text-slate-400 uppercase tracking-tight">
          {label}
        </label>
      )}
      <div className="relative">
        <div
          onClick={() => !disabled && setIsOpen(!isOpen)}
          className={clsx(
            "flex flex-wrap items-center gap-1 px-1.5 py-1 min-h-[24px] border border-hd-border dark:border-slate-700 rounded bg-hd-bg-light dark:bg-slate-900 cursor-pointer transition-all",
            disabled && "opacity-50 cursor-not-allowed",
            isOpen && "ring-1 ring-hd-focus border-hd-focus"
          )}
        >
          {selectedOptions.length > 0 ? (
            selectedOptions.map((opt) => (
              <span
                key={opt.value}
                className="inline-flex items-center gap-0.5 px-1 py-0.5 bg-hd-bg-dark dark:bg-slate-800 text-hd-primary dark:text-slate-200 text-[9px] rounded border border-hd-border dark:border-slate-700"
              >
                {opt.label}
                <X
                  size={8}
                  className="hover:text-red-500 cursor-pointer"
                  onClick={(e) => handleRemoveValue(e, opt.value)}
                />
              </span>
            ))
          ) : (
            <span className="text-hd-muted text-[10px]">{placeholder}</span>
          )}
          <div className="flex-1" />
          <ChevronDown size={10} className={clsx("text-hd-muted transition-transform", isOpen && "rotate-180")} />
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 z-50 w-full mt-1 bg-hd-bg-light dark:bg-slate-800 border border-hd-border dark:border-slate-700 rounded-md shadow-lg max-h-48 overflow-auto py-1">
            <div className="px-2 pb-1 border-b border-hd-border dark:border-slate-700 mb-1">
              <input
                type="text"
                className="w-full bg-hd-bg-dark dark:bg-slate-900 text-[10px] px-1.5 py-0.5 rounded outline-none dark:text-white"
                placeholder="Filter..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                autoFocus
              />
            </div>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt) => {
                const isSelected = value.includes(opt.value);
                return (
                  <div
                    key={opt.value}
                    onClick={() => handleToggleOption(opt.value)}
                    className={clsx(
                      "flex items-center justify-between px-2 py-1 text-[10px] cursor-pointer hover:bg-hd-bg-dark dark:hover:bg-slate-700 transition-colors",
                      isSelected ? "text-hd-focus font-bold" : "text-hd-primary dark:text-slate-300"
                    )}
                  >
                    <span>{opt.label}</span>
                    {isSelected && <Check size={10} />}
                  </div>
                );
              })
            ) : (
              <div className="px-2 py-1 text-[10px] text-hd-muted italic text-center">
                No results found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
