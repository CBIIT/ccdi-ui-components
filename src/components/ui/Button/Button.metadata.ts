export const componentMetadata = {
  name: "Button",
  description: "Clickable button with USWDS-aligned variants and sizes.",
  category: "Inputs",
  tags: ["button", "cta", "form", "uswds"],

  props: {
    variant: {
      type: "enum",
      options: [
        "primary",
        "secondary",
        "accent-cool",
        "accent-warm",
        "base",
        "outline",
        "outline-inverse",
        "outline-primary",
        "outline-secondary",
        "info",
        "success",
        "warning",
        "danger",
        "link",
      ],
      default: "primary",
      description: "Visual style of the button.",
    },
    size: {
      type: "enum",
      options: ["sm", "default", "lg", "icon"],
      default: "default",
      description: "Button size.",
    },
    disabled: {
      type: "boolean",
      default: false,
      description: "Disables interaction and applies disabled styles.",
    },
    asChild: {
      type: "boolean",
      default: false,
      description: "Renders the child element while preserving button styles.",
    },
    onClick: {
      type: "function",
      signature: "(event: React.MouseEvent<HTMLButtonElement>) => void",
      description: "Called when user clicks the button.",
    },
    children: {
      type: "ReactNode",
      required: true,
      description: "Button label or content.",
    },
  },

  examples: [
    {
      title: "Primary",
      code: `<Button variant=\"primary\">Save</Button>`,
    },
    {
      title: "Disabled",
      code: `<Button disabled>Save</Button>`,
    },
    {
      title: "Icon Button",
      code: `<Button size=\"icon\" aria-label=\"Search\"><Icon icon=\"search\" size=\"sm\" /></Button>`,
    },
  ],

  a11y: {
    notes: [
      "Use aria-label when the button has only an icon.",
      "Use disabled for non-interactive states.",
    ],
  },
} as const;
