-- Speedix WordPress初期データ
-- このファイルはWordPressインストール後に実行してください

-- 商品投稿の作成
INSERT INTO wp_posts (post_author, post_date, post_date_gmt, post_content, post_title, post_excerpt, post_status, comment_status, ping_status, post_name, post_modified, post_modified_gmt, post_type)
VALUES
(1, NOW(), NOW(), '集客・売上アップを実現する高品質ランディングページを制作。最短5営業日で納品。マーケティング視点を取り入れた戦略的なデザインで、コンバージョン率の向上を目指します。', 'LP制作', '', 'publish', 'closed', 'closed', 'lp-creation', NOW(), NOW(), 'product'),
(1, NOW(), NOW(), '既存サイトに問い合わせフォームを追加し、顧客対応を効率化。スパム対策や自動返信メール機能も標準装備。', 'お問い合わせフォーム追加', '', 'publish', 'closed', 'closed', 'contact-form', NOW(), NOW(), 'product'),
(1, NOW(), NOW(), 'サロン・クリニック・店舗に最適な予約フォームを導入。カレンダー式でわかりやすく、予約管理も簡単。', '予約フォーム追加', '', 'publish', 'closed', 'closed', 'booking-form', NOW(), NOW(), 'product'),
(1, NOW(), NOW(), '商品販売用ページを既存サイトに埋め込み、オンライン販売を即スタート。決済システムと在庫管理機能付き。', '商品購入ページ埋め込み', '', 'publish', 'closed', 'closed', 'purchase-page', NOW(), NOW(), 'product');

-- 商品のメタデータ（価格、スラッグ、特徴など）
-- LP制作
INSERT INTO wp_postmeta (post_id, meta_key, meta_value)
SELECT ID, '_product_price', '80000' FROM wp_posts WHERE post_name = 'lp-creation' AND post_type = 'product';

INSERT INTO wp_postmeta (post_id, meta_key, meta_value)
SELECT ID, '_product_slug', 'lp-creation' FROM wp_posts WHERE post_name = 'lp-creation' AND post_type = 'product';

INSERT INTO wp_postmeta (post_id, meta_key, meta_value)
SELECT ID, '_product_features', 'a:5:{i:0;s:33:"最短5営業日で納品";i:1;s:54:"集客に特化した戦略的デザイン";i:2;s:30:"レスポンシブ対応";i:3;s:27:"SEO基本設定込み";i:4;s:30:"修正2回まで無料";}' FROM wp_posts WHERE post_name = 'lp-creation' AND post_type = 'product';

INSERT INTO wp_postmeta (post_id, meta_key, meta_value)
SELECT ID, '_product_is_active', '1' FROM wp_posts WHERE post_name = 'lp-creation' AND post_type = 'product';

INSERT INTO wp_postmeta (post_id, meta_key, meta_value)
SELECT ID, '_product_display_order', '1' FROM wp_posts WHERE post_name = 'lp-creation' AND post_type = 'product';

-- お問い合わせフォーム追加
INSERT INTO wp_postmeta (post_id, meta_key, meta_value)
SELECT ID, '_product_price', '30000' FROM wp_posts WHERE post_name = 'contact-form' AND post_type = 'product';

INSERT INTO wp_postmeta (post_id, meta_key, meta_value)
SELECT ID, '_product_slug', 'contact-form' FROM wp_posts WHERE post_name = 'contact-form' AND post_type = 'product';

INSERT INTO wp_postmeta (post_id, meta_key, meta_value)
SELECT ID, '_product_features', 'a:5:{i:0;s:45:"既存サイトへの組み込み";i:1;s:39:"自動返信メール設定";i:2;s:51:"管理画面での問い合わせ確認";i:3;s:30:"スパム対策実装";i:4;s:33:"最短3営業日で納品";}' FROM wp_posts WHERE post_name = 'contact-form' AND post_type = 'product';

INSERT INTO wp_postmeta (post_id, meta_key, meta_value)
SELECT ID, '_product_is_active', '1' FROM wp_posts WHERE post_name = 'contact-form' AND post_type = 'product';

INSERT INTO wp_postmeta (post_id, meta_key, meta_value)
SELECT ID, '_product_display_order', '2' FROM wp_posts WHERE post_name = 'contact-form' AND post_type = 'product';

-- 予約フォーム追加
INSERT INTO wp_postmeta (post_id, meta_key, meta_value)
SELECT ID, '_product_price', '30000' FROM wp_posts WHERE post_name = 'booking-form' AND post_type = 'product';

INSERT INTO wp_postmeta (post_id, meta_key, meta_value)
SELECT ID, '_product_slug', 'booking-form' FROM wp_posts WHERE post_name = 'booking-form' AND post_type = 'product';

INSERT INTO wp_postmeta (post_id, meta_key, meta_value)
SELECT ID, '_product_features', 'a:5:{i:0;s:45:"カレンダー式予約システム";i:1;s:36:"自動確認メール送信";i:2;s:27:"予約管理画面付き";i:3;s:27:"キャンセル機能";i:4;s:33:"最短3営業日で納品";}' FROM wp_posts WHERE post_name = 'booking-form' AND post_type = 'product';

INSERT INTO wp_postmeta (post_id, meta_key, meta_value)
SELECT ID, '_product_is_active', '1' FROM wp_posts WHERE post_name = 'booking-form' AND post_type = 'product';

INSERT INTO wp_postmeta (post_id, meta_key, meta_value)
SELECT ID, '_product_display_order', '3' FROM wp_posts WHERE post_name = 'booking-form' AND post_type = 'product';

-- 商品購入ページ埋め込み
INSERT INTO wp_postmeta (post_id, meta_key, meta_value)
SELECT ID, '_product_price', '30000' FROM wp_posts WHERE post_name = 'purchase-page' AND post_type = 'product';

INSERT INTO wp_postmeta (post_id, meta_key, meta_value)
SELECT ID, '_product_slug', 'purchase-page' FROM wp_posts WHERE post_name = 'purchase-page' AND post_type = 'product';

INSERT INTO wp_postmeta (post_id, meta_key, meta_value)
SELECT ID, '_product_features', 'a:5:{i:0;s:33:"決済システム統合";i:1;s:27:"商品カート機能";i:2;s:24:"在庫管理機能";i:3;s:24:"購入履歴確認";i:4;s:33:"最短3営業日で納品";}' FROM wp_posts WHERE post_name = 'purchase-page' AND post_type = 'product';

INSERT INTO wp_postmeta (post_id, meta_key, meta_value)
SELECT ID, '_product_is_active', '1' FROM wp_posts WHERE post_name = 'purchase-page' AND post_type = 'product';

INSERT INTO wp_postmeta (post_id, meta_key, meta_value)
SELECT ID, '_product_display_order', '4' FROM wp_posts WHERE post_name = 'purchase-page' AND post_type = 'product';

-- 固定ページの作成
INSERT INTO wp_posts (post_author, post_date, post_date_gmt, post_content, post_title, post_status, comment_status, ping_status, post_name, post_modified, post_modified_gmt, post_type)
VALUES
(1, NOW(), NOW(), '<p>Speedixは、最短・最速で成果を出すWeb制作サービスです。</p>', 'Speedixについて', 'publish', 'closed', 'closed', 'speedix-about', NOW(), NOW(), 'page'),
(1, NOW(), NOW(), '[contact-form-7 id="1" title="お問い合わせフォーム"]', 'お問い合わせ', 'publish', 'closed', 'closed', 'contact', NOW(), NOW(), 'page'),
(1, NOW(), NOW(), '<p>Yis株式会社の会社情報ページです。</p>', '会社情報', 'publish', 'closed', 'closed', 'about', NOW(), NOW(), 'page'),
(1, NOW(), NOW(), '', 'チェックアウト', 'publish', 'closed', 'closed', 'checkout', NOW(), NOW(), 'page'),
(1, NOW(), NOW(), '', 'ご注文ありがとうございます', 'publish', 'closed', 'closed', 'thank-you', NOW(), NOW(), 'page'),
(1, NOW(), NOW(), '<h2>プライバシーポリシー</h2><p>個人情報の取り扱いについて...</p>', 'プライバシーポリシー', 'publish', 'closed', 'closed', 'privacy', NOW(), NOW(), 'page'),
(1, NOW(), NOW(), '<h2>特定商取引法に基づく表記</h2><p>事業者名: Yis株式会社</p>', '特定商取引法表示', 'publish', 'closed', 'closed', 'terms', NOW(), NOW(), 'page');

-- ページテンプレートの設定
UPDATE wp_postmeta pm
JOIN wp_posts p ON pm.post_id = p.ID
SET pm.meta_value = 'page-checkout.php'
WHERE p.post_name = 'checkout' AND pm.meta_key = '_wp_page_template';

INSERT INTO wp_postmeta (post_id, meta_key, meta_value)
SELECT ID, '_wp_page_template', 'page-checkout.php' FROM wp_posts WHERE post_name = 'checkout' AND post_type = 'page'
ON DUPLICATE KEY UPDATE meta_value = 'page-checkout.php';

INSERT INTO wp_postmeta (post_id, meta_key, meta_value)
SELECT ID, '_wp_page_template', 'page-thank-you.php' FROM wp_posts WHERE post_name = 'thank-you' AND post_type = 'page'
ON DUPLICATE KEY UPDATE meta_value = 'page-thank-you.php';

INSERT INTO wp_postmeta (post_id, meta_key, meta_value)
SELECT ID, '_wp_page_template', 'page-contact.php' FROM wp_posts WHERE post_name = 'contact' AND post_type = 'page'
ON DUPLICATE KEY UPDATE meta_value = 'page-contact.php';

-- フロントページの設定
INSERT INTO wp_options (option_name, option_value, autoload)
VALUES ('show_on_front', 'page', 'yes'),
       ('page_on_front', (SELECT ID FROM wp_posts WHERE post_name = 'home' LIMIT 1), 'yes')
ON DUPLICATE KEY UPDATE option_value = VALUES(option_value);
