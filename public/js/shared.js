import { cart } from './cart.js';

const headerHTML = `
<header class="sticky top-0 z-50 bg-white border-b border-gray-200">
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
    <a href="/" class="flex items-center space-x-2">
      <img src="/img_logo_black.png" alt="Speedix" class="h-8">
      <span class="font-bold text-gray-900 hidden sm:inline">Speedix</span>
    </a>
    <ul class="flex items-center space-x-6">
      <li><a href="/products.html" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">提供内容</a></li>
      <li><a href="/speedix-about.html" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">Speedixについて</a></li>
      <li><a href="/contact.html" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">お問い合わせ</a></li>
      <!-- <li>
        <a href="/checkout.html" class="relative">
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold" id="cart-count">0</span>
        </a>
      </li> -->
    </ul>
  </nav>
</header>
`;

const footerHTML = `
<footer class="bg-gray-900 text-gray-300 py-16 mt-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
      <div>
        <h3 class="text-white font-bold mb-4">Speedix</h3>
        <p class="text-sm leading-relaxed">最短・最速で成果を出すWeb制作サービス</p>
      </div>
      <div>
        <h4 class="text-white font-bold mb-4">メニュー</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="/" class="hover:text-white transition-colors">ホーム</a></li>
          <li><a href="/products.html" class="hover:text-white transition-colors">提供内容</a></li>
          <li><a href="/contact.html" class="hover:text-white transition-colors">お問い合わせ</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold mb-4">会社情報</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="/speedix-about.html" class="hover:text-white transition-colors">Speedixについて</a></li>
          <li><a href="/about.html" class="hover:text-white transition-colors">会社概要</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold mb-4">その他</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="/privacy.html" class="hover:text-white transition-colors">プライバシーポリシー</a></li>
          <li><a href="/terms.html" class="hover:text-white transition-colors">利用規約</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-gray-700 pt-8 text-center text-sm">
      <p>&copy; 2024 Yis Co., Ltd. All rights reserved.</p>
    </div>
  </div>
</footer>
`;

export function renderHeader() {
  const header = document.getElementById('header');
  if (header) {
    header.innerHTML = headerHTML;
  }
}

export function renderFooter() {
  const footer = document.getElementById('footer');
  if (footer) {
    footer.innerHTML = footerHTML;
  }
}

export function updateCartBadge() {
  const badge = document.getElementById('cart-count');
  if (badge) {
    badge.textContent = cart.getCartCount();
  }
}

export function initializeUI() {
  renderHeader();
  renderFooter();
  updateCartBadge();
}
