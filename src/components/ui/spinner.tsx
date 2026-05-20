import { cn } from "@/lib/utils"
import { LoopIcon } from "@/components/ui/icon"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <LoopIcon
      role="status"
      aria-label="Loading"
      className={cn("animate-spin size-4", className)}
      {...props}
    />
  )
}

export { Spinner }
