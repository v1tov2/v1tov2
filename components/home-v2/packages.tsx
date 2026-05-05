import Link from "next/link";

import { SectionShell } from "./section-shell";

const tiers = [
  {
    name: "V2 Build",
    price: "from HKD 18,000",
    detail:
      "Design and ship a focused V2 system in your operation: internal tools, automation, or a custom business workflow.",
    bullets: [
      "Workflow mapping and V2 blueprint",
      "One production-ready system",
      "Adoption and rollout support",
    ],
    featured: true,
  },
  {
    name: "V2 Operate",
    price: "from HKD 6,800/month",
    detail:
      "Ongoing systems partner to improve, extend, and stabilize your V2 as volume grows.",
    bullets: [
      "Continuous workflow improvements",
      "Ops-critical support",
      "Monthly system and ROI review",
    ],
    featured: false,
  },
];

export function Packages() {
  return (
    <SectionShell
      id="packages"
      heading="Packages"
      lead="Audit is your free entry point. Packages start when we move from diagnosis into execution."
    >
      <div className="rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50/90 to-white p-7 shadow-[0_25px_55px_-40px_rgba(2,132,199,0.5)] dark:border-sky-900/40 dark:from-sky-950/25 dark:to-zinc-900 sm:p-8">
        <h3 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-100">
          Book a free V2 Audit
        </h3>
        <p className="mt-3 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
          A focused walkthrough of how your operations run today — and where a
          proper V2 system would remove the most friction.
        </p>
        <p className="mt-3 font-mono text-xs tracking-wide text-zinc-600 dark:text-zinc-400">
          Free 30-min call · No pitch. No obligation.
        </p>
        <div className="mt-5">
          <Link
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
          >
            Book a free V2 Audit
          </Link>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {tiers.map((tier) => (
          <article
            key={tier.name}
            className={`rounded-3xl border p-7 shadow-[0_28px_60px_-45px_rgba(15,23,42,0.45)] sm:p-9 ${
              tier.featured
                ? "border-zinc-900 bg-zinc-900 text-zinc-100 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
                : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/50"
            }`}
          >
            <h3 className="text-2xl font-semibold tracking-tight">{tier.name}</h3>
            <p className="mt-3 text-2xl font-medium">{tier.price}</p>
            <p className="mt-4 text-base leading-relaxed opacity-90">{tier.detail}</p>
            <ul className="mt-5 space-y-2">
              {tier.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2 text-base opacity-90">
                  <span>‧</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="mt-7 text-base text-zinc-600 dark:text-zinc-400">
        Introductory pricing for selected early clients. Final scope depends on
        workflow complexity, integrations, and number of users.
      </p>
    </SectionShell>
  );
}
