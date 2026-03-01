import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '../components/Sidebar';
import { useState } from 'react';
import { Layout, Users, PieChart, Shield, Settings, Database } from 'lucide-react';

const meta: Meta<typeof Sidebar> = {
  title: 'Layout/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const items = [
  { id: 'dashboard', label: 'Dashboard', icon: <Layout size={12} /> },
  { id: 'users', label: 'User Management', icon: <Users size={12} /> },
  { id: 'analytics', label: 'Analytics', icon: <PieChart size={12} /> },
  {
    id: 'security',
    label: 'Security',
    icon: <Shield size={12} />,
    children: [
      { id: 'roles', label: 'Roles & Permissions' },
      { id: 'audit', label: 'Audit Logs' },
    ]
  },
  { id: 'database', label: 'Database', icon: <Database size={12} /> },
  { id: 'settings', label: 'Settings', icon: <Settings size={12} /> },
];

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState('dashboard');
    const [collapsed, setCollapsed] = useState(false);

    return (
      <div className="h-[500px] border border-hd-border rounded overflow-hidden">
        <Sidebar
          items={items}
          activeItem={active}
          onItemClick={(item) => setActive(item.id)}
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed(!collapsed)}
        />
      </div>
    );
  },
};

export const RightPosition: Story = {
  render: () => {
    const [active, setActive] = useState('dashboard');
    return (
      <div className="h-[500px] flex justify-end border border-hd-border rounded overflow-hidden">
        <Sidebar
          position="right"
          items={items}
          activeItem={active}
          onItemClick={(item) => setActive(item.id)}
        />
      </div>
    );
  },
};
