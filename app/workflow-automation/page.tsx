import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ContactForm } from "@/components/contact/ContactForm";
import { FounderContactPanel } from "@/components/contact/founder-contact-panel";
import { SiteNavbar } from "@/components/shared/navbar";
import { BookAuditScrollCta } from "@/components/shared/book-audit-scroll-cta";
import {
  ACCENT,
  ACCENT_INK,
  SITE_MAX,
  SITE_PAD_X,
} from "@/components/shared/site-tokens";
import { HeroWorkflowMockup } from "@/components/workflow-automation/hero-workflow-mockup";

const MAX = SITE_MAX;
const PAD_X = SITE_PAD_X;
const SECTION_Y = "py-20 sm:py-[5.25rem] lg:py-[6.5rem]";
const SECTION_Y_COMPACT = "py-14 sm:py-[4.25rem] lg:py-[4.75rem]";

const CARD =
  "rounded-xl border border-zinc-300/75 bg-[#FDFCF7] shadow-[0_1px_0_rgba(11,11,10,0.04)] dark:border-zinc-700/85 dark:bg-zinc-950/60 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]";

const CARD_ELEVATED =
  "rounded-xl border border-zinc-300/75 bg-[#FDFCF7] shadow-[0_8px_30px_-12px_rgba(11,11,10,0.08),0_1px_0_rgba(11,11,10,0.04)] dark:border-zinc-700/85 dark:bg-zinc-950/60 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_12px_40px_-16px_rgba(0,0,0,0.4)]";

export const metadata: Metadata = {
  title: "Workflow Automation for Hong Kong Businesses | V1toV2",
  description:
    "V1toV2 helps Hong Kong businesses replace spreadsheets, manual updates, and disconnected tools with simple workflows, dashboards, and internal systems built around real operations.",
};

const OPERATIONAL_STACK_GROUPS = [
  {
    title: "Communication",
    items: [
      "WhatsApp workflows",
      "Customer updates",
      "Internal notifications",
    ],
  },
  {
    title: "Operations",
    emphasized: true,
    items: ["Order tracking", "Payment tracking", "Task automation"],
  },
  {
    title: "Systems",
    items: [
      "Internal dashboards",
      "Admin portals",
      "CRM workflows",
      "Next.js",
      "Supabase",
    ],
  },
] as const;

const PROBLEMS = [
  {
    title: "Too many spreadsheets",
    body: "Important information is spread across files, tabs, and versions.",
  },
  {
    title: "Status updates are scattered",
    body: "Teams rely on chats, emails, and manual follow-ups to know what is happening.",
  },
  {
    title: "No clear owner for each task",
    body: "Work gets delayed because responsibilities and next steps are not visible.",
  },
  {
    title: "Customers keep asking for updates",
    body: "Your team spends time answering status questions instead of moving work forward.",
  },
  {
    title: "Repeated admin work",
    body: "The same data gets copied, checked, and updated manually every day.",
  },
  {
    title: "Managers lack visibility",
    body: "It is hard to see bottlenecks, pending items, and team workload in one place.",
  },
] as const;

const SERVICES = [
  {
    title: "Order & Request Tracking",
    body: "Track requests, jobs, orders, and customer updates from intake to completion.",
  },
  {
    title: "Customer Status Updates",
    body: "Create clearer status flows so customers and internal teams know what is happening.",
  },
  {
    title: "Internal Task Assignments",
    body: "Turn manual handoffs into structured task ownership and progress tracking.",
  },
  {
    title: "Payment & Approval Flows",
    body: "Make approvals, confirmations, payment checks, and admin reviews easier to manage.",
  },
  {
    title: "Inventory & Fulfillment Workflows",
    body: "Improve how stock, fulfillment, shipping, and operational updates are tracked.",
  },
  {
    title: "Dashboards & Reporting",
    body: "Give managers visibility into workload, progress, bottlenecks, and key metrics.",
  },
] as const;

const BEFORE_ITEMS = [
  "Spreadsheets everywhere",
  "Manual WhatsApp follow-ups",
  "No single source of truth",
  "Repeated admin work",
  "Unclear task ownership",
] as const;

const AFTER_ITEMS = [
  "One connected workflow",
  "Clear task owners",
  "Automated status updates",
  "Dashboard visibility",
  "Fewer manual handoffs",
] as const;

const PROCESS_STEPS = [
  {
    title: "1. Audit the current workflow",
    body: "We map how work currently moves through spreadsheets, chats, emails, and manual steps.",
  },
  {
    title: "2. Design the cleaner process",
    body: "We identify what should be centralized, automated, simplified, or tracked more clearly.",
  },
  {
    title: "3. Build the first internal system",
    body: "We create a practical tool, dashboard, or workflow that your team can actually use.",
  },
  {
    title: "4. Improve after real usage",
    body: "We refine the system based on real team feedback, edge cases, and operational needs.",
  },
] as const;

const CREDIBILITY_CARDS = [
  {
    title: "Ecommerce operations",
    body: "Order, customer, payment, and fulfillment workflows.",
  },
  {
    title: "Logistics workflows",
    body: "Tracking, status updates, handoffs, and operational visibility.",
  },
  {
    title: "Internal dashboards",
    body: "Tools that help teams see what needs attention.",
  },
] as const;

function SectionEyebrow({ children }: { children: string }) {
  return (
    <p className="mono inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.08em] text-zinc-500 dark:text-zinc-400">
      <span
        className="size-1.5 shrink-0 rounded-full"
        style={{
          background: ACCENT,
          boxShadow: `0 0 0 3px color-mix(in oklab, ${ACCENT} 25%, transparent)`,
        }}
      />
      {children}
    </p>
  );
}

function SectionHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="max-w-[42rem]">
      {eyebrow ? <SectionEyebrow>{eyebrow}</SectionEyebrow> : null}
      <h2
        className={`text-balance text-[clamp(26px,3.5vw,40px)] font-semibold leading-[1.08] tracking-[-0.028em] text-zinc-950 dark:text-zinc-50 ${eyebrow ? "mt-5 sm:mt-6" : ""}`}
      >
        {title}
      </h2>
      {lead ? (
        <p className="mt-5 text-pretty text-[17px] leading-[1.55] text-zinc-600 dark:text-zinc-400 sm:text-[18px]">
          {lead}
        </p>
      ) : null}
    </div>
  );
}

function PageSection({
  id,
  children,
  first,
  glow = "none",
  band = "a",
  compact = false,
  cornerWash = false,
}: {
  id?: string;
  children: ReactNode;
  first?: boolean;
  glow?: "none" | "top" | "bottom";
  band?: "a" | "b" | "c";
  compact?: boolean;
  cornerWash?: boolean;
}) {
  const bandBg =
    band === "a"
      ? "bg-[#F5F4EF] dark:bg-zinc-950"
      : band === "b"
        ? "bg-[#FDFCF7] dark:bg-zinc-950"
        : "bg-[#FAFAF7] dark:bg-zinc-950";

  const y = compact ? SECTION_Y_COMPACT : SECTION_Y;

  return (
    <section
      id={id}
      className={`relative scroll-mt-24 ${y} ${bandBg} ${first ? "" : "border-t border-zinc-200/80 dark:border-white/[0.07]"}`}
    >
      {cornerWash ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 h-72 w-72 bg-[radial-gradient(circle_at_100%_0%,color-mix(in_oklab,oklch(0.86_0.22_142)_12%,#fff),transparent_68%)] opacity-50 dark:hidden"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 hidden h-72 w-72 bg-[radial-gradient(circle_at_100%_0%,color-mix(in_oklab,oklch(0.86_0.22_142)_8%,transparent),transparent_65%)] opacity-70 dark:block"
          />
        </>
      ) : null}
      {glow === "top" ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_70%_100%_at_50%_0%,color-mix(in_oklab,oklch(0.86_0.22_142)_14%,#fff),transparent)] opacity-50 dark:hidden"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 hidden h-40 bg-[radial-gradient(ellipse_70%_100%_at_50%_0%,color-mix(in_oklab,oklch(0.86_0.22_142)_9%,transparent),transparent)] opacity-80 dark:block"
          />
        </>
      ) : null}
      {glow === "bottom" ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-[radial-gradient(ellipse_65%_90%_at_50%_100%,color-mix(in_oklab,oklch(0.86_0.22_142)_12%,#fff),transparent)] opacity-45 dark:hidden"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-48 bg-[radial-gradient(ellipse_65%_90%_at_50%_100%,color-mix(in_oklab,oklch(0.86_0.22_142)_8%,transparent),transparent)] opacity-70 dark:block"
          />
        </>
      ) : null}
      <div className={`relative ${MAX} ${PAD_X}`}>{children}</div>
    </section>
  );
}

export default function WorkflowAutomationPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <SiteNavbar />

      <main className="relative">
        <section
          className="relative overflow-hidden border-b border-zinc-200/90 bg-[#FAFAF7] dark:border-zinc-800 dark:bg-zinc-950"
          style={{ ["--hero-accent" as string]: ACCENT }}
        >
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

          <div className={`relative ${MAX} ${PAD_X} pb-[4.25rem] pt-10 sm:pb-24 sm:pt-12 md:pb-28 md:pt-14 lg:pb-32 lg:pt-[4.5rem] xl:pb-36`}>
            <div className="mb-8 flex max-w-[1140px] flex-wrap items-center gap-x-3 gap-y-2 sm:mb-9 lg:mb-10">
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-zinc-200/90 bg-white/75 px-3 py-1.5 text-[11px] font-medium text-zinc-700 shadow-[0_1px_0_rgba(11,11,10,0.04)] backdrop-blur-[8px] dark:border-zinc-700/90 dark:bg-zinc-900/55 dark:text-zinc-200">
                <span
                  className="size-1.5 shrink-0 rounded-full"
                  style={{
                    background: ACCENT,
                    boxShadow: `0 0 0 3px color-mix(in oklab, ${ACCENT} 28%, transparent)`,
                  }}
                />
                <span>Workflow Automation & Internal Systems</span>
              </div>
              <span className="mono text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-400/85 dark:text-zinc-500">
                Hong Kong
              </span>
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-10 xl:gap-x-20 2xl:gap-x-24">
              <div className="min-w-0 lg:col-span-6 xl:col-span-6">
                <h1 className="max-w-[20ch] text-[clamp(30px,5.4vw,68px)] font-semibold leading-[0.99] tracking-[-0.035em] text-[#0B0B0A] dark:text-zinc-50 sm:max-w-none">
                  <span className="block">Workflow Automation for</span>
                  <span className="block text-zinc-500 dark:text-zinc-400">
                    growing{" "}
                    <span className="relative inline-block text-[#0B0B0A] dark:text-zinc-50">
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -left-[0.06em] -right-[0.04em] bottom-[0.04em] top-[40%] z-0 rounded-[0.14em]"
                        style={{
                          background: `linear-gradient(180deg, color-mix(in oklab, ${ACCENT} 78%, transparent) 0%, color-mix(in oklab, ${ACCENT} 64%, transparent) 100%)`,
                          transform: "translateY(0.05em)",
                        }}
                      />
                      <span className="relative z-[1]">businesses</span>
                    </span>
                  </span>
                </h1>

                <p className="mono mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] leading-relaxed text-zinc-500 sm:mt-7 sm:gap-x-4 dark:text-zinc-500">
                  <span className="text-zinc-600 dark:text-zinc-400">
                    Spreadsheets to systems
                  </span>
                  <span aria-hidden className="hidden text-zinc-300 sm:inline dark:text-zinc-600">
                    ·
                  </span>
                  <span>Dashboards · Approvals · HK teams</span>
                </p>

                <p className="mt-6 max-w-xl text-[17px] leading-[1.58] text-zinc-600 dark:text-zinc-400 sm:mt-7 sm:max-w-[34rem] sm:text-[18px] lg:text-[19px]">
                  We help Hong Kong businesses replace spreadsheets, manual updates, and
                  disconnected tools with simple workflows, dashboards, and internal
                  systems built around how the business actually runs.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:mt-9">
                  <BookAuditScrollCta
                    conversion="workflow"
                    href="#contact"
                    className="inline-flex min-h-[52px] w-full flex-1 items-center justify-center rounded-lg px-7 text-[15px] font-semibold transition hover:opacity-95 sm:h-11 sm:min-h-0 sm:w-auto sm:min-w-[220px]"
                    style={{
                      background: ACCENT,
                      color: ACCENT_INK,
                    }}
                  >
                    Book a Free Workflow Audit
                  </BookAuditScrollCta>
                  <a
                    href="#services"
                    className="inline-flex min-h-[52px] w-full flex-1 items-center justify-center rounded-lg border border-zinc-300/90 bg-white px-6 text-[15px] font-medium text-zinc-900 shadow-sm transition hover:border-zinc-400 sm:h-11 sm:min-h-0 sm:w-auto sm:min-w-[180px] dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-500"
                  >
                    See What We Automate
                  </a>
                </div>
                <p className="mono mt-4 text-center text-[11px] tracking-wide text-zinc-500 sm:text-left">
                  Use the contact form below · mention &quot;Free Workflow Audit&quot; in your message
                </p>
              </div>

              <div className="relative min-w-0 lg:col-span-6 xl:col-span-6">
                <div className="mx-auto w-full max-w-xl min-w-0 lg:mx-0 lg:ml-auto lg:max-w-[min(100%,34.5rem)] xl:max-w-[min(100%,36rem)] xl:pl-6 2xl:max-w-[min(100%,37rem)] 2xl:pl-10">
                  <HeroWorkflowMockup accent={ACCENT} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <PageSection first glow="top" band="a" compact>
          <SectionHeader
            title="Built Around the Tools Your Team Already Uses"
            lead="We start with how your business works today, then create a cleaner system around the workflows that slow the team down."
          />

          <div className="relative mt-9 sm:mt-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-x-6 top-1/2 hidden h-px -translate-y-1/2 lg:block"
              style={{
                background: `linear-gradient(90deg, transparent 0%, color-mix(in oklab, ${ACCENT} 22%, rgb(228 228 231)) 16%, color-mix(in oklab, ${ACCENT} 15%, rgb(212 212 216)) 50%, color-mix(in oklab, ${ACCENT} 22%, rgb(228 228 231)) 84%, transparent 100%)`,
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-6 bottom-6 hidden w-px -translate-x-1/2 lg:hidden"
              style={{
                background: `linear-gradient(180deg, transparent, color-mix(in oklab, ${ACCENT} 14%, rgb(228 228 231)), transparent)`,
              }}
            />

            <ul className="relative grid list-none gap-5 p-0 sm:gap-6 lg:grid-cols-3 lg:items-stretch lg:gap-6">
              {OPERATIONAL_STACK_GROUPS.map((group, i) => {
                const emphasized = "emphasized" in group && group.emphasized;
                return (
                  <li key={group.title} className="relative">
                    <span
                      aria-hidden
                      className="absolute -top-1 left-1/2 z-[1] hidden size-2 -translate-x-1/2 rounded-full lg:block"
                      style={{
                        background: ACCENT,
                        boxShadow: `0 0 0 4px color-mix(in oklab, ${ACCENT} 12%, #F5F4EF)`,
                      }}
                    />
                    <div
                      className={`relative flex h-full flex-col overflow-hidden rounded-2xl border bg-gradient-to-b p-6 sm:p-7 dark:shadow-[0_20px_44px_-28px_rgba(0,0,0,0.45)] ${
                        emphasized
                          ? "border-zinc-300/90 from-white/98 via-[#FAFAF7]/98 to-[#F3F2EC]/90 shadow-[0_20px_48px_-20px_rgba(11,11,10,0.12),0_1px_0_rgba(11,11,10,0.04)] lg:z-[2] lg:-translate-y-1.5 dark:border-zinc-600/80 dark:from-zinc-900/80 dark:via-zinc-950/75 dark:to-zinc-950/85"
                          : "border-zinc-300/75 from-white/92 via-[#FDFCF7]/95 to-[#F6F5F0]/88 shadow-[0_10px_36px_-22px_rgba(11,11,10,0.09)] dark:border-zinc-700/75 dark:from-zinc-900/55 dark:via-zinc-950/50 dark:to-zinc-950/60"
                      }`}
                      style={{
                        borderColor: emphasized
                          ? `color-mix(in oklab, ${ACCENT} 18%, rgb(212 212 216 / 0.85))`
                          : `color-mix(in oklab, ${ACCENT} 8%, rgb(212 212 216 / 0.85))`,
                      }}
                    >
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 opacity-[0.32] dark:opacity-[0.2]"
                        style={{
                          backgroundImage: `
                            linear-gradient(to right, rgba(11,11,10,0.028) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(11,11,10,0.028) 1px, transparent 1px)
                          `,
                          backgroundSize: "40px 40px",
                          maskImage:
                            "radial-gradient(ellipse 95% 85% at 40% 0%, black 8%, transparent 72%)",
                          WebkitMaskImage:
                            "radial-gradient(ellipse 95% 85% at 40% 0%, black 8%, transparent 72%)",
                        }}
                      />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -right-12 -top-10 h-36 w-36 rounded-full opacity-30 blur-2xl dark:opacity-45"
                        style={{
                          background: `radial-gradient(circle, color-mix(in oklab, ${ACCENT} 18%, white) 0%, transparent 72%)`,
                        }}
                      />

                      <div className="relative flex items-start justify-between gap-3">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400 dark:text-zinc-500">
                          {String(i + 1).padStart(2, "0")}
                        </p>
                        <span
                          aria-hidden
                          className="mt-0.5 size-1.5 shrink-0 rounded-full opacity-90"
                          style={{
                            background: ACCENT,
                            boxShadow: `0 0 0 3px color-mix(in oklab, ${ACCENT} 20%, transparent)`,
                          }}
                        />
                      </div>

                      <h3 className="relative mt-4 text-[17px] font-semibold tracking-[-0.02em] text-zinc-950 sm:text-[18px] dark:text-zinc-50">
                        {group.title}
                      </h3>

                      <ul className="relative mt-5 space-y-0 divide-y divide-zinc-200/70 dark:divide-white/[0.08]">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 py-3 pr-1 first:pt-0 last:pb-0"
                          >
                            <span
                              aria-hidden
                              className="mt-[0.45rem] size-1 shrink-0 rounded-full bg-zinc-300/90 dark:bg-white/20"
                            />
                            <span className="text-[15px] leading-snug text-zinc-700 dark:text-zinc-300">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </PageSection>

        <PageSection band="c" cornerWash>
          <SectionHeader title="Manual Workflows Break as the Business Grows" />
          <div className="mt-10 grid gap-3.5 sm:mt-11 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
            {PROBLEMS.map((card, i) => (
              <div
                key={card.title}
                className={`group relative overflow-hidden ${CARD_ELEVATED} p-5 transition hover:border-zinc-400/70 sm:p-6 dark:hover:border-zinc-600`}
              >
                <div
                  className="pointer-events-none absolute inset-y-3 left-0 w-0.5 rounded-full opacity-90 dark:opacity-80"
                  style={{
                    background: `linear-gradient(180deg, ${ACCENT}, color-mix(in oklab, ${ACCENT} 40%, transparent))`,
                  }}
                  aria-hidden
                />
                <div className="relative pl-3.5">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="mono text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-400 dark:text-zinc-500">
                      {(i + 1).toString().padStart(2, "0")}
                    </p>
                    <span
                      className="size-1.5 shrink-0 rounded-full opacity-80 transition group-hover:opacity-100"
                      style={{
                        background: ACCENT,
                        boxShadow: `0 0 0 3px color-mix(in oklab, ${ACCENT} 22%, transparent)`,
                      }}
                      aria-hidden
                    />
                  </div>
                  <h3 className="mt-3 text-[16px] font-semibold leading-snug tracking-[-0.015em] text-zinc-950 dark:text-zinc-100 sm:text-[17px]">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {card.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </PageSection>

        <PageSection id="services" glow="bottom" band="b">
          <SectionHeader title="What We Automate" />
          <ul className="mt-10 grid list-none gap-3.5 p-0 sm:mt-11 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
            {SERVICES.map((s, i) => (
              <li
                key={s.title}
                className={`relative flex gap-4 overflow-hidden ${CARD_ELEVATED} p-5 sm:gap-5 sm:p-6`}
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200/90 to-transparent dark:via-white/10"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-x-4 top-0 h-[3px] rounded-b-full opacity-90 dark:opacity-80"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)`,
                  }}
                  aria-hidden
                />
                <span
                  className="mono mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200/90 text-[13px] font-bold text-zinc-900 shadow-[0_1px_0_rgba(11,11,10,0.04)] dark:border-white/12 dark:bg-zinc-950/80 dark:text-zinc-100"
                  style={{
                    background: `color-mix(in oklab, ${ACCENT} 14%, white)`,
                    borderColor: `color-mix(in oklab, ${ACCENT} 32%, rgb(212 212 216))`,
                  }}
                >
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="text-[15px] font-semibold leading-snug tracking-[-0.02em] text-zinc-950 dark:text-white sm:text-[16px]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-[1.55] text-zinc-600 dark:text-zinc-400">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </PageSection>

        <PageSection band="a" glow="top">
          <SectionHeader title="From Scattered Tabs to One Clear Workflow" />
          <div className="mt-10 sm:mt-11">
            <div
              className={`relative overflow-hidden rounded-2xl border border-zinc-300/80 ${CARD_ELEVATED} shadow-[0_16px_50px_-28px_rgba(11,11,10,0.12)] dark:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.5)]`}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,color-mix(in_oklab,oklch(0.86_0.22_142)_6%,transparent),transparent)] opacity-70 dark:opacity-40"
              />
              <div className="relative grid lg:grid-cols-2">
                <div className="overflow-hidden border-b border-zinc-200/80 bg-[#FAFAF7]/90 p-6 sm:p-8 dark:border-white/[0.08] dark:bg-zinc-950/40 lg:border-b-0 lg:border-r">
                  <p className="mono text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    Before
                  </p>
                  <ul className="mt-6 space-y-4">
                    {BEFORE_ITEMS.map((line) => (
                      <li
                        key={line}
                        className="flex gap-3.5 text-[14px] leading-snug text-zinc-700 dark:text-zinc-300"
                      >
                        <span
                          className="mt-2 flex size-2 shrink-0 items-center justify-center rounded-full border border-zinc-300/90 bg-white dark:border-white/15 dark:bg-zinc-900"
                          aria-hidden
                        >
                          <span className="size-1 rounded-full bg-zinc-300 dark:bg-white/25" />
                        </span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative overflow-hidden border-t border-zinc-200/80 bg-[#FDFCF7] p-6 sm:p-8 dark:border-white/[0.08] dark:bg-zinc-900/55 lg:border-t-0">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,color-mix(in_oklab,oklch(0.86_0.22_142)_10%,transparent),transparent_58%)] dark:bg-[linear-gradient(165deg,color-mix(in_oklab,oklch(0.86_0.22_142)_14%,transparent),transparent_60%)]"
                  />
                  <p
                    className="mono relative text-[11px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: ACCENT_INK }}
                  >
                    After
                  </p>
                  <ul className="relative mt-6 space-y-4">
                    {AFTER_ITEMS.map((line) => (
                      <li
                        key={line}
                        className="flex gap-3.5 text-[14px] leading-snug text-zinc-800 dark:text-zinc-200"
                      >
                        <span
                          className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border text-[10px] font-bold leading-none dark:border-white/15"
                          style={{
                            borderColor: `color-mix(in oklab, ${ACCENT} 35%, rgb(212 212 216))`,
                            background: `color-mix(in oklab, ${ACCENT} 16%, white)`,
                            color: ACCENT_INK,
                          }}
                          aria-hidden
                        >
                          ✓
                        </span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </PageSection>

        <PageSection band="c" cornerWash>
          <SectionHeader title="How We Build Your V2 Workflow" />
          <div className={`relative mt-10 sm:mt-11 ${CARD_ELEVATED} overflow-hidden`}>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.3] dark:opacity-[0.18]"
              style={{
                backgroundImage: `
              linear-gradient(to right, rgba(11,11,10,0.055) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(11,11,10,0.055) 1px, transparent 1px)
            `,
                backgroundSize: "40px 40px",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 hidden opacity-18 dark:block"
              style={{
                backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)
            `,
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative px-4 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-11">
              <div
                aria-hidden
                className="pointer-events-none absolute left-[1.875rem] top-10 bottom-10 w-px bg-gradient-to-b from-zinc-200/40 via-zinc-200/90 to-zinc-200/40 dark:from-white/5 dark:via-white/12 dark:to-white/5 lg:hidden"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute left-[8%] right-[8%] top-[2.35rem] hidden h-[2px] rounded-full bg-gradient-to-r from-transparent via-zinc-300/85 to-transparent dark:via-white/14 lg:block"
              />

              <ol className="relative grid list-none gap-9 p-0 sm:gap-10 lg:grid-cols-4 lg:gap-6">
                {PROCESS_STEPS.map((step, i) => (
                  <li key={step.title} className="relative lg:text-center">
                    <div className="flex gap-4 lg:flex-col lg:items-center lg:gap-4">
                      <div className="relative z-[1] shrink-0 lg:order-first">
                        <span
                          className="mono flex size-10 items-center justify-center rounded-full border-2 bg-[color-mix(in_oklab,oklch(0.86_0.22_142)_16%,white)] text-[13px] font-bold text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900/95 dark:text-white"
                          style={{
                            borderColor: `color-mix(in oklab, ${ACCENT} 45%, rgb(220 220 224))`,
                            boxShadow: `0 0 0 4px color-mix(in oklab, ${ACCENT} 12%, #FDFCF7), 0 4px 14px -4px rgba(11,11,10,0.18)`,
                          }}
                        >
                          {i + 1}
                        </span>
                      </div>
                      <div className="min-w-0 pb-0.5 lg:px-1">
                        <h3 className="text-[15px] font-semibold text-zinc-950 dark:text-white sm:text-[16px]">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-[13.5px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </PageSection>

        <PageSection glow="top" band="b">
          <div className={`relative overflow-hidden ${CARD_ELEVATED} p-8 sm:p-10 lg:p-12`}>
            <div
              aria-hidden
              className="pointer-events-none absolute -right-12 top-0 h-64 w-64 rounded-full opacity-25 blur-3xl dark:opacity-40"
              style={{
                background: `color-mix(in oklab, ${ACCENT} 35%, transparent)`,
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.45] dark:opacity-[0.35]"
              style={{
                backgroundImage: `
              linear-gradient(to right, rgba(11,11,10,0.045) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(11,11,10,0.045) 1px, transparent 1px)
            `,
                backgroundSize: "48px 48px",
                maskImage:
                  "radial-gradient(ellipse 80% 70% at 20% 30%, black 15%, transparent 70%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 70% at 20% 30%, black 15%, transparent 70%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 hidden opacity-30 dark:block"
              style={{
                backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
                backgroundSize: "48px 48px",
                maskImage:
                  "radial-gradient(ellipse 80% 70% at 20% 30%, black 15%, transparent 70%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 70% at 20% 30%, black 15%, transparent 70%)",
              }}
            />

            <div className="relative mx-auto max-w-[52rem] text-center lg:mx-0 lg:max-w-none lg:text-left">
              <h2 className="text-balance text-[clamp(26px,3.5vw,40px)] font-semibold leading-[1.08] tracking-[-0.028em] text-zinc-950 dark:text-zinc-50">
                Built From Real Operating Experience
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-[18px] leading-relaxed text-zinc-800 dark:text-zinc-200 sm:text-[19px] lg:mx-0">
                We build from real operating experience — ecommerce, logistics, payments,
                fulfillment, customer support, and internal dashboards.
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-[17px] lg:mx-0">
                That means we do not just automate for the sake of automation. We focus on
                systems that reduce manual work, improve visibility, and support how the
                business actually runs.
              </p>
            </div>

            <ul className="relative mt-10 grid gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:mt-14">
              {CREDIBILITY_CARDS.map((c) => (
                <li
                  key={c.title}
                  className={`flex h-full flex-col ${CARD} border-zinc-300/80 p-5 sm:p-6 dark:border-zinc-600/70`}
                >
                  <span
                    className="inline-flex size-1.5 rounded-full"
                    style={{
                      background: ACCENT,
                      boxShadow: `0 0 0 3px color-mix(in oklab, ${ACCENT} 28%, transparent)`,
                    }}
                    aria-hidden
                  />
                  <h3 className="mt-4 text-[15px] font-semibold leading-snug text-zinc-950 dark:text-white sm:text-[16px]">
                    {c.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {c.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </PageSection>

        <section
          id="contact"
          className="relative scroll-mt-24 overflow-hidden border-t border-zinc-200/80 bg-[#F5F4EF] pt-12 pb-14 sm:pt-14 sm:pb-16 lg:pt-[3.75rem] lg:pb-[4.5rem] dark:border-white/10 dark:bg-zinc-950"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.42] dark:hidden"
            style={{
              backgroundImage: `
            linear-gradient(to right, rgba(11,11,10,0.045) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(11,11,10,0.045) 1px, transparent 1px)
          `,
              backgroundSize: "64px 64px",
              maskImage:
                "radial-gradient(ellipse 55% 55% at 50% 45%, black 28%, transparent 72%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 55% 55% at 50% 45%, black 28%, transparent 72%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden opacity-[0.38] dark:block"
            style={{
              backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
              backgroundSize: "64px 64px",
              maskImage:
                "radial-gradient(ellipse 55% 55% at 50% 45%, black 28%, transparent 72%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 55% 55% at 50% 45%, black 28%, transparent 72%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 dark:hidden"
            style={{
              background: `radial-gradient(ellipse 70% 50% at 20% 90%, color-mix(in oklab, ${ACCENT} 10%, #F5F4EF) 0%, transparent 55%)`,
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden dark:block"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 20% 90%, color-mix(in_oklab,oklch(0.86_0.22_142)_12%,transparent),transparent)",
            }}
          />

          <div className={`relative ${MAX} ${PAD_X}`}>
            <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-8 lg:items-start xl:gap-10">
              <div className="min-w-0 max-w-xl lg:max-w-none">
                <h2 className="text-balance text-[clamp(1.65rem,3.5vw,2.65rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-zinc-950 dark:text-white">
                  Stop Running the Business From Scattered Tabs
                </h2>
                <p className="mt-4 max-w-[36rem] text-pretty text-[15px] leading-[1.55] text-zinc-600 dark:text-zinc-400 sm:text-[16px] sm:leading-relaxed">
                  If your team is still chasing updates across spreadsheets, chats,
                  and manual processes, tell us what you&apos;re running today — we&apos;ll
                  reply with practical next steps.
                </p>

                <div className="mt-7 lg:mt-8">
                  <FounderContactPanel showWhatsappButton={false}>
                    <p className="mt-2 max-w-md text-pretty text-[13px] leading-[1.52] text-zinc-600 dark:text-zinc-400 sm:text-[14px]">
                      Operator-led workflow systems in Hong Kong — ecommerce, logistics,
                      payments, and internal dashboards; not automation for its own sake.
                    </p>
                  </FounderContactPanel>
                </div>
              </div>

              <div className="min-w-0 w-full">
                <ContactForm
                  sourcePage="/workflow-automation"
                  defaultServiceInterest="Business systems / workflow automation"
                  compact
                  showWhatsappSecondary
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
