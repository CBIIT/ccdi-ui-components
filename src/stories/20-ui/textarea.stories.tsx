import * as React from "react"
import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A form textarea component with USWDS styling and proper focus states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
    },
  },
} satisfies Meta<typeof Textarea>

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
      <Label htmlFor="textarea-with-label">Description</Label>
      <Textarea id="textarea-with-label" placeholder="Enter your description" {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Textarea component paired with a label for better accessibility.',
      },
    },
  },
}

// Disabled
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled textarea',
    defaultValue: 'This textarea is disabled and cannot be edited.',
  },
}


// With Error State
export const WithError: Story = {
  args: {
    'aria-invalid': true,
    defaultValue: 'This field has an error.',
  },
  render: (args) => (
    <div className="grid w-full max-w-sm items-center">
      <Label htmlFor="error-textarea">Description</Label>
      <Textarea id="error-textarea" {...args} />
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
