document.addEventListener('DOMContentLoaded', function() {
    initSmoothScroll();
    initCheckoutForm();
});

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

function initCheckoutForm() {
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckoutSubmit);
        displayCartSummary();
    }
}

function displayCartSummary() {
    const summaryContainer = document.getElementById('checkout-cart-summary');
    if (!summaryContainer || !window.speedixCart) return;

    const cart = speedixCart.getCart();
    const total = speedixCart.getTotalPrice();

    if (cart.length === 0) {
        window.location.href = '/products';
        return;
    }

    summaryContainer.innerHTML = `
        <div class="space-y-3 mb-6">
            ${cart.map(item => `
                <div class="flex justify-between text-sm">
                    <div class="flex-1">
                        <p class="font-medium text-gray-900">${escapeHtml(item.name)}</p>
                        <p class="text-gray-500">数量: ${item.quantity}</p>
                    </div>
                    <p class="font-medium text-gray-900">¥${formatNumber(item.price * item.quantity)}</p>
                </div>
            `).join('')}
        </div>
        <div class="border-t border-gray-200 pt-4">
            <div class="flex justify-between items-center mb-2">
                <span class="text-gray-600">小計</span>
                <span class="font-medium text-gray-900">¥${formatNumber(total)}</span>
            </div>
            <div class="flex justify-between items-center text-lg font-bold">
                <span class="text-gray-900">合計（税込）</span>
                <span class="text-gray-900">¥${formatNumber(total)}</span>
            </div>
        </div>
    `;
}

function handleCheckoutSubmit(e) {
    e.preventDefault();

    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = '送信中...';

    const formData = new FormData(e.target);
    const cart = speedixCart.getCart();
    const total = speedixCart.getTotalPrice();

    const data = {
        action: 'speedix_checkout',
        nonce: speedixAjax.nonce,
        customer_name: formData.get('name'),
        customer_email: formData.get('email'),
        customer_phone: formData.get('phone'),
        company_name: formData.get('company'),
        message: formData.get('message'),
        cart_items: JSON.stringify(cart),
        total_amount: total
    };

    fetch(speedixAjax.ajaxurl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            speedixCart.clearCart();
            window.location.href = '/thank-you';
        } else {
            alert('エラーが発生しました。もう一度お試しください。');
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('エラーが発生しました。もう一度お試しください。');
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    });
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
