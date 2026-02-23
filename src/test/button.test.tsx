import { describe, it, expect, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "@/components/ui/button"

describe("Button", () => {
  describe("Rendering", () => {
    it("renders with default props", () => {
      render(<Button>Test Button</Button>)

      const button = screen.getByRole("button", { name: /test button/i })
      expect(button).toBeInTheDocument()
      expect(button).toHaveTextContent("Test Button")
    })

    it("renders with custom className", () => {
      render(<Button className="custom-class">Test</Button>)

      const button = screen.getByRole("button")
      expect(button).toHaveClass("custom-class")
    })

    it("forwards ref correctly", () => {
      const ref = vi.fn()
      render(<Button ref={ref}>Test</Button>)

      expect(ref).toHaveBeenCalled()
    })
  })

  describe("Variants", () => {
    it("applies primary variant classes by default", () => {
      render(<Button>Primary</Button>)

      const button = screen.getByRole("button")
      expect(button).toHaveClass("bg-blue-60", "text-white")
    })

    it("applies secondary variant classes", () => {
      render(<Button variant="secondary">Secondary</Button>)

      const button = screen.getByRole("button")
      expect(button).toHaveClass("text-blue-60", "bg-transparent", "border-2", "border-blue-60")
    })

    it("applies success variant classes", () => {
      render(<Button variant="success">Success</Button>)

      const button = screen.getByRole("button")
      expect(button).toHaveClass("bg-green-60", "text-white")
    })

    it("applies warning variant classes", () => {
      render(<Button variant="warning">Warning</Button>)

      const button = screen.getByRole("button")
      expect(button).toHaveClass("bg-orange-60", "text-white")
    })

    it("applies danger variant classes", () => {
      render(<Button variant="danger">Danger</Button>)

      const button = screen.getByRole("button")
      expect(button).toHaveClass("bg-red-60", "text-white")
    })

    it("applies outline variant classes", () => {
      render(<Button variant="outline">Outline</Button>)

      const button = screen.getByRole("button")
      expect(button).toHaveClass("text-gray-80", "bg-transparent", "border", "border-gray-60")
    })

    it("applies link variant classes", () => {
      render(<Button variant="link">Link</Button>)

      const button = screen.getByRole("button")
      expect(button).toHaveClass("text-blue-60", "underline-offset-4")
    })
  })

  describe("Sizes", () => {
    it("applies default size classes by default", () => {
      render(<Button>Default</Button>)

      const button = screen.getByRole("button")
      expect(button).toHaveClass("px-5", "py-3")
    })

    it("applies small size classes", () => {
      render(<Button size="sm">Small</Button>)

      const button = screen.getByRole("button")
      expect(button).toHaveClass("px-3", "py-2", "text-sm")
    })

    it("applies large size classes", () => {
      render(<Button size="lg">Large</Button>)

      const button = screen.getByRole("button")
      expect(button).toHaveClass("px-6", "py-4", "text-lg")
    })
  })

  describe("States", () => {
    it("handles disabled state", () => {
      render(<Button disabled>Disabled</Button>)

      const button = screen.getByRole("button")
      expect(button).toBeDisabled()
      expect(button).toHaveClass("disabled:pointer-events-none", "disabled:opacity-50")
    })

    it("applies base classes for all buttons", () => {
      render(<Button>Test</Button>)

      const button = screen.getByRole("button")
      expect(button).toHaveClass(
        "inline-flex",
        "items-center",
        "justify-center",
        "rounded",
        "font-bold",
        "leading-none",
        "transition-colors",
      )
    })
  })

  describe("Interactions", () => {
    it("handles click events", async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()

      render(<Button onClick={handleClick}>Click me</Button>)

      const button = screen.getByRole("button")
      await user.click(button)

      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it("does not call onClick when disabled", async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()

      render(
        <Button disabled onClick={handleClick}>
          Disabled
        </Button>,
      )

      const button = screen.getByRole("button")
      await user.click(button)

      expect(handleClick).not.toHaveBeenCalled()
    })

    it("handles keyboard events", () => {
      const handleKeyDown = vi.fn()

      render(<Button onKeyDown={handleKeyDown}>Test</Button>)

      const button = screen.getByRole("button")
      fireEvent.keyDown(button, { key: "Enter" })

      expect(handleKeyDown).toHaveBeenCalledTimes(1)
    })
  })

  describe("Accessibility", () => {
    it("has correct button role", () => {
      render(<Button>Accessible Button</Button>)

      const button = screen.getByRole("button")
      expect(button).toBeInTheDocument()
    })

    it("supports aria-label", () => {
      render(<Button aria-label="Custom Label">Button</Button>)

      const button = screen.getByRole("button", { name: /custom label/i })
      expect(button).toBeInTheDocument()
    })

    it("supports aria-describedby", () => {
      render(
        <>
          <Button aria-describedby="description">Button</Button>
          <div id="description">Button description</div>
        </>,
      )

      const button = screen.getByRole("button")
      expect(button).toHaveAttribute("aria-describedby", "description")
    })
  })

  describe("HTML Attributes", () => {
    it("passes through HTML button attributes", () => {
      render(
        <Button type="submit" form="my-form" name="submit-button" value="submit">
          Submit
        </Button>,
      )

      const button = screen.getByRole("button")
      expect(button).toHaveAttribute("type", "submit")
      expect(button).toHaveAttribute("form", "my-form")
      expect(button).toHaveAttribute("name", "submit-button")
      expect(button).toHaveAttribute("value", "submit")
    })
  })

  describe("Focus and Hover States", () => {
    it("applies focus classes", async () => {
      const user = userEvent.setup()
      render(<Button>Focus Test</Button>)

      const button = screen.getByRole("button")
      await user.tab()

      expect(button).toHaveFocus()
      expect(button).toHaveClass("focus-visible:outline-4", "focus-visible:outline-offset-4")
    })

    it("handles mouse interactions", async () => {
      const user = userEvent.setup()
      render(<Button>Hover Test</Button>)

      const button = screen.getByRole("button")
      await user.hover(button)

      // Button should still be in the document and clickable
      expect(button).toBeInTheDocument()
      expect(button).not.toBeDisabled()
    })
  })

  describe("Variant and Size Combinations", () => {
    it("applies both variant and size classes correctly", () => {
      render(
        <Button variant="success" size="lg">
          Large Success
        </Button>,
      )

      const button = screen.getByRole("button")
      expect(button).toHaveClass("bg-green-60", "text-white") // success variant
      expect(button).toHaveClass("px-6", "py-4", "text-lg") // lg size
    })

    it("handles custom className with variant and size", () => {
      render(
        <Button variant="danger" size="sm" className="custom-button">
          Custom
        </Button>,
      )

      const button = screen.getByRole("button")
      expect(button).toHaveClass("bg-red-60", "text-white") // danger variant
      expect(button).toHaveClass("px-3", "py-2", "text-sm") // sm size
      expect(button).toHaveClass("custom-button") // custom class
    })
  })
})
