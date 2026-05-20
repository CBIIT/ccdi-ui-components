import type { Meta, StoryObj } from "@storybook/react-vite"

import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const meta = {
  title: "UI/Field",
  component: Field,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Composable field layout primitives (grid/flex spacing, labels, descriptions, errors) aligned with `Form` typography. Use standalone or together with `react-hook-form`; pair with `Input`, `Checkbox`, etc.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

/** Single column: label, control, helper text. */
export const Default: Story = {
  render: () => (
    <div className="w-full">
      <Field>
        <FieldLabel htmlFor="story-field-email">Email address</FieldLabel>
        <FieldContent>
          <Input id="story-field-email" type="email" placeholder="you@agency.gov" />
          <FieldDescription>
            We use this for account recovery. It is not shown publicly.
          </FieldDescription>
        </FieldContent>
      </Field>
    </div>
  ),
}

/** `data-invalid` on the field group and `FieldError` (or `errors` prop). */
export const Invalid: Story = {
  render: () => (
    <div className="w-[350px]">
      <Field data-invalid={true}>
        <FieldLabel htmlFor="story-field-name" data-error={true}>
          Full name
        </FieldLabel>
        <FieldContent>
          <Input id="story-field-name" type="text" aria-invalid placeholder="Ada Lovelace" />
          <FieldError>Enter your full legal name.</FieldError>
        </FieldContent>
      </Field>
    </div>
  ),
}

/** Checkbox beside label (`orientation="horizontal"`). */
export const Horizontal: Story = {
  render: () => (
    <div className="w-[350px]">
      <Field orientation="horizontal">
        <FieldLabel htmlFor="story-field-terms" className="cursor-pointer">
          I agree to the terms of use
        </FieldLabel>
        <FieldContent className="shrink-0">
          <Checkbox id="story-field-terms" />
        </FieldContent>
      </Field>
    </div>
  ),
}

/** `FieldSet` + legend, multiple fields, optional labeled separator. */
export const Grouped: Story = {
  render: () => (
    <FieldSet className="w-[350px] rounded-lg border border-border p-4">
      <FieldLegend variant="legend">Delivery options</FieldLegend>
      <FieldGroup className="gap-4 pt-2">
        <Field>
          <FieldLabel htmlFor="story-field-city">City</FieldLabel>
          <FieldContent>
            <Input id="story-field-city" placeholder="Springfield" />
          </FieldContent>
        </Field>
        <FieldSeparator />
        <Field>
          <FieldTitle>Notes</FieldTitle>
          <FieldContent>
            <Input id="story-field-notes" placeholder="Building access, gate code..." />
            <FieldDescription>Optional delivery instructions.</FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
}
