<?php
/**
 * Template for displaying all pages
 */

get_header();
?>

<div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <?php
        while (have_posts()) : the_post();
        ?>
            <article class="bg-white rounded-xl shadow-sm p-8">
                <h1 class="text-3xl font-bold text-gray-900 mb-8"><?php the_title(); ?></h1>
                <div class="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                    <?php the_content(); ?>
                </div>
            </article>
        <?php endwhile; ?>
    </div>
</div>

<?php
get_footer();