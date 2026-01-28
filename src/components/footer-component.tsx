"use client"

import { Footer } from "@/components/blocks/Footer/Footer"

export function FooterComponent() {
  const handleNewsletterSignup = (email: string) => {
    console.log("Footer newsletter signup:", email)
  }

  return (
    <Footer
      navigation={{
        topics: [
          {
            title: "Services",
            links: [
              { label: "Web Design", href: "#" },
              { label: "Development", href: "#" },
              { label: "Consulting", href: "#" }
            ]
          },
          {
            title: "About",
            links: [
              { label: "Our Story", href: "#" },
              { label: "Team", href: "#" },
              { label: "Careers", href: "#" }
            ]
          }
        ],
        // primaryLinks: [
        //   { label: "Privacy Policy", href: "#" },
        //   { label: "Terms of Service", href: "#" },
        //   { label: "Contact Us", href: "#" }
        // ],
        socialLinks: [
          {
            platform: "facebook",
            href: "#",
            icon: "icon-[fa6-brands--facebook]",
            label: "Facebook"
          },
          {
            platform: "twitter",
            href: "#",
            icon: "icon-[fa6-brands--twitter]",
            label: "Twitter"
          },
          {
            platform: "youtube",
            href: "#",
            icon: "icon-[fa6-brands--youtube]",
            label: "YouTube"
          }
        ]
      }}
      agencyInfo={{
        name: "USWDS Demo Agency",
        logo: "https://via.placeholder.com/80x80/f0f0f0/333333?text=LOGO",
        logoAlt: "Agency Logo"
      }}
      contactInfo={{
        phone: "(800) 555-GOVT",
        email: "info@agency.gov"
      }}
      showNewsletter={true}
      onNewsletterSignup={handleNewsletterSignup}
    />
  )
}