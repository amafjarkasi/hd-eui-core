import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../components/Modal';
import { useState } from 'react';
import { Button } from '../components/Button';

const meta: Meta<typeof Modal> = {
  title: 'Layout/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          title="System Configuration"
          footer={
            <>
              <Button variant="secondary" size="sm" onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button variant="primary" size="sm" onClick={() => setIsOpen(false)}>Save Changes</Button>
            </>
          }
        >
          <div className="space-y-2">
            <p>Configure your high-density environment variables below.</p>
            <div className="p-2 bg-hd-bg-dark rounded border border-hd-border">
              <code className="text-[9px]">HD_MODE=true</code>
            </div>
          </div>
        </Modal>
      </>
    );
  },
};

export const Small: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Small Modal</Button>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          size="sm"
          title="Delete Confirmation"
        >
          <p>Are you sure you want to delete this record? This action is irreversible.</p>
          <div className="flex justify-end gap-1 mt-4">
            <Button variant="secondary" size="sm" onClick={() => setIsOpen(false)}>No</Button>
            <Button variant="primary" size="sm" onClick={() => setIsOpen(false)}>Yes, Delete</Button>
          </div>
        </Modal>
      </>
    );
  },
};
