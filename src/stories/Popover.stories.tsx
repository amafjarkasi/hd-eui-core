import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from '../components/Popover';
import { Button } from '../components/Button';
import { Settings, User, LogOut } from 'lucide-react';

const meta: Meta<typeof Popover> = {
  title: 'Feedback/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    trigger: <Button size="sm">Open Popover</Button>,
    children: (
      <div className="space-y-2">
        <h4 className="font-bold border-b border-hd-border pb-1">Quick Settings</h4>
        <div className="space-y-1">
          <label className="flex items-center gap-1">
            <input type="checkbox" className="w-3 h-3" />
            <span>Enable notifications</span>
          </label>
          <label className="flex items-center gap-1">
            <input type="checkbox" className="w-3 h-3" />
            <span>Developer mode</span>
          </label>
        </div>
      </div>
    ),
  },
};

export const Menu: Story = {
  args: {
    trigger: (
      <div className="w-8 h-8 rounded-full bg-hd-bg-dark border border-hd-border flex items-center justify-center cursor-pointer hover:bg-hd-border transition-colors">
        <User size={14} className="text-hd-muted" />
      </div>
    ),
    children: (
      <div className="flex flex-col min-w-[120px]">
        <button className="flex items-center gap-2 px-2 py-1.5 hover:bg-hd-bg-dark text-left transition-colors">
          <Settings size={12} /> Account Settings
        </button>
        <button className="flex items-center gap-2 px-2 py-1.5 hover:bg-hd-bg-dark text-left transition-colors text-red-500">
          <LogOut size={12} /> Sign Out
        </button>
      </div>
    ),
  },
};

export const Placements: Story = {
  render: () => (
    <div className="flex gap-4 h-64 items-center justify-center">
      <Popover placement="top" trigger={<Button size="sm">Top</Button>}>
        Popover on top
      </Popover>
      <Popover placement="bottom" trigger={<Button size="sm">Bottom</Button>}>
        Popover on bottom
      </Popover>
      <Popover placement="left" trigger={<Button size="sm">Left</Button>}>
        Popover on left
      </Popover>
      <Popover placement="right" trigger={<Button size="sm">Right</Button>}>
        Popover on right
      </Popover>
    </div>
  ),
};
