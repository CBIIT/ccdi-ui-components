import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

const meta = {
  title: "UI/Hover Card",
  component: HoverCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Rich preview surfaced on hover (and focus*) via Radix Hover Card—useful for profiles, definitions, or short related content. *Keyboard follows focusable triggers.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button variant="outline">Hover for preview</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <p className="text-sm font-semibold font-public-sans text-foreground">Preview title</p>
          <p className="text-sm leading-snug font-public-sans text-muted-foreground">
            Hover cards can hold a short summary or metadata. They stay open while the pointer rests
            on the trigger or panel.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

/** Text-style trigger — common for @mentions or inline glossary terms. */
export const LinkTrigger: Story = {
  render: () => (
    <p className="max-w-md text-base font-public-sans text-gray-90">
      Our design system adopts components from{" "}
      <HoverCard>
        <HoverCardTrigger asChild>
          <button
            type="button"
            className="underline decoration-blue-60v underline-offset-2 hover:text-blue-warm-70v focus-visible:rounded-sm focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-blue-40"
          >
            the CCDI registry
          </button>
        </HoverCardTrigger>
        <HoverCardContent className="w-72">
          <p className="text-sm font-public-sans text-muted-foreground">
            Packages are published under the NIH CCDI program for reuse in downstream apps.
          </p>
        </HoverCardContent>
      </HoverCard>{" "}
      and aligns them with USWDS-friendly tokens.
    </p>
  ),
}

// All Positions showcase - matching USWDS example
export const AllPositions: Story = {
  render: () => (
    <div className="flex size-full flex-col items-center justify-center gap-8 p-20">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button>Open above</Button>
        </HoverCardTrigger>
        <HoverCardContent side="top" align="center" className="w-64">
          <p className="text-sm font-public-sans text-muted-foreground">
            <code className="text-foreground">side=&quot;top&quot;</code> flips the card above the
            trigger.
          </p>
        </HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button>Open right</Button>
        </HoverCardTrigger>
        <HoverCardContent side="right" align="center" className="w-64">
          <p className="text-sm font-public-sans text-muted-foreground">
            <code className="text-foreground">side=&quot;right&quot;</code> flips the card right the
            trigger.
          </p>
        </HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button>Open bottom</Button>
        </HoverCardTrigger>
        <HoverCardContent side="bottom" align="center" className="w-64">
          <p className="text-sm font-public-sans text-muted-foreground">
            <code className="text-foreground">side=&quot;bottom&quot;</code> flips the card below
            the trigger.
          </p>
        </HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button>Open left</Button>
        </HoverCardTrigger>
        <HoverCardContent side="left" align="center" className="w-64">
          <p className="text-sm font-public-sans text-muted-foreground">
            <code className="text-foreground">side=&quot;left&quot;</code> flips the card left the
            trigger.
          </p>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
}
