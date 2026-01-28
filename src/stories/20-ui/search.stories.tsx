import type { Meta, StoryObj } from '@storybook/react'
import { Search } from '@/components/ui/search'

const meta = {
  title: 'UI/Search',
  component: Search,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A search component with input field and button following USWDS design patterns.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['default', 'large'],
      description: 'The size variant of the search component',
    },
    label: {
      control: 'text',
      description: 'Accessible label for the search input (screen reader only)',
    },
    buttonText: {
      control: 'text',
      description: 'Text displayed on the search button',
    },
    iconOnly: {
      control: 'boolean',
      description: 'Whether to show only the icon without button text',
    },
  },
  args: {
    onSearch: (value: string) => {
      console.log(value)
    },
  },
} satisfies Meta<typeof Search>

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    label: 'Search',
    buttonText: 'Search',
  },
}

// Large size
export const Large: Story = {
  args: {
    size: 'large',
    label: 'Search',
    buttonText: 'Search',
  },
  parameters: {
    docs: {
      description: {
        story: 'A larger variant of the search component for increased prominence.',
      },
    },
  },
}

// Icon only
export const IconOnly: Story = {
  args: {
    iconOnly: true,
    label: 'Search',
  },
  parameters: {
    docs: {
      description: {
        story: 'Search button displays only an icon, useful for compact layouts.',
      },
    },
  },
}

// Icon only large
export const IconOnlyLarge: Story = {
  args: {
    iconOnly: true,
    size: 'large',
    label: 'Search',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large icon-only search button.',
      },
    },
  },
}

// Custom button text
export const CustomButtonText: Story = {
  args: {
    label: 'Find',
    buttonText: 'Find',
  },
  parameters: {
    docs: {
      description: {
        story: 'Search component with custom button text.',
      },
    },
  },
}

// With placeholder
export const WithPlaceholder: Story = {
  args: {
    label: 'Search',
    buttonText: 'Search',
    inputProps: {
      placeholder: 'Enter search terms...',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Search component with placeholder text in the input field.',
      },
    },
  },
}

