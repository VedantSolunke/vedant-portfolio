import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 rounded-full border px-2 py-0.5 font-mono text-xs whitespace-nowrap transition-colors",
  {
    variants: {
      variant: {
        secondary: "border-line bg-foreground/5 text-muted",
        outline: "border-line text-muted",
      },
    },
    defaultVariants: {
      variant: "secondary",
    },
  },
)

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
