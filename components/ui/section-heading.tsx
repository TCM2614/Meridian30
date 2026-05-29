import * as React from "react"
import { cn } from "@/lib/utils"
import { Eyebrow } from "./eyebrow"

type SectionHeadingProps = {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: "left" | "center"
  className?: string
  as?: "h1" | "h2" | "h3"
  size?: "lg" | "xl" | "2xl"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Tag = "h2",
  size = "xl",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Tag
        className={cn(
          "max-w-[22ch] font-serif text-ink",
          size === "lg" && "text-display-lg",
          size === "xl" && "text-display-xl",
          size === "2xl" && "text-display-2xl",
          align === "center" && "max-w-[28ch]",
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={cn(
            "max-w-prose text-base leading-relaxed text-fog sm:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
