type Props = {
  accent: string;
};

const ACCENT_INK = "oklch(0.32 0.12 142)";

export function HeroDashboardMockup({ accent }: Props) {
  return (
    <div className="relative" aria-hidden>
      <div
        className="pointer-events-none absolute -inset-8 rounded-[26px] opacity-45 blur-3xl dark:opacity-60 sm:-inset-10"
        style={{
          background: `radial-gradient(ellipse 58% 48% at 55% 38%, color-mix(in oklab, ${accent} 12%, white) 0%, transparent 68%)`,
        }}
      />

      <div className="relative overflow-hidden rounded-2xl border border-zinc-300/75 bg-[#FAFAF7]/98 shadow-[0_16px_48px_-22px_rgba(11,11,10,0.1),0_1px_0_rgba(11,11,10,0.04)] backdrop-blur-[10px] dark:border-zinc-600/50 dark:bg-zinc-950/88 dark:shadow-[0_24px_70px_-28px_rgba(0,0,0,0.55)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.22]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(11,11,10,0.028) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(11,11,10,0.028) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse 88% 78% at 50% 40%, black 18%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 88% 78% at 50% 40%, black 18%, transparent 78%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 hidden dark:block"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.028) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.028) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse 88% 78% at 50% 40%, black 18%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 88% 78% at 50% 40%, black 18%, transparent 78%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_85%_0%,color-mix(in_oklab,oklch(0.86_0.22_142)_8%,#fff),transparent)] dark:bg-[radial-gradient(ellipse_70%_50%_at_85%_0%,color-mix(in_oklab,oklch(0.86_0.22_142)_6%,transparent),transparent)]"
        />

        {/* Chrome */}
        <div className="relative flex items-center justify-between gap-3 border-b border-zinc-200/85 px-4 py-3 sm:px-5 dark:border-white/10">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex shrink-0 gap-1.5">
              <span className="size-2.5 rounded-full bg-zinc-300/95 dark:bg-white/14" />
              <span className="size-2.5 rounded-full bg-zinc-300/95 dark:bg-white/14" />
              <span className="size-2.5 rounded-full bg-zinc-300/95 dark:bg-white/14" />
            </span>
            <div className="min-w-0">
              <p className="text-[13px] font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                Site care
              </p>
              <p className="mono truncate text-[11px] text-zinc-500 dark:text-zinc-500">
                Health · updates · store · support
              </p>
            </div>
          </div>
          <span
            className="mono shrink-0 rounded-full border bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider dark:border-white/12 dark:bg-white/[0.06]"
            style={{
              borderColor: `color-mix(in oklab, ${accent} 38%, rgb(212 212 216))`,
              color: accent,
            }}
          >
            Live
          </span>
        </div>

        {/* Single calm workspace */}
        <div className="relative divide-y divide-zinc-200/60 px-4 py-2 dark:divide-white/[0.08] sm:px-5 sm:py-3">
          <section className="flex flex-wrap items-center justify-between gap-3 py-3.5 sm:py-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Website health
              </p>
              <p className="mt-1 text-[15px] font-semibold text-zinc-900 dark:text-zinc-50">
                Good
                <span className="ml-2 text-[13px] font-normal text-zinc-500 dark:text-zinc-400">
                  · checked today
                </span>
              </p>
            </div>
            <span
              className="rounded-full px-2.5 py-1 text-[12px] font-medium"
              style={{
                background: `color-mix(in oklab, ${accent} 12%, white)`,
                color: ACCENT_INK,
              }}
            >
              Monitoring on
            </span>
          </section>

          <section className="py-3.5 sm:py-4">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Updates
            </p>
            <ul className="mt-2.5 space-y-2 text-[13.5px] leading-snug text-zinc-800 dark:text-zinc-200">
              {["Homepage hero refresh", "Policy pages", "Product imagery"].map(
                (line) => (
                  <li key={line} className="flex items-start gap-2.5">
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full"
                      style={{
                        background: accent,
                        boxShadow: `0 0 0 2px color-mix(in oklab, ${accent} 22%, transparent)`,
                      }}
                    />
                    {line}
                  </li>
                ),
              )}
            </ul>
          </section>

          <section className="py-3.5 sm:py-4">
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  Performance
                </p>
                <p className="mt-1 text-[22px] font-semibold tabular-nums tracking-tight text-zinc-900 dark:text-zinc-50">
                  86
                  <span className="ml-1 text-[13px] font-medium text-zinc-500">
                    score
                  </span>
                </p>
              </div>
              <div className="flex h-10 items-end gap-1" role="presentation">
                {[0.35, 0.5, 0.42, 0.68, 0.45, 0.75, 0.55].map((h, i) => (
                  <div
                    key={i}
                    className="w-1.5 rounded-[2px] bg-zinc-200/90 dark:bg-white/12"
                    style={{
                      height: `${12 + Math.round(h * 22)}px`,
                      background:
                        i >= 4
                          ? `linear-gradient(180deg, color-mix(in oklab, ${accent} 42%, white), color-mix(in oklab, ${accent} 14%, white))`
                          : undefined,
                    }}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="flex flex-wrap items-center justify-between gap-3 py-3.5 sm:py-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Ecommerce backend
              </p>
              <p className="mt-1 text-[14px] font-medium text-zinc-800 dark:text-zinc-200">
                Orders · inventory sync
              </p>
              <p className="mono mt-0.5 text-[12px] text-zinc-500 dark:text-zinc-500">
                Last sync · 12 min ago
              </p>
            </div>
            <span
              className="text-[12px] font-semibold"
              style={{ color: ACCENT_INK }}
            >
              In sync
            </span>
          </section>

          <section className="py-3.5 sm:py-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Support tasks
              </p>
              <p className="text-[12px] text-zinc-600 dark:text-zinc-400">
                2 open
              </p>
            </div>
            <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-zinc-200/85 dark:bg-white/[0.08]">
              <div
                className="h-full w-[58%] rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${accent}, color-mix(in oklab, ${accent} 72%, white))`,
                }}
              />
            </div>
            <p className="mt-2 text-[13px] text-zinc-600 dark:text-zinc-400">
              Plugin security patch — scheduled
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
