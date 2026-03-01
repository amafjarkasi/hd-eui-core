import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '../components/Radio';
import { useState } from 'react';

const meta: Meta<typeof Radio> = {
  title: 'Form/Radio',
  component: Radio,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radio>;

const options = [
  { label: 'Production', value: 'prod' },
  { label: 'Staging', value: 'stage' },
  { label: 'Development', value: 'dev' },
];

export const Default: Story = {
  args: {
    name: 'env',
    label: 'Environment',
    options,
    value: 'prod',
  },
};

export const Vertical: Story = {
  args: {
    name: 'env-v',
    label: 'Deployment Strategy',
    options,
    inline: false,
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>('prod');
    return (
      <Radio
        name="env-i"
        label="Select Environment"
        options={options}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    name: 'env-d',
    label: 'Restricted Setting',
    options: options.map(o => ({ ...o, disabled: o.value === 'dev' })),
    disabled: true,
  },
};
