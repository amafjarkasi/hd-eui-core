import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../components/Select';
import { useState } from 'react';

const meta: Meta<typeof Select> = {
  title: 'Form/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const options = [
  { label: 'Administrator', value: 'admin' },
  { label: 'Editor', value: 'editor' },
  { label: 'Viewer', value: 'viewer' },
  { label: 'Guest', value: 'guest' },
];

export const Default: Story = {
  args: {
    label: 'User Role',
    options,
    placeholder: 'Select a role...',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Select',
    size: 'sm',
    options,
  },
};

export const WithError: Story = {
  args: {
    label: 'User Role',
    options,
    error: 'Please select a valid role to continue.',
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>('admin');
    return (
      <div className="w-64">
        <Select
          label="Interactive Select"
          options={options}
          value={value}
          onChange={setValue}
        />
        <p className="mt-2 text-[10px] text-hd-muted">Selected Value: {value}</p>
      </div>
    );
  },
};
