import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";

import React from "react";

export default function Country() {
  return (
    <Popover>
      <PopoverTrigger className="flex items-center gap-2 cursor-pointer text-white hover:bg-gray-200 hover:text-gray-600 rounded-full px-1 xl:px-5 py-0 transition-all">
        <span className=" text-xs xl:text-lg ">🇬🇭</span>
        <div className="flex items-center">
          <span className="text-xs font-semibold">GHA</span>
          {/* Rotate the triangle and fill it */}
          <ChevronDown className="w-4 h-4 text-white ml-1" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="mt-6 "></PopoverContent>
    </Popover>
  );
}
