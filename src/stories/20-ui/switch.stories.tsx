import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'UI/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A switch toggle component following USWDS design patterns with proper focus states and accessibility.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the switch is checked',
    },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

// Default
export const Default: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch id="notifications" {...args} />
      <Label htmlFor="notifications">Enable Notifications</Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A basic switch toggle with a label.',
      },
    },
  },
}
