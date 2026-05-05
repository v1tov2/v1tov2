import { SectionShell } from "./section-shell";

const steps = [
  {
    title: "Understand your V1",
    body: "Map how work actually happens now, including hacks and hidden dependencies.",
  },
  {
    title: "Design your V2",
    body: "Choose what to standardize, automate, integrate, or rebuild by leverage and risk.",
  },
  {
    title: "Build and implement",
    body: "Ship workflows, tooling, and guardrails that your team can adopt quickly.",
  },
  {
    title: "Refine and scale",
    body: "Strengthen what breaks first and extend what delivers ROI next.",
  },
];

export function Process() {
  return (
    <SectionShell
      heading="Simple. Practical. Around your reality."
      lead="A clear delivery model that prioritizes operational outcomes over vanity outputs."
      muted
    >
      <ol className="grid gap-6 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-[0_24px_50px_-38px_rgba(15,23,42,0.35)] dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <span className="font-mono text-xs text-zinc-500 dark:text-zinc-500">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-xl font-semibold text-zinc-950 dark:text-zinc-100">
              {step.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
