import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Icon } from "@/components/ui/icon"

const meta = {
  title: "UI/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Archive</Button>
      <Button variant="outline">Report</Button>
      <Button variant="outline">Snooze</Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical" className="h-fit">
      <Button variant="outline" size="icon">
        <Icon icon="add" />
      </Button>
      <Button variant="outline" size="icon">
        <Icon icon="remove" />
      </Button>
      <Button variant="outline" size="icon">
        <Icon icon="delete" />
      </Button>
    </ButtonGroup>
  ),
}

export const MixedVariants: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <ButtonGroup>
        <Button variant="outline">Cancel</Button>
        <Button variant="primary">Continue</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="secondary">Delete</Button>
        <Button variant="secondary">Archive</Button>
        <Button variant="secondary">Remove</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="info">Info</Button>
        <Button variant="info">Help</Button>
        <Button variant="info">About</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="success">Approve</Button>
        <Button variant="success">Accept</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button variant="warning">Warning</Button>
        <Button variant="warning">Caution</Button>
      </ButtonGroup>
    </div>
  ),
}

// export const MailActions: Story = {
//   name: "Email Actions Example",
//   render: () => (
//     <ButtonGroup>
//       <ButtonGroup>
//         <Button variant="outline" size="icon" aria-label="Go Back">
//           <Icon icon="arrow_back" />
//         </Button>
//       </ButtonGroup>
//       <ButtonGroup>
//         <Button variant="outline">
//           <Icon icon="archive" /> Archive
//         </Button>
//         <Button variant="outline">Report</Button>
//       </ButtonGroup>
//       <ButtonGroup>
//         <Button variant="outline">
//           <Icon icon="schedule" /> Snooze
//         </Button>
//         <Button variant="outline">
//           <Icon icon="check" /> Mark as Read
//         </Button>
//       </ButtonGroup>
//       <ButtonGroup>
//         <Button variant="secondary" size="icon">
//           <Icon icon="delete" />
//         </Button>
//       </ButtonGroup>
//     </ButtonGroup>
//   ),
// }
