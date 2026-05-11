import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteNavbar } from "@/components/shared/navbar";
import { BookAuditScrollCta } from "@/components/shared/book-audit-scroll-cta";
import {
  ACCENT,
  ACCENT_INK,
  MAIL_HELLO,
  MAIL_JEFFREY,
  PHONE_DISPLAY,
  SITE_MAX,
  SITE_PAD_X,
} from "@/components/shared/site-tokens";

const MAX = SITE_MAX;
const PAD_X = SITE_PAD_X;

const SOURCEXPRESS_URL = "https://sourcexpress.asia";

/** Final CTA — opens email with a clear subject for business-systems inquiries. */
const BUSINESS_SYSTEMS_CONSULTATION_MAILTO =
  "mailto:jeffrey@v1tov2.com?subject=" +
  encodeURIComponent("Business systems consultation");

const CARD =
  "rounded-xl border border-zinc-300/75 bg-[#FDFCF7] shadow-[0_1px_0_rgba(11,11,10,0.04)] dark:border-zinc-700/85 dark:bg-zinc-950/60 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]";

export const metadata: Metadata = {
  title:
    "Custom Business Systems, Workflow Automation & Internal Tools | Hong Kong SMEs | V1toV2",
  description:
    "Custom software development for Hong Kong SMEs: business systems, workflow automation, internal tools, customer portals, and admin dashboards shaped around how your team works.",
};

const WHAT_WE_BUILD: readonly {
  tag: string;
  title: string;
  body: string;
}[] = [
  {
    tag: "Operations control",
    title: "Admin dashboards",
    body: "Bring order management, payment tracking, requests, statuses, and internal handoffs into one internal tool—operators see the live picture from a single admin dashboard.",
  },
  {
    tag: "Customer visibility",
    title: "Customer portals",
    body: "Give customers stronger visibility: orders, requests, shipment progress, and service updates in one dependable portal.",
  },
  {
    tag: "Process tracking",
    title: "Workflow systems",
    body: "Turn approvals, sourcing requests, fulfillment stages, and handoffs into a clear operational workflow—instead of scattered chats and spreadsheets.",
  },
  {
    tag: "Business rules",
    title: "Business logic & automation",
    body: "Encode pricing rules, calculations, notifications, and integrations where they belong—practical business process logic your team can rely on.",
  },
];

const APPROACH_STEPS = [
  {
    title: "Understand the workflow",
    body: "We learn how your operations currently work across staff, customers, requests, and internal processes.",
    output: "Workflow map",
  },
  {
    title: "Identify what should be systemized",
    body: "Not every problem needs software. We focus on the workflows that create the most operational friction.",
    output: "System plan",
  },
  {
    title: "Build the system",
    body: "Dashboards, portals, websites, operational tools, workflow systems, or integrations tailored to your business.",
    output: "Working system",
  },
  {
    title: "Improve over time",
    body: "As operations evolve, systems should evolve too. We continue refining workflows as the business grows.",
    output: "Ongoing improvements",
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
    shotMax: "max-h-[228px] sm:max-h-[232px] lg:max-h-[248px]",
  },
  {
    kind: "single",
    title: "Shipment & Payment Summary",
    body: "Structured shipment details, pricing breakdowns, payment status, and operational data presented in one customer-facing view.",
    image: {
      src: "/images/business-systems/shipment-summary.png",
      alt: "Shipment and payment summary with pricing and status details",
    },
    shotMax: "max-h-[300px] sm:max-h-[360px] lg:max-h-[400px]",
  },
  {
    kind: "single",
    title: "Pricing & Operational Calculations",
    body: "Custom pricing logic, quote breakdowns, exchange-rate handling, and payment coordination built directly into operational workflows.",
    image: {
      src: "/images/business-systems/sourcing-pricing.png",
      alt: "Pricing and quote breakdown within operational workflow",
    },
    shotMax: "max-h-[300px] sm:max-h-[360px] lg:max-h-[400px]",
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
      <p className="mt-1.5 text-pretty text-[13px] leading-[1.52] text-zinc-500 dark:text-zinc-500 sm:mt-2 sm:text-[15px] sm:leading-[1.55]">
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

function HeroPreviewWindow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const shell =
    "rounded-[10px] border border-zinc-400/50 bg-white shadow-[0_8px_26px_-12px_rgba(11,11,10,0.18)] dark:border-zinc-500/45 dark:bg-zinc-900";
  return (
    <div className={className}>
      <div className={shell}>
        <div
          className="h-2 border-b border-zinc-300/80 bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-800/95"
          aria-hidden
        />
        <div className="flex justify-center bg-zinc-100/80 px-1 pt-1 pb-1.5 dark:bg-zinc-950/55">
          {children}
        </div>
      </div>
    </div>
  );
}

/** Operational workspace previews — primary system + supporting modules, fully legible. */
function HeroOperationalPreviews() {
  return (
    <div
      className="mx-auto w-full max-w-[540px] lg:mx-0 lg:max-w-[520px] lg:justify-self-end"
      aria-label="Operational systems: admin dashboard, proof management, and shipment summary"
    >
      <div className="flex flex-col gap-3 sm:gap-3.5">
        <HeroPreviewWindow className="w-full">
          <Image
            src="/images/business-systems/shipment-dashboard.png"
            alt="Operations dashboard preview"
            width={1200}
            height={750}
            className="h-[212px] w-full object-contain object-top sm:h-[228px] lg:h-[236px]"
            sizes="(max-width: 1024px) 92vw, 520px"
            priority
          />
        </HeroPreviewWindow>

        <div className="grid grid-cols-2 gap-3 sm:gap-3.5">
          <HeroPreviewWindow className="min-w-0">
            <Image
              src="/images/business-systems/sourcing-proof-uploads.png"
              alt="Proof and verification management preview"
              width={880}
              height={1100}
              className="h-[168px] w-full object-contain object-top sm:h-[178px] lg:h-[184px]"
              sizes="(max-width: 1024px) 46vw, 260px"
            />
          </HeroPreviewWindow>
          <HeroPreviewWindow className="min-w-0">
            <Image
              src="/images/business-systems/shipment-summary.png"
              alt="Shipment and payment summary preview"
              width={960}
              height={640}
              className="h-[168px] w-full object-contain object-top sm:h-[178px] lg:h-[184px]"
              sizes="(max-width: 1024px) 46vw, 260px"
            />
          </HeroPreviewWindow>
        </div>
      </div>
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
          <div
            className={`relative ${MAX} ${PAD_X} pb-14 pt-10 sm:pb-16 sm:pt-12 md:pb-20 md:pt-14 lg:grid lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] lg:items-center lg:gap-12 lg:pb-20 lg:pt-14 xl:gap-16 xl:pb-[5.5rem] xl:pt-[4.25rem]`}
          >
            <div className="max-w-xl text-left">
              <h1
                id="business-systems-hero-heading"
                className="text-pretty text-[clamp(1.75rem,4.2vw,3.2rem)] font-semibold leading-[1.1] tracking-[-0.036em] text-zinc-950 dark:text-zinc-50 lg:text-[clamp(2rem,3.6vw,3.35rem)] lg:leading-[1.08] lg:tracking-[-0.039em]"
              >
                Custom Business Systems & Workflow Automation for SMEs
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-[clamp(1.0625rem,2vw,1.3125rem)] font-medium leading-snug text-zinc-800 dark:text-zinc-200">
                We build custom software and internal tools around how your company
                actually operates.
              </p>
              <p className="mt-5 max-w-xl text-pretty text-[16px] leading-[1.62] text-zinc-600 dark:text-zinc-400 sm:text-[17px]">
                Customer portals, admin dashboards, and operational systems tailored to
                your team—practical builds that improve visibility and cut repetitive
                manual work.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:mt-10">
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
                  className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-zinc-300/90 bg-white px-8 text-[15px] font-medium text-zinc-900 shadow-[0_1px_2px_rgba(11,11,10,0.04)] transition hover:border-zinc-400 sm:min-h-[44px] dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-500"
                >
                  View example systems
                </a>
              </div>
              <div className="mt-8 border-t border-zinc-200/75 pt-6 dark:border-zinc-700/55">
                <p className="max-w-lg text-pretty text-[12.5px] leading-[1.55] tracking-[-0.01em] text-zinc-500 dark:text-zinc-500 sm:text-[13px]">
                  <span className="font-medium text-zinc-600 dark:text-zinc-400">
                    Examples include
                  </span>{" "}
                  customer portals, admin dashboards, sourcing workflows, shipment
                  tracking, and operational coordination.
                </p>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <HeroOperationalPreviews />
            </div>
          </div>
        </section>

        {/* What we build */}
        <section
          className={`border-t border-zinc-200/70 bg-[#F5F4EF] py-20 text-left sm:py-24 lg:py-28 dark:border-zinc-800 dark:bg-zinc-950`}
        >
          <div className={MAX + " " + PAD_X}>
            <div className="mx-auto max-w-6xl">
              <h2 className="text-balance text-[clamp(1.625rem,2.8vw,2.25rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-zinc-950 dark:text-zinc-50">
                What we build
              </h2>
              <p className="mt-3 max-w-none text-pretty text-[16px] leading-[1.55] text-zinc-600 dark:text-zinc-400 sm:text-[17px]">
                We build practical internal systems for Hong Kong SMEs — including
                customer portals, operational dashboards, workflow automation tools,
                and business process systems tailored to how teams actually work.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-9 sm:grid-cols-2 sm:gap-6">
                {WHAT_WE_BUILD.map((item) => (
                  <article
                    key={item.title}
                    className="flex flex-col gap-5 rounded-[12px] border border-zinc-300/70 bg-[#FDFCF7] p-6 transition-colors duration-200 sm:gap-5 sm:p-7 dark:border-zinc-700/75 dark:bg-zinc-950/45 dark:hover:border-zinc-600/90 hover:border-zinc-400/75"
                  >
                    <span className="mono inline-flex self-start rounded-full border border-zinc-300/70 bg-white/90 px-2.5 py-1 text-[11px] font-medium text-zinc-600 dark:border-zinc-600 dark:bg-zinc-900/70 dark:text-zinc-400">
                      {item.tag}
                    </span>
                    <div>
                      <h3 className="text-[20px] font-semibold leading-snug tracking-[-0.02em] text-zinc-950 dark:text-zinc-50 sm:text-[22px]">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-pretty text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {item.body}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Real systems */}
        <section
          id="real-systems"
          className="scroll-mt-24 border-t border-zinc-200/80 bg-[#FAFAF7] py-14 sm:py-20 lg:py-[5.25rem] dark:border-white/[0.07] dark:bg-zinc-950"
        >
          <div className={MAX + " " + PAD_X}>
            <div className="mx-auto max-w-3xl text-left sm:mx-auto sm:max-w-4xl sm:text-center">
              <h2 className="text-balance text-[clamp(1.5rem,3vw,2.125rem)] font-semibold tracking-[-0.025em] text-zinc-950 dark:text-zinc-50">
                Platforms built for real business operations.
              </h2>
              <p className="mt-3 text-pretty text-[15px] leading-snug text-zinc-600 dark:text-zinc-400 sm:mt-4 sm:text-[16px] sm:leading-relaxed md:text-[17px]">
                Examples from platforms and internal tools already used in day-to-day
                operations.
              </p>
            </div>

            <div className="mx-auto mt-7 max-w-[1200px] sm:mt-8">
              <div className="rounded-xl border border-zinc-300/75 bg-white/85 px-4 py-3.5 shadow-[0_1px_0_rgba(11,11,10,0.04)] dark:border-zinc-700/80 dark:bg-zinc-900/50 md:px-5 md:py-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-5">
                  {/* Mobile: horizontal mark — compact, no logo frame */}
                  <div className="md:hidden">
                    <Image
                      src="/images/business-systems/sourcexpress-logo.png"
                      alt="SourceXpress"
                      width={220}
                      height={64}
                      className="h-auto w-[124px] max-w-[130px] object-contain object-left opacity-95 dark:opacity-95"
                    />
                  </div>

                  {/* md+: square mark — dedicated panel, centered */}
                  <div className="hidden h-[96px] w-[96px] shrink-0 items-center justify-center rounded-lg border border-zinc-200/85 bg-white/95 dark:border-zinc-600/60 dark:bg-zinc-900/55 md:flex">
                    <Image
                      src="/images/business-systems/sourcexpress-square-logo.png"
                      alt="SourceXpress"
                      width={88}
                      height={88}
                      className="h-[72%] w-[72%] max-h-[70px] max-w-[70px] object-contain opacity-95 dark:opacity-95"
                    />
                  </div>

                  <div className="min-w-0 flex-1 md:pt-0.5">
                    <h3 className="text-[14px] font-semibold tracking-[-0.012em] text-zinc-950 dark:text-zinc-50 sm:text-[15px]">
                      Featured platform: SourceXpress
                    </h3>
                    <p className="mt-1.5 text-pretty text-[13px] leading-[1.5] text-zinc-600 dark:text-zinc-400 sm:mt-2 sm:text-[14px] sm:leading-[1.52]">
                      SourceXpress is a logistics and sourcing platform across Hong Kong
                      and the Philippines, with shipment tracking, sourcing workflows, a
                      customer portal, an admin dashboard, and operational coordination
                      across teams.
                    </p>
                    <a
                      href={SOURCEXPRESS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mono mt-2.5 inline-flex text-[12px] font-medium text-zinc-700 underline decoration-zinc-300/90 underline-offset-[3px] transition hover:text-zinc-900 hover:decoration-zinc-500 dark:text-zinc-400 dark:decoration-zinc-600 dark:hover:text-zinc-200 sm:mt-3"
                    >
                      View SourceXpress →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-10 max-w-[1200px] sm:mt-11 lg:mt-12">
              {/* Featured: admin dashboard — full proof card */}
              <div className="scroll-mt-20">
                <div className={`${CARD} flex flex-col p-5 sm:p-6 lg:p-7`}>
                  <ProofCaption
                    title={FEATURED_REAL_SYSTEM.title}
                    body={FEATURED_REAL_SYSTEM.body}
                  />
                  <ScreenshotFrame className="mt-4 w-full sm:mt-5">
                    <Image
                      src={FEATURED_REAL_SYSTEM.image.src}
                      alt={FEATURED_REAL_SYSTEM.image.alt}
                      width={1600}
                      height={1000}
                      className="mx-auto h-auto max-h-[300px] w-full object-contain object-top sm:max-h-[360px] lg:max-h-[450px]"
                      sizes="(max-width: 1024px) 100vw, 896px"
                      priority
                    />
                  </ScreenshotFrame>
                </div>
              </div>

              {/* Supporting proof grid */}
              <div className="mt-10 grid gap-6 sm:mt-11 sm:gap-6 lg:mt-12 lg:grid-cols-2 lg:gap-6">
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
                              <p className="mono text-[10px] font-medium tracking-[0.04em] text-zinc-500 dark:text-zinc-500 sm:text-[11px]">
                                {pane.label}
                              </p>
                              <p className="mt-1 max-w-xl text-pretty text-[13px] leading-[1.5] text-zinc-600 dark:text-zinc-400 sm:mt-1.5 sm:text-[14px]">
                                {pane.description}
                              </p>
                              <ScreenshotFrame className="mt-3 sm:mt-2.5">
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
                            <div className="mt-2.5 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2 lg:items-start lg:gap-8">
                          {/* Operational proof events → upload/management story */}
                          <div className="min-w-0">
                            <p className="mono text-[10px] font-medium tracking-[0.04em] text-zinc-500 dark:text-zinc-500 sm:text-[11px]">
                              {block.leftColumnHeading}
                            </p>
                            <div className="mt-2 flex flex-col gap-2.5 sm:gap-2">
                              {block.events.map((event) => (
                                <div
                                  key={event.title}
                                  className="rounded-lg border border-zinc-200/85 bg-[#FDFCF7] p-2 sm:p-2.5 shadow-[0_1px_0_rgba(11,11,10,0.03)] dark:border-zinc-600/70 dark:bg-zinc-900/35"
                                >
                                  <p className="text-[11px] font-medium leading-snug text-zinc-800 dark:text-zinc-200 sm:text-[12px]">
                                    {event.title}
                                  </p>
                                  <p className="mt-0.5 text-pretty text-[11px] leading-[1.45] text-zinc-500 dark:text-zinc-500 sm:text-[12px]">
                                    {event.description}
                                  </p>
                                  <div className="mt-2 overflow-hidden rounded-md border border-zinc-300/70 bg-zinc-100/90 dark:border-zinc-600/60 dark:bg-zinc-900/50">
                                    <Image
                                      src={event.image.src}
                                      alt={event.image.alt}
                                      width={720}
                                      height={960}
                                      className="mx-auto h-auto max-h-[152px] w-full object-contain object-top sm:max-h-[158px] lg:max-h-[168px]"
                                      sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex min-w-0 flex-col">
                            <p className="mono text-[10px] font-medium tracking-[0.04em] text-zinc-500 dark:text-zinc-500 sm:text-[11px]">
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
                                className="mx-auto h-auto w-full max-h-[360px] object-contain object-top sm:max-h-[400px] lg:max-h-[430px] xl:max-h-[460px]"
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
                      className={`${CARD} flex flex-col p-4 sm:p-6`}
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
          className={`border-t border-zinc-200/80 bg-[#F5F4EF] py-14 sm:py-16 lg:py-20 dark:border-white/[0.07] dark:bg-zinc-950`}
        >
          <div className={MAX + " " + PAD_X}>
            <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
              <h2 className="text-balance text-[clamp(1.5rem,3vw,2.125rem)] font-semibold tracking-[-0.025em] text-zinc-950 dark:text-zinc-50">
                How we approach business systems
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-pretty text-[15px] leading-snug text-zinc-600 dark:text-zinc-400 sm:mt-4 sm:text-[16px] sm:leading-relaxed">
                We start with how your team already works, then decide what should become a
                system.
              </p>
            </div>

            <ol className="mx-auto mt-8 grid max-w-6xl list-none grid-cols-1 gap-4 md:mt-9 md:grid-cols-2 md:gap-5">
              {APPROACH_STEPS.map((step, i) => (
                <li key={step.title}>
                  <article
                    className={`${CARD} flex h-full flex-col p-4 sm:p-5`}
                  >
                    <div className="flex items-start gap-3.5 sm:gap-4">
                      <span
                        className="mono flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-white text-[13px] font-bold text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100"
                        style={{
                          borderColor: `color-mix(in oklab, ${ACCENT} 38%, rgb(212 212 216))`,
                        }}
                      >
                        {i + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-[16px] font-semibold tracking-[-0.015em] text-zinc-950 dark:text-zinc-50 sm:text-[17px]">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-pretty text-[14px] leading-[1.52] text-zinc-600 dark:text-zinc-400 sm:text-[15px] sm:leading-[1.52]">
                          {step.body}
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5 border-t border-zinc-200/80 pt-2.5 dark:border-zinc-700/70">
                      <span
                        className="mono text-[10px] font-medium uppercase tracking-[0.035em]"
                        style={{
                          color: `color-mix(in oklab, ${ACCENT_INK} 42%, rgb(113 113 122))`,
                        }}
                      >
                        Output:
                      </span>
                      <span className="text-[15px] font-semibold tracking-[-0.012em] text-zinc-950 dark:text-zinc-50">
                        {step.output}
                      </span>
                    </p>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Final CTA */}
        <section
          id="contact"
          className="relative scroll-mt-24 overflow-hidden border-t border-zinc-300/45 bg-[#F1EEE6] py-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:py-16 lg:py-[4.25rem] dark:border-zinc-700/55 dark:bg-zinc-900 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
        >
          <div className={`relative ${MAX} ${PAD_X}`}>
            <div className="mx-auto max-w-[42rem] text-center">
              <h2 className="text-balance text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em] text-zinc-950 dark:text-zinc-50">
                Show us how your business works today. We&apos;ll help map the system
                you need next.
              </h2>
              <p className="mt-4 text-pretty text-[17px] leading-[1.52] text-zinc-600 dark:text-zinc-400 sm:mt-5 sm:text-[18px] sm:leading-[1.55]">
                Whether you need a customer portal, operational dashboard, workflow
                system, or internal tool, we can help design and build a practical
                system around your business.
              </p>
            </div>

            <div className="mx-auto mt-7 max-w-[min(100%,42rem)] md:mt-8 lg:mt-9 lg:max-w-[46.5rem]">
              <div className="grid grid-cols-1 gap-8 border-t border-zinc-300/40 pt-8 dark:border-zinc-600/45 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-start lg:gap-10 lg:gap-12 lg:pt-7 xl:gap-14">
                <div className="text-left lg:pt-0.5">
                  <p className="text-[22px] font-semibold tracking-[-0.025em] text-zinc-950 dark:text-zinc-50 sm:text-[24px]">
                    Jeffrey Choi
                  </p>
                  <p className="mt-1.5 text-[13px] font-medium text-zinc-500 dark:text-zinc-400 sm:text-[13.5px]">
                    Founder, V1toV2
                  </p>
                  <p className="mt-2 max-w-md text-pretty text-[12.5px] font-medium leading-snug text-zinc-700 dark:text-zinc-300 sm:text-[13px]">
                    Founder-led systems partner based in Hong Kong.
                  </p>
                  <p className="mt-3 max-w-md text-pretty text-[13px] leading-[1.52] text-zinc-600 dark:text-zinc-400 sm:text-[14px] sm:leading-[1.5]">
                    Built operational systems for logistics, sourcing, customer
                    workflows, and cross-border operations between Hong Kong and the
                    Philippines.
                  </p>
                </div>

                <div className="text-left">
                  <div className="rounded-xl border border-zinc-300/65 bg-[#FAF8F2] px-4 py-4 shadow-[0_1px_0_rgba(11,11,10,0.035)] ring-1 ring-zinc-200/35 dark:border-zinc-600/65 dark:bg-zinc-800/35 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] dark:ring-white/[0.05] sm:px-5 sm:py-5">
                    <p className="mono text-[11px] font-semibold uppercase tracking-[0.05em] text-zinc-600 dark:text-zinc-400">
                      Reach Jeffrey directly
                    </p>
                    <a
                      href="tel:+85292253889"
                      className="mono mt-3 block min-h-[44px] py-1 text-[16px] font-semibold text-zinc-950 no-underline underline-offset-[3px] transition hover:underline hover:decoration-zinc-400 dark:text-zinc-50 dark:hover:decoration-zinc-500 sm:min-h-0 sm:text-[17px]"
                    >
                      {PHONE_DISPLAY}
                    </a>
                    <a
                      href={MAIL_JEFFREY}
                      className="mono mt-1 block min-h-[44px] break-words py-1 text-[16px] font-semibold text-zinc-950 underline decoration-zinc-300/85 underline-offset-[3px] transition hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400 sm:min-h-0"
                    >
                      jeffrey@v1tov2.com
                    </a>
                    <div className="mt-5">
                      <a
                        href={BUSINESS_SYSTEMS_CONSULTATION_MAILTO}
                        className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg px-6 text-[15px] font-semibold transition hover:opacity-95 active:opacity-90"
                        style={{
                          background: ACCENT,
                          color: ACCENT_INK,
                        }}
                      >
                        Book a consultation
                      </a>
                    </div>
                    <p className="mt-4 border-t border-zinc-300/35 pt-3 text-[10.5px] leading-snug text-zinc-400 dark:border-zinc-600/40 dark:text-zinc-500">
                      <span className="text-zinc-400 dark:text-zinc-500">
                        General inbox:{" "}
                      </span>
                      <Link
                        href={MAIL_HELLO}
                        className="mono text-zinc-400 underline decoration-zinc-300/55 underline-offset-2 transition hover:text-zinc-600 hover:decoration-zinc-400 dark:text-zinc-500 dark:decoration-zinc-600/70 dark:hover:text-zinc-300"
                      >
                        hello@v1tov2.com
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mono mx-auto mt-7 max-w-[46.5rem] text-[12px] text-zinc-500 dark:text-zinc-500 lg:mt-6">
              <Link
                href="/"
                className="text-zinc-600 underline-offset-2 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
              >
                ← Back to V1toV2 home
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
