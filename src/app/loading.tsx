export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b border-gray-100">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="h-6 w-32 animate-pulse rounded bg-gray-100" />
          <div className="flex items-center gap-6">
            <div className="h-4 w-16 animate-pulse rounded bg-gray-100" />
            <div className="h-9 w-20 animate-pulse rounded-lg bg-gray-100" />
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <div className="h-5 w-44 animate-pulse rounded-full bg-gray-100" />
          <div className="mt-6 h-12 w-3/4 animate-pulse rounded bg-gray-100" />
          <div className="mt-3 h-12 w-2/3 animate-pulse rounded bg-gray-100" />
          <div className="mt-6 h-4 w-1/2 animate-pulse rounded bg-gray-100" />
          <div className="mt-2 h-4 w-2/5 animate-pulse rounded bg-gray-100" />
          <div className="mt-8 flex gap-3">
            <div className="h-10 w-32 animate-pulse rounded-lg bg-gray-100" />
            <div className="h-10 w-32 animate-pulse rounded-lg bg-gray-100" />
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-24 animate-pulse rounded-xl border border-gray-100 bg-gray-50"
            />
          ))}
        </div>
      </main>

      <span className="sr-only" aria-live="polite">
        Loading…
      </span>
    </div>
  );
}
