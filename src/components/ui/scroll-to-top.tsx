"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export type ScrollToTopProps = Omit<React.ComponentProps<"button">, "children"> & {
  /** When set, the control stays hidden until the page is scrolled at least this many pixels. Omit to keep it always visible. */
  threshold?: number
  /** Visible label and accessible name (use sentence case unless matching legacy “Back To Top” copy). */
  label?: string
}

/** NCI/USWDS-style fixed return-to-top control (cerulean tile, rounded top-left), implemented with Tailwind. */
function ScrollToTop({
  className,
  threshold,
  label = "Back To Top",
  title,
  type = "button",
  onClick,
  disabled,
  ...props
}: ScrollToTopProps) {
  const [visible, setVisible] = React.useState(threshold === undefined)

  React.useEffect(() => {
    if (threshold === undefined) {
      setVisible(true)
      return
    }

    const element = document.scrollingElement ?? document.documentElement

    const update = () => {
      setVisible(element.scrollTop >= threshold)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [threshold])

  const scrollToTop = React.useCallback(() => {
    const element = document.scrollingElement ?? document.documentElement
    element.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const accessibleName = label

  return (
    <button
      type={type}
      data-slot="scroll-to-top"
      data-visible={visible}
      disabled={disabled}
      aria-label={accessibleName}
      title={title ?? accessibleName}
      aria-hidden={!visible}
      tabIndex={visible ? undefined : -1}
      className={cn(
        /* Outer shell (~usa-footer__nci-return-to-top): fixed tile, fades in */
        "ease-in-out fixed right-0 bottom-0 z-10 box-border h-[75px] w-[75px] transition-all duration-[250ms]",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
        /* Inner NCI link–style treatment */
        "block cursor-pointer rounded-none rounded-tl-full border-0 p-0",
        "font-semibold text-white bg-cerulean-50 pt-6 pr-1.5 pb-0 pl-4 text-center text-[0.76rem] leading-[1.2] whitespace-normal uppercase no-underline",
        "outline-none hover:bg-cerulean-70 hover:no-underline active:bg-cerulean-80 disabled:cursor-not-allowed disabled:bg-gray-20 disabled:text-gray-70",
        "focus:outline focus:outline-4 focus:outline-offset-4 focus:outline-blue-40",
        "focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-40",
        className,
      )}
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented && !disabled) {
          scrollToTop()
        }
      }}
      {...props}
    >
      <span className="pointer-events-none block">{label}</span>
    </button>
  )
}

export { ScrollToTop }
