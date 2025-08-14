"use client";

import { Button } from "@/components/ui/button";
import { CircleX, Minus, Plus } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
  id: number;
  name: string;
  model: string;
  price: number;
  quantity: number;
  image: string;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

export function CartItem({
  id,
  name,
  model,
  price,
  quantity,
  image,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  const formatPrice = (price: number) => {
    return `GHS ${price.toLocaleString()}`;
  };

  return (
    <div className="bg-white rounded p-4 shadow-sm border">
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
        {/* Product Image */}
        <div className="w-full sm:w-20 sm:h-20 h-70 bg-gray-100 rounded flex items-center justify-center mb-4 sm:mb-0">
          <Image
            width={80}
            height={80}
            src={image || "/placeholder.svg"}
            alt={name}
            className="object-contain w-full h-full rounded"
          />
        </div>

        {/* Product Details & Quantity/Total */}
        <div className="flex-1 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Details */}
          <div className="flex-1">
            <h3 className="text-gray-700 font-semibold text-lg lg:text-lg mb-1">
              {name}
            </h3>
            <div className="text-gray-600 text-sm mb-1 font-semibold">
              {model}
            </div>
            <div className="text-gray-500 text-sm font-semibold">
              {formatPrice(price)}
            </div>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center justify-between sm:gap-6 lg:gap-10">
            <div className="flex items-center gap-2 justify-start sm:justify-center">
              <Button
                variant="outline"
                size="sm"
                className="w-8 h-8 p-0 bg-transparent cursor-pointer"
                onClick={() => onUpdateQuantity(id, quantity - 1)}
              >
                <Minus className="w-2 h-2" />
              </Button>
              <span className="w-8 text-center font-semibold text-xs">
                {quantity}
              </span>
              <Button
                variant="outline"
                size="sm"
                className="w-8 h-8 p-0 bg-transparent cursor-pointer"
                onClick={() => onUpdateQuantity(id, quantity + 1)}
              >
                <Plus className="w-3 h-3" />
              </Button>
            </div>

            {/* Item Total & Remove */}
            <div className="flex items-center justify-between text-right">
              <div className="text-[#088F8F] font-semibold text-sm sm:text-base">
                {formatPrice(price * quantity)}
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="w-8 h-8 p-0 text-gray-400 hover:text-red-500"
                onClick={() => onRemove(id)}
              >
                <CircleX className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
