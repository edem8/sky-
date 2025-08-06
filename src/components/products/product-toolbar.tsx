"use client";

import { Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductToolbarProps {
  totalProducts: number;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export function ProductToolbar({
  totalProducts,
  viewMode,
  onViewModeChange,
  sortBy,
  onSortChange,
}: ProductToolbarProps) {
  return (
    <div className="flex items-center justify-around bg-gray-50 py-6 border-b">
      <div className="flex items-center space-x-4">
        <span className="text-lg font-bold">{totalProducts}</span>
        <span className="text-gray-600">products found</span>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Sort by</span>
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="w-60 py-8">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Popularity</SelectItem>
              <SelectItem value="price-asc">Price (Low to High)</SelectItem>
              <SelectItem value="price-desc">Price (High to Low)</SelectItem>
              <SelectItem value="name">Name</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-1">
          <span className="text-sm text-gray-600">View</span>
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="sm"
            onClick={() => onViewModeChange("grid")}
          >
            <Grid className="w-6 h-6" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="sm"
            onClick={() => onViewModeChange("list")}
          >
            <List className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
