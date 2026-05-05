import { SectionShell } from "./section-shell";

const points = [
  "Your team delivers, but backstage operations feel chaotic",
  "Too much work depends on manual reminders and follow-ups",
  "Knowledge sits with a few people instead of shared systems",
  "Growth keeps increasing operational load and hidden risk",
  "You feel the ceiling before revenue catches up",
  "Important handoffs still fall between tools",
];

export function PainPoints() {
  return (
    <SectionShell
      muted
      heading="You are probably still in V1 if these sound familiar"
      lead="These are not failure signals. They are signs your operating system needs an upgrade before scale turns friction into drag."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {points.map((point) => (
          <article
            key={point}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_20px_45px_-38px_rgba(15,23,42,0.35)] dark:border-zinc-800 dark:bg-zinc-900/60"
          >
            <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              {point}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
