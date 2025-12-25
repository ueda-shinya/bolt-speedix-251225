class SpeedixCart {
    constructor() {
        this.cart = this.loadCart();
        this.init();
    }

    init() {
        this.updateCartUI();
        this.attachEventListeners();
    }

    loadCart() {
        const saved = localStorage.getItem('speedix_cart');
        return saved ? JSON.parse(saved) : [];
    }

    saveCart() {
        localStorage.setItem('speedix_cart', JSON.stringify(this.cart));
        this.updateCartUI();
    }

    addToCart(product) {
        const existingItem = this.cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({ ...product, quantity: 1 });
        }
        this.saveCart();
        this.showCartDrawer();
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
    }

    updateQuantity(productId, quantity) {
        if (quantity <= 0) {
            this.removeFromCart(productId);
            return;
        }
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            item.quantity = quantity;
            this.saveCart();
        }
    }

    clearCart() {
        this.cart = [];
        this.saveCart();
    }

    getTotalPrice() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getCartCount() {
        return this.cart.reduce((count, item) => count + item.quantity, 0);
    }

    hasCorProduct() {
        return this.cart.some(item =>
            item.slug === 'lp-creation' || item.slug === 'homepage-production'
        );
    }

    updateCartUI() {
        const count = this.getCartCount();
        const cartCountEl = document.getElementById('cart-count');
        if (cartCountEl) {
            if (count > 0) {
                cartCountEl.textContent = count;
                cartCountEl.classList.remove('hidden');
            } else {
                cartCountEl.classList.add('hidden');
            }
        }

        const cartItemsEl = document.getElementById('cart-items');
        if (cartItemsEl) {
            if (this.cart.length === 0) {
                cartItemsEl.innerHTML = `
                    <div class="text-center py-12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-16 h-16 text-gray-400 mx-auto mb-4">
                            <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                        </svg>
                        <p class="text-gray-600">カートは空です</p>
                    </div>
                `;
            } else {
                cartItemsEl.innerHTML = this.cart.map(item => `
                    <div class="border-b border-gray-200 pb-4 mb-4">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="font-bold text-gray-900">${this.escapeHtml(item.name)}</h3>
                            <button class="text-red-500 hover:text-red-700" onclick="speedixCart.removeFromCart('${item.id}')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-3">
                                <button class="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300" onclick="speedixCart.updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                                <span class="text-gray-900 font-medium">${item.quantity}</span>
                                <button class="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300" onclick="speedixCart.updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                            </div>
                            <span class="font-bold text-gray-900">¥${this.formatNumber(item.price * item.quantity)}</span>
                        </div>
                    </div>
                `).join('');
            }
        }

        const cartTotalEl = document.getElementById('cart-total');
        if (cartTotalEl) {
            cartTotalEl.textContent = `¥${this.formatNumber(this.getTotalPrice())}`;
        }

        const checkoutButton = document.getElementById('checkout-button');
        if (checkoutButton) {
            if (this.cart.length === 0) {
                checkoutButton.classList.add('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
            } else {
                checkoutButton.classList.remove('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
            }
        }
    }

    showCartDrawer() {
        const drawer = document.getElementById('cart-drawer');
        const content = document.getElementById('cart-content');
        if (drawer && content) {
            drawer.classList.remove('hidden');
            setTimeout(() => {
                content.classList.remove('translate-x-full');
            }, 10);
        }
    }

    hideCartDrawer() {
        const drawer = document.getElementById('cart-drawer');
        const content = document.getElementById('cart-content');
        if (content) {
            content.classList.add('translate-x-full');
            setTimeout(() => {
                if (drawer) drawer.classList.add('hidden');
            }, 300);
        }
    }

    attachEventListeners() {
        const cartButton = document.getElementById('cart-button');
        if (cartButton) {
            cartButton.addEventListener('click', () => this.showCartDrawer());
        }

        const closeCart = document.getElementById('close-cart');
        if (closeCart) {
            closeCart.addEventListener('click', () => this.hideCartDrawer());
        }

        const overlay = document.getElementById('cart-overlay');
        if (overlay) {
            overlay.addEventListener('click', () => this.hideCartDrawer());
        }

        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart-btn')) {
                const productData = e.target.dataset.product;
                if (productData) {
                    const product = JSON.parse(productData);
                    this.addToCart(product);
                }
            }
        });
    }

    formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    getCart() {
        return this.cart;
    }
}

let speedixCart;
document.addEventListener('DOMContentLoaded', () => {
    speedixCart = new SpeedixCart();
});
