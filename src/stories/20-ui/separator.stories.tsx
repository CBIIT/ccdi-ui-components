import type { Meta, StoryObj } from "@storybook/react-vite"
import { Separator } from "@/components/ui/separator"

const meta = {
  title: "UI/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A visual separator element with horizontal and vertical orientations following USWDS design guidelines.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "The orientation of the separator",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "default", "lg"],
      description: "The thickness of the separator",
    },
    decorative: {
      control: "boolean",
      description: "Whether the separator is decorative (ignored by screen readers) or semantic",
    },
  },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  render: () => (
    <div className="w-64 space-y-4">
      <div className="text-sm text-gray-70">Content above separator</div>
      <Separator />
      <div className="text-sm text-gray-70">Content below separator</div>
    </div>
  ),
}

// Horizontal orientations
export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
  render: (args) => (
    <div className="w-64 space-y-4">
      <div className="text-sm text-gray-70">Content above</div>
      <Separator {...args} />
      <div className="text-sm text-gray-70">Content below</div>
    </div>
  ),
}

// Vertical orientation
export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => (
    <div className="flex h-16 items-center space-x-4">
      <div className="text-sm text-gray-70">Left content</div>
      <Separator {...args} />
      <div className="text-sm text-gray-70">Right content</div>
    </div>
  ),
}

// Size variations - Small
export const Small: Story = {
  args: {
    size: "sm",
  },
  render: (args) => (
    <div className="w-64 space-y-4">
      <div className="text-sm text-gray-70">Small separator</div>
      <Separator {...args} />
      <div className="text-sm text-gray-70">Content below</div>
    </div>
  ),
}

// Size variations - Large
export const Large: Story = {
  args: {
    size: "lg",
  },
  render: (args) => (
    <div className="w-64 space-y-4">
      <div className="text-sm text-gray-70">Large separator</div>
      <Separator {...args} />
      <div className="text-sm text-gray-70">Content below</div>
    </div>
  ),
}

// Semantic separator (not decorative)
export const Semantic: Story = {
  args: {
    decorative: false,
  },
  render: (args) => (
    <div className="w-64 space-y-4">
      <div className="text-sm text-gray-70">Section 1</div>
      <Separator {...args} />
      <div className="text-sm text-gray-70">Section 2</div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Semantic separators are announced by screen readers and should be used when the separation has meaning for understanding the content structure.",
      },
    },
  },
}

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div className="w-64 space-y-6">
      <div>
        <div className="text-xs text-gray-60 mb-2">Small</div>
        <Separator size="sm" />
      </div>
      <div>
        <div className="text-xs text-gray-60 mb-2">Default</div>
        <Separator size="default" />
      </div>
      <div>
        <div className="text-xs text-gray-60 mb-2">Large</div>
        <Separator size="lg" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All available separator sizes displayed together.",
      },
    },
  },
}

// Orientation comparison
export const OrientationComparison: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <div className="text-sm text-gray-70 mb-4">Horizontal Separator</div>
        <div className="w-64 space-y-4">
          <div className="text-xs text-gray-60">Content above</div>
          <Separator orientation="horizontal" />
          <div className="text-xs text-gray-60">Content below</div>
        </div>
      </div>

      <div>
        <div className="text-sm text-gray-70 mb-4">Vertical Separator</div>
        <div className="flex h-16 items-center space-x-4">
          <div className="text-xs text-gray-60">Left</div>
          <Separator orientation="vertical" />
          <div className="text-xs text-gray-60">Right</div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Comparison of horizontal and vertical separator orientations.",
      },
    },
  },
}

// Usage in card-like layout
export const InCardLayout: Story = {
  render: () => (
    <div className="max-w-sm mx-auto bg-white border border-gray-30 rounded-lg p-6">
      <h3 className="text-lg font-bold text-gray-90 mb-2">Card Title</h3>
      <p className="text-sm text-gray-70 mb-4">
        Some descriptive text content that explains the card.
      </p>

      <Separator className="my-4" />

      <div className="space-y-2">
        <div className="text-sm font-medium text-gray-80">Details</div>
        <div className="text-sm text-gray-60">Additional information or actions</div>
      </div>

      <Separator className="my-4" />

      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-60">Footer content</span>
        <button className="text-sm text-blue-60 hover:text-blue-70">Action</button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example usage of separators in a card-like layout to divide sections.",
      },
    },
  },
}
