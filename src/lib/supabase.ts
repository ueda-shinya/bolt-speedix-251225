import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

export interface Order {
  id: string;
  product_id: string;
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  company_name?: string;
  amount: number;
  payment_method?: string;
  komoju_payment_id?: string;
  status: string;
  created_at: string;
}
