"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const getPaddingClass = (depth: number): string => {
  const paddingMap: Record<number, string> = {
    0: "pl-4",
    1: "pl-8",
    2: "pl-12",
    3: "pl-16",
  }
  return paddingMap[depth] || "pl-16"
}

interface TreeDataItem {
  id: string
  name: string
  icon?: React.ComponentType<{ className?: string }>
  selectedIcon?: React.ComponentType<{ className?: string }>
  openIcon?: React.ComponentType<{ className?: string }>
  children?: TreeDataItem[]
  actions?: React.ReactNode
  onClick?: () => void
  href?: string
  draggable?: boolean
  droppable?: boolean
  disabled?: boolean
}

type TreeProps = React.HTMLAttributes<HTMLDivElement> & {
  data: TreeDataItem[] | TreeDataItem
  initialSelectedItemId?: string
  onSelectChange?: (item: TreeDataItem | undefined) => void
  expandAll?: boolean
  defaultNodeIcon?: React.ComponentType<{ className?: string }>
  defaultLeafIcon?: React.ComponentType<{ className?: string }>
  onDocumentDrag?: (sourceItem: TreeDataItem, targetItem: TreeDataItem) => void
  ariaLabel?: string
}

const TreeView = React.forwardRef<HTMLDivElement, TreeProps>(
  (
    {
      data,
      initialSelectedItemId,
      onSelectChange,
      expandAll,
      defaultLeafIcon,
      defaultNodeIcon,
      className,
      onDocumentDrag,
      ariaLabel = "Tree navigation",
      ...props
    },
    ref,
  ) => {
    const [selectedItemId, setSelectedItemId] = React.useState<string | undefined>(
      initialSelectedItemId,
    )

    const [draggedItem, setDraggedItem] = React.useState<TreeDataItem | null>(null)

    const handleSelectChange = React.useCallback(
      (item: TreeDataItem | undefined) => {
        setSelectedItemId(item?.id)
        if (onSelectChange) {
          onSelectChange(item)
        }
      },
      [onSelectChange],
    )

    const handleDragStart = React.useCallback((item: TreeDataItem) => {
      setDraggedItem(item)
    }, [])

    const handleDrop = React.useCallback(
      (targetItem: TreeDataItem) => {
        if (draggedItem && onDocumentDrag && draggedItem.id !== targetItem.id) {
          onDocumentDrag(draggedItem, targetItem)
        }
        setDraggedItem(null)
      },
      [draggedItem, onDocumentDrag],
    )

    const expandedItemIds = React.useMemo(() => {
      if (!initialSelectedItemId) {
        return [] as string[]
      }

      const ids: string[] = []

      function walkTreeItems(items: TreeDataItem[] | TreeDataItem, targetId: string) {
        if (items instanceof Array) {
          for (let i = 0; i < items.length; i++) {
            ids.push(items[i]!.id)
            if (walkTreeItems(items[i]!, targetId) && !expandAll) {
              return true
            }
            if (!expandAll) ids.pop()
          }
        } else if (!expandAll && items.id === targetId) {
          return true
        } else if (items.children) {
          return walkTreeItems(items.children, targetId)
        }
      }

      walkTreeItems(data, initialSelectedItemId)
      return ids
    }, [data, expandAll, initialSelectedItemId])

    return (
      <nav aria-label={ariaLabel} className={cn("overflow-hidden relative", className)} ref={ref}>
        <TreeItem
          data={data}
          selectedItemId={selectedItemId}
          handleSelectChange={handleSelectChange}
          expandedItemIds={expandedItemIds}
          defaultLeafIcon={defaultLeafIcon}
          defaultNodeIcon={defaultNodeIcon}
          handleDragStart={handleDragStart}
          handleDrop={handleDrop}
          draggedItem={draggedItem}
          {...props}
        />
      </nav>
    )
  },
)
TreeView.displayName = "TreeView"

type TreeItemProps = Omit<TreeProps, "data"> & {
  data: TreeDataItem[] | TreeDataItem
  selectedItemId?: string
  handleSelectChange: (item: TreeDataItem | undefined) => void
  expandedItemIds: string[]
  defaultNodeIcon?: React.ComponentType<{ className?: string }>
  defaultLeafIcon?: React.ComponentType<{ className?: string }>
  handleDragStart?: (item: TreeDataItem) => void
  handleDrop?: (item: TreeDataItem) => void
  draggedItem: TreeDataItem | null
  depth?: number
}

const TreeItem: React.FC<TreeItemProps> = ({
  className,
  data,
  selectedItemId,
  handleSelectChange,
  expandedItemIds,
  defaultNodeIcon,
  defaultLeafIcon,
  handleDragStart,
  handleDrop,
  draggedItem,
  depth = 0,
  ...props
}) => {
  if (!(data instanceof Array)) {
    data = [data]
  }
  return (
    <div role="tree" className={className} {...props}>
      <ul className="border-b border-b-gray-10">
        {data.map((item) => (
          <li key={item.id} className="border-t border-t-gray-10">
            {item.children ? (
              <TreeNode
                item={item}
                selectedItemId={selectedItemId}
                expandedItemIds={expandedItemIds}
                handleSelectChange={handleSelectChange}
                defaultNodeIcon={defaultNodeIcon}
                defaultLeafIcon={defaultLeafIcon}
                handleDragStart={handleDragStart}
                handleDrop={handleDrop}
                draggedItem={draggedItem}
                depth={depth}
              />
            ) : (
              <TreeLeaf
                item={item}
                selectedItemId={selectedItemId}
                handleSelectChange={handleSelectChange}
                defaultLeafIcon={defaultLeafIcon}
                handleDragStart={handleDragStart}
                handleDrop={handleDrop}
                draggedItem={draggedItem}
                depth={depth}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

const TreeNode = ({
  item,
  handleSelectChange,
  expandedItemIds,
  selectedItemId,
  defaultNodeIcon,
  defaultLeafIcon,
  handleDragStart,
  handleDrop,
  draggedItem,
  depth = 0,
}: {
  item: TreeDataItem
  handleSelectChange: (item: TreeDataItem | undefined) => void
  expandedItemIds: string[]
  selectedItemId?: string
  defaultNodeIcon?: React.ComponentType<{ className?: string }>
  defaultLeafIcon?: React.ComponentType<{ className?: string }>
  handleDragStart?: (item: TreeDataItem) => void
  handleDrop?: (item: TreeDataItem) => void
  draggedItem: TreeDataItem | null
  depth?: number
}) => {
  const [isOpen, setIsOpen] = React.useState(expandedItemIds.includes(item.id))
  const [isDragOver, setIsDragOver] = React.useState(false)

  const onDragStart = (e: React.DragEvent) => {
    if (!item.draggable) {
      e.preventDefault()
      return
    }
    e.dataTransfer.setData("text/plain", item.id)
    handleDragStart?.(item)
  }

  const onDragOver = (e: React.DragEvent) => {
    if (item.droppable !== false && draggedItem && draggedItem.id !== item.id) {
      e.preventDefault()
      setIsDragOver(true)
    }
  }

  const onDragLeave = () => {
    setIsDragOver(false)
  }

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    handleDrop?.(item)
  }

  return (
    <div>
      <button
        type="button"
        className={cn(
          "block relative py-2 px-4 text-gray-60 hover:text-blue-60v hover:bg-gray-5 w-full text-left",
          getPaddingClass(depth),
          "focus:outline focus:outline-4 focus:outline-offset-0 focus:outline-blue-40v",
          "aria-[current]:text-blue-60v aria-[current]:font-bold",
          "aria-[current=page]:after:block aria-[current=page]:after:absolute aria-[current=page]:after:bg-blue-60v",
          "aria-[current=page]:after:inset-y-1 aria-[current=page]:after:left-0 aria-[current=page]:after:w-1 aria-[current=page]:after:rounded-full",
          isDragOver && "bg-blue-10",
        )}
        onClick={(e) => {
          e.preventDefault()
          setIsOpen(!isOpen)
          handleSelectChange(item)
          item.onClick?.()
        }}
        draggable={!!item.draggable}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        aria-expanded={isOpen}
        aria-current={selectedItemId === item.id ? "page" : undefined}
      >
        <div className="flex items-center gap-2">
          <ChevronIcon isOpen={isOpen} />
          <TreeIcon
            item={item}
            isSelected={selectedItemId === item.id}
            isOpen={isOpen}
            default={defaultNodeIcon}
          />
          <span className="text-sm truncate flex-1">{item.name}</span>
          <TreeActions isSelected={selectedItemId === item.id}>{item.actions}</TreeActions>
        </div>
      </button>
      {isOpen && item.children && (
        <ul>
          <TreeItem
            data={item.children}
            selectedItemId={selectedItemId}
            handleSelectChange={handleSelectChange}
            expandedItemIds={expandedItemIds}
            defaultLeafIcon={defaultLeafIcon}
            defaultNodeIcon={defaultNodeIcon}
            handleDragStart={handleDragStart}
            handleDrop={handleDrop}
            draggedItem={draggedItem}
            depth={depth + 1}
          />
        </ul>
      )}
    </div>
  )
}

const TreeLeaf = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    item: TreeDataItem
    selectedItemId?: string
    handleSelectChange: (item: TreeDataItem | undefined) => void
    defaultLeafIcon?: React.ComponentType<{ className?: string }>
    handleDragStart?: (item: TreeDataItem) => void
    handleDrop?: (item: TreeDataItem) => void
    draggedItem: TreeDataItem | null
    depth?: number
  }
>(
  (
    {
      className,
      item,
      selectedItemId,
      handleSelectChange,
      defaultLeafIcon,
      handleDragStart,
      handleDrop,
      draggedItem,
      depth = 0,
      ...props
    },
    ref,
  ) => {
    const [isDragOver, setIsDragOver] = React.useState(false)

    const onDragStart = (e: React.DragEvent) => {
      if (!item.draggable || item.disabled) {
        e.preventDefault()
        return
      }
      e.dataTransfer.setData("text/plain", item.id)
      handleDragStart?.(item)
    }

    const onDragOver = (e: React.DragEvent) => {
      if (item.droppable !== false && !item.disabled && draggedItem && draggedItem.id !== item.id) {
        e.preventDefault()
        setIsDragOver(true)
      }
    }

    const onDragLeave = () => {
      setIsDragOver(false)
    }

    const onDrop = (e: React.DragEvent) => {
      if (item.disabled) return
      e.preventDefault()
      setIsDragOver(false)
      handleDrop?.(item)
    }

    return (
      <a
        ref={ref}
        href={item.href || "#"}
        className={cn(
          "block relative py-2 px-4 text-gray-60 hover:text-blue-60v hover:bg-gray-5 no-underline",
          getPaddingClass(depth),
          "focus:outline focus:outline-4 focus:outline-offset-0 focus:outline-blue-40v",
          "aria-[current]:text-blue-60v aria-[current]:font-bold",
          "aria-[current=page]:after:block aria-[current=page]:after:absolute aria-[current=page]:after:bg-blue-60v",
          "aria-[current=page]:after:inset-y-1 aria-[current=page]:after:left-0 aria-[current=page]:after:w-1 aria-[current=page]:after:rounded-full",
          className,
          isDragOver && "bg-blue-10",
          item.disabled && "opacity-50 cursor-not-allowed pointer-events-none",
        )}
        onClick={(e) => {
          if (item.disabled) {
            e.preventDefault()
            return
          }
          if (item.onClick) {
            e.preventDefault()
            handleSelectChange(item)
            item.onClick()
          } else {
            handleSelectChange(item)
          }
        }}
        draggable={!!item.draggable && !item.disabled}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        tabIndex={item.disabled ? -1 : 0}
        role="treeitem"
        aria-selected={selectedItemId === item.id}
        aria-disabled={item.disabled}
        aria-current={selectedItemId === item.id ? "page" : undefined}
        {...props}
      >
        <div className="flex items-center gap-2">
          <TreeIcon item={item} isSelected={selectedItemId === item.id} default={defaultLeafIcon} />
          <span className="text-sm truncate flex-1">{item.name}</span>
          <TreeActions isSelected={selectedItemId === item.id && !item.disabled}>
            {item.actions}
          </TreeActions>
        </div>
      </a>
    )
  },
)
TreeLeaf.displayName = "TreeLeaf"

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-90")}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

const TreeIcon = ({
  item,
  isOpen,
  isSelected,
  default: defaultIcon,
}: {
  item: TreeDataItem
  isOpen?: boolean
  isSelected?: boolean
  default?: React.ComponentType<{ className?: string }>
}) => {
  let Icon = defaultIcon
  if (isSelected && item.selectedIcon) {
    Icon = item.selectedIcon
  } else if (isOpen && item.openIcon) {
    Icon = item.openIcon
  } else if (item.icon) {
    Icon = item.icon
  }
  return Icon ? <Icon className="h-4 w-4 shrink-0" /> : null
}

const TreeActions = ({
  children,
  isSelected,
}: {
  children: React.ReactNode
  isSelected: boolean
}) => {
  return <div className={cn(isSelected ? "block" : "hidden", "group-hover:block")}>{children}</div>
}

export { TreeView, type TreeDataItem }
