import type { Meta, StoryObj } from "@storybook/react-vite"
import { Banner } from "@/components/ui/banner"

const meta = {
  title: "UI/Banner",
  component: Banner,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    languageToggle: {
      control: "object",
      description: "Optional language toggle link",
    },
  },
} satisfies Meta<typeof Banner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithLanguageToggle: Story = {
  args: {
    languageToggle: {
      text: "An official website of the United States government",
      href: "#",
      label: "English",
    },
  },
}

export const Spanish: Story = {
  args: {
    languageToggle: {
      text: "Un sitio oficial del Gobierno de Estados Unidos",
      href: "#",
      label: "Español",
    },
  },
}
