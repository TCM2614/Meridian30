import * as React from "react"
import { cn } from "@/lib/utils"

type EyebrowProps = React.HTMLAttributes<HTMLSpanElement>

export function Eyebrow({ className, children, ...props }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-eyebrow uppercase text-accent/90",
        className,
      )}
      {...props}
    >
      <span aria-hidden className="h-px w-10 bg-accent/60" />
      {children}
    </span>
  )
}
