import { cn } from "@utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";


const HeaderStyles = cva(
  ["flex", "justify-between", "gap-20", "text-black/70", "bg-white"], 
  {
    variants: {
      variant: {
        solid: "",
        outline: "bg-blue-500 border-white",
        ghost: "bg-blue-800 text-white border-blue-500",
        animation: "bg-violet-700 text-white border-violet-400"
      },
      size: {
        sm: "px-8 py-6 text-sm",
        md: "px-12 py-8 text-base",
        lg: "px-16 py-12 text-lg",
        xl: "px-20 py-24 text-xl",
      },
      colorscheme: {
        primary: "text-white"
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorscheme: "primary",
        className: "py-12 px-12 text-black/70 transition-all duration-700 hover:scale-[1.2] hover:uppercase flex justify-around items-center gap-32 bg-white"
      },
      {
        variant: "outline",
        colorscheme: "primary",
        className: "py-16 px-16 text-white transition-all duration-500 hover:scale-[1.5] hover:lowercase flex justify-between",
      },
      {
        variant: "ghost",
        colorscheme: "primary",
        className: "py-20 px-20 text-white transition-all duration-300 hover:scale-[1.1] bg-black hover:uppercase font-light hover:font-bold flex justify-evenly",
      },
      {
        variant: "animation",
        colorscheme: "primary",
        className: "py-24 px-24 text-white bg-violet-500 duration-700 hover:scale-[1.6] hover:uppercase font-extrabold hover:font-light flex justify-items-end"
      },
    ],
  }
);


type HeaderProps = ComponentProps<"header"> & VariantProps<typeof HeaderStyles>;


export const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ variant, children, className, colorscheme, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(HeaderStyles({ variant, className, colorscheme }), className)}
        {...props}
      >
        <ul className="flex gap-32">
            <li>Home</li>
            <li>Sobre</li>
            <li>Recursos</li>
            <li>Contato</li>
        </ul>
      </header>
    );
  }
);
