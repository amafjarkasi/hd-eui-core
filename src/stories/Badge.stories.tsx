import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'muted'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Default',
    variant: 'default',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
  },
};

export const Muted: Story = {
  args: {
    children: 'Muted',
    variant: 'muted',
  },
};

export const Group: Story = {
  render: () => (
    <div className="flex gap-1">
      <Badge variant="default">New</Badge>
      <Badge variant="primary">Active</Badge>
      <Badge variant="muted">Archived</Badge>
    </div>
  ),
};
