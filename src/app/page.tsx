"use client";

import { useState, useMemo } from "react";
import { ProductToolbar } from "@/components/products/product-toolbar";
import { ProductGrid } from "@/components/products/product-grid";
import type { FilterState } from "@/types/product";
import { products } from "@/lib/data/data";
import Breadcrumb from "@/components/layout/main/breadcrum";
import { SidebarFilters } from "@/components/filters/siderbar";
import Paginator from "@/components/layout/main/pagination";

export default function HomePage() {
  const [filters, setFilters] = useState<FilterState>({
    priceMin: 125,
    priceMax: 843,
    manufacturers: [],
    heights: [],
    hasDisplay: null,
    colors: [],
    freezerTypes: [],
    volumes: [],
  });

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("popular");

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      // Price filter
      if (
        product.price < filters.priceMin ||
        product.price > filters.priceMax
      ) {
        return false;
      }

      // Manufacturer filter
      if (
        filters.manufacturers.length > 0 &&
        !filters.manufacturers.includes(product.manufacturer)
      ) {
        return false;
      }

      // Height filter
      if (filters.heights.length > 0) {
        const hasMatchingHeight = filters.heights.some((height) => {
          if (height === "100") return product.height <= 100;
          if (height === "110") return product.height <= 110;
          if (height === "120-170")
            return product.height >= 120 && product.height <= 170;
          if (height === "190") return product.height >= 190;
          return false;
        });
        if (!hasMatchingHeight) return false;
      }

      // Display filter
      if (
        filters.hasDisplay !== null &&
        product.hasDisplay !== filters.hasDisplay
      ) {
        return false;
      }

      // Color filter
      if (
        filters.colors.length > 0 &&
        !filters.colors.includes(product.color)
      ) {
        return false;
      }

      // Freezer type filter
      if (
        filters.freezerTypes.length > 0 &&
        !filters.freezerTypes.includes(product.freezerType)
      ) {
        return false;
      }

      return true;
    });

    // Sort products
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Keep original order for popularity
        break;
    }

    return filtered;
  }, [filters, sortBy]);

  return (
    <div className=" bg-white">
      <Breadcrumb />
      <div className=" mx-auto px-20 pt-2 py-6">
        <div className="flex gap-6">
          <SidebarFilters onFiltersChange={setFilters} />

          <div className="flex-1">
            <ProductToolbar
              totalProducts={filteredProducts.length}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />

            <div className="mt-6 ">
              <ProductGrid products={filteredProducts} />
              <Paginator />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
