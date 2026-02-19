import type { Meta, StoryObj } from "@storybook/react-vite"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const meta = {
  title: "UI/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A radio group component following USWDS design patterns with proper focus states and accessibility.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "tiled"],
      description: "The visual variant of the radio group",
    },
    disabled: {
      control: "boolean",
      description: "Whether the radio group is disabled",
    },
    onValueChange: {
      description: "Callback when the selected value changes",
    },
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  render: (args) => (
    <RadioGroup defaultValue="option1" onValueChange={(value) => console.log(value)} {...args}>
      <RadioGroupItem value="option1">Option 1</RadioGroupItem>
      <RadioGroupItem value="option2">Option 2</RadioGroupItem>
      <RadioGroupItem value="option3">Option 3</RadioGroupItem>
    </RadioGroup>
  ),
}

// With Label
export const WithLabel: Story = {
  render: (args) => (
    <div className="space-y-3">
      <Label>Choose an option</Label>
      <RadioGroup defaultValue="option1" onValueChange={(value) => console.log(value)} {...args}>
        <RadioGroupItem value="option1">Option 1</RadioGroupItem>
        <RadioGroupItem value="option2">Option 2</RadioGroupItem>
        <RadioGroupItem value="option3">Option 3</RadioGroupItem>
      </RadioGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Radio group with a label for better context.",
      },
    },
  },
}

// Tiled variant
export const Tiled: Story = {
  args: {
    variant: "tiled",
  },
  render: (args) => (
    <div className="space-y-3">
      <Label>Choose your preference</Label>
      <RadioGroup defaultValue="option1" onValueChange={(value) => console.log(value)} {...args}>
        <RadioGroupItem value="option1">Email notifications</RadioGroupItem>
        <RadioGroupItem value="option2">SMS notifications</RadioGroupItem>
        <RadioGroupItem value="option3">No notifications</RadioGroupItem>
      </RadioGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Tiled variant with background highlighting for better visual separation.",
      },
    },
  },
}

// Disabled
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <RadioGroup defaultValue="option1" onValueChange={(value) => console.log(value)} {...args}>
      <RadioGroupItem value="option1">Option 1 (Disabled)</RadioGroupItem>
      <RadioGroupItem value="option2">Option 2 (Disabled)</RadioGroupItem>
      <RadioGroupItem value="option3">Option 3 (Disabled)</RadioGroupItem>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "Radio group in disabled state.",
      },
    },
  },
}

// Individual item disabled
export const IndividualItemDisabled: Story = {
  render: (args) => (
    <div className="space-y-3">
      <Label>Choose an option</Label>
      <RadioGroup defaultValue="option1" onValueChange={(value) => console.log(value)} {...args}>
        <RadioGroupItem value="option1">Option 1</RadioGroupItem>
        <RadioGroupItem value="option2" disabled>
          Option 2 (Disabled)
        </RadioGroupItem>
        <RadioGroupItem value="option3">Option 3</RadioGroupItem>
      </RadioGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Radio group with individual items disabled.",
      },
    },
  },
}

// Form Example
export const FormExample: Story = {
  render: (args) => (
    <form className="space-y-6 w-full max-w-md">
      <div className="space-y-3">
        <Label>Delivery method</Label>
        <RadioGroup
          name="delivery"
          defaultValue="standard"
          onValueChange={(value) => console.log("Delivery:", value)}
        >
          <RadioGroupItem value="standard">Standard (5-7 days)</RadioGroupItem>
          <RadioGroupItem value="express">Express (2-3 days)</RadioGroupItem>
          <RadioGroupItem value="overnight">Overnight</RadioGroupItem>
        </RadioGroup>
      </div>

      <div className="space-y-3">
        <Label>Payment method</Label>
        <RadioGroup
          name="payment"
          defaultValue="credit"
          variant="tiled"
          onValueChange={(value) => console.log("Payment:", value)}
        >
          <RadioGroupItem value="credit">Credit Card</RadioGroupItem>
          <RadioGroupItem value="debit">Debit Card</RadioGroupItem>
          <RadioGroupItem value="paypal">PayPal</RadioGroupItem>
        </RadioGroup>
      </div>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple radio groups used in a form context.",
      },
    },
  },
}
