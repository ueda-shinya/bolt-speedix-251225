export const products = [
  {
    id: '1',
    name: 'LP（資料請求）',
    slug: 'lp-creation',
    description: '資料請求を目的としたLP',
    price: 88000,
    features: [
      'BtoBサービスの概要資料・提案資料の配布',
      'システム・ツール導入の検討資料',
      '講座・研修・プログラムの概要資料',
      '社内稟議用に「上長・決裁者に渡してほしいPDF」を配りたいケース'
    ],
    image_url: '/LPimage.jpg',
    image_alt: '資料請求を目的としたLP',
    is_active: true,
    display_order: 1
  },
    {
    id: '2',
    name: 'LP（お問い合わせ）',
    slug: 'lp-contact',
    description: 'お問い合わせを目的としたLP',
    price: 88000,
    features: [
      '初回相談・個別カウンセリングの申し込み窓口',
      'サービス内容に関する質問・相談の受付',
      '継続メニューや高単価サービスの事前相談'
    ],
    image_url: '/contactformimg.jpg',
    image_alt: 'お問い合わせを目的としたLP',
    is_active: true,
    display_order: 2
  },
    {
    id: '3',
    name: 'LP（日程予約）',
    slug: 'lp-booking',
    description: '日程予約を目的としたLP',
    price: 88000,
    features: [
      '体験レッスン・体験授業・見学の予約',
      '体験施術・お試しコースの予約',
      '初回コンサル／診断セッションの日時確定',
      '個別面談・面接・カウンセリングの予約'
    ],
    image_url: '/reservation.jpg',
    image_alt: '日程予約を目的としたLP',
    is_active: true,
    display_order: 3
  },
  {
    id: '4',
    name: 'ホームページ制作',
    slug: 'homepage-production',
    description: '4ページ固定＋お問い合わせフォーム',
    price: 88000,
    features: [
      'トップ／サービス紹介／会社情報・プロフィール／お問い合わせ',
      '事業の「顔」になるミニマムなHP'
    ],
    image_url: '/homepageimg.jpg',
    image_alt: '4ページ固定＋お問い合わせフォーム',
    is_active: true,
    display_order: 4
  }
];

export function getActiveProducts() {
  return products
    .filter(product => product.is_active)
    .sort((a, b) => a.display_order - b.display_order);
}

export function getProductBySlug(slug) {
  return products.find(product => product.slug === slug && product.is_active);
}
