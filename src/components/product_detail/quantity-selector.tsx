"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

export function QuantitySelector({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99,
}: QuantitySelectorProps) {
  const handleDecrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className="flex items-center border bg-red-300 rounded-none">
      <Button
        variant="ghost"
        size="sm"
        onClick={handleDecrease}
        disabled={quantity <= min}
        className="h-10 w-10 p-0 py-7 rounded-r-none cursor-pointer"
      >
        <Minus className="w-4 h-4" />
      </Button>
      <div className="px-4 py-2 min-w-[60px] text-center text-xs font-semibold border-x">
        {quantity}
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleIncrease}
        disabled={quantity >= max}
        className="h-10 w-10 p-0 py-7 rounded-l-none cursor-pointer"
      >
        <Plus className="w-4 h-4" />
      </Button>
    </div>
  );
}
