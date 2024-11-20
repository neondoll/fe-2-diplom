import {
  Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious,
} from "@/components/ui/pagination.tsx";
import { useEffect, useState } from "react";
import type { ComponentProps, MouseEvent } from "react";

type Pages = Array<{ type: "ellipsis" } | { type: "page"; value: number }>;
type Props = Pick<ComponentProps<typeof Pagination>, "className"> & { page?: number; pageCount: number };

function range(start: number, end: number) {
  const length = end - start + 1;

  return Array.from({ length }, (_, idx) => idx + start);
}

function transform(items: (string | number)[]): Pages {
  return items.map((value) => {
    if (typeof value === "number") {
      return { type: "page", value };
    }

    return { type: "ellipsis" };
  });
}

const ELLIPSIS = "ellipsis";

function getRange(currentPage: number, pageCount: number, siblingCount: number, showEdges: boolean) {
  const firstPageIndex = 1;
  const lastPageIndex = pageCount;

  const leftSiblingIndex = Math.max(currentPage - siblingCount, firstPageIndex);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, lastPageIndex);

  if (showEdges) {
    const totalPageNumbers = Math.min(2 * siblingCount + 5, pageCount);

    const itemCount = totalPageNumbers - 2;
    const showLeftEllipsis = leftSiblingIndex > firstPageIndex + 2
      && Math.abs(lastPageIndex - itemCount - firstPageIndex + 1) > 2
      && Math.abs(leftSiblingIndex - firstPageIndex) > 2;

    const showRightEllipsis = rightSiblingIndex < lastPageIndex - 2
      && Math.abs(lastPageIndex - itemCount) > 2
      && Math.abs(lastPageIndex - rightSiblingIndex) > 2;

    if (!showLeftEllipsis && showRightEllipsis) {
      const leftRange = range(1, itemCount);

      return [...leftRange, ELLIPSIS, lastPageIndex];
    }

    if (showLeftEllipsis && !showRightEllipsis) {
      const rightRange = range(lastPageIndex - itemCount + 1, lastPageIndex);

      return [firstPageIndex, ELLIPSIS, ...rightRange];
    }

    if (showLeftEllipsis && showRightEllipsis) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);

      return [firstPageIndex, ELLIPSIS, ...middleRange, ELLIPSIS, lastPageIndex];
    }

    return range(firstPageIndex, lastPageIndex);
  }
  else {
    const itemCount = siblingCount * 2 + 1;

    if (pageCount < itemCount) {
      return range(1, lastPageIndex);
    }
    else if (currentPage <= (siblingCount + 1)) {
      return range(firstPageIndex, itemCount);
    }
    else if ((pageCount - currentPage) <= siblingCount) {
      return range(pageCount - itemCount + 1, lastPageIndex);
    }
    else {
      return range(leftSiblingIndex, rightSiblingIndex);
    }
  }
}

export default function EPagination({ className, page = 1, pageCount }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState<Pages>([]);

  useEffect(() => {
    setPages(() => transform(getRange(currentPage, pageCount, 1, true)));
  }, [currentPage, pageCount]);
  useEffect(() => {
    setCurrentPage(() => page);
  }, [page]);

  const handleClickNext = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    setCurrentPage(prev => prev < pageCount ? prev + 1 : pageCount);
  };
  const handleClickPage = (event: MouseEvent<HTMLAnchorElement>, page: number) => {
    event.preventDefault();

    setCurrentPage(() => page);
  };
  const handleClickPrevious = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    setCurrentPage(prev => prev > 1 ? prev - 1 : 1);
  };

  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={handleClickPrevious} />
        </PaginationItem>
        {pages.map((item, index) => (
          <PaginationItem key={index}>
            {item.type === "ellipsis" && (
              <PaginationEllipsis />
            )}
            {item.type === "page" && (
              <PaginationLink
                href="#"
                isActive={item.value === currentPage}
                onClick={event => handleClickPage(event, item.value)}
              >
                {item.value}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#" onClick={handleClickNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
