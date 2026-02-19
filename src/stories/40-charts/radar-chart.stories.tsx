import * as React from "react";
import type { Meta, StoryObj } from '@storybook/react-vite';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
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
  title: "Charts/Radar Chart",
  component: RadarChart,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Radar charts display multivariate data on a two-dimensional chart with three or more quantitative variables. Built with Recharts and follows USWDS design guidelines with proper accessibility features.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

RadarChart.displayName = "RadarChart";

// Default radar chart
export const Default: Story = {
  name: "Radar Chart",
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">Radar Chart</h2>
        <p className="text-sm text-muted-foreground">
          Performance metrics across multiple categories
        </p>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-blue-60v)",
              },
            } as ChartConfig
          }
          className="mx-auto aspect-square max-h-[350px]"
        >
          <RadarChart
            {...args}
            data={[
              { month: "January", desktop: 186 },
              { month: "February", desktop: 305 },
              { month: "March", desktop: 237 },
              { month: "April", desktop: 273 },
              { month: "May", desktop: 209 },
              { month: "June", desktop: 214 },
            ]}
          >
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Performance metrics across different categories
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Radar Chart — performance metrics across multiple categories (filled area).",
      },
    },
  },
};

// Radar chart with dots
export const ChartRadarDots: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Radar Chart - Dots
        </h2>
        <p className="text-sm text-muted-foreground">
          Performance metrics with visible data points
        </p>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-cyan-30v)",
              },
            } as ChartConfig
          }
          className="mx-auto aspect-square max-h-[350px]"
        >
          <RadarChart
            {...args}
            data={[
              { month: "January", desktop: 186 },
              { month: "February", desktop: 305 },
              { month: "March", desktop: 237 },
              { month: "April", desktop: 273 },
              { month: "May", desktop: 209 },
              { month: "June", desktop: 214 },
            ]}
          >
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Data points highlighted with visible dots
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Radar Chart - Dots — same as the Radar Chart but with visible dots highlighting each data point.",
      },
    },
  },
};

// Radar chart with lines only
export const ChartRadarLinesOnly: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Radar Chart - Lines Only
        </h2>
        <p className="text-sm text-muted-foreground">
          Performance metrics with outline only
        </p>
      </CardHeader>
      <CardContent className="pb-0">
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
          className="mx-auto aspect-square max-h-[350px]"
        >
          <RadarChart
            {...args}
            data={[
              { month: "January", desktop: 186, mobile: 160 },
              { month: "February", desktop: 185, mobile: 170 },
              { month: "March", desktop: 207, mobile: 180 },
              { month: "April", desktop: 173, mobile: 160 },
              { month: "May", desktop: 160, mobile: 190 },
              { month: "June", desktop: 174, mobile: 204 },
            ]}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid radialLines={false} />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0}
              stroke="var(--color-desktop)"
              strokeWidth={2}
            />
            <Radar
              dataKey="mobile"
              fill="var(--color-mobile)"
              fillOpacity={0}
              stroke="var(--color-mobile)"
              strokeWidth={2}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Outline only view for cleaner visualization
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Radar Chart - Lines Only — outline-only radar chart ideal for comparing multiple series without fills.",
      },
    },
  },
};

// Radar chart - Multiple
export const ChartRadarMultiple: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Radar Chart - Multiple
        </h2>
        <p className="text-sm text-muted-foreground">
          Performance metrics with outline only
        </p>
      </CardHeader>
      <CardContent className="pb-0">
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
          className="mx-auto aspect-square max-h-[350px]"
        >
          <RadarChart
            {...args}
            data={[
              { month: "January", desktop: 186, mobile: 80 },
              { month: "February", desktop: 305, mobile: 200 },
              { month: "March", desktop: 237, mobile: 120 },
              { month: "April", desktop: 73, mobile: 190 },
              { month: "May", desktop: 209, mobile: 130 },
              { month: "June", desktop: 214, mobile: 140 },
            ]}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
            <Radar
              dataKey="mobile"
              fill="var(--color-mobile)"
              fillOpacity={0.9}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Outline only view for cleaner visualization
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Radar Chart - Multiple — compare two or more series on the same radar to observe differences and trends.",
      },
    },
  },
};

// Radar chart - Multiple
export const ChartRadarLegend: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Radar Chart - Legend
        </h2>
        <p className="text-sm text-muted-foreground">
          Performance metrics with outline only
        </p>
      </CardHeader>
      <CardContent className="pb-0">
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
          className="mx-auto aspect-square max-h-[350px]"
        >
          <RadarChart
            {...args}
            data={[
              { month: "January", desktop: 186, mobile: 80 },
              { month: "February", desktop: 305, mobile: 200 },
              { month: "March", desktop: 237, mobile: 120 },
              { month: "April", desktop: 73, mobile: 190 },
              { month: "May", desktop: 209, mobile: 130 },
              { month: "June", desktop: 214, mobile: 140 },
            ]}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
            <Radar
              dataKey="mobile"
              fill="var(--color-mobile)"
              fillOpacity={0.9}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Outline only view for cleaner visualization
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Radar Chart - Legend — radar chart including a legend that explains each series' color and label.",
      },
    },
  },
};

// Default radar chart
export const ChartRadarGridCustom: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Radar Chart - Custom Grid
        </h2>
        <p className="text-sm text-muted-foreground">
          Performance metrics across multiple categories
        </p>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-blue-60v)",
              },
            } as ChartConfig
          }
          className="mx-auto aspect-square max-h-[350px]"
        >
          <RadarChart
            {...args}
            data={[
              { month: "January", desktop: 186 },
              { month: "February", desktop: 305 },
              { month: "March", desktop: 237 },
              { month: "April", desktop: 273 },
              { month: "May", desktop: 209 },
              { month: "June", desktop: 214 },
            ]}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid
              radialLines={false}
              polarRadius={[130]}
              strokeWidth={1}
            />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Performance metrics across different categories
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Radar Chart - Custom Grid — radar chart demonstrating custom polar grid styling and radii.",
      },
    },
  },
};

// Radar chart without grid
export const ChartRadarGridNone: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Radar Chart - Grid None
        </h2>
        <p className="text-sm text-muted-foreground">
          Performance metrics across multiple categories
        </p>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-blue-60v)",
              },
            } as ChartConfig
          }
          className="mx-auto aspect-square max-h-[350px]"
        >
          <RadarChart
            {...args}
            data={[
              { month: "January", desktop: 186 },
              { month: "February", desktop: 305 },
              { month: "March", desktop: 237 },
              { month: "April", desktop: 273 },
              { month: "May", desktop: 209 },
              { month: "June", desktop: 214 },
            ]}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarAngleAxis dataKey="month" />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Performance metrics across different categories
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Radar Chart - Grid None — radar chart without grid lines for a minimal presentation.",
      },
    },
  },
};

// Radar chart with grid circle
export const ChartRadarGridCircle: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Radar Chart - Grid Circle
        </h2>
        <p className="text-sm text-muted-foreground">
          Performance metrics across multiple categories
        </p>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-blue-60v)",
              },
            } as ChartConfig
          }
          className="mx-auto aspect-square max-h-[350px]"
        >
          <RadarChart
            {...args}
            data={[
              { month: "January", desktop: 186 },
              { month: "February", desktop: 305 },
              { month: "March", desktop: 237 },
              { month: "April", desktop: 273 },
              { month: "May", desktop: 209 },
              { month: "June", desktop: 214 },
            ]}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarGrid gridType="circle" />
            <PolarAngleAxis dataKey="month" />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Performance metrics across different categories
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Radar Chart - Grid Circle — radar chart using a circular polar grid for radial comparisons.",
      },
    },
  },
};

// Radar chart with grid circle no lines
export const ChartRadarGridCircleNoLines: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Radar Chart - Grid Circle - No Lines
        </h2>
        <p className="text-sm text-muted-foreground">
          Performance metrics across multiple categories
        </p>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-blue-60v)",
              },
            } as ChartConfig
          }
          className="mx-auto aspect-square max-h-[350px]"
        >
          <RadarChart
            {...args}
            data={[
              { month: "January", desktop: 186 },
              { month: "February", desktop: 305 },
              { month: "March", desktop: 237 },
              { month: "April", desktop: 273 },
              { month: "May", desktop: 209 },
              { month: "June", desktop: 214 },
            ]}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarGrid gridType="circle" radialLines={false} />
            <PolarAngleAxis dataKey="month" />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Performance metrics across different categories
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Radar Chart - Grid Circle - No Lines — circular grid without radial lines for a cleaner look.",
      },
    },
  },
};

// Radar chart with grid circle no lines
export const ChartRadarGridCircleFill: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Radar Chart - Grid Circle - No Lines
        </h2>
        <p className="text-sm text-muted-foreground">
          Performance metrics across multiple categories
        </p>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-blue-60v)",
              },
            } as ChartConfig
          }
          className="mx-auto aspect-square max-h-[350px]"
        >
          <RadarChart
            {...args}
            data={[
              { month: "January", desktop: 186 },
              { month: "February", desktop: 305 },
              { month: "March", desktop: 237 },
              { month: "April", desktop: 273 },
              { month: "May", desktop: 209 },
              { month: "June", desktop: 214 },
            ]}
          >
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarGrid
              className="fill-(--color-desktop) opacity-10"
              gridType="circle"
            />
            <PolarAngleAxis dataKey="month" />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Performance metrics across different categories
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Radar Chart - Grid Circle - Filled — circular grid with subtle fills to indicate concentric bands.",
      },
    },
  },
};

// Radar chart with grid circle no lines
export const ChartRadarGridFill: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Radar Chart - Grid Circle - No Lines
        </h2>
        <p className="text-sm text-muted-foreground">
          Performance metrics across multiple categories
        </p>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-blue-60v)",
              },
            } as ChartConfig
          }
          className="mx-auto aspect-square max-h-[350px]"
        >
          <RadarChart
            {...args}
            data={[
              { month: "January", desktop: 186 },
              { month: "February", desktop: 305 },
              { month: "March", desktop: 237 },
              { month: "April", desktop: 273 },
              { month: "May", desktop: 209 },
              { month: "June", desktop: 214 },
            ]}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarGrid className="fill-(--color-desktop) opacity-10" />
            <PolarAngleAxis dataKey="month" />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Performance metrics across different categories
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Radar Chart - Grid Fill — radar chart with filled grid background to enhance visual grouping.",
      },
    },
  },
};
