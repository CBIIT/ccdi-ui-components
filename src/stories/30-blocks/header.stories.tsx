import type { Meta, StoryObj } from "@storybook/react-vite"
import NCIDSNavbar from "@/components/blocks/header"

const meta = {
  title: "Blocks/Header",
  component: NCIDSNavbar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A USWDS-compliant header component with navigation menu, search functionality, and responsive mobile menu. Supports nested submenus and follows government website design standards.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    navItems: {
      control: "object",
      description: "Array of navigation items with optional submenus",
    },
    logo: {
      control: false,
      description: "Custom logo component (optional)",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
} satisfies Meta<typeof NCIDSNavbar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    navItems: [
      {
        id: "current-section",
        label: "Current Section",
        title: "Explore Section",
        href: "#",
        hasSubmenu: true,
        submenu: [
          {
            id: "current-section-header-1",
            label: "Section Header",
            href: "#",
            hasSubmenu: true,
            submenu: [
              {
                id: "current-section-submenu-1",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "current-section-submenu-2",
                label: "Navigationlink",
                href: "#",
              },
            ],
          },
          {
            id: "current-section-header-2",
            label: "Section Header",
            href: "#",
            hasSubmenu: true,
            submenu: [
              {
                id: "current-section-submenu-3",
                label: "A very long navigation link that goes onto twolines",
                href: "#",
              },
              {
                id: "current-section-submenu-5",
                label: "A very long navigation link that goes onto twolines",
                href: "#",
              },
              {
                id: "current-section-submenu-6",
                label: "Navigationlink",
                href: "#",
              },
            ],
          },
          {
            id: "current-section-header-3",
            label: "Section Header",
            href: "#",
            hasSubmenu: true,
            submenu: [
              {
                id: "current-section-submenu-7",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "current-section-submenu-8",
                label: "Navigationlink",
                href: "#",
              },
            ],
          },
          {
            id: "current-section-header-4",
            label: "Section Header",
            href: "#",
            hasSubmenu: true,
            submenu: [
              {
                id: "current-section-submenu-9",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "current-section-submenu-10",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "current-section-submenu-11",
                label: "A very long navigation link that goes onto twolines",
                href: "#",
              },
              {
                id: "current-section-submenu-12",
                label: "Navigationlink",
                href: "#",
              },
            ],
          },
          {
            id: "current-section-header-5",
            label: "Section Header",
            href: "#",
            hasSubmenu: true,
            submenu: [
              {
                id: "current-section-submenu-13",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "current-section-submenu-14",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "current-section-submenu-15",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "current-section-submenu-16",
                label: "Navigationlink",
                href: "#",
              },
            ],
          },
          {
            id: "current-section-header-6",
            label: "Section Header",
            href: "#",
            hasSubmenu: true,
            submenu: [
              {
                id: "current-section-submenu-17",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "current-section-submenu-18",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "current-section-submenu-19",
                label: "A very long navigation link that goes onto twolines",
                href: "#",
              },
            ],
          },
        ],
      },
      {
        id: "second-section",
        label: "Second Section",
        href: "#",
        hasSubmenu: true,
        submenu: [
          {
            id: "second-section-header-1",
            label: "Section Header",
            href: "#",
            hasSubmenu: true,
            submenu: [
              {
                id: "second-section-submenu-1",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "second-section-submenu-2",
                label: "Navigationlink",
                href: "#",
              },
            ],
          },
          {
            id: "second-section-header-2",
            label: "Section Header",
            href: "#",
            hasSubmenu: true,
            submenu: [
              {
                id: "second-section-submenu-3",
                label: "A very long navigation link that goes onto twolines",
                href: "#",
              },
              {
                id: "second-section-submenu-4",
                label: "A very long navigation link that goes onto twolines",
                href: "#",
              },
              {
                id: "second-section-submenu-5",
                label: "Navigationlink",
                href: "#",
              },
            ],
          },
          {
            id: "second-section-header-3",
            label: "Section Header",
            href: "#",
            hasSubmenu: true,
            submenu: [
              {
                id: "second-section-submenu-6",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "second-section-submenu-7",
                label: "Navigationlink",
                href: "#",
              },
            ],
          },
          {
            id: "second-section-header-4",
            label: "Section Header",
            href: "#",
            hasSubmenu: true,
            submenu: [
              {
                id: "second-section-submenu-8",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "second-section-submenu-9",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "second-section-submenu-10",
                label: "A very long navigation link that goes onto twolines",
                href: "#",
              },
              {
                id: "second-section-submenu-11",
                label: "Navigationlink",
                href: "#",
              },
            ],
          },
          {
            id: "second-section-header-5",
            label: "Section Header",
            href: "#",
            hasSubmenu: true,
            submenu: [
              {
                id: "second-section-submenu-12",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "second-section-submenu-13",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "second-section-submenu-14",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "second-section-submenu-15",
                label: "Navigationlink",
                href: "#",
              },
            ],
          },
          {
            id: "second-section-header-6",
            label: "Section Header",
            href: "#",
            hasSubmenu: true,
            submenu: [
              {
                id: "second-section-submenu-16",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "second-section-submenu-17",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "second-section-submenu-18",
                label: "A very long navigation link that goes onto twolines",
                href: "#",
              },
            ],
          },
        ],
      },
      {
        id: "section-without-submenu",
        label: "Section without Submenu",
        href: "#",
      },
      {
        id: "fourth-section",
        label: "Fourth Section",
        href: "#",
        hasSubmenu: true,
        submenu: [
          {
            id: "fourth-section-header-1",
            label: "Section Header",
            href: "#",
            hasSubmenu: true,
            submenu: [
              {
                id: "fourth-section-submenu-1",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "fourth-section-submenu-2",
                label: "Navigationlink",
                href: "#",
              },
            ],
          },
          {
            id: "fourth-section-header-2",
            label: "Section Header",
            href: "#",
            hasSubmenu: true,
            submenu: [
              {
                id: "fourth-section-submenu-3",
                label: "A very long navigation link that goes onto twolines",
                href: "#",
              },
              {
                id: "fourth-section-submenu-4",
                label: "A very long navigation link that goes onto twolines",
                href: "#",
              },
              {
                id: "fourth-section-submenu-5",
                label: "Navigationlink",
                href: "#",
              },
            ],
          },
          {
            id: "fourth-section-header-3",
            label: "Section Header",
            href: "#",
            hasSubmenu: true,
            submenu: [
              {
                id: "fourth-section-submenu-6",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "fourth-section-submenu-7",
                label: "Navigationlink",
                href: "#",
              },
            ],
          },
          {
            id: "fourth-section-header-4",
            label: "Section Header",
            href: "#",
            hasSubmenu: true,
            submenu: [
              {
                id: "fourth-section-submenu-8",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "fourth-section-submenu-9",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "fourth-section-submenu-10",
                label: "A very long navigation link that goes onto twolines",
                href: "#",
              },
              {
                id: "fourth-section-submenu-11",
                label: "Navigationlink",
                href: "#",
              },
            ],
          },
          {
            id: "fourth-section-header-5",
            label: "Section Header",
            href: "#",
            hasSubmenu: true,
            submenu: [
              {
                id: "fourth-section-submenu-12",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "fourth-section-submenu-13",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "fourth-section-submenu-14",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "fourth-section-submenu-15",
                label: "Navigationlink",
                href: "#",
              },
            ],
          },
          {
            id: "fourth-section-header-6",
            label: "Section Header",
            href: "#",
            hasSubmenu: true,
            submenu: [
              {
                id: "fourth-section-submenu-16",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "fourth-section-submenu-17",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "fourth-section-submenu-18",
                label: "A very long navigation link that goes onto twolines",
                href: "#",
              },
            ],
          },
        ],
      },
      {
        id: "fifth-section",
        label: "Fifth Section",
        href: "#",
        hasSubmenu: true,
        submenu: [
          {
            id: "fifth-section-header-1",
            label: "Section Header",
            href: "#",
            hasSubmenu: true,
            submenu: [
              {
                id: "fifth-section-submenu-1",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "fifth-section-submenu-2",
                label: "Navigationlink",
                href: "#",
              },
            ],
          },
          {
            id: "fifth-section-header-2",
            label: "Section Header",
            href: "#",
            hasSubmenu: true,
            submenu: [
              {
                id: "fifth-section-submenu-3",
                label: "A very long navigation link that goes onto twolines",
                href: "#",
              },
              {
                id: "fifth-section-submenu-4",
                label: "A very long navigation link that goes onto twolines",
                href: "#",
              },
              {
                id: "fifth-section-submenu-5",
                label: "Navigationlink",
                href: "#",
              },
            ],
          },
          {
            id: "fifth-section-header-3",
            label: "Section Header",
            href: "#",
            hasSubmenu: true,
            submenu: [
              {
                id: "fifth-section-submenu-6",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "fifth-section-submenu-7",
                label: "Navigationlink",
                href: "#",
              },
            ],
          },
          {
            id: "fifth-section-header-4",
            label: "Section Header",
            href: "#",
            hasSubmenu: true,
            submenu: [
              {
                id: "fifth-section-submenu-8",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "fifth-section-submenu-9",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "fifth-section-submenu-10",
                label: "A very long navigation link that goes onto twolines",
                href: "#",
              },
              {
                id: "fifth-section-submenu-11",
                label: "Navigationlink",
                href: "#",
              },
            ],
          },
          {
            id: "fifth-section-header-5",
            label: "Section Header",
            href: "#",
            hasSubmenu: true,
            submenu: [
              {
                id: "fifth-section-submenu-12",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "fifth-section-submenu-13",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "fifth-section-submenu-14",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "fifth-section-submenu-15",
                label: "Navigationlink",
                href: "#",
              },
            ],
          },
          {
            id: "fifth-section-header-6",
            label: "Section Header",
            href: "#",
            hasSubmenu: true,
            submenu: [
              {
                id: "fifth-section-submenu-16",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "fifth-section-submenu-17",
                label: "Navigationlink",
                href: "#",
              },
              {
                id: "fifth-section-submenu-18",
                label: "A very long navigation link that goes onto twolines",
                href: "#",
              },
            ],
          },
        ],
      },
    ],
  },
}
