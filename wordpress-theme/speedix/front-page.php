<?php
/**
 * Template Name: Front Page
 * Description: Speedix トップページ
 */

get_header();
?>

<div class="min-h-screen">
    <section class="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 sm:py-32 overflow-hidden">
        <div class="absolute inset-0 opacity-30">
            <svg class="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="timeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#60A5FA" />
                        <stop offset="100%" stop-color="#22D3EE" />
                    </linearGradient>
                    <linearGradient id="salesGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#34D399" />
                        <stop offset="100%" stop-color="#F59E0B" />
                    </linearGradient>
                </defs>
                <path
                    d="M 0 500 L 100 480 L 200 450 L 300 420 L 400 380 L 500 350 L 600 310 L 700 270 L 800 230 L 900 190 L 1000 150 L 1100 110 L 1200 70"
                    fill="none"
                    stroke="url(#timeGradient)"
                    stroke-width="3"
                    class="animate-draw-line"
                />
                <path
                    d="M 0 550 L 100 540 L 200 520 L 300 490 L 400 460 L 500 420 L 600 390 L 700 350 L 800 310 L 900 270 L 1000 230 L 1100 190 L 1200 150"
                    fill="none"
                    stroke="url(#salesGradient)"
                    stroke-width="3"
                    class="animate-draw-line-delayed"
                />
            </svg>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center">
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    制作時間は売上損失
                    <br />
                    まだ時間をかけますか？
                </h1>
                <p class="text-xl sm:text-2xl mb-4 text-gray-300 leading-relaxed">
                    売上までの時間損失を極限に減らします
                </p>
                <p class="text-lg sm:text-xl mb-8 text-gray-400 leading-relaxed">
                    スピーディーな制作で今すぐLPを市場に出しましょう
                </p>
                <a href="<?php echo esc_url(home_url('/products')); ?>" class="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-xl">
                    今すぐ制作を開始する
                </a>
            </div>
        </div>
    </section>

    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                <div class="text-left">
                    <div class="text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-4">01.</div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">短縮時間</h3>
                    <p class="text-gray-600 leading-relaxed">
                        従来のLP制作に比べ、制作時間を大幅に短縮し、業務を効率化します。
                    </p>
                </div>
                <div class="text-left">
                    <div class="text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-4">02.</div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">コスト削減</h3>
                    <p class="text-gray-600 leading-relaxed">
                        低コストのLP制作で、広告費の増加を実現し、ビジネスの成長をサポートします。
                    </p>
                </div>
                <div class="text-left">
                    <div class="text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-4">03.</div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">高度なAI活用</h3>
                    <p class="text-gray-600 leading-relaxed">
                        AI技術を活用し、効果的なマーケティング戦略を反映したLPを提供します。
                    </p>
                </div>
            </div>

            <div class="max-w-4xl mx-auto text-center mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                    Speedixについて
                </h2>
                <p class="text-lg text-gray-600 leading-relaxed mb-4">
                    Speedixは、顧客のニーズに応えるため、迅速かつ低コストでLPを制作するエージェンシーです。マーケティング視点を大切にしています。
                </p>
                <p class="text-lg text-gray-600 leading-relaxed">
                    お客様が効率的に集客できるよう、常に革新と改善を求めて日々努めています。
                </p>
            </div>

            <h3 class="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
                Speedixの特長
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                    <div class="text-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto text-blue-500">
                            <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">スピード納品</h3>
                    <p class="text-gray-600 leading-relaxed text-left">
                        最短3〜5営業日で納品。お急ぎのプロジェクトにも柔軟に対応し、ビジネスチャンスを逃しません。
                    </p>
                </div>

                <div class="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                    <div class="text-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto text-blue-500">
                            <circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">プロ品質デザイン</h3>
                    <p class="text-gray-600 leading-relaxed text-left">
                        マーケティング視点を取り入れた、成果にコミットする戦略的デザインを提供します。
                    </p>
                </div>

                <div class="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                    <div class="text-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto text-cyan-500">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">ワンストップ対応</h3>
                    <p class="text-gray-600 leading-relaxed text-left">
                        企画から制作、運用まで一貫してサポート。複数の業者に依頼する手間を省きます。
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
                私たちは、この課題を解決するために誕生しました
            </h2>
            <p class="text-center text-gray-600 mb-12">
                今までのLP制作の課題
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                    <div class="text-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto text-red-600">
                            <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3 text-center">制作するまでに時間がかかる</h3>
                    <p class="text-gray-600 leading-relaxed">
                        集客に関する課題について専門のコンサルタントが無料で相談に乗ります。お気軽にお問合せください。
                    </p>
                </div>
                <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                    <div class="text-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto text-red-600">
                            <line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3 text-center">料金が高い</h3>
                    <p class="text-gray-600 leading-relaxed">
                        LP制作やマーケティングに関するワークショップを定期的に開催し、多くの方々に知識を提供しています。
                    </p>
                </div>
                <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                    <div class="text-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto text-red-600">
                            <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3 text-center">マーケティング視点がない</h3>
                    <p class="text-gray-600 leading-relaxed">
                        実際にご利用いただいたお客様の成功事例を通じて、効果的なLP制作のヒントをお伝えします。
                    </p>
                </div>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
                提供内容
            </h2>
            <p class="text-center text-gray-600 mb-12">
                お客様のニーズに合わせた最適なソリューションをご用意しています
            </p>

            <?php
            $products_query = speedix_get_products();
            if ($products_query->have_posts()) :
            ?>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <?php while ($products_query->have_posts()) : $products_query->the_post();
                        $product_data = speedix_get_product_data(get_the_ID());
                    ?>
                        <div class="bg-white rounded-2xl shadow-lg hover:shadow-sm transition-all border border-gray-100 overflow-hidden group">
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-gray-900 mb-2"><?php echo esc_html($product_data['name']); ?></h3>
                                <p class="text-gray-600 text-sm mb-4 line-clamp-2"><?php echo esc_html(wp_trim_words($product_data['description'], 15)); ?></p>
                                <div class="mb-4">
                                    <span class="text-3xl font-bold text-blue-600">
                                        ¥<?php echo number_format($product_data['price']); ?>
                                    </span>
                                    <span class="text-gray-500 text-sm ml-1">（税込）</span>
                                </div>
                                <button class="add-to-cart-btn block w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center py-3 rounded-lg font-bold hover:from-blue-600 hover:to-cyan-600 transition-all" data-product='<?php echo json_encode($product_data); ?>'>
                                    カートに追加する
                                </button>
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
    </section>

    <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                選ばれる理由
            </h2>
            <p class="text-lg text-gray-600 mb-12 leading-relaxed">
                Yis株式会社は、マーケティング型のWeb制作会社として、
                <br class="hidden sm:block" />
                ただ作るだけではなく、成果を重視した戦略的クリエイティブを提供します。
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                <div class="flex items-start space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600 flex-shrink-0 mt-1">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <div>
                        <h4 class="font-bold text-gray-900 mb-1">制作から運用まで一貫対応</h4>
                        <p class="text-gray-600 text-sm">Webサイトの企画・制作・運用・マーケティングまで、すべてをサポート</p>
                    </div>
                </div>
                <div class="flex items-start space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600 flex-shrink-0 mt-1">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <div>
                        <h4 class="font-bold text-gray-900 mb-1">豊富な実績と信頼</h4>
                        <p class="text-gray-600 text-sm">多業種での制作実績により、様々なニーズに対応可能</p>
                    </div>
                </div>
                <div class="flex items-start space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600 flex-shrink-0 mt-1">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <div>
                        <h4 class="font-bold text-gray-900 mb-1">明確な料金体系</h4>
                        <p class="text-gray-600 text-sm">追加費用なしの分かりやすい価格設定で安心</p>
                    </div>
                </div>
                <div class="flex items-start space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600 flex-shrink-0 mt-1">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <div>
                        <h4 class="font-bold text-gray-900 mb-1">迅速なレスポンス</h4>
                        <p class="text-gray-600 text-sm">お問い合わせから納品まで、スピーディーな対応を実現</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-20 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl sm:text-4xl font-bold mb-6">
                今すぐビジネスを加速させましょう
            </h2>
            <p class="text-xl text-white mb-8 leading-relaxed">
                お客様のビジネス成長をサポートする最適なソリューションをご提案します
            </p>
            <a href="<?php echo esc_url(home_url('/products')); ?>" class="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl">
                今すぐ制作を開始する
            </a>
        </div>
    </section>
</div>

<?php
get_footer();
