import React, { useState } from "react";
import clsx from "clsx";
import { ChevronDown, ChevronRight, Folder, FileText } from "lucide-react";

export interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
  disabled?: boolean;
  icon?: React.ReactElement;
  type?: "folder" | "file";
}

export interface TreeProps {
  nodes: TreeNode[];
  onSelect?: (node: TreeNode) => void;
  defaultExpanded?: boolean;
  className?: string;
  showIcons?: boolean;
}

export const Tree: React.FC<TreeProps> = ({
  nodes,
  onSelect,
  defaultExpanded = false,
  className,
  showIcons = true,
}) => {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(
    new Set(nodes.filter((node) => defaultExpanded).map((node) => node.id)),
  );

  const toggleExpanded = (nodeId: string) => {
    setExpandedNodes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId);
      } else {
        newSet.add(nodeId);
      }
      return newSet;
    });
  };

  const handleSelect = (node: TreeNode) => {
    if (!node.disabled) {
      onSelect?.(node);
    }
  };

  const renderNode = (node: TreeNode, level: number = 0): JSX.Element => {
    const isExpanded = expandedNodes.has(node.id);
    const hasChildren = node.children && node.children.length > 0;

    const renderIcon = () => {
      if (node.icon) return node.icon;
      if (!showIcons) return null;

      if (node.type === "folder" || hasChildren) {
        return <Folder size={10} className="text-hd-focus opacity-70" />;
      }
      return <FileText size={10} className="text-hd-muted opacity-70" />;
    };

    return (
      <div key={node.id} className="tree-node select-none">
        <div
          className={clsx(
            "flex items-center px-1 py-0.5 text-[9px] text-hd-primary dark:text-slate-300 cursor-pointer hover:bg-hd-bg-dark dark:hover:bg-slate-800 transition-colors",
            "focus:outline-none focus:ring-1 focus:ring-hd-focus",
            node.disabled && "opacity-50 cursor-not-allowed",
          )}
          style={{ paddingLeft: `${level * 10 + 4}px` }}
          onClick={() => handleSelect(node)}
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleSelect(node)}
        >
          <div className="w-3 h-3 flex items-center justify-center mr-0.5">
            {hasChildren && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleExpanded(node.id);
                }}
                className="p-0.5 text-hd-muted hover:text-hd-primary transition-colors"
              >
                {isExpanded ? (
                  <ChevronDown size={8} strokeWidth={3} />
                ) : (
                  <ChevronRight size={8} strokeWidth={3} />
                )}
              </button>
            )}
          </div>

          <div className="flex items-center gap-1">
            {renderIcon()}
            <span
              className={clsx(
                "truncate",
                !hasChildren && !node.icon && !showIcons && "ml-3",
              )}
            >
              {node.label}
            </span>
          </div>
        </div>
        {hasChildren && isExpanded && (
          <div className="animate-fade-in">
            {node.children!.map((child) => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={clsx(
        "tree border border-hd-border dark:border-slate-700 rounded-md overflow-hidden bg-hd-bg-light dark:bg-slate-900",
        className,
      )}
    >
      {nodes.map((node) => renderNode(node))}
    </div>
  );
};
