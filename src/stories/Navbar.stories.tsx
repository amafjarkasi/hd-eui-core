import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '../components/Navbar';
import { Button } from '../components/Button';
import { User, Bell, Settings } from 'lucide-react';

const meta: Meta<typeof Navbar> = {
  title: 'Navigation/Navbar',
  component: Navbar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

const links = [
  { label: 'Dashboard', href: '#', active: true },
  { label: 'Analytics', href: '#' },
  { label: 'Users', href: '#' },
  { label: 'Logs', href: '#' },
];

export const Default: Story = {
  args: {
    logo: <div className="font-bold text-[11px] text-hd-focus">HD-EUI</div>,
    links,
    rightContent: (
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="sm" className="p-1"><Bell size={12} /></Button>
        <Button variant="ghost" size="sm" className="p-1"><Settings size={12} /></Button>
        <div className="w-px h-4 bg-hd-border mx-1" />
        <Button variant="ghost" size="sm" className="p-1"><User size={12} /></Button>
      </div>
    ),
  },
};

export const NoLogo: Story = {
  args: {
    links,
  },
};

export const Simple: Story = {
  args: {
    logo: <div className="font-bold text-[11px]">APP</div>,
    links: links.slice(0, 2),
  },
};
