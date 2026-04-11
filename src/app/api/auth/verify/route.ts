import { NextRequest, NextResponse } from "next/server";
import { verifyMagicToken, createSession } from "@/lib/auth";
import { db } from "@/lib/db";

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

  if (!user) {
    user = await db.user.create({
      data: { email },
    });
  }

  // Update last login
  await db.user.update({
    where: { id: user.id },
    data: { lastLoginAt: new Date() },
  });

  // Create session and set cookie
  await createSession(user.id);

  return NextResponse.redirect(new URL("/dashboard", req.url));
}
