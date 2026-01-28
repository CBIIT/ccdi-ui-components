import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/charts/chart";

const meta = {
  title: "Charts/Area Chart",
  component: AreaChart,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Area charts display quantitative data over a continuous interval or time period. Built with Recharts and follows USWDS design guidelines with proper accessibility features.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

AreaChart.displayName = "AreaChart";

// Format month abbreviation
const formatMonthTick = (value: string) => value.slice(0, 3);

// Default area chart with smooth curve
export const Default: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">Area Chart</h2>
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
          <AreaChart
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
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
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
          "A basic area chart with smooth (natural) curve showing desktop visitors over time.",
      },
    },
  },
};

// Linear area chart
export const Linear: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Area Chart - Linear
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
          <AreaChart
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
            <Area
              dataKey="desktop"
              type="linear"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
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
          "Area chart with linear interpolation, connecting data points with straight lines instead of curves.",
      },
    },
  },
};

// Step area chart
export const Step: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Area Chart - Step
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
          <AreaChart
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
            <Area
              dataKey="desktop"
              type="step"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
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
          "Area chart with step interpolation, useful for showing discrete changes or states over time.",
      },
    },
  },
};

// Stacked area chart
export const Stacked: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Area Chart - Stacked
        </h2>
        <p className="text-sm text-muted-foreground">
          Multiple data series stacked to show total and composition
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
          <AreaChart
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
            <Area
              dataKey="mobile"
              type="natural"
              fill="var(--color-mobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Comparing desktop and mobile visitors with cumulative view
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Stacked area chart showing multiple data series. The total height represents the sum of all values, while each layer shows the contribution of each series.",
      },
    },
  },
};

// Area chart with legend
export const WithLegend: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Area Chart - Stacked
        </h2>
        <p className="text-sm text-muted-foreground">
          Multiple data series stacked to show total and composition
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
          <AreaChart
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
            <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Area
              dataKey="mobile"
              type="natural"
              fill="var(--color-mobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Comparing desktop and mobile visitors with cumulative view
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Stacked area chart showing multiple data series. The total height represents the sum of all values, while each layer shows the contribution of each series.",
      },
    },
  },
};

// Stacked expanded area chart
export const StackedExpanded: Story = {
  render: (args) => {
    return (
      <Card className="max-w-xl">
        <CardHeader>
          <h2 className="font-bold font-merriweather text-lg">
            Area Chart - Stacked Expanded
          </h2>
          <p className="text-sm text-muted-foreground">
            Showing visitor proportions for the last 6 months
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
                other: {
                  label: "Other",
                  color: "var(--color-gray-50)",
                },
              } as ChartConfig
            }
          >
            <AreaChart
              {...args}
              accessibilityLayer
              data={[
                { month: "January", desktop: 186, mobile: 80, other: 45 },
                { month: "February", desktop: 305, mobile: 200, other: 100 },
                { month: "March", desktop: 237, mobile: 120, other: 150 },
                { month: "April", desktop: 73, mobile: 190, other: 50 },
                { month: "May", desktop: 209, mobile: 130, other: 100 },
                { month: "June", desktop: 214, mobile: 140, other: 160 },
              ]}
              margin={{
                left: 12,
                right: 12,
                top: 12,
              }}
              stackOffset="expand"
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
              <Area
                dataKey="other"
                type="natural"
                fill="var(--color-other)"
                fillOpacity={0.4}
                stroke="var(--color-other)"
                stackId="a"
              />
              <Area
                dataKey="mobile"
                type="natural"
                fill="var(--color-mobile)"
                fillOpacity={0.4}
                stroke="var(--color-mobile)"
                stackId="a"
              />
              <Area
                dataKey="desktop"
                type="natural"
                fill="var(--color-desktop)"
                fillOpacity={0.4}
                stroke="var(--color-desktop)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="text-muted-foreground leading-none">
            Showing proportion of visitors by device type over the last 6 months
          </div>
        </CardFooter>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Stacked area chart with expand offset, showing proportions as percentages. Each area represents the proportion of the total at each point in time.",
      },
    },
  },
};

// Gradient area chart
export const Gradient: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Area Chart - Gradient
        </h2>
        <p className="text-sm text-muted-foreground">
          Comparing desktop and mobile visitors with gradient fill
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
          <AreaChart
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
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Comparing desktop and mobile visitors with cumulative view
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Stacked area chart showing multiple data series. The total height represents the sum of all values, while each layer shows the contribution of each series.",
      },
    },
  },
};


// Axes area chart
export const Axes: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Area Chart - Axes
        </h2>
        <p className="text-sm text-muted-foreground">
            Multiple data series stacked to show total and composition
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
          <AreaChart
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
            margin={{ left: -20, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={formatMonthTick}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={3}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              dataKey="mobile"
              type="natural"
              fill="var(--color-mobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Comparing desktop and mobile visitors with cumulative view
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Stacked area chart showing multiple data series. The total height represents the sum of all values, while each layer shows the contribution of each series.",
      },
    },
  },
};
