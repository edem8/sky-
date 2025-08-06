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
    <div className="flex items-center space-x-2 ">
      <Select defaultValue="catalog">
        <SelectTrigger className="w-50 rounded-none py-8 cursor-pointer bg-gray-50">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="catalog">Home Appliances</SelectItem>
          <SelectItem value="electronics">Electronics</SelectItem>
        </SelectContent>
      </Select>

      <div className="relative flex-1 max-w-md">
        <Input
          placeholder="I'm looking for..."
          className="pr-10 rounded-none py-8"
        />
      </div>

      <div>
        <Button
          variant="default"
          className="rounded-none py-8 gap-1 cursor-pointer bg-[#088F8F] hover:bg-[#5dadad]"
        >
          Search <Search className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
