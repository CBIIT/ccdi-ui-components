import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '@/components/ui/badge'

const meta = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A small badge component for labels, statuses, and tags following USWDS design guidelines.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'success', 'warning', 'danger', 'outline'],
      description: 'The visual style variant of the badge',
    },
    children: {
      control: 'text',
      description: 'The content of the badge',
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    children: 'Badge',
  },
}

// Variant stories
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
}

// All Variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available badge variants displayed together.',
      },
    },
  },
}

// Usage Examples
export const StatusBadges: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span>Order Status:</span>
        <Badge variant="success">Completed</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span>Payment Status:</span>
        <Badge variant="warning">Pending</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span>Delivery Status:</span>
        <Badge variant="danger">Failed</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span>Account Status:</span>
        <Badge variant="default">Active</Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example usage of badges for different status indicators.',
      },
    },
  },
}

export const Categories: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Article Tags</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">JavaScript</Badge>
          <Badge variant="outline">React</Badge>
          <Badge variant="outline">TypeScript</Badge>
          <Badge variant="outline">Web Development</Badge>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Priority Levels</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="danger">High</Badge>
          <Badge variant="warning">Medium</Badge>
          <Badge variant="success">Low</Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example usage of badges for categorization and tagging.',
      },
    },
  },
}

export const WithNumbers: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">New 12</Badge>
      <Badge variant="secondary">Reviews 47</Badge>
      <Badge variant="success">Available 3</Badge>
      <Badge variant="warning">Pending 8</Badge>
      <Badge variant="danger">Issues 2</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badges can contain numbers or counts.',
      },
    },
  },
}