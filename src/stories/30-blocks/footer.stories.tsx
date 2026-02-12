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
          title: "About",
          links: [
            { label: "About this Website", href: "#" },
            { label: "en Español", href: "#" },
            { label: "Reuse & Copyright", href: "#" },
            { label: "Social Media", href: "#" }
          ]
        },
        {
          title: "Resources",
          links: [
            { label: "Contact Us", href: "#" },
            { label: "Publications", href: "#" },
            { label: "Dictionary of Cancer Terms", href: "#" },
            { label: "Find a Clinical Trial", href: "#" }
          ]
        },
        {
          title: "Policies",
          links: [
            { label: "Accessibility", href: "#" },
            { label: "FOIA", href: "#" },
            { label: "Privacy & Security", href: "#" },
            { label: "Disclaimers", href: "#" },
            { label: "Vulnerability Disclosure", href: "#" }
          ]
        },
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

