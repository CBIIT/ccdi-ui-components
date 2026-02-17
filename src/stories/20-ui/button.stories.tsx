import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants and sizes following USWDS design guidelines.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'success', 'warning', 'danger', 'ghost', 'link'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg', 'icon'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    children: {
      control: 'text',
      description: 'The content of the button',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    children: 'Button',
  },
}

// Variant stories
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
}

export const AccentCool: Story = {
  args: {
    variant: 'accent-cool',
    children: 'Accent Cool',
  },
}

export const AccentWarm: Story = {
  args: {
    variant: 'accent-warm',
    children: 'Accent Warm',
  },
}

export const Base: Story = {
  args: {
    variant: 'base',
    children: 'Base',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
}

export const OutlineInverse: Story = {
  args: {
    variant: 'outline-inverse',
    children: 'Outline Inverse',
  },
   globals: {
    // 👇 Override background value for this story
    backgrounds: { value: 'dark' },
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

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
  },
}

// Size stories
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
}

export const AsChildLink: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => (
    <Button asChild {...args}>
      <a href="/">Go to Home</a>
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use asChild to render the child element (e.g. an anchor) instead of a button, while applying button styles.',
      },
    },
  },
}

export const IconButton: Story = {
  args: {
    size: 'icon',
    variant: 'primary',
    'aria-label': 'Search',
  },
  render: (args) => (
    <Button {...args}>
      <Icon icon="search" size="sm" />
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icon-only button with fixed square dimensions. Always include an aria-label for accessibility.',
      },
    },
  },
}


export const WithIcon: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => (
    <Button {...args}>
      Primary
      <Icon icon="navigate_next" size="xs" />
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Button with an icon, demonstrating how to include icons alongside text.',
      },
    },
  },
}

// State stories
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
}

// All Variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available button variants displayed together.',
      },
    },
  },
}