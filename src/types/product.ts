export interface Product {
  id: string;
  name: string;
  model: string;
  price: {
    current: number;
    original: number;
    discount: number;
  };
  image: string;
  manufacturer: string;
  height: number;
  hasDisplay: boolean;
  color: string;
  freezerType: string;
  volume: number;
  inStock: boolean;
  reviewCount: number;
  rating: number;
  category: "appliance" | "electronics";
}

export interface FilterState {
  priceMin: number;
  priceMax: number;
  manufacturers: string[];
  heights: string[];
  hasDisplay: boolean | null;
  colors: string[];
  freezerTypes: string[];
  volumes: string[];
  categories: ("appliance" | "electronics")[];
}

export interface ProductDetail {
  id: string;
  name: string;
  model: string;
}

export interface Color {
  name: string;
  class: string;
}

export interface SpecificationSection {
  title: string;
  items: SpecificationItem[];
}

export interface SpecificationItem {
  label: string;
  value: string;
}
