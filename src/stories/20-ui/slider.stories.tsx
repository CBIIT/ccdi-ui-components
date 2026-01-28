import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'

const meta: Meta<typeof Slider> = {
  title: 'UI/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A slider component for selecting values from a range, following U.S. Web Design System guidelines.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// Simple slider with default value
export const Default: Story = {
  render: (args) => {
    const [value, setValue] = React.useState([33])
    
    return (
      <div className="w-96 p-6">
        <div className="mb-4">
          <Slider {...args}
            defaultValue={[33]} 
            max={100} 
            step={1}
            onValueChange={setValue}
          />
        </div>
      </div>
    )
  },
}


// Range slider with two thumbs
export const RangeSlider: Story = {
  render: () => {
    const [value, setValue] = React.useState([25, 75])
    
    return (
      <div className="w-96 p-6">
        <div className="mb-4">
          <Label htmlFor="range-slider">Price Range ${value[0]} - ${value[1]}</Label>
          <Slider 
            defaultValue={[25, 75]} 
            max={100}
            step={1}
            onValueChange={setValue}
          />
        </div>
      </div>
    )
  },
}
