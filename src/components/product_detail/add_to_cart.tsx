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
    <div className="flex items-center  gap-4 flex-wrap">
      <QuantitySelector
        quantity={quantity}
        onQuantityChange={onQuantityChange}
      />

      <Button
        onClick={onAddToCart}
        className="bg-[#088F8F] hover:bg-[#088F8F] text-white px-4 py-7 cursor-pointer rounded-none"
      >
        Add to Cart
      </Button>

      <div className="flex items-center gap-1 ">
        <div
          onClick={onToggleWishlist}
          className={`p-1 lg:p-2 ${
            isInWishlist ? "text-[#088F8F]" : "text-[#088F8F]"
          } cursor-pointer`}
        >
          <Heart
            className={`lg:w-12 lg:h-12 cursor-pointer ${
              isInWishlist ? "fill-current" : ""
            }`}
            strokeWidth={1.2}
          />
        </div>
        <span className="text-xs pt-2 md:pt-1 font-medium lg:hidden">
          Add to Wishlist
        </span>
      </div>
    </div>
  );
}
