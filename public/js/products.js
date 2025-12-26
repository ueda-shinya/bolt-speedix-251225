export const products = [
  {
    id: '1',
    name: 'LP制作',
    slug: 'speedix-lp',
    description: '資料請求を目的としたLP',
    price: 50000,
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
    name: 'ホームページ制作',
    slug: 'speedix-hp',
    description: '4ページ固定＋お問い合わせフォーム',
    price: 160000,
    features: [
      'トップ／サービス紹介／会社情報・プロフィール／お問い合わせ',
      '事業の「顔」になるミニマムなHP'
    ],
    image_url: '/homepageimg.jpg',
    image_alt: '4ページ固定＋お問い合わせフォーム',
    is_active: true,
    display_order: 2
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
