import { Resend } from "resend";
import { NextResponse } from "next/server";
import { isLikelyEmail } from "@/lib/contact/email";
import { isContactServiceInterest } from "@/lib/contact/service-options";

const MAX_MESSAGE_LENGTH = 4000;
const MAX_SOURCE_PAGE_LENGTH = 200;

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value: string): string {
  return `<tr>
    <td style="padding:8px 16px 8px 0;vertical-align:top;font-weight:600;color:#52525b;width:160px;">${escapeHtml(label)}</td>
    <td style="padding:8px 0;color:#18181b;">${escapeHtml(value) || "—"}</td>
  </tr>`;
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return NextResponse.json(
      { error: "Email is not configured on the server." },
      { status: 500 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const honeypot = typeof body.honeypot === "string" ? body.honeypot : "";
  if (honeypot.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phoneOrWhatsapp =
    typeof body.phoneOrWhatsapp === "string"
      ? body.phoneOrWhatsapp.trim()
      : "";
  const companyWebsite =
    typeof body.companyWebsite === "string" ? body.companyWebsite.trim() : "";
  const serviceInterestRaw =
    typeof body.serviceInterest === "string" ? body.serviceInterest.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const sourcePageRaw =
    typeof body.sourcePage === "string" ? body.sourcePage.trim() : "";

  if (!name) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }
  if (!isLikelyEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }
  if (!isContactServiceInterest(serviceInterestRaw)) {
    return NextResponse.json(
      { error: "Invalid service selection." },
      { status: 400 },
    );
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: `Message must be at most ${MAX_MESSAGE_LENGTH} characters.` },
      { status: 400 },
    );
  }

  const submittedAt = new Date().toISOString();
  const sourcePage = sourcePageRaw.slice(0, MAX_SOURCE_PAGE_LENGTH);

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:24px;background:#fafaf9;font-family:ui-sans-serif,system-ui,sans-serif;font-size:15px;line-height:1.5;color:#18181b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;margin:0 auto;background:#faf8f2;border:1px solid #e4e4e7;border-radius:12px;overflow:hidden;">
    <tr>
      <td style="height:3px;background:linear-gradient(90deg,transparent,oklch(0.86 0.22 142 / 0.55),transparent);"></td>
    </tr>
    <tr>
      <td style="padding:24px 24px 20px;">
        <p style="margin:0 0 16px;font-size:13px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#71717a;">New V1toV2 inquiry</p>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;font-size:14px;">
          ${row("Submitted at", submittedAt)}
          ${row("Source page", sourcePage || "—")}
          ${row("Name", name)}
          ${row("Email", email)}
          ${row("Phone / WhatsApp", phoneOrWhatsapp)}
          ${row("Company / website", companyWebsite)}
          ${row("Service interest", serviceInterestRaw)}
        </table>
        <p style="margin:20px 0 8px;font-size:13px;font-weight:600;color:#52525b;">Message</p>
        <div style="padding:14px 16px;background:#ffffff;border:1px solid #e4e4e7;border-radius:8px;white-space:pre-wrap;">${escapeHtml(message) || "—"}</div>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New V1toV2 inquiry — ${serviceInterestRaw}`,
    html,
  });

  if (error) {
    return NextResponse.json(
      { error: "Could not send email. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

export function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
