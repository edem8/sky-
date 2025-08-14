"use client";

import { Product } from "@/types/product";
import { useState } from "react";
import { ProductRating } from "./product-ratings";
import { PriceDisplay } from "./price-display";
import { AddToCartSection } from "./add_to_cart";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleAddToCart = () => {
    console.log("Adding to cart:", {
      product: product.id,
      quantity,
      color: product.color,
    });
  };

  const handleToggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
  };

  return (
    <div className="space-y-5 sm:space-y-6 flex  flex-col     ">
      <div>
        <h1 className="text-2xl  lg:text-xl font-bold text-gray-800 mb-3">
          {product.name}
          <br />
          <span className=" text-xl  lg:text-lg text-gray-700">
            {product.model}
          </span>
        </h1>

        <ProductRating
          rating={product.rating}
          reviewCount={product.reviewCount}
        />
      </div>

      <AddToCartSection
        quantity={quantity}
        onQuantityChange={setQuantity}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isInWishlist={isInWishlist}
        wishlistCount={4}
      />

      <PriceDisplay
        currentPrice={product.price.current}
        originalPrice={product.price.original}
        discount={product.price.discount}
      />
    </div>
  );
}
