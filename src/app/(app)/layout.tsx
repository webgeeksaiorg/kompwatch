import { requireAuth } from "@/lib/auth";
import { MobileNav } from "@/components/dashboard/mobile-nav";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await requireAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="relative border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <a href="/dashboard" className="text-sm font-bold text-gray-900">
            KompWatch
          </a>
          {/* Desktop nav */}
          <div className="hidden items-center gap-6 sm:flex">
            <a href="/dashboard" className="text-sm text-gray-600 hover:text-gray-900">
              Dashboard
            </a>
            <a href="/competitors" className="text-sm text-gray-600 hover:text-gray-900">
              Competitors
            </a>
            <a href="/digests" className="text-sm text-gray-600 hover:text-gray-900">
              Digests
            </a>
            <a href="/settings" className="text-sm text-gray-600 hover:text-gray-900">
              Settings
            </a>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">{user.email}</span>
              <form action="/api/auth/logout" method="POST">
                <button
                  type="submit"
                  className="text-xs text-gray-400 hover:text-gray-600"
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>
          {/* Mobile hamburger */}
          <MobileNav email={user.email} />
        </div>
      </nav>
      <main className="mx-auto max-w-5xl px-4 py-6 sm:py-8">{children}</main>
    </div>
  );
}
