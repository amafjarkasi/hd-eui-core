import type { Meta, StoryObj } from '@storybook/react';
import { Tree, TreeNode } from '../components/Tree';
import { useState } from 'react';
import { Database, Folder, FileCode, Shield, Settings } from 'lucide-react';

const meta: Meta<typeof Tree> = {
  title: 'Data Display/Tree',
  component: Tree,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tree>;

const nodes: TreeNode[] = [
  {
    id: 'src',
    label: 'src',
    type: 'folder',
    children: [
      {
        id: 'components',
        label: 'components',
        type: 'folder',
        children: [
          { id: 'button', label: 'Button.tsx', type: 'file' },
          { id: 'input', label: 'Input.tsx', type: 'file' },
          { id: 'table', label: 'Table.tsx', type: 'file' },
        ]
      },
      { id: 'index.ts', label: 'index.ts', type: 'file' },
      { id: 'theme.ts', label: 'theme.ts', type: 'file' },
    ]
  },
  {
    id: 'config',
    label: 'config',
    type: 'folder',
    children: [
      { id: 'tailwind', label: 'tailwind.config.js', type: 'file' },
      { id: 'tsconfig', label: 'tsconfig.json', type: 'file' },
    ]
  },
  { id: 'readme', label: 'README.md', type: 'file' },
];

export const Default: Story = {
  args: {
    nodes,
  },
};

export const ExpandedByDefault: Story = {
  args: {
    nodes,
    defaultExpanded: true,
  },
};

export const CustomIcons: Story = {
  args: {
    nodes: [
      {
        id: 'db',
        label: 'Production Database',
        icon: <Database size={10} className="text-hd-focus" />,
        children: [
          { id: 'users', label: 'Users Table', icon: <Shield size={10} /> },
          { id: 'logs', label: 'System Logs', icon: <FileCode size={10} /> },
        ]
      },
      { id: 'settings', label: 'Global Settings', icon: <Settings size={10} /> },
    ],
    defaultExpanded: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = useState<string | null>(null);
    return (
      <div className="w-64">
        <Tree
          nodes={nodes}
          onSelect={(node) => setSelected(node.id)}
        />
        <div className="mt-2 text-[10px] text-hd-muted">
          Selected Node ID: <span className="font-mono text-hd-focus">{selected || 'None'}</span>
        </div>
      </div>
    );
  },
};
