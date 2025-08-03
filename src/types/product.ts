export interface Product {
  id: string;
  name: string;
  model: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  manufacturer: string;
  height: number;
  hasDisplay: boolean;
  color: string;
  freezerType: string;
  volume: number;
  inStock: boolean;
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
}
