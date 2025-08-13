import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/types/product";
import { Heart, ShoppingBag } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleHeart = () => {
    setIsHeartFilled((prev) => !prev);
  };

  return (
    <div
      className="bg-white rounded-none border  cursor-pointer hover:shadow-md transition-shadow text-gray-700 relative hover:scale-101 lg:hover:scale-102 hover:border-[#088F8F]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {product.price.discount && (
        <Badge className="absolute rounded-none md:px-1   px-0 text-xs lg:text-sm font-semibold py-2 top-4 -right-1 xl:-right-3 bg-[#088F8F] text-white">
          -{product.price.discount}%
        </Badge>
      )}

      <Link href="/details">
        <div className="aspect-square mb-4 relative">
          <Image
            src={product.image || "/assets/images/Freezer.png"}
            alt={`${product.name} ${product.model}`}
            fill
            className="object-contain"
          />
        </div>
      </Link>

      <div className="space-y-2">
        <div className="font-medium text-sm px-4">
          <p className="text-xs md:text-sm lg:text-base xl:text-lg">
            {product.name}
          </p>
          <p className="font-semibold text-xs lg:text-sm">{product.model}</p>
        </div>

        {/* Conditionally render price or icons based on hover */}
        {!isHovered ? (
          <div className="flex items-center space-x-2 px-4 py-2">
            <span className="text-sm md:text-lg lg:text-xl font-semibold text-[#088F8F]">
              GHS{product.price.current.toLocaleString()}
            </span>
            {product.price.original && (
              <span className="text-xs lg:stext-sm text-gray-500 font-semibold line-through">
                GHS{product.price.original.toLocaleString()}
              </span>
            )}
          </div>
        ) : (
          <div className="flex items-center space-x-7 py-3 md:py-4 bg-[#89cfcf]  rounded-none text-white justify-center">
            <div
              onClick={toggleHeart}
              className={`cursor-pointer  ${
                isHeartFilled ? "text-[#088F8F]" : "text-white"
              }`}
            >
              <Heart
                className=" w-7 h-7 md:w-8 md:h-8 hover:text-[#088F8F] transition-colors"
                strokeWidth={1.5}
              />
            </div>
            <div className="cursor-pointer ">
              <ShoppingBag
                className=" w-7 h-7 md:w-8 md:h-8 hover:text-[#088F8F] transition-colors"
                strokeWidth={1.5}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
