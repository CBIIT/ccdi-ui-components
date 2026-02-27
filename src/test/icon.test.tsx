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
    expect(icon).toHaveClass("size-6", "inline-block", "shrink-0", "stroke-none", "fill-current")
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
})
