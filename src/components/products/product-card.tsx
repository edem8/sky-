import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/types/product";
import { Heart, ShoppingBag } from "lucide-react";

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
      {product.discount && (
        <Badge className="absolute rounded-none px-1 lg:px-3  text-xs lg:text-sm font-semibold py-2 top-4 -right-3 bg-[#088F8F] text-white">
          -{product.discount}%
        </Badge>
      )}

      <div className="aspect-square mb-4 relative">
        <Image
          src={product.image || "/assets/images/Freezer.png"}
          alt={`${product.name} ${product.model}`}
          fill
          className="object-contain"
        />
      </div>

      <div className="space-y-2">
        <div className="font-medium text-sm px-4">
          <p className="text-sm lg:text-base xl:text-lg">{product.name}</p>
          <p className="font-semibold text-xs lg:text-sm">{product.model}</p>
        </div>

        {/* Conditionally render price or icons based on hover */}
        {!isHovered ? (
          <div className="flex items-center space-x-2 px-4 py-2">
            <span className="text-lg lg:text-xl font-semibold text-[#088F8F]">
              GHS{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-xs lg:stext-sm text-gray-500 font-semibold line-through">
                GHS{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        ) : (
          <div className="flex items-center space-x-7 py-4 bg-[#89cfcf]  rounded-none text-white justify-center">
            <div
              onClick={toggleHeart}
              className={`cursor-pointer  ${
                isHeartFilled ? "text-[#088F8F]" : "text-white"
              }`}
            >
              <Heart
                className="w-8 h-8 hover:text-[#088F8F] transition-colors"
                strokeWidth={1.5}
              />
            </div>
            <div className="cursor-pointer ">
              <ShoppingBag
                className="w-8 h-8 hover:text-[#088F8F] transition-colors"
                strokeWidth={1.5}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
