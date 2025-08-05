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
      <PopoverContent className="mt-40 py-8 rounded-none h-screen w-[99vw] max-w-none transition-all translate-x-2">
        <ShopCategories />
      </PopoverContent>
    </Popover>
  );
}
