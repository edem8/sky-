import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { UserRound } from "lucide-react";
import React from "react";

export default function User() {
  return (
    <Popover>
      <PopoverTrigger className="flex items-center text-left gap-1 lg:gap-2 cursor-pointer text-white hover:bg-gray-200 hover:text-gray-600 rounded-full px-1 lg:px-4 py-3 transition-all">
        <UserRound className="w-4 h-4 lg:w-6 lg:h-6" />
        <div className="flex flex-col gap-0 pt-1">
          <span className="text-xs font-semibold hidden lg:block">Welcome</span>
          <span className="text-xs ">
            login
            <span className="text-xs hidden lg:inline "> / signup</span>
          </span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="mt-6"></PopoverContent>
    </Popover>
  );
}
