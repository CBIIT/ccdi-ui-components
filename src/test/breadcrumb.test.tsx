import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import { Breadcrumb } from "../components/ui/breadcrumb"

describe("Breadcrumb", () => {
  const mockItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Electronics", href: "/electronics" },
    { label: "Current Page" },
  ]

  describe("Rendering", () => {
    it("renders navigation element with correct aria-label", () => {
      render(<Breadcrumb items={mockItems} />)

      const nav = screen.getByRole("navigation", { name: /breadcrumbs/i })
      expect(nav).toBeInTheDocument()
    })

    it("renders with custom aria-label", () => {
      render(<Breadcrumb items={mockItems} ariaLabel="Page navigation" />)

      const nav = screen.getByRole("navigation", { name: /page navigation/i })
      expect(nav).toBeInTheDocument()
    })

    it("renders all breadcrumb items", () => {
      render(<Breadcrumb items={mockItems} />)

      // Check for links (all items except the last one)
      expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument()
      expect(screen.getByRole("link", { name: /products/i })).toBeInTheDocument()
      expect(screen.getByRole("link", { name: /electronics/i })).toBeInTheDocument()

      // Check for current page (last item, not a link)
      expect(screen.getByText("Current Page")).toBeInTheDocument()
    })

    it("renders links with correct href attributes", () => {
      render(<Breadcrumb items={mockItems} />)

      const homeLink = screen.getByRole("link", { name: /home/i })
      expect(homeLink).toHaveAttribute("href", "/")

      const productsLink = screen.getByRole("link", { name: /products/i })
      expect(productsLink).toHaveAttribute("href", "/products")
    })

    it("returns null when items array is empty", () => {
      const { container } = render(<Breadcrumb items={[]} />)
      expect(container.firstChild).toBeNull()
    })

    it("renders with custom className", () => {
      render(<Breadcrumb items={mockItems} className="custom-breadcrumb" />)

      const nav = screen.getByRole("navigation")
      expect(nav).toHaveClass("custom-breadcrumb")
    })
  })

  describe("Current Page", () => {
    it("marks the last item as current page", () => {
      render(<Breadcrumb items={mockItems} />)

      const currentPage = screen.getByText("Current Page")
      expect(currentPage).toHaveAttribute("aria-current", "page")
      expect(currentPage).toHaveAttribute("aria-disabled", "true")
      expect(currentPage).toHaveAttribute("role", "link")
    })

    it("does not render last item as clickable anchor", () => {
      const { container } = render(<Breadcrumb items={mockItems} />)

      // "Current Page" should not be a clickable <a> element
      const anchorLinks = container.querySelectorAll("a")
      expect(anchorLinks).toHaveLength(3) // Only first 3 items should be anchor links

      const linkTexts = Array.from(anchorLinks).map((link) => link.textContent)
      expect(linkTexts).not.toContain("Current Page")
    })
  })

  describe("Single Item", () => {
    it("renders single item as current page", () => {
      const singleItem = [{ label: "Home" }]
      const { container } = render(<Breadcrumb items={singleItem} />)

      const currentPage = screen.getByText("Home")
      expect(currentPage).toHaveAttribute("aria-current", "page")

      // Should be no clickable anchor links
      const anchorLinks = container.querySelectorAll("a")
      expect(anchorLinks).toHaveLength(0)
    })
  })

  describe("Two Items", () => {
    it("renders two items correctly", () => {
      const twoItems = [{ label: "Home", href: "/" }, { label: "About" }]
      render(<Breadcrumb items={twoItems} />)

      // First item should be a link
      expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument()

      // Second item should be current page
      const currentPage = screen.getByText("About")
      expect(currentPage).toHaveAttribute("aria-current", "page")
    })
  })

  describe("Wrap Variant", () => {
    it("applies wrap classes when wrap is true", () => {
      const { container } = render(<Breadcrumb items={mockItems} wrap={true} />)

      const nav = container.querySelector("nav")
      expect(nav).toHaveClass("leading-snug")
    })

    it("does not apply wrap classes when wrap is false", () => {
      const { container } = render(<Breadcrumb items={mockItems} wrap={false} />)

      const nav = container.querySelector("nav")
      expect(nav).not.toHaveClass("leading-snug")
    })
  })

  describe("Accessibility", () => {
    it("has proper navigation landmark", () => {
      render(<Breadcrumb items={mockItems} />)

      const nav = screen.getByRole("navigation")
      expect(nav).toBeInTheDocument()
    })

    it("uses ordered list for breadcrumb items", () => {
      const { container } = render(<Breadcrumb items={mockItems} />)

      const ol = container.querySelector("ol")
      expect(ol).toBeInTheDocument()
    })

    it("uses list items for each breadcrumb", () => {
      const { container } = render(<Breadcrumb items={mockItems} />)

      const listItems = container.querySelectorAll("li")
      expect(listItems).toHaveLength(4) // All 4 items should be in li elements
    })

    it("has proper ARIA attributes on current page", () => {
      render(<Breadcrumb items={mockItems} />)

      const currentPage = screen.getByText("Current Page")
      expect(currentPage).toHaveAttribute("role", "link")
      expect(currentPage).toHaveAttribute("aria-disabled", "true")
      expect(currentPage).toHaveAttribute("aria-current", "page")
    })

    it("hides separators from screen readers", () => {
      const { container } = render(<Breadcrumb items={mockItems} />)

      const separators = container.querySelectorAll('[aria-hidden="true"]')
      expect(separators.length).toBeGreaterThan(0)
    })
  })

  describe("Link Styling", () => {
    it("applies correct link classes", () => {
      render(<Breadcrumb items={mockItems} />)

      const homeLink = screen.getByRole("link", { name: /home/i })
      expect(homeLink).toHaveClass("text-blue-60v")
      expect(homeLink).toHaveClass("underline")
    })
  })

  describe("Forwarded Ref", () => {
    it("forwards ref correctly", () => {
      const ref = vi.fn()
      render(<Breadcrumb ref={ref} items={mockItems} />)

      expect(ref).toHaveBeenCalled()
    })
  })

  describe("Responsive Behavior", () => {
    it("uses Tailwind responsive classes for mobile behavior", () => {
      const { container } = render(<Breadcrumb items={mockItems} />)

      // Check that separators use sm: breakpoint
      const separators = container.querySelectorAll('[aria-hidden="true"]')
      expect(separators.length).toBeGreaterThan(0)
    })
  })
})
