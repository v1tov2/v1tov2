import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-[color-mix(in_srgb,var(--background)_88%,transparent)] backdrop-blur-md dark:border-zinc-800 dark:bg-[color-mix(in_srgb,#0a0a0a_88%,transparent)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          V1<span className="text-zinc-400 dark:text-zinc-500">→</span>V2
        </Link>
        <nav className="flex items-center gap-3 text-sm">
          <Link
            href="#how-it-works"
            className="hidden text-zinc-600 transition-colors hover:text-zinc-900 sm:inline dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            How it works
          </Link>
          <Link
            href="#get-v2-plan"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
          >
            Get your V2 plan
          </Link>
        </nav>
      </div>
    </header>
  );
}
