import type { Meta, StoryObj } from '@storybook/react';
import { AlertDialog } from '../components/AlertDialog';
import { useState } from 'react';
import { Button } from '../components/Button';

const meta: Meta<typeof AlertDialog> = {
  title: 'Feedback/AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Alert Dialog</Button>
        <AlertDialog
          open={isOpen}
          onOpenChange={setIsOpen}
          title="Confirm Action"
          message="Are you sure you want to proceed with this operation? This action cannot be undone."
          actions={[
            { label: 'Cancel', variant: 'secondary', onClick: () => setIsOpen(false) },
            { label: 'Confirm', variant: 'primary', onClick: () => setIsOpen(false) },
          ]}
        />
      </>
    );
  },
};

export const SingleAction: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Show Notification</Button>
        <AlertDialog
          open={isOpen}
          onOpenChange={setIsOpen}
          title="Update Successful"
          message="The system has been updated to the latest version."
        />
      </>
    );
  },
};
