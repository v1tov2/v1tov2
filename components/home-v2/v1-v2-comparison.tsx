import { SectionShell } from "./section-shell";

const v1Cards = [
  "Email snippets and ad-hoc requests",
  "Spreadsheet references with conflicting versions",
  "Generic team chat messages for status chasing",
  "Sticky-note priorities and memory-based handoffs",
  "Manual checklists that break under pressure",
];

const v2Cards = [
  "Structured intake and clear workflow states",
  "Defined steps from request to completion",
  "Status tracking visible to the right people",
  "Order and payment visibility in one place",
  "Reliable handoffs with guardrails and ownership",
];

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
          <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function V1V2Comparison() {
  return (
    <SectionShell
      eyebrow="Systems, not hype"
      heading="V1 vs V2: same business, different operating system"
      lead="V1 usually works until scale exposes the cracks. V2 gives your team a steadier system to execute with less friction."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-zinc-200 bg-gradient-to-b from-zinc-50 to-white p-7 shadow-[0_24px_55px_-40px_rgba(15,23,42,0.3)] dark:border-zinc-800 dark:from-zinc-900/70 dark:to-zinc-900/40 sm:p-9">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">V1: fragmented manual operations</h3>
          <div className="mt-5">
            <List items={v1Cards} />
          </div>
        </article>

        <article className="rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-7 shadow-[0_24px_55px_-40px_rgba(2,132,199,0.5)] dark:border-sky-900/40 dark:from-sky-950/20 dark:to-zinc-900 sm:p-9">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">V2: structured, trackable, scalable</h3>
          <div className="mt-5">
            <List items={v2Cards} />
          </div>
        </article>
      </div>
    </SectionShell>
  );
}
