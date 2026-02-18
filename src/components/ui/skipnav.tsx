"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type SkipnavProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  /**
  * The href target for the skip navigation link
  * @default "#main-content"
  */
  href?: string
  /**
   * The text displayed in the skip navigation link
   * @default "Skip to main content"
   */
  text?: string
}

const Skipnav = React.forwardRef<HTMLAnchorElement, SkipnavProps>(
  ({ 
    className,
    href = "#main-content",
    text = "Skip to main content",
    ...props 
  }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={cn(
          // Base styles - positioned off-screen initially
          "absolute left-1 top-1 z-50",
          "bg-white",
          "-translate-y-full",
          
          // Typography
          "font-open-sans font-normal",
          "text-cerulean-60v text-center whitespace-nowrap",
          
          // Layout
          "px-4 py-2",
          
          // Focus state - bring into view with proper outline
          "focus:translate-y-0 focus:outline focus:outline-offset-0 focus:outline-4 focus:outline-blue-40",
          "focus-visible:translate-y-0 focus-visible:outline focus-visible:outline-offset-0 focus-visible:outline-4 focus-visible:outline-blue-40",
          
          // Hover state
          "hover:bg-gray-5",
          
          className
        )}
        {...props}
      >
        {text}
      </a>
    )
  }
)
Skipnav.displayName = "Skipnav"

export { Skipnav }
