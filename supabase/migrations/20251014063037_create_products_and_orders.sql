/*
  # Speedix Products and Orders Schema

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name` (text) - 商品名
      - `slug` (text, unique) - URL用のスラッグ
      - `description` (text) - 商品説明
      - `price` (integer) - 価格（円）
      - `features` (jsonb) - 特徴・メリット（配列）
      - `image_url` (text) - 商品画像URL
      - `is_active` (boolean) - 販売中かどうか
      - `display_order` (integer) - 表示順
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `orders`
      - `id` (uuid, primary key)
      - `product_id` (uuid, foreign key)
      - `customer_name` (text) - 購入者名
      - `customer_email` (text) - 購入者メール
      - `customer_phone` (text) - 電話番号
      - `company_name` (text) - 会社名（任意）
      - `amount` (integer) - 支払額
      - `payment_method` (text) - 支払方法
      - `komoju_payment_id` (text, unique) - KOMOJU決済ID
      - `status` (text) - ステータス（pending, completed, failed）
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Products: Public read access for active products
    - Orders: Users can only read their own orders (by email)
    - Admin operations require service role

  3. Initial Data
    - Insert 4 products for Speedix services
*/

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  price integer NOT NULL,
  features jsonb DEFAULT '[]'::jsonb,
  image_url text,
  is_active boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid REFERENCES products(id) ON DELETE RESTRICT,
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text,
  company_name text,
  amount integer NOT NULL,
  payment_method text,
  komoju_payment_id text UNIQUE,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Products policies: Anyone can read active products
CREATE POLICY "Anyone can view active products"
  ON products
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Orders policies: Users can view their own orders by email
CREATE POLICY "Users can view own orders"
  ON orders
  FOR SELECT
  TO anon, authenticated
  USING (customer_email = current_setting('request.jwt.claims', true)::json->>'email');

-- Insert initial products
INSERT INTO products (name, slug, description, price, features, display_order, is_active)
VALUES
  (
    'LP制作',
    'lp-creation',
    '集客・売上アップを実現する高品質ランディングページを制作。最短5営業日で納品。',
    80000,
    '["最短5営業日で納品", "集客に特化した戦略的デザイン", "レスポンシブ対応", "SEO基本設定込み", "修正2回まで無料"]'::jsonb,
    1,
    true
  ),
  (
    'お問い合わせフォーム追加',
    'contact-form',
    '既存サイトに問い合わせフォームを追加し、顧客対応を効率化。',
    30000,
    '["既存サイトへの組み込み", "自動返信メール設定", "管理画面での問い合わせ確認", "スパム対策実装", "最短3営業日で納品"]'::jsonb,
    2,
    true
  ),
  (
    '予約フォーム追加',
    'booking-form',
    'サロン・クリニック・店舗に最適な予約フォームを導入。',
    30000,
    '["カレンダー式予約システム", "自動確認メール送信", "予約管理画面付き", "キャンセル機能", "最短3営業日で納品"]'::jsonb,
    3,
    true
  ),
  (
    '商品購入ページ埋め込み',
    'purchase-page',
    '商品販売用ページを既存サイトに埋め込み、オンライン販売を即スタート。',
    30000,
    '["決済システム統合", "商品カート機能", "在庫管理機能", "購入履歴確認", "最短3営業日で納品"]'::jsonb,
    4,
    true
  )
ON CONFLICT (slug) DO NOTHING;

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_products_active ON products(is_active, display_order);
CREATE INDEX IF NOT EXISTS idx_orders_email ON orders(customer_email);
CREATE INDEX IF NOT EXISTS idx_orders_komoju ON orders(komoju_payment_id);