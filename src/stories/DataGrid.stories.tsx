import type { Meta, StoryObj } from "@storybook/react";
import { DataGrid, DataGridColumn } from "../components/DataGrid";
import { Badge } from "../components/Badge";

const meta: Meta<typeof DataGrid> = {
  title: "Heavyweight/DataGrid",
  component: DataGrid,
  tags: ["autodocs"],
  argTypes: {
    density: {
      control: "select",
      options: ["compact", "normal"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof DataGrid>;

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  lastActive: string;
}

const columns: DataGridColumn<User>[] = [
  { key: "id", header: "ID", width: "50px", sortable: true },
  { key: "name", header: "Name", sortable: true },
  { key: "email", header: "Email", width: "180px" },
  {
    key: "role",
    header: "Role",
    sortable: true,
    render: (val) => <span className="text-hd-muted">{val}</span>,
  },
  {
    key: "status",
    header: "Status",
    render: (val) => (
      <Badge variant={val === "Active" ? "primary" : "muted"}>{val}</Badge>
    ),
  },
  { key: "lastActive", header: "Last Active", width: "120px" },
];

const data: User[] = Array.from({ length: 45 }).map((_, i) => ({
  id: i + 1,
  name: [
    "Alice Smith",
    "Bob Jones",
    "Charlie Brown",
    "Diana Prince",
    "Ethan Hunt",
  ][i % 5],
  email: `user${i + 1}@example.com`,
  role: ["Admin", "Editor", "Viewer", "Contributor"][i % 4],
  status: i % 3 === 0 ? "Inactive" : "Active",
  lastActive: "2024-02-28",
}));

export const Default: Story = {
  args: {
    data,
    columns,
    pageSize: 10,
    selectable: true,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns,
    emptyMessage: "No users found in the database.",
  },
};

export const NormalDensity: Story = {
  args: {
    data: data.slice(0, 5),
    columns,
    density: "normal",
  },
};
