<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="bg-white shadow-sm sticky top-0 z-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-24">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center group">
                <?php
                if (has_custom_logo()) {
                    the_custom_logo();
                } else {
                    ?>
                    <img src="<?php echo esc_url(get_template_directory_uri() . '/images/Speedix-logo.png'); ?>" alt="Speedix" class="w-auto max-h-[60px] object-contain">
                    <?php
                }
                ?>
            </a>

            <div class="flex items-center space-x-1 sm:space-x-2">
                <a href="<?php echo esc_url(home_url('/speedix-about')); ?>" class="px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors <?php echo is_page('speedix-about') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'; ?>">
                    Speedixについて
                </a>
                <a href="<?php echo esc_url(home_url('/products')); ?>" class="px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors <?php echo is_post_type_archive('product') || is_singular('product') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'; ?>">
                    提供内容
                </a>
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors <?php echo is_page('contact') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'; ?>">
                    お問い合わせ
                </a>
                <a href="<?php echo esc_url(home_url('/about')); ?>" class="px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors <?php echo is_page('about') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'; ?>">
                    会社情報
                </a>
                <button id="cart-button" class="relative p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                        <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                    </svg>
                    <span id="cart-count" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center hidden">0</span>
                </button>
            </div>
        </div>
    </nav>
</header>

<div id="cart-drawer" class="fixed inset-0 z-50 hidden">
    <div class="absolute inset-0 bg-black bg-opacity-50" id="cart-overlay"></div>
    <div class="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform translate-x-full transition-transform duration-300" id="cart-content">
        <div class="flex flex-col h-full">
            <div class="flex justify-between items-center p-6 border-b">
                <h2 class="text-2xl font-bold text-gray-900">カート</h2>
                <button id="close-cart" class="text-gray-400 hover:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            <div id="cart-items" class="flex-1 overflow-y-auto p-6">
            </div>

            <div class="border-t p-6">
                <div class="flex justify-between items-center mb-4">
                    <span class="text-lg font-bold text-gray-900">合計</span>
                    <span id="cart-total" class="text-2xl font-bold text-blue-600">¥0</span>
                </div>
                <a href="<?php echo esc_url(home_url('/checkout')); ?>" class="block w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center py-4 rounded-lg font-bold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all" id="checkout-button">
                    購入手続きへ進む
                </a>
            </div>
        </div>
    </div>
</div>
