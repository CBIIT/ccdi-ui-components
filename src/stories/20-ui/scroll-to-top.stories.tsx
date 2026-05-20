import type { Meta, StoryObj } from "@storybook/react-vite"
import { ScrollToTop } from "@/components/ui/scroll-to-top"

const meta = {
  title: "UI/Scroll to top",
  component: ScrollToTop,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "NCI/USWDS-style fixed return-to-top tile (cerulean-50 background, rounded top-left, uppercase label). Flush bottom-right, z-10, `box-border`, 250ms fade/transition (`opacity`). With `threshold`, it stays invisible until scrolled; without `threshold`, it is always opaque.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    threshold: {
      control: "number",
      description: "Show only after scrolling this many pixels (omit = always visible)",
    },
    label: {
      control: "text",
    },
  },
  decorators: [
    (Story) => (
      <div className="relative min-h-[200vh] bg-gray-5 p-6">
        <p className="max-w-prose font-public-sans text-gray-90">
          Scroll down to try the control; it uses smooth scrolling on the document.
        </p>
        <div className="rounded text-sm mt-[120vh] border border-dashed border-gray-30 p-4 text-gray-70">
          Bottom of the demo page.
        </div>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ScrollToTop>

export default meta
type Story = StoryObj<typeof meta>

export const AlwaysVisible: Story = {}

export const AfterScroll: Story = {
  args: {
    threshold: 200,
  },
}
