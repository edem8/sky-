import type { Product, SpecificationSection } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Refrigerator Atlant",
    model: "MXM 4025-000",
    price: {
      current: 3250,
      original: 3824,
      discount: 15,
    },
    image:
      "/assets/images/Freezer.png?height=300&width=200&text=Black+Refrigerator",
    manufacturer: "Atlant",
    height: 170,
    hasDisplay: false,
    color: "Black",
    freezerType: "Bottom Freezer",
    volume: 300,
    inStock: true,
    category: "appliance",
    rating: 4,
    reviewCount: 12,
  },
  {
    id: "2",
    name: "Refrigerator Atlant",
    model: "MXM 4025-000",
    price: {
      current: 3250,
      original: 3824,
      discount: 15,
    },

    image:
      "/assets/images/Freezer.png?height=300&width=200&text=White+Refrigerator",
    manufacturer: "Atlant",
    height: 170,
    hasDisplay: false,
    color: "White",
    freezerType: "Bottom Freezer",
    volume: 300,
    inStock: true,
    category: "appliance",
    rating: 4,
    reviewCount: 12,
  },
  {
    id: "3",
    name: "Refrigerator Atlant",
    model: "MXM 4025-000",
    price: {
      current: 3250,
      original: 3824,
      discount: 15,
    },

    image:
      "/assets/images/Freezer.png?height=300&width=200&text=Silver+Refrigerator",
    manufacturer: "Atlant",
    height: 170,
    hasDisplay: true,
    color: "Silver",
    freezerType: "Bottom Freezer",
    volume: 300,
    inStock: true,
    category: "appliance",
    rating: 4,
    reviewCount: 12,
  },
  {
    id: "4",
    name: "Refrigerator Samsung",
    model: "RF23M8070SR",
    price: {
      current: 4200,
      original: 4950,
      discount: 15,
    },

    image:
      "/assets/images/Freezer.png?height=300&width=200&text=Samsung+Refrigerator",
    manufacturer: "Samsung",
    height: 190,
    hasDisplay: true,
    color: "Stainless Steel",
    freezerType: "Top Freezer",
    volume: 350,
    inStock: true,
    category: "appliance",
    rating: 4,
    reviewCount: 12,
  },
  {
    id: "5",
    name: "Refrigerator LG",
    model: "LMXS30776S",
    price: {
      current: 2800,
      original: 3300,
      discount: 15,
    },

    image:
      "/assets/images/Freezer.png?height=300&width=200&text=LG+Refrigerator",
    manufacturer: "LG",
    height: 190,
    hasDisplay: true,
    color: "White",
    freezerType: "Side-by-side",
    volume: 400,
    inStock: true,
    category: "appliance",
    rating: 4,
    reviewCount: 12,
  },
  {
    id: "6",
    name: "Refrigerator LG",
    model: "LMXS30776S",
    price: {
      current: 2800,
      original: 3300,
      discount: 15,
    },

    image:
      "/assets/images/Freezer.png?height=300&width=200&text=LG+Refrigerator",
    manufacturer: "LG",
    height: 190,
    hasDisplay: true,
    color: "White",
    freezerType: "Side-by-side",
    volume: 400,
    inStock: true,
    category: "appliance",
    rating: 4,
    reviewCount: 12,
  },

  {
    id: "7",
    name: "Refrigerator LG",
    model: "LMXS30776S",
    price: {
      current: 2800,
      original: 3300,
      discount: 15,
    },

    image:
      "/assets/images/Freezer.png?height=300&width=200&text=LG+Refrigerator",
    manufacturer: "LG",
    height: 190,
    hasDisplay: true,
    color: "White",
    freezerType: "Side-by-side",
    volume: 400,
    inStock: true,
    category: "appliance",
    rating: 4,
    reviewCount: 12,
  },

  {
    id: "8",
    name: "Refrigerator LG",
    model: "LMXS30776S",
    price: {
      current: 2800,
      original: 3300,
      discount: 15,
    },

    image:
      "/assets/images/Freezer.png?height=300&width=200&text=LG+Refrigerator",
    manufacturer: "LG",
    height: 190,
    hasDisplay: true,
    color: "White",
    freezerType: "Side-by-side",
    volume: 400,
    inStock: true,
    category: "appliance",
    rating: 4,
    reviewCount: 12,
  },
  {
    id: "9",
    name: "Refrigerator Bosch",
    model: "B36CL80ENS",
    price: {
      current: 3800,
      original: 4470,
      discount: 15,
    },

    image:
      "/assets/images/Freezer.png?height=300&width=200&text=Bosch+Refrigerator",
    manufacturer: "Bosch",
    height: 120,
    hasDisplay: false,
    color: "Silver",
    freezerType: "Bottom Freezer",
    volume: 250,
    inStock: true,
    category: "appliance",
    rating: 4,
    reviewCount: 12,
  },
];

export const specifications: SpecificationSection[] = [
  {
    title: "Basic Characteristics",
    items: [
      { label: "Brand", value: "Atlant / Belarus" },
      { label: "Color", value: "Silver X7" },
      { label: "Dimensions", value: "H x W x D: 176 x 54 x 60 cm" },
    ],
  },
  {
    title: "General Characteristics",
    items: [
      { label: "Color / Coating Material", value: "Silver X7" },
      { label: "Energy Consumption", value: "Class A+" },
      { label: "Control Type", value: "Electronic with Display" },
      { label: "Weight", value: "57 kg" },
      { label: "Annual Energy Consumption", value: "60000 Wh/year" },
      { label: "Defrost Power", value: "Yes" },
      { label: "Number of Doors", value: "2" },
      { label: "Number of Compartments", value: "2" },
      { label: "Number of Compressors", value: "1" },
      { label: "Energy Class", value: "Class A+" },
      { label: "Smartphone Control", value: "Available" },
    ],
  },
  {
    title: "Cooling",
    items: [
      {
        label: "Extra Features",
        value: "Super freeze, Temp indication",
      },
      { label: "Freezing Capacity", value: "up to 3.5 kg/day" },
      { label: "Refrigerator Defrost", value: "No Frost" },
      { label: "Freezer Defrost", value: "No Frost" },
      { label: "Fresh Zone", value: "Available" },
    ],
  },
  {
    title: "Safety",
    items: [{ label: "Child Lock", value: "Available" }],
  },
  {
    title: "Other Functions and Features",
    items: [
      { label: "Display", value: "Available" },
      { label: "LED Lighting", value: "LED" },
      { label: "Climate Class", value: "SN, ST" },
      { label: "Shelf Material", value: "Glass" },
      { label: "Reversible Door", value: "Available" },
    ],
  },
];
export const manufacturers = ["Atlant", "Samsung", "LG", "Bosch", "Whirlpool"];
export const colors = ["White", "Black", "Silver", "Stainless Steel"];
export const freezerTypes = ["Top Freezer", "Bottom Freezer", "Side-by-side"];
