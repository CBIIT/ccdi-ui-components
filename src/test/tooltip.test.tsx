import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Tooltip, TooltipTrigger, TooltipContent } from "../components/ui/tooltip"
import { Button } from "../components/ui/button"

describe("Tooltip", () => {
  describe("Rendering", () => {
    it("renders tooltip with trigger and content", () => {
      render(
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>,
      )

      const button = screen.getByRole("button", { name: /hover me/i })
      expect(button).toBeInTheDocument()

      const tooltip = screen.getByRole("tooltip")
      expect(tooltip).toBeInTheDocument()
      expect(tooltip).toHaveTextContent("Tooltip text")
    })

    it("renders with custom className on tooltip wrapper", () => {
      render(
        <Tooltip className="custom-wrapper">
          <TooltipTrigger asChild>
            <Button>Test</Button>
          </TooltipTrigger>
          <TooltipContent>Content</TooltipContent>
        </Tooltip>,
      )

      const wrapper = screen.getByRole("button").parentElement
      expect(wrapper).toHaveClass("custom-wrapper")
    })
  })

  describe("Positions", () => {
    it("applies top position by default", () => {
      render(
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Test</Button>
          </TooltipTrigger>
          <TooltipContent>Top</TooltipContent>
        </Tooltip>,
      )

      const tooltip = screen.getByRole("tooltip")
      expect(tooltip).toHaveClass("bottom-full", "left-1/2", "-translate-x-1/2", "mb-2")
    })

    it("applies right position classes", () => {
      render(
        <Tooltip position="right">
          <TooltipTrigger asChild>
            <Button>Test</Button>
          </TooltipTrigger>
          <TooltipContent>Right</TooltipContent>
        </Tooltip>,
      )

      const tooltip = screen.getByRole("tooltip")
      expect(tooltip).toHaveClass("left-full", "top-1/2", "-translate-y-1/2", "ml-2")
    })

    it("applies bottom position classes", () => {
      render(
        <Tooltip position="bottom">
          <TooltipTrigger asChild>
            <Button>Test</Button>
          </TooltipTrigger>
          <TooltipContent>Bottom</TooltipContent>
        </Tooltip>,
      )

      const tooltip = screen.getByRole("tooltip")
      expect(tooltip).toHaveClass("top-full", "left-1/2", "-translate-x-1/2", "mt-2")
    })

    it("applies left position classes", () => {
      render(
        <Tooltip position="left">
          <TooltipTrigger asChild>
            <Button>Test</Button>
          </TooltipTrigger>
          <TooltipContent>Left</TooltipContent>
        </Tooltip>,
      )

      const tooltip = screen.getByRole("tooltip")
      expect(tooltip).toHaveClass("right-full", "top-1/2", "-translate-y-1/2", "mr-2")
    })
  })

  describe("Interactions", () => {
    it("shows tooltip on mouse enter", async () => {
      const user = userEvent.setup()

      render(
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>,
      )

      const button = screen.getByRole("button")
      const tooltip = screen.getByRole("tooltip")

      // Initially hidden (opacity-0)
      expect(tooltip).toHaveClass("opacity-0")

      // Hover over button
      await user.hover(button)

      // Tooltip should be visible (opacity-100)
      expect(tooltip).toHaveClass("opacity-100")
    })

    it("hides tooltip on mouse leave", async () => {
      const user = userEvent.setup()

      render(
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>,
      )

      const button = screen.getByRole("button")
      const tooltip = screen.getByRole("tooltip")

      // Hover over button
      await user.hover(button)
      expect(tooltip).toHaveClass("opacity-100")

      // Move mouse away
      await user.unhover(button)
      expect(tooltip).toHaveClass("opacity-0")
    })

    it("shows tooltip on focus", async () => {
      const user = userEvent.setup()

      render(
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Focus me</Button>
          </TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>,
      )

      const tooltip = screen.getByRole("tooltip")

      // Initially hidden
      expect(tooltip).toHaveClass("opacity-0")

      // Focus button
      await user.tab()

      // Tooltip should be visible
      expect(tooltip).toHaveClass("opacity-100")
    })

    it("hides tooltip on blur", async () => {
      const user = userEvent.setup()

      render(
        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Focus me</Button>
            </TooltipTrigger>
            <TooltipContent>Tooltip text</TooltipContent>
          </Tooltip>
          <button>Other button</button>
        </div>,
      )

      const tooltip = screen.getByRole("tooltip")

      // Focus first button
      await user.tab()
      expect(tooltip).toHaveClass("opacity-100")

      // Focus away (blur first button)
      await user.tab()
      expect(tooltip).toHaveClass("opacity-0")
    })
  })

  describe("Accessibility", () => {
    it("has correct tooltip role", () => {
      render(
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Test</Button>
          </TooltipTrigger>
          <TooltipContent>Accessible tooltip</TooltipContent>
        </Tooltip>,
      )

      const tooltip = screen.getByRole("tooltip")
      expect(tooltip).toBeInTheDocument()
    })

    it("applies USWDS styling classes", () => {
      render(
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Test</Button>
          </TooltipTrigger>
          <TooltipContent>Content</TooltipContent>
        </Tooltip>,
      )

      const tooltip = screen.getByRole("tooltip")
      expect(tooltip).toHaveClass("bg-gray-90", "text-gray-5", "rounded", "px-2", "py-2")
    })
  })

  describe("Trigger with asChild", () => {
    it("works with asChild=true and Button", () => {
      render(
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Custom trigger</Button>
          </TooltipTrigger>
          <TooltipContent>Content</TooltipContent>
        </Tooltip>,
      )

      const button = screen.getByRole("button", { name: /custom trigger/i })
      expect(button).toBeInTheDocument()
    })

    it("works with asChild=false (default span wrapper)", () => {
      render(
        <Tooltip>
          <TooltipTrigger>
            <span>Text trigger</span>
          </TooltipTrigger>
          <TooltipContent>Content</TooltipContent>
        </Tooltip>,
      )

      const trigger = screen.getByText("Text trigger")
      expect(trigger).toBeInTheDocument()
    })

    it("preserves existing event handlers when using asChild", async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()

      render(
        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={handleClick}>Click me</Button>
          </TooltipTrigger>
          <TooltipContent>Content</TooltipContent>
        </Tooltip>,
      )

      const button = screen.getByRole("button")
      await user.click(button)

      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe("Content Styling", () => {
    it("applies custom className to content", () => {
      render(
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Test</Button>
          </TooltipTrigger>
          <TooltipContent className="custom-tooltip">Custom content</TooltipContent>
        </Tooltip>,
      )

      const tooltip = screen.getByRole("tooltip")
      expect(tooltip).toHaveClass("custom-tooltip")
    })

    it("has pointer-events-none to prevent interference", () => {
      render(
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Test</Button>
          </TooltipTrigger>
          <TooltipContent>Content</TooltipContent>
        </Tooltip>,
      )

      const tooltip = screen.getByRole("tooltip")
      expect(tooltip).toHaveClass("pointer-events-none")
    })

    it("has transition classes for smooth animation", () => {
      render(
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Test</Button>
          </TooltipTrigger>
          <TooltipContent>Content</TooltipContent>
        </Tooltip>,
      )

      const tooltip = screen.getByRole("tooltip")
      expect(tooltip).toHaveClass("transition-opacity", "duration-200")
    })
  })

  describe("Multiple Tooltips", () => {
    it("handles multiple independent tooltips", async () => {
      const user = userEvent.setup()

      render(
        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>First</Button>
            </TooltipTrigger>
            <TooltipContent>First tooltip</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Second</Button>
            </TooltipTrigger>
            <TooltipContent>Second tooltip</TooltipContent>
          </Tooltip>
        </div>,
      )

      const firstButton = screen.getByRole("button", { name: /first/i })
      const tooltips = screen.getAllByRole("tooltip")

      expect(tooltips).toHaveLength(2)
      expect(tooltips[0]).toHaveTextContent("First tooltip")
      expect(tooltips[1]).toHaveTextContent("Second tooltip")

      // Initially both hidden
      expect(tooltips[0]).toHaveClass("opacity-0")
      expect(tooltips[1]).toHaveClass("opacity-0")

      // Hover over first button
      await user.hover(firstButton)

      // Only first tooltip visible
      expect(tooltips[0]).toHaveClass("opacity-100")
      expect(tooltips[1]).toHaveClass("opacity-0")
    })
  })
})
