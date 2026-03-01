import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '../components/Alert';

const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    children: 'This is a standard information alert for enterprise users.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    children: 'Operation completed successfully. All data synced.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    children: 'Your session is about to expire. Please save your work.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Critical Error',
    children: 'Failed to connect to the database cluster. Retrying...',
  },
};

export const Dismissible: Story = {
  args: {
    variant: 'info',
    title: 'Dismissible Alert',
    children: 'Click the X to remove this notification.',
    dismissible: true,
    onDismiss: () => alert('Dismissed!'),
  },
};

export const Small: Story = {
  args: {
    variant: 'info',
    size: 'sm',
    title: 'Small Alert',
    children: 'Ultra-compact feedback for tight layouts.',
  },
};
