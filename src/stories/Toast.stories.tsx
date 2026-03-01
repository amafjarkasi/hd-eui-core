import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '../components/Toast';
import { useState } from 'react';
import { Button } from '../components/Button';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: () => {
    const [show, setShow] = useState(false);
    return (
      <div className="h-32">
        <Button onClick={() => setShow(true)}>Show Toast</Button>
        {show && (
          <div className="fixed top-4 right-4 z-50">
            <Toast
              message="System update successful!"
              variant="success"
              onClose={() => setShow(false)}
            />
          </div>
        )}
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-80">
      <Toast message="Information: New data available." variant="info" />
      <Toast message="Success: Record saved." variant="success" />
      <Toast message="Warning: Low memory detected." variant="warning" />
      <Toast message="Error: Failed to sync data." variant="error" />
    </div>
  ),
};
