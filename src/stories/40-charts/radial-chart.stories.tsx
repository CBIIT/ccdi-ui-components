import * as React from "react";
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Label,
  LabelList,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
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
} from "@/components/charts/chart";

const meta = {
  title: "Charts/Radial Chart",
  component: RadialBarChart,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Radial charts display data in a circular format, useful for showing progress, completion rates, or comparative metrics. Built with Recharts and follows USWDS design guidelines with proper accessibility features.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

RadialBarChart.displayName = "RadialBarChart";

// Default usage radial chart
export const Default: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">Radial Chart</h2>
        <p className="text-sm text-muted-foreground">January - June 2024</p>
      </CardHeader>
      <CardContent className="pb-0">
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
          className="mx-auto aspect-square max-h-[350px]"
        >
          <RadialBarChart
            {...args}
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
            innerRadius={40}
            outerRadius={120}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="browser" />}
            />
            <RadialBar dataKey="visitors" background />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
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
          "Multiple browser data displayed as concentric radial bars with different colors for each browser.",
      },
    },
  },
};

// Browser usage radial chart
export const WithLabel: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Radial Chart - Label
        </h2>
        <p className="text-sm text-muted-foreground">January - June 2024</p>
      </CardHeader>
      <CardContent className="pb-0">
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
          className="mx-auto aspect-square max-h-[350px]"
        >
          <RadialBarChart
            {...args}
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
            startAngle={-90}
            endAngle={380}
            innerRadius={40}
            outerRadius={120}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="browser" />}
            />
            <RadialBar dataKey="visitors" background>
              <LabelList
                position="insideStart"
                dataKey="browser"
                className="fill-white capitalize mix-blend-luminosity"
                fontSize={11}
              />
            </RadialBar>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
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
          "Multiple browser data displayed as concentric radial bars with different colors for each browser.",
      },
    },
  },
};

// Browser usage radial chart
export const ChartRadialGrid: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Radial Chart - Grid
        </h2>
        <p className="text-sm text-muted-foreground">January - June 2024</p>
      </CardHeader>
      <CardContent className="pb-0">
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
          className="mx-auto aspect-square max-h-[350px]"
        >
          <RadialBarChart
            {...args}
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
            startAngle={-90}
            endAngle={380}
            innerRadius={40}
            outerRadius={120}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="browser" />}
            />
            <PolarGrid gridType="circle" />
            <RadialBar dataKey="visitors"/>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
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
          "Multiple browser data displayed as concentric radial bars with different colors for each browser.",
      },
    },
  },
};


const chartData = [
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "var(--color-blue-60v)",
  },
} satisfies ChartConfig;

export const ChartRadialText: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Radial Chart - Text
        </h2>
        <p className="text-sm text-muted-foreground">January - June 2024</p>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <RadialBarChart
            {...args}
            data={chartData}
            startAngle={0}
            endAngle={250}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-gray-10 last:fill-white"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="visitors" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
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
                          className="fill-black text-4xl font-bold"
                        >
                          {chartData[0].visitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-gray-700"
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
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
          "Radial Chart - Text — single-series radial chart with centered summary text.",
      },
      source: {
        code: `
"use client"

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "var(--color-blue-60v)",
  },
} satisfies ChartConfig;

const chartData = [
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
];

const ChartRadialText = () => {
  return (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Radial Chart - Text
        </h2>
        <p className="text-sm text-muted-foreground">January - June 2024</p>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={250}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-gray-10 last:fill-white"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="visitors" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
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
                          className="fill-black text-4xl font-bold"
                        >
                          {chartData[0].visitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-gray-700"
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}

export default ChartRadialText;
      `.trim(),
      },
    },
  },
};
