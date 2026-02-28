import React, { useState } from "react";
import clsx from "clsx";
import { ChevronDown, ChevronRight } from "lucide-react";

export interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
  disabled?: boolean;
  icon?: React.ReactElement;
}

export interface TreeProps {
  nodes: TreeNode[];
  onSelect?: (node: TreeNode) => void;
  defaultExpanded?: boolean;
  className?: string;
}

export const Tree: React.FC<TreeProps> = ({
  nodes,
  onSelect,
  defaultExpanded = false,
  className,
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

    return (
      <div key={node.id} className="tree-node">
        <div
          className={clsx(
            "flex items-center px-1 py-0.5 text-[9px] text-hd-primary cursor-pointer hover:bg-hd-bg-dark transition-colors",
            "focus:outline-none focus:ring-1 focus:ring-hd-focus",
            node.disabled && "opacity-50 cursor-not-allowed",
          )}
          style={{ paddingLeft: `${level * 12 + 4}px` }} // Tighter indent
          onClick={() => handleSelect(node)}
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleSelect(node)}
        >
          {hasChildren && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleExpanded(node.id);
              }}
              className="mr-0.5 p-0.5 text-hd-muted hover:text-hd-primary transition-colors"
            >
              {isExpanded ? (
                <ChevronDown size={8} />
              ) : (
                <ChevronRight size={8} />
              )}
            </button>
          )}
          {node.icon && (
            <span className="mr-0.5 text-hd-muted">{node.icon}</span>
          )}
          <span className={clsx(hasChildren || node.icon ? "ml-0.5" : "ml-2")}>
            {node.label}
          </span>
        </div>
        {hasChildren && isExpanded && (
          <div>
            {node.children!.map((child) => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={clsx(
        "tree border border-hd-border rounded-md overflow-hidden bg-hd-bg-light",
        className,
      )}
    >
      {nodes.map((node) => renderNode(node))}
    </div>
  );
};
