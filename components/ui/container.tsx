import * as React from "react"
import { cn } from "@/lib/utils"

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: React.ElementType
  size?: "default" | "narrow" | "wide"
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
        "mx-auto w-full px-5 sm:px-8 lg:px-10",
        size === "default" && "max-w-[1280px]",
        size === "narrow" && "max-w-[960px]",
        size === "wide" && "max-w-[1440px]",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
