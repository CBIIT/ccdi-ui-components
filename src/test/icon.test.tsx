import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Icon, SearchIcon, HomeIcon, PersonIcon } from "@/components/ui/icon"

describe("Icon", () => {
  it("renders with core defaults", () => {
    render(<Icon icon="search" data-testid="icon" />)

    const icon = screen.getByTestId("icon")
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute("viewBox", "0 0 24 24")
    expect(icon).toHaveAttribute("role", "img")
    expect(icon).toHaveAttribute("aria-hidden", "true")
    expect(icon).toHaveClass(
      "h-8",
      "w-8",
      "inline-block",
      "shrink-0",
      "stroke-none",
      "fill-current",
    )
  })

  it.each([
    ["2xs", "h-4", "w-4"],
    ["xs", "h-5", "w-5"],
    ["sm", "h-6", "w-6"],
    ["xl", "h-12", "w-12"],
    ["2xl", "h-16", "w-16"],
  ] as const)("applies %s size classes", (size, expectedHeightClass, expectedWidthClass) => {
    render(<Icon icon="search" size={size} data-testid="icon" />)

    const icon = screen.getByTestId("icon")
    expect(icon).toHaveClass(expectedHeightClass, expectedWidthClass)
  })

  it("applies spin and merges custom classes", () => {
    render(<Icon icon="search" spin className="text-blue-600 custom-class" data-testid="icon" />)

    const icon = screen.getByTestId("icon")
    expect(icon).toHaveClass("animate-spin", "text-blue-600", "custom-class")
  })

  it("forwards standard SVG props", () => {
    render(<Icon icon="home" aria-label="Home icon" data-testid="icon" />)

    const icon = screen.getByTestId("icon")
    expect(icon).toHaveAttribute("aria-label", "Home icon")
  })
})

describe("Individual Icon Components", () => {
  it("renders exported icon wrappers", () => {
    render(
      <>
        <SearchIcon data-testid="search-icon" />
        <HomeIcon data-testid="home-icon" />
        <PersonIcon data-testid="person-icon" />
      </>,
    )

    expect(screen.getByTestId("search-icon")).toBeInTheDocument()
    expect(screen.getByTestId("home-icon")).toBeInTheDocument()
    expect(screen.getByTestId("person-icon")).toBeInTheDocument()
  })

  it("forwards props through wrapper components", () => {
    render(<SearchIcon size="lg" className="text-gray-500" data-testid="search-icon" />)

    const icon = screen.getByTestId("search-icon")
    expect(icon).toHaveClass("h-10", "w-10", "text-gray-500")
  })
})
