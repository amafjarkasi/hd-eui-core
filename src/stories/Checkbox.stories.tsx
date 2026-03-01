import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../components/Checkbox';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const Checked: Story = {
  args: {
    label: 'Notifications enabled',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Read-only option',
    disabled: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        label={`Status: ${checked ? 'Active' : 'Inactive'}`}
        checked={checked}
        onChange={setChecked}
      />
    );
  },
};
