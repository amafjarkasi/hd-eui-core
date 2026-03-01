import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { MultiSelect } from "../components/MultiSelect";

const meta: Meta<typeof MultiSelect> = {
  title: "Heavyweight/MultiSelect",
  component: MultiSelect,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

const options = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
  { label: "Option 4", value: "4" },
  { label: "Option 5", value: "5" },
  { label: "Option 6", value: "6" },
];

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState<(string | number)[]>([]);
    return (
      <div className="w-64">
        <MultiSelect
          label="Multi-Select Field"
          options={options}
          value={selected}
          onChange={setSelected}
          placeholder="Choose some options..."
        />
      </div>
    );
  },
};

export const Preselected: Story = {
  render: () => {
    const [selected, setSelected] = useState<(string | number)[]>(["1", "3"]);
    return (
      <div className="w-64">
        <MultiSelect
          label="Pre-selected Options"
          options={options}
          value={selected}
          onChange={setSelected}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled MultiSelect",
    options,
    disabled: true,
    placeholder: "Cannot select anything",
  },
};
