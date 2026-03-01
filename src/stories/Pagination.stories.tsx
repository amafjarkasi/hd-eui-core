import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '../components/Pagination';
import { useState } from 'react';

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <Pagination
        currentPage={page}
        totalPages={10}
        onPageChange={setPage}
      />
    );
  },
};

export const ManyPages: Story = {
  render: () => {
    const [page, setPage] = useState(25);
    return (
      <Pagination
        currentPage={page}
        totalPages={100}
        onPageChange={setPage}
        maxVisible={7}
      />
    );
  },
};

export const Compact: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <Pagination
        currentPage={page}
        totalPages={5}
        onPageChange={setPage}
        maxVisible={3}
      />
    );
  },
};
