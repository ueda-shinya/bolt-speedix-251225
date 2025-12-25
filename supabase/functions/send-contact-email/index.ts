import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  furigana?: string;
  company_name?: string;
  phone?: string;
  honeypot?: string;
}

interface RateLimitEntry {
  count: number;
  timestamp: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const windowSec = parseInt(Deno.env.get("RATE_LIMIT_WINDOW_SEC") || "60");
  const maxRequests = parseInt(Deno.env.get("RATE_LIMIT_MAX") || "1");
  const windowMs = windowSec * 1000;

  const entry = rateLimitMap.get(identifier);

  if (!entry || now - entry.timestamp > windowMs) {
    rateLimitMap.set(identifier, { count: 1, timestamp: now });
    return true;
  }

  if (entry.count >= maxRequests) {
    return false;
  }

  entry.count++;
  return true;
}

function cleanupRateLimit() {
  const now = Date.now();
  const windowSec = parseInt(Deno.env.get("RATE_LIMIT_WINDOW_SEC") || "60");
  const windowMs = windowSec * 1000;

  for (const [key, entry] of rateLimitMap.entries()) {
    if (now - entry.timestamp > windowMs) {
      rateLimitMap.delete(key);
    }
  }
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateFormData(data: ContactFormData): { valid: boolean; error?: string } {
  if (!data.name || data.name.trim().length === 0) {
    return { valid: false, error: "お名前を入力してください" };
  }

  if (!data.email || !validateEmail(data.email)) {
    return { valid: false, error: "有効なメールアドレスを入力してください" };
  }

  if (!data.message || data.message.trim().length === 0) {
    return { valid: false, error: "お問い合わせ内容を入力してください" };
  }

  if (data.message.length > 2000) {
    return { valid: false, error: "お問い合わせ内容は2000文字以内で入力してください" };
  }

  if (data.honeypot && data.honeypot.length > 0) {
    return { valid: false, error: "Invalid submission" };
  }

  return { valid: true };
}

function getAllowedOrigin(origin: string | null): string | null {
  if (!origin) return null;

  const allowedOriginsStr = Deno.env.get("ALLOWED_ORIGINS") || "";
  if (!allowedOriginsStr) return null;

  const allowedOrigins = allowedOriginsStr.split(",").map(o => o.trim());

  return allowedOrigins.includes(origin) ? origin : null;
}

function generateEmailHTML(data: ContactFormData, timestamp: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
    .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
    .field { margin-bottom: 20px; }
    .label { font-weight: bold; color: #1f2937; margin-bottom: 5px; }
    .value { background: white; padding: 10px; border-radius: 5px; border: 1px solid #d1d5db; }
    .footer { background: #f3f4f6; padding: 20px; text-align: center; color: #6b7280; font-size: 12px; border-radius: 0 0 10px 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 24px;">【お問い合わせ】Webフォームからの新着</h1>
    </div>
    <div class="content">
      <p style="margin-top: 0;">以下の内容でお問い合わせがありました。</p>

      <div class="field">
        <div class="label">お名前</div>
        <div class="value">${data.name}</div>
      </div>

      ${data.furigana ? `
      <div class="field">
        <div class="label">ふりがな</div>
        <div class="value">${data.furigana}</div>
      </div>
      ` : ''}

      ${data.company_name ? `
      <div class="field">
        <div class="label">会社名</div>
        <div class="value">${data.company_name}</div>
      </div>
      ` : ''}

      <div class="field">
        <div class="label">メールアドレス</div>
        <div class="value">${data.email}</div>
      </div>

      ${data.phone ? `
      <div class="field">
        <div class="label">電話番号</div>
        <div class="value">${data.phone}</div>
      </div>
      ` : ''}

      <div class="field">
        <div class="label">お問い合わせ内容</div>
        <div class="value" style="white-space: pre-wrap;">${data.message}</div>
      </div>

      <div class="field">
        <div class="label">受信日時</div>
        <div class="value">${timestamp}</div>
      </div>
    </div>
    <div class="footer">
      <p>このメールは Speedix お問い合わせフォームから自動送信されています。</p>
      <p>返信する場合は、「返信」ボタンをクリックしてください。</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

function generateEmailText(data: ContactFormData, timestamp: string): string {
  let text = `【お問い合わせ】Webフォームからの新着\n\n`;
  text += `以下の内容でお問い合わせがありました。\n\n`;
  text += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
  text += `■ お名前\n${data.name}\n\n`;

  if (data.furigana) {
    text += `■ ふりがな\n${data.furigana}\n\n`;
  }

  if (data.company_name) {
    text += `■ 会社名\n${data.company_name}\n\n`;
  }

  text += `■ メールアドレス\n${data.email}\n\n`;

  if (data.phone) {
    text += `■ 電話番号\n${data.phone}\n\n`;
  }

  text += `■ お問い合わせ内容\n${data.message}\n\n`;
  text += `■ 受信日時\n${timestamp}\n\n`;
  text += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
  text += `このメールは Speedix お問い合わせフォームから自動送信されています。\n`;
  text += `返信する場合は、このメールに返信してください。\n`;

  return text;
}

async function sendEmail(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const smtpHost = Deno.env.get("SMTP_HOST");
    const smtpPort = parseInt(Deno.env.get("SMTP_PORT") || "465");
    const smtpUsername = Deno.env.get("SMTP_USERNAME");
    const smtpPassword = Deno.env.get("SMTP_PASSWORD");
    const contactFrom = Deno.env.get("CONTACT_FROM") || "info@speedixweb.site";
    const contactTo = Deno.env.get("CONTACT_TO") || "info@speedixweb.site";

    if (!smtpHost || !smtpUsername || !smtpPassword) {
      throw new Error("SMTP configuration is missing");
    }

    const timestamp = new Date().toLocaleString("ja-JP", {
      timeZone: "Asia/Tokyo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });

    const htmlBody = generateEmailHTML(data, timestamp);
    const textBody = generateEmailText(data, timestamp);

    const client = new SmtpClient();

    if (smtpPort === 465) {
      await client.connectTLS({
        hostname: smtpHost,
        port: smtpPort,
        username: smtpUsername,
        password: smtpPassword,
      });
    } else if (smtpPort === 587) {
      await client.connect({
        hostname: smtpHost,
        port: smtpPort,
        username: smtpUsername,
        password: smtpPassword,
      });
    } else {
      throw new Error(`Unsupported SMTP port: ${smtpPort}. Use 465 or 587.`);
    }

    await client.send({
      from: contactFrom,
      to: contactTo,
      replyTo: data.email,
      subject: "【お問い合わせ】Webフォームからの新着",
      content: textBody,
      html: htmlBody,
    });

    await client.close();

    return { success: true };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, error: error.message || "メール送信に失敗しました" };
  }
}

Deno.serve(async (req: Request) => {
  const origin = req.headers.get("origin");
  const allowedOrigin = getAllowedOrigin(origin);

  const corsHeaders = {
    "Access-Control-Allow-Origin": allowedOrigin || "null",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
  };

  try {
    if (req.method === "OPTIONS") {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ ok: false, error: "Method not allowed" }),
        {
          status: 405,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    if (!allowedOrigin) {
      return new Response(
        JSON.stringify({ ok: false, error: "Origin not allowed" }),
        {
          status: 403,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const clientIp = req.headers.get("x-forwarded-for") || req.headers.get("cf-connecting-ip") || "unknown";
    const userAgent = req.headers.get("user-agent") || "unknown";
    const rateIdentifier = `${clientIp}-${userAgent}`;

    cleanupRateLimit();

    if (!checkRateLimit(rateIdentifier)) {
      return new Response(
        JSON.stringify({ ok: false, error: "レート制限: 1分に1回のみ送信可能です" }),
        {
          status: 429,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const formData: ContactFormData = await req.json();

    const validation = validateFormData(formData);
    if (!validation.valid) {
      return new Response(
        JSON.stringify({ ok: false, error: validation.error }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const result = await sendEmail(formData);

    if (!result.success) {
      return new Response(
        JSON.stringify({ ok: false, error: result.error }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(
      JSON.stringify({ ok: true, message: "メールを送信しました" }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ ok: false, error: "サーバーエラーが発生しました" }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});