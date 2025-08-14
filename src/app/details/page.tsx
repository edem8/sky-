"use client";

import { ProductImage } from "@/components/product_detail/product-image";
import { ProductInfo } from "@/components/product_detail/product-info";
import { SpecificationsList } from "@/components/product_detail/specifications-list";
import { products, specifications } from "@/lib/data/data";

export default function DetailPage() {
  const productData = products[0];
  return (
    <div className="max-w-7xl mx-auto sm:p-6   min-h-screen overflow-hidden">
      <div className=" rounded-none sm:p-6  ">
        <div className="flex flex-col gap-12 md:gap-0 md:flex-row items-center justify-center lg:gap-8  ">
          <ProductImage
            src={productData.image}
            alt={`${productData.name} ${productData.model}`}
          />

          <ProductInfo product={productData} />
        </div>
      </div>

      <div className="bg-white rounded-none shadow-none ">
        <SpecificationsList sections={specifications} />
      </div>
    </div>
  );
}
