import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";

export default function Brands() {
  return (
    <Popover>
      <PopoverTrigger className="cursor-pointer">Brands</PopoverTrigger>
      <PopoverContent className="mt-40 w-screen py-40">
        Place content for the popover here.
      </PopoverContent>
    </Popover>
  );
}
