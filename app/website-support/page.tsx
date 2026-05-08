import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteNavbar } from "@/components/shared/navbar";
import { BookAuditScrollCta } from "@/components/shared/book-audit-scroll-cta";
import { SiteContactStrip } from "@/components/shared/site-contact-strip";
import {
  ACCENT,
  ACCENT_INK,
  MAIL_HELLO,
  SITE_MAX,
  SITE_PAD_X,
} from "@/components/shared/site-tokens";
import { HeroDashboardMockup } from "@/components/website-support/hero-dashboard-mockup";

const MAX = SITE_MAX;
const PAD_X = SITE_PAD_X;
const SECTION_Y =
  "py-20 sm:py-[5.25rem] lg:py-[6.5rem]";

/** Unified card — homepage warm surfaces */
const CARD =
  "rounded-xl border border-zinc-300/75 bg-[#FDFCF7] shadow-[0_1px_0_rgba(11,11,10,0.04)] dark:border-zinc-700/85 dark:bg-zinc-950/60 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]";

export const metadata: Metadata = {
  title: "Website Support & Development for Hong Kong Businesses | V1toV2",
  description:
    "V1toV2 builds and supports Shopify, WordPress, Next.js, Supabase, and ecommerce websites for growing businesses in Hong Kong. Get ongoing website updates, improvements, and operational support.",
};

const PLATFORM_STACK_GROUPS = [
  {
    title: "Ecommerce Platforms",
    items: ["Shopify", "WooCommerce", "Squarespace"],
  },
  {
    title: "Website Management",
    emphasized: true,
    items: ["WordPress", "Website updates", "Ongoing support"],
  },
  {
    title: "Custom Systems",
    items: ["Next.js", "Supabase", "Admin dashboards"],
  },
] as const;

const PROBLEMS = [
  {
    title: "Slow updates",
    body: "Simple website changes become frustrating and time-consuming.",
  },
  {
    title: "Multiple freelancers",
    body: "Different developers, designers, and plugins create operational chaos.",
  },
  {
    title: "Outdated workflows",
    body: "Your business evolves, but your website and backend processes do not.",
  },
  {
    title: "No long-term support",
    body: "Most agencies disappear after launch instead of improving the system over time.",
  },
] as const;

const SERVICES = [
  {
    title: "Shopify Stores",
    body: "Store setup, redesigns, operational improvements, and ongoing support.",
  },
  {
    title: "WordPress Websites",
    body: "Modern business websites with flexible content management and long-term maintenance.",
  },
  {
    title: "Website Maintenance & Updates",
    body: "Content updates, fixes, improvements, integrations, and technical support.",
  },
  {
    title: "Ecommerce Operations Support",
    body: "Operational improvements for inventory, fulfillment, customer workflows, and backend processes.",
  },
  {
    title: "Custom Dashboards & Portals",
    body: "Internal tools and admin systems tailored to your operations.",
  },
  {
    title: "Next.js & Supabase Development",
    body: "Modern web applications and scalable backend infrastructure for growing businesses.",
  },
] as const;

const PROCESS_STEPS = [
  {
    title: "Understand the business",
    body: "We identify operational pain points, website gaps, and improvement opportunities.",
  },
  {
    title: "Improve the system",
    body: "From website updates to operational workflows, we help streamline how things work.",
  },
  {
    title: "Support long-term growth",
    body: "Ongoing updates, improvements, and technical support as the business evolves.",
  },
] as const;

const OPERATOR_PILLARS = [
  {
    title: "We know real operations",
    body: "Ecommerce, logistics, fulfillment, payments, and customer workflows — the parts that decide whether a site actually works.",
  },
  {
    title: "Websites that support the business",
    body: "When checkout, handoffs, or internal tools break, the site should help teams recover — not add confusion.",
  },
  {
    title: "Built for Hong Kong teams",
    body: "Fast updates, thin bandwidth, and tools that drift from reality — we design for that pressure, not only launch-day polish.",
  },
] as const;

type SupportSnapshotRow = {
  label: string;
  value: string;
  variant: "good" | "attention" | "neutral";
};

const SUPPORT_SNAPSHOT_ROWS: readonly SupportSnapshotRow[] = [
  { label: "Website health", value: "Good", variant: "good" },
  { label: "Pending plugin updates", value: "3", variant: "attention" },
  { label: "Mobile responsiveness", value: "Pass", variant: "good" },
  { label: "SEO checks", value: "Scheduled", variant: "neutral" },
  { label: "Shopify app review", value: "2 flagged", variant: "attention" },
  { label: "Backup status", value: "OK", variant: "good" },
  { label: "Performance score", value: "86", variant: "neutral" },
  { label: "Security patches", value: "Current", variant: "good" },
  { label: "Ecommerce sync", value: "In sync", variant: "good" },
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
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <div className="max-w-[42rem]">
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <h2 className="mt-5 text-balance text-[clamp(26px,3.5vw,40px)] font-semibold leading-[1.08] tracking-[-0.028em] text-zinc-950 dark:text-zinc-50 sm:mt-6">
        {title}
      </h2>
      <p className="mt-5 text-pretty text-[17px] leading-[1.55] text-zinc-600 dark:text-zinc-400 sm:text-[18px]">
        {lead}
      </p>
    </div>
  );
}

function PageSection({
  id,
  children,
  first,
  glow = "none",
  band = "a",
}: {
  id?: string;
  children: ReactNode;
  first?: boolean;
  glow?: "none" | "top" | "bottom";
  band?: "a" | "b";
}) {
  const bandBg =
    band === "a"
      ? "bg-[#F5F4EF] dark:bg-zinc-950"
      : "bg-[#FDFCF7] dark:bg-zinc-950";

  return (
    <section
      id={id}
      className={`relative scroll-mt-24 ${SECTION_Y} ${bandBg} ${first ? "" : "border-t border-zinc-200/80 dark:border-white/[0.07]"}`}
    >
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

function snapshotDot(variant: SupportSnapshotRow["variant"]) {
  if (variant === "good")
    return {
      background: ACCENT,
      boxShadow: `0 0 0 3px color-mix(in oklab, ${ACCENT} 28%, transparent)`,
    };
  if (variant === "attention")
    return {
      background: "oklch(0.78 0.16 75)",
      boxShadow: "0 0 0 3px color-mix(in oklab, oklch(0.78 0.16 75) 22%, transparent)",
    };
  return {
    background: "rgb(161 161 170)",
    boxShadow: "0 0 0 2px rgba(11, 11, 10, 0.06)",
  };
}

function PlatformStackGroups() {
  return (
    <div className="relative mt-9 sm:mt-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-4 top-1/2 hidden h-px -translate-y-1/2 lg:block"
        style={{
          background: `linear-gradient(90deg, transparent 0%, color-mix(in oklab, ${ACCENT} 20%, rgb(228 228 231)) 18%, color-mix(in oklab, ${ACCENT} 14%, rgb(212 212 216)) 50%, color-mix(in oklab, ${ACCENT} 20%, rgb(228 228 231)) 82%, transparent 100%)`,
        }}
      />
      <ul className="relative grid list-none gap-5 p-0 sm:gap-6 lg:grid-cols-3 lg:items-stretch lg:gap-6">
        {PLATFORM_STACK_GROUPS.map((group, i) => {
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
                    ? "border-zinc-300/90 from-white/98 via-[#FAFAF7]/98 to-[#F3F2EC]/90 shadow-[0_20px_48px_-20px_rgba(11,11,10,0.12)] lg:z-[2] lg:-translate-y-1.5 dark:border-zinc-600/80 dark:from-zinc-900/80 dark:via-zinc-950/75 dark:to-zinc-950/85"
                    : "border-zinc-300/75 from-white/92 via-[#FDFCF7]/95 to-[#F6F5F0]/88 shadow-[0_10px_36px_-22px_rgba(11,11,10,0.09)] dark:border-zinc-700/75 dark:from-zinc-900/55 dark:via-zinc-950/50 dark:to-zinc-950/60"
                }`}
                style={{
                  borderColor: emphasized
                    ? `color-mix(in oklab, ${ACCENT} 16%, rgb(212 212 216 / 0.85))`
                    : `color-mix(in oklab, ${ACCENT} 7%, rgb(212 212 216 / 0.85))`,
                }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.28] dark:opacity-[0.18]"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(11,11,10,0.025) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(11,11,10,0.025) 1px, transparent 1px)
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
                  className="pointer-events-none absolute -right-10 -top-8 h-32 w-32 rounded-full opacity-28 blur-2xl dark:opacity-40"
                  style={{
                    background: `radial-gradient(circle, color-mix(in oklab, ${ACCENT} 16%, white) 0%, transparent 72%)`,
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
                      boxShadow: `0 0 0 3px color-mix(in oklab, ${ACCENT} 18%, transparent)`,
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
  );
}

function WebsiteSupportSnapshotPanel() {
  return (
    <aside
      className="relative min-w-0 overflow-hidden rounded-xl border border-zinc-300/75 bg-[#FDFCF7]/95 shadow-[0_1px_0_rgba(11,11,10,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-[10px] dark:border-white/12 dark:bg-zinc-900/45 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
      aria-labelledby="support-snapshot-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full opacity-40 blur-3xl dark:opacity-50"
        style={{
          background: `radial-gradient(circle, color-mix(in oklab, ${ACCENT} 22%, white) 0%, transparent 70%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.28]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(11,11,10,0.045) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(11,11,10,0.045) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 0%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 0%, black 20%, transparent 75%)",
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
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 0%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 0%, black 20%, transparent 75%)",
        }}
      />

      <div className="relative border-b border-zinc-200/90 px-4 py-3.5 dark:border-white/10 sm:px-5 sm:py-4">
        <h3
          id="support-snapshot-heading"
          className="text-[14px] font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-[15px]"
        >
          Website Support Snapshot
        </h3>
        <p className="mono mt-1 text-[10.5px] leading-relaxed text-zinc-500 sm:text-[11px]">
          Ongoing care — not a vanity dashboard.
        </p>
      </div>

      <ul className="relative divide-y divide-zinc-200/80 px-2 py-1 dark:divide-white/[0.08] sm:px-3">
        {SUPPORT_SNAPSHOT_ROWS.map((row) => (
          <li
            key={row.label}
            className="flex items-center justify-between gap-3 px-2 py-2.5 sm:py-3"
          >
            <span className="flex min-w-0 items-center gap-2.5">
              <span
                className="size-1.5 shrink-0 rounded-full"
                style={snapshotDot(row.variant)}
                aria-hidden
              />
              <span className="truncate text-[12px] leading-snug text-zinc-800 dark:text-zinc-300 sm:text-[13px]">
                {row.label}
              </span>
            </span>
            <span className="mono shrink-0 text-[11px] font-medium text-zinc-600 dark:text-zinc-400 sm:text-[12px]">
              {row.value}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default function WebsiteSupportPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <SiteNavbar />

      <main className="relative">
        {/* Hero */}
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

          <div className={`relative ${MAX} ${PAD_X} pb-16 pt-10 sm:pb-20 sm:pt-12 md:pb-24 md:pt-14 lg:pb-28 lg:pt-[4.5rem]`}>
            <div className="mb-8 flex max-w-[1140px] flex-col gap-3 sm:mb-10 sm:flex-row sm:items-center sm:justify-between sm:gap-4 lg:mb-12">
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-zinc-200/90 bg-white/75 px-3 py-1.5 text-[11px] font-medium text-zinc-700 shadow-[0_1px_0_rgba(11,11,10,0.04)] backdrop-blur-[8px] dark:border-zinc-700/90 dark:bg-zinc-900/55 dark:text-zinc-200">
                <span
                  className="size-1.5 shrink-0 rounded-full"
                  style={{
                    background: ACCENT,
                    boxShadow: `0 0 0 3px color-mix(in oklab, ${ACCENT} 28%, transparent)`,
                  }}
                />
                <span>Website support & development</span>
              </div>
              <p className="mono text-[11px] font-medium uppercase tracking-[0.06em] text-zinc-500 sm:shrink-0 sm:text-right dark:text-zinc-400">
                Hong Kong
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-start lg:gap-14">
              <div className="min-w-0">
                <h1 className="max-w-[1140px] text-[clamp(30px,5.8vw,72px)] font-semibold leading-[0.98] tracking-[-0.035em] text-[#0B0B0A] dark:text-zinc-50">
                  <span className="block">Modern websites built for</span>
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
                    .
                  </span>
                </h1>

                <p className="mono mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] leading-relaxed text-zinc-500 sm:mt-7 sm:gap-x-4 dark:text-zinc-500">
                  <span className="text-zinc-600 dark:text-zinc-400">Builds & ongoing support</span>
                  <span aria-hidden className="hidden text-zinc-300 sm:inline dark:text-zinc-600">
                    ·
                  </span>
                  <span>Shopify · WordPress · Next.js · Supabase</span>
                  <span aria-hidden className="hidden text-zinc-300 sm:inline dark:text-zinc-600">
                    ·
                  </span>
                  <span>Updates for HK teams</span>
                </p>

                <p className="mt-6 max-w-xl text-[17px] leading-[1.55] text-zinc-600 dark:text-zinc-400 sm:mt-7 sm:text-[18px] lg:max-w-[580px] lg:text-[19px]">
                  We build and{" "}
                  <strong className="font-medium text-zinc-900 dark:text-zinc-200">
                    support websites end to end
                  </strong>
                  : storefronts, content sites, and admin tools — with clear
                  ownership, steady updates, and room to grow.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:mt-9">
                  <BookAuditScrollCta
                    conversion="website"
                    href="#contact"
                    className="inline-flex min-h-[52px] w-full flex-1 items-center justify-center rounded-lg px-7 text-[15px] font-semibold transition hover:opacity-95 sm:h-11 sm:min-h-0 sm:w-auto sm:min-w-[220px]"
                    style={{
                      background: ACCENT,
                      color: ACCENT_INK,
                    }}
                  >
                    Book a Free Website Audit
                  </BookAuditScrollCta>
                  <a
                    href="#services"
                    className="inline-flex min-h-[52px] w-full flex-1 items-center justify-center rounded-lg border border-zinc-300/90 bg-white px-6 text-[15px] font-medium text-zinc-900 shadow-sm transition hover:border-zinc-400 sm:h-11 sm:min-h-0 sm:w-auto sm:min-w-[180px] dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-500"
                  >
                    View Services
                  </a>
                </div>
                <p className="mono mt-4 text-center text-[11px] tracking-wide text-zinc-500 sm:text-left">
                  Email hello@v1tov2.com · Subject: Free Website Audit
                </p>
              </div>

              <HeroDashboardMockup accent={ACCENT} />
            </div>
          </div>
        </section>

        <PageSection first glow="top" band="a">
          <SectionHeader
            eyebrow="Platforms"
            title="Built With Modern Platforms"
            lead="Teams already run on these stacks — we help you ship changes, keep plugins sane, and extend with Next.js or Supabase when you outgrow templates. When your site is tied to daily operations, you need maintenance — not only a launch date."
          />

          <PlatformStackGroups />
        </PageSection>

        <PageSection glow="none" band="b">
          <SectionHeader
            eyebrow="After launch"
            title="Most Business Websites Stop Evolving After Launch"
            lead="The business moves; the site doesn’t. That shows up as slow patches, messy handoffs, and tools that no longer match how you sell or serve — exactly where ongoing website support pays off."
          />

          <div className={`relative mt-10 overflow-hidden sm:mt-12 ${CARD}`}>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-4 left-0 w-px opacity-80 dark:opacity-70"
              style={{
                background: `linear-gradient(180deg, transparent, color-mix(in oklab, ${ACCENT} 45%, rgb(212 212 216)), transparent)`,
              }}
            />
            <ul className="relative divide-y divide-zinc-200/75 dark:divide-white/[0.08]">
              {PROBLEMS.map((card) => (
                <li
                  key={card.title}
                  className="flex gap-5 px-5 py-5 sm:gap-6 sm:px-7 sm:py-6"
                >
                  <span
                    aria-hidden
                    className="mt-1.5 size-2 shrink-0 rounded-full"
                    style={{
                      background: ACCENT,
                      boxShadow: `0 0 0 3px color-mix(in oklab, ${ACCENT} 22%, transparent)`,
                    }}
                  />
                  <div className="min-w-0">
                    <h3 className="text-[16px] font-semibold leading-snug tracking-[-0.015em] text-zinc-950 dark:text-zinc-100 sm:text-[17px]">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {card.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </PageSection>

        <PageSection id="services" glow="bottom" band="a">
          <SectionHeader
            eyebrow="Services"
            title="What We Help Businesses With"
            lead="Six clear areas — storefronts, content sites, ecommerce ops, and custom apps — so you know what we cover before you email. After we agree on priorities, we keep the same long-term rhythm: understand, improve, support."
          />

          <div className="mt-10 space-y-3 sm:mt-12 sm:space-y-4">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className={`flex flex-col gap-4 border-l-2 py-5 pl-5 sm:flex-row sm:items-start sm:gap-8 sm:py-6 sm:pl-7 ${CARD}`}
                style={{
                  borderLeftColor: `color-mix(in oklab, ${ACCENT} 55%, rgb(212 212 216))`,
                }}
              >
                <h3 className="shrink-0 text-[16px] font-semibold leading-snug tracking-[-0.02em] text-zinc-950 sm:w-[min(240px,34%)] sm:text-[17px] dark:text-white">
                  {s.title}
                </h3>
                <p className="min-w-0 text-[14.5px] leading-[1.55] text-zinc-600 dark:text-zinc-400 sm:pt-0.5 sm:text-[15px]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </PageSection>

        <PageSection band="b">
          <SectionHeader
            eyebrow="How we work"
            title="A Long-Term Website Partner — Not Just a One-Time Build"
            lead="The same rhythm we use on complex systems work — understand, improve, support — applied to your website and the operations behind it."
          />

          <div className={`relative mt-10 sm:mt-12 ${CARD} overflow-hidden p-6 sm:p-8`}>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
              style={{
                backgroundImage: `
              linear-gradient(to right, rgba(11,11,10,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(11,11,10,0.06) 1px, transparent 1px)
            `,
                backgroundSize: "40px 40px",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 hidden opacity-20 dark:block"
              style={{
                backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative grid gap-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-zinc-200/80 dark:md:divide-white/10">
              {PROCESS_STEPS.map((step, i) => (
                <div
                  key={step.title}
                  className="md:px-6 lg:px-10 first:md:pl-0 last:md:pr-0"
                >
                  <span
                    className="mono inline-flex size-8 items-center justify-center rounded-full border border-zinc-300/90 bg-[color-mix(in_oklab,oklch(0.86_0.22_142)_14%,white)] text-[12px] font-bold text-zinc-900 dark:border-zinc-600 dark:bg-zinc-900/85 dark:text-white"
                    style={{
                      borderColor: `color-mix(in oklab, ${ACCENT} 32%, rgb(212 212 216))`,
                    }}
                  >
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-[15px] font-semibold text-zinc-950 dark:text-white sm:text-[16px]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </PageSection>

        <PageSection glow="top" band="a">
          <div className="relative overflow-hidden rounded-2xl border border-zinc-300/80 bg-gradient-to-b from-[#FDFCF7]/98 via-[#FAFAF7]/95 to-[#F4F3ED]/92 px-6 py-12 shadow-[0_20px_50px_-28px_rgba(11,11,10,0.1)] dark:border-zinc-600/70 dark:from-zinc-900/70 dark:via-zinc-950/65 dark:to-zinc-950/75 dark:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.5)] sm:px-8 sm:py-14 lg:px-11 lg:py-16"
            style={{
              borderColor: `color-mix(in oklab, ${ACCENT} 12%, rgb(212 212 216 / 0.85))`,
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full opacity-30 blur-3xl dark:opacity-45"
              style={{
                background: `radial-gradient(circle, color-mix(in oklab, ${ACCENT} 28%, white) 0%, transparent 70%)`,
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.28]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(11,11,10,0.038) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(11,11,10,0.038) 1px, transparent 1px)
                `,
                backgroundSize: "48px 48px",
                maskImage:
                  "radial-gradient(ellipse 75% 70% at 20% 25%, black 12%, transparent 72%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 75% 70% at 20% 25%, black 12%, transparent 72%)",
              }}
            />

            <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-14 lg:gap-x-16">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2.5">
                  <span
                    className="h-px w-8 shrink-0 rounded-full sm:w-10"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${ACCENT})`,
                    }}
                    aria-hidden
                  />
                  <SectionEyebrow>Why V1toV2</SectionEyebrow>
                </div>
                <h2 className="mt-5 text-balance text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.06] tracking-[-0.032em] text-zinc-950 dark:text-zinc-50 sm:mt-6">
                  Built by Operators,
                  <span className="block text-zinc-600 dark:text-zinc-300">
                    Not Just Designers
                  </span>
                </h2>
                <p className="mt-6 max-w-xl text-pretty text-[18px] leading-[1.55] text-zinc-800 dark:text-zinc-200 sm:text-[19px]">
                  We build websites for{" "}
                  <strong className="font-semibold text-zinc-950 dark:text-white">
                    real business operations
                  </strong>
                  — not only layouts and launch decks. Stores, fulfilment,
                  payments, and customer workflows have to stay aligned when the
                  site changes.
                </p>
                <p className="mt-5 max-w-xl text-[16px] leading-[1.6] text-zinc-600 dark:text-zinc-400 sm:text-[17px]">
                  That means ecommerce, logistics, and day-to-day support
                  pressure — the same reality Hong Kong teams face when the
                  website is slow to update or doesn&apos;t match how you
                  actually work.
                </p>
              </div>

              <ul className="flex list-none flex-col gap-4 p-0 lg:col-span-5 lg:justify-center lg:gap-5">
                {OPERATOR_PILLARS.map((pillar) => (
                  <li
                    key={pillar.title}
                    className="rounded-xl border border-zinc-200/85 bg-white/75 px-5 py-4 shadow-[0_1px_0_rgba(11,11,10,0.03)] dark:border-white/[0.08] dark:bg-zinc-950/45 sm:px-6 sm:py-5"
                    style={{
                      borderColor: `color-mix(in oklab, ${ACCENT} 8%, rgb(228 228 231 / 0.95))`,
                    }}
                  >
                    <p className="text-[15px] font-semibold leading-snug text-zinc-950 dark:text-zinc-50">
                      {pillar.title}
                    </p>
                    <p className="mt-2 text-[14px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {pillar.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </PageSection>

        {/* Final CTA — single column, homepage final-cta atmosphere */}
        <section
          id="contact"
          className="relative scroll-mt-24 overflow-hidden border-t border-zinc-200/80 bg-[#F5F4EF] py-20 sm:py-24 lg:py-28 dark:border-white/10 dark:bg-zinc-950"
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
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(260px,20rem)] lg:gap-12 xl:gap-14">
              <div className="min-w-0 max-w-[42rem]">
                <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-zinc-200/90 bg-white/80 px-3 py-1.5 shadow-[0_1px_0_rgba(11,11,10,0.03)] dark:border-white/15 dark:bg-zinc-900/55">
                  <span
                    className="size-1.5 shrink-0 rounded-full"
                    style={{
                      background: ACCENT,
                      boxShadow: `0 0 0 3px color-mix(in oklab, ${ACCENT} 28%, transparent)`,
                    }}
                  />
                  <span className="mono text-[11px] font-medium uppercase tracking-[0.07em] text-zinc-500 dark:text-zinc-400">
                    Next step
                  </span>
                </div>

                <h2 className="mt-6 text-balance text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-zinc-950 dark:text-white">
                  Your Website Should Grow With Your Business
                </h2>

                <p className="mt-6 text-pretty text-lg leading-[1.55] text-zinc-600 dark:text-zinc-400 sm:text-[19px]">
                  Tell us what you’re running today — Shopify, WordPress,
                  Squarespace, or a custom stack. We’ll reply with a clear read on
                  support, updates, and what to fix first for Hong Kong operations.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <BookAuditScrollCta
                    conversion="website"
                    href="#contact"
                    className="inline-flex h-12 w-full items-center justify-center rounded-lg px-7 text-[15px] font-semibold transition hover:opacity-95 sm:h-[3.25rem] sm:w-auto sm:min-w-[240px]"
                    style={{
                      background: ACCENT,
                      color: ACCENT_INK,
                    }}
                  >
                    Book a Free Website Audit
                  </BookAuditScrollCta>
                  <Link
                    href={MAIL_HELLO}
                    className="mono inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-lg border border-zinc-300/90 bg-white px-6 text-[13.5px] font-medium tracking-wide text-zinc-900 shadow-sm transition hover:border-zinc-400 sm:h-[3.25rem] sm:w-auto dark:border-white/18 dark:bg-transparent dark:text-zinc-100 dark:shadow-none dark:hover:border-white/28 dark:hover:bg-white/[0.05]"
                  >
                  hello@v1tov2.com
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="shrink-0 opacity-80"
                    aria-hidden
                  >
                    <path
                      d="M3 3h6v6M3 9l6-6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </Link>
              </div>

              <p className="mono mt-4 max-w-md text-[11px] leading-relaxed text-zinc-500">
                Free audit by email · We review your setup, update backlog, and
                realistic next steps before you commit.
              </p>

              <SiteContactStrip positioningLine="Operator-led website support · Hong Kong." />
              </div>

              <WebsiteSupportSnapshotPanel />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
