import * as React from "react"
import { cn } from "@/lib/utils"

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "bg-white font-public-sans mt-2 flex min-h-30 w-full rounded-none border border-gray-60 px-3 py-2 text-gray-90 placeholder:text-gray-50",
          // Focus states
          "focus:border-blue-60 focus:outline focus:outline-4 focus:outline-blue-40",
          // Disabled states
          "disabled:cursor-not-allowed disabled:bg-gray-20 disabled:text-gray-70",
          // Error states
          "aria-[invalid=true]:border-4 aria-[invalid=true]:border-red-60v",
          // Resize
          "resize-y",
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Textarea.displayName = "Textarea"

export { Textarea }
