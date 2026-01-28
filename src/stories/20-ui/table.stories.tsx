import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table'

const meta = {
  title: 'UI/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible table component with support for striped rows, following USWDS design guidelines.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes for the table',
    },
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

// Sample data for examples
const sampleData = [
  { id: 1, name: 'John Smith', email: 'john.smith@example.com', role: 'Administrator' },
  { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', role: 'Editor' },
  { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', role: 'Viewer' },
  { id: 4, name: 'Alice Wilson', email: 'alice.wilson@example.com', role: 'Editor' },
  { id: 5, name: 'Charlie Brown', email: 'charlie.brown@example.com', role: 'Viewer' },
]

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>User Management</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Default table with standard styling.',
      },
    },
  },
}

export const Striped: Story = {
  render: () => (
    <Table>
      <TableCaption>User Management (Striped)</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody striped>
        {sampleData.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Table with striped rows for better readability.',
      },
    },
  },
}
