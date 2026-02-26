import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Icon } from "@/components/ui/icon"

const alertVariants = cva("font-public-sans relative border-l-8 p-4 [&_a]:underline", {
  variants: {
    variant: {
      default: "border-l-cyan-30 bg-cyan-5 text-gray-90 [&_a]:text-blue-60v",
      success: "border-l-green-cool-40v bg-green-cool-5 text-gray-90 [&_a]:text-blue-60v",
      warning: "border-l-gold-20v bg-yellow-5 text-gray-90 [&_a]:text-blue-60v",
      error: "border-l-red-warm-50v bg-red-warm-10 text-gray-90 [&_a]:text-blue-60v",
      info: "border-l-cyan-30v bg-cyan-5 text-gray-90 [&_a]:text-blue-60v",
      emergency: "text-white border-l-red-warm-60v bg-red-warm-60v [&_a]:!text-gray-10",
    },
    hasIcon: {
      true: "px-16",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

type AlertProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertVariants> & {
    role?: "alert" | "status"
    icon?: boolean
  }

const getIconName = (variant?: AlertProps["variant"]) => {
  switch (variant) {
    case "success":
      return "check_circle"
    case "warning":
      return "warning"
    case "error":
    case "emergency":
      return "error"
    default:
      return "info"
  }
}

const Alert = ({ className, variant, role = "alert", icon = true, ...props }: AlertProps) => {
  const iconName = getIconName(variant)

  return (
    <div
      role={role}
      className={cn(alertVariants({ variant, hasIcon: icon }), className)}
      {...props}
    >
      {icon && (
        <div className="absolute top-3 left-6">
          <Icon icon={iconName} className="size-8" />
        </div>
      )}
      {props.children}
    </div>
  )
}

const AlertTitle = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h4 className={cn("text-2xl font-bold font-public-sans mb-2 leading-none", className)} {...props}>
    {children}
  </h4>
)

const AlertDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("leading-normal font-public-sans", className)} {...props} />
)

export { Alert, AlertTitle, AlertDescription }
