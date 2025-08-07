import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React from "react";

export default function Paginator() {
  return (
    <Pagination className="mt-10 text-xs lg:text-sm">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className="border-2 border-[#088F8F] rounded-none py-5 lg:py-6 hover:bg-gray-50"
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="#"
            className="border-2 border-[#088F8F] rounded-none py-5 lg:py-6 hover:bg-gray-50 "
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
