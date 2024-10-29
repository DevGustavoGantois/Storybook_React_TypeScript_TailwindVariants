import { cn } from "@utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef, useState } from "react";

// Accordion styles using CVA (Class Variance Authority)
const AccordionStyles = cva(
    [
      "w-full",
      "h-full",
      "text-right",
      "text-white",
      "bg-violet-700",
      "transition-all",
      "duration-700",
      "font-mono",
    ],
    {
      variants: {
        variant: {
          solid: "",
          outline: "border border-violet-400 bg-violet-300 transition-all duration-300",
          ghost: "border border-violet-100 bg-violet-200 transition-all duration-700",
          animation:
            "border border-l-violet-950 bg-violet-900 transition-all duration-1000 hover:scale-[1.3]",
        },
        size: {
          sm: "px-4 py-2 text-sm",
          md: "px-4 py-2 text-base",
          lg: "px-6 py-3 text-lg",
          xl: "px-6 py-3 text-xl",
        },
        colorscheme: {
          primary: "text-white bg-violet-700",
        },
      },
      compoundVariants: [
        {
          variant: "solid",
          colorscheme: "primary",
          className:
            "bg-orange-500 animate-none border border-white/30 hover:scale-[1.1] duration-100 transition-all rounded-xl",
        },
        {
          variant: "outline",
          colorscheme: "primary",
          className:
            "bg-violet-900 animate-bounce border border-white hover:scale-[1.2] duration-300 transition-all rounded-xl",
        },
        {
          variant: "ghost",
          colorscheme: "primary",
          className:
            "bg-blue-600 animate-spin border border-violet-600 hover:scale-[1.3] duration-500 transition-all rounded-xl",
        },
        {
          variant: "animation",
          colorscheme: "primary",
          className:
            "bg-emerald-600 animate-pulse border border-emerald-800 hover:scale-[1.6] duration-700 transition-all rounded-xl",
        },
      ],
    }
  ); 
  
  type AccordionProps = ComponentProps<"div"> &
    VariantProps<typeof AccordionStyles> & {
      answer?: string; 
      question: string; 
    };
  
  export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
    ({ className, variant, colorscheme, size, question, answer, ...props }, ref) => {
      const [isOpen, setIsOpen] = useState(false);
  
      const toggleAccordion = () => {
        setIsOpen(!isOpen);
      };
  
      return (
        <div
          ref={ref}
          className={cn(AccordionStyles({ variant, colorscheme, size }), className)}
          {...props}
        >
          <div
            className="accordion-header mb-2 cursor-pointer flex items-center justify-between"
            onClick={toggleAccordion}
          >
            <span>{question}</span>
            <span className="ml-2">{isOpen ? "-" : "+"}</span>
          </div>
  
          {isOpen && answer && (
            <div className="accordion-content text-left mt-2">
              <p>{answer}</p>
            </div>
          )}
        </div>
      );
    }
  );