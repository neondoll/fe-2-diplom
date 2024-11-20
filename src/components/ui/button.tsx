import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  [
    "inline-flex justify-center items-center gap-2 text-sm font-medium whitespace-nowrap rounded-md ring-offset-white",
    "transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950",
    "focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0 [&_svg]:size-4",
    "[&_svg]:pointer-events-none dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300",
  ],
  {
    defaultVariants: { size: "default", variant: "default" },
    variants: {
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "w-10 h-10",

        // my
        pagination: "w-[85px] h-[75px] p-[16px] text-[30px] font-bold leading-[35px] rounded-[5px]",
        size1: "py-[15px] pr-[76px] pl-[75px] text-[24px] font-bold leading-[28px] rounded-[5px]",
        size2: "pt-[16px] pr-[13px] pb-[14px] pl-[16px] text-[24px] font-normal leading-[28px] uppercase rounded-[3px]",
        size3: "pt-[16px] pr-[68px] pb-[14px] pl-[67px] text-[24px] font-bold leading-[28px] uppercase rounded-[5px]",
        size4: "pt-[14px] pr-[69px] pb-[16px] pl-[73px] text-[24px] font-bold leading-[28px] uppercase rounded-[5px]",
      },
      variant: {
        default: [
          "text-zinc-50 bg-zinc-900 hover:bg-zinc-900/90 dark:text-zinc-900 dark:bg-zinc-50 dark:hover:bg-zinc-50/90",
        ],
        destructive: [
          "text-zinc-50 bg-red-500 hover:bg-red-500/90 dark:text-zinc-50 dark:bg-red-900 dark:hover:bg-red-900/90",
        ],
        outline: [
          "bg-white border border-zinc-200 hover:text-zinc-900 hover:bg-zinc-100 dark:bg-zinc-950 dark:border-zinc-800",
          "dark:hover:text-zinc-50 dark:hover:bg-zinc-800",
        ],
        secondary: [
          "text-zinc-900 bg-zinc-100 hover:bg-zinc-100/80 dark:text-zinc-50 dark:bg-zinc-800 dark:hover:bg-zinc-800/80",
        ],
        ghost: "hover:text-zinc-900 hover:bg-zinc-100 dark:hover:text-zinc-50 dark:hover:bg-zinc-800",
        link: "text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50",

        // my
        pagination: [
          "text-[#928f94] border-2 border-[#c4c4c4]",
          "hover:text-[#ffa800] hover:border-[#ffa800]",
        ],
        paginationActive: "text-white bg-[#ffa800] border-2 border-[#ffa800]",
        variant1: [
          "text-white border border-white",
          "hover:text-[#2d2b2f] hover:bg-[#ffca62] hover:border-[#ffca62]",
          "active:text-[#2d2b2f] active:bg-white active:border-white",
        ],
        variant2: [
          "text-[#e5e5e5] border border-white",
          "hover:text-[#2d2b2f] hover:bg-[#ffca62] hover:border-[#ffca62]",
          "active:text-[#2d2b2f] active:bg-white active:border-white",
        ],
        variant3: [
          "text-[#292929] bg-[#ffa800] border border-[#ffa800]",
          "hover:shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]",
          "active:text-[#ffa800] active:bg-transparent active:shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]",
        ],
        variant4: [
          "text-white bg-[#ffa800] border border-[#ffa800]",
          "hover:shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]",
          "active:text-[#ffa800] active:bg-transparent active:shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]",
        ],
      },
    },
  },
);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, size, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
