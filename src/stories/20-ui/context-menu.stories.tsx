import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuGroup,
} from "@/components/ui/context-menu"

const meta: Meta<typeof ContextMenu> = {
  title: "UI/Context Menu",
  component: ContextMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A context menu displays a list of actions when a user right-clicks on an element. Built with native HTML/CSS following USWDS design principles.",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {},
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="flex h-[200px] w-[300px] items-center justify-center rounded border-2 border-dashed border-gray-30 bg-gray-5 text-sm text-gray-70">
          Right click here
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Settings</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Logout</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}
