import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";

export default function Country() {
  return (
    <Popover>
      <PopoverTrigger className="flex items-center gap-2 cursor-pointer text-white hover:bg-gray-200 hover:text-gray-600 rounded-full px-5 py-0 transition-all">
        <span className="text-lg">🇬🇭</span>
        <span className="text-xs font-semibold">GHA</span>
      </PopoverTrigger>
      <PopoverContent className="mt-6 "></PopoverContent>
    </Popover>
  );
}
