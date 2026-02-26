import * as React from "react"
import * as Slot from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  [
    "rounded font-semibold font-open-sans relative inline-flex cursor-pointer items-center justify-center gap-1 leading-none",

    // Focus states
    "focus:outline focus:outline-4 focus:outline-offset-4 focus:outline-blue-40v",
    "focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-40v",

    // Disabled states
    "aria-disabled:cursor-not-allowed aria-disabled:bg-gray-20 aria-disabled:text-gray-70",
    "disabled:cursor-not-allowed disabled:bg-gray-20 disabled:text-gray-70",
  ],
  {
    variants: {
      variant: {
        primary: "text-white bg-cerulean-50 hover:bg-cerulean-70 active:bg-cerulean-80",
        secondary: "text-white bg-teal-50 hover:bg-teal-70 active:bg-teal-80",
        "accent-cool": "text-white bg-navy-50 hover:bg-navy-70 active:bg-navy-80",
        "accent-warm": "bg-golden-20 text-gray-90 hover:bg-golden-30 active:bg-golden-40",
        base: "text-white bg-gray-cool-50 hover:bg-gray-cool-60 active:bg-gray-cool-70",
        outline:
          "border-2 border-cerulean-50 bg-transparent text-cerulean-50 hover:border-cerulean-70 hover:text-cerulean-70 active:border-cerulean-80 active:text-cerulean-80 disabled:border-gray-20 disabled:bg-transparent disabled:text-gray-50",
        "outline-inverse":
          "active:text-white active:border-white border-2 border-gray-cool-10 bg-transparent text-gray-cool-10 hover:border-gray-5 hover:text-gray-5 disabled:border-gray-40 disabled:bg-transparent disabled:text-gray-50",
        "outline-primary":
          "border-2 border-cerulean-50 bg-transparent text-cerulean-50 hover:border-cerulean-70 hover:text-cerulean-70 active:border-cerulean-80 active:text-cerulean-80 disabled:border-gray-20 disabled:bg-transparent disabled:text-gray-50",
        "outline-secondary":
          "border-2 border-teal-50 bg-transparent text-teal-50 hover:border-teal-70 hover:text-teal-70 active:border-teal-80 active:text-teal-80 disabled:border-gray-20 disabled:bg-transparent disabled:text-gray-50",
        info: "text-white bg-navy-50 hover:bg-navy-70 active:bg-navy-80",
        success: "text-white bg-green-cool-50v hover:bg-green-cool-60v active:bg-green-cool-70v",
        warning: "bg-golden-20 text-gray-90 hover:bg-golden-30 active:bg-golden-40",
        danger: "text-white bg-red-60v hover:bg-red-warm-70v active:bg-red-warm-80v",
        link: "font-normal rounded-none !p-0 text-blue-60v underline underline-offset-2 hover:text-blue-warm-70v disabled:bg-transparent disabled:text-gray-50",
      },
      size: {
        sm: "text-sm p-2 leading-3.5",
        default: "px-5 py-3",
        lg: "text-xl px-6 py-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
)

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

function Button({
  className,
  variant = "primary",
  size = "default",
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
