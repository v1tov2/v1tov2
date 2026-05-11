import type { Metadata } from "next";
import Image from "next/image";
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

const MAX = SITE_MAX;
const PAD_X = SITE_PAD_X;

const CARD =
  "rounded-xl border border-zinc-300/75 bg-[#FDFCF7] shadow-[0_1px_0_rgba(11,11,10,0.04)] dark:border-zinc-700/85 dark:bg-zinc-950/60 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]";

export const metadata: Metadata = {
  title: "Custom Business Systems & Workflow Automation for SMEs | V1toV2",
  description:
    "V1toV2 designs and builds custom business systems for SMEs: admin dashboards, customer portals, workflow tools, and operational software tailored to how your company works.",
};

const WHAT_WE_BUILD = [
  {
    title: "Admin Dashboards",
    body: "Manage operations, payments, requests, statuses, and internal workflows in one place.",
  },
  {
    title: "Customer Portals",
    body: "Give customers visibility into orders, requests, shipments, accounts, or progress updates.",
  },
  {
    title: "Workflow Systems",
    body: "Track approvals, fulfillment stages, requests, and operational processes across teams.",
  },
  {
    title: "Business Logic & Automation",
    body: "Custom pricing, calculations, notifications, integrations, and operational workflows tailored to your business.",
  },
] as const;

const PROCESS_STEPS = [
  {
    title: "Understand the workflow",
    body: "We learn how your operations currently work across staff, customers, requests, and internal processes.",
  },
  {
    title: "Identify what should be systemized",
    body: "Not every problem needs software. We focus on the workflows that create the most operational friction.",
  },
  {
    title: "Build the system",
    body: "Dashboards, portals, websites, operational tools, workflow systems, or integrations tailored to your business.",
  },
  {
    title: "Improve over time",
    body: "As operations evolve, systems should evolve too. We continue refining workflows as the business grows.",
  },
] as const;

type ShowcaseImage = {
  src: string;
  alt: string;
};

/** Main proof — largest allowed screenshot height (desktop ~420–480px). */
const FEATURED_REAL_SYSTEM = {
  title: "Shipment Management Dashboard",
  body: "A centralized admin dashboard for managing shipment workflows, payment statuses, customer records, routes, and operational visibility.",
  image: {
    src: "/images/business-systems/shipment-dashboard.png",
    alt: "Admin dashboard for shipment workflows, payments, and operational visibility",
  },
} as const;

type SupportingRealSystem =
  | {
      kind: "single";
      title: string;
      body: string;
      image: ShowcaseImage;
      shotMax: string;
    }
  | {
      kind: "dual-workflow";
      title: string;
      body: string;
      panes: readonly [
        {
          label: string;
          description: string;
          image: ShowcaseImage;
        },
        {
          label: string;
          description: string;
          image: ShowcaseImage;
        },
      ];
      shotMax: string;
    }
  | {
      kind: "dual-proof";
      title: string;
      body: string;
      leftColumnHeading: string;
      events: readonly [
        {
          title: string;
          description: string;
          image: ShowcaseImage;
        },
        {
          title: string;
          description: string;
          image: ShowcaseImage;
        },
      ];
      rightColumn: {
        heading: string;
        description: string;
        image: ShowcaseImage;
      };
    };

/** Supporting proof cards — capability-grouped; two-column grid on desktop. */
const SUPPORTING_REAL_SYSTEMS: readonly SupportingRealSystem[] = [
  {
    kind: "dual-workflow",
    title: "Workflow Tracking & Status Management",
    body: "Track operational progress across shipments, sourcing requests, approvals, purchasing stages, and fulfillment workflows through centralized status systems.",
    panes: [
      {
        label: "Shipment Lifecycle Tracking",
        description:
          "Customers and staff can track shipment progress through operational stages including registration, warehouse arrival, processing, dispatch, and delivery.",
        image: {
          src: "/images/business-systems/shipment-tracking-flow.png",
          alt: "Customer-facing shipment tracking across operational stages",
        },
      },
      {
        label: "Sourcing Request Workflow",
        description:
          "Track sourcing requests across review, quotation, payment, purchasing, and fulfillment stages through a centralized operational workflow.",
        image: {
          src: "/images/business-systems/sourcing-workflow.png",
          alt: "Sourcing request workflow with review and coordination stages",
        },
      },
    ] as const,
    shotMax: "max-h-[200px] sm:max-h-[220px] lg:max-h-[240px]",
  },
  {
    kind: "single",
    title: "Shipment & Payment Summary",
    body: "Structured shipment details, pricing breakdowns, payment status, and operational data presented in one customer-facing view.",
    image: {
      src: "/images/business-systems/shipment-summary.png",
      alt: "Shipment and payment summary with pricing and status details",
    },
    shotMax: "max-h-[260px] sm:max-h-[340px] lg:max-h-[400px]",
  },
  {
    kind: "single",
    title: "Pricing & Operational Calculations",
    body: "Custom pricing logic, quote breakdowns, exchange-rate handling, and payment coordination built directly into operational workflows.",
    image: {
      src: "/images/business-systems/sourcing-pricing.png",
      alt: "Pricing and quote breakdown within operational workflow",
    },
    shotMax: "max-h-[280px] sm:max-h-[340px] lg:max-h-[400px]",
  },
  {
    kind: "dual-proof",
    title: "Proof & Verification Management",
    body: "Capture, upload, and manage operational proof inside the workflow so teams and customers have clearer visibility and accountability.",
    leftColumnHeading: "Operational proof events",
    events: [
      {
        title: "Arrival at warehouse",
        description:
          "Proof captured when the shipment arrived at the warehouse.",
        image: {
          src: "/images/business-systems/shipment-arrived.png",
          alt: "Warehouse arrival operational proof for shipment verification",
        },
      },
      {
        title: "Ready for dispatch",
        description: "Operational proof captured before shipment dispatch.",
        image: {
          src: "/images/business-systems/shipment-dispatched.png",
          alt: "Pre-dispatch operational proof for shipment verification",
        },
      },
    ] as const,
    rightColumn: {
      heading: "Proof upload & management",
      description:
        "Upload and manage proof documents directly inside the operational workflow.",
      image: {
        src: "/images/business-systems/sourcing-proof-uploads.png",
        alt: "Sourcing proof upload and verification interface",
      },
    },
  },
];

function ProofCaption({ title, body }: { title: string; body: string }) {
  return (
    <>
      <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-zinc-950 dark:text-zinc-50 sm:text-[18px]">
        {title}
      </h3>
      <p className="mt-2 text-pretty text-[14px] leading-[1.55] text-zinc-500 dark:text-zinc-500 sm:text-[15px]">
        {body}
      </p>
    </>
  );
}

function ScreenshotFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-zinc-300/85 bg-zinc-100/80 shadow-[0_16px_48px_-24px_rgba(11,11,10,0.14)] ring-1 ring-zinc-200/50 dark:border-zinc-600/70 dark:bg-zinc-900/40 dark:shadow-[0_20px_56px_-28px_rgba(0,0,0,0.45)] dark:ring-white/[0.06] ${className}`}
    >
      {children}
    </div>
  );
}

export default function BusinessSystemsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <SiteNavbar />

      <main>
        {/* Hero */}
        <section
          className="relative border-b border-zinc-200/90 bg-[#FAFAF7] dark:border-zinc-800 dark:bg-zinc-950"
          aria-labelledby="business-systems-hero-heading"
        >
          <div className={`relative ${MAX} ${PAD_X} pb-16 pt-10 sm:pb-20 sm:pt-14 md:pb-24 md:pt-16 lg:pb-28 lg:pt-[4.5rem]`}>
            <div className="mx-auto max-w-4xl text-center lg:max-w-5xl">
              <h1
                id="business-systems-hero-heading"
                className="text-balance text-[clamp(1.75rem,4.8vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-zinc-950 dark:text-zinc-50 lg:text-[clamp(2.125rem,4.6vw,3.5rem)] lg:tracking-[-0.038em]"
              >
                Custom Business Systems & Workflow Automation for SMEs
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-pretty text-[clamp(1.125rem,2.2vw,1.4rem)] font-medium leading-snug text-zinc-700 dark:text-zinc-300 lg:mt-6">
                We build business systems around how your company actually operates.
              </p>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-[17px] leading-[1.6] text-zinc-600 dark:text-zinc-400 sm:mt-7 sm:text-[18px]">
                From customer portals and admin dashboards to workflow systems and
                operational tools, we help businesses organize operations, improve
                visibility, and reduce repetitive manual work.
              </p>
              <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:mt-12">
                <BookAuditScrollCta
                  conversion="v2"
                  href="#contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-lg px-8 text-[15px] font-semibold transition hover:opacity-95 sm:min-h-[44px]"
                  style={{
                    background: ACCENT,
                    color: ACCENT_INK,
                  }}
                >
                  Book a consultation
                </BookAuditScrollCta>
                <a
                  href="#real-systems"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-zinc-300/90 bg-white px-8 text-[15px] font-medium text-zinc-900 shadow-sm transition hover:border-zinc-400 sm:min-h-[44px] dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-500"
                >
                  View example systems
                </a>
              </div>
              <p className="mx-auto mt-8 max-w-3xl text-pretty text-[14px] leading-[1.55] text-zinc-500 dark:text-zinc-500 sm:mt-9 sm:text-[15px]">
                Examples include customer portals, admin dashboards, sourcing workflows,
                shipment tracking, and payment coordination.
              </p>
            </div>
          </div>
        </section>

        {/* What we build */}
        <section
          className={`border-t border-zinc-200/80 bg-[#F5F4EF] py-16 sm:py-20 lg:py-[5.25rem] dark:border-white/[0.07] dark:bg-zinc-950`}
        >
          <div className={MAX + " " + PAD_X}>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-[clamp(1.5rem,3vw,2.125rem)] font-semibold tracking-[-0.025em] text-zinc-950 dark:text-zinc-50">
                What we build
              </h2>
              <p className="mt-5 text-pretty text-[17px] leading-[1.55] text-zinc-600 dark:text-zinc-400 sm:text-[18px]">
                Every business eventually reaches a point where disconnected tools,
                manual coordination, and scattered information slow things down. We
                build systems that help teams work more clearly and efficiently.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-7 lg:mt-20 lg:gap-8">
              {WHAT_WE_BUILD.map((item) => (
                <div key={item.title} className={`${CARD} p-7 sm:p-8`}>
                  <h3 className="text-[18px] font-semibold tracking-[-0.022em] text-zinc-950 dark:text-zinc-50 sm:text-[19px]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.55] text-zinc-600 dark:text-zinc-400">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real systems */}
        <section
          id="real-systems"
          className="scroll-mt-24 border-t border-zinc-200/80 bg-[#FAFAF7] py-16 sm:py-20 lg:py-[5.25rem] dark:border-white/[0.07] dark:bg-zinc-950"
        >
          <div className={MAX + " " + PAD_X}>
            <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
              <h2 className="text-balance text-[clamp(1.5rem,3vw,2.125rem)] font-semibold tracking-[-0.025em] text-zinc-950 dark:text-zinc-50">
                Real systems built around real business workflows.
              </h2>
              <p className="mt-4 text-pretty text-[16px] leading-relaxed text-zinc-600 dark:text-zinc-400 sm:mt-5 sm:text-[17px]">
                These are examples from operational systems we have already built —
                not generic mockups.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-[1200px] sm:mt-14 lg:mt-16">
              {/* Featured: admin dashboard */}
              <div className="scroll-mt-20">
                <div className="mx-auto max-w-3xl text-center">
                  <ProofCaption
                    title={FEATURED_REAL_SYSTEM.title}
                    body={FEATURED_REAL_SYSTEM.body}
                  />
                </div>
                <div className="mx-auto mt-5 max-w-5xl sm:mt-6">
                  <ScreenshotFrame>
                    <Image
                      src={FEATURED_REAL_SYSTEM.image.src}
                      alt={FEATURED_REAL_SYSTEM.image.alt}
                      width={1600}
                      height={1000}
                      className="mx-auto h-auto max-h-[240px] w-full object-contain object-top sm:max-h-[320px] lg:max-h-[450px]"
                      sizes="(max-width: 1024px) 100vw, 896px"
                      priority
                    />
                  </ScreenshotFrame>
                </div>
              </div>

              {/* Supporting proof grid */}
              <div className="mt-9 grid gap-5 sm:mt-11 sm:gap-6 lg:mt-12 lg:grid-cols-2 lg:gap-6">
                {SUPPORTING_REAL_SYSTEMS.map((block) => {
                  if (block.kind === "dual-workflow") {
                    return (
                      <div
                        key={block.title}
                        className={`${CARD} flex flex-col p-4 sm:p-5`}
                      >
                        <ProofCaption title={block.title} body={block.body} />
                        <div
                          className="mt-3 flex flex-col gap-0"
                          role="group"
                          aria-label="Workflow tracking examples"
                        >
                          {block.panes.map((pane, paneIndex) => (
                            <div
                              key={pane.image.src}
                              className={
                                paneIndex > 0
                                  ? "mt-4 border-t border-zinc-200/75 pt-4 dark:border-zinc-700/65"
                                  : ""
                              }
                            >
                              <p className="text-[13px] font-semibold leading-snug tracking-[-0.01em] text-zinc-900 dark:text-zinc-100">
                                {pane.label}
                              </p>
                              <p className="mt-1.5 max-w-xl text-pretty text-[13px] leading-[1.5] text-zinc-500 dark:text-zinc-500 sm:text-[14px]">
                                {pane.description}
                              </p>
                              <ScreenshotFrame className="mt-2.5">
                                <Image
                                  src={pane.image.src}
                                  alt={pane.image.alt}
                                  width={1200}
                                  height={800}
                                  className={`mx-auto h-auto w-full object-contain object-top ${block.shotMax}`}
                                  sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                              </ScreenshotFrame>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  if (block.kind === "dual-proof") {
                    return (
                      <div
                        key={block.title}
                        className={`${CARD} flex flex-col p-4 sm:p-5`}
                      >
                        <ProofCaption title={block.title} body={block.body} />
                        <div className="mt-3 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-start lg:gap-8">
                          {/* Operational proof events → upload/management story */}
                          <div className="min-w-0">
                            <p className="text-[13px] font-semibold leading-snug tracking-[-0.01em] text-zinc-900 dark:text-zinc-100">
                              {block.leftColumnHeading}
                            </p>
                            <div className="mt-2 flex flex-col gap-2">
                              {block.events.map((event) => (
                                <div
                                  key={event.title}
                                  className="rounded-lg border border-zinc-200/85 bg-[#FDFCF7] p-2 sm:p-2.5 shadow-[0_1px_0_rgba(11,11,10,0.03)] dark:border-zinc-600/70 dark:bg-zinc-900/35"
                                >
                                  <p className="text-[12px] font-semibold leading-snug text-zinc-900 dark:text-zinc-100 sm:text-[13px]">
                                    {event.title}
                                  </p>
                                  <p className="mt-0.5 text-pretty text-[11px] leading-[1.45] text-zinc-500 dark:text-zinc-500 sm:text-[12px]">
                                    {event.description}
                                  </p>
                                  <div className="mt-1.5 overflow-hidden rounded-md border border-zinc-300/70 bg-zinc-100/90 dark:border-zinc-600/60 dark:bg-zinc-900/50">
                                    <Image
                                      src={event.image.src}
                                      alt={event.image.alt}
                                      width={720}
                                      height={960}
                                      className="mx-auto h-auto max-h-[128px] w-full object-contain object-top sm:max-h-[148px] lg:max-h-[156px]"
                                      sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex min-w-0 flex-col">
                            <p className="text-[13px] font-semibold leading-snug tracking-[-0.01em] text-zinc-900 dark:text-zinc-100">
                              {block.rightColumn.heading}
                            </p>
                            <p className="mt-1.5 text-pretty text-[13px] leading-[1.5] text-zinc-500 dark:text-zinc-500 sm:text-[14px]">
                              {block.rightColumn.description}
                            </p>
                            <ScreenshotFrame className="mt-2.5">
                              <Image
                                src={block.rightColumn.image.src}
                                alt={block.rightColumn.image.alt}
                                width={900}
                                height={1200}
                                className="mx-auto h-auto w-full max-h-[300px] object-contain object-top sm:max-h-[380px] lg:max-h-[430px] xl:max-h-[460px]"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                              />
                            </ScreenshotFrame>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={block.title}
                      className={`${CARD} flex flex-col p-5 sm:p-6`}
                    >
                      <ProofCaption title={block.title} body={block.body} />
                      <ScreenshotFrame className="mt-4 w-full shrink-0">
                        <Image
                          src={block.image.src}
                          alt={block.image.alt}
                          width={1400}
                          height={900}
                          className={`mx-auto h-auto w-full object-contain object-top ${block.shotMax}`}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </ScreenshotFrame>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* How we work */}
        <section
          className={`border-t border-zinc-200/80 bg-[#F5F4EF] py-16 sm:py-20 lg:py-[5.25rem] dark:border-white/[0.07] dark:bg-zinc-950`}
        >
          <div className={MAX + " " + PAD_X}>
            <h2 className="mx-auto max-w-3xl text-balance text-center text-[clamp(1.5rem,3vw,2.125rem)] font-semibold tracking-[-0.025em] text-zinc-950 dark:text-zinc-50">
              How we approach business systems
            </h2>
            <ol className="mx-auto mt-12 max-w-3xl space-y-0 divide-y divide-zinc-200/80 rounded-2xl border border-zinc-300/75 bg-[#FDFCF7] dark:divide-white/[0.08] dark:border-zinc-700/85 dark:bg-zinc-950/60">
              {PROCESS_STEPS.map((step, i) => (
                <li key={step.title} className="flex gap-5 p-6 sm:gap-6 sm:p-8">
                  <span
                    className="mono flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-300/90 bg-white text-[13px] font-bold text-zinc-900 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100"
                    style={{
                      borderColor: `color-mix(in oklab, ${ACCENT} 28%, rgb(212 212 216))`,
                    }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-[16px] font-semibold text-zinc-950 dark:text-zinc-50 sm:text-[17px]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Final CTA */}
        <section
          id="contact"
          className="relative scroll-mt-24 overflow-hidden border-t border-zinc-200/80 bg-[#F5F4EF] py-20 sm:py-24 lg:py-28 dark:border-white/10 dark:bg-zinc-950"
        >
          <div className={`relative ${MAX} ${PAD_X}`}>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em] text-zinc-950 dark:text-white">
                Show us how your business works today. We&apos;ll help map the system
                you need next.
              </h2>
              <p className="mt-6 text-pretty text-[17px] leading-[1.55] text-zinc-600 dark:text-zinc-400 sm:text-[18px]">
                Whether you need a customer portal, operational dashboard, workflow
                system, or internal tool, we can help design and build a practical
                system around your business.
              </p>
              <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center">
                <BookAuditScrollCta
                  conversion="v2"
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-lg px-8 text-[15px] font-semibold transition hover:opacity-95 sm:h-[3.25rem] sm:min-w-[240px]"
                  style={{
                    background: ACCENT,
                    color: ACCENT_INK,
                  }}
                >
                  Book a consultation
                </BookAuditScrollCta>
                <Link
                  href={MAIL_HELLO}
                  className="mono inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-zinc-300/90 bg-white px-6 text-[13.5px] font-medium text-zinc-900 transition hover:border-zinc-400 sm:h-[3.25rem] dark:border-white/18 dark:bg-transparent dark:text-zinc-100 dark:hover:border-white/28"
                >
                  hello@v1tov2.com
                </Link>
              </div>
            </div>
            <div className="mx-auto mt-12 max-w-xl sm:mt-14">
              <SiteContactStrip positioningLine="Custom business systems & operational tools · Hong Kong." />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
