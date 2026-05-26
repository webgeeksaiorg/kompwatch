import { NextRequest, NextResponse } from "next/server";
import { verifyMagicToken, createSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { getResend, FROM_EMAIL } from "@/lib/resend";
import { buildWelcomeEmail } from "@/lib/onboarding";
import { buildWelcomeDigest } from "@/lib/digest";
import { seedDemoCompetitor } from "@/lib/demo-seed";
import { trackEvent } from "@/lib/plausible";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/login?error=missing_token", req.url));
  }

  const email = verifyMagicToken(token);

  if (!email) {
    return NextResponse.redirect(new URL("/login?error=invalid_token", req.url));
  }

  // Find or create user
  let user = await db.user.findUnique({ where: { email } });

  const isNewUser = !user;

  if (!user) {
    user = await db.user.create({
      data: { email },
    });
  }

  // Send welcome email and seed demo data for new signups
  if (isNewUser) {
    try {
      const resend = getResend();
      const welcomeEmail = buildWelcomeEmail(user);
      await resend.emails.send({
        from: FROM_EMAIL,
        to: user.email,
        subject: welcomeEmail.subject,
        html: welcomeEmail.html,
        text: welcomeEmail.text,
      });
      await db.user.update({
        where: { id: user.id },
        data: { onboardingStep: 1 },
      });
    } catch {
      // Welcome email is non-critical — don't block signup
      // The cron job will pick it up on the next run
    }

    // Pre-seed a demo competitor so the dashboard shows immediate value
    try {
      await seedDemoCompetitor(user.id);
    } catch {
      // Demo seed is non-critical — don't block signup
    }

    // Send a welcome digest with demo data so users see what digests look like
    try {
      const resend = getResend();
      const welcomeDigest = buildWelcomeDigest(user);
      await resend.emails.send({
        from: FROM_EMAIL,
        to: user.email,
        subject: welcomeDigest.subject,
        html: welcomeDigest.html,
        text: welcomeDigest.text,
      });
    } catch {
      // Welcome digest is non-critical — don't block signup
    }
  }

  // Update last login
  await db.user.update({
    where: { id: user.id },
    data: { lastLoginAt: new Date() },
  });

  // Create session and set cookie
  await createSession(user.id);

  const dashboardUrl = new URL("/dashboard", req.url);
  if (isNewUser) {
    dashboardUrl.searchParams.set("new", "1");

    // Server-side signup event — fires even when client-side Plausible is blocked
    const source = req.nextUrl.searchParams.get("utm_source") || "";
    const props: Record<string, string> = { plan: "FREE" };
    if (source) props.source = source;
    trackEvent("signup", "/dashboard", props);
  }
  return NextResponse.redirect(dashboardUrl);
}
