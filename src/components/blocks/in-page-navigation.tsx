import { cn } from "@/lib/utils"

export type InPageNavigationItem = {
  label: string
  href: string
  isActive?: boolean
  children?: InPageNavigationItem[]
}

export interface InPageNavigationProps {
  items: InPageNavigationItem[]
  ariaLabel?: string
  className?: string
}

function NavigationList({ items }: { items: InPageNavigationItem[] }) {
  return (
    <ul className={cn("border-b border-b-gray-10 [&_a]:pl-4 [&_ul_a]:pl-8 [&_ul_ul_a]:pl-12")}>
      {items.map((item, index) => (
        <li key={`${item.href}-${index}`} className={cn("border-t border-t-gray-10")}>
          <a
            href={item.href}
            className={cn(
              "relative block px-4 py-2 text-gray-60 hover:bg-gray-5 hover:text-blue-60v",
              "focus:outline focus:outline-4 focus:outline-offset-0 focus:outline-blue-40v",
              "aria-[current=page]:font-bold aria-[current=page]:text-blue-60v",
              "aria-[current=page]:after:absolute aria-[current=page]:after:block aria-[current=page]:after:bg-blue-60v",
              "aria-[current=page]:after:inset-y-1 aria-[current=page]:after:left-0 aria-[current=page]:after:w-1 aria-[current=page]:after:rounded-full",
            )}
            aria-current={item.isActive ? "page" : undefined}
          >
            {item.label}
          </a>

          {item.children && item.children.length > 0 ? (
            <NavigationList items={item.children} />
          ) : null}
        </li>
      ))}
    </ul>
  )
}

export function InPageNavigation({
  items,
  ariaLabel = "Side navigation",
  className,
}: InPageNavigationProps) {
  return (
    <nav aria-label={ariaLabel} className={cn(className)}>
      <NavigationList items={items} />
    </nav>
  )
}

InPageNavigation.displayName = "InPageNavigation"

export default InPageNavigation
