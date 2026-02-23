import type { Meta, StoryObj } from "@storybook/react-vite"
import { TreeView } from "@/components/blocks/treeview"

const meta = {
  title: "Blocks/TreeView",
  component: TreeView,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TreeView>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: [
      {
        id: "1",
        name: "Documents",
        children: [
          {
            id: "1-1",
            name: "Projects",
            children: [
              {
                id: "1-1-1",
                name: "Project A",
              },
              {
                id: "1-1-2",
                name: "Project B",
              },
              {
                id: "1-1-3",
                name: "Project C",
              },
            ],
          },
          {
            id: "1-2",
            name: "Reports",
            children: [
              {
                id: "1-2-1",
                name: "Annual Report 2024",
              },
              {
                id: "1-2-2",
                name: "Quarterly Report Q4",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        name: "Media",
        children: [
          {
            id: "2-1",
            name: "Images",
          },
          {
            id: "2-2",
            name: "Videos",
          },
        ],
      },
      {
        id: "3",
        name: "Settings",
      },
    ],
    initialSelectedItemId: "1-1-1",
    ariaLabel: "Document navigation",
    className: "min-w-[400px]",
  },
}
