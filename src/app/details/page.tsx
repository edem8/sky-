"use client";

import { ProductImage } from "@/components/product_detail/product-image";
import { ProductInfo } from "@/components/product_detail/product-info";
import { SpecificationsList } from "@/components/product_detail/specifications-list";
import { products, specifications } from "@/lib/data/data";

export default function DetailPage() {
  const productData = products[0];
  return (
    <div className="max-w-7xl mx-auto p-6 min-h-screen">
      <div className=" rounded-none p-6 mb-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-8 ">
          <ProductImage
            src={productData.image}
            alt={`${productData.name} ${productData.model}`}
          />

          <ProductInfo product={productData} />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <SpecificationsList sections={specifications} />
      </div>
    </div>
  );
}
