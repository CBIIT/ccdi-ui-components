import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

describe("Table Components", () => {
  describe("Table", () => {
    it("renders with default props", () => {
      render(
        <Table data-testid="table">
          <TableBody>
            <TableRow>
              <TableCell>Test Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      )

      const table = screen.getByTestId("table")
      expect(table).toBeInTheDocument()
      expect(table.tagName).toBe("TABLE")
    })

    it("renders with custom className", () => {
      render(
        <Table className="custom-table" data-testid="table">
          <TableBody>
            <TableRow>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      )

      const table = screen.getByTestId("table")
      expect(table).toHaveClass("custom-table")
    })

    it("forwards ref correctly", () => {
      const ref = vi.fn()
      render(
        <Table ref={ref}>
          <TableBody>
            <TableRow>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      )

      expect(ref).toHaveBeenCalled()
    })
  })

  describe("TableCaption", () => {
    it("renders caption with correct text", () => {
      render(
        <Table>
          <TableCaption>Test Caption</TableCaption>
        </Table>,
      )

      const caption = screen.getByText("Test Caption")
      expect(caption).toBeInTheDocument()
      expect(caption.tagName).toBe("CAPTION")
    })

    it("applies default classes", () => {
      render(
        <Table>
          <TableCaption>Caption</TableCaption>
        </Table>,
      )

      const caption = screen.getByText("Caption")
      expect(caption).toHaveClass("mb-3", "text-left", "font-bold")
    })
  })

  describe("TableHeader and TableHead", () => {
    it("renders header with correct structure", () => {
      render(
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Header 1</TableHead>
              <TableHead>Header 2</TableHead>
            </TableRow>
          </TableHeader>
        </Table>,
      )

      const header1 = screen.getByText("Header 1")
      const header2 = screen.getByText("Header 2")

      expect(header1).toBeInTheDocument()
      expect(header2).toBeInTheDocument()
      expect(header1.tagName).toBe("TH")
      expect(header2.tagName).toBe("TH")
    })
  })

  describe("TableBody", () => {
    it("renders body content", () => {
      render(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Cell Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      )

      const cell = screen.getByText("Cell Content")
      expect(cell).toBeInTheDocument()
      expect(cell.tagName).toBe("TD")
    })

    it("applies striped classes when striped prop is true", () => {
      render(
        <Table>
          <TableBody striped data-testid="table-body">
            <TableRow>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      )

      const tbody = screen.getByTestId("table-body")
      expect(tbody).toHaveClass("[&_tr:nth-child(even)_td]:bg-gray-5")
      expect(tbody).toHaveClass("[&_tr:nth-child(odd)_td]:bg-white")
    })

    it("applies default classes when striped prop is false or undefined", () => {
      render(
        <Table>
          <TableBody data-testid="table-body">
            <TableRow>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      )

      const tbody = screen.getByTestId("table-body")
      expect(tbody).toHaveClass("[&_tr_td]:bg-white")
    })
  })

  describe("TableRow and TableCell", () => {
    it("renders row with cells", () => {
      render(
        <Table>
          <TableBody>
            <TableRow data-testid="table-row">
              <TableCell>Cell 1</TableCell>
              <TableCell>Cell 2</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      )

      const row = screen.getByTestId("table-row")
      const cell1 = screen.getByText("Cell 1")
      const cell2 = screen.getByText("Cell 2")

      expect(row).toBeInTheDocument()
      expect(row.tagName).toBe("TR")
      expect(cell1).toBeInTheDocument()
      expect(cell2).toBeInTheDocument()
    })
  })

  describe("Complete Table Structure", () => {
    it("renders a complete table with all components", () => {
      render(
        <Table>
          <TableCaption>User Data</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>john@example.com</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>jane@example.com</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      )

      // Check caption
      expect(screen.getByText("User Data")).toBeInTheDocument()

      // Check headers
      expect(screen.getByText("Name")).toBeInTheDocument()
      expect(screen.getByText("Email")).toBeInTheDocument()

      // Check data
      expect(screen.getByText("John Doe")).toBeInTheDocument()
      expect(screen.getByText("john@example.com")).toBeInTheDocument()
      expect(screen.getByText("Jane Smith")).toBeInTheDocument()
      expect(screen.getByText("jane@example.com")).toBeInTheDocument()
    })
  })

  describe("Accessibility", () => {
    it("maintains proper table semantics", () => {
      render(
        <Table>
          <TableCaption>Accessible Table</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Column 1</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Data 1</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      )

      // Check that we have proper table structure
      const table = document.querySelector("table")
      const caption = document.querySelector("caption")
      const thead = document.querySelector("thead")
      const tbody = document.querySelector("tbody")
      const th = document.querySelector("th")
      const td = document.querySelector("td")

      expect(table).toBeInTheDocument()
      expect(caption).toBeInTheDocument()
      expect(thead).toBeInTheDocument()
      expect(tbody).toBeInTheDocument()
      expect(th).toBeInTheDocument()
      expect(td).toBeInTheDocument()
    })
  })
})
