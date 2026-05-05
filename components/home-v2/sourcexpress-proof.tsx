const ACCENT = "oklch(0.86 0.22 142)";
const ACCENT_INK = "oklch(0.32 0.12 142)";

const PROOF_CELLS = [
  ["Real shipments", "moved end-to-end"],
  ["Real payments", "collected & reconciled"],
  ["Real customers", "using it day to day"],
  ["Real edge cases", "that taught us what works"],
] as const;

const TIMELINE = [
  {
    label: "Order received",
    sub: "captured from request",
    done: true,
  },
  {
    label: "Payment recorded",
    sub: "reconciled to ledger",
    done: true,
  },
  {
    label: "Picked up",
    sub: "warehouse → carrier",
    done: true,
  },
  {
    label: "Customs handled",
    sub: "docs prepared in one place",
    done: true,
  },
  {
    label: "Out for delivery",
    sub: "customer kept informed",
    done: false,
  },
] as const;

const PRINCIPLES = [
  {
    title: "Operator-led, not agency",
    body: "No account managers, no decks. The person who builds it is the person you talk to.",
  },
  {
    title: "Built for day 2",
    body: "Boring, observable, fixable. Your team can run and extend the system without us.",
  },
  {
    title: "Honest about fit",
    body: "If automation isn't the right move, we'll tell you. We turn down work that won't earn its ROI.",
  },
] as const;

function SourceXpressMockup() {
  return (
    <div className="flex h-full min-h-0 min-w-0 flex-col gap-4 overflow-hidden rounded-[12px] border border-zinc-200/80 bg-gradient-to-b from-white to-[#F8F8F4] dark:border-zinc-700/90 dark:from-zinc-900 dark:to-zinc-950/80">
      <div className="flex items-center justify-between gap-3 border-b border-zinc-200/80 px-4 py-2.5 dark:border-zinc-700/80 sm:px-5">
        <p className="mono min-w-0 flex-1 truncate text-[10px] font-medium uppercase leading-tight tracking-[0.06em] text-zinc-500 dark:text-zinc-400 sm:text-[11px]">
          Example shipment view · SourceXpress
        </p>
        <span
          className="mono shrink-0 rounded-full border border-zinc-200/90 px-2 py-0.5 text-[9.5px] font-medium uppercase tracking-wide dark:border-zinc-600 sm:px-2.5 sm:text-[10px]"
          style={{
            background: `color-mix(in oklab, ${ACCENT} 22%, white)`,
            color: ACCENT_INK,
          }}
        >
          In transit
        </span>
      </div>

      <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-4 px-4 pb-4 sm:px-5 sm:pb-5">
        <div className="flex flex-col gap-4 border-b border-zinc-200/80 py-1 sm:flex-row sm:items-center sm:gap-3 dark:border-zinc-700/80">
          <div className="min-w-0 flex-1">
            <p className="mono text-[10.5px] font-medium uppercase tracking-[0.07em] text-zinc-500 dark:text-zinc-400">
              Origin
            </p>
            <p className="mt-0.5 text-lg font-medium tracking-tight text-zinc-900 dark:text-zinc-50">
              Hong Kong
            </p>
            <p className="mono mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400">
              HKG · origin
            </p>
          </div>

          <div className="aspect-[7/1] w-full min-h-[32px] min-w-0 shrink-0 sm:h-9 sm:max-w-none sm:flex-[1.2]">
            <svg
              className="h-full w-full text-zinc-800 dark:text-zinc-300"
              viewBox="0 0 240 36"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M0 18 Q 120 -8 240 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray="3 3"
              />
              <circle cx="0" cy="18" r="3.5" fill="currentColor" />
              <circle cx="240" cy="18" r="3.5" fill="currentColor" />
              <circle
                cx="142"
                cy="6"
                r="5"
                fill={ACCENT}
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>

          <div className="min-w-0 flex-1 text-left sm:text-right">
            <p className="mono text-[10.5px] font-medium uppercase tracking-[0.07em] text-zinc-500 dark:text-zinc-400">
              Destination
            </p>
            <p className="mt-0.5 text-lg font-medium tracking-tight text-zinc-900 dark:text-zinc-50">
              Manila
            </p>
            <p className="mono mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400">
              MNL · destination
            </p>
          </div>
        </div>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-2.5 pt-1">
          {TIMELINE.map((row) => (
            <div key={row.label} className="flex min-w-0 items-start gap-3 sm:items-center">
              <span
                className="mt-1 size-2.5 shrink-0 rounded-full sm:mt-0"
                style={{
                  background: row.done ? ACCENT : "transparent",
                  border: `1px solid ${row.done ? ACCENT : "#d4d4d8"}`,
                  boxShadow: row.done
                    ? `0 0 0 3px color-mix(in oklab, ${ACCENT} 22%, transparent)`
                    : undefined,
                }}
              />
              <div className="flex min-w-0 flex-1 flex-wrap items-baseline gap-x-3 gap-y-0.5 sm:flex-nowrap">
                <p
                  className={`text-[13.5px] font-medium leading-snug sm:min-w-[150px] sm:shrink-0 ${row.done ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-500 dark:text-zinc-400"}`}
                >
                  {row.label}
                </p>
                <p className="mono min-w-0 text-[11.5px] leading-snug text-zinc-500 dark:text-zinc-400">
                  {row.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-2 border-t border-dashed border-zinc-200/90 pt-3 sm:flex-row sm:items-center sm:justify-between sm:pt-4 dark:border-zinc-700/80">
          <p className="mono text-[11px] leading-snug tracking-wide text-zinc-500 dark:text-zinc-400">
            Many manual steps replaced by one connected workflow
          </p>
          <span className="mono shrink-0 text-[10.5px] uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
            Illustrative
          </span>
        </div>
      </div>
    </div>
  );
}

export function SourcexpressProof() {
  return (
    <section
      id="sourcexpress"
      className="relative scroll-mt-24 border-y border-zinc-200/70 bg-[#F5F4EF] py-24 sm:py-28 lg:py-32 dark:border-zinc-800 dark:bg-zinc-950"
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
          Why us · proof of work
        </p>
        <h2 className="mt-5 max-w-[44rem] text-balance text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:mt-6 sm:text-5xl lg:text-[3rem] lg:leading-[1.08]">
          We’ve already shipped the V2 we’re selling.
        </h2>
        <p className="mt-5 max-w-[42rem] text-pretty text-lg leading-relaxed text-zinc-600 sm:mt-6 sm:text-xl dark:text-zinc-400">
          V1toV2 isn’t a deck. It’s a pattern we’ve already run on our own
          operation — and now run for other businesses, with the same bias
          toward clarity, durability, and day-2 maintainability.
        </p>

        <div className="mt-10 grid min-w-0 grid-cols-1 gap-6 lg:mt-12 lg:grid-cols-[1.05fr_1fr] lg:items-stretch lg:gap-8">
          <article className="flex h-full min-h-0 min-w-0 flex-col gap-7 rounded-[12px] border border-zinc-200/80 bg-[#FDFCF7] p-6 sm:p-8 lg:p-9 dark:border-zinc-700/90 dark:bg-zinc-900/50">
            <div className="flex flex-wrap items-center gap-4">
              <div className="mono flex h-14 min-w-[3.75rem] shrink-0 items-center justify-center rounded-xl bg-zinc-950 px-2 text-sm font-semibold tracking-tight text-[#FAFAF7] dark:bg-zinc-100 dark:text-zinc-950">
                SXP
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-lg font-semibold tracking-tight text-zinc-950 sm:text-xl dark:text-zinc-50">
                  SourceXpress
                </p>
                <p className="mono mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                  cross-border logistics · HK → PH
                </p>
              </div>
              <span
                className="mono shrink-0 rounded-full border border-zinc-200/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.06em] dark:border-zinc-600"
                style={{
                  background: `color-mix(in oklab, ${ACCENT} 22%, white)`,
                  color: ACCENT_INK,
                }}
              >
                Live · in production
              </span>
            </div>

            <blockquote className="border-0 p-0 text-[17px] leading-[1.6] text-zinc-800 dark:text-zinc-200">
              <p>
                “I built SourceXpress, a real cross-border logistics business
                and web platform handling shipments, sourcing requests,
                customer records, payment flows, and admin workflows. V1toV2
                comes from building systems for a real operating business —
                not theory.”
              </p>
            </blockquote>

            <p className="mono border-t border-dashed border-zinc-200/90 pt-5 text-xs text-zinc-500 dark:border-zinc-700/80 dark:text-zinc-400">
              — Founder, V1toV2
            </p>

            <div className="mt-auto min-w-0 overflow-hidden rounded-[10px] border border-zinc-200/80 dark:border-zinc-700/80">
              <div className="grid grid-cols-2 gap-0">
                {PROOF_CELLS.map(([title, sub], i) => (
                  <div
                    key={title}
                    className={`border-zinc-200/80 bg-white/80 px-3.5 py-3.5 dark:border-zinc-700/70 dark:bg-zinc-900/40 sm:px-4 sm:py-4 ${
                      i % 2 === 0 ? "border-r" : ""
                    } ${i < 2 ? "border-b" : ""}`}
                  >
                    <p className="text-[14px] font-medium leading-snug text-zinc-900 dark:text-zinc-100">
                      {title}
                    </p>
                    <p className="mono mt-0.5 text-[11.5px] leading-snug text-zinc-500 dark:text-zinc-400">
                      {sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <div className="h-full min-h-0 min-w-0">
            <SourceXpressMockup />
          </div>
        </div>

        <div className="mt-8 min-w-0 grid grid-cols-1 gap-0 overflow-hidden rounded-[12px] border border-zinc-200/80 bg-[#FDFCF7] sm:mt-10 lg:grid-cols-3 dark:border-zinc-700/90 dark:bg-zinc-900/45">
          {PRINCIPLES.map((item, i) => (
            <div
              key={item.title}
              className={`border-zinc-200/80 px-5 py-6 sm:px-7 sm:py-7 dark:border-zinc-700/70 ${
                i > 0 ? "border-t lg:border-l lg:border-t-0" : ""
              }`}
            >
              <p className="mono mb-2 text-[11px] font-medium uppercase tracking-[0.08em] text-zinc-400 dark:text-zinc-500">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                {item.title}
              </p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
