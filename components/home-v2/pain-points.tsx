import { V2AuditBookCtaLink } from "./v2-audit-book-cta-link";

const ACCENT = "oklch(0.86 0.22 142)";
const WARN = "oklch(0.72 0.17 55)";

const PAIN_ITEMS = [
  {
    quote: "Where are we on this order?",
    supporting: "Asked 14× across email, chat, and DMs this week",
    tag: "no visibility",
  },
  {
    quote: "Only Mark knows how to do that.",
    supporting: "Mark is on holiday. The business is on hold.",
    tag: "key-person risk",
  },
  {
    quote: "I’ll just do it manually for now.",
    supporting: "Said three months ago. Still doing it manually.",
    tag: "compounding debt",
  },
  {
    quote: "Send me the latest spreadsheet.",
    supporting: "orders_FINAL_v7_USE_THIS.xlsx",
    tag: "no source of truth",
  },
  {
    quote: "We need to hire someone for this.",
    supporting: "Or you could build the system once.",
    tag: "wrong lever",
  },
  {
    quote: "Who was supposed to follow up on this?",
    supporting: "The handoff fell between three tools.",
    tag: "dropped handoffs",
  },
] as const;

export function PainPoints() {
  return (
    <section
      id="pains"
      className="relative border-t border-zinc-200/70 bg-[#FAFAF7] py-24 sm:py-28 lg:py-32 dark:border-zinc-800/80 dark:bg-zinc-950"
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
          IF THIS SOUNDS LIKE YOU
        </p>
        <h2 className="mt-5 max-w-[46rem] text-balance text-[clamp(28px,4vw,44px)] font-semibold leading-[1.08] tracking-[-0.025em] text-zinc-950 dark:text-zinc-50 sm:mt-6">
          You’re probably still in V1 if any of these get said this week.
        </h2>
        <p className="mt-5 max-w-[42rem] text-pretty text-[17px] font-normal leading-[1.55] text-zinc-600 sm:text-[18px] dark:text-zinc-400">
          None of these mean the business is failing. They mean operations are
          becoming the ceiling — and that scaling further means hiring more
          people just to keep up. We built for exactly this moment.
        </p>

        <div className="mt-10 sm:mt-12">
          <div className="overflow-hidden rounded-[12px] border border-zinc-300/75 dark:border-zinc-700/85">
            <div className="grid grid-cols-1 gap-px bg-zinc-300/50 md:grid-cols-2 lg:grid-cols-3 dark:bg-zinc-800/85">
              {PAIN_ITEMS.map((item) => (
                <div
                  key={item.quote}
                  className="flex min-h-0 min-w-0 flex-col justify-between gap-3 bg-[#FDFCF7] px-5 py-5 dark:bg-zinc-950/60"
                >
                    <div className="min-w-0">
                      <p className="text-[17px] font-medium leading-snug tracking-[-0.015em] text-zinc-900 sm:text-[18px] dark:text-zinc-100">
                        <span className="text-zinc-400 dark:text-zinc-500">
                          “
                        </span>
                        {item.quote}
                        <span className="text-zinc-400 dark:text-zinc-500">
                          ”
                        </span>
                      </p>
                      <p className="mt-2.5 text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {item.supporting}
                      </p>
                    </div>
                    <div className="flex shrink-0 pt-0.5">
                      <span className="mono inline-flex max-w-full items-center gap-1.5 break-words rounded-full border border-zinc-200/90 bg-white/85 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.06em] text-zinc-500 dark:border-zinc-600 dark:bg-zinc-900/70 dark:text-zinc-400">
                        <span
                          className="size-1 shrink-0 rounded-full"
                          style={{ background: WARN }}
                          aria-hidden
                        />
                        {item.tag}
                      </span>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 rounded-[12px] border border-zinc-300/75 bg-[#F4F3EC] px-5 py-4 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-4 dark:border-zinc-700/85 dark:bg-zinc-900/45">
          <div className="min-w-0">
            <p className="text-[16px] font-medium text-zinc-900 dark:text-zinc-100 sm:text-[17px]">
              Not sure if you’re in V1?
            </p>
            <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Free 30-min call. We’ll tell you honestly. No pitch, no
              obligation.
            </p>
          </div>
          <V2AuditBookCtaLink
            href="#contact"
            className="inline-flex h-11 w-full shrink-0 items-center justify-center rounded-lg bg-zinc-950 px-6 text-[15px] font-medium text-white transition hover:bg-zinc-800 sm:h-10 sm:w-auto sm:min-w-[200px] dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
          >
            Book a free V2 Audit
          </V2AuditBookCtaLink>
        </div>
      </div>
    </section>
  );
}
