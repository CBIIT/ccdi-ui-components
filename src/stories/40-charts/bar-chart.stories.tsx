import * as React from "react";
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  Rectangle,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/charts/chart";

const meta = {
  title: "Charts/Bar Chart",
  component: BarChart,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Bar charts are used to compare values across categories. Built with Recharts and follows USWDS design guidelines with proper accessibility features.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

BarChart.displayName = "BarChart";

// Default bar chart
export const Default: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">Bar Chart</h2>
        <p className="text-sm text-muted-foreground">
          A simple bar chart example
        </p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-blue-60v)", // var(--color-blue-60v)
              },
            } as ChartConfig
          }
        >
          <BarChart
            {...args}
            accessibilityLayer
            data={[
              { month: "January", desktop: 186 },
              { month: "February", desktop: 305 },
              { month: "March", desktop: 237 },
              { month: "April", desktop: 73 },
              { month: "May", desktop: 209 },
              { month: "June", desktop: 214 },
            ]}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic bar chart showing desktop visitors over 6 months.",
      },
    },
  },
};

// Horizontal bar chart
export const Horizontal: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Bar Chart - Horizontal
        </h2>
        <p className="text-sm text-muted-foreground">
          Comparing desktop visitors over 6 months
        </p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-blue-60v)", // var(--color-blue-60v)
              },
            } as ChartConfig
          }
        >
          <BarChart
            {...args}
            accessibilityLayer
            data={[
              { month: "January", desktop: 186 },
              { month: "February", desktop: 305 },
              { month: "March", desktop: 237 },
              { month: "April", desktop: 73 },
              { month: "May", desktop: 209 },
              { month: "June", desktop: 214 },
            ]}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <XAxis type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Horizontal layout for easier label reading
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Horizontal bar chart useful when category labels are long or when comparing values is the primary goal.",
      },
    },
  },
};

// Multi-series bar chart
export const Multiple: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Bar Chart - Multiple
        </h2>
        <p className="text-sm text-muted-foreground">
          Comparing desktop and mobile visitors
        </p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-blue-60v)", // var(--color-blue-60v)
              },
              mobile: {
                label: "Mobile",
                color: "var(--color-cyan-30v)", // var(--color-cyan-30v)
              },
            } as ChartConfig
          }
        >
          <BarChart
            {...args}
            accessibilityLayer
            data={[
              { month: "January", desktop: 186, mobile: 80 },
              { month: "February", desktop: 305, mobile: 200 },
              { month: "March", desktop: 237, mobile: 120 },
              { month: "April", desktop: 73, mobile: 190 },
              { month: "May", desktop: 209, mobile: 130 },
              { month: "June", desktop: 214, mobile: 140 },
            ]}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Comparing desktop and mobile visitors
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Bar chart comparing multiple data series side by side.",
      },
    },
  },
};

// Multi-series bar chart
export const Stacked: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Bar Chart - Stacked
        </h2>
        <p className="text-sm text-muted-foreground">
          Stacked bar chart comparing desktop and mobile visitors
        </p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-blue-60v)", // var(--color-blue-60v)
              },
              mobile: {
                label: "Mobile",
                color: "var(--color-cyan-30v)", // var(--color-cyan-30v)
              },
            } as ChartConfig
          }
        >
          <BarChart
            {...args}
            accessibilityLayer
            data={[
              { month: "January", desktop: 186, mobile: 80 },
              { month: "February", desktop: 305, mobile: 200 },
              { month: "March", desktop: 237, mobile: 120 },
              { month: "April", desktop: 73, mobile: 190 },
              { month: "May", desktop: 209, mobile: 130 },
              { month: "June", desktop: 214, mobile: 140 },
            ]}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="desktop"
              stackId="a"
              fill="var(--color-desktop)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="mobile"
              stackId="a"
              fill="var(--color-mobile)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Comparing desktop and mobile visitors
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Bar chart comparing multiple data series side by side.",
      },
    },
  },
};

// Bar chart with labels
export const Labels: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Bar Chart - Labels
        </h2>
        <p className="text-sm text-muted-foreground">
          A simple bar chart example with labels
        </p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-cyan-30v)", // var(--color-cyan-30v)
              },
            } as ChartConfig
          }
        >
          <BarChart
            {...args}
            accessibilityLayer
            data={[
              { month: "January", desktop: 186 },
              { month: "February", desktop: 305 },
              { month: "March", desktop: 237 },
              { month: "April", desktop: 73 },
              { month: "May", desktop: 209 },
              { month: "June", desktop: 214 },
            ]}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4}>
              <LabelList
                position="top"
                offset={8}
                fontSize={12}
                fill="var(--color-gray-90)"
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic bar chart showing desktop visitors over 6 months with labels on each bar.",
      },
    },
  },
};

// Horizontal bar chart
export const CustomLabels: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Bar Chart - Custom Labels
        </h2>
        <p className="text-sm text-muted-foreground">
          A basic bar chart example with custom labels
        </p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-blue-60v)", // var(--color-blue-60v)
              },
              label: {
                color: "var(--color-gray-10)",
              },
            } as ChartConfig
          }
        >
          <BarChart
            {...args}
            accessibilityLayer
            data={[
              { month: "January", desktop: 186 },
              { month: "February", desktop: 305 },
              { month: "March", desktop: 237 },
              { month: "April", desktop: 73 },
              { month: "May", desktop: 209 },
              { month: "June", desktop: 214 },
            ]}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4}>
              <LabelList
                dataKey="month"
                position="insideLeft"
                offset={8}
                className="fill-(--color-label)"
                fontSize={12}
              />
              <LabelList
                dataKey="desktop"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          A basic bar chart example with custom labels
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Horizontal bar chart useful when category labels are long or when comparing values is the primary goal.",
      },
    },
  },
};

// Mixed bar chart with different colors
export const Mixed: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Bar Chart - Mixed
        </h2>
        <p className="text-sm text-muted-foreground">
          A mixed bar chart with different colors
        </p>
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
                color: "var(--color-green-cool-50v)",
              },
              other: {
                label: "Other",
                color: "var(--color-gray-50)",
              },
            } as ChartConfig
          }
        >
          <BarChart
            {...args}
            accessibilityLayer
            data={[
              { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
              { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
              {
                browser: "firefox",
                visitors: 187,
                fill: "var(--color-firefox)",
              },
              { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
              { browser: "other", visitors: 90, fill: "var(--color-other)" },
            ]}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="browser"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <XAxis dataKey="visitors" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="visitors" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Horizontal bar chart with mixed colors - each bar has its own unique USWDS color based on the category.",
      },
    },
  },
};

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
    color: "var(--color-green-cool-50v)",
  },
  other: {
    label: "Other",
    color: "var(--color-gray-50)",
  },
} satisfies ChartConfig;

const chartBrowserData = [
  { browser: "chrome", visitors: 187, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 275, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

// Bar chart with custom active bar
export const CustomActiveBars: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Bar Chart - Custom Active Bars
        </h2>
        <p className="text-sm text-muted-foreground">
          A mixed bar chart with different colors and custom active bar
        </p>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartBrowserConfig}>
          <BarChart
            {...args}
            accessibilityLayer
            data={chartBrowserData}
            margin={{
              left: 0,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="browser"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartBrowserConfig[value as keyof typeof chartBrowserConfig]
                  ?.label
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="visitors"
              strokeWidth={2}
              radius={4}
              activeIndex={2}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                    fillOpacity={0.6}
                    stroke={props.payload.fill}
                    strokeDasharray={4}
                    strokeDashoffset={4}
                  />
                );
              }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Horizontal bar chart with mixed colors - each bar has its own unique USWDS color based on the category.",
      },
      source: {
        code: `"use client"

import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts"

import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  XAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
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
    color: "var(--color-green-cool-50v)",
  },
  other: {
    label: "Other",
    color: "var(--color-gray-50)",
  },
} satisfies ChartConfig;

const chartData = [
  { browser: "chrome", visitors: 187, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 275, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const ChartBarActive = () => {
  return (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Bar Chart - Custom Active Bars
        </h2>
        <p className="text-sm text-muted-foreground">
          A mixed bar chart with different colors and custom active bar
        </p>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="browser"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartBrowserConfig[value as keyof typeof chartBrowserConfig]
                  ?.label
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="visitors"
              strokeWidth={2}
              radius={4}
              activeIndex={2}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                    fillOpacity={0.6}
                    stroke={props.payload.fill}
                    strokeDasharray={4}
                    strokeDashoffset={4}
                  />
                );
              }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}

export default ChartBarActive;`.trim(),
      },
    },
  },
};

// Negative bar chart
export const Negative: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Bar Chart - Negative
        </h2>
        <p className="text-sm text-muted-foreground">January - June 2024</p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              visitors: {
                label: "Visitors",
              },
            } as ChartConfig
          }
        >
          <BarChart
            {...args}
            accessibilityLayer
            data={[
              { month: "January", visitors: 186 },
              { month: "February", visitors: 205 },
              { month: "March", visitors: -207 },
              { month: "April", visitors: 173 },
              { month: "May", visitors: -209 },
              { month: "June", visitors: 214 },
            ]}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel hideIndicator />}
            />
            <Bar dataKey="visitors">
              <LabelList
                position="top"
                dataKey="month"
                fillOpacity={1}
                fontSize={12}
              />
              {[
                { month: "January", visitors: 186 },
                { month: "February", visitors: 205 },
                { month: "March", visitors: -207 },
                { month: "April", visitors: 173 },
                { month: "May", visitors: -209 },
                { month: "June", visitors: 214 },
              ].map((item) => (
                <Cell
                  key={item.month}
                  radius={4}
                  fill={
                    item.visitors > 0
                      ? "var(--color-blue-60v)"
                      : "var(--color-cyan-30v)"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing positive and negative values with different colors
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Bar chart with positive and negative values - positive bars are blue, negative bars are red.",
      },
    },
  },
};
