import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";
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
} from "@/components/charts/chart";

const meta = {
  title: "Charts/Line Chart",
  component: LineChart,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Line charts display trends and changes over time or categories. Built with Recharts and follows USWDS design guidelines with proper accessibility features.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

LineChart.displayName = "LineChart";

// Format month abbreviation
const formatMonthTick = (value: string) => value.slice(0, 3);

// Default line chart with smooth curve
export const Default: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">Line Chart</h2>
        <p className="text-sm text-muted-foreground">
          Monthly visitor trend with smooth curve
        </p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-blue-60v)",
              },
            } as ChartConfig
          }
        >
          <LineChart
            {...args}
            accessibilityLayer
            data={[
              { month: "January", desktop: 186 },
              { month: "February", desktop: 305 },
              { month: "March", desktop: 237 },
              { month: "April", desktop: 173 },
              { month: "May", desktop: 209 },
              { month: "June", desktop: 214 },
            ]}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={formatMonthTick}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
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
          "A basic line chart with smooth (monotone) curve showing desktop visitors over time.",
      },
    },
  },
};

// Linear line chart
export const Linear: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Line Chart - Linear
        </h2>
        <p className="text-sm text-muted-foreground">
          Monthly visitor trend with linear interpolation
        </p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-cyan-30v)",
              },
            } as ChartConfig
          }
        >
          <LineChart
            {...args}
            accessibilityLayer
            data={[
              { month: "January", desktop: 186 },
              { month: "February", desktop: 305 },
              { month: "March", desktop: 237 },
              { month: "April", desktop: 173 },
              { month: "May", desktop: 209 },
              { month: "June", desktop: 214 },
            ]}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={formatMonthTick}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="linear"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-desktop)",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Linear interpolation connects data points with straight lines
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Line chart with linear interpolation, connecting data points with straight lines and visible dots.",
      },
    },
  },
};

// Step line chart
export const Step: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Line Chart - Step
        </h2>
        <p className="text-sm text-muted-foreground">
          Monthly visitor trend with step interpolation
        </p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-green-cool-50v)",
              },
            } as ChartConfig
          }
        >
          <LineChart
            {...args}
            accessibilityLayer
            data={[
              { month: "January", desktop: 186 },
              { month: "February", desktop: 305 },
              { month: "March", desktop: 237 },
              { month: "April", desktop: 173 },
              { month: "May", desktop: 209 },
              { month: "June", desktop: 214 },
            ]}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={formatMonthTick}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="step"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Step interpolation creates a staircase effect between data points
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Line chart with step interpolation, useful for showing discrete changes or states over time.",
      },
    },
  },
};

// Multiple line chart
export const Multiple: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Line Chart - Multiple
        </h2>
        <p className="text-sm text-muted-foreground">
          Comparing desktop and mobile visitor trends
        </p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-blue-60v)",
              },
              mobile: {
                label: "Mobile",
                color: "var(--color-cyan-30v)",
              },
            } as ChartConfig
          }
        >
          <LineChart
            {...args}
            accessibilityLayer
            data={[
              { month: "January", desktop: 186, mobile: 80 },
              { month: "February", desktop: 305, mobile: 200 },
              { month: "March", desktop: 237, mobile: 120 },
              { month: "April", desktop: 173, mobile: 190 },
              { month: "May", desktop: 209, mobile: 130 },
              { month: "June", desktop: 214, mobile: 140 },
            ]}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={formatMonthTick}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Comparing desktop and mobile visitor trends over 6 months
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Multiple line chart showing two data series for comparing trends between desktop and mobile visitors.",
      },
    },
  },
};

// Line chart with dots
export const WithDots: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Line Chart - Dots
        </h2>
        <p className="text-sm text-muted-foreground">
          Monthly visitor trend with smooth curve
        </p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-blue-60v)",
              },
            } as ChartConfig
          }
        >
          <LineChart
            {...args}
            accessibilityLayer
            data={[
              { month: "January", desktop: 186 },
              { month: "February", desktop: 305 },
              { month: "March", desktop: 237 },
              { month: "April", desktop: 173 },
              { month: "May", desktop: 209 },
              { month: "June", desktop: 214 },
            ]}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={formatMonthTick}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-desktop)",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
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
          "A basic line chart with smooth (monotone) curve showing desktop visitors over time.",
      },
    },
  },
};

// Line chart with dots
export const WithLabel: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Line Chart - Label
        </h2>
        <p className="text-sm text-muted-foreground">
          Monthly visitor trend with smooth curve
        </p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-blue-60v)",
              },
            } as ChartConfig
          }
        >
          <LineChart
            {...args}
            accessibilityLayer
            data={[
              { month: "January", desktop: 186 },
              { month: "February", desktop: 305 },
              { month: "March", desktop: 237 },
              { month: "April", desktop: 173 },
              { month: "May", desktop: 209 },
              { month: "June", desktop: 214 },
            ]}
            margin={{ top: 20, left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={formatMonthTick}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-desktop)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList position="top" offset={12} fontSize={12} />
            </Line>
          </LineChart>
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
          "A basic line chart with smooth (monotone) curve showing desktop visitors over time.",
      },
    },
  },
};
