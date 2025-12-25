<footer class="bg-gray-900 text-gray-300 mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h3 class="text-white font-bold text-lg mb-4">Speedix</h3>
                <p class="text-sm leading-relaxed">
                    最短・最速で成果を出すWeb制作サービス
                </p>
            </div>

            <div>
                <h3 class="text-white font-bold text-lg mb-4">メニュー</h3>
                <ul class="space-y-2 text-sm">
                    <li>
                        <a href="<?php echo esc_url(home_url('/speedix-about')); ?>" class="hover:text-white transition-colors">
                            Speedixについて
                        </a>
                    </li>
                    <li>
                        <a href="<?php echo esc_url(home_url('/products')); ?>" class="hover:text-white transition-colors">
                            提供内容
                        </a>
                    </li>
                    <li>
                        <a href="<?php echo esc_url(home_url('/contact')); ?>" class="hover:text-white transition-colors">
                            お問い合わせ
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <h3 class="text-white font-bold text-lg mb-4">会社情報</h3>
                <a href="https://yis-web.com/" target="_blank" rel="noopener noreferrer" class="block mb-4">
                    <img src="https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Yis株式会社" class="h-8 object-contain brightness-200">
                </a>
                <p class="text-sm leading-relaxed">
                    <a href="https://yis-web.com/" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">
                        会社情報
                    </a>
                </p>
            </div>
        </div>

        <div class="border-t border-gray-800 mt-8 pt-8">
            <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
                <p>&copy; <?php echo date('Y'); ?> Yis株式会社</p>
                <div class="flex gap-6">
                    <a href="<?php echo esc_url(home_url('/privacy')); ?>" class="hover:text-white transition-colors">
                        プライバシーポリシー
                    </a>
                    <a href="<?php echo esc_url(home_url('/terms')); ?>" class="hover:text-white transition-colors">
                        特定商取引法表示
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
