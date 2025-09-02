import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transition-button",
  {
    variants: {
      variant: {
        // Primary CTA - QF Sage with proper contrast
        default: "bg-qf-sage text-qf-text-inverse hover:bg-qf-sage-700 rounded-xl elevation-1",
        // WhatsApp CTA - Enhanced primary with better styling
        whatsapp: "bg-qf-sage text-qf-text-inverse hover:bg-qf-sage-700 hover:scale-105 rounded-xl elevation-1 font-semibold",
        // Secondary - Outline with QF colors for light backgrounds
        outline: "border border-qf-sage text-qf-sage hover:bg-qf-sage hover:text-qf-text-inverse bg-transparent rounded-xl",
        // New variant for outline on dark backgrounds
        "outline-inverse": "border border-qf-text-inverse/60 text-qf-text-inverse hover:bg-qf-text-inverse/10 hover:border-qf-text-inverse backdrop-blur-sm rounded-xl",
        // Subtle secondary
        secondary: "bg-qf-paper text-qf-text-primary hover:bg-qf-deep/5 rounded-xl",
        // Ghost for header nav
        ghost: "hover:bg-qf-text-inverse/10 text-qf-text-inverse rounded-xl",
        // Link style
        link: "text-qf-sage underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
