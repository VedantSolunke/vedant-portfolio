import * as React from "react"

import { cn } from "@/lib/utils"

function Avatar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar"
      className={cn("relative flex size-24 shrink-0 overflow-hidden rounded-2xl border border-line bg-background sm:size-28", className)}
      {...props}
    />
  )
}

function AvatarFallback({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-fallback"
      className={cn("flex size-full items-center justify-center bg-foreground font-sans text-3xl font-medium text-background sm:text-4xl", className)}
      {...props}
    />
  )
}

export { Avatar, AvatarFallback }
