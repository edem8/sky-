"use client";

import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { QuantitySelector } from "./quantity-selector";

interface AddToCartSectionProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: () => void;
  onToggleWishlist: () => void;
  isInWishlist?: boolean;
  wishlistCount?: number;
}

export function AddToCartSection({
  quantity,
  onQuantityChange,
  onAddToCart,
  onToggleWishlist,
  isInWishlist = false,
  wishlistCount = 0,
}: AddToCartSectionProps) {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <QuantitySelector
        quantity={quantity}
        onQuantityChange={onQuantityChange}
      />

      <Button
        onClick={onAddToCart}
        className="bg-[#088F8F] hover:bg-[#088F8F] text-white px-6 py-7 rounded-none"
      >
        Add to Cart
      </Button>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="lg"
          onClick={onToggleWishlist}
          className={`p-2 ${isInWishlist ? "text-red-500" : "text-gray-500"}`}
        >
          <Heart className={`w-20 h-20 ${isInWishlist ? "fill-current" : ""}`} />
        </Button>
        {wishlistCount > 0 && (
          <span className="text-sm text-gray-500">{wishlistCount}</span>
        )}
      </div>
    </div>
  );
}
