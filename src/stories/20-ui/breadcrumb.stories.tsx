import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumb } from '@/components/ui/breadcrumb'

const meta = {
  title: 'UI/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of breadcrumb items with label and optional href',
      control: 'object',
    },
    ariaLabel: {
      description: 'Accessible label for the breadcrumb navigation',
      control: 'text',
    },
    wrap: {
      description: 'Whether breadcrumb items should wrap to multiple lines',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Breadcrumb>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Federal Contracting', href: '/federal-contracting' },
      { label: 'Contracting assistance programs', href: '/contracting-assistance' },
      { 
        label: 'Economically disadvantaged women-owned small business federal contracting program',
      },
    ],
  },
}

export const Wrapping: Story = {
  args: {
    wrap: true,
    items: [
      { label: 'Home', href: '/' },
      { label: 'Federal Contracting', href: '/federal-contracting' },
      { label: 'Contracting assistance programs', href: '/contracting-assistance' },
      { 
        label: 'Economically disadvantaged women-owned small business federal contracting program',
      },
    ],
  },
}
