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
      <PopoverTrigger className="flex items-center lg:gap-2 cursor-pointer text-white hover:bg-gray-200 hover:text-gray-600 rounded-full px-1 xl:px-5 py-2 transition-all">
        <span className=" text-lg md:text-xs xl:text-lg ">🇬🇭</span>
        <div className="flex items-center">
          <span className="text-xs hidden lg:inline font-semibold">GHA</span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="mt-6 "></PopoverContent>
    </Popover>
  );
}
