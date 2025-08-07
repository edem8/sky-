import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function Finder() {
  return (
    <div className="flex items-center justify-center space-x-2 ">
      <Select defaultValue="catalog">
        <SelectTrigger className=" w-30 md:w-40 lg:w-50 text-xs md:text-sm rounded-none  py-6 lg:py-8 cursor-pointer bg-gray-50">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className=" text-xs md:text-sm rounded">
          <SelectItem value="catalog"> Appliances</SelectItem>
          <SelectItem value="electronics">Electronics</SelectItem>
        </SelectContent>
      </Select>

      <div className=" relative flex-1 max-w-md">
        <Input
          placeholder="I'm looking for..."
          className="pr-10 text-xs md:text-sm  rounded-none  py-6 lg:py-8"
        />
      </div>

      <div>
        <Button
          variant="default"
          className=" text-xs md:text-sm md:rounded-none py-6 lg:py-8 gap-1  px-4 md:px-1 rounded cursor-pointer bg-[#088F8F] hover:bg-[#5dadad]"
        >
          <span className="hidden md:inline">Search</span>{" "}
          <Search className="w-2 h-2  md:w-5 md:h-5" />
        </Button>
      </div>
    </div>
  );
}
