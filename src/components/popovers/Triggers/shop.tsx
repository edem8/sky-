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
      <PopoverTrigger className="cursor-pointer">Shop & Category</PopoverTrigger>
      <PopoverContent className="mt-40 w-screen  rounded-none mx-20 bg-red-200 h-100">
        <ShopCategories />
      </PopoverContent>
    </Popover>
  );
}
