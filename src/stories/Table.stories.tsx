import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../components/Table';
import { Badge } from '../components/Badge';
import { useState } from 'react';

const meta: Meta<typeof Table> = {
  title: 'Data Display/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

const columns = [
  { key: 'id', header: 'ID', width: '50px' },
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email' },
  {
    key: 'status',
    header: 'Status',
    render: (val: string) => (
      <Badge variant={val === 'Active' ? 'primary' : 'muted'}>{val}</Badge>
    )
  },
  { key: 'role', header: 'Role' },
];

const data = [
  { id: '1', name: 'Alice Smith', email: 'alice@enterprise.com', status: 'Active', role: 'Admin' },
  { id: '2', name: 'Bob Jones', email: 'bob@enterprise.com', status: 'Inactive', role: 'Editor' },
  { id: '3', name: 'Charlie Brown', email: 'charlie@enterprise.com', status: 'Active', role: 'Viewer' },
  { id: '4', name: 'Diana Prince', email: 'diana@enterprise.com', status: 'Active', role: 'Admin' },
  { id: '5', name: 'Ethan Hunt', email: 'ethan@enterprise.com', status: 'Inactive', role: 'Viewer' },
];

export const Default: Story = {
  args: {
    columns,
    data,
    striped: true,
  },
};

export const Loading: Story = {
  args: {
    columns,
    data: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
    emptyMessage: 'No records found in the current view.',
  },
};

export const Interactive: Story = {
  render: () => {
    const [sort, setSort] = useState<{ key: string; dir: 'asc' | 'desc' }>({ key: 'name', dir: 'asc' });

    return (
      <Table
        columns={columns}
        data={data}
        sortKey={sort.key}
        sortDirection={sort.dir}
        onSort={(key, dir) => setSort({ key, dir })}
        striped
      />
    );
  },
};
