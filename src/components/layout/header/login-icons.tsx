import { Heart, ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function LoginIcons() {
  return (
    <div className="flex items-center space-x-0.5  lg:space-x-2 xl:space-x-2">
      {/* Cart Icon with Number as Link */}
      <Link
        href="/cart"
        className="relative p-2 rounded-full hover:bg-gray-200 hover:text-gray-600  focus:outline-none"
      >
        <ShoppingBag
          className=" w-6 h-6 lg:w-8 lg:h-8 hover:text-gray-600  text-white"
          strokeWidth={1.4}
        />
        <span className="absolute top-4 right-0 lg:top-6 bg-white text-[#088F8F] font-semibold text-xs rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center">
          0
        </span>
      </Link>

      {/* Wishlist Icon with Number as Link */}
      <Link
        href="/wishlist"
        className="relative p-2 rounded-full hover:bg-gray-200 hover:text-gray-600  focus:outline-none"
      >
        <Heart
          className=" w-6 h-6 lg:w-8 lg:h-8 hover:text-gray-600  text-white "
          strokeWidth={1.4}
        />
        <span className="absolute top-4 right-0 lg:top-6 bg-white text-[#088F8F] font-semibold text-xs rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center">
          0
        </span>
      </Link>
    </div>
  );
}
