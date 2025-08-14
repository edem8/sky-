"use client";

import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";

interface AddToCartSectionProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: () => void;
  onToggleWishlist: () => void;
  isInWishlist?: boolean;
  wishlistCount?: number;
}

export function AddToCartSection({
  onAddToCart,
  onToggleWishlist,
  isInWishlist = false,
}: AddToCartSectionProps) {
  return (
    <div className="flex items-center gap-2   lg:gap-3 flex-wrap">
      <Button
      variant={"outline"}
        onClick={onAddToCart}
        className="text-[#088F8F] hover:bg-[#088F8F] hover:text-white px-2   sm:px-4 py-6 border-2 cursor-pointer hidden lg:flex rounded-none"
      >
        Add to Cart
      </Button>
      <div className="flex  items-center gap-1 lg:hidden">
        <div
          onClick={onAddToCart}
          className={`p-1 lg:p-2 text-[#088F8F] cursor-pointer`}
        >
          <ShoppingBag
            className={`w-8 h-8 md:w-9 md:h-9 cursor-pointer ${
              isInWishlist ? "fill-current" : ""
            }`}
            strokeWidth={1.2}
          />
        </div>
      </div>

      <div className="flex  items-center gap-1 ">
        <div
          onClick={onToggleWishlist}
          className={`p-1 lg:p-2 ${
            isInWishlist ? "text-[#088F8F]" : "text-[#088F8F]"
          } cursor-pointer`}
        >
          <Heart
            className={`w-8 h-8 md:w-9 md:h-9 cursor-pointer ${
              isInWishlist ? "fill-current" : ""
            }`}
            strokeWidth={1.2}
          />
        </div>
      </div>
    </div>
  );
}
