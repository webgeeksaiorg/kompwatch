import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createMagicToken, getMagicLinkUrl } from "@/lib/auth";
import { getResend, FROM_EMAIL } from "@/lib/resend";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = loginSchema.parse(body);

    const token = createMagicToken(email);
    const magicLink = getMagicLinkUrl(token);

    await getResend().emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Sign in to CompeteWatch",
      html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px;">
          <h2 style="color: #111827; font-size: 20px; margin-bottom: 16px;">Sign in to CompeteWatch</h2>
          <p style="color: #6b7280; font-size: 14px; line-height: 1.6;">
            Click the button below to sign in. This link expires in 15 minutes.
          </p>
          <a href="${magicLink}" style="display: inline-block; margin-top: 24px; padding: 12px 24px; background-color: #2563eb; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 600;">
            Sign in to CompeteWatch
          </a>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 32px;">
            If you didn't request this email, you can safely ignore it.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: err.errors[0].message },
        { status: 400 }
      );
    }
    console.error("Login error:", err);
    return NextResponse.json(
      { error: "Failed to send login email" },
      { status: 500 }
    );
  }
}
