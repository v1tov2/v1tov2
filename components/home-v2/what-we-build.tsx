"use client";

import { useState } from "react";

const ACCENT = "oklch(0.86 0.22 142)";
const ACCENT_INK = "oklch(0.32 0.12 142)";

const CAPABILITIES = [
  {
    tag: "01",
    title: "Internal tools & dashboards",
    desc: "One place where your team sees orders, customers, requests, and payments — without duct-taping six tabs together.",
    bullets: [
      "Custom admin panels",
      "Live operational dashboards",
      "Role-based access",
      "Built around your data",
    ],
    visual: "dashboard" as const,
  },
  {
    tag: "02",
    title: "Workflow automation",
    desc: "The repetitive work your team does every day — captured, automated, observable. Humans handle the exceptions, not the routine.",
    bullets: [
      "Order → invoice → payment",
      "Lead → follow-up → CRM",
      "Request → task → owner",
      "Reliable, with retries & logs",
    ],
    visual: "flow" as const,
  },
  {
    tag: "03",
    title: "Practical AI, where it earns it",
    desc: "Not AI everywhere — AI in the specific places where it removes manual reading, drafting, or routing, behind clear guardrails.",
    bullets: [
      "Drafting & summarising",
      "Classifying & routing",
      "Extracting from documents",
      "Quality checks & review",
    ],
    visual: "ai" as const,
  },
  {
    tag: "04",
    title: "Custom business systems",
    desc: "When off-the-shelf doesn’t fit. Real software, shaped around how your operation runs — and built to be maintained beyond launch.",
    bullets: [
      "Customer portals",
      "Supplier and partner apps",
      "Inventory & ops platforms",
      "Built for day 2",
    ],
    visual: "system" as const,
  },
] as const;

function BuildVisual({
  kind,
  active,
}: {
  kind: (typeof CAPABILITIES)[number]["visual"];
  active: boolean;
}) {
  const stroke = active ? "#27272a" : "#a1a1aa";
  const fill = active
    ? `color-mix(in oklab, ${ACCENT} 30%, transparent)`
    : "transparent";
  const loFill = "#f4f4f5";

  return (
    <svg
      width={100}
      height={60}
      viewBox="0 0 100 60"
      className="h-[48px] w-[min(92px,26vw)] shrink-0 opacity-[0.92] sm:h-[54px]"
      aria-hidden
    >
      {kind === "dashboard" ? (
        <>
          <rect
            x="1"
            y="1"
            width="98"
            height="58"
            rx="3"
            stroke={stroke}
            fill="none"
          />
          <rect x="6" y="6" width="20" height="48" rx="2" fill={loFill} />
          <rect x="30" y="6" width="64" height="14" rx="2" fill={fill} stroke={stroke} />
          <rect x="30" y="24" width="30" height="30" rx="2" stroke={stroke} fill="none" />
          <rect x="64" y="24" width="30" height="30" rx="2" stroke={stroke} fill="none" />
          <path
            d="M34 44 L40 36 L46 40 L52 32 L58 38"
            stroke={active ? ACCENT_INK : stroke}
            fill="none"
            strokeWidth="1.2"
          />
        </>
      ) : null}

      {kind === "flow" ? (
        <>
          <circle cx="12" cy="30" r="8" stroke={stroke} fill={fill} />
          <circle cx="50" cy="14" r="8" stroke={stroke} fill="none" />
          <circle cx="50" cy="46" r="8" stroke={stroke} fill="none" />
          <circle cx="88" cy="30" r="8" stroke={stroke} fill={active ? fill : "none"} />
          <path
            d="M20 28 L42 16"
            stroke={stroke}
            strokeDasharray={active ? "0" : "2 2"}
          />
          <path
            d="M20 32 L42 44"
            stroke={stroke}
            strokeDasharray={active ? "0" : "2 2"}
          />
          <path
            d="M58 14 L80 28"
            stroke={stroke}
            strokeDasharray={active ? "0" : "2 2"}
          />
          <path
            d="M58 46 L80 32"
            stroke={stroke}
            strokeDasharray={active ? "0" : "2 2"}
          />
        </>
      ) : null}

      {kind === "ai" ? (
        <>
          <rect
            x="1"
            y="1"
            width="98"
            height="58"
            rx="3"
            stroke={stroke}
            fill="none"
          />
          <rect x="8" y="12" width="18" height="14" rx="2" stroke={stroke} fill="none" />
          <path d="M28 19 L32 19" stroke={stroke} strokeWidth="1" />
          <rect x="34" y="12" width="32" height="14" rx="2" fill={fill} stroke={stroke} />
          <path d="M67 19 L72 19" stroke={stroke} strokeWidth="1" />
          <rect x="74" y="12" width="18" height="14" rx="2" stroke={stroke} fill="none" />
          <rect
            x="10"
            y="34"
            width="80"
            height="14"
            rx="2"
            stroke={stroke}
            fill="none"
            strokeDasharray="2 2"
          />
          <circle cx="17" cy="41" r="1.5" fill={stroke} />
          <circle cx="24" cy="41" r="1.5" fill={stroke} />
        </>
      ) : null}

      {kind === "system" ? (
        <>
          <rect
            x="1"
            y="1"
            width="98"
            height="58"
            rx="3"
            stroke={stroke}
            fill="none"
          />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect
                x={8 + i * 30}
                y="10"
                width="24"
                height="40"
                rx="2"
                fill={i === 1 && active ? fill : loFill}
                stroke={stroke}
              />
              <line
                x1={8 + i * 30 + 4}
                y1="20"
                x2={8 + i * 30 + 20}
                y2="20"
                stroke={stroke}
                strokeWidth="0.8"
              />
              <line
                x1={8 + i * 30 + 4}
                y1="26"
                x2={8 + i * 30 + 16}
                y2="26"
                stroke={stroke}
                strokeWidth="0.8"
              />
              <line
                x1={8 + i * 30 + 4}
                y1="32"
                x2={8 + i * 30 + 18}
                y2="32"
                stroke={stroke}
                strokeWidth="0.8"
              />
            </g>
          ))}
        </>
      ) : null}
    </svg>
  );
}

export function WhatWeBuild() {
  return (
    <section
      id="what-we-build"
      className="relative border-t border-zinc-200/70 bg-white py-24 sm:py-28 lg:py-32 dark:border-zinc-800 dark:bg-zinc-950"
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
          WHAT WE BUILD
        </p>
        <h2 className="mt-5 max-w-[46rem] text-balance text-[clamp(28px,4vw,44px)] font-semibold leading-[1.08] tracking-[-0.025em] text-zinc-950 dark:text-zinc-50 sm:mt-6">
          We don’t advise. We ship.
        </h2>
        <p className="mt-5 max-w-[42rem] text-pretty text-[17px] font-normal leading-[1.55] text-zinc-600 sm:text-[18px] dark:text-zinc-400">
          Four things we keep building because they keep working. Each one
          shaped to your operation — fewer manual hours, fewer dropped
          handoffs, less depending on the same one or two people to keep things
          moving.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6">
          {CAPABILITIES.map((item) => (
            <BuildCapabilityCard key={item.tag} item={item} />
          ))}
        </div>

        <p className="mt-10 max-w-[42rem] text-base font-medium text-zinc-700 dark:text-zinc-300 sm:mt-12">
          Built around your actual operations — not a template.
        </p>
      </div>
    </section>
  );
}

function BuildCapabilityCard({
  item,
}: {
  item: (typeof CAPABILITIES)[number];
}) {
  const [hover, setHover] = useState(false);
  const active = hover;

  return (
    <article
      className="flex flex-col gap-5 rounded-[12px] border border-zinc-300/70 bg-[#FDFCF7] p-6 transition-colors duration-200 sm:gap-6 sm:p-7 dark:border-zinc-700/75 dark:bg-zinc-950/45 dark:hover:border-zinc-600/90 hover:border-zinc-400/75"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="mono inline-flex rounded-full border border-zinc-300/70 bg-white/90 px-2.5 py-1 text-[11px] font-medium text-zinc-600 dark:border-zinc-600 dark:bg-zinc-900/70 dark:text-zinc-400">
          {item.tag}
        </span>
        <BuildVisual kind={item.visual} active={active} />
      </div>

      <div>
        <h3 className="text-[22px] font-semibold leading-snug tracking-[-0.02em] text-zinc-950 sm:text-[26px] dark:text-zinc-50">
          {item.title}
        </h3>
        <p className="mt-2.5 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
          {item.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-4 gap-y-2 border-t border-dashed border-zinc-300/70 pt-5 sm:grid-cols-2 dark:border-zinc-700/80">
        {item.bullets.map((b) => (
          <div
            key={b}
            className="flex items-start gap-2 text-[13.5px] leading-snug text-zinc-800 dark:text-zinc-200"
          >
            <span
              className="mt-1.5 size-1 shrink-0 rounded-full"
              style={{ background: ACCENT }}
            />
            <span>{b}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
