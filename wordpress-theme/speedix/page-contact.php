<?php
/**
 * Template Name: Contact Page
 */

get_header();
?>

<div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-8">お問い合わせ</h1>

        <div class="bg-white rounded-xl shadow-sm p-8">
            <?php
            if (have_posts()) :
                while (have_posts()) : the_post();
                    the_content();
                endwhile;
            else :
            ?>
                <p class="text-gray-600 mb-8">お気軽にお問い合わせください。</p>
                <p class="text-sm text-gray-500">Contact Form 7プラグインをインストールし、ショートコードを本文に挿入してください。</p>
            <?php endif; ?>
        </div>
    </div>
</div>

<?php
get_footer();