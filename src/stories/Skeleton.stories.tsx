import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '../components/Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'rectangle', 'circle', 'avatar', 'square', 'paragraph'],
    },
    animation: {
      control: 'select',
      options: ['pulse', 'wave'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    variant: 'rectangle',
    width: '100%',
    height: '100px',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    width: '200px',
  },
};

export const Circle: Story = {
  args: {
    variant: 'circle',
    width: '40px',
    height: '40px',
  },
};

export const Paragraph: Story = {
  args: {
    variant: 'paragraph',
    lines: 4,
  },
};

export const WaveAnimation: Story = {
  args: {
    variant: 'rectangle',
    animation: 'wave',
    width: '100%',
    height: '150px',
  },
};

export const CardSkeleton: Story = {
  render: () => (
    <div className="w-64 p-2 border border-hd-border rounded-md space-y-2">
      <div className="flex items-center gap-2">
        <Skeleton variant="circle" width="32px" height="32px" />
        <div className="space-y-1 flex-1">
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" />
        </div>
      </div>
      <Skeleton variant="rectangle" height="100px" />
      <div className="flex gap-1 justify-end">
        <Skeleton variant="rectangle" width="40px" height="20px" />
        <Skeleton variant="rectangle" width="40px" height="20px" />
      </div>
    </div>
  ),
};
