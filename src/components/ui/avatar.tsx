import * as React from "react"

import { cn } from "@/lib/utils"

function Avatar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar"
      className={cn("relative flex size-11 shrink-0 overflow-hidden rounded-lg border border-line bg-background", className)}
      {...props}
    />
  )
}

function AvatarFallback({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center bg-accent font-mono text-xs font-medium text-accent-foreground",
        className,
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarFallback }
