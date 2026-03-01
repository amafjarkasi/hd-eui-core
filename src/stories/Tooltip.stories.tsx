import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '../components/Tooltip';
import { Button } from '../components/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'This is a high-density tooltip',
    children: <Button size="sm">Hover Me</Button>,
  },
};

export const Positions: Story = {
  render: () => (
    <div className="flex gap-12 p-12 items-center justify-center">
      <Tooltip content="Top" position="top">
        <Button size="sm">Top</Button>
      </Tooltip>
      <Tooltip content="Bottom" position="bottom">
        <Button size="sm">Bottom</Button>
      </Tooltip>
      <Tooltip content="Left" position="left">
        <Button size="sm">Left</Button>
      </Tooltip>
      <Tooltip content="Right" position="right">
        <Button size="sm">Right</Button>
      </Tooltip>
    </div>
  ),
};

export const LongContent: Story = {
  args: {
    content: 'Tooltips are essential for explaining micro-icons in dense UIs.',
    children: <span className="text-[10px] cursor-help underline decoration-dotted">Why density?</span>,
  },
};
