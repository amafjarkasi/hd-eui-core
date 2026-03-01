import type { Meta, StoryObj } from '@storybook/react';
import { List } from '../components/List';

const meta: Meta<typeof List> = {
  title: 'Data Display/List',
  component: List,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['dense', 'normal', 'relaxed'],
    },
    type: {
      control: 'select',
      options: ['ul', 'ol'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

const items = [
  { key: '1', content: 'System core initialized' },
  { key: '2', content: 'Network protocols established' },
  { key: '3', content: 'Database cluster online' },
  { key: '4', content: 'Security audit completed' },
];

export const Default: Story = {
  args: {
    items,
    variant: 'normal',
  },
};

export const Dense: Story = {
  args: {
    items,
    variant: 'dense',
  },
};

export const Divided: Story = {
  args: {
    items,
    divided: true,
  },
};

export const Ordered: Story = {
  args: {
    items,
    type: 'ol',
  },
};
