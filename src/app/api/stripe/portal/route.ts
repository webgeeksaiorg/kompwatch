import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { getStripe } from "@/lib/stripe";

export async function POST() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!user.stripeCustomerId) {
    return NextResponse.json(
      { error: "No billing account" },
      { status: 400 }
    );
  }

  const stripe = getStripe();
  const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";

  const session = await stripe.billingPortal.sessions.create({
    customer: user.stripeCustomerId,
    return_url: `${baseUrl}/settings`,
  });

  return NextResponse.json({ url: session.url });
}
