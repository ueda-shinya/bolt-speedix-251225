<?php
/**
 * The main template file
 */

get_header();
?>

<div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <?php
        if (have_posts()) :
            while (have_posts()) : the_post();
        ?>
                <article class="bg-white rounded-xl shadow-sm p-8 mb-8">
                    <h2 class="text-2xl font-bold text-gray-900 mb-4">
                        <a href="<?php the_permalink(); ?>" class="hover:text-blue-600 transition-colors">
                            <?php the_title(); ?>
                        </a>
                    </h2>
                    <div class="text-gray-600">
                        <?php the_excerpt(); ?>
                    </div>
                </article>
        <?php
            endwhile;
        else :
        ?>
            <p class="text-gray-600">コンテンツが見つかりませんでした。</p>
        <?php endif; ?>
    </div>
</div>

<?php
get_footer();