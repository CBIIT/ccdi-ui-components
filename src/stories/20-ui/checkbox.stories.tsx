import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A checkbox component following USWDS design patterns with proper focus states and accessibility.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

// With Label
export const Default: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="default" {...args} />
      <Label htmlFor="default" className="cursor-pointer">
        Checkbox 
      </Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Checkbox with an associated label for better usability.',
      },
    },
  },
}

// Checked
export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="checked" {...args} />
      <Label htmlFor="checked" className="cursor-pointer">
        I agree
      </Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Checkbox in checked state.',
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
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled" {...args} />
      <Label htmlFor="disabled" className="cursor-not-allowed opacity-50">
        Disabled checkbox
      </Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Checkbox in disabled state.',
      },
    },
  },
}

// Disabled and checked
export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled-checked" {...args} />
      <Label htmlFor="disabled-checked" className="cursor-not-allowed opacity-50">
        Disabled and checked
      </Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Checkbox that is both disabled and checked.',
      },
    },
  },
}

// Multiple checkboxes
export const MultipleCheckboxes: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Checkbox id="option1" defaultChecked />
        <Label htmlFor="option1" className="cursor-pointer">
          Email notifications
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option2" />
        <Label htmlFor="option2" className="cursor-pointer">
          SMS notifications
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option3" />
        <Label htmlFor="option3" className="cursor-pointer">
          Push notifications
        </Label>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple checkboxes in a group.',
      },
    },
  },
}