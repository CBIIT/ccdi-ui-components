import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { AddIcon, NavigateNextIcon, CheckIcon, FavoriteIcon } from "@/components/ui/icon";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible button component with multiple variants and sizes. Supports rendering as different elements using the asChild prop.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "success",
        "warning",
        "info",
        "ghost",
        "link",
      ],
      description: "The visual style variant of the button",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "default", "lg", "icon", "icon-sm", "icon-lg"],
      description: "The size of the button",
    },
    asChild: {
      control: "boolean",
      description:
        "When true, renders the child element instead of a button, applying button styles to the child",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    children: {
      control: "text",
      description: "The content of the button",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    children: "Button",
  },
};

// Variant stories
export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "Info",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
};

// Size stories
export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

export const IconButton: Story = {
  args: {
    size: "icon",
    variant: "default",
    "aria-label": "Search",
  },
  render: (args) => (
    <Button {...args}>
      <AddIcon/>
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Icon-only button with fixed square dimensions. Always include an aria-label for accessibility.",
      },
    },
  },
};

export const IconButtonSmall: Story = {
  args: {
    size: "icon-sm",
    variant: "default",
    "aria-label": "Search",
  },
  render: (args) => (
    <Button {...args}>
      <AddIcon/>
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story: "Small icon-only button variant.",
      },
    },
  },
};

export const IconButtonLarge: Story = {
  args: {
    size: "icon-lg",
    variant: "default",
    "aria-label": "Search",
  },
  render: (args) => (
    <Button {...args}>
      <AddIcon/>
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story: "Large icon-only button variant.",
      },
    },
  },
};

export const WithIcon: Story = {
  args: {
    variant: "default",
  },
  render: (args) => (
    <Button {...args}>
      Button <NavigateNextIcon/>
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Button with an icon, demonstrating how to include icons alongside text.",
      },
    },
  },
};

// State stories
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

// All Variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">
        Default <CheckIcon/>
      </Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="info">Info</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All available button variants displayed together.",
      },
    },
  },
};

// All Sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon-sm" aria-label="Small icon">
        <FavoriteIcon/>
      </Button>
      <Button size="icon" aria-label="Default icon">
        <FavoriteIcon/>
      </Button>
      <Button size="icon-lg" aria-label="Large icon">
        <FavoriteIcon/>
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All available button sizes displayed together.",
      },
    },
  },
};