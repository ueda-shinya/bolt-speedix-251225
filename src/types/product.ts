export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  features: string[];
  image_url?: string;
  image_alt?: string;
  is_active: boolean;
  display_order: number;
}
