"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const ACCENT = "oklch(0.86 0.22 142)";
const ACCENT_INK = "oklch(0.32 0.12 142)";

const FLOWS = [
  {
    id: "order",
    name: "Order intake → quote → invoice → payment",
    industry: "Resellers / B2B / SMEs",
    outcome: "No more chasing orders across chat threads",
    steps: [
      {
        kind: "trigger" as const,
        label: "Order request received",
        sub: "From chat, email, or web — one intake path",
      },
      {
        kind: "check" as const,
        label: "Quote generated",
        sub: "Pricing pulled from one source of truth",
      },
      {
        kind: "action" as const,
        label: "Order recorded",
        sub: "Logged with owner and next step visible",
      },
      {
        kind: "action" as const,
        label: "Invoice issued",
        sub: "Sent automatically with clear payment terms",
      },
      {
        kind: "check" as const,
        label: "Payment tracked",
        sub: "Paid / overdue visible to the whole team",
      },
      {
        kind: "notify" as const,
        label: "Customer kept informed",
        sub: "Status updates without someone re-writing the same email",
      },
    ],
  },
  {
    id: "lead",
    name: "Lead inquiry → qualification → follow-up → CRM",
    industry: "Service businesses / operators",
    outcome: "Every lead followed up — nothing slips through",
    steps: [
      {
        kind: "trigger" as const,
        label: "New inquiry arrives",
        sub: "Web form, email, or referral in one queue",
      },
      {
        kind: "check" as const,
        label: "Qualification check",
        sub: "Fit scored against your criteria — not guesswork",
      },
      {
        kind: "action" as const,
        label: "Owner assigned",
        sub: "Routed to the right person by rule — not DMs",
      },
      {
        kind: "action" as const,
        label: "Follow-up scheduled",
        sub: "Reminders and tasks so nothing goes cold",
      },
      {
        kind: "notify" as const,
        label: "CRM kept current",
        sub: "Context captured so the founder isn’t the memory",
      },
    ],
  },
  {
    id: "task",
    name: "Customer request → internal task → owner → status",
    industry: "Operations / support",
    outcome: "Clear ownership — no more “who’s on this?”",
    steps: [
      {
        kind: "trigger" as const,
        label: "Customer request received",
        sub: "Captured from any channel you support",
      },
      {
        kind: "check" as const,
        label: "Categorised",
        sub: "Invoice, support, change, refund — routed cleanly",
      },
      {
        kind: "action" as const,
        label: "Internal task created",
        sub: "With context attached so nobody starts from zero",
      },
      {
        kind: "action" as const,
        label: "Owner assigned",
        sub: "By rule or rotation — not tribal knowledge",
      },
      {
        kind: "notify" as const,
        label: "Status visible end-to-end",
        sub: "Team and customer both see the same truth",
      },
    ],
  },
  {
    id: "supplier",
    name: "Supplier order → reconciliation → shipment & payment",
    industry: "Logistics / sourcing",
    outcome: "Suppliers, shipments, and payments in one ledger",
    steps: [
      {
        kind: "trigger" as const,
        label: "Supplier order placed",
        sub: "Manual or triggered when stock hits your threshold",
      },
      {
        kind: "action" as const,
        label: "Records pulled together",
        sub: "Orders, invoices, and shipping docs de-duplicated",
      },
      {
        kind: "check" as const,
        label: "Reconciled early",
        sub: "Mismatches flagged before month-end fire drills",
      },
      {
        kind: "action" as const,
        label: "Shipment status tracked",
        sub: "One surface — not five browser tabs",
      },
      {
        kind: "notify" as const,
        label: "Payment status synced",
        sub: "Finance and ops stay aligned without a meeting",
      },
    ],
  },
] as const;

const KIND_LABEL: Record<(typeof FLOWS)[number]["steps"][number]["kind"], string> =
  {
    trigger: "TRIGGER",
    check: "CHECK",
    action: "ACTION",
    notify: "NOTIFY",
  };

function PlayIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" aria-hidden>
      <path d="M2 1.5L7 4.5L2 7.5z" fill="currentColor" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" aria-hidden>
      <rect x="2" y="1.5" width="2" height="6" fill="currentColor" />
      <rect x="5.5" y="1.5" width="2" height="6" fill="currentColor" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      aria-hidden
    >
      <path
        d="M2 5.5L4.5 8L9 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExampleWorkflows() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [step, setStep] = useState(0);
  const flow = FLOWS[active]!;

  useEffect(() => {
    if (!playing) return;
    const tick = window.setInterval(() => {
      setStep((s) => (s + 1) % (flow.steps.length + 1));
    }, 1100);
    return () => window.clearInterval(tick);
  }, [playing, flow.steps.length]);

  useEffect(() => {
    setStep(0);
  }, [active]);

  return (
    <section
      id="workflows"
      className="relative scroll-mt-24 border-t border-zinc-200/70 bg-[#F5F4EF] py-24 sm:py-28 lg:py-32 dark:border-zinc-800 dark:bg-zinc-950"
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
          EXAMPLE WORKFLOWS
        </p>
        <h2 className="mt-3 max-w-[46rem] text-balance text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:mt-4 sm:text-5xl lg:text-[3.05rem] lg:leading-[1.08]">
          The kinds of operations we build into systems.
        </h2>
        <p className="mt-5 max-w-[42rem] text-pretty text-lg leading-relaxed text-zinc-600 sm:mt-6 sm:text-xl dark:text-zinc-400">
          Patterns we keep building because they keep working — always shaped to
          your business, your edge cases, your team. The outcome is the same:
          fewer manual hours, clearer ownership, faster turnaround.
        </p>

        <div className="mt-12 overflow-hidden rounded-[12px] border border-zinc-300/75 bg-[#E8E6DF] sm:mt-14 dark:border-zinc-700/85 dark:bg-zinc-900/40">
          <div
            className="flex min-h-0 min-w-0 flex-col overflow-x-auto overscroll-x-contain md:flex-row md:flex-nowrap"
            role="tablist"
            aria-label="Workflow examples"
          >
            {FLOWS.map((f, i) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={[
                  "relative flex min-w-0 w-full flex-col gap-1 border-zinc-300/60 px-4 py-3.5 text-left transition-colors md:flex-1 md:border-r md:px-4 md:py-3.5 lg:px-5 lg:py-4 dark:border-zinc-700/80",
                  "border-b last:border-b-0 md:border-b-0 md:last:border-r-0",
                  active === i
                    ? "bg-[#FDFCF7] dark:bg-zinc-950"
                    : "bg-[#DDDAD2]/50 hover:bg-[#D8D5CD]/65 dark:bg-zinc-900/45 dark:hover:bg-zinc-900/60",
                  active === i
                    ? "text-zinc-900 dark:text-zinc-50"
                    : "text-zinc-500 dark:text-zinc-400",
                ].join(" ")}
              >
                {active === i ? (
                  <span
                    className="absolute left-0 right-0 top-0 h-0.5 md:h-0.5"
                    style={{ background: ACCENT }}
                  />
                ) : null}
                <span className="mono text-[10px] font-medium uppercase tracking-[0.08em] text-zinc-400 dark:text-zinc-500">
                  {f.industry}
                </span>
                <span className="text-[13px] font-medium leading-snug sm:text-[13.5px]">
                  {f.name}
                </span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 border-t border-zinc-300/65 bg-[#FDFCF7] lg:grid-cols-[1fr_minmax(0,300px)] dark:border-zinc-700/85 dark:bg-zinc-950/35">
            <div className="min-w-0 border-b border-zinc-300/60 px-5 py-8 sm:px-8 lg:border-b-0 lg:border-r lg:border-zinc-300/60 dark:border-zinc-700/85">
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="mono inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
                  <span
                    className="size-1.5 shrink-0 rounded-full"
                    style={{ background: ACCENT_INK }}
                  />
                  WORKFLOW RUN · LIVE
                </p>
                <button
                  type="button"
                  onClick={() => setPlaying((p) => !p)}
                  className="mono inline-flex w-max items-center gap-2 rounded-full border border-zinc-300/70 bg-[#F4F3EC] px-3 py-1.5 text-[11px] font-medium tracking-[0.04em] text-zinc-600 transition hover:border-zinc-400 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-500"
                >
                  {playing ? <PauseIcon /> : <PlayIcon />}
                  {playing ? "pause" : "play"}
                </button>
              </div>

              <div className="flex flex-col">
                {flow.steps.map((s, i) => {
                  const done = i < step;
                  const live = i === step;
                  const dim =
                    !done && !live && step > 0 && i > step ? true : false;
                  return (
                    <div key={s.label} className="flex items-stretch gap-3 sm:gap-4">
                      <div className="flex w-7 shrink-0 flex-col items-center sm:w-7">
                        <div
                          className="flex size-[26px] items-center justify-center rounded-full text-xs font-semibold transition-all duration-200 dark:text-zinc-950"
                          style={{
                            background: done
                              ? ACCENT
                                : live
                                  ? "#18181b"
                                  : "#f4f3ee",
                            border: `1px solid ${
                              done
                                ? ACCENT
                                : live
                                  ? "#18181b"
                                  : "#e4e4e7"
                            }`,
                            color: done
                              ? ACCENT_INK
                              : live
                                ? "#fafafa"
                                : "#a1a1aa",
                            boxShadow: live
                              ? "0 0 0 4px color-mix(in oklab, #27272a 8%, transparent)"
                              : undefined,
                          }}
                        >
                          {done ? <CheckIcon /> : <span>{i + 1}</span>}
                        </div>
                        {i < flow.steps.length - 1 ? (
                          <div
                            className={`my-1 min-h-[12px] w-px flex-1 transition-colors duration-200 ${
                              i < step ? "" : "bg-zinc-200 dark:bg-zinc-700"
                            }`}
                            style={
                              i < step ? { background: ACCENT } : undefined
                            }
                          />
                        ) : null}
                      </div>

                      <div
                        className={`min-w-0 flex-1 pb-6 pt-0.5 transition-opacity duration-200 sm:pb-7 ${dim ? "opacity-55" : "opacity-100"}`}
                      >
                        <div className="mb-1 flex flex-wrap items-center gap-2">
                          <span className="mono rounded-full border border-zinc-300/70 bg-[#F4F3EC] px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.07em] text-zinc-600 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
                            {KIND_LABEL[s.kind]}
                          </span>
                          <span className="text-[14.5px] font-medium text-zinc-900 dark:text-zinc-100">
                            {s.label}
                          </span>
                        </div>
                        <p className="mono text-[12px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                          {s.sub}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <aside className="flex min-w-0 flex-col gap-6 bg-[#F0EFE8] px-5 py-8 sm:px-7 dark:bg-zinc-950/55">
              <div className="min-w-0">
                <p className="mono mb-2 text-[10.5px] font-medium uppercase tracking-[0.08em] text-zinc-500 dark:text-zinc-400">
                  OUTCOME
                </p>
                <p className="text-[1.35rem] font-medium leading-snug tracking-[-0.018em] text-zinc-900 dark:text-zinc-50 sm:text-[22px]">
                  {flow.outcome}
                </p>
              </div>

              <div className="border-t border-dashed border-zinc-300/70 pt-6 dark:border-zinc-700/80">
                <p className="mono mb-3 text-[10.5px] font-medium uppercase tracking-[0.08em] text-zinc-500 dark:text-zinc-400">
                  WHAT YOU TYPICALLY GAIN
                </p>
                <ul className="flex flex-col gap-2.5 text-[13px] leading-snug text-zinc-800 dark:text-zinc-200">
                  {[
                    "Fewer manual hours each week",
                    "Faster, more predictable turnaround",
                    "Less founder / key-person dependency",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-2.5">
                      <span
                        className="mt-1.5 size-1 shrink-0 rounded-full"
                        style={{ background: ACCENT }}
                      />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-dashed border-zinc-300/70 pt-6 dark:border-zinc-700/80">
                <p className="mono mb-2 text-[10.5px] font-medium uppercase tracking-[0.08em] text-zinc-500 dark:text-zinc-400">
                  BUILD TIME
                </p>
                <p className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
                  2–4 weeks
                </p>
                <p className="mt-1 text-[13px] text-zinc-500 dark:text-zinc-400">
                  fixed scope, fixed price
                </p>
              </div>

              <div className="mt-auto pt-2">
                <Link
                  href="#workflows"
                  className="mono inline-flex items-center gap-1 text-[13px] font-medium text-zinc-600 underline decoration-zinc-400/80 underline-offset-4 transition hover:text-zinc-900 dark:text-zinc-400 dark:decoration-zinc-600 dark:hover:text-zinc-200"
                >
                  See more workflows →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
