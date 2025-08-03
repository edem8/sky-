"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PriceFilter } from "./price-filter";
import type { FilterState } from "@/types/product";
import { manufacturers, colors, freezerTypes } from "@/lib/data/data";
import CheckboxFilter from "./check-box-filter";

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

  const updateFilters = (newFilters: Partial<FilterState>) => {
    const updated = { ...filters, ...newFilters };
    setFilters(updated);
    onFiltersChange(updated);
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
    <div className="w-90 bg-[#F8F8F8] p-4 space-y-6">
      <PriceFilter
        min={1000}
        max={5000}
        onPriceChange={(min, max) =>
          updateFilters({ priceMin: min, priceMax: max })
        }
      />

      <CheckboxFilter
        title="Manufacturer"
        options={manufacturers.map((m) => ({ value: m, label: m }))}
        selectedValues={filters.manufacturers}
        onSelectionChange={(values) => updateFilters({ manufacturers: values })}
      />

      <CheckboxFilter
        title="Height"
        options={heightOptions}
        selectedValues={filters.heights}
        onSelectionChange={(values) => updateFilters({ heights: values })}
      />

      <div className="text-center">
        <Button variant="link" className="text-blue-600 text-sm">
          Show 7 more options
        </Button>
      </div>

      <CheckboxFilter
        title="Display"
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

      <CheckboxFilter
        title="Color"
        options={colors.map((c) => ({ value: c, label: c }))}
        selectedValues={filters.colors}
        onSelectionChange={(values) => updateFilters({ colors: values })}
      />

      <CheckboxFilter
        title="Freezer Type"
        options={freezerTypes.map((f) => ({ value: f, label: f }))}
        selectedValues={filters.freezerTypes}
        onSelectionChange={(values) => updateFilters({ freezerTypes: values })}
      />

      <CheckboxFilter
        title="Refrigerator Type"
        options={[
          { value: "standard", label: "Standard" },
          { value: "mini", label: "Mini" },
          { value: "side-by-side", label: "Side-by-side" },
        ]}
        selectedValues={[]}
        onSelectionChange={() => {}}
      />

      <CheckboxFilter
        title="Refrigerator Volume"
        options={[
          { value: "200-300", label: "7-11 cu ft" },
          { value: "300-400", label: "11-14 cu ft" },
          { value: "400+", label: "14+ cu ft" },
        ]}
        selectedValues={filters.volumes}
        onSelectionChange={(values) => updateFilters({ volumes: values })}
      />
    </div>
  );
}
