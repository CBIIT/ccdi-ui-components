import type { Meta, StoryObj } from "@storybook/react-vite"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"

const meta = {
  title: "UI/Sonner",
  component: Toaster,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Toast stack powered by Sonner with project icons (`CheckCircleIcon`, `InfoIcon`, `WarningIcon`, `ErrorIcon`, `LoopIcon`) mapped on the `<Toaster />`. Trigger notifications with `toast()` / `toast.success()` / … from `sonner`.",
      },
    },
  },
  // decorators: [
  //   (Story) => (

  //   ),
  // ],
  tags: ["autodocs"],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <>
      <div className="max-w-lg relative min-h-[12rem] w-full p-6">
        <Toaster position="bottom-right" />
      </div>
      <Button
        type="button"
        variant="outline"
        onClick={() =>
          toast("Notification", {
            description: "Default message without a semantic type.",
          })
        }
      >
        Show default toast
      </Button>
    </>
  ),
}

export const Success: Story = {
  render: () => (
    <Button
      type="button"
      variant="outline"
      onClick={() =>
        toast.success("Changes saved", {
          description: "Your profile was updated successfully.",
        })
      }
    >
      Show success
    </Button>
  ),
}

export const Info: Story = {
  render: () => (
    <Button
      type="button"
      variant="outline"
      onClick={() =>
        toast.info("New guidance available", {
          description: "Review the updated data submission checklist.",
        })
      }
    >
      Show info
    </Button>
  ),
}

export const Warning: Story = {
  render: () => (
    <Button
      type="button"
      variant="outline"
      onClick={() =>
        toast.warning("Session ending soon", {
          description: "You will be signed out in 2 minutes unless you continue.",
        })
      }
    >
      Show warning
    </Button>
  ),
}

export const Error: Story = {
  render: () => (
    <Button
      type="button"
      variant="outline"
      onClick={() =>
        toast.error("Request failed", {
          description: "We could not reach the server. Try again in a moment.",
        })
      }
    >
      Show error
    </Button>
  ),
}

export const Loading: Story = {
  render: () => (
    <Button
      type="button"
      variant="outline"
      onClick={() => {
        const id = toast.loading("Loading report…")
        window.setTimeout(() => {
          toast.success("Report ready", { id })
        }, 2000)
      }}
    >
      Show loading → success
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Starts as a loading toast (spinning icon), then updates to success with the same `id`—typical async pattern.",
      },
    },
  },
}
