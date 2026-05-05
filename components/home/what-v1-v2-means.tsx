const v1Items = [
  "Everything runs through a few key people",
  "WhatsApp threads, spreadsheets, and manual tracking",
  "The same repetitive tasks every day",
  "No single clear workflow anyone can rely on",
  "Scaling means hiring more chaos managers",
];

const v2Items = [
  "Defined workflows people can actually follow",
  "Internal tools that support how you operate",
  "Automation handling repeatable work reliably",
  "AI assisting decisions and execution—within guardrails",
  "A business that can grow without duct tape and burnout",
];

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400"
        >
          <span
            aria-hidden
            className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function WhatV1V2Means() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-zinc-200/80 bg-white p-8 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.25)] dark:border-zinc-800 dark:bg-zinc-900/50 dark:shadow-[0_24px_60px_-40px_rgba(0,0,0,0.6)] sm:p-10 lg:p-12">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-sky-700 dark:text-sky-400">
          Systems, not hype
        </p>
        <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
          What does V1 → V2 actually mean?
        </h2>
        <p className="mt-5 max-w-3xl text-pretty text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Most businesses don’t have a pure “growth” problem. They have a
          systems problem—work that’s workable today, but fragile tomorrow.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="rounded-2xl border border-zinc-100 bg-zinc-50/80 p-6 dark:border-zinc-800 dark:bg-zinc-950/50 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              V1 looks like
            </h3>
            <div className="mt-6">
              <BulletList items={v1Items} />
            </div>
          </div>
          <div className="rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50/90 to-white p-6 dark:border-sky-900/40 dark:from-sky-950/30 dark:to-zinc-950/30 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-800 dark:text-sky-400">
              V2 looks like
            </h3>
            <div className="mt-6">
              <BulletList items={v2Items} />
            </div>
          </div>
        </div>

        <p className="mt-10 max-w-3xl text-pretty border-t border-zinc-100 pt-10 text-lg leading-relaxed text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
          We help you make that shift—deliberately, practically, around how you
          really work.
        </p>
      </div>
    </section>
  );
}
