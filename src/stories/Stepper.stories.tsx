import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from '../components/Stepper';
import { useState } from 'react';

const meta: Meta<typeof Stepper> = {
  title: 'Navigation/Stepper',
  component: Stepper,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const steps = [
  { label: 'Initialization' },
  { label: 'Security Scan' },
  { label: 'Database Sync' },
  { label: 'Deployment' },
];

export const Default: Story = {
  render: () => {
    const [current, setCurrent] = useState(1);
    return (
      <div className="w-full max-w-2xl">
        <Stepper
          steps={steps}
          currentStep={current}
          onStepClick={setCurrent}
        />
        <div className="mt-4 text-[10px] text-hd-muted">
          Current Phase: {steps[current].label}
        </div>
      </div>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const [current, setCurrent] = useState(0);
    return (
      <div className="h-64">
        <Stepper
          steps={steps}
          currentStep={current}
          onStepClick={setCurrent}
          vertical
        />
      </div>
    );
  },
};

export const Completed: Story = {
  args: {
    steps: steps.map(s => ({ ...s, completed: true })),
    currentStep: 3,
  },
};
