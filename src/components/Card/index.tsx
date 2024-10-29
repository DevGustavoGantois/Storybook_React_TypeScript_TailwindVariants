import { cn } from "@utils"; 
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";


const CardStyles = cva(
  ["w-full", "rounded-xl", "font-light", "text-white", "hover:bg-violet-600 cursor-pointer transition-all duration-300", "bg-violet-500", "h-full"],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-1 border-violet-300",
        ghost: "transition-colors duration-300",
        animation: "transition-colors duration-700 animation-bounce",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
        xl: "px-6 py-3 text-xl",
      },
      colorscheme: {
        primary: "text-white",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorscheme: "primary",
        className: "bg-primary-500 hover:scale-[1.1] duration-100 transition-all",
      },
      {
        variant: "outline",
        colorscheme: "primary",
        className: "bg-violet-500 hover:rotate-45 duration-300 transition-all",
      },
      {
        variant: "ghost",
        colorscheme: "primary",
        className: "bg-cyan-600 hover:bg-transparent hover:text-gray-600 duration-700 transition-all hover:border-2 border-l-cyan-900",
      },
      {
        variant: "animation",
        colorscheme: "primary",
        className: "bg-emerald-500 text-white/80 hover:bg-emerald-600 hover:text-white duration-1000 transition-all hover:animate-ping",
      },
    ],
  }
);

type CardProps = ComponentProps<"div"> & VariantProps<typeof CardStyles> & {
    description?: string;
}


export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant, size, colorscheme, className, children, description, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(CardStyles({ variant, size, colorscheme }), className)} 
        {...props}
      >
        {children}
        <div className="text-sm font-extralight mt-2 mb-2 max-w-[190px]">
            {description}
        </div>
      </div>
    );
  }
);
