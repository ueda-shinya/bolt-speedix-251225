<?php
/**
 * Template for displaying product archive
 */

get_header();
?>

<div class="min-h-screen bg-gray-50">
    <section class="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl sm:text-5xl font-bold mb-6">
                提供内容
            </h1>
            <p class="text-xl text-gray-300 leading-relaxed">
                お客様のニーズに合わせた最適なソリューションをご用意しています
            </p>
        </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <?php
        $products_query = speedix_get_products();
        if ($products_query->have_posts()) :
        ?>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <?php while ($products_query->have_posts()) : $products_query->the_post();
                    $product_data = speedix_get_product_data(get_the_ID());
                    $features = $product_data['features'];
                    if (!is_array($features)) {
                        $features = array();
                    }
                ?>
                    <div class="bg-white rounded-2xl shadow-lg hover:shadow-sm transition-all border border-gray-100 overflow-hidden">
                        <?php if ($product_data['image_url']) : ?>
                            <div class="w-full h-64 overflow-hidden">
                                <img src="<?php echo esc_url($product_data['image_url']); ?>" alt="<?php echo esc_attr($product_data['image_alt'] ?: $product_data['name']); ?>" class="w-full h-full object-cover">
                            </div>
                        <?php endif; ?>
                        <div class="p-8">
                            <h2 class="text-2xl font-bold text-gray-900 mb-3"><?php echo esc_html($product_data['name']); ?></h2>
                            <p class="text-gray-600 mb-6 leading-relaxed"><?php echo esc_html($product_data['description']); ?></p>

                            <?php if (!empty($features)) : ?>
                                <div class="mb-6">
                                    <h3 class="font-bold text-gray-900 mb-3">特徴・メリット</h3>
                                    <ul class="space-y-2">
                                        <?php foreach ($features as $feature) : ?>
                                            <li class="flex items-start space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600 flex-shrink-0 mt-0.5">
                                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                </svg>
                                                <span class="text-gray-600 text-sm"><?php echo esc_html($feature); ?></span>
                                            </li>
                                        <?php endforeach; ?>
                                    </ul>
                                </div>
                            <?php endif; ?>

                            <div class="border-t border-gray-200 pt-6">
                                <div class="mb-4 flex items-center justify-between">
                                    <div>
                                        <span class="text-3xl font-bold text-blue-600">
                                            ¥<?php echo number_format($product_data['price']); ?>
                                        </span>
                                        <span class="text-gray-500 text-sm ml-2">（税込）</span>
                                    </div>
                                </div>

                                <button class="add-to-cart-btn w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg font-bold hover:from-blue-600 hover:to-cyan-600 transition-all" data-product='<?php echo json_encode($product_data); ?>'>
                                    カートに追加
                                </button>
                            </div>
                        </div>
                    </div>
                <?php endwhile; wp_reset_postdata(); ?>
            </div>
        <?php else : ?>
            <div class="text-center py-12">
                <p class="text-gray-600">商品がありません</p>
            </div>
        <?php endif; ?>
    </div>
</div>

<?php
get_footer();
