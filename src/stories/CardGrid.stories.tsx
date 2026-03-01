import type { Meta, StoryObj } from '@storybook/react';
import { CardGrid } from '../components/CardGrid';
import { Card } from '../components/Card';

const meta: Meta<typeof CardGrid> = {
  title: 'Layout/CardGrid',
  component: CardGrid,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: { type: 'number', min: 1, max: 12 },
    },
    gap: {
      control: 'select',
      options: ['tight', 'ultra'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardGrid>;

const sampleCards = [
  <Card key="1" title="Node Alpha">Active</Card>,
  <Card key="2" title="Node Beta">Pending</Card>,
  <Card key="3" title="Node Gamma">Offline</Card>,
  <Card key="4" title="Node Delta">Active</Card>,
  <Card key="5" title="Node Epsilon">Active</Card>,
  <Card key="6" title="Node Zeta">Warning</Card>,
];

export const Default: Story = {
  args: {
    children: sampleCards,
    columns: 3,
    gap: 'ultra',
  },
};

export const Tight: Story = {
  args: {
    children: sampleCards,
    columns: 4,
    gap: 'tight',
  },
};

export const Responsive: Story = {
  args: {
    children: sampleCards,
    responsive: true,
    minWidth: '150px',
    gap: 'ultra',
  },
};
