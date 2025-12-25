import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'LP制作',
    slug: 'lp-creation',
    description: '集客・売上アップを実現する高品質ランディングページを制作。最短5営業日で納品。マーケティング視点を取り入れた戦略的なデザインで、コンバージョン率の向上を目指します。',
    price: 80000,
    features: [
      '最短5営業日で納品',
      '集客に特化した戦略的デザイン',
      'レスポンシブ対応',
      'SEO基本設定込み',
      '修正2回まで無料'
    ],
    image_url: '/LPimage.jpg',
    image_alt: 'LP制作サービス',
    is_active: true,
    display_order: 1
  },
  {
    id: '2',
    name: 'ホームページ制作',
    slug: 'homepage-production',
    description: '企業の顔となるコーポレートサイトを制作。ブランドイメージを反映した高品質なデザインと、使いやすさを両立させます。',
    price: 150000,
    features: [
      '最短10営業日で納品',
      'オリジナルデザイン',
      'レスポンシブ対応',
      'CMS導入可能',
      '修正3回まで無料'
    ],
    image_url: '/homepageimg.jpg',
    image_alt: 'ホームページ制作サービス',
    is_active: true,
    display_order: 2
  },
  {
    id: '3',
    name: 'お問い合わせフォーム追加',
    slug: 'contact-form',
    description: '既存サイトに問い合わせフォームを追加し、顧客対応を効率化。スパム対策や自動返信メール機能も標準装備。',
    price: 30000,
    features: [
      '既存サイトへの組み込み',
      '自動返信メール設定',
      '管理画面での問い合わせ確認',
      'スパム対策実装',
      '最短3営業日で納品'
    ],
    image_url: '/contactformimg.jpg',
    image_alt: 'お問い合わせフォーム追加サービス',
    is_active: true,
    display_order: 3
  },
  {
    id: '4',
    name: '予約フォーム追加',
    slug: 'booking-form',
    description: 'サロン・クリニック・店舗に最適な予約フォームを導入。カレンダー式でわかりやすく、予約管理も簡単。',
    price: 30000,
    features: [
      'カレンダー式予約システム',
      '自動確認メール送信',
      '予約管理画面付き',
      'キャンセル機能',
      '最短3営業日で納品'
    ],
    image_url: '/reservation.jpg',
    image_alt: '予約フォーム追加サービス',
    is_active: true,
    display_order: 4
  },
  {
    id: '5',
    name: '商品購入ページ埋め込み',
    slug: 'purchase-page',
    description: '商品販売用ページを既存サイトに埋め込み、オンライン販売を即スタート。決済システムと在庫管理機能付き。',
    price: 30000,
    features: [
      '決済システム統合',
      '商品カート機能',
      '在庫管理機能',
      '購入履歴確認',
      '最短3営業日で納品'
    ],
    image_url: '/ecpage.jpg',
    image_alt: '商品購入ページ埋め込みサービス',
    is_active: true,
    display_order: 5
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug && product.is_active);
}

export function getActiveProducts(): Product[] {
  return products
    .filter(product => product.is_active)
    .sort((a, b) => a.display_order - b.display_order);
}
