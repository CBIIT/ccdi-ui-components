"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const radioGroupVariants = cva("space-y-2")

const radioItemVariants = cva(
  cn(
    // Base layout and appearance
    "relative flex shrink-0 cursor-pointer items-center justify-center",
    "size-5 rounded-full border-none text-blue-60",

    // Default ring state
    "ring-2 ring-gray-90 ring-offset-0",

    // Focus states
    "peer-focus:ring-2 peer-focus:ring-gray-90 peer-focus:ring-offset-0",
    "peer-focus:outline peer-focus:outline-4 peer-focus:outline-offset-4 peer-focus:outline-blue-40",

    // Disabled states
    "peer-disabled:cursor-not-allowed peer-disabled:ring-gray-50",
    "peer-disabled:peer-checked:text-gray-50",

    // Checked states
    "peer-checked:ring-blue-60 peer-focus:peer-checked:ring-blue-60",

    // Before pseudo-element (radio dot)
    "before:size-4 before:rounded-full",
    "peer-checked:before:bg-blue-60 peer-checked:peer-disabled:before:bg-gray-50",
  ),
  {
    variants: {
      variant: {
        default: "",
        tiled: "top-0.5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

const radioLabelVariants = cva(
  "block cursor-pointer pl-3 peer-disabled:cursor-not-allowed peer-disabled:text-gray-60",
  {
    variants: {
      variant: {
        default: "",
        tiled:
          "before:bg-white before:rounded peer-disabled:before:bg-white before:absolute before:inset-0 before:-z-10 before:border-2 before:border-gray-20 peer-checked:before:border-blue-60 peer-checked:before:bg-blue-60/10 peer-disabled:before:border-gray-10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

interface RadioGroupContextValue {
  name?: string
  value?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
  variant?: "default" | "tiled"
}

const RadioGroupContext = React.createContext<RadioGroupContextValue>({})

interface RadioGroupProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof radioGroupVariants> {
  name?: string
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
  variant?: "default" | "tiled"
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      className,
      name,
      value,
      defaultValue,
      onValueChange,
      disabled,
      variant = "default",
      children,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue || "")
    const currentValue = value !== undefined ? value : internalValue

    const handleValueChange = React.useCallback(
      (newValue: string) => {
        if (value === undefined) {
          setInternalValue(newValue)
        }
        onValueChange?.(newValue)
      },
      [value, onValueChange],
    )

    const contextValue = React.useMemo(
      () => ({
        name,
        value: currentValue,
        onValueChange: handleValueChange,
        disabled,
        variant,
      }),
      [name, currentValue, handleValueChange, disabled, variant],
    )

    return (
      <RadioGroupContext.Provider value={contextValue}>
        <div ref={ref} className={cn(radioGroupVariants(), className)} role="radiogroup" {...props}>
          {children}
        </div>
      </RadioGroupContext.Provider>
    )
  },
)
RadioGroup.displayName = "RadioGroup"

interface RadioGroupItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string
  children?: React.ReactNode
}

const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ className, value, children, disabled: itemDisabled, ...props }, ref) => {
    const {
      name,
      value: groupValue,
      onValueChange,
      disabled: groupDisabled,
      variant,
    } = React.useContext(RadioGroupContext)
    const disabled = itemDisabled || groupDisabled
    const checked = groupValue === value
    const id = React.useId()

    const handleChange = () => {
      if (!disabled && onValueChange) {
        onValueChange(value)
      }
    }

    const labelClasses = variant === "tiled" ? "flex relative z-0 px-3 py-4" : "flex"

    return (
      <label htmlFor={id} className={cn(labelClasses)}>
        <input
          ref={ref}
          id={id}
          type="radio"
          value={value}
          name={name}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          className="peer sr-only"
          {...props}
        />
        <div className={cn(radioItemVariants({ variant }), className)} />
        {children && <div className={cn(radioLabelVariants({ variant }))}>{children}</div>}
      </label>
    )
  },
)
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }
