"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PriceFilterProps {
  min: number;
  max: number;
  onPriceChange: (min: number, max: number) => void;
}

export function PriceFilter({ min, max, onPriceChange }: PriceFilterProps) {
  const [minPrice, setMinPrice] = useState(min);
  const [maxPrice, setMaxPrice] = useState(max);

  const handleMinChange = (value: string) => {
    const numValue = Number.parseInt(value) || 0;
    setMinPrice(numValue);
    onPriceChange(numValue, maxPrice);
  };

  const handleMaxChange = (value: string) => {
    const numValue = Number.parseInt(value) || 0;
    setMaxPrice(numValue);
    onPriceChange(minPrice, numValue);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-1 lg:space-x-2">
        <div className="flex-1">
          <Input
            type="number"
            value={minPrice}
            onChange={(e) => handleMinChange(e.target.value)}
            className="text-xs lg:text-sm mt-2 "
          />
          <Label className="text-xs pl-2 py-1 text-gray-500">GHS</Label>
        </div>
        <span className="text-gray-400 pb-4">—</span>
        <div className="flex-1 ">
          <Input
            type="number"
            value={maxPrice}
            onChange={(e) => handleMaxChange(e.target.value)}
            className="text-sm mt-2"
          />
          <Label className="text-xs pl-2 py-1 text-gray-500">GHS</Label>
        </div>
      </div>
    </div>
  );
}
