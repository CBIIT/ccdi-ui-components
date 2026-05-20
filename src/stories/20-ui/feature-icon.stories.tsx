import type { Meta, StoryObj } from "@storybook/react-vite"

import { FeatureIcon, type IconType } from "@/components/ui/feature-icon"

const ICONS: IconType[] = ["study", "participant", "close", "home", "menu", "search", "launch"]

const meta = {
  title: "UI/Feature Icon",
  component: FeatureIcon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "USWDS-style SVG set via `feature-icon` (default `size-10`, `text-current` / `fill-current`). Use `icon` to choose the glyph; override size, color, or motion with `className` (e.g. `animate-spin`).",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "select",
      options: ICONS,
    },
  },
} satisfies Meta<typeof FeatureIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: "study",
  },
}

export const Showcase: Story = {
  args: { icon: "study" },
  render: () => (
    <div className="max-w-md sm:grid-cols-3 grid grid-cols-2 gap-x-8 gap-y-6">
      {ICONS.map((name) => (
        <div key={name} className="flex flex-col items-center gap-2 text-center">
          <FeatureIcon icon={name} className="text-gray-70" />
          <code className="text-xs text-muted-foreground">{name}</code>
        </div>
      ))}
    </div>
  ),
}

export const ColoredLarge: Story = {
  args: { icon: "launch" },
  render: () => (
    <div className="flex gap-8">
      <FeatureIcon icon="launch" className="size-12 text-cerulean-50" />
      <FeatureIcon icon="study" className="size-12 text-teal-50" />
    </div>
  ),
}
