import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button variants configuration using class-variance-authority (CVA)
 * Defines base styles and variant/size combinations for the Button component
 */
const buttonVariants = cva(
  cn(
    // Base layout and appearance
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-xs font-semibold uppercase leading-4 tracking-wide transition-all",

    // Disabled states
    "disabled:pointer-events-none disabled:opacity-50",

    // SVG icon styles
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",

    // Focus states
    "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",

    // Invalid/error states
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  ),
  {
    variants: {
      // Styles variants
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        success:
          "bg-success text-success-foreground hover:bg-success/90 focus-visible:ring-success/20 dark:focus-visible:ring-success/40 dark:bg-success/60",
        warning:
          "bg-warning text-warning-foreground hover:bg-warning/90 focus-visible:ring-warning/20 dark:focus-visible:ring-warning/40 dark:bg-warning/60",
        info: "bg-info text-info-foreground hover:bg-info/90 focus-visible:ring-info/20 dark:focus-visible:ring-info/40 dark:bg-info/60",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      // Size variants
      size: {
        default: "min-h-10 min-w-43 max-w-50 px-7 py-3 has-[>svg]:px-3",
        sm: "min-h-8 min-w-32 gap-1.5 px-5 has-[>svg]:px-2.5",
        lg: "min-h-14 min-w-44 px-10 text-base has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/**
 * ButtonProps type definition
 * Extends standard HTML button attributes with CVA variants and asChild prop
 *
 * @property asChild - When true, renders the child element instead of a button,
 *                     applying button styles to the child. Useful for rendering
 *                     links or other elements with button styling.
 */
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

/**
 * Button component
 *
 * A flexible button component with multiple variants and sizes.
 * Supports rendering as different elements using the asChild prop.
 *
 * @example
 * // Regular button
 * <Button variant="outline">Click me</Button>
 *
 * @example
 * // As a link with button styling
 * <Button asChild variant="outline">
 *   <a href="/home">Go Home</a>
 * </Button>
 *
 * @example
 * // Child's props override Button's props
 * <Button asChild onClick={() => console.log('Button')}>
 *   <a href="/" onClick={() => console.log('Link')}>
 *     Home
 *   </a>
 * </Button>
 * // Only logs "Link" (child's onClick wins)
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    // Generate the button className based on variant, size, and custom className
    const buttonClassName = cn(buttonVariants({ variant, size, className }));

    // When asChild is true, clone the child element and apply button styles to it
    if (asChild && React.isValidElement(children)) {
      const childProps = children.props as React.HTMLAttributes<HTMLElement>;

      // Clone the child element with merged props
      // Child's props take precedence over Button's props
      return React.cloneElement(children, {
        ...props, // Button's props (lower priority)
        ...childProps, // Child's props (higher priority - these override)
        className: cn(buttonClassName, childProps.className), // Merge classNames
        ref: ref, // Forward the ref to the child
      } as React.HTMLAttributes<HTMLElement>);
    }

    // Default behavior: render as a button element
    return (
      <button className={buttonClassName} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
