import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '../components/Dropdown';
import { Button } from '../components/Button';
import { ChevronDown } from 'lucide-react';

const meta: Meta<typeof Dropdown> = {
  title: 'Form/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const options = [
  { label: 'Edit Profile', value: 'edit' },
  { label: 'Settings', value: 'settings' },
  { label: 'Billing', value: 'billing' },
  { label: 'Logout', value: 'logout', disabled: true },
];

export const Default: Story = {
  args: {
    trigger: (
      <Button variant="secondary" size="sm">
        Actions <ChevronDown size={10} className="ml-1" />
      </Button>
    ),
    options,
    onSelect: (val) => console.log('Selected:', val),
  },
};

export const Placements: Story = {
  render: () => (
    <div className="flex gap-4 h-64 items-center justify-center">
      <Dropdown
        placement="bottom-left"
        options={options}
        trigger={<Button size="sm">Bottom Left</Button>}
      />
      <Dropdown
        placement="top-right"
        options={options}
        trigger={<Button size="sm">Top Right</Button>}
      />
    </div>
  ),
};
