import type { Meta, StoryObj } from '@storybook/react';
import { DraggablePanel } from '../components/DraggablePanel';

const meta: Meta<typeof DraggablePanel> = {
  title: 'Heavyweight/DraggablePanel',
  component: DraggablePanel,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DraggablePanel>;

export const Default: Story = {
  args: {
    title: 'Floating Monitor',
    children: (
      <div className="space-y-2">
        <div className="flex justify-between border-b border-hd-border pb-1">
          <span className="text-hd-muted">CPU Usage</span>
          <span className="font-mono text-hd-focus">42%</span>
        </div>
        <div className="flex justify-between border-b border-hd-border pb-1">
          <span className="text-hd-muted">Memory</span>
          <span className="font-mono text-hd-focus">1.2GB / 16GB</span>
        </div>
        <div className="flex justify-between border-b border-hd-border pb-1">
          <span className="text-hd-muted">Uptime</span>
          <span className="font-mono text-hd-focus">12d 4h 32m</span>
        </div>
        <p className="mt-2 text-[9px] text-hd-muted italic">
          Drag the header to move, or the bottom-right corner to resize this panel.
        </p>
      </div>
    ),
  },
};

export const CustomInitialState: Story = {
  args: {
    title: 'Settings',
    defaultPosition: { x: 400, y: 200 },
    defaultSize: { width: 250, height: 150 },
    children: (
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-1">
          <input type="checkbox" className="w-3 h-3" />
          <span>Enable real-time updates</span>
        </label>
        <label className="flex items-center gap-1">
          <input type="checkbox" className="w-3 h-3" />
          <span>Show system tray icon</span>
        </label>
      </div>
    ),
  },
};
