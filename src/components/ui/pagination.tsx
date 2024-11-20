import ChevronLeft from "@/icons/ChevronLeft.tsx";
import ChevronRight from "@/icons/ChevronRight.tsx";
import MoreHorizontal from "@/icons/MoreHorizontal.tsx";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import type { ButtonProps } from "@/components/ui/button";
import type { ComponentProps } from "react";

const Pagination = ({ className, ...props }: ComponentProps<"nav">) => (
  <nav
    className={cn("flex justify-center w-full mx-auto", className)}
    role="navigation"
    aria-label="pagination"
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = forwardRef<HTMLUListElement, ComponentProps<"ul">>(({ className, ...props }, ref) => (
  <ul className={cn("flex flex-row items-center gap-[35px]", className)} ref={ref} {...props} />
));
PaginationContent.displayName = "PaginationContent";

const PaginationEllipsis = ({ className, ...props }: ComponentProps<"span">) => (
  <span className={cn("flex justify-center items-end w-[85px] h-[75px] p-[16px] text-[#928f94] rounded-[5px] border-2 border-[#c4c4c4]", className)} aria-hidden {...props}>
    <MoreHorizontal className="w-[42px] h-[9px]" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

const PaginationItem = forwardRef<HTMLLIElement, ComponentProps<"li">>(({ className, ...props }, ref) => (
  <li className={cn("", className)} ref={ref} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = ComponentProps<"a"> & Pick<ButtonProps, "size"> & { isActive?: boolean };

const PaginationLink = ({ className, isActive, size = "pagination", ...props }: PaginationLinkProps) => (
  <a
    className={cn(buttonVariants({ size, variant: isActive ? "paginationActive" : "pagination" }), className)}
    aria-current={isActive ? "page" : undefined}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationNext = ({ className, ...props }: ComponentProps<typeof PaginationLink>) => (
  <PaginationLink className={className} aria-label="Go to next page" {...props}>
    <ChevronRight className="!w-[18px] !h-[29px]" />
    <span className="sr-only">Next</span>
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationPrevious = ({ className, ...props }: ComponentProps<typeof PaginationLink>) => (
  <PaginationLink className={className} aria-label="Go to previous page" {...props}>
    <ChevronLeft className="!w-[18px] !h-[29px]" />
    <span className="sr-only">Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
