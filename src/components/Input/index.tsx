import { cn } from "@utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const inputStyles = cva([
    "w-full",
    "border",
    "border-gray-200",
    "p-2",
    "rounded-lg",
    "transition-all",
    "duration-100",
    "outline-none",
    "focus:outline-primary-500",
    "focus:border-transparent",
    "placeholder:text-gray-400",
    "placeholder:text-sm",
  ]);
  
  type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyles>;
  export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }, ref) => {
      return (
        <input
          type="text"
          autoComplete="off"
          ref={ref}
          className={cn(inputStyles({className}))}
          {...props}
        />
      );
    }
  );