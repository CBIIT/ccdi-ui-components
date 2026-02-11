"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Icon, type IconType } from "@/components/ui/icon"

// Types for footer structure
export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface SocialLink {
  platform: string
  href: string
  icon: string // Icon class name
  label: string // Screen reader label
}

export interface ContactInfo {
  phone?: string
  email?: string
  address?: string
  liveChat?: string
  siteFeedback?: string
}

export interface AgencyInfo {
  name: string
  logo?: string
  logoAlt?: string
  description?: string
}

export interface FooterNavigation {
  sections?: FooterSection[]
  primaryLinks?: FooterLink[]
  socialLinks?: SocialLink[]
}

// Mobile accordion component for collapsible sections
const MobileAccordion: React.FC<{
  sections: FooterSection[]
}> = ({ sections }) => {
  const [openItems, setOpenItems] = React.useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <div className="lg:hidden">
      {sections.map((section, index) => {
        const isOpen = openItems.has(index)
        return (
          <div 
            key={index} 
            className="border-t border-black"
          >
            <div className="flex flex-col">
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center gap-1 p-4 cursor-pointer focus:outline focus:outline-4 focus:outline-blue-40"
                aria-expanded={isOpen}
              >
                <div className={cn(
                  "flex items-center justify-center size-6 transition-transform duration-200",
                  isOpen ? "rotate-180" : "rotate-90"
                )}>
                  {/* <Icon icon="expand_more" className="size-6 text-white" /> */}
                  <Icon icon="expand_less" size="sm" className="text-white"/>
                </div>
                <span className="font-bold text-white font-['Open_Sans'] text-base leading-4">
                  {section.title}
                </span>
              </button>
              {isOpen && (
                <div className="flex flex-col pl-4 pb-5">
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className={cn(
                        "text-white visited:text-white pl-4 hover:text-white focus:outline focus:outline-4 focus:outline-blue-40 hover:underline font-['Open_Sans'] font-normal leading-normal text-[16.16px]",
                        linkIndex < section.links.length - 1 ? 'mb-4' : 'mb-0'
                      )}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

// Desktop grid navigation
const DesktopNavigation: React.FC<{
  sections: FooterSection[]
}> = ({ sections }) => (
  <div className="hidden lg:grid lg:grid-cols-4 gap-8">
    {sections.map((section, index) => (
      <div key={index}>
        <h3 className="font-bold font-public-sans text-white mb-4 text-base">
          {section.title}
        </h3>
        <ul className="space-y-3">
          {section.links.map((link, linkIndex) => (
            <li key={linkIndex}>
              <a
                href={link.href}
                className="text-white visited:text-white hover:text-white focus:outline focus:outline-4 focus:outline-blue-40 hover:underline font-public-sans text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)

// Newsletter signup component
const NewsletterSignup: React.FC<{
  onSignup?: (email: string) => void
}> = ({ onSignup }) => {
  const [email, setEmail] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSignup?.(email)
    setEmail("")
  }

  return (
    <>
      {/* Mobile version */}
      <div className="lg:hidden border-t border-black bg-[#1F4571]">
        <div className="flex flex-col gap-[20px] pt-6 pb-[30px] px-4">
          <h3 className="font-poppins font-bold text-white w-full text-[22.88px] leading-normal">
            Sign up for email updates
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] w-full">
            <div className="flex flex-col gap-[10px] w-full">
              <label 
                htmlFor="footer-email-mobile" 
                className="text-white w-full font-['Open_Sans'] text-base font-normal leading-normal"
              >
                Enter your email address
              </label>
              <Input
                id="footer-email-mobile"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                required
                className="w-full bg-white h-[47px]"
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-lg bg-[#F1D40E] hover:bg-[#E6C50D] text-[#1F4571] px-4 py-[9px] font-['Open_Sans'] text-base font-bold"
            >
              Sign up
            </Button>
          </form>
        </div>
      </div>

      {/* Desktop version */}
      <div className="hidden lg:block bg-[#1F4571]">
        <h3 className="text-lg font-bold font-public-sans text-white mb-3">
          Sign up for email updates
        </h3>
        <p className="text-white font-public-sans text-sm mb-4">
          Get the latest updates and news delivered to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="footer-email-desktop" className="block text-sm font-medium text-white mb-2">
              Email address
            </label>
            <Input
              id="footer-email-desktop"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full"
            />
          </div>
          <Button
            type="submit"
            className="px-4 py-2 text-sm font-public-sans bg-[#F1D40E] hover:bg-[#E6C50D] text-black"
          >
            Sign up
          </Button>
        </form>
      </div>
    </>
  )
}

// Social media links component
const SocialLinks: React.FC<{
  socialLinks: SocialLink[]
}> = ({ socialLinks }) => (
  <div className="flex flex-wrap gap-3">
    {socialLinks.map((social, index) => (
      <a
        key={index}
        href={social.href}
        className="flex items-center justify-center size-10 bg-golden-20 hover:bg-golden-20 focus:outline focus:outline-4 focus:outline-blue-40 rounded-full transition-colors"
        aria-label={social.label}
      >
        {/* <div className={cn(social.icon, "size-5")} /> */}
        <Icon icon={social.icon as IconType} size="sm" className="text-cerulean-80"/>
      </a>
    ))}
  </div>
)

// Contact information component
const ContactInfo: React.FC<{
  contact: ContactInfo
  className?: string
}> = ({ contact, className }) => {
  const contactTextClassName = "text-base font-['Open_Sans'] font-normal leading-normal"

  return (
    <div className={cn("", className)}>
      {/* Desktop: Only email, right-aligned, horizontal */}
      <div className="hidden lg:flex gap-[14px] items-center justify-end">
        {contact.email && (
          <a
            href={`mailto:${contact.email}`}
            className={cn("text-white visited:text-white hover:text-white focus:outline focus:outline-4 focus:outline-blue-40 hover:underline font-public-sans", contactTextClassName)}
          >
            {contact.email}
          </a>
        )}
      </div>

      {/* Tablet: Horizontal layout, left-aligned */}
      <div className="hidden md:flex lg:hidden gap-[10px] items-start flex-wrap">
        {contact.liveChat && (
          <p className={cn("text-white font-public-sans whitespace-nowrap", contactTextClassName)}>
            {contact.liveChat}
          </p>
        )}
        {contact.phone && (
          <a
            href={`tel:${contact.phone.replace(/\D/g, '')}`}
            className={cn("text-white visited:text-white hover:text-white focus:outline focus:outline-4 focus:outline-blue-40 hover:underline font-public-sans whitespace-nowrap", contactTextClassName)}
          >
            {contact.phone}
          </a>
        )}
        {contact.email && (
          <a
            href={`mailto:${contact.email}`}
            className={cn("text-white visited:text-white hover:text-white focus:outline focus:outline-4 focus:outline-blue-40 hover:underline font-public-sans whitespace-nowrap", contactTextClassName)}
          >
            {contact.email}
          </a>
        )}
        {contact.siteFeedback && (
          <p className={cn("text-white font-public-sans whitespace-nowrap", contactTextClassName)}>
            {contact.siteFeedback}
          </p>
        )}
      </div>

      {/* Mobile: Vertical layout, left-aligned */}
      <div className="flex md:hidden flex-col gap-[2px] items-start">
        {contact.liveChat && (
          <p className={cn("text-white font-public-sans", contactTextClassName)}>
            {contact.liveChat}
          </p>
        )}
        {contact.phone && (
          <a
            href={`tel:${contact.phone.replace(/\D/g, '')}`}
            className={cn("text-white visited:text-white hover:text-white focus:outline focus:outline-4 focus:outline-blue-40 hover:underline font-public-sans", contactTextClassName)}
          >
            {contact.phone}
          </a>
        )}
        {contact.email && (
          <a
            href={`mailto:${contact.email}`}
            className={cn("text-white visited:text-white hover:text-white focus:outline focus:outline-4 focus:outline-blue-40 hover:underline font-public-sans", contactTextClassName)}
          >
            {contact.email}
          </a>
        )}
        {contact.siteFeedback && (
          <p className={cn("text-white font-public-sans", contactTextClassName)}>
            {contact.siteFeedback}
          </p>
        )}
      </div>
    </div>
  )
}

// Agency info component
const AgencyInfo: React.FC<{
  agency: AgencyInfo
}> = ({ agency }) => (
  <div className="space-y-4">
    <div>
      <h2 className="text-white mb-2">
        <span className="font-poppins font-bold text-2xl leading-normal">
          National Cancer Institute
        </span>
        <br />
        <span className="font-poppins font-medium text-lg leading-[21px]">
          at the National Institutes of Health
        </span>
      </h2>
      {agency.description && (
        <p className="text-white font-public-sans text-sm">
          {agency.description}
        </p>
      )}
    </div>
  </div>
)

export interface USWDSFooterProps
  extends React.HTMLAttributes<HTMLElement> {
  navigation?: FooterNavigation
  agencyInfo?: AgencyInfo
  contactInfo?: ContactInfo
  showNewsletter?: boolean
  onNewsletterSignup?: (email: string) => void
}

const USWDSFooter = React.forwardRef<HTMLElement, USWDSFooterProps>(
  ({
    className,
    navigation = {},
    agencyInfo,
    contactInfo,
    showNewsletter = false,
    onNewsletterSignup,
    ...props
  }, ref) => {
    const { sections = [], primaryLinks = [], socialLinks = [] } = navigation

  return (
    <footer
      ref={ref}
      className={cn("w-full bg-[#1F4571]", className)}
      {...props}
    >
        <div className="w-full">

          {/* Main content area */}
          <div className="pb-8 lg:px-8 lg:pt-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Navigation */}
                {sections.length > 0 && (
                  <div className="lg:col-span-2">
                    <MobileAccordion sections={sections} />
                    <DesktopNavigation sections={sections} />
                  </div>
                )}

                {/* Newsletter signup */}
                {showNewsletter && (
                  <div className="lg:col-span-1">
                    <NewsletterSignup onSignup={onNewsletterSignup} />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom section with agency info, contact, and social links */}
          {(agencyInfo || contactInfo || socialLinks.length > 0) && (
            <>
              <Separator />
              <div className="w-full px-4 py-5 lg:px-8 lg:py-8 bg-[#122F4B]">
                <div className="max-w-7xl mx-auto">
                  {/* Mobile layout: vertical stack */}
                  <div className="flex flex-col gap-5 lg:hidden">
                    {/* Agency info */}
                    {agencyInfo && (
                      <div className="pb-[10px]">
                        <AgencyInfo agency={agencyInfo} />
                      </div>
                    )}

                    {/* Contact Us */}
                    {contactInfo && (
                      <div className="flex flex-col gap-[4px] items-start">
                        <h3 className="font-poppins font-bold text-white text-[22px] leading-normal">
                          Contact Us
                        </h3>
                        <ContactInfo contact={contactInfo} />
                      </div>
                    )}

                    {/* Follow us and Government hierarchy */}
                    <div className="flex flex-col gap-[17px] items-start">
                      {/* Social links */}
                      {socialLinks.length > 0 && (
                        <div>
                          <h3 className="font-poppins font-bold text-white mb-[14px] text-[22px] leading-normal">
                            Follow us
                          </h3>
                          <SocialLinks socialLinks={socialLinks} />
                        </div>
                      )}

                      {/* Government hierarchy */}
                      <div className="text-white font-public-sans text-[14.24px] leading-[18px]">
                        <p className="mb-[5px]">U.S. Department of Health and Human Services</p>
                        <p className="mb-[5px]">National Institutes of Health</p>
                        <p className="mb-[5px]">National Cancer Institute</p>
                        <p>USA.gov</p>
                      </div>
                    </div>
                  </div>

                  {/* Desktop/Tablet layout: grid */}
                  <div className="hidden lg:grid lg:grid-cols-2 gap-8">
                    {/* Left: Agency info and Social */}
                    <div className="space-y-6">
                      {/* Agency info */}
                      {agencyInfo && (
                        <AgencyInfo agency={agencyInfo} />
                      )}

                      {/* Social links */}
                      {socialLinks.length > 0 && (
                        <div>
                          <h3 className="font-poppins font-bold text-white mb-3 text-[22px] leading-normal">
                            Follow us
                          </h3>
                          <SocialLinks socialLinks={socialLinks} />
                        </div>
                      )}
                    </div>

                    {/* Right: Contact Us and Government hierarchy */}
                    <div className="flex flex-col justify-between text-right">
                      <div className="space-y-6">
                        {/* Contact info */}
                        {contactInfo && (
                          <div className="flex flex-col gap-[10px] items-end">
                            <h3 className="font-poppins font-bold text-white text-[22px] leading-normal">
                              Contact Us
                            </h3>
                            <ContactInfo contact={contactInfo} />
                          </div>
                        )}

                        {/* Government hierarchy */}
                        <div className="text-white font-public-sans text-right text-sm leading-[18px]">
                          <p className="mb-[5px]">U.S. Department of Health and Human Services</p>
                          <p className="mb-[5px]">National Institutes of Health</p>
                          <p className="mb-[5px]">National Cancer Institute</p>
                          <p>USA.gov</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Copyright */}
          <div className="w-full px-4 py-4 lg:px-8 bg-[#122F4B]">
            <div className="max-w-7xl mx-auto">
              <div className="text-center text-xs text-white font-public-sans">
                <p>
                  © {new Date().getFullYear()} {agencyInfo?.name || "Your Organization"}. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
)

USWDSFooter.displayName = "USWDSFooter"

export { USWDSFooter }
