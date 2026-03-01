import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '../components/Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Feedback/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['primary', 'focus', 'muted', 'success', 'warning', 'error'],
    },
    animation: {
      control: 'select',
      options: ['spin', 'pulse', 'bounce'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: 'md',
    color: 'focus',
    animation: 'spin',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    color: 'primary',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    color: 'error',
  },
};

export const Pulse: Story = {
  args: {
    animation: 'pulse',
    color: 'warning',
  },
};

export const Bounce: Story = {
  args: {
    animation: 'bounce',
    color: 'success',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="sm" color="primary" />
      <Spinner size="md" color="focus" />
      <Spinner size="lg" color="success" />
      <Spinner size="md" color="warning" animation="pulse" />
      <Spinner size="md" color="error" animation="bounce" />
    </div>
  ),
};
