import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "@/components/ui/button"

describe("Button", () => {
  it("renders with default variant and size classes", () => {
    render(<Button>Test Button</Button>)

    const button = screen.getByRole("button", { name: /test button/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass("text-white", "bg-cerulean-50", "px-5", "py-3")
    expect(button).toHaveClass("inline-flex", "items-center", "justify-center", "rounded")
  })

  it.each([
    ["secondary", "bg-teal-50", "text-white"],
    ["success", "bg-green-cool-50v", "text-white"],
    ["danger", "bg-red-60v", "text-white"],
    ["outline", "bg-transparent", "border-2"],
    ["link", "underline", "!p-0"],
  ] as const)("applies %s variant classes", (variant, classA, classB) => {
    render(
      <Button variant={variant} data-testid="button">
        Label
      </Button>,
    )

    expect(screen.getByTestId("button")).toHaveClass(classA, classB)
  })

  it.each([
    ["sm", "p-2", "text-sm"],
    ["lg", "px-6", "text-xl"],
  ] as const)("applies %s size classes", (size, classA, classB) => {
    render(
      <Button size={size} data-testid="button">
        Label
      </Button>,
    )

    expect(screen.getByTestId("button")).toHaveClass(classA, classB)
  })

  it("merges custom className with variant and size", () => {
    render(
      <Button variant="danger" size="sm" className="custom-button" data-testid="button">
        Custom
      </Button>,
    )

    const button = screen.getByTestId("button")
    expect(button).toHaveClass("bg-red-60v", "p-2", "custom-button")
  })

  it("handles disabled state and blocks click", async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()

    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>,
    )

    const button = screen.getByRole("button")
    expect(button).toBeDisabled()
    expect(button).toHaveClass("disabled:cursor-not-allowed", "disabled:bg-gray-20")

    await user.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })

  it("handles click interactions", async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()

    render(<Button onClick={handleClick}>Click me</Button>)

    await user.click(screen.getByRole("button", { name: /click me/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("supports ARIA and HTML attributes", () => {
    render(
      <Button
        aria-label="Custom Label"
        aria-describedby="description"
        type="submit"
        form="my-form"
        name="submit-button"
        value="submit"
      >
        Submit
      </Button>,
    )

    const button = screen.getByRole("button", { name: /custom label/i })
    expect(button).toHaveAttribute("aria-describedby", "description")
    expect(button).toHaveAttribute("type", "submit")
    expect(button).toHaveAttribute("form", "my-form")
    expect(button).toHaveAttribute("name", "submit-button")
    expect(button).toHaveAttribute("value", "submit")
  })

  it("forwards refs", () => {
    const ref = vi.fn()
    render(<Button ref={ref}>Test</Button>)

    expect(ref).toHaveBeenCalled()
  })

  it("renders as child when asChild is true", () => {
    render(
      <Button asChild>
        <span>Docs</span>
      </Button>,
    )

    const slottedElement = screen.getByText("Docs")

    expect(slottedElement.tagName).toBe("SPAN")
    expect(slottedElement).toHaveAttribute("data-slot", "button")
    expect(slottedElement).toHaveClass("bg-cerulean-50", "text-white")
  })
})
