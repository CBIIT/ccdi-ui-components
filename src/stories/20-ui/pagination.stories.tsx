import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

const meta = {
  title: 'UI/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A pagination component following USWDS design patterns for navigating through multiple pages of content.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

// Default story - Simple pagination
export const Default: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious href="#" />
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationNext href="#" />
      </PaginationContent>
    </Pagination>
  ),
}

// With many pages
export const WithManyPages: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious href="#" />
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">5</PaginationLink>
        </PaginationItem>
        <PaginationNext href="#" />
      </PaginationContent>
    </Pagination>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pagination with multiple pages visible.',
      },
    },
  },
}

// With ellipsis
export const WithEllipsis: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious href="#" />
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationEllipsis />
        <PaginationItem>
          <PaginationLink href="#" isLast>
            10
          </PaginationLink>
        </PaginationItem>
        <PaginationNext href="#" />
      </PaginationContent>
    </Pagination>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pagination with ellipsis to indicate skipped pages.',
      },
    },
  },
}

// First page
export const FirstPage: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationEllipsis />
        <PaginationItem>
          <PaginationLink href="#" isLast>
            20
          </PaginationLink>
        </PaginationItem>
        <PaginationNext href="#" />
      </PaginationContent>
    </Pagination>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pagination on the first page (no previous button).',
      },
    },
  },
}

// Last page
export const LastPage: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious href="#" />
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationEllipsis />
        <PaginationItem>
          <PaginationLink href="#">17</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">18</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">19</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive isLast>
            20
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pagination on the last page (no next button).',
      },
    },
  },
}

// Middle page with double ellipsis
export const MiddlePage: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious href="#" />
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationEllipsis />
        <PaginationItem>
          <PaginationLink href="#">9</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            10
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">11</PaginationLink>
        </PaginationItem>
        <PaginationEllipsis />
        <PaginationItem>
          <PaginationLink href="#" isLast>
            50
          </PaginationLink>
        </PaginationItem>
        <PaginationNext href="#" />
      </PaginationContent>
    </Pagination>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pagination in the middle with ellipsis on both sides.',
      },
    },
  },
}

// Interactive example
export const Interactive: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = React.useState(1)
    const totalPages = 10

    const handlePageChange = (page: number) => {
      setCurrentPage(page)
    }

    const renderPageNumbers = () => {
      const pages = []
      const showEllipsisStart = currentPage > 3
      const showEllipsisEnd = currentPage < totalPages - 2

      if (showEllipsisStart) {
        pages.push(
          <PaginationItem key={1}>
            <PaginationLink href="#" onClick={(e) => { e.preventDefault(); handlePageChange(1) }}>
              1
            </PaginationLink>
          </PaginationItem>
        )
        pages.push(<PaginationEllipsis key="ellipsis-start" />)
      }

      const startPage = Math.max(1, currentPage - 1)
      const endPage = Math.min(totalPages, currentPage + 1)

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              isActive={i === currentPage}
              onClick={(e) => { e.preventDefault(); handlePageChange(i) }}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        )
      }

      if (showEllipsisEnd) {
        pages.push(<PaginationEllipsis key="ellipsis-end" />)
        pages.push(
          <PaginationItem key={totalPages}>
            <PaginationLink
              href="#"
              isLast
              onClick={(e) => { e.preventDefault(); handlePageChange(totalPages) }}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )
      }

      return pages
    }

    return (
      <div className="space-y-4">
        <div className="text-center">Current page: {currentPage}</div>
        <Pagination>
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationPrevious
                href="#"
                onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1) }}
              />
            )}
            {renderPageNumbers()}
            {currentPage < totalPages && (
              <PaginationNext
                href="#"
                onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1) }}
              />
            )}
          </PaginationContent>
        </Pagination>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive pagination example with state management.',
      },
    },
  },
}

