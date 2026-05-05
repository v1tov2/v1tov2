import Link from "next/link";

function V1toV2Mockup() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-4 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)] dark:border-zinc-800 dark:bg-zinc-900/60">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-amber-200/70 bg-gradient-to-b from-amber-50 to-white p-4 dark:border-amber-900/40 dark:from-amber-950/20 dark:to-zinc-900">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-amber-700 dark:text-amber-400">
            V1
          </p>
          <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Fragmented manual operations
          </p>
          <div className="mt-4 space-y-3 text-xs text-zinc-600 dark:text-zinc-400">
            <div className="rounded-lg border border-zinc-200 bg-white p-2 dark:border-zinc-700 dark:bg-zinc-900">
              Email: "Can you quote this today?"
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-2 dark:border-zinc-700 dark:bg-zinc-900">
              Sheet: `orders_FINAL_v7.xlsx`
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-2 dark:border-zinc-700 dark:bg-zinc-900">
              Chat: "Who is handling payment follow-up?"
            </div>
            <div className="rounded-lg border border-zinc-200 bg-amber-100 p-2 dark:border-zinc-700 dark:bg-amber-900/30">
              Sticky: "Chase invoice and update status"
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-sky-200/70 bg-gradient-to-br from-sky-50 to-white p-4 dark:border-sky-900/40 dark:from-sky-950/30 dark:to-zinc-900">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-sky-700 dark:text-sky-400">
            V2
          </p>
          <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Structured system with visibility
          </p>
          <div className="mt-4 space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
            {[
              "Intake captured",
              "Quote generated",
              "Invoice issued",
              "Payment tracked",
            ].map((step, index) => (
              <div
                key={step}
                className="flex items-center justify-between rounded-lg border border-sky-200 bg-white px-2.5 py-2 dark:border-sky-800/60 dark:bg-zinc-900"
              >
                <span className="flex items-center gap-2">
                  <span className="inline-flex size-5 items-center justify-center rounded-full bg-sky-100 text-[10px] font-semibold text-sky-700 dark:bg-sky-900/50 dark:text-sky-300">
                    {index + 1}
                  </span>
                  {step}
                </span>
                <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                  done
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg border border-zinc-200 bg-white p-2 text-[11px] text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400">
            Orders, status, and payment visibility in one place.
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(14,165,233,0.16),transparent),radial-gradient(ellipse_50%_50%_at_100%_50%,rgba(99,102,241,0.08),transparent)]"
      />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:items-end">
          <div>
            <h1 className="max-w-5xl text-balance text-5xl font-semibold leading-[1.01] tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-6xl lg:text-7xl">
              From manual operations to scalable systems. We build your V2.
            </h1>
            <p className="mt-7 max-w-3xl text-pretty text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-2xl">
              V1toV2 helps growing businesses replace scattered manual workflows with
              internal tools, automation, and practical AI — so teams get clearer
              visibility, fewer handoffs, and more capacity without immediately
              hiring more people.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-8 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
              >
                Book a free V2 Audit
              </Link>
              <Link
                href="#workflows"
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 bg-white/80 px-8 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900/40 dark:text-zinc-100 dark:hover:border-zinc-500"
              >
                See example workflows
              </Link>
            </div>

            <p className="mt-4 font-mono text-xs tracking-wide text-zinc-500 dark:text-zinc-500">
              Free 30-min call · No pitch. No obligation.
            </p>
          </div>
          <V1toV2Mockup />
        </div>
      </div>
    </section>
  );
}
