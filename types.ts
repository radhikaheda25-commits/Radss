
export type Fabric = 'Satin' | 'Silk' | 'Velvet';
export type Color = 'Blush' | 'Lavender' | 'Cream' | 'Sage' | 'Dusty Rose' | 'Champagne' | 'Midnight';

export interface Product {
  id: string;
  name: string;
  price: number;
  fabric: Fabric;
  color: Color;
  image: string;
  description: string;
  isBestSeller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}
