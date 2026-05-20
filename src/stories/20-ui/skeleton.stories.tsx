import type { Meta, StoryObj } from "@storybook/react-vite"

import { Skeleton } from "@/components/ui/skeleton"

const meta = {
  title: "UI/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Placeholder block with `animate-pulse` and muted background. Resize and shape with Tailwind via `className` (lines, circles, full-width cards).",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Skeleton className="h-12 w-48" />,
}

export const Shapes: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <Skeleton className="size-12 rounded-full" />
      <Skeleton className="h-4 w-64" />
      <Skeleton className="h-4 w-64" />
      <Skeleton className="h-4 w-64" />
      {/* <Skeleton className="h-32 w-full max-w-sm rounded-lg" /> */}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Line, circular (e.g. avatar), and large block variants.",
      },
    },
  },
}

export const LoadingCard: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="max-w-md flex w-full flex-col gap-4 rounded-lg border border-border p-4">
        <div className="flex items-center gap-3">
          <Skeleton className="size-12 shrink-0 rounded-full" />
          <div className="flex flex-1 flex-col gap-2">
            <Skeleton className="h-3 w-64" />
            <Skeleton className="h-3 w-64" />
            <Skeleton className="h-3 w-64" />
            <Skeleton className="h-3 w-48" />
          </div>
        </div>
      </div>
      <div className="max-w-md flex w-full flex-col gap-4 rounded-lg border border-border p-4">
        <div className="flex items-center gap-3">
          <Skeleton className="size-12 shrink-0 rounded-full" />
          <div className="flex flex-1 flex-col gap-2">
            <Skeleton className="h-3 w-64" />
            <Skeleton className="h-3 w-64" />
            <Skeleton className="h-3 w-64" />
            <Skeleton className="h-3 w-48" />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Composed placeholders for a loading card pattern.",
      },
    },
  },
}
