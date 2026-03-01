import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../components/Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Layout/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const items = [
  {
    id: '1',
    title: 'General Settings',
    content: 'Configure your primary system preferences and global variables here.',
  },
  {
    id: '2',
    title: 'Security & Privacy',
    content: 'Manage encryption keys, user permissions, and audit log retention policies.',
  },
  {
    id: '3',
    title: 'Advanced Analytics',
    content: 'Enable real-time data streaming and high-throughput processing engines.',
  },
];

export const Default: Story = {
  args: {
    items,
  },
};

export const AllowMultiple: Story = {
  args: {
    items,
    allowMultiple: true,
  },
};
