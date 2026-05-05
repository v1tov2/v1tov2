"use client";

import { useState } from "react";

/** Match hero accent — small green status */
const ACCENT = "oklch(0.86 0.22 142)";
const ACCENT_INK = "oklch(0.32 0.12 142)";
const WARN = "oklch(0.72 0.17 55)";

const ROWS = [
  {
    area: "Order intake",
    v1: "Requests live in email threads, chat, and screenshots — easy to lose context.",
    v2: "Structured intake and clear workflow states so nothing falls through.",
  },
  {
    area: "Status visibility",
    v1: "Status gets chased through DMs and ad-hoc “where are we?” pings.",
    v2: "Status tracking visible to the right people without endless follow-ups.",
  },
  {
    area: "Repeat work",
    v1: "The same steps done by hand, with conflicting spreadsheet versions.",
    v2: "Defined paths from request to completion; automation owns the repeatables.",
  },
  {
    area: "Invoicing & payments",
    v1: "Manual invoicing, late chasing, and numbers scattered across files.",
    v2: "Order and payment visibility in one place, with clearer handoffs.",
  },
  {
    area: "Knowledge",
    v1: "Priorities sit on sticky notes and in a few people’s heads.",
    v2: "Reliable handoffs with guardrails — knowledge lives in the system you run.",
  },
  {
    area: "Scaling",
    v1: "Checklists and heroics that bend under higher volume.",
    v2: "Steadier throughput without immediately hiring just to manage chaos.",
  },
  {
    area: "Day-2 maintenance",
    v1: "Breakages need rescue work because the wiring is invisible.",
    v2: "Observable, fixable operations — boring maintenance beats weekend fires.",
  },
] as const;

function DotMark({
  tone,
  dim,
}: {
  tone: "warn" | "accent";
  dim: boolean;
}) {
  const c = tone === "accent" ? ACCENT : WARN;
  return (
    <span
      className="mt-0.5 flex size-3.5 shrink-0 items-center justify-center rounded-full border transition-all duration-200"
      style={{
        borderColor: dim ? "rgb(212 212 216)" : c,
        background: dim
          ? "transparent"
          : `color-mix(in oklab, ${c} 32%, transparent)`,
      }}
    >
      <span
        className="size-1.5 rounded-full transition-colors duration-200"
        style={{
          background: dim ? "rgb(212 212 216)" : c,
        }}
      />
    </span>
  );
}

export function V1V2Comparison() {
  const [active, setActive] = useState<"v1" | "v2">("v2");

  return (
    <section
      id="compare"
      className="relative bg-[#F5F4EF] py-24 sm:py-28 lg:py-32 dark:bg-zinc-950"
    >
      <div className="relative mx-auto w-full max-w-[1200px] px-5 text-left sm:px-6 md:px-8">
        <div className="max-w-[680px]">
          <p className="mono inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.08em] text-zinc-500 dark:text-zinc-400">
            <span
              className="size-1.5 shrink-0 rounded-full"
              style={{
                background: ACCENT,
                boxShadow: `0 0 0 3px color-mix(in oklab, ${ACCENT} 25%, transparent)`,
              }}
            />
            V1 VS V2
          </p>
          <h2 className="mt-5 max-w-[min(100%,680px)] text-balance text-[clamp(30px,4.2vw,52px)] font-semibold leading-[1.06] tracking-[-0.025em] text-zinc-950 dark:text-zinc-50">
            Same business. Different operating system.
          </h2>
          <p className="mt-5 max-w-[680px] text-pretty text-[17px] font-normal leading-[1.55] text-zinc-600 sm:text-[18px] dark:text-zinc-400">
            Most teams aren’t broken — their wiring is. Here’s what the same
            operation looks like running on V1 instincts versus a real V2
            system. Same people. Fewer manual hours. Clearer visibility.
          </p>
        </div>

        <div className="mt-10 sm:mt-12">
          <div className="mb-5 flex flex-col gap-2.5 sm:mb-6 sm:flex-row sm:items-center sm:gap-4">
            <div className="inline-flex w-max rounded-full border border-zinc-300/80 bg-[#FDFCF7] p-1 dark:border-zinc-600 dark:bg-zinc-900/80">
              {(["v1", "v2"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setActive(v)}
                  className="mono rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.06em] transition-all duration-150"
                  style={
                    v === "v1"
                      ? {
                          background:
                            active === "v1" ? "#0B0B0A" : "transparent",
                          color:
                            active === "v1"
                              ? "#FAFAF7"
                              : "rgb(113 113 122)",
                        }
                      : {
                          background:
                            active === "v2" ? ACCENT : "transparent",
                          color:
                            active === "v2" ? ACCENT_INK : "rgb(113 113 122)",
                        }
                  }
                >
                  {v}
                </button>
              ))}
            </div>
            <p className="mono text-[11.5px] font-normal tracking-[0.04em] text-zinc-500 dark:text-zinc-400">
              {active === "v1"
                ? "showing the chaos"
                : "showing the system"}
            </p>
          </div>

          {/* Desktop / tablet: system table */}
          <div className="hidden w-full overflow-hidden rounded-[12px] border border-zinc-300/75 bg-[#FDFCF7] dark:border-zinc-700/90 dark:bg-zinc-950/60 md:block">
            <div
              className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.06fr)_minmax(0,1.06fr)] gap-0 border-b border-zinc-300/60 bg-[#EEEDE6] px-5 py-[11px] dark:border-zinc-700/85 dark:bg-zinc-900/75"
              role="row"
            >
              <div
                className="mono text-[11px] font-medium uppercase tracking-[0.08em] text-zinc-500 dark:text-zinc-400"
                role="columnheader"
              >
                Area
              </div>
              <div
                className="mono flex items-center gap-2 border-l border-zinc-300/50 pl-4 text-[11px] font-medium uppercase tracking-[0.08em] text-zinc-500 dark:border-zinc-600 dark:pl-4 dark:text-zinc-400"
                role="columnheader"
              >
                V1
                <span className="font-normal normal-case tracking-normal text-zinc-500 dark:text-zinc-500">
                  · today
                </span>
              </div>
              <div
                className="mono flex items-center gap-2 border-l border-zinc-300/50 pl-4 text-[11px] font-medium uppercase tracking-[0.08em] text-zinc-500 dark:border-zinc-600 dark:pl-4 dark:text-zinc-400"
                role="columnheader"
              >
                V2
                <span className="font-normal normal-case tracking-normal text-zinc-500 dark:text-zinc-500">
                  · what we build
                </span>
              </div>
            </div>

            {ROWS.map((r, i) => {
              const dimV1 = active === "v2";
              const dimV2 = active === "v1";
              return (
                <div
                  key={r.area}
                  className={[
                    "grid grid-cols-[minmax(0,1fr)_minmax(0,1.06fr)_minmax(0,1.06fr)] gap-0 bg-[#FDFCF7] px-5 py-[13px] dark:bg-zinc-950/25",
                    i < ROWS.length - 1
                      ? "border-b border-zinc-200/80 dark:border-zinc-800/90"
                      : "",
                  ].join(" ")}
                  role="row"
                >
                  <div
                    className="min-w-0 pr-3 text-[14px] font-medium leading-snug text-zinc-900 dark:text-zinc-100"
                    role="rowheader"
                  >
                    {r.area}
                  </div>
                  <div
                    className="flex min-w-0 items-start gap-2 border-l border-zinc-200/75 pl-4 dark:border-zinc-700/80"
                    role="cell"
                  >
                    <DotMark tone="warn" dim={dimV1} />
                    <p
                      className={`min-w-0 text-[13px] leading-[1.45] transition-colors duration-200 ${
                        dimV1
                          ? "text-zinc-400 dark:text-zinc-500"
                          : "text-zinc-800 dark:text-zinc-200"
                      }`}
                    >
                      {r.v1}
                    </p>
                  </div>
                  <div
                    className="flex min-w-0 items-start gap-2 border-l border-zinc-200/75 pl-4 dark:border-zinc-700/80"
                    role="cell"
                  >
                    <DotMark tone="accent" dim={dimV2} />
                    <p
                      className={`min-w-0 text-[13px] leading-[1.45] transition-colors duration-200 ${
                        dimV2
                          ? "text-zinc-400 dark:text-zinc-500"
                          : "text-zinc-800 dark:text-zinc-200"
                      }`}
                    >
                      {r.v2}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile: stacked cards */}
          <div className="flex w-full flex-col gap-2.5 md:hidden">
            {ROWS.map((r) => {
              const dimV1 = active === "v2";
              const dimV2 = active === "v1";
              return (
                <article
                  key={r.area}
                  className="overflow-hidden rounded-[12px] border border-zinc-300/75 bg-[#FDFCF7] dark:border-zinc-700/90 dark:bg-zinc-950/60"
                >
                  <div className="border-b border-zinc-300/60 bg-[#EEEDE6] px-4 py-2 dark:border-zinc-700/85 dark:bg-zinc-900/75">
                    <h3 className="text-[14px] font-semibold leading-snug text-zinc-900 dark:text-zinc-50">
                      {r.area}
                    </h3>
                  </div>
                  <div className="divide-y divide-zinc-200/80 dark:divide-zinc-800/90">
                    <div className="flex min-w-0 gap-2.5 px-4 py-2.5">
                      <DotMark tone="warn" dim={dimV1} />
                      <div className="min-w-0 flex-1">
                        <p className="mono text-[10px] uppercase tracking-[0.08em] text-zinc-500 dark:text-zinc-400">
                          V1 · today
                        </p>
                        <p
                          className={`mt-1 break-words text-[13px] leading-relaxed transition-colors duration-200 ${
                            dimV1
                              ? "text-zinc-400 dark:text-zinc-500"
                              : "text-zinc-800 dark:text-zinc-200"
                          }`}
                        >
                          {r.v1}
                        </p>
                      </div>
                    </div>
                    <div className="flex min-w-0 gap-2.5 px-4 py-2.5">
                      <DotMark tone="accent" dim={dimV2} />
                      <div className="min-w-0 flex-1">
                        <p className="mono text-[10px] uppercase tracking-[0.08em] text-zinc-500 dark:text-zinc-400">
                          V2 · what we build
                        </p>
                        <p
                          className={`mt-1 break-words text-[13px] leading-relaxed transition-colors duration-200 ${
                            dimV2
                              ? "text-zinc-400 dark:text-zinc-500"
                              : "text-zinc-800 dark:text-zinc-200"
                          }`}
                        >
                          {r.v2}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
