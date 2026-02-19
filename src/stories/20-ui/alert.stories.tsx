import type { Meta, StoryObj } from "@storybook/react-vite"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

const meta = {
  title: "UI/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Alert component for displaying important messages with different severity levels, following USWDS design guidelines.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "success", "warning", "error", "info", "emergency"],
      description: "The visual style variant of the alert",
    },
    icon: {
      control: "boolean",
      description: "Whether to show the status icon",
      defaultValue: true,
    },
    role: {
      control: { type: "select" },
      options: ["alert", "status"],
      description: "ARIA role for accessibility",
    },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing consectetur adipiscing elit, sed do eiusmod.",
  },
}

// Variant stories
export const Success: Story = {
  args: {
    variant: "success",
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing <a href="/">consectetur adipiscing</a>{" "}
          elit, sed do eiusmod.
        </p>
      </AlertDescription>
    </Alert>
  ),
}

export const Warning: Story = {
  args: {
    variant: "warning",
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing <a href="/">consectetur adipiscing</a>{" "}
          elit, sed do eiusmod.
        </p>
      </AlertDescription>
    </Alert>
  ),
}

export const Danger: Story = {
  args: {
    variant: "error",
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing <a href="/">consectetur adipiscing</a>{" "}
          elit, sed do eiusmod.
        </p>
      </AlertDescription>
    </Alert>
  ),
}

export const Info: Story = {
  args: {
    variant: "info",
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing <a href="/">consectetur adipiscing</a>{" "}
          elit, sed do eiusmod.
        </p>
      </AlertDescription>
    </Alert>
  ),
}

export const Emergency: Story = {
  args: {
    variant: "emergency",
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Emergency Alert</AlertTitle>
      <AlertDescription>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing <a href="/">consectetur adipiscing</a>{" "}
          elit, sed do eiusmod.
        </p>
      </AlertDescription>
    </Alert>
  ),
}

// Without Icon
export const WithoutIcon: Story = {
  args: {
    variant: "success",
    icon: false,
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Success (No Icon)</AlertTitle>
      <AlertDescription>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing <a href="/">consectetur adipiscing</a>{" "}
          elit, sed do eiusmod.
        </p>
      </AlertDescription>
    </Alert>
  ),
}

// Simple text only
export const SimpleText: Story = {
  args: {
    variant: "info",
    children: "This is a simple alert without title and description components.",
  },
}

// Real-world examples
export const FormValidation: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-2xl">
      <Alert variant="error">
        <AlertTitle>Form Validation Error</AlertTitle>
        <AlertDescription>
          Please correct the following errors:
          <ul className="mt-2 list-disc list-inside">
            <li>Email address is required</li>
            <li>Password must be at least 8 characters</li>
            <li>Please accept the terms and conditions</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example of using alerts for form validation feedback.",
      },
    },
  },
}

export const SystemMaintenance: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-2xl">
      <Alert variant="warning">
        <AlertTitle>Scheduled Maintenance</AlertTitle>
        <AlertDescription>
          The system will be undergoing maintenance on Sunday, March 15th from 2:00 AM to 6:00 AM
          EST. During this time, some features may be unavailable.
        </AlertDescription>
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example of using alerts for system notifications.",
      },
    },
  },
}
