import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(14,165,233,0.14),transparent),radial-gradient(ellipse_50%_50%_at_100%_50%,rgba(99,102,241,0.06),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(14,165,233,0.12),transparent),radial-gradient(ellipse_50%_50%_at_100%_50%,rgba(99,102,241,0.08),transparent)]"
      />
      <div className="mx-auto max-w-6xl">
        <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
          Every business has a V1. We build your V2.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl sm:leading-relaxed">
          Turn manual operations into systems that scale. We design and
          implement workflows, internal tools, and automation—plus practical AI
          where it actually earns its place—so the business runs faster,
          smoother, and with less heroic effort.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="#get-v2-plan"
            className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-8 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
          >
            Get your V2 plan
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 bg-white/60 px-8 text-sm font-semibold text-zinc-900 backdrop-blur transition hover:border-zinc-400 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/40 dark:text-zinc-50 dark:hover:border-zinc-500 dark:hover:bg-zinc-900"
          >
            See how it works
          </Link>
        </div>
      </div>
    </section>
  );
}
