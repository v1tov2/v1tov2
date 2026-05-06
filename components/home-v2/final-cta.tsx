import Link from "next/link";
import { V2AuditBookCtaLink } from "./v2-audit-book-cta-link";

const ACCENT = "oklch(0.86 0.22 142)";
const ACCENT_INK = "oklch(0.32 0.12 142)";

const SNAPSHOT_SECTIONS = [
  {
    title: "Pain points identified",
    items: [
      "Orders scattered across chat, email, and sheets",
      "No clear owner for each task",
      "Status updates require manual chasing",
    ],
  },
  {
    title: "Highest-leverage fixes",
    items: [
      "Central intake + workflow states",
      "Auto task assignment + visibility",
      "Payment/status tracking in one place",
    ],
  },
  {
    title: "Expected impact",
    items: [
      "Fewer manual follow-ups",
      "Faster turnaround",
      "Clearer ownership across the team",
    ],
  },
] as const;

const MAIL_GENERAL = "mailto:hello@v1tov2.com";
const MAIL_JEFFREY = "mailto:jeffrey@v1tov2.com";
const WHATSAPP_URL = "https://wa.me/85292253889";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/10 bg-zinc-950 py-20 text-zinc-50 sm:py-24 lg:py-28 dark:border-white/10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 55% 55% at 50% 45%, black 28%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 55% 55% at 50% 45%, black 28%, transparent 72%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_90%,color-mix(in_oklab,oklch(0.86_0.22_142)_12%,transparent),transparent)]"
      />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.18fr_1fr] lg:gap-16 xl:gap-20">
          <div className="min-w-0">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 px-3 py-1.5">
              <span
                className="size-1.5 shrink-0 rounded-full"
                style={{
                  background: ACCENT,
                  boxShadow: `0 0 0 3px color-mix(in oklab, ${ACCENT} 28%, transparent)`,
                }}
              />
              <span className="mono text-[11px] font-medium uppercase tracking-[0.07em] text-zinc-400">
                Now booking · limited build slots available
              </span>
            </div>

            <h2 className="mt-6 max-w-[20ch] text-balance text-[clamp(2.25rem,5.2vw,5rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-white sm:max-w-none">
              Ready for your V2?
            </h2>

            <p className="mt-6 max-w-[32rem] text-pretty text-lg leading-[1.55] text-zinc-400 sm:text-[19px]">
              Free 30-min call. We’ll walk through how your business runs today
              and where a steadier operating system would pay back fastest.
              Priorities first, fluff never. No pitch, no obligation.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <V2AuditBookCtaLink
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-lg px-7 text-[15px] font-semibold transition hover:opacity-95 sm:h-[3.25rem] sm:min-w-[220px]"
                style={{
                  background: ACCENT,
                  color: ACCENT_INK,
                }}
              >
                Book a free V2 Audit
              </V2AuditBookCtaLink>
              <Link
                href={MAIL_GENERAL}
                className="mono inline-flex h-12 items-center justify-center gap-2.5 rounded-lg border border-white/20 px-6 text-[13.5px] font-medium tracking-wide text-zinc-100 transition hover:border-white/30 hover:bg-white/5 sm:h-[3.25rem]"
              >
                hello@v1tov2.com
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="shrink-0 opacity-80"
                  aria-hidden
                >
                  <path
                    d="M3 3h6v6M3 9l6-6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
            </div>

            <div className="mt-5 max-w-[32rem] border-t border-white/10 pt-4 sm:mt-6 sm:pt-5 max-md:pb-0">
              <p className="mb-0 text-[13px] leading-snug text-zinc-500 md:mb-3">
                Operator-led systems partner based in Hong Kong.
              </p>

              <div className="mt-3 md:hidden">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div className="divide-y divide-white/10">
                    <p className="py-2 text-[13px] font-semibold leading-snug text-white">
                      Jeffrey Choi
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mono block py-2 text-[13px] leading-snug text-zinc-200 underline decoration-white/20 underline-offset-2 transition hover:text-white hover:decoration-white/45"
                    >
                      +852 9225 3889
                    </a>
                    <a
                      href={MAIL_JEFFREY}
                      className="mono block break-words py-2 text-[13px] leading-snug text-zinc-200 underline decoration-white/20 underline-offset-2 transition hover:text-white hover:decoration-white/45"
                    >
                      jeffrey@v1tov2.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="hidden grid-cols-3 gap-x-5 gap-y-0 items-baseline md:grid lg:gap-x-8">
                <p className="text-[13.5px] font-medium leading-snug text-zinc-100">
                  Jeffrey Choi
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono block text-[13px] leading-snug text-zinc-200 underline decoration-white/20 underline-offset-4 transition hover:text-white hover:decoration-white/45"
                >
                  +852 9225 3889
                </a>
                <a
                  href={MAIL_JEFFREY}
                  className="mono block break-all text-[13px] leading-snug text-zinc-200 underline decoration-white/20 underline-offset-4 transition hover:text-white hover:decoration-white/45"
                >
                  jeffrey@v1tov2.com
                </a>
              </div>
            </div>

            <p className="mono mt-4 text-[11px] tracking-[0.06em] text-zinc-500 md:mt-6">
              30 minutes · founder-led · no obligation
            </p>
          </div>

          <aside className="min-w-0 rounded-[12px] border border-white/12 bg-zinc-900/40 backdrop-blur-[10px] lg:min-h-[min(100%,420px)]">
            <div className="border-b border-white/10 px-5 py-4 sm:px-6 sm:py-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-base font-semibold tracking-tight text-white sm:text-[17px]">
                    V2 Audit snapshot
                  </h3>
                  <p className="mono mt-2 max-w-prose text-[11px] leading-relaxed text-zinc-500 sm:text-xs">
                    An example of what we’ll map in the first call.
                  </p>
                </div>
                <span
                  className="mono shrink-0 rounded border border-white/10 bg-white/[0.06] px-2 py-0.5 text-[9.5px] font-medium uppercase tracking-[0.08em] text-zinc-400"
                  style={{
                    borderColor: `color-mix(in oklab, ${ACCENT} 35%, rgba(255,255,255,0.12))`,
                  }}
                >
                  Preview
                </span>
              </div>
            </div>

            <div className="divide-y divide-white/10 px-5 py-1 sm:px-6">
              {SNAPSHOT_SECTIONS.map((section) => (
                <div
                  key={section.title}
                  className="py-4 first:pt-3.5 last:pb-5"
                >
                  <p className="mono mb-3 flex items-center gap-2 text-[10.5px] font-medium uppercase tracking-[0.07em] text-zinc-500">
                    <span
                      className="size-1.5 shrink-0 rounded-full"
                      style={{ background: ACCENT }}
                    />
                    {section.title}
                  </p>
                  <ul className="space-y-2.5 border-l border-white/10 pl-3 sm:pl-3.5">
                    {section.items.map((line) => (
                      <li
                        key={line}
                        className="relative pl-3 text-[13px] leading-snug text-zinc-300"
                      >
                        <span
                          className="absolute left-0 top-[0.5rem] size-1 rounded-full opacity-80"
                          style={{ background: ACCENT }}
                          aria-hidden
                        />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
