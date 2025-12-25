<?php
/**
 * Template Name: Thank You Page
 */

get_header();
?>

<div class="min-h-screen bg-gray-50 flex items-center justify-center py-12">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="bg-white rounded-2xl shadow-lg p-12">
            <div class="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto text-green-500">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            </div>
            <h1 class="text-3xl font-bold text-gray-900 mb-4">ご注文ありがとうございます！</h1>
            <p class="text-lg text-gray-600 mb-8">
                お問い合わせを承りました。担当者より改めてご連絡させていただきます。
            </p>
            <div class="space-y-4">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all">
                    トップページに戻る
                </a>
            </div>
        </div>
    </div>
</div>

<?php
get_footer();