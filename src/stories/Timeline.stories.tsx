import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from '../components/Timeline';

const meta: Meta<typeof Timeline> = {
  title: 'Heavyweight/Timeline',
  component: Timeline,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Timeline>;

const items = [
  {
    id: '1',
    title: 'System Initialized',
    timestamp: '2024-02-28 09:00:00',
    content: 'Core kernel modules loaded successfully.',
    status: 'success' as const,
  },
  {
    id: '2',
    title: 'Database Migration',
    timestamp: '2024-02-28 09:15:22',
    content: 'Applying schema updates to production cluster.',
    status: 'warning' as const,
  },
  {
    id: '3',
    title: 'API Gateway Online',
    timestamp: '2024-02-28 09:30:00',
    content: 'Traffic routing enabled for v2 endpoints.',
    status: 'info' as const,
  },
  {
    id: '4',
    title: 'Security Audit Failed',
    timestamp: '2024-02-28 10:05:11',
    content: 'Unauthorized access attempt detected in region us-east-1.',
    status: 'error' as const,
  },
];

export const Default: Story = {
  args: {
    items,
  },
};

export const Compact: Story = {
  args: {
    items: items.slice(0, 2),
  },
};
