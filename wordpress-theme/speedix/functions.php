<?php
/**
 * Speedix Theme Functions
 */

if (!defined('ABSPATH')) {
    exit;
}

define('SPEEDIX_VERSION', '1.0.0');
define('SPEEDIX_THEME_DIR', get_template_directory());
define('SPEEDIX_THEME_URI', get_template_directory_uri());

function speedix_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));

    register_nav_menus(array(
        'primary' => __('Primary Menu', 'speedix'),
        'footer' => __('Footer Menu', 'speedix'),
    ));
}
add_action('after_setup_theme', 'speedix_setup');

function speedix_enqueue_scripts() {
    wp_enqueue_style('speedix-tailwind', 'https://cdn.jsdelivr.net/npm/tailwindcss@3.4.1/dist/tailwind.min.css', array(), '3.4.1');
    wp_enqueue_style('speedix-style', get_stylesheet_uri(), array('speedix-tailwind'), SPEEDIX_VERSION);

    wp_enqueue_script('speedix-cart', SPEEDIX_THEME_URI . '/js/cart.js', array(), SPEEDIX_VERSION, true);
    wp_enqueue_script('speedix-main', SPEEDIX_THEME_URI . '/js/main.js', array(), SPEEDIX_VERSION, true);

    wp_localize_script('speedix-cart', 'speedixAjax', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('speedix_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'speedix_enqueue_scripts');

function speedix_register_product_post_type() {
    $labels = array(
        'name' => '商品',
        'singular_name' => '商品',
        'menu_name' => '商品管理',
        'add_new' => '新規追加',
        'add_new_item' => '新しい商品を追加',
        'edit_item' => '商品を編集',
        'new_item' => '新しい商品',
        'view_item' => '商品を表示',
        'search_items' => '商品を検索',
        'not_found' => '商品が見つかりませんでした',
        'not_found_in_trash' => 'ゴミ箱に商品はありません',
    );

    $args = array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-cart',
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
        'rewrite' => array('slug' => 'products'),
        'show_in_rest' => true,
    );

    register_post_type('product', $args);
}
add_action('init', 'speedix_register_product_post_type');

function speedix_register_product_category_taxonomy() {
    $labels = array(
        'name' => '商品カテゴリー',
        'singular_name' => '商品カテゴリー',
        'menu_name' => 'カテゴリー',
        'all_items' => 'すべてのカテゴリー',
        'edit_item' => 'カテゴリーを編集',
        'update_item' => 'カテゴリーを更新',
        'add_new_item' => '新しいカテゴリーを追加',
        'new_item_name' => '新しいカテゴリー名',
    );

    register_taxonomy('product_category', 'product', array(
        'labels' => $labels,
        'hierarchical' => true,
        'show_in_rest' => true,
        'rewrite' => array('slug' => 'product-category'),
    ));
}
add_action('init', 'speedix_register_product_category_taxonomy');

function speedix_add_product_meta_boxes() {
    add_meta_box(
        'speedix_product_details',
        '商品詳細',
        'speedix_product_details_callback',
        'product',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'speedix_add_product_meta_boxes');

function speedix_product_details_callback($post) {
    wp_nonce_field('speedix_product_meta_box', 'speedix_product_meta_box_nonce');

    $price = get_post_meta($post->ID, '_product_price', true);
    $slug = get_post_meta($post->ID, '_product_slug', true);
    $features = get_post_meta($post->ID, '_product_features', true);
    $image_url = get_post_meta($post->ID, '_product_image_url', true);
    $image_alt = get_post_meta($post->ID, '_product_image_alt', true);
    $is_active = get_post_meta($post->ID, '_product_is_active', true);
    $display_order = get_post_meta($post->ID, '_product_display_order', true);

    if (!$features) {
        $features = '';
    } else if (is_array($features)) {
        $features = implode("\n", $features);
    }
    ?>
    <table class="form-table">
        <tr>
            <th><label for="product_price">価格（円）</label></th>
            <td><input type="number" id="product_price" name="product_price" value="<?php echo esc_attr($price); ?>" class="regular-text" required /></td>
        </tr>
        <tr>
            <th><label for="product_slug">スラッグ</label></th>
            <td><input type="text" id="product_slug" name="product_slug" value="<?php echo esc_attr($slug); ?>" class="regular-text" required /></td>
        </tr>
        <tr>
            <th><label for="product_features">特徴・メリット（1行に1項目）</label></th>
            <td><textarea id="product_features" name="product_features" rows="5" class="large-text"><?php echo esc_textarea($features); ?></textarea></td>
        </tr>
        <tr>
            <th><label for="product_image_url">画像URL</label></th>
            <td><input type="url" id="product_image_url" name="product_image_url" value="<?php echo esc_attr($image_url); ?>" class="large-text" /></td>
        </tr>
        <tr>
            <th><label for="product_image_alt">画像ALTテキスト</label></th>
            <td><input type="text" id="product_image_alt" name="product_image_alt" value="<?php echo esc_attr($image_alt); ?>" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="product_is_active">公開状態</label></th>
            <td>
                <input type="checkbox" id="product_is_active" name="product_is_active" value="1" <?php checked($is_active, '1'); ?> />
                <label for="product_is_active">有効</label>
            </td>
        </tr>
        <tr>
            <th><label for="product_display_order">表示順</label></th>
            <td><input type="number" id="product_display_order" name="product_display_order" value="<?php echo esc_attr($display_order ? $display_order : 0); ?>" class="small-text" /></td>
        </tr>
    </table>
    <?php
}

function speedix_save_product_meta($post_id) {
    if (!isset($_POST['speedix_product_meta_box_nonce'])) {
        return;
    }
    if (!wp_verify_nonce($_POST['speedix_product_meta_box_nonce'], 'speedix_product_meta_box')) {
        return;
    }
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    if (isset($_POST['product_price'])) {
        update_post_meta($post_id, '_product_price', sanitize_text_field($_POST['product_price']));
    }
    if (isset($_POST['product_slug'])) {
        update_post_meta($post_id, '_product_slug', sanitize_text_field($_POST['product_slug']));
    }
    if (isset($_POST['product_features'])) {
        $features = sanitize_textarea_field($_POST['product_features']);
        $features_array = array_filter(array_map('trim', explode("\n", $features)));
        update_post_meta($post_id, '_product_features', $features_array);
    }
    if (isset($_POST['product_image_url'])) {
        update_post_meta($post_id, '_product_image_url', esc_url_raw($_POST['product_image_url']));
    }
    if (isset($_POST['product_image_alt'])) {
        update_post_meta($post_id, '_product_image_alt', sanitize_text_field($_POST['product_image_alt']));
    }

    $is_active = isset($_POST['product_is_active']) ? '1' : '0';
    update_post_meta($post_id, '_product_is_active', $is_active);

    if (isset($_POST['product_display_order'])) {
        update_post_meta($post_id, '_product_display_order', intval($_POST['product_display_order']));
    }
}
add_action('save_post_product', 'speedix_save_product_meta');

function speedix_handle_checkout_form() {
    check_ajax_referer('speedix_nonce', 'nonce');

    global $wpdb;
    $table_name = $wpdb->prefix . 'speedix_orders';

    $cart_items = isset($_POST['cart_items']) ? json_decode(stripslashes($_POST['cart_items']), true) : array();
    $customer_name = sanitize_text_field($_POST['customer_name']);
    $customer_email = sanitize_email($_POST['customer_email']);
    $customer_phone = sanitize_text_field($_POST['customer_phone']);
    $company_name = sanitize_text_field($_POST['company_name']);
    $message = sanitize_textarea_field($_POST['message']);
    $total_amount = intval($_POST['total_amount']);

    $order_data = array(
        'customer_name' => $customer_name,
        'customer_email' => $customer_email,
        'customer_phone' => $customer_phone,
        'company_name' => $company_name,
        'message' => $message,
        'cart_items' => json_encode($cart_items),
        'total_amount' => $total_amount,
        'status' => 'pending',
        'created_at' => current_time('mysql'),
    );

    $wpdb->insert($table_name, $order_data);

    $admin_email = get_option('admin_email');
    $subject = '【Speedix】新しい注文が届きました';
    $body = "新しい注文が届きました。\n\n";
    $body .= "お名前: {$customer_name}\n";
    $body .= "メールアドレス: {$customer_email}\n";
    $body .= "電話番号: {$customer_phone}\n";
    $body .= "会社名: {$company_name}\n";
    $body .= "ご要望: {$message}\n";
    $body .= "合計金額: ¥" . number_format($total_amount) . "\n\n";
    $body .= "注文内容:\n";
    foreach ($cart_items as $item) {
        $body .= "- {$item['name']} × {$item['quantity']} = ¥" . number_format($item['price'] * $item['quantity']) . "\n";
    }

    wp_mail($admin_email, $subject, $body);

    $customer_subject = '【Speedix】ご注文ありがとうございます';
    $customer_body = "{$customer_name} 様\n\n";
    $customer_body .= "この度はSpeedixをご利用いただき、誠にありがとうございます。\n\n";
    $customer_body .= "ご注文内容:\n";
    foreach ($cart_items as $item) {
        $customer_body .= "- {$item['name']} × {$item['quantity']}\n";
    }
    $customer_body .= "\n合計金額: ¥" . number_format($total_amount) . "\n\n";
    $customer_body .= "担当者より改めてご連絡させていただきます。\n\n";
    $customer_body .= "Yis株式会社\n";

    wp_mail($customer_email, $customer_subject, $customer_body);

    wp_send_json_success(array('message' => '注文を受け付けました'));
}
add_action('wp_ajax_speedix_checkout', 'speedix_handle_checkout_form');
add_action('wp_ajax_nopriv_speedix_checkout', 'speedix_handle_checkout_form');

function speedix_create_orders_table() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'speedix_orders';
    $charset_collate = $wpdb->get_charset_collate();

    $sql = "CREATE TABLE IF NOT EXISTS $table_name (
        id bigint(20) NOT NULL AUTO_INCREMENT,
        customer_name varchar(255) NOT NULL,
        customer_email varchar(255) NOT NULL,
        customer_phone varchar(50),
        company_name varchar(255),
        message text,
        cart_items longtext,
        total_amount bigint(20) NOT NULL,
        status varchar(50) DEFAULT 'pending',
        created_at datetime DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
    ) $charset_collate;";

    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql);
}
register_activation_hook(__FILE__, 'speedix_create_orders_table');
add_action('after_switch_theme', 'speedix_create_orders_table');

function speedix_get_products($args = array()) {
    $defaults = array(
        'post_type' => 'product',
        'posts_per_page' => -1,
        'orderby' => 'meta_value_num',
        'meta_key' => '_product_display_order',
        'order' => 'ASC',
        'meta_query' => array(
            array(
                'key' => '_product_is_active',
                'value' => '1',
                'compare' => '='
            )
        )
    );

    $args = wp_parse_args($args, $defaults);
    return new WP_Query($args);
}

function speedix_get_product_data($post_id) {
    return array(
        'id' => $post_id,
        'name' => get_the_title($post_id),
        'slug' => get_post_meta($post_id, '_product_slug', true),
        'description' => get_the_content(null, false, $post_id),
        'price' => intval(get_post_meta($post_id, '_product_price', true)),
        'features' => get_post_meta($post_id, '_product_features', true),
        'image_url' => get_post_meta($post_id, '_product_image_url', true),
        'image_alt' => get_post_meta($post_id, '_product_image_alt', true),
        'is_active' => get_post_meta($post_id, '_product_is_active', true),
        'display_order' => intval(get_post_meta($post_id, '_product_display_order', true)),
    );
}
