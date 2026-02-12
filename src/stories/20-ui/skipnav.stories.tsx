import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Skipnav } from '@/components/ui/skipnav'


const meta = {
  title: 'UI/Skipnav',
  component: Skipnav,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A skip navigation link component that allows users to skip to the main content. Hidden by default and appears when focused, following USWDS accessibility guidelines.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'The href target for the skip navigation link (usually #main-content)',
    },
    text: {
      control: 'text',
      description: 'The text displayed in the skip navigation link',
    },
  },
  render: (args) => (
    <div className="relative w-full">
      <Skipnav {...args} />
      <h1 className="text-3xl font-bold px-8 pt-8">Welcome to Our Site</h1>
      <main id="main-content" className="p-8">
        <p className="mb-4">
          The skip navigation link allows keyboard users and screen reader users to bypass repetitive navigation 
          and jump directly to the main content of the page. This improves accessibility and user experience.
        </p>
        <p className="mb-4">
          When you press Tab on this page, the skip link will appear at the top, allowing you to quickly navigate 
          to this section without having to tab through all the navigation elements.
        </p>
        <p>
          This is especially helpful for users who rely on keyboard navigation or assistive technologies, 
          as it saves time and reduces frustration when accessing the primary content of a webpage.
        </p>
      </main>
    </div>
  ),
} satisfies Meta<typeof Skipnav>

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    href: '#main-content',
    text: 'Skip to main content',
  },
  parameters: {
    docs: {
      description: {
        story: 'The skip navigation link follows WCAG 2.1 AA guidelines:\n' +
          '- Hidden by default using translate-y-[-100%] (off-screen)\n' +
          '- Appears when focused (translate-y-0)\n' +
          '- High contrast colors for visibility\n' +
          '- Proper semantic HTML (anchor tag)\n' +
          '- Keyboard accessible\n' +
          'To test: Press Tab when the page loads to focus the skip link.',
      },
    },
  },
}

// Custom target and text
export const CustomTargetAndText: Story = {
  args: {
    href: '#primary-content',
    text: 'Skip to primary content',
  },
  render: (args) => (
    <div className="relative w-full">
      <Skipnav {...args} />
      <h1 className="text-3xl font-bold px-8 pt-8">Welcome to Our Site</h1>
      <main id="main-content" className="p-8">
        <p className="mb-4">
          The skip navigation link allows keyboard users and screen reader users to bypass repetitive navigation 
          and jump directly to the main content of the page. This improves accessibility and user experience.
        </p>
        <p className="mb-4">
          When you press Tab on this page, the skip link will appear at the top, allowing you to quickly navigate 
          to this section without having to tab through all the navigation elements.
        </p>
        <p>
          This is especially helpful for users who rely on keyboard navigation or assistive technologies, 
          as it saves time and reduces frustration when accessing the primary content of a webpage.
        </p>
      </main>
      <section id="primary-content" className="p-8">
        <h2 className="text-2xl font-bold mb-4">Primary Content Section</h2>
        <p className="mb-4">
          This example demonstrates how the skip navigation link can target different sections of a page. 
          By customizing the href prop, you can point the skip link to any element with a matching ID.
        </p>
        <p className="mb-4">
          This flexibility allows developers to create multiple skip links for complex page layouts, 
          helping users navigate to specific sections that matter most to them.
        </p>
        <p>
          Whether you're building a government website, a complex web application, or a content-heavy site, 
          skip navigation links are an essential accessibility feature that benefits all users.
        </p>
      </section>
    </div>
  ),
}
