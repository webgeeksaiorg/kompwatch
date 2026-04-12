import { requireAuth } from "@/lib/auth";
import { db } from "@/lib/db";
import { PLANS } from "@/lib/stripe";
import { ManageBillingButton } from "./manage-billing-button";

export default async function SettingsPage() {
  const user = await requireAuth();

  const competitorCount = await db.competitor.count({
    where: { userId: user.id },
  });

  const plan = PLANS[user.plan];
  const limit = plan.competitors;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your account, subscription, and billing.
        </p>
      </div>

      {/* Profile */}
      <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-gray-900">Profile</h2>
        <div className="mt-4 space-y-3">
          <div>
            <p className="text-xs font-medium text-gray-500">Email</p>
            <p className="mt-0.5 text-sm text-gray-900">{user.email}</p>
          </div>
          {user.name && (
            <div>
              <p className="text-xs font-medium text-gray-500">Name</p>
              <p className="mt-0.5 text-sm text-gray-900">{user.name}</p>
            </div>
          )}
          <div>
            <p className="text-xs font-medium text-gray-500">Member since</p>
            <p className="mt-0.5 text-sm text-gray-900">
              {user.createdAt.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Subscription */}
      <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Subscription</h2>
            <p className="mt-1 text-sm text-gray-500">
              Your current plan and usage.
            </p>
          </div>
          {user.plan !== "FREE" && user.stripeCustomerId && (
            <ManageBillingButton />
          )}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
            <p className="text-xs font-medium text-gray-500">Current plan</p>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="text-xl font-bold text-gray-900">{plan.name}</span>
              {plan.price > 0 && (
                <span className="text-sm text-gray-500">${plan.price}/mo</span>
              )}
            </div>
          </div>
          <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
            <p className="text-xs font-medium text-gray-500">Competitors</p>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="text-xl font-bold text-gray-900">{competitorCount}</span>
              <span className="text-sm text-gray-500">of {limit}</span>
            </div>
            <div className="mt-2 h-1.5 w-full rounded-full bg-gray-200">
              <div
                className="h-1.5 rounded-full bg-brand-600"
                style={{ width: `${Math.min((competitorCount / limit) * 100, 100)}%` }}
              />
            </div>
          </div>
          <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
            <p className="text-xs font-medium text-gray-500">Digest frequency</p>
            <p className="mt-1 text-xl font-bold capitalize text-gray-900">
              {plan.digest}
            </p>
          </div>
        </div>

        {user.plan === "FREE" && (
          <div className="mt-6 rounded-lg border border-brand-200 bg-brand-50 p-4">
            <p className="text-sm text-brand-900">
              Upgrade to Pro or Team for more competitors, faster snapshots, and
              daily digests.
            </p>
            <a
              href="/pricing"
              className="mt-3 inline-block rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
            >
              View Plans
            </a>
          </div>
        )}
      </div>

      {/* Billing info for paid users */}
      {user.plan !== "FREE" && user.stripeCustomerId && (
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-900">Billing</h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage your payment method, view invoices, and update billing details
            through the Stripe customer portal.
          </p>
          <div className="mt-4">
            <ManageBillingButton />
          </div>
        </div>
      )}
    </div>
  );
}
