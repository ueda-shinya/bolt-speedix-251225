# Xserver デプロイメントガイド

このガイドでは、Speedix サイトを Xserver にアップロードして公開する手順を説明します。

---

## 📦 デプロイパッケージ内容

`speedix-xserver-deploy.tar.gz` には以下のファイルが含まれています：

```
speedix-xserver-deploy.tar.gz
├── dist/                      # ビルド済みファイル（公開ディレクトリ）
│   ├── index.html            # メインHTMLファイル
│   ├── assets/               # CSS/JSファイル
│   │   ├── index-*.css
│   │   └── index-*.js
│   ├── *.png                 # 画像ファイル
│   └── *.jpg
├── .env                       # 環境変数（参照用、サーバーには不要）
├── SMTP-SETUP-GUIDE.md       # メール設定ガイド
└── DEPLOYMENT-GUIDE.md       # デプロイメントガイド
```

---

## 🚀 Xserver へのアップロード手順

### 方法1: FTP クライアントを使用（推奨）

#### ステップ1: FTPクライアントの準備

**推奨FTPクライアント:**
- FileZilla（Windows/Mac/Linux）
- Cyberduck（Mac）
- WinSCP（Windows）

#### ステップ2: FTP接続情報の取得

1. Xserver サーバーパネルにログイン
2. 「アカウント」→「サーバー情報」を開く
3. 以下の情報を確認：
   - **FTPホスト名**: `sv10XXX.xserver.jp`
   - **FTPユーザー名**: サーバーID
   - **FTPパスワード**: サーバーパスワード
   - **ポート**: 21（FTP）または 22（SFTP推奨）

#### ステップ3: ファイルのアップロード

1. **ローカルで解凍**
   ```bash
   tar -xzf speedix-xserver-deploy.tar.gz
   ```

2. **FTPクライアントで接続**
   - ホスト: `sv10XXX.xserver.jp`
   - ユーザー名: サーバーID
   - パスワード: サーバーパスワード
   - ポート: 22（SFTP）

3. **アップロード先ディレクトリ**
   ```
   /home/サーバーID/speedixweb.site/public_html/
   ```

4. **distフォルダ内のファイルをアップロード**
   - `dist/` フォルダ内の**すべてのファイルとフォルダ**を `public_html/` にアップロード
   - **重要**: `dist` フォルダ自体ではなく、中身をアップロード

   **正しい構造:**
   ```
   public_html/
   ├── index.html
   ├── assets/
   │   ├── index-*.css
   │   └── index-*.js
   ├── *.png
   └── *.jpg
   ```

5. **パーミッション設定**
   - ファイル: 644（rw-r--r--）
   - ディレクトリ: 755（rwxr-xr-x）
   - 通常は自動設定されるため変更不要

---

### 方法2: Xserver ファイルマネージャーを使用

#### ステップ1: ファイルマネージャーにアクセス

1. Xserver サーバーパネルにログイン
2. 「ファイル管理」→「ファイルマネージャー」をクリック
3. `speedixweb.site/public_html/` に移動

#### ステップ2: ファイルのアップロード

1. ローカルで `speedix-xserver-deploy.tar.gz` を解凍
2. `dist/` フォルダ内のすべてのファイルを選択
3. ファイルマネージャーの「アップロード」ボタンをクリック
4. ファイルをドラッグ&ドロップまたは選択してアップロード

---

### 方法3: コマンドライン（SSH）を使用

#### ステップ1: SSH接続

```bash
# SSH接続（Xserverではポート10022を使用）
ssh -p 10022 サーバーID@sv10XXX.xserver.jp
```

#### ステップ2: ファイルのアップロード（SCP）

```bash
# ローカルからXserverにファイルをアップロード
scp -P 10022 speedix-xserver-deploy.tar.gz サーバーID@sv10XXX.xserver.jp:~/

# SSH接続後、解凍して配置
ssh -p 10022 サーバーID@sv10XXX.xserver.jp

# 解凍
cd ~
tar -xzf speedix-xserver-deploy.tar.gz

# 既存ファイルをバックアップ（初回は不要）
mv speedixweb.site/public_html speedixweb.site/public_html.backup

# distフォルダの中身をpublic_htmlに配置
mv dist speedixweb.site/public_html

# パーミッション設定
chmod -R 755 speedixweb.site/public_html
find speedixweb.site/public_html -type f -exec chmod 644 {} \;
```

---

## 🔧 デプロイ後の設定

### 1. .htaccess の設定（SPA対応）

React Router を使用しているため、`.htaccess` ファイルが必要です。

**public_html/.htaccess に以下を記述:**

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # HTTPSリダイレクト（推奨）
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  # 既存のファイルやディレクトリでない場合、index.htmlにリダイレクト
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# キャッシュ設定
<IfModule mod_expires.c>
  ExpiresActive On

  # 画像
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"

  # CSS/JS
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"

  # フォント
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType font/woff "access plus 1 year"
</IfModule>

# Gzip圧縮
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript application/json
</IfModule>

# セキュリティヘッダー
<IfModule mod_headers.c>
  # XSS保護
  Header set X-XSS-Protection "1; mode=block"

  # クリックジャッキング対策
  Header set X-Frame-Options "SAMEORIGIN"

  # MIMEタイプスニッフィング防止
  Header set X-Content-Type-Options "nosniff"

  # Referrer Policy
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

**FTPで `.htaccess` をアップロード:**
```bash
# ローカルで .htaccess ファイルを作成後、public_html/ にアップロード
```

### 2. SSL証明書の設定

1. Xserver サーバーパネルにログイン
2. 「ドメイン」→「SSL設定」を開く
3. `speedixweb.site` を選択
4. 「独自SSL設定を追加する」をクリック
5. 無料SSL（Let's Encrypt）を有効化
6. 反映まで最大1時間待機

### 3. 環境変数の確認

**重要**: `.env` ファイルはサーバーにアップロードする必要はありません。

ビルド時に環境変数は JavaScript にバンドルされています：
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

これらは既に `dist/assets/index-*.js` に含まれています。

---

## ✅ 動作確認

### 1. サイトへのアクセス

ブラウザで以下のURLにアクセス:
```
https://speedixweb.site
```

### 2. 確認項目

- [ ] トップページが表示される
- [ ] ヘッダーメニューが正しく表示される
- [ ] 各ページへのリンクが動作する
  - [ ] Speedixについて
  - [ ] 提供内容
  - [ ] 会社情報
  - [ ] お問い合わせ
- [ ] 画像が正しく表示される
- [ ] フォーム送信が動作する
- [ ] カートに商品を追加できる
- [ ] HTTPSで接続できる

### 3. React Routerの確認

ブラウザで直接サブページにアクセスして確認:
```
https://speedixweb.site/products
https://speedixweb.site/contact
https://speedixweb.site/about
```

404エラーが出る場合は、`.htaccess` の設定を確認してください。

---

## 🔄 更新手順

サイトを更新する場合:

1. **ローカルで変更を加える**
2. **ビルド**
   ```bash
   npm run build
   ```
3. **FTPで `dist/` の中身をアップロード**
   - 既存ファイルを上書き
4. **ブラウザのキャッシュをクリア**
   ```
   Ctrl + F5（Windows）
   Cmd + Shift + R（Mac）
   ```

---

## 📧 メール送信の設定

お問い合わせフォームのメール送信機能を有効化するには、別途 Supabase Edge Function の設定が必要です。

詳細は `SMTP-SETUP-GUIDE.md` を参照してください。

**必要な手順:**
1. Supabase Secrets の設定
2. Edge Function のデプロイ（既に完了）
3. Xserver SMTP 情報の入力

---

## 🐛 トラブルシューティング

### ページが表示されない

**原因1: ファイル構造が間違っている**
```
❌ public_html/dist/index.html
✅ public_html/index.html
```

**原因2: パーミッションが間違っている**
```bash
# SSH接続して修正
chmod -R 755 speedixweb.site/public_html
find speedixweb.site/public_html -type f -exec chmod 644 {} \;
```

### サブページで404エラー

**原因: .htaccess が設定されていない**

上記の `.htaccess` 設定を `public_html/` に配置してください。

### 画像が表示されない

**原因1: 画像ファイルがアップロードされていない**

`dist/` 内のすべての `.png`, `.jpg` ファイルをアップロードしてください。

**原因2: パス指定が間違っている**

画像は `public_html/` 直下に配置されている必要があります。

### CORSエラー

**原因: Supabase のオリジン設定**

Supabase Edge Function の `ALLOWED_ORIGINS` に本番ドメインを追加:
```bash
supabase secrets set ALLOWED_ORIGINS="https://speedixweb.site,http://localhost:5173"
```

### メール送信が動作しない

`SMTP-SETUP-GUIDE.md` を参照して、以下を確認:
- [ ] Supabase Secrets が設定されている
- [ ] SMTP認証情報が正しい
- [ ] Edge Function がデプロイされている

---

## 📊 パフォーマンス最適化

### 1. 画像の最適化

```bash
# ImageMagick で画像を最適化（オプション）
mogrify -strip -quality 85 -resize 1920x1080\> *.jpg
mogrify -strip -quality 85 *.png
```

### 2. Gzip圧縮の確認

```bash
# 圧縮が有効か確認
curl -H "Accept-Encoding: gzip" -I https://speedixweb.site
```

出力に `Content-Encoding: gzip` があればOK

### 3. キャッシュの確認

```bash
# キャッシュヘッダーを確認
curl -I https://speedixweb.site/assets/index-*.css
```

`Cache-Control` ヘッダーがあればOK

---

## 🔒 セキュリティチェックリスト

- [ ] HTTPS（SSL）が有効
- [ ] `.env` ファイルをアップロードしていない
- [ ] パーミッションが適切（ファイル: 644、ディレクトリ: 755）
- [ ] セキュリティヘッダーが設定されている（.htaccess）
- [ ] Supabase Anon Key のみ使用（Service Role Key は非公開）
- [ ] SPF/DKIM レコードが設定されている

---

## 📞 サポート

### Xserver サポート

- **サポートサイト**: https://www.xserver.ne.jp/support/
- **電話サポート**: 06-6147-2580（平日10:00〜18:00）
- **メールサポート**: support@xserver.ne.jp

### よくある質問

**Q: アップロード後、反映されるまでどのくらいかかりますか？**
A: 通常は即座に反映されますが、DNSの場合は最大48時間かかることがあります。

**Q: 既存サイトがある場合、どうすればいいですか？**
A: バックアップを取ってから上書きするか、サブディレクトリにアップロードしてください。

**Q: データベースは必要ですか？**
A: このサイトはSupabaseを使用しているため、Xserver側でのデータベース設定は不要です。

---

## 🎉 デプロイ完了

おめでとうございます！Speedixサイトが正常にデプロイされました。

**公開URL:**
```
https://speedixweb.site
```

今後の更新は、ローカルで変更 → ビルド → アップロードの流れで行ってください。

---

**最終更新日**: 2025年11月1日
**バージョン**: 1.0.0
