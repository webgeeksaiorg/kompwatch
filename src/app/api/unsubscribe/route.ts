import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

/**
 * GET /api/unsubscribe?token=<leadId>
 *
 * CAN-SPAM / CASL one-click unsubscribe for lead nurture emails.
 * The `token` is the EmailLead.id (cuid — unguessable, 25 chars).
 *
 * On success: marks the lead as unsubscribed and returns a confirmation page.
 * On invalid/missing token: returns a 400 error page.
 */
export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  const html = (title: string, body: string) => `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>${title} — KompWatch</title>
  <style>
    body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f9fafb;}
    .wrap{max-width:480px;margin:80px auto;padding:0 24px;}
    .card{background:#fff;border-radius:8px;padding:32px;box-shadow:0 1px 3px rgba(0,0,0,0.1);text-align:center;}
    h1{font-size:22px;color:#111;margin:0 0 12px;}
    p{color:#555;font-size:15px;line-height:1.6;margin:0 0 16px;}
    a{color:#2563eb;text-decoration:none;}
  </style>
</head>
<body>
  <div class="wrap">
    <div class="card">
      ${body}
    </div>
  </div>
</body>
</html>`;

  if (!token) {
    return new NextResponse(
      html(
        "Invalid unsubscribe link",
        `<h1>Invalid link</h1>
         <p>This unsubscribe link is missing a required token. Please contact
            <a href="mailto:support@kompwatch.com">support@kompwatch.com</a> if you'd like to unsubscribe.</p>`
      ),
      { status: 400, headers: { "Content-Type": "text/html" } }
    );
  }

  const lead = await db.emailLead.findUnique({
    where: { id: token },
    select: { id: true, unsubscribed: true },
  });

  if (!lead) {
    return new NextResponse(
      html(
        "Invalid unsubscribe link",
        `<h1>Link not found</h1>
         <p>This unsubscribe link is invalid or has expired. Contact
            <a href="mailto:support@kompwatch.com">support@kompwatch.com</a> if you need help.</p>`
      ),
      { status: 404, headers: { "Content-Type": "text/html" } }
    );
  }

  if (!lead.unsubscribed) {
    await db.emailLead.update({
      where: { id: lead.id },
      data: { unsubscribed: true },
    });
  }

  return new NextResponse(
    html(
      "You've been unsubscribed",
      `<h1>You've been unsubscribed</h1>
       <p>You've been removed from KompWatch marketing emails and won't receive any further messages from this sequence.</p>
       <p>If this was a mistake, or you'd like to keep track of competitors, you can always
          <a href="https://kompwatch.com/free-snapshot">run a free snapshot</a> anytime — no emails required.</p>`
    ),
    { status: 200, headers: { "Content-Type": "text/html" } }
  );
}
