type Props = {
  accent: string;
};

const ACCENT_INK = "oklch(0.32 0.12 142)";

const WORKFLOW_STEPS = [
  "Order received",
  "Team assigned",
  "Approval checked",
  "Customer updated",
  "Synced to dashboard",
] as const;

export function HeroWorkflowMockup({ accent }: Props) {
  return (
    <div className="relative w-full max-w-full" aria-hidden>
      <div
        className="pointer-events-none absolute -inset-8 rounded-[28px] opacity-35 blur-3xl dark:opacity-50"
        style={{
          background: `radial-gradient(ellipse 58% 48% at 45% 40%, color-mix(in oklab, ${accent} 10%, white) 0%, transparent 72%)`,
        }}
      />

      <div className="relative overflow-hidden rounded-2xl border border-zinc-300/75 bg-[#FAFAF7]/98 shadow-[0_18px_48px_-26px_rgba(11,11,10,0.1),0_1px_0_rgba(11,11,10,0.04)] backdrop-blur-[12px] dark:border-zinc-600/45 dark:bg-zinc-950/93 dark:shadow-[0_22px_64px_-30px_rgba(0,0,0,0.52)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.28] dark:opacity-[0.16]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(11,11,10,0.022) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(11,11,10,0.022) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 92% 82% at 50% 42%, black 15%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 92% 82% at 50% 42%, black 15%, transparent 80%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 hidden dark:block"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 92% 82% at 50% 42%, black 15%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 92% 82% at 50% 42%, black 15%, transparent 80%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_42%_at_50%_-8%,color-mix(in_oklab,oklch(0.86_0.22_142)_7%,#fff),transparent)] dark:bg-[radial-gradient(ellipse_72%_42%_at_50%_-8%,color-mix(in_oklab,oklch(0.86_0.22_142)_5%,transparent),transparent)]"
        />

        {/* Browser chrome */}
        <div className="relative border-b border-zinc-200/90 bg-white/88 px-4 py-3 dark:border-white/10 dark:bg-zinc-900/55 sm:px-5 sm:py-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="flex shrink-0 gap-1.5">
                <span className="size-2.5 rounded-full bg-zinc-300/95 dark:bg-white/16" />
                <span className="size-2.5 rounded-full bg-zinc-300/95 dark:bg-white/16" />
                <span className="size-2.5 rounded-full bg-zinc-300/95 dark:bg-white/16" />
              </span>
              <div className="min-w-0">
                <p className="text-[14px] font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-[15px]">
                  Operations dashboard
                </p>
                <p className="mt-0.5 text-[12px] leading-snug text-zinc-500 dark:text-zinc-400">
                  Live workflows · approvals · visibility
                </p>
              </div>
            </div>
            <span
              className="mono shrink-0 rounded-full border bg-white/95 px-3 py-1 text-[12px] font-bold uppercase tracking-wider dark:border-white/12 dark:bg-white/[0.06]"
              style={{
                borderColor: `color-mix(in oklab, ${accent} 35%, rgb(212 212 216))`,
                color: accent,
              }}
            >
              Live
            </span>
          </div>
        </div>

        {/* Two-column canvas */}
        <div className="relative px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-11">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            {/* Workflow */}
            <div>
              <p className="text-[13px] font-semibold tracking-tight text-zinc-400 dark:text-zinc-500">
                Workflow
              </p>
              <div className="relative mt-8 sm:mt-10">
                <div
                  className="absolute left-[7px] top-[0.65rem] bottom-[0.65rem] w-px bg-zinc-200/90 dark:bg-white/12"
                  aria-hidden
                />
                <div
                  className="absolute left-[7px] top-[0.65rem] h-[calc(100%-1.3rem)] w-px opacity-80 dark:opacity-70"
                  style={{
                    background: `linear-gradient(180deg, color-mix(in oklab, ${accent} 45%, rgba(228 228 231)) 0%, color-mix(in oklab, ${accent} 22%, rgba(228 228 231)) 55%, rgba(228 228 231 / 0.35) 100%)`,
                  }}
                  aria-hidden
                />
                <ul className="relative space-y-0">
                  {WORKFLOW_STEPS.map((label, i) => {
                    const isLast = i === WORKFLOW_STEPS.length - 1;
                    const emphasis = i >= 3;
                    return (
                      <li
                        key={label}
                        className={`relative flex gap-5 ${isLast ? "" : "pb-9 sm:pb-10"}`}
                      >
                        <div className="relative z-10 flex shrink-0 justify-center pt-1">
                          <span
                            className="size-3.5 rounded-full border-2 bg-[#FAFAF7] shadow-[0_1px_2px_rgba(11,11,10,0.04)] dark:bg-zinc-950"
                            style={{
                              borderColor: emphasis
                                ? `color-mix(in oklab, ${accent} 55%, rgb(212 212 216))`
                                : "rgb(212 212 216 / 0.95)",
                              background: isLast
                                ? `color-mix(in oklab, ${accent} 16%, #FAFAF7)`
                                : undefined,
                            }}
                            aria-hidden
                          />
                        </div>
                        <p
                          className={`pt-0.5 text-[16px] font-medium leading-snug tracking-tight sm:text-[17px] ${isLast ? "" : "text-zinc-700 dark:text-zinc-200"}`}
                          style={isLast ? { color: ACCENT_INK } : undefined}
                        >
                          {label}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Visibility — single panel */}
            <div>
              <p className="text-[13px] font-semibold tracking-tight text-zinc-400 dark:text-zinc-500">
                Visibility
              </p>
              <div className="mt-8 rounded-2xl border border-zinc-200/65 bg-white/55 px-7 py-8 sm:mt-10 sm:px-8 sm:py-10 dark:border-white/[0.09] dark:bg-zinc-900/25">
                <div>
                  <p className="text-[14px] font-medium text-zinc-500 dark:text-zinc-400">
                    Active tasks
                  </p>
                  <p className="mt-2 text-[2.5rem] font-semibold leading-none tabular-nums tracking-tight text-zinc-900 sm:text-[2.75rem] dark:text-zinc-50">
                    12
                  </p>
                </div>

                <div className="mt-10 space-y-5 text-[15px] leading-snug text-zinc-600 dark:text-zinc-400">
                  <p>
                    <span className="text-zinc-500 dark:text-zinc-500">SLA</span>{" "}
                    <span
                      className="font-semibold"
                      style={{ color: ACCENT_INK }}
                    >
                      Healthy
                    </span>
                  </p>
                  <p className="font-medium text-zinc-700 dark:text-zinc-300">
                    Team online
                  </p>
                </div>

                <div className="mt-10" aria-hidden>
                  <div className="flex h-12 items-end gap-1.5">
                    {[0.28, 0.45, 0.38, 0.55, 0.42, 0.52].map((h, idx) => (
                      <div
                        key={idx}
                        className="flex-1 rounded-sm bg-zinc-200/80 dark:bg-white/10"
                        style={{
                          height: `${Math.round(28 + h * 48)}%`,
                          background:
                            idx >= 4
                              ? `linear-gradient(180deg, color-mix(in oklab, ${accent} 35%, white), color-mix(in oklab, ${accent} 12%, white))`
                              : undefined,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-10 flex items-center gap-2.5">
                  <span
                    className="size-2 rounded-full"
                    style={{
                      background: accent,
                      boxShadow: `0 0 0 3px color-mix(in oklab, ${accent} 18%, transparent)`,
                    }}
                    aria-hidden
                  />
                  <p className="text-[14px] font-medium text-zinc-700 dark:text-zinc-300">
                    Live sync
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
