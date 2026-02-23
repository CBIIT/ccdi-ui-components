import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva("bg-white flex flex-col", {
  variants: {
    variant: {
      default: "border-x-2 border-t-2 border-b-2 border-gray-10 rounded",
      vertical:
        "border-x-2 border-t-2 border-b-2 border-gray-10 rounded col-span-6 tablet:col-span-3 desktop:col-span-2",
      horizontal: "col-span-2 desktop:col-span-1",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const cardGroupLayoutClasses = {
  vertical: "grid grid-cols-6 gap-y-8 gap-x-4",
  horizontal: "grid grid-cols-2 gap-y-8 gap-x-4",
} as const

type CardProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} className={cn(cardVariants({ variant }), className)} {...props} />
  ),
)
Card.displayName = "Card"

type CardGroupProps = React.HTMLAttributes<HTMLUListElement> & {
  layout?: "vertical" | "horizontal"
}

const CardGroup = React.forwardRef<HTMLUListElement, CardGroupProps>(
  ({ className, layout = "vertical", ...props }, ref) => {
    return <ul ref={ref} className={cn(cardGroupLayoutClasses[layout], className)} {...props} />
  },
)
CardGroup.displayName = "CardGroup"

const CardItem = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("border-2 border-gray-10 rounded", className)} {...props} />
  ),
)
CardItem.displayName = "CardItem"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("px-6 pt-6 pb-2", className)} {...props} />
  },
)
CardHeader.displayName = "CardHeader"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("px-6 py-2 grow", className)} {...props} />
  ),
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("px-6 pb-6 pt-2", className)} {...props} />
  },
)
CardFooter.displayName = "CardFooter"

const cardMediaVariants = cva("overflow-hidden", {
  variants: {
    variant: {
      default: "-order-1",
      inset: "p-6 pb-0 -order-1",
      exdent: "-mt-[1px] -mr-[1px] -ml-[1px] -order-1",
      first: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

type CardMediaProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardMediaVariants>

const CardMedia = React.forwardRef<HTMLDivElement, CardMediaProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} className={cn(cardMediaVariants({ variant }), className)} {...props} />
  ),
)
CardMedia.displayName = "CardMedia"

export { Card, CardGroup, CardItem, CardHeader, CardFooter, CardContent, CardMedia }
