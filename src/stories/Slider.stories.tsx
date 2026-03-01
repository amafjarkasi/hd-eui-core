import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "../components/Slider";
import { useState } from "react";

const meta: Meta<typeof Slider> = {
  title: "Form/Slider",
  component: Slider,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    label: "Volume",
    min: 0,
    max: 100,
    value: 50,
  },
};

export const Interactive: Story = {
  render: () => {
    const [val, setVal] = useState(75);
    return (
      <div className="w-64">
        <Slider
          label="Brightness"
          value={val}
          onChange={(e) => setVal(parseInt(e.target.value))}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    label: "Restricted Setting",
    disabled: true,
    value: 30,
  },
};
