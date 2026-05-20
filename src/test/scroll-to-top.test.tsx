import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ScrollToTop } from "@/components/ui/scroll-to-top"

describe("ScrollToTop", () => {
  let scrollToSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    scrollToSpy = vi.spyOn(HTMLElement.prototype, "scrollTo").mockImplementation(() => {})
    Object.defineProperty(document.documentElement, "scrollTop", {
      configurable: true,
      writable: true,
      value: 0,
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("renders with default accessible name", () => {
    render(<ScrollToTop />)
    expect(screen.getByRole("button", { name: /back to top/i })).toBeInTheDocument()
  })

  it("scrolls to top on click", async () => {
    const user = userEvent.setup()
    render(<ScrollToTop />)

    await user.click(screen.getByRole("button", { name: /back to top/i }))

    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: "smooth" })
  })

  it("stays out of the accessibility tree until threshold is met when threshold is set", async () => {
    render(<ScrollToTop threshold={400} />)

    expect(screen.queryByRole("button", { name: /back to top/i })).not.toBeInTheDocument()

    const button = screen.getByRole("button", { hidden: true, name: /back to top/i })
    expect(button).toHaveAttribute("aria-hidden", "true")
    expect(button).toHaveClass("opacity-0")

    Object.defineProperty(document.documentElement, "scrollTop", {
      configurable: true,
      writable: true,
      value: 500,
    })
    window.dispatchEvent(new Event("scroll"))

    await waitFor(() => {
      const shown = screen.getByRole("button", { name: /back to top/i })
      expect(shown).toBeInTheDocument()
      expect(shown).toHaveAttribute("aria-hidden", "false")
    })
  })
})
