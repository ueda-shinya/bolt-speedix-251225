# Xサーバーデプロイ手順

このファイルは、Speedixサイトをエックスサーバーにデプロイする手順を説明します。

## デプロイパッケージの内容

`speedix-xserver-final.tar.gz` には以下が含まれています：

- `dist/` - ビルドされた本番用ファイル（HTML, CSS, JavaScript）
- `dist/.htaccess` - Apache設定ファイル（リダイレクトとセキュリティ設定）
- `dist/assets/` - CSS/JSバンドルファイル
- `dist/img/` - 画像ファイル

## デプロイ手順

### 1. ファイルのダウンロード

プロジェクトルートから `speedix-xserver-final.tar.gz` をダウンロードします。

### 2. Xサーバーへのアップロード

#### FTPを使用する場合：

1. FTPクライアント（FileZilla等）でXサーバーに接続
2. 対象ドメインのドキュメントルートに移動
   - 通常: `/home/[アカウント名]/[ドメイン名]/public_html/`
3. `speedix-xserver-final.tar.gz` をアップロード
4. XサーバーのファイルマネージャーまたはSSHでログイン
5. 以下のコマンドを実行:

```bash
cd /home/[アカウント名]/[ドメイン名]/public_html/
tar -xzf speedix-xserver-final.tar.gz
mv dist/* .
mv dist/.htaccess .
rm -rf dist
rm speedix-xserver-final.tar.gz
```

#### ファイルマネージャーを使用する場合：

1. Xサーバーパネルにログイン
2. 「ファイルマネージャー」を開く
3. 対象ドメインのpublic_htmlフォルダに移動
4. `speedix-xserver-final.tar.gz` をアップロード
5. アップロードしたファイルを選択し「解凍」をクリック
6. `dist/` フォルダ内のすべてのファイルを `public_html/` に移動
7. `.htaccess` ファイルも忘れずに移動（隠しファイルの表示を有効にする必要があります）
8. 空の `dist/` フォルダと `speedix-xserver-final.tar.gz` を削除

### 3. .htaccess の確認

`.htaccess` ファイルが正しく配置されていることを確認してください。このファイルには以下が含まれています：

- React Routerのためのリダイレクト設定
- セキュリティヘッダー
- Gzip圧縮設定
- ブラウザキャッシュ設定

### 4. 環境変数の設定

Supabaseの環境変数は、ビルド時にバンドルファイルに含まれています。
変更が必要な場合は、ローカルで `.env` ファイルを更新し、再ビルドしてください。

### 5. 動作確認

1. ブラウザでサイトにアクセス
2. 各ページ（Home, About, Products, Contact等）が正しく表示されることを確認
3. お問い合わせフォームの動作確認
4. 画像の読み込み確認

## トラブルシューティング

### ページが404エラーになる

- `.htaccess` ファイルが正しく配置されているか確認
- Apache の `mod_rewrite` が有効になっているか確認（Xサーバーでは通常有効）

### 画像が表示されない

- 画像ファイルのパーミッションを確認（644推奨）
- ブラウザのコンソールでエラーを確認

### CSSが適用されない

- `assets/` フォルダが正しく配置されているか確認
- ブラウザキャッシュをクリア

### お問い合わせフォームが動作しない

- Supabase Edge Functionが正しくデプロイされているか確認
- Supabaseダッシュボードで環境変数が設定されているか確認
- ブラウザのコンソールでエラーメッセージを確認

## SSLの設定

Xサーバーで無料SSLを有効にすることを強く推奨します：

1. Xサーバーパネルにログイン
2. 「SSL設定」を開く
3. 対象ドメインを選択
4. 「無料独自SSL設定」タブで「追加する」をクリック

SSL設定後、`.htaccess` のHTTPSリダイレクト設定を有効にしてください：

```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## 更新手順

サイトを更新する場合：

1. ローカルで変更を加える
2. `npm run build` を実行
3. 新しいtarファイルを作成
4. 上記のデプロイ手順を繰り返す

## サポート

問題が発生した場合：

1. ブラウザのコンソール（F12）でエラーを確認
2. Xサーバーのエラーログを確認
3. Supabaseのログを確認（Edge Functions）

---

**重要**: デプロイ前に必ずバックアップを取得してください。
