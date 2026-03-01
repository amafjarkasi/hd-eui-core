import type { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from '../components/DateRangePicker';

const meta: Meta<typeof DateRangePicker> = {
  title: 'Heavyweight/DateRangePicker',
  component: DateRangePicker,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DateRangePicker>;

export const Default: Story = {
  args: {
    placeholder: 'Select a range...',
  },
};

export const Preselected: Story = {
  args: {
    value: {
      start: new Date(2024, 0, 1),
      end: new Date(2024, 0, 15),
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Picker is disabled',
  },
};
