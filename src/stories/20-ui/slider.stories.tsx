import {useState} from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

const meta: Meta<typeof Slider> = {
  title: "UI/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A slider component for selecting values from a range, following U.S. Web Design System guidelines.",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

// Simple slider with default value
export const Default: Story = {
  render: function Render(args) {
    const [value, setValue] = useState([33])

    return (
      <div className="w-96 p-6">
        <div className="mb-4">
          <Slider {...args} value={value} defaultValue={[33]} max={100} step={1} onValueChange={setValue} />
        </div>
      </div>
    )
  },
}

// Range slider with two thumbs
export const RangeSlider: Story = {
  render: function Render() {
    const [value, setValue] = useState([25, 75])

    return (
      <div className="w-96 p-6">
        <div className="mb-4">
          <Label htmlFor="range-slider">
            Price Range ${value[0]} - ${value[1]}
          </Label>
          <Slider value={value}  defaultValue={[25, 75]} max={100} step={1} onValueChange={setValue} />
        </div>
      </div>
    )
  },
}
