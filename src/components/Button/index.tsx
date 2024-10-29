import { cn } from "@utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const buttonStyles = cva(
    ["w-full", "rounded-md", "font-semibold", "focus:outline-none", "disabled:cursor-not-allowed"],
    {
        variants: {
            variant: {
                solid: "",
                outline: "border-2",
                ghost: "transition-colors duration-300",
                animation: "transition-colors duration-700"
            },
            size: {
                sm: "px-4 py-2 text-sm",
                md: "px-4 py-2 text-base",
                lg: "px-6 py-3 text-lg",
            },
            colorscheme: {
                primary: "text-white",
            }
        },
        compoundVariants: [
            {
                variant: "solid",
                colorscheme: "primary",
                className: "bg-primary-500 hover:bg-primary-600"
            },
            {
                variant: "outline",
                colorscheme: "primary",
                className: "text-primary-600 border border-primary-500 bg-transparent hover:bg-primary-100",
            },
            {
                variant: "ghost",
                colorscheme: "primary",
                className: "text-primary-600 bg-transparent hover:bg-primary-100",
            },
            {
                variant: "animation",
                colorscheme: "primary",
                className: "text-white bg-primary-500 hover:animate-bounce hover:bg-transparent hover:text-primary-600 shadow-sm hover:shadow-xl border border-blue-400",
            }
        ],
        defaultVariants: {
            variant: "solid",
            size: "md",
            colorscheme: "primary",
        }
    }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, colorscheme, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size, className }))}
        {...props}
      />
    );
  }
);