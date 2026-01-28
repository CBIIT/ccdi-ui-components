import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useState, useEffect } from 'react'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'

const meta: Meta<typeof Progress> = {
  title: 'UI/Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A progress bar component that visually indicates the completion status of a task. Built with native HTML/CSS following USWDS design guidelines.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current progress value',
    },
    max: {
      control: { type: 'number' },
      description: 'Maximum value',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'error'],
      description: 'Visual style variant',
    },
    label: {
      control: { type: 'text' },
      description: 'Custom label text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = {
  args: {
    value: 60,
    variant: 'default',
  },
}

export const WithLabel: Story = {
  args: {
    value: 75,
  },
}

export const WithCustomLabel: Story = {
  args: {
    value: 60,
    label: 'Loading files...',
  },
}


export const Variants: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <div>
        <Progress value={60} variant="default" label='Default (Blue)' />
      </div>
      <div>
        <Progress value={85} variant="success" label='Success (Green)' />
      </div>
      <div>
        <Progress value={45} variant="warning" label='Warning (Orange)' />
      </div>
      <div>
        <Progress value={25} variant="error" label='Error (Red)' />
      </div>
    </div>
  ),
}

export const ProgressStates: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <div>
        <Progress value={0} label="Empty (0%)" />
      </div>
      <div>
        <Progress value={25} label="Quarter (25%)" />
      </div>
      <div>
        <Progress value={50} label="Half (50%)" />
      </div>
      <div>
        <Progress value={75} label="Three Quarters (75%)" />
      </div>
      <div>
        <Progress value={100} label="Complete (100%)" variant="success" />
      </div>
    </div>
  ),
}

export const Animated: Story = {
  render: () => {
    const AnimatedProgress = () => {
      const [progress, setProgress] = useState(0)

      useEffect(() => {
        const timer = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              return 0
            }
            return prev + 10
          })
        }, 500)

        return () => clearInterval(timer)
      }, [])

      return (
        <div className="w-96">
          <Progress value={progress} label="Loading..." />
        </div>
      )
    }

    return <AnimatedProgress />
  },
} 