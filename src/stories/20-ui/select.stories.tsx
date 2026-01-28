import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Select } from '@/components/ui/select'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A select dropdown component following USWDS design guidelines with proper focus states, accessibility, and a dropdown icon indicator. Supports required, disabled, and invalid states with full ARIA attributes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for the select element',
    },
    name: {
      control: 'text',
      description: 'Name attribute for form submission',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the select is required',
    },
    invalid: {
      control: 'boolean',
      description: 'Whether the select has invalid/error state',
    },
    'aria-label': {
      control: 'text',
      description: 'ARIA label for accessibility',
    },
    'aria-labelledby': {
      control: 'text',
      description: 'ID of element that labels this select',
    },
    'aria-describedby': {
      control: 'text',
      description: 'ID of element that describes this select',
    },
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <option value="">Choose an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  ),
}

// With Label
export const WithLabel: Story = {
  render: (args) => (
    <div className="max-w-sm space-y-2">
      <Label htmlFor="select-with-label">Select an option</Label>
      <Select id="select-with-label" {...args}>
        <option value="">Choose an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Select component paired with a label for better accessibility.',
      },
    },
  },
}

// Pre-selected
export const PreSelected: Story = {
  render: (args) => (
    <Select defaultValue="option2" {...args}>
      <option value="">Choose an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2 (Selected)</option>
      <option value="option3">Option 3</option>
    </Select>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Select component with a pre-selected option.',
      },
    },
  },
}

// Disabled
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <Select {...args}>
      <option value="">Choose an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  ),
}

// With Many Options
export const WithManyOptions: Story = {
  render: (args) => (
    <div className="max-w-sm space-y-2">
      <Label htmlFor="select-many">Select a US State</Label>
      <Select id="select-many" {...args}>
        <option value="">Choose a state</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
      </Select>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Select component with many options to test scrolling behavior.',
      },
    },
  },
}

// Invalid State
export const InvalidState: Story = {
  args: {
    invalid: true,
  },
  render: (args) => (
    <div className="max-w-sm space-y-2">
      <Label htmlFor="select-invalid">Select an option</Label>
      <Select id="select-invalid" aria-describedby="select-error" {...args}>
        <option value="">Choose an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <p id="select-error" className="text-sm text-red-60v mt-1">This field is required</p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Select component in an invalid/error state with red ring styling and proper ARIA error description.',
      },
    },
  },
}

// Success State

export const SuccessState: Story = {
  args: {
    success: true,
  },
  render: (args) => (
    <div className="max-w-sm space-y-2">
      <Label htmlFor="select-success">Select an option</Label>
      <Select id="select-success" {...args}>
      <option value="">Choose an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
    <p className="text-sm text-green-60v mt-1">This field is valid</p>
    </div>

  ),
  parameters: {
    docs: {
      description: {
        story: 'Select component in a success state with green ring styling and proper ARIA success description.',
      },
    },
  },
}

// Required Field
export const RequiredField: Story = {
  args: {
    required: true,
  },
  render: (args) => (
    <div className="max-w-sm space-y-2">
      <Label htmlFor="select-required">
        Country <span className="text-red-60v">*</span>
      </Label>
      <Select id="select-required" name="country" {...args}>
        <option value="">- Select -</option>
        <option value="us">United States</option>
        <option value="ca">Canada</option>
        <option value="mx">Mexico</option>
        <option value="uk">United Kingdom</option>
      </Select>
      <p className="text-sm text-gray-60">This field is required</p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Select component marked as required for form validation.',
      },
    },
  },
}

// With ARIA Label
export const WithAriaLabel: Story = {
  render: (args) => (
    <Select aria-label="Select your preferred language" {...args}>
      <option value="">Choose a language</option>
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="fr">Français</option>
      <option value="de">Deutsch</option>
    </Select>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Select component with ARIA label for accessibility when no visible label is present.',
      },
    },
  },
}