import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Pie, PieChart, LabelList, Sector, Label } from "recharts"
import type { PieSectorDataItem } from "recharts/types/polar/Pie"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/charts/chart"

const meta = {
  title: "Charts/Pie Chart",
  component: PieChart,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Pie charts show the relationship of parts to a whole. Built with Recharts and follows USWDS design guidelines with proper accessibility features.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

PieChart.displayName = "PieChart"

// Default pie chart
export const Default: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">Pie Chart</h2>
        <p className="text-sm text-muted-foreground">Browser usage distribution</p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              chrome: {
                label: "Chrome",
                color: "var(--color-blue-60v)",
              },
              safari: {
                label: "Safari",
                color: "var(--color-cyan-30v)",
              },
              firefox: {
                label: "Firefox",
                color: "var(--color-orange-40v)",
              },
              edge: {
                label: "Edge",
                color: "var(--color-green-cool-40v)",
              },
              other: {
                label: "Other",
                color: "var(--color-gray-30)",
              },
            } as ChartConfig
          }
        >
          <PieChart {...args}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={[
                {
                  browser: "chrome",
                  visitors: 275,
                  fill: "var(--color-chrome)",
                },
                {
                  browser: "safari",
                  visitors: 200,
                  fill: "var(--color-safari)",
                },
                {
                  browser: "firefox",
                  visitors: 187,
                  fill: "var(--color-firefox)",
                },
                { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
                { browser: "other", visitors: 90, fill: "var(--color-other)" },
              ]}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={0}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing browser distribution for the last 6 months
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic pie chart showing browser usage distribution.",
      },
    },
  },
}

// with labels
export const WithLabels: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">Pie Chart</h2>
        <p className="text-sm text-muted-foreground">Browser usage distribution</p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              visitors: {
                label: "Visitors",
              },
              chrome: {
                label: "Chrome",
                color: "var(--color-blue-60v)",
              },
              safari: {
                label: "Safari",
                color: "var(--color-cyan-30v)",
              },
              firefox: {
                label: "Firefox",
                color: "var(--color-orange-40v)",
              },
              edge: {
                label: "Edge",
                color: "var(--color-green-cool-40v)",
              },
              other: {
                label: "Other",
                color: "var(--color-gray-30)",
              },
            } as ChartConfig
          }
          className="[&_.recharts-pie-label-text]:fill-gray-900"
        >
          <PieChart {...args}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={[
                {
                  browser: "chrome",
                  visitors: 275,
                  fill: "var(--color-chrome)",
                },
                {
                  browser: "safari",
                  visitors: 200,
                  fill: "var(--color-safari)",
                },
                {
                  browser: "firefox",
                  visitors: 187,
                  fill: "var(--color-firefox)",
                },
                { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
                { browser: "other", visitors: 90, fill: "var(--color-other)" },
              ]}
              dataKey="visitors"
              nameKey="browser"
              label
              innerRadius={0}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing browser distribution for the last 6 months
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic pie chart showing browser usage distribution.",
      },
    },
  },
}

// without lines
export const CustomLabel: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">Pie Chart - Custom Label</h2>
        <p className="text-sm text-muted-foreground">Browser usage distribution</p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              visitors: {
                label: "Visitors",
              },
              chrome: {
                label: "Chrome",
                color: "var(--color-blue-60v)",
              },
              safari: {
                label: "Safari",
                color: "var(--color-cyan-30v)",
              },
              firefox: {
                label: "Firefox",
                color: "var(--color-orange-40v)",
              },
              edge: {
                label: "Edge",
                color: "var(--color-green-cool-40v)",
              },
              other: {
                label: "Other",
                color: "var(--color-gray-30)",
              },
            } as ChartConfig
          }
          className="[&_.recharts-pie-label-text]:fill-gray-900"
        >
          <PieChart {...args}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent nameKey="visitors" hideLabel />}
            />
            <Pie
              data={[
                {
                  browser: "chrome",
                  visitors: 275,
                  fill: "var(--color-chrome)",
                },
                {
                  browser: "safari",
                  visitors: 200,
                  fill: "var(--color-safari)",
                },
                {
                  browser: "firefox",
                  visitors: 187,
                  fill: "var(--color-firefox)",
                },
                { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
                { browser: "other", visitors: 90, fill: "var(--color-other)" },
              ]}
              dataKey="visitors"
              nameKey="browser"
              label
              strokeWidth={0}
              innerRadius={0}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing browser distribution for the last 6 months
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic pie chart showing browser usage distribution.",
      },
    },
  },
}

// with LabelList
export const WithLabelList: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">Pie Chart - Label List</h2>
        <p className="text-sm text-muted-foreground">Browser usage distribution</p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              visitors: {
                label: "Visitors",
              },
              chrome: {
                label: "Chrome",
                color: "var(--color-blue-60v)",
              },
              safari: {
                label: "Safari",
                color: "var(--color-cyan-30v)",
              },
              firefox: {
                label: "Firefox",
                color: "var(--color-orange-40v)",
              },
              edge: {
                label: "Edge",
                color: "var(--color-green-cool-40v)",
              },
              other: {
                label: "Other",
                color: "var(--color-gray-30)",
              },
            } as ChartConfig
          }
        >
          <PieChart {...args}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent nameKey="visitors" hideLabel />}
            />
            <Pie
              data={[
                {
                  browser: "chrome",
                  visitors: 275,
                  fill: "var(--color-chrome)",
                },
                {
                  browser: "safari",
                  visitors: 200,
                  fill: "var(--color-safari)",
                },
                {
                  browser: "firefox",
                  visitors: 187,
                  fill: "var(--color-firefox)",
                },
                { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
                { browser: "other", visitors: 90, fill: "var(--color-other)" },
              ]}
              dataKey="visitors"
              innerRadius={0}
            >
              <LabelList dataKey="browser" stroke="none" fontSize={12} fill="var(--color-white)" />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing browser distribution for the last 6 months
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic pie chart showing browser usage distribution.",
      },
    },
  },
}

// Pie chart with legend
export const WithLegend: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">Pie Chart - Legend</h2>
        <p className="text-sm text-muted-foreground">Browser usage distribution</p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              chrome: {
                label: "Chrome",
                color: "var(--color-blue-60v)",
              },
              safari: {
                label: "Safari",
                color: "var(--color-cyan-30v)",
              },
              firefox: {
                label: "Firefox",
                color: "var(--color-orange-40v)",
              },
              edge: {
                label: "Edge",
                color: "var(--color-green-cool-40v)",
              },
              other: {
                label: "Other",
                color: "var(--color-gray-30)",
              },
            } as ChartConfig
          }
        >
          <PieChart {...args}>
            <ChartLegend content={<ChartLegendContent />} />
            <Pie
              data={[
                {
                  browser: "chrome",
                  visitors: 275,
                  fill: "var(--color-chrome)",
                },
                {
                  browser: "safari",
                  visitors: 200,
                  fill: "var(--color-safari)",
                },
                {
                  browser: "firefox",
                  visitors: 187,
                  fill: "var(--color-firefox)",
                },
                { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
                { browser: "other", visitors: 90, fill: "var(--color-other)" },
              ]}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={0}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing browser distribution for the last 6 months
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic pie chart showing browser usage distribution.",
      },
    },
  },
}

// Donut chart
export const Donut: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">Pie Chart - Donut</h2>
        <p className="text-sm text-muted-foreground">Browser usage distribution</p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              visitors: {
                label: "Visitors",
              },
              chrome: {
                label: "Chrome",
                color: "var(--color-blue-60v)",
              },
              safari: {
                label: "Safari",
                color: "var(--color-cyan-30v)",
              },
              firefox: {
                label: "Firefox",
                color: "var(--color-orange-40v)",
              },
              edge: {
                label: "Edge",
                color: "var(--color-green-cool-40v)",
              },
              other: {
                label: "Other",
                color: "var(--color-gray-30)",
              },
            } as ChartConfig
          }
        >
          <PieChart {...args}>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={[
                { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
                { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
                { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
                { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
                { browser: "other", visitors: 90, fill: "var(--color-other)" },
              ]}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={70}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Annual budget distribution across departments
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A donut chart (pie chart with inner radius) showing budget allocation.",
      },
    },
  },
}

// Donut chart with active segment
export const DonutActive: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">Pie Chart - Donut Active</h2>
        <p className="text-sm text-muted-foreground">Browser usage distribution</p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              visitors: {
                label: "Visitors",
              },
              chrome: {
                label: "Chrome",
                color: "var(--color-blue-60v)",
              },
              safari: {
                label: "Safari",
                color: "var(--color-cyan-30v)",
              },
              firefox: {
                label: "Firefox",
                color: "var(--color-orange-40v)",
              },
              edge: {
                label: "Edge",
                color: "var(--color-green-cool-40v)",
              },
              other: {
                label: "Other",
                color: "var(--color-gray-30)",
              },
            } as ChartConfig
          }
        >
          <PieChart {...args}>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={[
                { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
                { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
                { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
                { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
                { browser: "other", visitors: 90, fill: "var(--color-other)" },
              ]}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={70}
              activeShape={<Sector outerRadius={130} />}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Annual budget distribution across departments
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A pie chart with active segment showing browser usage distribution.",
      },
    },
  },
}

// Interactive donut chart
export const DonutInteractive: Story = {
  render: function Render(args) {
    const chartBrowserData = [
      { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
      { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
      { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
      { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
      { browser: "other", visitors: 90, fill: "var(--color-other)" },
    ]

    const chartBrowserConfig = {
      visitors: {
        label: "Visitors",
      },
      chrome: {
        label: "Chrome",
        color: "var(--color-blue-60v)",
      },
      safari: {
        label: "Safari",
        color: "var(--color-cyan-30v)",
      },
      firefox: {
        label: "Firefox",
        color: "var(--color-orange-40v)",
      },
      edge: {
        label: "Edge",
        color: "var(--color-green-cool-40v)",
      },
      other: {
        label: "Other",
        color: "var(--color-gray-30)",
      },
    } satisfies ChartConfig

    const id = "pie-interactive"
    const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined)
    const total = chartBrowserData.reduce((sum, item) => sum + item.visitors, 0)

    return (
      <Card data-chart={id} className="flex flex-col max-w-xl">
        <CardHeader className="flex-row items-start space-y-0 pb-0">
          <div className="grid gap-1">
            <h2 className="font-bold font-merriweather text-lg">Pie Chart - Interactive</h2>
            <p className="text-sm text-muted-foreground">Browser usage distribution</p>
          </div>
        </CardHeader>
        <CardContent className="flex flex-1 justify-center pb-0">
          <ChartContainer
            id={id}
            config={chartBrowserConfig}
            className="mx-auto aspect-square w-full max-w-[300px]"
          >
            <PieChart {...args}>
              <Pie
                data={chartBrowserData}
                dataKey="visitors"
                nameKey="browser"
                innerRadius={60}
                strokeWidth={5}
                activeIndex={activeIndex}
                onMouseEnter={(_, index) => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(undefined)}
                activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
                  <g>
                    <Sector {...props} outerRadius={outerRadius} />
                    <Sector
                      {...props}
                      outerRadius={outerRadius + 8}
                      innerRadius={outerRadius + 5}
                    />
                  </g>
                )}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      const displayValue =
                        activeIndex !== undefined ? chartBrowserData[activeIndex].visitors : total
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-xl font-bold"
                          >
                            {displayValue.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 16}
                            className="fill-muted-foreground"
                          >
                            Visitors
                          </tspan>
                        </text>
                      )
                    }
                    return null
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="text-muted-foreground leading-none">
            Hover over a segment to highlight it and see its value
          </div>
        </CardFooter>
      </Card>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "An interactive pie chart that responds to mouse hover. Hovering over a segment highlights it with an animated active shape and displays its value in the center.",
      },
    },
  },
}
