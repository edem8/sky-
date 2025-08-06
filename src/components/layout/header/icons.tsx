import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Icons() {
  return (
    <div className="flex items-center space-x-3 xl:space-x-5">
      {/* Total and Money Amount */}
      <div className="flex flex-col text-left">
        <span className="text-xs text-gray-600">Total (GHS)</span>
        <span className="text-sm font-semibold text-[#088F8F]">0.00</span>
      </div>

      {/* Cart Icon with Number as Link */}
      <Link
        href="/cart"
        className="relative p-2 rounded-full hover:bg-gray-100 focus:outline-none"
      >
        <ShoppingCart
          className=" w-8 h-8 xl:w-9 xl:h-9 text-gray-600"
          strokeWidth={1.6}
        />
        <span className="absolute top-6 right-1 bg-[#088F8F] text-white font-semibold text-xs rounded-full w-5 h-5 flex items-center justify-center">
          0
        </span>
      </Link>

      {/* Wishlist Icon with Number as Link */}
      <Link
        href="/wishlist"
        className="relative p-2 rounded-full hover:bg-gray-100 focus:outline-none"
      >
        <Heart
          className=" w-8 h-8 xl:w-9 xl:h-9 text-gray-600"
          strokeWidth={1.6}
        />
        <span className="absolute top-6 right-1 bg-[#088F8F] text-white font-semibold text-xs rounded-full w-5 h-5 flex items-center justify-center">
          0
        </span>
      </Link>
    </div>
  );
}
