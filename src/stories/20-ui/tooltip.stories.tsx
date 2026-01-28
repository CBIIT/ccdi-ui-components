import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A tooltip is a short descriptive message that appears when a user hovers or focuses on an element.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
      description: 'The position of the tooltip relative to the trigger element',
    },
  },
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    position: 'top',
  },
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button>Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>This is a tooltip</TooltipContent>
    </Tooltip>
  ),
}

// Position stories
export const Top: Story = {
  args: {
    position: 'top',
  },
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button>Show on top</Button>
      </TooltipTrigger>
      <TooltipContent>Top</TooltipContent>
    </Tooltip>
  ),
}

export const Right: Story = {
  args: {
    position: 'right',
  },
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button>Show on right</Button>
      </TooltipTrigger>
      <TooltipContent>Right</TooltipContent>
    </Tooltip>
  ),
}

export const Bottom: Story = {
  args: {
    position: 'bottom',
  },
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button>Show on bottom</Button>
      </TooltipTrigger>
      <TooltipContent>Bottom</TooltipContent>
    </Tooltip>
  ),
}

export const Left: Story = {
  args: {
    position: 'left',
  },
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button>Show on left</Button>
      </TooltipTrigger>
      <TooltipContent>Left</TooltipContent>
    </Tooltip>
  ),
}

// All Positions showcase - matching USWDS example
export const AllPositions: Story = {
  render: () => (
    <div className="size-full flex flex-col gap-8 items-center justify-center p-20">
      <Tooltip position="top">
        <TooltipTrigger asChild>
          <Button>Show on top</Button>
        </TooltipTrigger>
        <TooltipContent>Top</TooltipContent>
      </Tooltip>

      <Tooltip position="right">
        <TooltipTrigger asChild>
          <Button>Show on right</Button>
        </TooltipTrigger>
        <TooltipContent>Right</TooltipContent>
      </Tooltip>

      <Tooltip position="bottom">
        <TooltipTrigger asChild>
          <Button>Show on bottom</Button>
        </TooltipTrigger>
        <TooltipContent>Bottom</TooltipContent>
      </Tooltip>

      <Tooltip position="left">
        <TooltipTrigger asChild>
          <Button>Show on left</Button>
        </TooltipTrigger>
        <TooltipContent>Left</TooltipContent>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available tooltip positions displayed together, matching the USWDS design system example.',
      },
    },
  },
}

// Longer content
export const LongerContent: Story = {
  args: {
    position: 'top',
  },
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button>Hover for more info</Button>
      </TooltipTrigger>
      <TooltipContent>This is a longer tooltip message</TooltipContent>
    </Tooltip>
  ),
}

// With different button variants
export const WithDifferentButtonVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Tooltip position="top">
        <TooltipTrigger asChild>
          <Button variant="primary">Primary</Button>
        </TooltipTrigger>
        <TooltipContent>Primary button tooltip</TooltipContent>
      </Tooltip>

      <Tooltip position="top">
        <TooltipTrigger asChild>
          <Button variant="secondary">Secondary</Button>
        </TooltipTrigger>
        <TooltipContent>Secondary button tooltip</TooltipContent>
      </Tooltip>

      <Tooltip position="top">
        <TooltipTrigger asChild>
          <Button variant="outline">Outline</Button>
        </TooltipTrigger>
        <TooltipContent>Outline button tooltip</TooltipContent>
      </Tooltip>

      <Tooltip position="top">
        <TooltipTrigger asChild>
          <Button variant="ghost">Ghost</Button>
        </TooltipTrigger>
        <TooltipContent>Ghost button tooltip</TooltipContent>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltips can be used with different button variants.',
      },
    },
  },
}

// Keyboard navigation story
export const KeyboardNavigation: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-gray-70">Use Tab to focus on the buttons and see the tooltips appear:</p>
      <div className="flex gap-4">
        <Tooltip position="top">
          <TooltipTrigger asChild>
            <Button>First button</Button>
          </TooltipTrigger>
          <TooltipContent>Tooltip for first button</TooltipContent>
        </Tooltip>

        <Tooltip position="top">
          <TooltipTrigger asChild>
            <Button>Second button</Button>
          </TooltipTrigger>
          <TooltipContent>Tooltip for second button</TooltipContent>
        </Tooltip>

        <Tooltip position="top">
          <TooltipTrigger asChild>
            <Button>Third button</Button>
          </TooltipTrigger>
          <TooltipContent>Tooltip for third button</TooltipContent>
        </Tooltip>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltips are accessible via keyboard navigation. Use Tab to focus on elements and tooltips will appear on focus.',
      },
    },
  },
}

