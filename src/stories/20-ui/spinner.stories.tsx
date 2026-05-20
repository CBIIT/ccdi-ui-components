import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

const meta = {
  title: "UI/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          'An indeterminate loading indicator using `LoopIcon` with `animate-spin`, `role="status"`, and an accessible label. Resize or recolor via `className`.',
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Spinner />,
}

export const Larger: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner />
      <Spinner className="size-6" />
      <Spinner className="size-8 text-primary" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Default `size-4`; override with `size-*` and token colors.",
      },
    },
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="text-sm flex items-center gap-2 font-public-sans text-gray-70">
      <Spinner className="size-5 text-cerulean-50" />
      <span>Loading content…</span>
    </div>
  ),
}

export const InsideButton: Story = {
  render: () => (
    <Button type="button" disabled variant="primary" className="gap-2">
      <Spinner className="size-4 text-primary-foreground" />
      Submitting
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story: "Typical pattern: disabled primary button with spinner + short label.",
      },
    },
  },
}
