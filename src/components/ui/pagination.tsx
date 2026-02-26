"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Icon } from "./icon"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("@container flex justify-center", className)}
    {...props}
  />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn("flex space-x-2", className)} {...props} />
  ),
)
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("inline-flex h-10 min-w-10", className)} {...props} />
  ),
)
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
  isLast?: boolean
} & React.ComponentProps<"a">

const PaginationLink = ({
  className,
  isActive,
  isLast,
  children,
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    aria-label={isLast ? `Last page, page ${children}` : `Page ${children}`}
    className={cn(
      "rounded font-public-sans flex w-full items-center justify-center border border-gray-90/20 p-2 text-blue-60 hover:border-blue-warm-70 hover:text-blue-warm-70 focus:border-blue-warm-70 focus:text-blue-warm-70 focus:outline focus:outline-4 focus:outline-offset-0 focus:outline-blue-40",
      isActive && "text-white hover:text-white focus:text-white bg-gray-90",
      className,
    )}
    {...props}
  >
    {children}
  </a>
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationItem className="hidden h-10 min-w-10 tablet:inline-flex">
    <PaginationLink
      aria-label="Go to previous page"
      className={cn(
        "mr-3 inline-flex items-center border-0 pr-2 text-blue-60 hover:text-blue-warm-70 hover:underline focus:text-blue-warm-70 focus:underline focus:outline focus:outline-4 focus:outline-blue-40",
        className,
      )}
      {...props}
    >
      <Icon icon="navigate_before" className="size-4 align-middle" aria-hidden="true" />
      Previous
    </PaginationLink>
  </PaginationItem>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationItem className="hidden h-10 min-w-10 tablet:inline-flex">
    <PaginationLink
      aria-label="Go to next page"
      className={cn(
        "ml-3 inline-flex items-center border-0 pl-2 text-blue-60 hover:text-blue-warm-70 hover:underline focus:text-blue-warm-70 focus:underline focus:outline focus:outline-4 focus:outline-blue-40",
        className,
      )}
      {...props}
    >
      Next
      <Icon icon="navigate_next" className="size-4 align-middle" aria-hidden="true" />
    </PaginationLink>
  </PaginationItem>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"li">) => (
  <li
    aria-label="ellipsis indicating non-visible pages"
    className={cn("flex h-10 min-w-10 items-center justify-center p-2 select-none", className)}
    {...props}
  >
    <span>...</span>
  </li>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
