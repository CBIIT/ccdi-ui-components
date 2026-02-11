import type { Meta, StoryObj } from '@storybook/react'
import { USWDSFooter } from '@/components/blocks/footer'

const meta = {
  title: 'Blocks/Footer',
  component: USWDSFooter,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A USWDS-compliant footer component with navigation sections, newsletter signup, contact information, social links, and agency information. Features responsive design with mobile accordion navigation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    navigation: {
      control: 'object',
      description: 'Navigation structure with sections, primary links, and social links',
    },
    agencyInfo: {
      control: 'object',
      description: 'Agency information including name, logo, and description',
    },
    contactInfo: {
      control: 'object',
      description: 'Contact information including phone, email, address, and other details',
    },
    showNewsletter: {
      control: 'boolean',
      description: 'Whether to show the newsletter signup form',
    },
    onNewsletterSignup: {
      action: 'newsletter-signup',
      description: 'Callback function when newsletter form is submitted',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof USWDSFooter>

export default meta
type Story = StoryObj<typeof meta>

const handleNewsletterSignup = (email: string) => {
  console.log('Newsletter signup:', email)
}

export const Default: Story = {
  args: {
    navigation: {
      sections: [
        {
          title: "Services",
          links: [
            { label: "Web Development", href: "#" },
            { label: "Mobile Apps", href: "#" },
            { label: "Cloud Solutions", href: "#" },
            { label: "Consulting", href: "#" },
            { label: "Support", href: "#" }
          ]
        },
        {
          title: "Company",
          links: [
            { label: "About Us", href: "#" },
            { label: "Our Team", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Press", href: "#" },
            { label: "Blog", href: "#" }
          ]
        },
        {
          title: "Resources",
          links: [
            { label: "Documentation", href: "#" },
            { label: "API Reference", href: "#" },
            { label: "Tutorials", href: "#" },
            { label: "Help Center", href: "#" },
            { label: "Community", href: "#" }
          ]
        },
        {
          title: "Legal",
          links: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "Cookie Policy", href: "#" },
            { label: "GDPR", href: "#" }
          ]
        }
      ],
      primaryLinks: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Accessibility", href: "#" },
        { label: "Sitemap", href: "#" }
      ],
      socialLinks: [
        {
          platform: "facebook",
          href: "#",
          icon: "facebook",
          label: "Facebook"
        },
        {
          platform: "twitter",
          href: "#",
          icon: "twitter",
          label: "Twitter"
        },
        {
          platform: "linkedin",
          href: "#",
          icon: "linkedin",
          label: "LinkedIn"
        },
        {
          platform: "youtube",
          href: "#",
          icon: "youtube",
          label: "YouTube"
        },
        {
          platform: "instagram",
          href: "#",
          icon: "instagram",
          label: "Instagram"
        }
      ]
    },
    agencyInfo: {
      name: "Your Organization",
      logo: "/NIHLogo.svg",
      logoAlt: "Organization Logo"
    },
    contactInfo: {
      phone: "1-800-4-CANCER",
      email: "NCIChildhoodCancerDataInitiative@mail.nih.gov",
      address: "123 Innovation Drive, Tech City, TC 12345"
    },
    showNewsletter: true,
    onNewsletterSignup: handleNewsletterSignup,
  },
}

