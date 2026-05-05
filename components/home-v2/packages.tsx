import Link from "next/link";

const ACCENT = "oklch(0.86 0.22 142)";
const ACCENT_INK = "oklch(0.32 0.12 142)";

const BUILD = {
  name: "V2 Build",
  tag: "Most teams start here",
  price: "from HKD 18,000",
  pitch: "Focused system build",
  duration: "Typically 2–8 weeks",
  summary:
    "We design and ship a focused V2 system into your live operation — internal tools, workflow automation, or a custom application your team uses every day.",
  includes: [
    "Workflow audit + V2 blueprint",
    "One production-ready system, end-to-end",
    "Connections to the tools you already use",
    "Data migration, guardrails, and access controls",
    "Team training + adoption support",
    "30 days of post-launch tuning",
  ],
  cta: "Plan your build",
} as const;

const OPERATE = {
  name: "V2 Operate",
  tag: "Ongoing systems partner",
  price: "from HKD 3,000/month",
  duration: "Rolling",
  summary:
    "Your fractional systems team after launch. We tighten what breaks first, ship the next workflow, and keep the stack sane as you scale.",
  includes: [
    "Dedicated systems lead",
    "Continuous workflow improvements",
    "New automations and small builds on demand",
    "Monthly health & ROI review",
    "On-call for ops-critical fixes",
  ],
  cta: "Talk about retainer",
} as const;

export function Packages() {
  return (
    <section
      id="packages"
      className="relative scroll-mt-24 border-y border-zinc-200/70 bg-[#FAFAF7] py-24 sm:py-28 lg:py-32 dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="relative mx-auto w-full max-w-[1200px] px-5 text-left sm:px-6 md:px-8">
        <p className="mono inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.08em] text-zinc-500 dark:text-zinc-400">
          <span
            className="size-1.5 shrink-0 rounded-full"
            style={{
              background: ACCENT,
              boxShadow: `0 0 0 3px color-mix(in oklab, ${ACCENT} 25%, transparent)`,
            }}
          />
          PACKAGES
        </p>
        <h2 className="mt-5 max-w-[40rem] text-balance text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:mt-6 sm:text-5xl lg:text-[3.05rem] lg:leading-[1.08]">
          Two ways to bring your V2 online.
        </h2>
        <p className="mt-5 max-w-[42rem] text-pretty text-lg leading-relaxed text-zinc-600 sm:mt-6 sm:text-xl dark:text-zinc-400">
          Most businesses start with a V2 Build for one or two systems, then
          keep us on retainer to Operate as they scale. Every engagement is
          fixed-scope and operator-priced — with a free 30-min Audit before
          anyone commits.
        </p>

        <div className="mx-auto mt-8 w-full max-w-[940px] sm:mt-10">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-5 lg:items-stretch">
            <article className="relative flex min-h-0 flex-col gap-5 overflow-hidden rounded-[12px] border border-zinc-900 bg-zinc-950 px-6 py-7 text-zinc-50 sm:px-6 sm:py-7 lg:gap-6 lg:py-8 dark:border-zinc-600/90 dark:bg-zinc-950">
            <span
              className="mono absolute -top-px left-5 inline-flex rounded-b-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.06em] text-zinc-950 sm:left-6"
              style={{ background: ACCENT }}
            >
              ★ {BUILD.tag}
            </span>

            <div className="pt-3">
              <div className="flex flex-wrap items-baseline gap-2.5 gap-y-1">
                <h3 className="text-[1.625rem] font-semibold tracking-[-0.025em] sm:text-[28px]">
                  {BUILD.name}
                </h3>
                <span className="mono text-[10.5px] font-medium uppercase tracking-[0.07em] text-zinc-500">
                  {BUILD.pitch}
                </span>
              </div>
              <p className="mt-2.5 text-[14px] leading-[1.55] text-zinc-400">
                {BUILD.summary}
              </p>
            </div>

            <div className="flex flex-wrap items-end gap-x-5 gap-y-2 border-t border-white/10 pt-4">
              <div>
                <p className="mono mb-0.5 text-[10px] font-medium uppercase tracking-[0.08em] text-zinc-500">
                  Investment
                </p>
                <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {BUILD.price}
                </p>
              </div>
              <div className="ml-auto text-right">
                <p className="mono mb-0.5 text-[10px] font-medium uppercase tracking-[0.08em] text-zinc-500">
                  Timeline
                </p>
                <p className="text-sm font-medium text-zinc-200">
                  {BUILD.duration}
                </p>
              </div>
            </div>

            <ul className="flex flex-1 flex-col gap-2">
              {BUILD.includes.map((line) => (
                <li
                  key={line}
                  className="flex gap-2.5 text-[13.5px] leading-[1.45] text-zinc-200"
                >
                  <span
                    className="mt-1.5 size-1.25 shrink-0 rounded-full"
                    style={{
                      background: ACCENT,
                      boxShadow: `0 0 0 3px color-mix(in oklab, ${ACCENT} 28%, transparent)`,
                    }}
                  />
                  {line}
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className="inline-flex h-11 w-full items-center justify-center rounded-lg text-[15px] font-medium transition hover:opacity-95 sm:h-10"
              style={{
                background: ACCENT,
                color: ACCENT_INK,
              }}
            >
              {BUILD.cta} →
            </Link>
            </article>

            <article className="flex min-h-0 flex-col gap-5 rounded-[12px] border border-zinc-300/80 bg-[#FDFCF7] px-6 py-6 sm:px-6 sm:py-7 lg:py-6 dark:border-zinc-600 dark:bg-zinc-900/55">
            <div className="flex flex-wrap items-baseline gap-2.5 gap-y-1">
              <h3 className="text-[1.625rem] font-semibold tracking-[-0.025em] text-zinc-950 sm:text-[28px] dark:text-zinc-50">
                {OPERATE.name}
              </h3>
              <span className="mono text-[10.5px] font-medium uppercase tracking-[0.07em] text-zinc-500 dark:text-zinc-400">
                {OPERATE.tag}
              </span>
            </div>
            <p className="text-[14px] leading-[1.55] text-zinc-600 dark:text-zinc-400">
              {OPERATE.summary}
            </p>

            <div className="flex flex-wrap items-end gap-x-5 gap-y-2 border-t border-dashed border-zinc-300/70 pt-4 dark:border-zinc-600/80">
              <div>
                <p className="mono mb-0.5 text-[10px] font-medium uppercase tracking-[0.08em] text-zinc-500 dark:text-zinc-500">
                  Investment
                </p>
                <p className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-50">
                  {OPERATE.price}
                </p>
              </div>
              <div className="ml-auto text-right">
                <p className="mono mb-0.5 text-[10px] font-medium uppercase tracking-[0.08em] text-zinc-500 dark:text-zinc-500">
                  Cadence
                </p>
                <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {OPERATE.duration}
                </p>
              </div>
            </div>

            <ul className="flex flex-1 flex-col gap-2">
              {OPERATE.includes.map((line) => (
                <li
                  key={line}
                  className="flex gap-2.5 text-[13.5px] leading-[1.45] text-zinc-800 dark:text-zinc-200"
                >
                  <span
                    className="mt-1.5 size-1 shrink-0 rounded-full"
                    style={{ background: ACCENT }}
                  />
                  {line}
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-zinc-400/75 bg-[#EDECE5] px-6 text-[15px] font-semibold text-zinc-900 transition hover:border-zinc-500 hover:bg-[#E5E4DD] sm:h-10 dark:border-zinc-500 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:border-zinc-400 dark:hover:bg-zinc-700"
            >
              {OPERATE.cta} →
            </Link>
            </article>
          </div>
        </div>

        <div className="mt-6 flex min-w-0 flex-col gap-5 rounded-[12px] border border-zinc-300/75 bg-[#EBEAE3] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-6 sm:py-5 dark:border-zinc-600 dark:bg-zinc-900/45">
          <div className="flex min-w-0 flex-1 items-start gap-4 sm:items-center sm:gap-4">
            <div
              className="mono flex size-10 shrink-0 items-center justify-center rounded-[10px] text-[12px] font-semibold dark:text-zinc-950"
              style={{
                background: `color-mix(in oklab, ${ACCENT} 22%, white)`,
                color: ACCENT_INK,
              }}
            >
              FREE
            </div>
            <div className="min-w-0 flex-1 sm:max-w-2xl">
              <p className="text-[16px] font-medium text-zinc-900 dark:text-zinc-100 sm:text-[17px]">
                Start with a free V2 Audit (30-min)
              </p>
              <p className="mt-1 text-[13.5px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                A focused walkthrough of how your operation runs today — and
                where a proper V2 system would remove the most friction. No
                pitch. No obligation.
              </p>
            </div>
          </div>
          <Link
            href="#contact"
            className="inline-flex h-11 w-full shrink-0 items-center justify-center rounded-lg bg-zinc-950 px-6 text-[15px] font-medium text-white transition hover:bg-zinc-800 sm:h-10 sm:w-auto sm:min-w-[200px] dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
          >
            Book a V2 Audit →
          </Link>
        </div>

        <div className="mt-4 flex min-w-0 gap-3 rounded-[12px] border border-zinc-300/70 bg-[#FDFCF7] px-4 py-3 sm:px-5 dark:border-zinc-700/80 dark:bg-zinc-950/35">
          <span
            className="mt-1.5 size-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500"
            aria-hidden
          />
          <p className="mono text-[12px] leading-relaxed tracking-[0.01em] text-zinc-600 dark:text-zinc-400">
            Introductory pricing for selected early clients. Final scope depends
            on workflow complexity, integrations, and number of users. Every
            quote is fixed before work begins.
          </p>
        </div>
      </div>
    </section>
  );
}
