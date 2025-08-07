import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import ShopCategories from "../contents/shop/shop";

export default function Shop() {
  return (
    <Popover>
      <PopoverTrigger className="cursor-pointer">
        Shop & Category
      </PopoverTrigger>
      <PopoverContent className=" mt-38 lg:mt-43 xl:mt-40 py-8 rounded-none h-screen w-[100vw] lg:w-[99vw] max-w-none transition-all trnaslate-x-0 lg:translate-x-1 xl:translate-x-2">
        <ShopCategories />
      </PopoverContent>
    </Popover>
  );
}
