import * as React from "react"
import { cn } from "@/lib/utils"

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: React.ElementType
  size?: "default" | "narrow" | "wide" | "editorial"
}

export function Container({
  as: Tag = "div",
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-6 sm:px-10 lg:px-12",
        size === "default" && "max-w-[1320px]",
        size === "narrow" && "max-w-[960px]",
        size === "editorial" && "max-w-[1100px]",
        size === "wide" && "max-w-[1480px]",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
