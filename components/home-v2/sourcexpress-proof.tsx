import { SectionShell } from "./section-shell";

export function SourcexpressProof() {
  return (
    <SectionShell
      heading="SourceXpress proof"
      lead="V1toV2 comes from building real operating systems inside an actual operating business."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <article className="rounded-3xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50/50 p-8 shadow-[0_28px_60px_-45px_rgba(15,23,42,0.4)] dark:border-zinc-800 dark:from-zinc-900/70 dark:to-zinc-900/40 sm:p-10">
          <p className="text-xl leading-relaxed text-zinc-800 dark:text-zinc-200">
            “I built SourceXpress, a real cross-border logistics business and web
            platform handling shipments, sourcing requests, customer records,
            payment flows, and admin workflows. V1toV2 comes from building
            systems for a real operating business — not theory.”
          </p>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-500">
            Founder, V1toV2
          </p>
        </article>

        <article className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 shadow-[0_24px_55px_-42px_rgba(15,23,42,0.35)] dark:border-zinc-800 dark:bg-zinc-900/40 sm:p-10">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Why this matters
          </h3>
          <ul className="mt-5 space-y-3 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            <li>Built around real shipments, requests, and records</li>
            <li>Battle-tested with live admin and payment workflows</li>
            <li>Grounded in day-two maintainability, not launch theater</li>
          </ul>
        </article>
      </div>
    </SectionShell>
  );
}
