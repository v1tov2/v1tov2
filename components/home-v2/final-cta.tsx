import Link from "next/link";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 px-4 pb-24 pt-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-900 to-zinc-800 p-9 text-zinc-100 shadow-[0_30px_80px_-45px_rgba(0,0,0,0.7)] dark:border-zinc-700 dark:from-zinc-950 dark:to-zinc-900 sm:p-14">
        <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Ready to move from V1 to V2?
        </h2>
        <p className="mt-5 max-w-3xl text-pretty text-xl leading-relaxed text-zinc-300">
          A focused walkthrough of how your operations run today — and where a
          proper V2 system would remove the most friction.
        </p>
        <p className="mt-3 font-mono text-xs tracking-wide text-zinc-400">
          Free 30-min call · No pitch. No obligation.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
          >
            Book a free V2 Audit
          </Link>
          <Link
            href="#packages"
            className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-500 px-8 text-sm font-semibold text-zinc-100 transition hover:border-zinc-300"
          >
            See packages
          </Link>
        </div>
      </div>
    </section>
  );
}
