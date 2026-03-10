
export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  year: string;
  institution?: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  category: string;
  description: string;
  specs: string[];
  sizes: string[];
}

export interface Artwork {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
  excerpt?: string;
  content?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
