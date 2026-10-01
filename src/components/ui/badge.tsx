import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center rounded-md border px-2 py-1 text-left font-mono text-[0.8125rem] leading-snug whitespace-normal",
  {
    variants: {
      variant: {
        secondary: "border-line bg-background text-foreground",
        outline: "border-line bg-transparent text-muted",
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
