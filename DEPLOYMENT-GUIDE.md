# Speedix 本番環境デプロイガイド

## 📦 配布ファイル
- `speedix-production.tar.gz` (114KB)

## 🚀 デプロイ手順

### 1. ファイルをサーバーにアップロード
FTPまたはSSHで `speedix-production.tar.gz` をサーバーにアップロードします。

### 2. ファイルを解凍
```bash
tar -xzf speedix-production.tar.gz
```

### 3. ファイルを公開ディレクトリに配置
解凍された `dist` フォルダの内容を公開ディレクトリ（例: `public_html`, `www`, `htdocs`）にコピーします。

```bash
# 例: Apache/Nginxの公開ディレクトリにコピー
cp -r dist/* /var/www/html/
```

または、`dist`フォルダ自体をドキュメントルートに設定します。

### 4. 環境変数の設定
`.env` ファイルがアーカイブに含まれていますが、セキュリティ上、サーバー側で環境変数を設定することを推奨します。

アプリケーションで使用する環境変数:
- `VITE_SUPABASE_URL`: Supabase プロジェクトURL
- `VITE_SUPABASE_ANON_KEY`: Supabase 匿名キー

### 5. Webサーバー設定

#### Apache の場合
`dist` ディレクトリに `.htaccess` を作成（SPAルーティング用）:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx の場合
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### 6. ファイルパーミッション設定
```bash
# ディレクトリ
find /var/www/html -type d -exec chmod 755 {} \;

# ファイル
find /var/www/html -type f -exec chmod 644 {} \;
```

## 📋 必要要件

### サーバー要件
- Webサーバー (Apache 2.4+, Nginx 1.18+, など)
- HTTPS対応（推奨）
- モダンブラウザ対応

### 外部サービス
- **Supabase**: データベース・認証
  - プロジェクトURL
  - 匿名キー
  - データベースマイグレーション実行済み

## 🗄️ データベースセットアップ

Supabaseダッシュボードで以下のマイグレーションを実行してください:

```sql
-- supabase/migrations/20251014063037_create_products_and_orders.sql
-- の内容を実行
```

## ✅ 動作確認

1. ブラウザでサイトにアクセス
2. トップページが表示されることを確認
3. 商品一覧ページ (`/products`) で商品が表示されることを確認
4. カート機能が動作することを確認
5. お問い合わせフォームが送信できることを確認

## 📱 含まれる機能

- ✅ レスポンシブデザイン
- ✅ 商品カタログ
- ✅ ショッピングカート
- ✅ チェックアウト
- ✅ お問い合わせフォーム
- ✅ Supabase統合

## 🔒 セキュリティチェックリスト

- [ ] HTTPS有効化
- [ ] 環境変数の適切な管理
- [ ] Supabase RLSポリシー確認
- [ ] CSPヘッダー設定（推奨）
- [ ] ファイルパーミッション確認

## 🆘 トラブルシューティング

### ページが表示されない
- Webサーバーの設定を確認
- ドキュメントルートが正しいか確認
- ブラウザのコンソールでエラーを確認

### 商品が表示されない
- Supabaseの接続情報を確認
- データベースマイグレーションが実行されているか確認
- ブラウザの開発者ツールでネットワークエラーを確認

### ルーティングが動作しない
- `.htaccess` (Apache) または Nginx設定でSPAリライトルールを確認

## 📞 サポート

問題が解決しない場合は、以下を確認してください:
- ブラウザのコンソールエラー
- サーバーのエラーログ
- Supabaseダッシュボードのログ
