import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const secondaryButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-normal transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 backdrop-blur-sm",
  {
    variants: {
      variant: {
        default:
          "bg-neutral-400/10 text-foreground border border-neutral-400/20 hover:bg-neutral-400/20",
        ghost:
          "bg-transparent text-foreground hover:bg-white/5",
      },
      size: {
        default: "h-14 px-6 text-base rounded-xl",
        sm: "h-10 px-4 text-sm rounded-lg",
        lg: "h-16 px-8 text-lg rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface SecondaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof secondaryButtonVariants> {
  asChild?: boolean;
}

const SecondaryButton = React.forwardRef<HTMLButtonElement, SecondaryButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(secondaryButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
SecondaryButton.displayName = "SecondaryButton";

export { SecondaryButton, secondaryButtonVariants };
