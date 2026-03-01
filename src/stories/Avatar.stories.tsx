import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../components/Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Data Display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    name: "John Doe",
    size: "md",
  },
};

export const WithImage: Story = {
  args: {
    name: "Jane Smith",
    src: "https://i.pravatar.cc/150?u=jane",
    size: "lg",
  },
};

export const ExtraSmall: Story = {
  args: {
    name: "XS User",
    size: "xs",
  },
};

export const ExtraLarge: Story = {
  args: {
    name: "XL User",
    size: "xl",
  },
};

export const Group: Story = {
  render: () => (
    <div className="flex -space-x-2">
      <Avatar name="User 1" size="md" className="ring-2 ring-white dark:ring-slate-900" />
      <Avatar name="User 2" size="md" className="ring-2 ring-white dark:ring-slate-900" />
      <Avatar name="User 3" size="md" className="ring-2 ring-white dark:ring-slate-900" />
      <div className="w-8 h-8 rounded-full bg-hd-bg-dark dark:bg-hd-dark-bg-alt border border-hd-border dark:border-hd-dark-border flex items-center justify-center text-[9px] font-bold text-hd-muted ring-2 ring-white dark:ring-slate-900">
        +5
      </div>
    </div>
  ),
};
