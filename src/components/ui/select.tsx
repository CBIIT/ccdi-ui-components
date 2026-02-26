"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { UnfoldMoreIcon } from "@/components/ui/icon"

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Unique identifier for the select element */
  id?: string
  /** Name attribute for form submission */
  name?: string
  /** Disables the select element */
  disabled?: boolean
  /** Marks the select as required */
  required?: boolean
  /** Marks the select as having an error/invalid state */
  invalid?: boolean
  /** Marks the select as having a success state */
  success?: boolean
  /** Custom className for additional styling */
  className?: string
  /** ARIA label for accessibility */
  "aria-label"?: string
  /** ID of element that labels this select */
  "aria-labelledby"?: string
  /** ID of element that describes this select */
  "aria-describedby"?: string
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      id,
      name,
      className,
      disabled = false,
      required = false,
      invalid = false,
      success = false,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
      "aria-describedby": ariaDescribedby,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="relative mt-2 flex items-center">
        <select
          id={id}
          name={name}
          disabled={disabled}
          required={required}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
          aria-describedby={ariaDescribedby}
          aria-invalid={invalid ? "true" : undefined}
          className={cn(
            // Base styling
            "peer w-full appearance-none opacity-100",
            "font-public-sans text-base text-gray-90",
            // Size and spacing
            "p-2 pr-8",
            // Background and border
            "bg-white rounded-none border border-gray-60",
            // Focus states
            "focus:outline focus:outline-4 focus:outline-offset-0 focus:outline-blue-40v",
            // Invalid states
            invalid && "border-transparent ring-4 ring-red-60v outline-offset-4",
            // success states
            success && "border-transparent ring-4 ring-green-40v outline-offset-4",
            // Disabled states
            "disabled:cursor-not-allowed disabled:bg-gray-20 disabled:text-gray-70",
            className,
          )}
          ref={ref}
          data-invalid={invalid ? "true" : undefined}
          {...props}
        >
          {children}
        </select>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 flex h-full items-center px-2 whitespace-nowrap text-gray-90 select-none peer-disabled:text-gray-70"
        >
          <UnfoldMoreIcon size="xs" />
        </div>
      </div>
    )
  },
)

Select.displayName = "Select"

export { Select }
