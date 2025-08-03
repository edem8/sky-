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
      <PopoverTrigger className="flex items-center text-left gap-2 cursor-pointer text-white hover:bg-gray-200 hover:text-gray-600 rounded-full px-4 py-3 transition-all">
        <UserRound className="w-6 h-6" />
        <div className="flex flex-col gap-0 pt-1">
          <span className="text-xs">Welcome</span>
          <span className="text-xs font-semibold">login / signup</span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="mt-6"></PopoverContent>
    </Popover>
  );
}
