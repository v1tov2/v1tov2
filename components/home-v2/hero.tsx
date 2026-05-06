"use client";

import Link from "next/link";
import { V2AuditBookCtaLink } from "./v2-audit-book-cta-link";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

const CREDIBILITY = [
  {
    label: "Built for",
    value: "SMEs, resellers, service businesses & operators",
  },
  {
    label: "Built around",
    value: "Internal tools, automation & workflow redesign",
  },
  {
    label: "Proof of work",
    value: "SourceXpress — real operating business",
  },
  {
    label: "Engagement",
    value: "Fixed-scope builds · operator-led · day-2 ready",
  },
] as const;

const ACCENT = "oklch(0.86 0.22 142)";
const ACCENT_INK = "oklch(0.32 0.12 142)";

function Sparkline() {
  const pts = [10, 14, 12, 18, 22, 19, 28, 31, 36, 34, 41, 42];
  const w = 180;
  const h = 36;
  const max = Math.max(...pts);
  const min = Math.min(...pts);
  const path = pts
    .map((p, i) => {
      const x = (i / (pts.length - 1)) * w;
      const y = h - ((p - min) / (max - min)) * (h - 4) - 2;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");
  return (
    <svg
      width={w}
      height={h}
      className="mt-1.5 block max-w-full text-zinc-900 dark:text-zinc-100"
      aria-hidden
    >
      <path
        d={`${path} L ${w} ${h} L 0 ${h} Z`}
        fill="color-mix(in oklab, var(--hero-accent) 28%, transparent)"
      />
      <path d={path} stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function V2Surface({
  tick,
  stacked,
}: {
  tick: number;
  stacked?: boolean;
}) {
  const nav = [
    "Inbox",
    "Orders",
    "Shipments",
    "Suppliers",
    "Payments",
    "Workflows",
    "Reports",
  ];
  const rows = [
    ["#8826", "Aria Foods", "PAID", "In transit", "$2,140", "accent"],
    ["#8825", "Trinity Co.", "PAID", "Picking", "$4,200", "accent"],
    ["#8824", "B&M Resellers", "PAID", "Delivered", "$1,380", "accent"],
    ["#8823", "KLD Holdings", "INVOICED", "Awaiting", "$960", "neutral"],
    ["#8822", "Trinity Co.", "PAID", "Delivered", "$2,100", "accent"],
  ] as const;
  const wf = [
    "New PO received",
    "Validate inventory",
    "Generate invoice",
    "Notify ops + customer",
  ];

  return (
    <div
      className={
        stacked
          ? "relative w-full min-w-0 flex flex-col gap-3 bg-gradient-to-b from-white to-[#F8F8F4] p-4 text-zinc-900 dark:from-zinc-900 dark:to-zinc-950 dark:text-zinc-50"
          : "absolute inset-0 flex flex-col gap-3 bg-gradient-to-b from-white to-[#F8F8F4] p-4 text-zinc-900 sm:gap-4 sm:p-5 lg:grid lg:grid-cols-[minmax(0,150px)_minmax(0,1fr)_minmax(0,200px)] lg:gap-4 lg:p-6 dark:from-zinc-900 dark:to-zinc-950 dark:text-zinc-50"
      }
      style={{ ["--hero-accent" as string]: ACCENT }}
    >
      <div
        className={
          stacked
            ? "hidden"
            : "flex min-h-0 flex-col gap-1 max-lg:hidden"
        }
      >
        <p className="mono mb-2 px-2 text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
          Operations OS
        </p>
        {nav.map((l, i) => (
          <div
            key={l}
            className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[12px] ${
              i === 1
                ? "bg-[color-mix(in_oklab,var(--hero-accent)_22%,transparent)] font-medium"
                : "font-normal text-zinc-800 dark:text-zinc-200"
            }`}
          >
            <span
              className={`size-3 shrink-0 rounded-sm border ${
                i === 1
                  ? "border-zinc-900 bg-zinc-900 dark:border-white dark:bg-white"
                  : "border-zinc-300 bg-transparent dark:border-zinc-600"
              }`}
            />
            {l}
            {i === 0 ? (
              <span className="mono ml-auto text-[10px] text-zinc-500">3</span>
            ) : null}
          </div>
        ))}
        <div className="flex-1" />
        <div className="mt-2 border-t border-zinc-200/90 px-2 pt-3 text-[11px] text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
          <p className="mono mb-1 text-[10px] uppercase tracking-[0.08em] text-zinc-500">
            Health
          </p>
          <div className="flex items-center gap-2">
            <span
              className="size-1.5 shrink-0 rounded-full"
              style={{
                background: ACCENT,
                boxShadow: `0 0 0 3px color-mix(in oklab, ${ACCENT} 28%, transparent)`,
              }}
            />
            All systems normal
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-[10px] border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-900/80">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200 px-3 py-2.5 sm:px-4 dark:border-zinc-700">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[13px] font-medium">Active orders</span>
            <span className="mono rounded-full border border-zinc-200/90 bg-zinc-50 px-2 py-0.5 text-[11px] text-zinc-600 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
              14 today
            </span>
          </div>
          <span className="mono text-[10px] text-zinc-500 sm:text-[11px]">
            auto-synced · 12s ago
          </span>
        </div>
        <div>
          {rows.map((r, i) => (
            <div
              key={r[0]}
              className={`grid grid-cols-[52px_1fr_auto] items-center gap-x-2 border-b border-zinc-100 px-3 py-2 text-[11px] sm:grid-cols-[62px_1fr_72px_84px_64px] sm:px-4 sm:text-[12.5px] dark:border-zinc-800 max-sm:[&>span:nth-child(4)]:hidden max-sm:[&>span:nth-child(5)]:hidden ${
                i === rows.length - 1 ? "border-b-0" : ""
              }`}
            >
              <span className="mono text-zinc-500">{r[0]}</span>
              <span className="min-w-0 truncate font-medium text-zinc-900 dark:text-zinc-100">
                {r[1]}
              </span>
              <span className="sm:contents">
                <span className="justify-self-end sm:justify-self-auto">
                  <span
                    className={`inline-block rounded-full border px-2 py-0.5 text-center text-[9px] font-medium sm:text-[10px] ${
                      r[5] === "accent"
                        ? "border-[color-mix(in_oklab,var(--hero-accent)_45%,transparent)] bg-[color-mix(in_oklab,var(--hero-accent)_12%,white)] text-[#0B0B0A] dark:bg-[color-mix(in_oklab,var(--hero-accent)_14%,transparent)] dark:text-zinc-100"
                        : "border-zinc-200 bg-zinc-50 text-zinc-700 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200"
                    }`}
                  >
                    {r[2]}
                  </span>
                </span>
                <span className="hidden items-center gap-1.5 text-zinc-500 sm:flex">
                  <span
                    className={`size-1.5 shrink-0 rounded-full ${
                      r[3] === "In transit"
                        ? ""
                        : r[3] === "Awaiting"
                          ? "bg-amber-500"
                          : "bg-zinc-400"
                    }`}
                    style={
                      r[3] === "In transit"
                        ? { background: ACCENT }
                        : undefined
                    }
                  />
                  {r[3]}
                </span>
                <span className="mono hidden text-right text-zinc-900 sm:block dark:text-zinc-100">
                  {r[4]}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="rounded-[10px] border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/80">
          <div className="mb-2 flex items-center justify-between gap-2">
            <span className="mono text-[10px] uppercase tracking-[0.08em] text-zinc-500">
              Workflow · running
            </span>
            <span
              className="size-1.5 shrink-0 rounded-full"
              style={{
                background: ACCENT,
                boxShadow: `0 0 0 3px color-mix(in oklab, ${ACCENT} 25%, transparent)`,
              }}
            />
          </div>
          <p className="mb-3 text-[12px] font-medium">order → invoice → ship</p>
          <div className="space-y-1">
            {wf.map((s, i) => {
              const done = i <= tick % 4;
              return (
                <div
                  key={s}
                  className={`flex items-center gap-2.5 py-1 text-[11px] transition-colors ${
                    done ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-400"
                  }`}
                >
                  <span
                    className="flex size-3.5 shrink-0 items-center justify-center rounded-full border transition-all"
                    style={{
                      borderColor: done ? ACCENT : undefined,
                      background: done ? ACCENT : "transparent",
                    }}
                  >
                    {done ? (
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        aria-hidden
                      >
                        <path
                          d="M1.5 4l1.5 1.5L6.5 2"
                          stroke="#0B0B0A"
                          strokeWidth="1.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : null}
                  </span>
                  {s}
                </div>
              );
            })}
          </div>
        </div>
        <div className="rounded-[10px] border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/80">
          <p className="mono mb-2 text-[10px] uppercase tracking-[0.08em] text-zinc-500">
            Manual hours saved
          </p>
          <p className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-[28px]">
            42
            <span className="text-base font-normal text-zinc-500">hr / wk</span>
          </p>
          <Sparkline />
        </div>
      </div>
    </div>
  );
}

function V1Surface() {
  const sheetRows = [
    ["#", "CUSTOMER", "STATUS", "AMT"],
    ["8821", "Trinity Co.", "pending?", "$4,200"],
    ["8822", "B&M Resel.", "shipped", "$1,380"],
    ["8823", "KLD Hold.", "—", ""],
    ["8824", "Trinity Co.", "pending?", "$2,100"],
    ["8825", "Aria Foods", "paid?", ""],
    ["8826", "???", "", ""],
  ];
  const todos = [
    ["x", "reply to Trinity quote"],
    ["x", "call Aria back"],
    ["", "find pricing sheet"],
    ["", "invoice KLD"],
    ["", "who paid 8825??"],
  ] as const;

  return (
    <div
      className="absolute inset-0 text-[#333]"
      style={{ ["--hero-accent" as string]: ACCENT }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#F6F4EE] to-[#EFEDE5] dark:from-zinc-800 dark:to-zinc-900" />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,11,10,0.05) 1px, transparent 1px)",
          backgroundSize: "100% 22px",
        }}
      />

      <div
        className="absolute left-3 top-5 w-[min(100%-1.5rem,246px)] -rotate-1 rounded-md border border-zinc-300 bg-white text-[11.5px] shadow-[0_8px_22px_rgba(11,11,10,0.08)] sm:left-6 sm:top-7 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-200"
      >
        <div className="flex items-center gap-1.5 border-b border-[#e5e5dd] bg-[#F2F2EC] px-2.5 py-1.5 dark:border-zinc-700 dark:bg-zinc-800">
          <span className="size-1.5 rounded-full bg-[#E96A5A]" />
          <span className="size-1.5 rounded-full bg-[#E0B341]" />
          <span className="size-1.5 rounded-full bg-[#9CC36B]" />
          <span className="mono ml-1.5 text-[10px] text-zinc-500">
            inbox · 47 unread
          </span>
        </div>
        <div className="border-b border-[#f0f0e8] px-3 py-2.5 dark:border-zinc-800">
          <div className="text-[10.5px] text-zinc-500">From: trinity.co</div>
          <div className="mt-0.5 text-xs font-semibold">Can you quote this?</div>
          <div className="mt-1 text-[11px] text-zinc-600 dark:text-zinc-400">
            Hi — need a price on the attached list ASAP, customer waiting.
          </div>
        </div>
        <div className="border-b border-[#f0f0e8] px-3 py-2.5 dark:border-zinc-800">
          <div className="text-[10.5px] text-zinc-500">From: kld.holdings</div>
          <div className="mt-0.5 text-xs font-semibold">
            RE: RE: RE: invoice 8823
          </div>
          <div className="mt-1 text-[11px] text-zinc-600 dark:text-zinc-400">
            Following up again — still haven’t received…
          </div>
        </div>
        <div className="px-3 py-2.5">
          <div className="text-[10.5px] text-zinc-500">From: aria.foods</div>
          <div className="mt-0.5 text-xs font-semibold">
            where are we on the order?
          </div>
        </div>
      </div>

      <div
        className="absolute right-2 top-6 hidden w-[min(100%-1rem,320px)] -rotate-[1.5deg] rounded border border-zinc-300 bg-white font-mono text-[10.5px] shadow-[0_8px_24px_rgba(11,11,10,0.06)] sm:block sm:right-7 sm:top-9 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-200"
      >
        <div className="border-b border-zinc-300 bg-[#E8F0E2] px-2 py-1 text-[10px] text-[#445566] dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
          orders_FINAL_v7_USE_THIS.xlsx
        </div>
        {sheetRows.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-[36px_1fr_72px_52px] border-b border-zinc-200 px-2 py-0.5 dark:border-zinc-700 ${
              i === 0 ? "bg-zinc-50 font-semibold text-zinc-500" : "bg-white dark:bg-zinc-900"
            } ${
              i > 0 &&
              (String(row[2]).includes("?") ||
                row[2] === "—" ||
                row[2] === "")
                ? "text-red-700 dark:text-red-400"
                : ""
            }`}
          >
            {row.map((c, j) => (
              <div key={j} className="truncate">
                {c}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="absolute left-3 top-[13rem] w-[200px] sm:left-7 sm:top-[14.5rem] sm:w-[220px]">
        <div className="mono mb-1 text-[9.5px] uppercase tracking-[0.08em] text-zinc-500">
          OPS DM
        </div>
        {[
          ["Liza", "sent the file to Ben, no reply"],
          ["Ben", "who has the supplier login again"],
        ].map(([who, msg], i) => (
          <div
            key={who}
            className="mb-1 rounded-lg border border-[#ececdf] bg-white px-2 py-1.5 text-[11.5px] shadow-sm dark:border-zinc-600 dark:bg-zinc-900"
            style={{ transform: `rotate(${(i % 2 ? -0.4 : 0.5)}deg)` }}
          >
            <span className="font-semibold text-zinc-600 dark:text-zinc-400">
              {who}:{" "}
            </span>
            {msg}
          </div>
        ))}
      </div>

      <div
        className="absolute bottom-24 left-4 w-[118px] -rotate-3 rounded-sm bg-[#FCEC8A] p-2.5 text-[11px] font-sans leading-snug text-[#3a2f00] shadow-[0_8px_18px_rgba(11,11,10,0.12)] sm:bottom-28 sm:left-14 sm:w-[124px]"
      >
        <div className="mb-1 font-semibold">chase Mark</div>
        <div>- supplier list</div>
        <div>- chase invoice 8823</div>
        <div>- pay Liza’s expense</div>
      </div>

      <div
        className="absolute bottom-20 right-4 w-[140px] rotate-[2.4deg] bg-[#FFC2C2] p-2.5 text-[11px] leading-snug text-[#5a1a1a] shadow-[0_8px_18px_rgba(11,11,10,0.12)] sm:bottom-24 sm:right-12"
      >
        <div className="mb-1 font-semibold">URGENT</div>
        <div>find pricing sheet — Mark has it on his laptop??</div>
      </div>

      <div
        className="absolute bottom-6 left-1/2 w-[min(168px,calc(100%-5rem))] -translate-x-1/2 rotate-[1.4deg] border border-[#e5e5dd] bg-white p-2.5 text-[11px] shadow-[0_8px_18px_rgba(11,11,10,0.1)] sm:left-[200px] sm:translate-x-0 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-200"
      >
        <div className="mono mb-1.5 text-[9.5px] uppercase tracking-[0.08em] text-zinc-500">
          TODO · today
        </div>
        {todos.map(([d, t], i) => (
          <div key={i} className="mb-0.5 flex items-center gap-1.5">
            <span
              className={`inline-flex size-2.5 shrink-0 items-center justify-center rounded-sm border border-zinc-500 text-[9px] ${
                d ? "bg-[#f4f4ee] line-through text-zinc-500" : "bg-white"
              }`}
            >
              {d}
            </span>
            <span
              className={
                d ? "text-zinc-500 line-through" : "text-zinc-800 dark:text-zinc-100"
              }
            >
              {t}
            </span>
          </div>
        ))}
      </div>

      <svg
        className="pointer-events-none absolute inset-0 text-red-600/80 dark:text-red-500/70"
        viewBox="0 0 800 460"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M 280 160 Q 340 130 400 180"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="3 3"
        />
        <path
          d="M 200 320 Q 260 350 340 310"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="3 3"
        />
      </svg>

      <p className="mono absolute bottom-2 left-3 max-w-[90%] text-[9px] uppercase tracking-[0.1em] text-red-900/70 dark:text-red-400/80 sm:left-4 sm:text-[10.5px]">
        ops_runs_on_vibes · last edit: 14m ago by 4 people
      </p>
    </div>
  );
}

const SPLIT_MIN_PCT = 5;
const SPLIT_MAX_PCT = 95;

function SplitPanel({ stageId }: { stageId: string }) {
  const [mobileView, setMobileView] = useState<"v1" | "v2">("v2");
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const drag = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback((clientX: number) => {
    if (!drag.current || !ref.current) return;
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches) {
      return;
    }
    const rect = ref.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const p = Math.max(
      SPLIT_MIN_PCT,
      Math.min(SPLIT_MAX_PCT, (x / rect.width) * 100),
    );
    setPos(p);
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent | TouchEvent) => {
      const clientX =
        "touches" in e && e.touches[0]
          ? e.touches[0].clientX
          : (e as MouseEvent).clientX;
      onMove(clientX);
    };
    const up = () => {
      drag.current = false;
      setDragging(false);
      document.body.style.cursor = "";
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, [onMove]);

  const [tick, setTick] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setTick((t) => t + 1), 1800);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="relative mt-10 sm:mt-12 lg:mt-16">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3 sm:mb-3.5">
        <p className="mono inline-flex items-center gap-2 text-[11.5px] font-medium uppercase tracking-[0.12em] text-zinc-600 dark:text-zinc-400">
          <span
            className="size-1.5 shrink-0 rounded-full"
            style={{ background: ACCENT_INK }}
          />
          <span className="md:hidden">TAP TO TRANSFORM · V1 → V2</span>
          <span className="hidden md:inline">DRAG TO TRANSFORM · V1 → V2</span>
        </p>
        <p className="mono hidden text-[11.5px] text-zinc-500 sm:flex sm:items-center sm:gap-4 dark:text-zinc-400">
          <span>SAME OPS</span>
          <span className="text-zinc-300 dark:text-zinc-600">·</span>
          <span>DIFFERENT SYSTEM</span>
        </p>
      </div>

      <div
        ref={ref}
        id={stageId}
        className="split-stage relative flex w-full max-w-full flex-col overflow-hidden rounded-[14px] border border-zinc-300 bg-white shadow-[0_1px_0_rgba(11,11,10,0.04),0_30px_60px_-30px_rgba(11,11,10,0.18)] touch-manipulation [touch-action:manipulation] max-md:h-auto max-md:min-h-0 md:block md:h-[360px] md:min-h-0 md:select-none md:touch-auto md:[touch-action:auto] lg:h-[460px] dark:border-zinc-700 dark:bg-zinc-900"
      >
        <div
          className="z-30 flex shrink-0 flex-col gap-0 border-b border-zinc-200/80 bg-[#FAFAF7]/95 px-2.5 pb-2 pt-2 backdrop-blur-md dark:border-zinc-700 dark:bg-zinc-950/90 md:hidden"
          style={{ touchAction: "manipulation" }}
        >
          <div
            className="flex rounded-[10px] border border-zinc-200/90 bg-zinc-100/95 p-0.5 dark:border-zinc-600 dark:bg-zinc-800/90"
            role="tablist"
            aria-label="Compare V1 and V2"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mobileView === "v1"}
              className={`mono min-h-[44px] flex-1 rounded-[8px] px-2 py-2 text-center text-[10.5px] font-medium uppercase tracking-[0.06em] transition ${
                mobileView === "v1"
                  ? "bg-white text-zinc-950 shadow-sm dark:bg-zinc-900 dark:text-zinc-50"
                  : "text-zinc-500 dark:text-zinc-400"
              }`}
              onClick={() => setMobileView("v1")}
            >
              V1 Today
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mobileView === "v2"}
              className={`mono min-h-[44px] flex-1 rounded-[8px] px-2 py-2 text-center text-[10.5px] font-medium uppercase tracking-[0.06em] transition ${
                mobileView === "v2"
                  ? "bg-white text-zinc-950 shadow-sm ring-1 ring-[color-mix(in_oklab,var(--hero-accent)_38%,transparent)] dark:bg-zinc-900 dark:text-zinc-50"
                  : "text-zinc-500 dark:text-zinc-400"
              }`}
              onClick={() => setMobileView("v2")}
            >
              V2 After
            </button>
          </div>
        </div>

        <div
          className="relative min-h-0 min-w-0 max-h-[min(92vh,840px)] shrink-0 overflow-x-hidden overflow-y-auto overscroll-y-contain md:hidden"
          style={{ touchAction: "pan-y" }}
        >
          <div className="relative w-full min-w-0">
            {mobileView === "v1" ? (
              <div className="relative h-[328px] w-full min-w-0 overflow-x-hidden sm:h-[340px]">
                <V1Surface />
              </div>
            ) : (
              <V2Surface tick={tick} stacked />
            )}
          </div>
        </div>

        <div className="relative hidden h-full min-h-0 min-w-0 overflow-hidden md:block">
          <V2Surface tick={tick} />
          <div
            className="absolute inset-0"
            style={{
              clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)`,
              WebkitClipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)`,
            }}
          >
            <V1Surface />
          </div>
          <div
            className="pointer-events-none absolute bottom-0 top-0 w-px bg-zinc-950 dark:bg-white"
            style={{
              left: `${pos}%`,
              transform: "translateX(-0.5px)",
            }}
          />
          <button
            type="button"
            aria-label="Drag to compare V1 and V2"
            aria-controls={stageId}
            className={`absolute top-1/2 z-10 flex size-14 min-h-[52px] min-w-[52px] -translate-y-1/2 touch-manipulation items-center justify-center rounded-full border bg-zinc-950 text-[#FAFAF7] shadow-[0_6px_20px_rgba(11,11,10,0.25)] outline-none transition-[box-shadow,border-color,ring-color] duration-150 focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 sm:size-11 sm:min-h-0 sm:min-w-0 dark:bg-white dark:text-zinc-900 dark:focus-visible:ring-offset-zinc-900 ${
              dragging
                ? "cursor-grabbing border-zinc-400 shadow-[0_8px_26px_rgba(11,11,10,0.32)] ring-2 ring-zinc-900/20 ring-offset-2 ring-offset-white dark:border-zinc-500 dark:ring-white/25 dark:ring-offset-zinc-900"
                : "cursor-grab border-zinc-200 hover:border-zinc-300 hover:shadow-[0_10px_28px_rgba(11,11,10,0.22)] hover:ring-2 hover:ring-zinc-400/30 hover:ring-offset-2 hover:ring-offset-white active:border-zinc-400 active:shadow-[0_8px_24px_rgba(11,11,10,0.26)] dark:border-zinc-600 dark:ring-offset-zinc-900 dark:hover:border-zinc-400 dark:hover:ring-white/20"
            }`}
            style={{ left: `${pos}%`, transform: "translate(-50%, -50%)" }}
            onMouseDown={(e) => {
              drag.current = true;
              setDragging(true);
              document.body.style.cursor = "grabbing";
              e.preventDefault();
            }}
            onTouchStart={() => {
              drag.current = true;
              setDragging(true);
            }}
          >
            <svg
              className="size-5 sm:size-4"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
            >
              <path
                d="M5 4L2 8l3 4M11 4l3 4-3 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="pointer-events-none absolute left-3 top-3 z-20 sm:left-4 sm:top-4">
            <span className="mono inline-flex rounded-full border border-amber-200/90 bg-amber-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/60 dark:text-amber-200">
              V1 · Today
            </span>
          </div>
          <div className="pointer-events-none absolute right-3 top-3 z-20 sm:right-4 sm:top-4">
            <span
              className="mono inline-flex rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide"
              style={{
                borderColor: `color-mix(in oklab, ${ACCENT} 40%, transparent)`,
                background: `color-mix(in oklab, ${ACCENT} 18%, white)`,
                color: ACCENT_INK,
              }}
            >
              V2 · After
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CredibilityStrip() {
  return (
    <div className="mt-7 border-t border-dashed border-zinc-300 pt-7 dark:border-zinc-700 sm:mt-8 sm:pt-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {CREDIBILITY.map((item, i) => (
          <div
            key={item.label}
            className={`min-w-0 px-0 text-center sm:px-3 lg:border-l lg:border-zinc-200 lg:px-5 lg:text-left lg:first:border-l-0 lg:first:pl-0 dark:lg:border-zinc-700 ${
              i >= 2 ? "sm:border-t sm:border-dashed sm:border-zinc-300 sm:pt-6 lg:border-t-0 lg:pt-0 dark:sm:border-zinc-700" : ""
            }`}
          >
            <p className="mono text-[11px] uppercase tracking-[0.08em] text-zinc-500 dark:text-zinc-400">
              {item.label}
            </p>
            <p className="mt-1.5 text-[13.5px] font-normal leading-snug text-zinc-900 dark:text-zinc-100">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const stageId = useId().replace(/:/g, "");

  return (
    <section
      className="relative overflow-hidden border-b border-zinc-200/90 bg-[#FAFAF7] dark:border-zinc-800 dark:bg-zinc-950"
      style={{
        ["--hero-accent" as string]: ACCENT,
      }}
    >
      {/* Soft radial washes — light */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          background: `
            radial-gradient(ellipse 120% 85% at 50% -25%, color-mix(in oklab, ${ACCENT} 9%, white) 0%, transparent 55%),
            radial-gradient(ellipse 65% 50% at 100% 0%, rgba(14, 165, 233, 0.055) 0%, transparent 52%),
            radial-gradient(ellipse 50% 45% at 0% 65%, rgba(11, 11, 10, 0.028) 0%, transparent 55%)
          `,
        }}
      />
      {/* Soft radial washes — dark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden opacity-70 dark:block"
        style={{
          background: `
            radial-gradient(ellipse 100% 70% at 50% -30%, color-mix(in oklab, ${ACCENT} 12%, #0a0a0a) 0%, transparent 58%),
            radial-gradient(ellipse 55% 40% at 95% 5%, rgba(14, 165, 233, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 45% 35% at 5% 60%, rgba(255, 255, 255, 0.03) 0%, transparent 55%)
          `,
        }}
      />

      {/* Square grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5] dark:opacity-[0.32]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(11,11,10,0.038) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(11,11,10,0.038) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 32%, black 32%, transparent 76%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 32%, black 32%, transparent 76%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-5 pb-6 pt-10 sm:px-6 sm:pt-12 md:px-8 md:pt-14 lg:pb-6 lg:pt-[4.5rem] xl:pt-[5.25rem]">
        <div className="mb-8 flex max-w-[1140px] flex-col gap-3 sm:mb-10 sm:flex-row sm:items-center sm:justify-between sm:gap-4 lg:mb-14">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-zinc-200/90 bg-white/75 px-3 py-1.5 text-[11px] font-medium text-zinc-700 shadow-[0_1px_0_rgba(11,11,10,0.04)] backdrop-blur-[8px] dark:border-zinc-700/90 dark:bg-zinc-900/55 dark:text-zinc-200">
            <span
              className="size-1.5 shrink-0 rounded-full"
              style={{
                background: ACCENT,
                boxShadow: `0 0 0 3px color-mix(in oklab, ${ACCENT} 28%, transparent)`,
              }}
            />
            <span>Now booking · Limited build slots available</span>
          </div>
          <p className="mono text-[11px] font-medium uppercase tracking-[0.06em] text-zinc-500 sm:shrink-0 sm:text-right dark:text-zinc-400">
            Operator-led · Est. 2025
          </p>
        </div>

        <h1 className="max-w-[1140px] text-[clamp(34px,6.6vw,88px)] font-semibold leading-[0.98] tracking-[-0.035em] text-[#0B0B0A] dark:text-zinc-50">
          <span className="block">From manual operations</span>
          <span className="block">to scalable systems.</span>
          <span className="block text-zinc-500 dark:text-zinc-400">
            We build your{" "}
            <span className="relative inline-block align-baseline text-[#0B0B0A] dark:text-zinc-50">
              <span
                aria-hidden
                className="pointer-events-none absolute -left-[0.06em] -right-[0.04em] bottom-[0.04em] top-[40%] z-0 rounded-[0.14em]"
                style={{
                  background: `linear-gradient(180deg, color-mix(in oklab, ${ACCENT} 78%, transparent) 0%, color-mix(in oklab, ${ACCENT} 64%, transparent) 100%)`,
                  transform: "translateY(0.05em)",
                }}
              />
              <span className="relative z-[1]">V2</span>
            </span>
            .
          </span>
        </h1>

        <div className="mt-7 grid gap-8 sm:mt-8 sm:gap-7 lg:mt-9 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-16">
          <p className="max-w-xl text-center text-[17px] leading-[1.55] text-zinc-600 sm:mx-auto sm:max-w-[580px] sm:text-[18px] sm:leading-[1.55] lg:mx-0 lg:max-w-[580px] lg:text-left lg:text-[19px] dark:text-zinc-400">
            V1toV2 is a build partner for businesses stuck in manual processes,
            fragmented tools, and spreadsheet-heavy workflows. We design and ship
            the internal tools, automations, and operating systems that let you
            scale — without adding more headcount or chasing things across tabs.
            Built by an operator who’s done it for real.
          </p>
          <div className="flex w-full flex-col items-stretch gap-3 pt-0.5 sm:items-stretch lg:items-start lg:pt-1">
            <div className="flex w-full flex-col gap-3 sm:mx-auto sm:flex-row sm:flex-wrap sm:gap-2.5 lg:mx-0">
              <V2AuditBookCtaLink
                href="#contact"
                className="inline-flex min-h-[52px] w-full flex-1 items-center justify-center rounded-lg bg-zinc-950 px-6 text-[15px] font-medium leading-snug text-white shadow-sm transition hover:bg-zinc-800 sm:h-11 sm:min-h-0 sm:w-auto sm:min-w-[200px] dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
              >
                Book a free V2 Audit
              </V2AuditBookCtaLink>
              <Link
                href="#workflows"
                className="inline-flex min-h-[52px] w-full flex-1 items-center justify-center rounded-lg border border-zinc-300/90 bg-white px-6 text-[15px] font-medium leading-snug text-zinc-900 transition hover:border-zinc-400 sm:h-11 sm:min-h-0 sm:w-auto sm:min-w-[200px] dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-500"
              >
                See example workflows
              </Link>
            </div>
            <p className="mono text-center text-[12px] tracking-wide text-zinc-500 lg:text-left dark:text-zinc-500">
              Free 30-min call · No pitch. No obligation.
            </p>
          </div>
        </div>

        <div className="relative" aria-live="polite">
          <SplitPanel stageId={stageId} />
        </div>

        <CredibilityStrip />
      </div>
    </section>
  );
}
