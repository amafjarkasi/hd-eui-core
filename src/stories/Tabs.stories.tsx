import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '../components/Tabs';
import { Settings, User, Shield } from 'lucide-react';

const meta: Meta<typeof Tabs> = {
  title: 'Layout/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['line', 'pills'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const tabs = [
  {
    id: 'profile',
    label: 'Profile',
    icon: <User size={12} />,
    content: <div className="text-[10px]">User profile settings and personal information.</div>,
  },
  {
    id: 'security',
    label: 'Security',
    icon: <Shield size={12} />,
    content: <div className="text-[10px]">Manage passwords, 2FA, and session security.</div>,
  },
  {
    id: 'preferences',
    label: 'Preferences',
    icon: <Settings size={12} />,
    content: <div className="text-[10px]">Application theme, language, and notification settings.</div>,
  },
  {
    id: 'billing',
    label: 'Billing',
    disabled: true,
    content: <div>Billing information (Locked).</div>,
  },
];

export const Line: Story = {
  args: {
    tabs,
    variant: 'line',
  },
};

export const Pills: Story = {
  args: {
    tabs,
    variant: 'pills',
  },
};

export const CustomStyling: Story = {
  args: {
    tabs,
    variant: 'line',
    tabListClassName: 'bg-hd-bg-dark border-none rounded-t-md',
    contentClassName: 'border-x border-b border-hd-border rounded-b-md p-4',
  },
};
