import type { Meta, StoryObj } from '@storybook/react'
import USWDSNavbar from '@/components/blocks/header'

const meta = {
  title: 'Blocks/Header',
  component: USWDSNavbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A USWDS-compliant header component with navigation menu, search functionality, and responsive mobile menu. Supports nested submenus and follows government website design standards.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    navItems: {
      control: 'object',
      description: 'Array of navigation items with optional submenus',
    },
    logo: {
      control: false,
      description: 'Custom logo component (optional)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof USWDSNavbar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    navItems: [
      {
        id: 'home',
        label: 'Home',
        href: '/'
      },
      {
        id: 'index-studies',
        label: 'Index of NCI Studies',
        href: '/studies'
      },
      {
        id: 'data-guidance',
        label: 'Data Sharing Guidance',
        hasSubmenu: true,
        submenu: [
          { 
            id: 'guidance-nci-expectations', 
            label: 'NCI Expectations for Genomic Data Sharing (GDS Policy)', 
            href: '/guidance/gds-policy',
            hasSubmenu: true,
            submenu: [
              { id: 'gds-overview', label: 'Overview', href: '/guidance/gds-policy/overview' },
              { id: 'gds-requirements', label: 'Requirements', href: '/guidance/gds-policy/requirements' },
              { id: 'gds-timeline', label: 'Timeline', href: '/guidance/gds-policy/timeline' },
            ]
          },
          { id: 'guidance-nih-policy', label: 'NIH Data Sharing Guidance', href: '/guidance/nih-policy' },
          { id: 'guidance-dms-plan', label: 'How to Write a Data Management and Sharing (DMS) Plan', href: '/guidance/dms-plan' },
          { id: 'guidance-compliance', label: 'Compliance Requirements', href: '/guidance/compliance' },
        ]
      },
      {
        id: 'data-processes',
        label: 'Data Sharing Processes',
        hasSubmenu: true,
        submenu: [
          { id: 'processes-submission', label: 'Data Submission Process', href: '/processes/submission' },
          { id: 'processes-review', label: 'Review and Approval', href: '/processes/review' },
          { id: 'processes-timeline', label: 'Timeline and Deadlines', href: '/processes/timeline' },
        ]
      },
      {
        id: 'data-tools',
        label: 'Data Tools & Resources',
        href: '/tools'
      },
      {
        id: 'news',
        label: 'News',
        hasSubmenu: true,
        submenu: [
          { id: 'news-announcements', label: 'Announcements', href: '/news/announcements' },
          { id: 'news-updates', label: 'Updates', href: '/news/updates' },
          { id: 'news-events', label: 'Events', href: '/news/events' },
        ]
      },
      {
        id: 'about',
        label: 'About',
        hasSubmenu: true,
        submenu: [
          { id: 'about-overview', label: 'Overview', href: '/about' },
          { id: 'about-team', label: 'Team', href: '/about/team' },
          { id: 'about-contact', label: 'Contact', href: '/about/contact' },
        ]
      }
    ],
  },
}

