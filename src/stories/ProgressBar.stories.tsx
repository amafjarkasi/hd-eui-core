import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "../components/ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  title: "Feedback/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "success", "danger"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 45,
    variant: "primary",
  },
};

export const Success: Story = {
  args: {
    value: 100,
    variant: "success",
  },
};

export const Danger: Story = {
  args: {
    value: 85,
    variant: "danger",
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};

export const WithLabel: Story = {
  args: {
    value: 75,
    showLabel: true,
  },
};
