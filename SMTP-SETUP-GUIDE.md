# Xserver SMTP メール送信設定ガイド

このガイドでは、Speedix のお問い合わせフォームから Xserver SMTP 経由でメール送信する設定手順を説明します。

---

## 📋 実装内容

### 1. Edge Function（send-contact-email）

**機能:**
- Xserver SMTP経由でメール送信
- Reply-To に顧客のメールアドレスを設定（ワンクリック返信可能）
- レート制限（1分に1回）
- honeypot によるスパム対策
- CORS セキュリティ
- サーバー側バリデーション

**エンドポイント:**
```
POST https://wzimevafczsfwxjighwv.supabase.co/functions/v1/send-contact-email
```

### 2. フロントエンド（Contact.tsx）

**機能:**
- 必須フィールド: name, email, message
- オプション: furigana, company_name, phone
- メールアドレス形式チェック
- メッセージ最大2000文字制限
- クライアント側レート制限（1分に1回）
- honeypot フィールド（非表示）
- ローディング状態表示
- 成功/失敗トースト

---

## 🔧 Supabase Secrets 設定

Edge Function で使用する環境変数を設定します。**パスワードは Xserver のメールアカウント管理画面で確認してください。**

### 設定コマンド

```bash
# Supabase CLI で Secrets を設定
supabase secrets set \
  SMTP_HOST="sv10XXX.xserver.jp" \
  SMTP_PORT="465" \
  SMTP_USERNAME="info@speedixweb.site" \
  SMTP_PASSWORD="YOUR_XSERVER_MAIL_PASSWORD" \
  CONTACT_FROM="info@speedixweb.site" \
  CONTACT_TO="info@speedixweb.site" \
  RATE_LIMIT_WINDOW_SEC="60" \
  RATE_LIMIT_MAX="1" \
  ALLOWED_ORIGINS="https://speedixweb.site,https://dev.speedixweb.site,http://localhost:5173"
```

### 環境変数の説明

| 変数名 | 説明 | 例 |
|--------|------|-----|
| `SMTP_HOST` | Xserver の SMTP サーバー | `sv10XXX.xserver.jp` または `mail.speedixweb.site` |
| `SMTP_PORT` | SMTP ポート（465=SSL/TLS, 587=STARTTLS） | `465` |
| `SMTP_USERNAME` | Xserver メールアカウント | `info@speedixweb.site` |
| `SMTP_PASSWORD` | メールアカウントのパスワード | Xserver で設定したパスワード |
| `CONTACT_FROM` | 送信元メールアドレス | `info@speedixweb.site` |
| `CONTACT_TO` | 宛先メールアドレス（社内通知用） | `info@speedixweb.site` |
| `RATE_LIMIT_WINDOW_SEC` | レート制限の時間枠（秒） | `60` |
| `RATE_LIMIT_MAX` | 時間枠内の最大リクエスト数 | `1` |
| `ALLOWED_ORIGINS` | 許可するオリジン（カンマ区切り） | `https://speedixweb.site,...` |

### Secrets の確認

```bash
# 設定された Secrets を確認
supabase secrets list
```

---

## 🚀 デプロイ手順

### 1. Edge Function のデプロイ

Edge Function は既にデプロイ済みです。

```bash
# 再デプロイする場合
supabase functions deploy send-contact-email
```

### 2. Secrets の設定

上記の「Supabase Secrets 設定」セクションのコマンドを実行してください。

### 3. フロントエンドのデプロイ

```bash
# ビルド
npm run build

# プレビュー（オプション）
npm run preview

# 本番デプロイ（使用しているホスティングサービスに応じて）
# 例: Vercel, Netlify, Cloudflare Pages など
```

---

## 📧 メール送信仕様

### 送信メール

**差出人（From）:**
```
info@speedixweb.site
```

**宛先（To）:**
```
info@speedixweb.site
```

**返信先（Reply-To）:**
```
{フォーム入力の email}
```

**件名:**
```
【お問い合わせ】Webフォームからの新着
```

**本文:**
- HTML形式とテキスト形式の両方で送信
- 以下の情報を含む:
  - お名前
  - ふりがな（入力時）
  - 会社名（入力時）
  - メールアドレス
  - 電話番号（入力時）
  - お問い合わせ内容
  - 受信日時（日本時間）

### 返信方法

受信したメールの「返信」ボタンをクリックすると、自動的に顧客のメールアドレス（Reply-To）に返信できます。

---

## 🔒 セキュリティ対策

### 1. CORS（クロスオリジン制限）

Edge Function では、`ALLOWED_ORIGINS` で指定したドメインからのリクエストのみ受け付けます。

**設定例:**
```
ALLOWED_ORIGINS="https://speedixweb.site,https://dev.speedixweb.site"
```

### 2. レート制限

**サーバー側:**
- IP アドレスと User-Agent の組み合わせで識別
- デフォルト: 1分に1回まで

**クライアント側:**
- ブラウザのタイムスタンプで制御
- 1分に1回まで送信可能

### 3. Honeypot（スパム対策）

- 非表示の `honeypot` フィールドを設置
- ボットが自動入力した場合、送信を拒否

### 4. バリデーション

**サーバー側:**
- 必須フィールドチェック
- メールアドレス形式検証
- メッセージ長（最大2000文字）

**クライアント側:**
- HTML5 バリデーション
- リアルタイム文字数カウント

---

## 🧪 テスト手順

### 正常系テスト

1. **基本送信テスト**
   ```
   1. フォームに全項目入力
   2. 送信ボタンをクリック
   3. 「送信完了」画面が表示される
   4. info@speedixweb.site にメールが届く
   5. メールの「返信」をクリックして顧客メールアドレスが設定されているか確認
   ```

2. **必須フィールドのみテスト**
   ```
   1. name, email, message のみ入力
   2. 送信が成功する
   3. メールが届く
   ```

3. **Reply-To テスト**
   ```
   1. フォームで email に test@example.com を入力
   2. 送信
   3. 受信メールの「返信」ボタンをクリック
   4. 宛先が test@example.com になっているか確認
   ```

### 異常系テスト

1. **レート制限テスト**
   ```
   1. フォームを送信
   2. 1分以内に再度送信を試みる
   3. エラーメッセージ「送信は1分に1回のみ可能です」が表示される
   ```

2. **バリデーションエラー**
   ```
   - 必須フィールド未入力 → エラー表示
   - 無効なメールアドレス → エラー表示
   - メッセージ2000文字超過 → エラー表示
   ```

3. **Honeypot テスト**
   ```
   1. ブラウザ開発者ツールで honeypot フィールドに値を入力
   2. 送信を試みる
   3. エラーが返却される
   ```

4. **CORS テスト**
   ```
   1. 許可されていないドメインから fetch を実行
   2. 403 Forbidden が返却される
   ```

---

## ⚙️ Xserver 側の設定確認

### 1. SMTP 認証

Xserver のメールアカウント設定で、SMTP 認証が有効になっているか確認してください。

**確認手順:**
```
1. Xserver サーバーパネルにログイン
2. 「メールアカウント設定」を開く
3. info@speedixweb.site のアカウントを確認
4. SMTP 認証が有効になっているか確認
```

### 2. SMTP サーバー情報

**SMTP サーバー:**
- `sv10XXX.xserver.jp`（サーバー番号は契約内容により異なる）
- または `mail.speedixweb.site`

**ポート番号:**
- **465**: SSL/TLS（推奨）
- **587**: STARTTLS

### 3. SPF レコード

送信メールが迷惑メール扱いされないよう、SPF レコードを設定してください。

**DNS 設定例:**
```
TXT @ "v=spf1 include:spf.xserver.jp ~all"
```

**確認コマンド:**
```bash
# SPF レコードを確認
nslookup -type=TXT speedixweb.site
```

### 4. DKIM 設定

Xserver では DKIM も設定可能です。セキュリティ向上のため設定を推奨します。

**設定手順:**
```
1. Xserver サーバーパネルにログイン
2. 「DKIM設定」を開く
3. speedixweb.site ドメインの DKIM を有効化
```

### 5. ポート切り替え（465 ⇔ 587）

デフォルトは 465（SSL/TLS）ですが、587（STARTTLS）に変更することも可能です。

**変更方法:**
```bash
# Secrets を更新
supabase secrets set SMTP_PORT="587"
```

**Edge Function のコード:**
```typescript
// 465 = SSL/TLS（デフォルト）
// 587 = STARTTLS
if (smtpPort === 465) {
  connectConfig.tls = true;
} else if (smtpPort === 587) {
  connectConfig.tls = false;
}
```

---

## 🐛 トラブルシューティング

### メールが送信されない

1. **Secrets の確認**
   ```bash
   supabase secrets list
   ```

2. **SMTP 認証エラー**
   - Xserver のメールアカウントとパスワードを再確認
   - パスワードに特殊文字が含まれる場合、エスケープが必要な場合があります

3. **Edge Function のログ確認**
   ```bash
   supabase functions logs send-contact-email
   ```

### メールが迷惑メールフォルダに入る

1. SPF レコードを設定
2. DKIM を有効化
3. DMARC ポリシーを設定（オプション）

### レート制限が効かない

- クライアント側とサーバー側の両方でレート制限を実装済み
- サーバー側は IP + User-Agent で識別
- VPN や Proxy を使用すると IP が変わる場合があります

### CORS エラー

1. `ALLOWED_ORIGINS` に正しいドメインが含まれているか確認
2. フロントエンドのドメインと一致しているか確認
3. プロトコル（http/https）も含めて完全一致が必要

---

## 📝 実装箇所の説明

### CORS 実装箇所

**Edge Function (index.ts):**
```typescript
// CORS ヘッダー定義
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

// OPTIONS リクエスト処理
if (req.method === "OPTIONS") {
  return new Response(null, {
    status: 200,
    headers: corsHeaders,
  });
}

// オリジンチェック
const origin = req.headers.get("origin");
if (!checkOrigin(origin)) {
  return new Response(
    JSON.stringify({ ok: false, error: "Origin not allowed" }),
    { status: 403, headers: corsHeaders }
  );
}
```

### レート制限実装箇所

**Edge Function (index.ts):**
```typescript
// レート制限チェック
const clientIp = req.headers.get("x-forwarded-for") || "unknown";
const userAgent = req.headers.get("user-agent") || "unknown";
const rateIdentifier = `${clientIp}-${userAgent}`;

if (!checkRateLimit(rateIdentifier)) {
  return new Response(
    JSON.stringify({ ok: false, error: "レート制限: 1分に1回のみ送信可能です" }),
    { status: 429, headers: corsHeaders }
  );
}
```

**フロントエンド (Contact.tsx):**
```typescript
const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

const handleSubmit = async (e: React.FormEvent) => {
  const now = Date.now();
  const timeSinceLastSubmit = now - lastSubmitTime;

  if (timeSinceLastSubmit < 60000) {
    const remainingSeconds = Math.ceil((60000 - timeSinceLastSubmit) / 1000);
    throw new Error(`送信は1分に1回のみ可能です。あと${remainingSeconds}秒お待ちください。`);
  }

  // ... 送信処理

  setLastSubmitTime(now);
};
```

---

## 📞 サポート

問題が解決しない場合は、以下の情報を含めてお問い合わせください:

1. エラーメッセージ
2. Edge Function のログ（`supabase functions logs send-contact-email`）
3. ブラウザのコンソールログ
4. 実行した手順

---

## ✅ チェックリスト

デプロイ前に以下を確認してください:

- [ ] Xserver でメールアカウント（info@speedixweb.site）を作成済み
- [ ] SMTP 認証が有効
- [ ] Supabase Secrets を設定済み
- [ ] SPF レコードを設定済み
- [ ] DKIM を有効化（推奨）
- [ ] Edge Function がデプロイ済み
- [ ] フロントエンドがビルド・デプロイ済み
- [ ] 正常系テストが成功
- [ ] レート制限が動作している
- [ ] Reply-To が正しく設定されている

---

## 📚 参考資料

- [Xserver メール設定マニュアル](https://www.xserver.ne.jp/manual/)
- [Supabase Edge Functions ドキュメント](https://supabase.com/docs/guides/functions)
- [Deno SMTP クライアント](https://deno.land/x/smtp)
- [SPF レコード設定ガイド](https://www.xserver.ne.jp/manual/man_mail_spf.php)

---

**実装完了日:** 2025年10月31日
**バージョン:** 1.0.0
