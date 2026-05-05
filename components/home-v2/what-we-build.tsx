import { SectionShell } from "./section-shell";

const offerings = [
  {
    title: "Internal tools and dashboards",
    body: "Bring operations into one accountable place your team can trust.",
  },
  {
    title: "Workflow automation",
    body: "Remove repetitive manual work while handling real exceptions safely.",
  },
  {
    title: "AI-assisted processes",
    body: "Use AI for drafting, triage, and checks where speed and quality both matter.",
  },
  {
    title: "Custom business systems",
    body: "Build around your constraints, customers, and operating model.",
  },
];

export function WhatWeBuild() {
  return (
    <SectionShell
      id="what-we-build"
      heading="We do not just advise. We build."
      lead="We ship systems your team uses weekly, not strategy slides that sit untouched."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {offerings.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50/60 p-7 shadow-[0_25px_50px_-38px_rgba(15,23,42,0.3)] dark:border-zinc-800 dark:from-zinc-900/70 dark:to-zinc-900/40"
          >
            <h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-100">
              {item.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {item.body}
            </p>
          </article>
        ))}
      </div>
      <p className="mt-10 text-base font-medium text-zinc-700 dark:text-zinc-300">
        No cookie-cutter transformation theater. Built for your actual operations.
      </p>
    </SectionShell>
  );
}
