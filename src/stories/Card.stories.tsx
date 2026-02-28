import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

const meta: Meta<typeof Card> = {
  title: 'Layout/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card header title',
    },
    footer: {
      control: 'text',
      description: 'Card footer content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    children: 'This is the card body content with hyper-dense spacing.',
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Dashboard Card',
    children: 'Card content goes here with tight padding.',
    footer: 'Last updated: 2 mins ago',
  },
};

export const NoTitle: Story = {
  args: {
    children: 'Card without a title header.',
  },
};

export const WithActions: Story = {
  args: {
    title: 'User Profile',
    children: (
      <div className="space-y-2">
        <p className="text-[10px] text-hd-muted">Name: John Doe</p>
        <p className="text-[10px] text-hd-muted">Email: john@example.com</p>
        <div className="flex gap-1 mt-2">
          <Button size="sm" variant="primary">Edit</Button>
          <Button size="sm" variant="outline">Delete</Button>
        </div>
      </div>
    ),
  },
};
