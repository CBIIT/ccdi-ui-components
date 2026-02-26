import * as React from "react"
import { cn } from "@/lib/utils"

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "bg-white font-public-sans mt-2 flex h-12 w-full rounded-none border border-gray-60 px-3 py-2 text-gray-90 placeholder:text-gray-50",
          // Focus states
          "focus-visible:border-blue-60 focus-visible:outline focus-visible:outline-4 focus-visible:outline-blue-40",
          // Disabled states
          "disabled:cursor-not-allowed disabled:bg-gray-20 disabled:text-gray-70",
          // Error states
          "aria-[invalid=true]:border-4 aria-[invalid=true]:border-red-60v",
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = "Input"

export { Input }
