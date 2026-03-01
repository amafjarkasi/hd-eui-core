import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from '../components/Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

const items = [
  { label: 'Home', href: '#' },
  { label: 'Projects', href: '#' },
  { label: 'HD-EUI Core', href: '#' },
  { label: 'Documentation' },
];

export const Default: Story = {
  args: {
    items,
  },
};

export const CustomSeparator: Story = {
  args: {
    items,
    separator: '>',
  },
};

export const LongTrail: Story = {
  args: {
    items: [
      { label: 'System', href: '#' },
      { label: 'Network', href: '#' },
      { label: 'Gateways', href: '#' },
      { label: 'US-East-1', href: '#' },
      { label: 'Cluster-A', href: '#' },
      { label: 'Node-04' },
    ],
  },
};
