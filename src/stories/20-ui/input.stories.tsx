import * as React from "react"
import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from "@/components/ui/textarea"

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A form input component with USWDS styling and proper focus states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'],
      description: 'The type of input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

// With Label
export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center">
      <Label htmlFor="input-with-label">Name</Label>
      <Input id="input-with-label" placeholder="Enter your name" {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input component paired with a label for better accessibility.',
      },
    },
  },
}

// Email Input
export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter your email',
  },
  render: (args) => (
    <div className="grid w-full max-w-sm items-center">
      <Label htmlFor="email-input">Email Address</Label>
      <Input id="email-input" {...args} />
    </div>
  ),
}

// Password Input
export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
  },
  render: (args) => (
    <div className="grid w-full max-w-sm items-center">
      <Label htmlFor="password-input">Password</Label>
      <Input id="password-input" {...args} />
    </div>
  ),
}

// Search Input
export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
  },
  render: (args) => (
    <div className="grid w-full max-w-sm items-center">
      <Label htmlFor="search-input">Search</Label>
      <Input id="search-input" {...args} />
    </div>
  ),
}

// Disabled
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
    defaultValue: 'This input is disabled',
  },
}

// With Default Value
export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'Default value',
  },
  render: (args) => (
    <div className="grid w-full max-w-sm items-center">
      <Label htmlFor="default-value-input">Name</Label>
      <Input id="default-value-input" {...args} />
    </div>
  ),
}

// With Error State
export const WithError: Story = {
  args: {
    'aria-invalid': true,
    defaultValue: 'This field has an error.',
  },
  render: (args) => (
    <div className="grid w-full max-w-sm items-center">
      <Label htmlFor="error-input">Description</Label>
      <Input id="error-input" {...args} />
      <p className="text-sm text-red-60v mt-1">This field is required.</p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Textarea with error state indicated by red border and error message.',
      },
    },
  },
}