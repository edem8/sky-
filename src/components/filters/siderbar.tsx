"use client";

import { useState } from "react";
import { PriceFilter } from "./price-filter";
import type { FilterState } from "@/types/product";
import { manufacturers, colors, freezerTypes } from "@/lib/data/data";
import CheckboxFilter from "./check-box-filter";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SidebarFiltersProps {
  onFiltersChange: (filters: FilterState) => void;
}

export function SidebarFilters({ onFiltersChange }: SidebarFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    priceMin: 1000,
    priceMax: 5000,
    manufacturers: [],
    heights: ["120-170"],
    hasDisplay: null,
    colors: [],
    freezerTypes: [],
    volumes: [],
  });

  const [expandedFilters, setExpandedFilters] = useState<{
    [key: string]: boolean;
  }>({
    manufacturers: true,
    heights: true,
    hasDisplay: true,
    colors: true,
    freezerTypes: true,
    volumes: true,
    price: true, // Added price filter state
  });

  const updateFilters = (newFilters: Partial<FilterState>) => {
    const updated = { ...filters, ...newFilters };
    setFilters(updated);
    onFiltersChange(updated);
  };

  const toggleFilter = (filter: string) => {
    setExpandedFilters((prevState) => ({
      ...prevState,
      [filter]: !prevState[filter],
    }));
  };

  const heightOptions = [
    { value: "100", label: "39 in (5)", count: 5 },
    { value: "110", label: "43 in (7)", count: 7 },
    { value: "120-170", label: "47 - 67 in (14)", count: 14 },
    { value: "190", label: "75 in (10)", count: 10 },
  ];

  const displayOptions = [
    { value: "no", label: "No (60)", count: 60 },
    { value: "yes", label: "Yes (84)", count: 84 },
  ];

  return (
    <div className="w-90 bg-gray-50 p-4 space-y-6">
      {/* Price Filter */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleFilter("price")}
        >
          <span className="text-sm font-semibold text-gray-700">Price</span>
          {expandedFilters.price ? (
            <ChevronUp className="text-gray-700 w-4 h-4" />
          ) : (
            <ChevronDown className="text-gray-700 w-4 h-4" />
          )}
        </div>
        {expandedFilters.price && (
          <PriceFilter
            min={1000}
            max={5000}
            onPriceChange={(min, max) =>
              updateFilters({ priceMin: min, priceMax: max })
            }
          />
        )}
      </div>

      {/* Manufacturer Filter */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleFilter("manufacturers")}
        >
          <span className="text-sm font-semibold text-gray-700">
            Manufacturer
          </span>
          {expandedFilters.manufacturers ? (
            <ChevronUp className="text-gray-700 w-4 h-4" />
          ) : (
            <ChevronDown className="text-gray-700 w-4 h-4" />
          )}
        </div>
        {expandedFilters.manufacturers && (
          <CheckboxFilter
            title=""
            options={manufacturers.map((m) => ({ value: m, label: m }))}
            selectedValues={filters.manufacturers}
            onSelectionChange={(values) =>
              updateFilters({ manufacturers: values })
            }
          />
        )}
      </div>

      {/* Height Filter */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleFilter("heights")}
        >
          <span className="text-sm font-semibold text-gray-700">Height</span>
          {expandedFilters.heights ? (
            <ChevronUp className="text-gray-700 w-4 h-4" />
          ) : (
            <ChevronDown className="text-gray-700 w-4 h-4" />
          )}
        </div>
        {expandedFilters.heights && (
          <CheckboxFilter
            title=""
            options={heightOptions}
            selectedValues={filters.heights}
            onSelectionChange={(values) => updateFilters({ heights: values })}
          />
        )}
      </div>

      {/* Display Filter */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleFilter("hasDisplay")}
        >
          <span className="text-sm font-semibold text-gray-700">Display</span>
          {expandedFilters.hasDisplay ? (
            <ChevronUp className="text-gray-700 w-4 h-4" />
          ) : (
            <ChevronDown className="text-gray-700 w-4 h-4" />
          )}
        </div>
        {expandedFilters.hasDisplay && (
          <CheckboxFilter
            title=""
            options={displayOptions}
            selectedValues={
              filters.hasDisplay === true
                ? ["yes"]
                : filters.hasDisplay === false
                ? ["no"]
                : []
            }
            onSelectionChange={(values) => {
              const hasDisplay = values.includes("yes")
                ? true
                : values.includes("no")
                ? false
                : null;
              updateFilters({ hasDisplay });
            }}
          />
        )}
      </div>

      {/* Color Filter */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleFilter("colors")}
        >
          <span className="text-sm font-semibold text-gray-700">Color</span>
          {expandedFilters.colors ? (
            <ChevronUp className="text-gray-700 w-4 h-4" />
          ) : (
            <ChevronDown className="text-gray-700 w-4 h-4" />
          )}
        </div>
        {expandedFilters.colors && (
          <CheckboxFilter
            title=""
            options={colors.map((c) => ({ value: c, label: c }))}
            selectedValues={filters.colors}
            onSelectionChange={(values) => updateFilters({ colors: values })}
          />
        )}
      </div>

      {/* Freezer Type Filter */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleFilter("freezerTypes")}
        >
          <span className="text-sm font-semibold text-gray-700">
            Freezer Type
          </span>
          {expandedFilters.freezerTypes ? (
            <ChevronUp className="text-gray-700 w-4 h-4" />
          ) : (
            <ChevronDown className="text-gray-700 w-4 h-4" />
          )}
        </div>
        {expandedFilters.freezerTypes && (
          <CheckboxFilter
            title=""
            options={freezerTypes.map((f) => ({ value: f, label: f }))}
            selectedValues={filters.freezerTypes}
            onSelectionChange={(values) =>
              updateFilters({ freezerTypes: values })
            }
          />
        )}
      </div>

      {/* Volume Filter */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleFilter("volumes")}
        >
          <span className="text-sm font-semibold text-gray-700">
            Refrigerator Volume
          </span>
          {expandedFilters.volumes ? (
            <ChevronUp className="text-gray-700 w-4 h-4" />
          ) : (
            <ChevronDown className="text-gray-700 w-4 h-4" />
          )}
        </div>
        {expandedFilters.volumes && (
          <CheckboxFilter
            title=" "
            options={[
              { value: "200-300", label: "7-11 cu ft" },
              { value: "300-400", label: "11-14 cu ft" },
              { value: "400+", label: "14+ cu ft" },
            ]}
            selectedValues={filters.volumes}
            onSelectionChange={(values) => updateFilters({ volumes: values })}
          />
        )}
      </div>
    </div>
  );
}
