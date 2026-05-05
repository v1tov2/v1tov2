const ACCENT = "oklch(0.86 0.22 142)";

const STEPS = [
  {
    n: "01",
    name: "Understand your V1",
    dur: "Week 1",
    desc: "We sit with the people doing the work. Map the real workflow, including the hacks that keep you afloat. No assumptions, no slide deck templates.",
    out: ["Workflow map", "Pain inventory", "Constraint list"],
  },
  {
    n: "02",
    name: "Design your V2",
    dur: "Week 1–2",
    desc: "We pick what to standardise, automate, integrate, or rebuild — prioritised by leverage and risk. You see the plan before we touch a line of code.",
    out: ["V2 blueprint", "Stack choice", "Build sequence"],
  },
  {
    n: "03",
    name: "Build & implement",
    dur: "Week 2–8",
    desc: "We ship in slices on a fixed-scope timeline. Each slice goes live, gets used, and earns its keep — no big-bang launches, no write-only docs.",
    out: ["Working systems", "Team training", "Adoption support"],
  },
  {
    n: "04",
    name: "Refine & scale",
    dur: "Ongoing",
    desc: "We tighten what breaks first, expand what earns ROI next, and keep the system sane as volume grows. Or we hand it off cleanly to your team.",
    out: ["Health reviews", "New workflows", "Day-2 maintenance"],
  },
] as const;

export function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-24 border-t border-zinc-200/70 bg-[#FAFAF7] py-24 sm:py-28 lg:py-32 dark:border-zinc-800 dark:bg-zinc-950"
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
          How we work
        </p>
        <h2 className="mt-5 max-w-[44rem] text-balance text-4xl font-semibold tracking-tight text-zinc-950 sm:mt-6 sm:text-5xl lg:mt-6 lg:text-[3.05rem] lg:leading-[1.08] dark:text-zinc-50">
          Simple. Practical. Around
          <br />
          your reality.
        </h2>
        <p className="mt-5 max-w-[42rem] text-pretty text-lg leading-relaxed text-zinc-600 sm:mt-6 sm:text-xl dark:text-zinc-400">
          Four steps. Priorities first, fluff never. Most engagements move from
          V1 audit to live V2 system in 4–8 weeks.
        </p>

        <div className="relative mt-10 overflow-hidden rounded-[12px] border border-zinc-200/80 bg-[#FDFCF7] sm:mt-12 dark:border-zinc-700/90 dark:bg-zinc-900/50">
          <div className="grid grid-cols-1 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className={`relative flex min-h-0 flex-col gap-4 px-5 py-7 sm:px-6 sm:py-8 lg:min-h-[320px] lg:gap-4 lg:border-r lg:border-zinc-200/80 lg:py-7 dark:lg:border-zinc-700/85 ${
                  i < STEPS.length - 1
                    ? "border-b border-zinc-200/80 lg:border-b-0 dark:border-zinc-700/85"
                    : ""
                } ${i === STEPS.length - 1 ? "lg:border-r-0" : ""}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="mono text-[11px] font-medium uppercase tracking-[0.08em] text-zinc-400 dark:text-zinc-500">
                    {s.n}
                  </span>
                  <span className="mono shrink-0 rounded-full border border-zinc-200/90 bg-white/90 px-2.5 py-0.5 text-[10.5px] font-medium text-zinc-700 dark:border-zinc-600 dark:bg-zinc-900/80 dark:text-zinc-300">
                    {s.dur}
                  </span>
                </div>

                <h3 className="text-[1.35rem] font-semibold leading-snug tracking-[-0.022em] text-zinc-950 sm:text-[22px] dark:text-zinc-50">
                  {s.name}
                </h3>
                <p className="text-[13.5px] leading-[1.55] text-zinc-600 dark:text-zinc-400">
                  {s.desc}
                </p>

                <div className="mt-auto border-t border-dashed border-zinc-200/90 pt-4 dark:border-zinc-700/80">
                  <p className="mono mb-2.5 text-[10.5px] font-medium uppercase tracking-[0.07em] text-zinc-400 dark:text-zinc-500">
                    You leave with
                  </p>
                  <ul className="flex flex-col gap-2">
                    {s.out.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-[13px] leading-snug text-zinc-800 dark:text-zinc-200"
                      >
                        <span
                          className="size-1 shrink-0 rounded-full"
                          style={{ background: ACCENT }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {i < STEPS.length - 1 ? (
                  <div
                    className="absolute right-0 top-[2.35rem] z-[1] hidden translate-x-1/2 lg:flex"
                    aria-hidden
                  >
                    <div className="flex size-3.5 items-center justify-center rounded-full border border-zinc-200/90 bg-[#FDFCF7] dark:border-zinc-600 dark:bg-zinc-900">
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        className="text-zinc-500 dark:text-zinc-400"
                      >
                        <path
                          d="M2 1.5L5 4L2 6.5"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
