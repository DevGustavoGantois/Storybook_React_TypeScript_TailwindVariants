import { cn } from "@utils";
import { cva, VariantProps } from "class-variance-authority"
import { ComponentProps, forwardRef } from "react"

const SidebarStyles = cva(
    ["h-full", "rounded-md", "w-1/2", "bg-blue-500", "text-white", "text-lg", "text-left"],
    {
        variants: {
            variant: {
                solid: "",
                outline: "bg-blue-200 text-white/70 duration-300 transition-all",
                ghost: "transition-colors duration-300",
                animation: "transition-colors duration-700 animation-bounce",
            },
            size: {
                sm: "px-2 py-2 text-sm",
                md: "px-4 py-4 text-md",
                lg: "px-6 py-6 text-lg",
                xl: "px-8 py-8 text-xl",
            },
            colorscheme: {
                primary: "text-white",

            },
        },
        compoundVariants: [
            {
                variant: "solid",
                colorscheme: "primary",
                className: "bg-blue-500 text-white uppercase text-lg text-left",
            },
            {
                variant: "outline",
                colorscheme: "primary",
                className: "bg-blue-200 text-white/80 text-xl text-left",
            },
            {
                variant: "ghost",
                colorscheme: "primary",
                className: "bg-blue-100 text-black text-2xl text-right",
            },
            {
                variant: "animation",
                colorscheme: "primary",
                className: "bg-red text-black text-3xl text-left",
            }
        ]
    }
)

type SidebarProps =ComponentProps<'header'> & VariantProps<typeof SidebarStyles> & {
    description?: string;
}

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps> (
    ({variant, size, colorscheme, className, children, ...props}, ref) => {
        return (
            <div
            ref={ref}
            className={cn(SidebarStyles({variant, size, colorscheme,}), className)}
            {...props}
            >
                <div className="flex flex-col gap-6">
                    {children}
                </div>
            </div>
        )
    }
)