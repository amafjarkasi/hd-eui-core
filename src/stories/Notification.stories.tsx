import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from '../components/Notification';

const meta: Meta<typeof Notification> = {
  title: 'Feedback/Notification',
  component: Notification,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Info: Story = {
  args: {
    title: 'New Message',
    message: 'You have received a new system notification.',
    variant: 'info',
  },
};

export const Success: Story = {
  args: {
    title: 'Data Exported',
    message: 'The report has been successfully generated and is ready for download.',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    title: 'Low Disk Space',
    message: 'The server storage is reaching its capacity. Please clear some space.',
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    title: 'Connection Failed',
    message: 'Unable to reach the authentication server. Please check your network.',
    variant: 'error',
  },
};

export const NoMessage: Story = {
  args: {
    title: 'Simple Alert',
    variant: 'info',
  },
};
