import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import type { DateRange } from "react-day-picker"

import { Calendar } from "@/components/ui/calendar"

const meta = {
  title: "UI/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Month grid built on react-day-picker with this library’s Button, tokens, and navigation icons. Supports single, multiple, and range selection via DayPicker `mode`.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: function CalendarSingle() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        defaultMonth={date}
        className="rounded-lg border border-border"
      />
    )
  },
}

export const Range: Story = {
  render: function CalendarRange() {
    const [range, setRange] = React.useState<DateRange | undefined>(undefined)

    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        className="rounded-lg border border-border"
      />
    )
  },
}
