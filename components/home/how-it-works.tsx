const steps = [
  {
    title: "Understand your V1",
    body: "We map how work really happens today—including the hacks that keep you afloat.",
  },
  {
    title: "Design your V2",
    body: "We choose what to standardize, automate, integrate, or rebuild—prioritized by leverage and risk.",
  },
  {
    title: "Build & implement",
    body: "We ship workflows, tooling, automation, and the guardrails that make adoption stick.",
  },
  {
    title: "Refine & scale",
    body: "We tighten what breaks first, expand what earns ROI next, and keep the system sane as volume grows.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl rounded-3xl border border-zinc-200/80 bg-gradient-to-b from-white via-white to-zinc-50 p-8 dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-950 sm:p-10 lg:p-12">
        <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
          Simple. Practical. Around your reality.
        </h2>
        <ol className="mt-12 grid gap-8 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, i) => (
            <li key={step.title} className="relative lg:max-w-none">
              <div className="flex items-start gap-4 lg:flex-col lg:gap-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-white font-mono text-sm font-semibold text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {step.body}
                  </p>
                </div>
              </div>
              {i < steps.length - 1 ? (
                <div
                  className="hidden lg:block lg:absolute lg:left-[2.375rem] lg:top-[3rem] lg:h-px lg:w-[calc(100%+1rem)] lg:bg-gradient-to-r lg:from-zinc-200 lg:to-transparent dark:lg:from-zinc-700"
                  aria-hidden
                />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
