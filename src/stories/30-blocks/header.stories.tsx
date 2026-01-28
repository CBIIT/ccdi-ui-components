import type { Meta, StoryObj } from '@storybook/react'
import { Header, type HeaderNavigation } from '@/components/blocks/header'

// Sample navigation data for stories
const sampleNavigation: HeaderNavigation = {
  primary: [
    {
      label: "Services",
      href: "#",
      children: [
        { label: "Web Design", href: "/services/web-design" },
        { label: "Development", href: "/services/development" },
        { label: "Consulting", href: "/services/consulting" },
        { label: "UI/UX Design", href: "/services/design" }
      ]
    },
    { label: "About", href: "/about", isActive: true },
    { label: "Contact", href: "/contact" },
    {
      label: "Resources",
      href: "#",
      children: [
        { label: "Documentation", href: "/docs" },
        { label: "Blog", href: "/blog" },
        { label: "Tutorials", href: "/tutorials" }
      ]
    }
  ],
  secondary: [
    { label: "Help", href: "/help" },
    { label: "Login", href: "/login" }
  ]
}

const simpleNavigation: HeaderNavigation = {
  primary: [
    { label: "Home", href: "/", isActive: true },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ]
}

const meta = {
  title: 'Blocks/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive header component with navigation, search functionality, and mobile responsiveness following USWDS design guidelines.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    projectTitle: {
      control: 'text',
      description: 'The title/brand name displayed in the header',
    },
    projectTitleHref: {
      control: 'text',
      description: 'The URL for the project title link',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'extended'],
      description: 'The visual variant of the header',
    },
    navigation: {
      control: 'object',
      description: 'Navigation structure with primary and optional secondary items',
    },
    onSearch: { 
      action: 'searched',
      description: 'Callback function when search is performed'
    },
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    projectTitle: 'USWDS Demo Site',
    projectTitleHref: '/',
    navigation: sampleNavigation,
  },
}

// Simple navigation variant
export const SimpleNavigation: Story = {
  args: {
    projectTitle: 'Simple Site',
    navigation: simpleNavigation,
  },
}

// Extended variant
export const Extended: Story = {
  args: {
    projectTitle: 'Extended Header Site',
    variant: 'extended',
    navigation: sampleNavigation,
  },
  parameters: {
    docs: {
      description: {
        story: 'Extended variant provides more space for the project title and additional navigation layout.',
      },
    },
  },
}

// No secondary navigation
export const NoSecondaryNav: Story = {
  args: {
    projectTitle: 'Primary Only Site',
    navigation: {
      primary: [
        { label: "Home", href: "/", isActive: true },
        { label: "Products", href: "/products" },
        { label: "Support", href: "/support" }
      ]
    },
  },
}

// Dropdown navigation test
export const DropdownNavigation: Story = {
  args: {
    projectTitle: 'Dropdown Test Site',
    navigation: {
      primary: [
        {
          label: "Products",
          href: "#",
          children: [
            { label: "Product A", href: "/products/a" },
            { label: "Product B", href: "/products/b" },
            { label: "Product C", href: "/products/c" }
          ]
        },
        { label: "About", href: "/about" }
      ]
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation with dropdown menus. Click on "Products" to see the dropdown functionality.',
      },
    },
  },
}

// Search functionality
export const SearchTest: Story = {
  args: {
    projectTitle: 'Search Test Site',
    navigation: simpleNavigation,
  },
  parameters: {
    docs: {
      description: {
        story: 'Test search functionality in the header. The search component should trigger the onSearch callback.',
      },
    },
  },
}

// Mobile menu
export const MobileMenu: Story = {
  args: {
    projectTitle: 'Mobile Test Site',
    navigation: sampleNavigation,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Mobile responsive view with hamburger menu. Resize viewport to mobile to see the mobile menu button.',
      },
    },
  },
}

// Custom project title href
export const CustomTitleHref: Story = {
  args: {
    projectTitle: 'Custom Link Site',
    projectTitleHref: '/custom-home',
    navigation: simpleNavigation,
  },
}

// Active navigation state
export const ActiveNavigation: Story = {
  args: {
    projectTitle: 'Active State Site',
    navigation: {
      primary: [
        { label: "Home", href: "/" },
        { label: "Products", href: "/products", isActive: true },
        { label: "About", href: "/about" }
      ]
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation with active state styling. The "Products" item is marked as active.',
      },
    },
  },
}

// Accessibility test
export const AccessibilityTest: Story = {
  args: {
    projectTitle: 'Accessible Site',
    navigation: sampleNavigation,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tests accessibility features including semantic HTML, ARIA labels, and keyboard navigation support.',
      },
    },
  },
}

// Complete header showcase
export const CompleteShowcase: Story = {
  args: {
    projectTitle: 'Complete USWDS Demo',
    projectTitleHref: '/',
    variant: 'default',
    navigation: {
      primary: [
        {
          label: "Government",
          href: "#",
          children: [
            { label: "Federal Agencies", href: "/federal" },
            { label: "State & Local", href: "/state-local" },
            { label: "Tribal", href: "/tribal" }
          ]
        },
        {
          label: "Services",
          href: "#",
          isActive: true,
          children: [
            { label: "Digital Services", href: "/services/digital" },
            { label: "Consulting", href: "/services/consulting" },
            { label: "Training", href: "/services/training" },
            { label: "Support", href: "/services/support" }
          ]
        },
        { label: "Resources", href: "/resources" },
        { label: "News", href: "/news" },
        { label: "Contact", href: "/contact" }
      ],
      secondary: [
        { label: "Help", href: "/help" },
        { label: "Sign In", href: "/login" },
        { label: "Create Account", href: "/register" }
      ]
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete header implementation showcasing all features: complex navigation with dropdowns, secondary navigation, active states, and search functionality.',
      },
    },
  },
}