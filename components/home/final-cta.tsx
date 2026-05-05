import Link from "next/link";

export function FinalCTA() {
  return (
    <section
      id="get-v2-plan"
      className="scroll-mt-24 px-4 pb-28 pt-4 sm:px-6 lg:px-8"
    >
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-zinc-200/80 bg-gradient-to-br from-sky-50 via-white to-zinc-50 p-8 shadow-[0_24px_60px_-40px_rgba(14,116,144,0.35)] dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-900 dark:to-sky-950/40 dark:shadow-[0_28px_70px_-45px_rgba(0,0,0,0.75)] sm:p-12 lg:p-14">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(14,165,233,0.12),transparent)]"
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
            Ready for your V2?
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            We’ll walk through how your business runs today and sketch what a
            steadier operating system could look like—priorities first, fluff
            never.
          </p>
          <div className="mt-10">
            <Link
              href="mailto:hello@v1tov2.com?subject=V2%20plan%20%E2%80%94%20intro%20conversation"
              className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-10 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
            >
              Get your V2 plan
            </Link>
          </div>
        </div>
      </div>
      <footer className="mx-auto mt-16 max-w-6xl px-4 text-center text-xs text-zinc-500 dark:text-zinc-500 sm:px-0">
        <p>© {new Date().getFullYear()} V1toV2. All rights reserved.</p>
      </footer>
    </section>
  );
}
