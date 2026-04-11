import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const user = await getCurrentUser();
  const params = await searchParams;

  if (!user || !params.session_id) {
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-md text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-6 w-6 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="mt-4 text-2xl font-bold text-gray-900">
          Welcome to CompeteWatch {user.plan}!
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Your subscription is active. You can now track more competitors and
          get faster digests.
        </p>
        <div className="mt-8 flex flex-col gap-3">
          <a
            href="/dashboard"
            className="rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            Go to Dashboard
          </a>
          <a
            href="/competitors"
            className="text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            Add competitors
          </a>
        </div>
      </div>
    </main>
  );
}
