import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { GripVertical, X, Maximize2, Minimize2 } from "lucide-react";

export interface DraggablePanelProps {
  title?: string;
  defaultPosition?: { x: number; y: number };
  defaultSize?: { width: number; height: number };
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const DraggablePanel: React.FC<DraggablePanelProps> = ({
  title,
  defaultPosition = { x: 100, y: 100 },
  defaultSize = { width: 300, height: 400 },
  onClose,
  children,
  className,
}) => {
  const [position, setPosition] = useState(defaultPosition);
  const [size, setSize] = useState(defaultSize);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const resizeStartSize = useRef({ width: 0, height: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".drag-handle")) {
      setIsDragging(true);
      dragStartPos.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    }
  };

  const handleResizeMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsResizing(true);
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    resizeStartSize.current = { width: size.width, height: size.height };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragStartPos.current.x,
          y: e.clientY - dragStartPos.current.y,
        });
      }
      if (isResizing) {
        const deltaX = e.clientX - dragStartPos.current.x;
        const deltaY = e.clientY - dragStartPos.current.y;
        setSize({
          width: Math.max(200, resizeStartSize.current.width + deltaX),
          height: Math.max(100, resizeStartSize.current.height + deltaY),
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, isResizing]);

  return (
    <div
      ref={panelRef}
      className={clsx(
        "fixed z-50 flex flex-col bg-hd-bg-light dark:bg-slate-900 border border-hd-border dark:border-slate-700 rounded-md shadow-xl overflow-hidden transition-shadow",
        isDragging && "shadow-2xl ring-1 ring-hd-focus",
        className
      )}
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        height: isMinimized ? "auto" : size.height,
      }}
      onMouseDown={handleMouseDown}
    >
      {/* Header */}
      <div className="drag-handle flex items-center justify-between px-2 py-1 bg-hd-bg-dark dark:bg-slate-800 border-b border-hd-border dark:border-slate-700 cursor-move select-none">
        <div className="flex items-center gap-1">
          <GripVertical size={10} className="text-hd-muted" />
          <span className="text-[10px] font-bold text-hd-primary dark:text-slate-200 uppercase tracking-tight">
            {title || "Panel"}
          </span>
        </div>
        <div className="flex items-center gap-0.5">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-0.5 hover:bg-hd-bg-light dark:hover:bg-slate-700 rounded text-hd-muted"
          >
            {isMinimized ? <Maximize2 size={10} /> : <Minimize2 size={10} />}
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="p-0.5 hover:bg-red-50 dark:hover:bg-red-900/20 rounded text-hd-muted hover:text-red-500"
            >
              <X size={10} />
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      {!isMinimized && (
        <div className="flex-1 overflow-auto p-2 dark:text-slate-300 text-[11px]">
          {children}
        </div>
      )}

      {/* Resize Handle */}
      {!isMinimized && (
        <div
          className="absolute bottom-0 right-0 w-3 h-3 cursor-nwse-resize"
          onMouseDown={handleResizeMouseDown}
          style={{
            background: "linear-gradient(135deg, transparent 50%, #d8dcde 50%)",
          }}
        />
      )}
    </div>
  );
};
