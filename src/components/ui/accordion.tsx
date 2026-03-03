"use client"

import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Icon, IconType } from "@/components/ui/icon"

const accordionContentVariants = cva("px-4 py-6 [&[hidden]]:p-0", {
  variants: {
    variant: {
      borderless: "",
      bordered: "border-x-4 border-b-4 border-gray-5",
    },
  },
  defaultVariants: {
    variant: "borderless",
  },
})

type AccordionContextValue = {
  variant: "borderless" | "bordered"
  openItems: string[]
  toggleItem: (id: string) => void
  multiselectable: boolean
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null)

function useAccordion(): AccordionContextValue {
  const context = React.useContext(AccordionContext)
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion")
  }
  return context
}

type AccordionItemContextValue = {
  value: string
}

const AccordionItemContext = React.createContext<AccordionItemContextValue | null>(null)

function useAccordionItem(): AccordionItemContextValue {
  const context = React.useContext(AccordionItemContext)
  if (!context) {
    throw new Error("AccordionTrigger and AccordionContent must be used within an AccordionItem")
  }
  return context
}

type AccordionProps = Omit<React.ComponentPropsWithRef<"div">, "defaultValue"> & {
  variant?: "borderless" | "bordered"
  type?: "single" | "multiple"
  defaultValue?: string | string[]
}

function Accordion({
  variant = "borderless",
  className,
  children,
  type = "single",
  defaultValue,
  ref,
  ...props
}: AccordionProps) {
  const multiselectable = type === "multiple"

  const [openItems, setOpenItems] = React.useState<string[]>(() => {
    if (defaultValue) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue]
    }
    return []
  })

  const toggleItem = React.useCallback(
    (id: string) => {
      setOpenItems((prev) => {
        if (multiselectable) {
          return prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        }

        return prev.includes(id) ? [] : [id]
      })
    },
    [multiselectable],
  )

  return (
    <AccordionContext.Provider value={{ variant, openItems, toggleItem, multiselectable }}>
      <div ref={ref} data-slot="accordion" className={cn("space-y-2", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

type AccordionItemProps = React.ComponentPropsWithRef<"div"> & {
  value: string
}

function AccordionItem({ className, value, children, ref, ...props }: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div ref={ref} data-slot="accordion-item" className={className} data-value={value} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

type AccordionTriggerProps = React.ComponentPropsWithRef<"button"> & {
  openIcon?: IconType
  closedIcon?: IconType
}

function AccordionTrigger({
  className,
  children,
  openIcon = "remove",
  closedIcon = "add",
  onClick,
  ref,
  ...props
}: AccordionTriggerProps) {
  const { openItems, toggleItem } = useAccordion()
  const { value } = useAccordionItem()

  const isOpen = openItems.includes(value)

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    onClick?.(event)
    if (event.defaultPrevented) {
      return
    }
    toggleItem(value)
  }

  return (
    <h4 className="relative m-0">
      <button
        ref={ref}
        data-slot="accordion-trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${value}`}
        className={cn(
          "group font-semibold flex w-full cursor-pointer items-center gap-3 bg-gray-5 px-5 py-4 text-left font-sans hover:bg-gray-10 focus:outline focus:outline-4 focus:outline-blue-40v",
          className,
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
        <div className="ml-auto flex h-full shrink-0 items-center">
          {isOpen ? (
            <Icon icon={openIcon} className="size-6" />
          ) : (
            <Icon icon={closedIcon} className="size-6" />
          )}
        </div>
      </button>
    </h4>
  )
}

type AccordionContentProps = React.ComponentPropsWithRef<"div">

function AccordionContent({ className, children, ref, ...props }: AccordionContentProps) {
  const { variant, openItems } = useAccordion()
  const { value } = useAccordionItem()

  const isOpen = openItems.includes(value)

  return (
    <div
      ref={ref}
      data-slot="accordion-content"
      id={`accordion-content-${value}`}
      hidden={!isOpen}
      className={cn(accordionContentVariants({ variant }), className)}
      {...props}
    >
      {children}
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
export type { AccordionProps }
