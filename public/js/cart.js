class Cart {
  constructor() {
    this.items = this.loadCart();
  }

  loadCart() {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  addToCart(product) {
    const existing = this.items.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
    this.saveCart();
  }

  removeFromCart(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    this.saveCart();
  }

  updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }
    const item = this.items.find(item => item.id === productId);
    if (item) {
      item.quantity = quantity;
      this.saveCart();
    }
  }

  clearCart() {
    this.items = [];
    this.saveCart();
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  getCartCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  hasCorProduct() {
    return this.items.some(item =>
      item.slug === 'speedix-lp' || item.slug === 'speedix-hp' || item.slug === 'lp-contact' || item.slug === 'lp-booking'
    );
  }
}

export const cart = new Cart();
