const capabilities = [
  {
    title: "Internal tools & dashboards",
    body: "Bring operations into one accountable place",
  },
  {
    title: "Workflow automation",
    body: "Strip out repetitive manual work without breaking the exceptions",
  },
  {
    title: "AI-assisted processes",
    body: "Speed up drafting, routing, triage, and checks—where quality and speed both win",
  },
  {
    title: "Custom business systems",
    body: "Shaped around your operations, constraints, and customers",
  },
];

export function WhatWeDo() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-zinc-200/80 bg-white p-8 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.2)] dark:border-zinc-800 dark:bg-zinc-900/50 dark:shadow-[0_24px_60px_-40px_rgba(0,0,0,0.55)] sm:p-10 lg:p-12">
          <h2 className="max-w-xl text-balance text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
            We don’t just advise. We build.
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            We design and ship real systems inside your business—the kind your
            team touches every week, not a slide deck you file away.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {capabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-zinc-100 bg-zinc-50/50 p-6 transition-colors hover:border-zinc-200 hover:bg-white dark:border-zinc-800 dark:bg-zinc-950/50 dark:hover:border-zinc-700 dark:hover:bg-zinc-950"
              >
                <h3 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.body}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-10 font-medium text-zinc-800 dark:text-zinc-200">
            No cookie-cutter “transformation theater.” Built for your actual
            operations.
          </p>
        </div>
      </div>
    </section>
  );
}
