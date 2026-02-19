import type { Meta, StoryObj } from "@storybook/react-vite"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const meta = {
  title: "UI/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://placehold.co/64x64" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
}

export const Fallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://invalid-url.example.com/image.jpg" alt="@user" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
}

export const CustomColors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback className="bg-cerulean-60v text-white">JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-cranberry-60v text-white">AM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-golden-60v text-white">SK</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-teal-60v text-white">RB</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const DelayedFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://invalid-url.example.com/image.jpg" alt="@user" />
      <AvatarFallback delay={600}>DL</AvatarFallback>
    </Avatar>
  ),
}
