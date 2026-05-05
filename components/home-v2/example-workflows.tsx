import Link from "next/link";

import { SectionShell } from "./section-shell";

const workflows = [
  {
    title: "Order intake to payment",
    steps: ["Capture request", "Generate quote", "Issue invoice", "Track payment"],
  },
  {
    title: "Lead inquiry to CRM",
    steps: ["Receive inquiry", "Qualify fit", "Assign owner", "Schedule follow-up"],
  },
  {
    title: "Customer request to ownership",
    steps: ["Route request", "Create task", "Assign owner", "Track status"],
  },
];

export function ExampleWorkflows() {
  return (
    <SectionShell
      id="workflows"
      muted
      heading="Example workflows we implement"
      lead="Patterns adapted to your business: fewer handoffs, clearer ownership, better operating visibility."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {workflows.map((workflow) => (
          <article
            key={workflow.title}
            className="rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50/60 p-7 shadow-[0_24px_50px_-36px_rgba(15,23,42,0.35)] dark:border-zinc-800 dark:from-zinc-900/70 dark:to-zinc-900/40"
          >
            <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-100">
              {workflow.title}
            </h3>
            <ol className="mt-4 space-y-2">
              {workflow.steps.map((step, index) => (
                <li
                  key={step}
                  className="flex items-center gap-3 text-base text-zinc-600 dark:text-zinc-400"
                >
                  <span className="inline-flex size-6 items-center justify-center rounded-full border border-zinc-300 text-xs font-medium dark:border-zinc-700">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="#packages"
          className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 px-6 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-500"
        >
          View packages
        </Link>
      </div>
    </SectionShell>
  );
}
