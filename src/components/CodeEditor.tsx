import React, { useState } from "react";
import clsx from "clsx";
import { Copy, Check } from "lucide-react";

export interface CodeEditorProps {
  code: string;
  language?: string;
  editable?: boolean;
  onChange?: (code: string) => void;
  className?: string;
  maxHeight?: string;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
  code,
  language = "javascript",
  editable = false,
  onChange,
  className,
  maxHeight = "300px",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const baseClasses =
    "relative flex flex-col w-full border border-hd-border dark:border-slate-700 rounded-md bg-hd-bg-dark dark:bg-slate-950 overflow-hidden font-mono text-[10px]";

  return (
    <div className={clsx(baseClasses, className)}>
      {/* Header */}
      <div className="flex items-center justify-between px-2 py-1 bg-hd-bg-light dark:bg-slate-900 border-b border-hd-border dark:border-slate-700">
        <span className="text-[9px] font-bold text-hd-muted uppercase tracking-widest">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="p-0.5 hover:bg-hd-bg-dark dark:hover:bg-slate-800 rounded text-hd-muted transition-colors"
          title="Copy code"
        >
          {copied ? (
            <Check size={10} className="text-green-500" />
          ) : (
            <Copy size={10} />
          )}
        </button>
      </div>

      {/* Editor/Viewer */}
      <div className="relative flex-1 overflow-auto" style={{ maxHeight }}>
        {editable ? (
          <textarea
            value={code}
            onChange={(e) => onChange?.(e.target.value)}
            className="w-full h-full p-2 bg-transparent outline-none resize-none text-hd-primary dark:text-slate-300 whitespace-pre"
            spellCheck={false}
          />
        ) : (
          <pre className="p-2 text-hd-primary dark:text-slate-300 whitespace-pre-wrap break-all">
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
};
