import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  [
    "group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-none",
    "text-sm font-medium tracking-[0.01em] uppercase",
    "transition-[color,background-color,border-color,transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-background hover:bg-ink hover:text-background",
        outline:
          "border border-hairline-strong text-ink hover:border-accent hover:text-accent",
        ghost: "text-ink hover:text-accent",
        link: "px-0 normal-case tracking-normal text-accent underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-10 px-5 text-[0.7rem]",
        md: "h-12 px-7 text-[0.72rem]",
        lg: "h-14 px-9 text-[0.74rem]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  withArrow?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, withArrow, children, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            <span className="leading-none">{children}</span>
            {withArrow && (
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.25}
              />
            )}
          </>
        )}
      </Comp>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
