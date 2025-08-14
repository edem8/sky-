"use client";

import { Button } from "@/components/ui/button";
import { CircleX, Minus, Plus } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

export function CartItem({
  id,
  name,
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
    <div className="bg-white rounded p-6 shadow-sm border">
      <div className="flex items-center gap-4">
        {/* Product Image */}
        <div className="w-20 h-20 bg-gray-100 rounded flex-shrink-0">
          <Image
            width={20}
            height={20}
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-contain rounded"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h3 className="text-gray-700 font-semibold mb-2">{name}</h3>
          <div className="text-gray-600 text-xs font-medium">
            {formatPrice(price)}
          </div>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="w-8 h-8 p-0 bg-transparent cursor-pointer"
            onClick={() => onUpdateQuantity(id, quantity - 1)}
          >
            <Minus className="w-3 h-3" />
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

        {/* Item Total */}
        <div className="text-[#088F8F] font-semibold min-w-[100px] text-right">
          {formatPrice(price * quantity)}
        </div>

        {/* Remove Button */}
        <Button
          variant="ghost"
          size="sm"
          className="w-8 h-8 p-0 text-gray-400 cursor-pointer hover:text-red-500"
          onClick={() => onRemove(id)}
        >
          <CircleX className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
