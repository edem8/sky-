import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import BrandCategories from "../contents/brand/brands";

export default function Brands() {
  return (
    <Popover>
      <PopoverTrigger className="cursor-pointer">Brands</PopoverTrigger>
      <PopoverContent className="mt-38 lg:mt-43 xl:mt-40 py-8 rounded-none h-screen w-[100vw] lg:w-[99vw] max-w-none transition-all trnaslate-x-0 lg:translate-x-1 xl:translate-x-2">
        <BrandCategories />
      </PopoverContent>
    </Popover>
  );
}
