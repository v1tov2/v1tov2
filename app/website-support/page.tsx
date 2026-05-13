import type { Metadata } from "next";
import Image from "next/image";
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

const MAX = SITE_MAX;
const PAD_X = SITE_PAD_X;

const CARD =
  "rounded-xl border border-zinc-300/75 bg-[#FDFCF7] shadow-[0_1px_0_rgba(11,11,10,0.04)] dark:border-zinc-700/85 dark:bg-zinc-950/60 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]";

export const metadata: Metadata = {
  title:
    "Website Design, Development & Maintenance Hong Kong | SMEs | V1toV2",
  description:
    "Practical website design and website development in Hong Kong for SMEs: ongoing website maintenance, website revamps, WordPress support, Shopify support, and ecommerce website support for real business needs.",
};

const SERVICE_CARDS = [
  {
    label: "Build",
    title: "Website Design & Development",
    body: "Corporate websites, landing pages, ecommerce websites, and service-focused business websites built for SMEs.",
  },
  {
    label: "Maintain",
    title: "Website Maintenance & Support",
    body: "Content updates, backups, plugin updates, fixes, monitoring, security, and ongoing website support.",
  },
  {
    label: "Revamp",
    title: "Website Revamp",
    body: "Improve outdated layouts, modernize branding, optimize mobile responsiveness, and restructure pages for clearer customer journeys.",
  },
] as const;

const WEBSITE_PROJECTS = [
  {
    name: "Alaya Consulting",
    href: "https://alayaconsulting.com.hk/",
    screenshot: "/images/website-support/alaya-home.png",
    logo: "/images/website-support/alaya-logo.png",
    screenshotAlt: "Alaya Consulting website homepage",
    tags: ["Website Build", "Maintenance"] as const,
    description:
      "Built a professional consulting website focused on service clarity, trust, and easier navigation for business visitors.",
  },
  {
    name: "Melani di moda",
    href: "https://melanidimoda.co/",
    screenshot: "/images/website-support/melani-home.png",
    logo: "/images/website-support/melani-logo.png",
    screenshotAlt: "Melani di moda ecommerce website",
    tags: ["Ecommerce Support", "Maintenance"] as const,
    description:
      "Supported an ecommerce fashion website with ongoing updates, storefront maintenance, and product presentation improvements.",
  },
  {
    name: "Euro Home Direct",
    href: "https://eurohomedirect.com/",
    screenshot: "/images/website-support/ehd-home.png",
    logo: "/images/website-support/ehd-logo.png",
    screenshotAlt: "Euro Home Direct business website",
    tags: ["Website Revamp", "Product Presentation"] as const,
    description:
      "Improved and maintained a business website designed to showcase products, company information, and customer-facing content more clearly.",
  },
  {
    name: "Dawn Atelier Academy",
    href: "https://dawnaa.com/",
    screenshot: "/images/website-support/dawn-atelier-home.png",
    logo: "/images/website-support/dawn-atelier-logo.png",
    screenshotAlt: "Dawn Atelier Academy website",
    tags: ["Website Build", "Website Support"] as const,
    description:
      "Built a modern website experience for an academy and training business with clearer program presentation and mobile-friendly layouts.",
  },
  {
    name: "Walk Hong Kong",
    href: "https://www.walkhongkong.com/",
    screenshot: "/images/website-support/walk-hong-kong-home.png",
    logo: "/images/website-support/walk-hong-kong-logo.png",
    screenshotAlt: "Walk Hong Kong website homepage",
    tags: ["Tour Booking", "Website Support"] as const,
    description:
      "Supported a walking-tour website with clearer routes, guide information, and enquiry paths for visitors booking private walks.",
  },
  {
    name: "Sunsmith",
    href: "https://sunsmith.hk/",
    screenshot: "/images/website-support/sunsmith-home.png",
    logo: "/images/website-support/sunsmith-logo.png",
    screenshotAlt: "Sunsmith jewelry website",
    tags: ["Ecommerce Support", "Product Presentation"] as const,
    description:
      "Supported a jewelry ecommerce site with storefront updates, product presentation, and ongoing maintenance for collections and purchases.",
  },
] as const;

const PROJECT_CARD_HOVER =
  "transition-[border-color,box-shadow] duration-200 hover:border-zinc-400/85 hover:shadow-[0_8px_30px_-26px_rgba(11,11,10,0.1),0_0_0_1px_color-mix(in_oklab,oklch(0.86_0.22_142)_0.08,transparent)] dark:hover:border-zinc-600/85";

/** Two short service labels per project; single-row UI in cards */
const PROJECT_PILL_ROW =
  "flex min-h-[1.125rem] flex-nowrap items-center gap-1.5";
const PROJECT_PILL =
  "mono inline-flex shrink-0 items-center whitespace-nowrap rounded-full border border-zinc-200/65 bg-zinc-50/90 px-1.5 py-0.5 text-[9px] font-medium leading-none text-zinc-500 dark:border-zinc-700/45 dark:bg-zinc-900/32 dark:text-zinc-500 sm:text-[9.5px]";

const projectLinkClass =
  "mono inline-flex w-fit text-[12px] font-medium text-zinc-700 underline decoration-zinc-300/90 underline-offset-[3px] transition hover:text-zinc-900 hover:decoration-[color-mix(in_oklab,oklch(0.86_0.22_142)_50%,rgb(212_212_216))] dark:text-zinc-400 dark:decoration-zinc-600 dark:hover:text-zinc-200 dark:hover:decoration-[color-mix(in_oklab,oklch(0.86_0.22_142)_45%,rgb(82_82_91))]";

/** Grouped operational review panels — asymmetrical layout in page */
const WEBSITE_ISSUE_PANELS = [
  {
    heading: "Design & Experience",
    items: [
      {
        title: "Outdated website design",
        impact:
          "Older layouts can reduce trust and make the business feel less established online.",
      },
      {
        title: "Poor mobile responsiveness",
        impact:
          "Customers leave before finding key information when pages feel awkward on phones.",
      },
      {
        title: "Website doesn't reflect the business properly",
        impact:
          "Prospects misunderstand what you offer, who you serve, or how to take the next step.",
      },
      {
        title: "Inconsistent branding and messaging",
        impact:
          "Pages, visuals, and messaging feel disconnected, making the business appear less cohesive online.",
      },
    ],
  },
  {
    heading: "Website Operations",
    items: [
      {
        title: "Difficult content updates",
        impact:
          "Simple edits require technical help or workarounds, so updates to offers and messaging ship late.",
      },
      {
        title: "Hard-to-manage website structure",
        impact:
          "Teams lose track of where content belongs, and important pages stay wrong or duplicated.",
      },
    ],
  },
  {
    heading: "Performance & Maintenance",
    items: [
      {
        title: "Slow or broken pages",
        impact:
          "Trust drops quickly when pages feel unreliable, errors appear, or checkout and forms fail.",
      },
      {
        title: "No ongoing maintenance support",
        impact:
          "Without a steady owner, risk and drift add up until something breaks at the worst moment.",
      },
    ],
  },
] as const;

const ISSUE_PANEL_SHELL =
  "relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-300/72 bg-[#FBFAF6] shadow-[0_1px_0_rgba(11,11,10,0.035)] dark:border-zinc-700/78 dark:bg-zinc-950/45 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]";

const WEBSITE_APPROACH_STEPS = [
  {
    title: "Review the current website",
    body: "We look at structure, content, performance, and how the site lines up with how you sell and support customers today.",
    output: "Current-state review",
  },
  {
    title: "Identify what should improve",
    body: "You get a clear list of priorities—design, speed, mobile, CMS friction, or ecommerce operations—before work starts.",
    output: "Improvement plan",
  },
  {
    title: "Design / build / restructure",
    body: "We implement changes in a practical sequence: design updates, rebuilds, content moves, or platform fixes as needed.",
    output: "Updated site",
  },
  {
    title: "Maintain and improve over time",
    body: "After launch, we stay available for website maintenance, security and plugin care, content help, and measured follow-up work.",
    output: "Ongoing support",
  },
] as const;

/** Logos for “Websites built & maintained” trust panel */
const HERO_TRUST_LOGOS = [
  {
    src: "/images/website-support/mimx-logo.png",
    alt: "MIMX",
  },
  {
    src: "/images/website-support/esg-newswire-logo.png",
    alt: "ESG Newswire",
  },
  {
    src: "/images/website-support/kjc-esports-logo.png",
    alt: "KJC Esports",
  },
  {
    src: "/images/website-support/wooaw-logo.png",
    alt: "Wooaw",
  },
  {
    src: "/images/website-support/gospace-logo.png",
    alt: "Gospace",
  },
  {
    src: "/images/website-support/tern-logo.png",
    alt: "Tern",
  },
  {
    src: "/images/website-support/holga-logo.png",
    alt: "Holga",
  },
  {
    src: "/images/website-support/lets-go-green-logo.png",
    alt: "Let's Go Green",
  },
] as const;

function IssueReviewPanel({
  panel,
}: {
  panel: (typeof WEBSITE_ISSUE_PANELS)[number];
}) {
  const { heading, items } = panel;
  return (
    <article className={ISSUE_PANEL_SHELL}>
      <div
        aria-hidden
        className="h-[2px] w-full shrink-0 opacity-90"
        style={{
          background: `linear-gradient(90deg, color-mix(in oklab, ${ACCENT} 12%, transparent) 0%, color-mix(in oklab, ${ACCENT} 38%, transparent) 45%, color-mix(in oklab, ${ACCENT} 12%, transparent) 100%)`,
        }}
      />
      <header className="border-b border-zinc-200/80 px-5 py-3.5 sm:px-6 sm:py-4 dark:border-zinc-700/65">
        <h3 className="mono text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-600 dark:text-zinc-400">
          {heading}
        </h3>
      </header>
      <ul className="flex flex-1 flex-col divide-y divide-zinc-200/80 dark:divide-zinc-700/60">
        {items.map((row) => (
          <li key={row.title} className="px-5 py-3.5 sm:px-6 sm:py-4">
            <h4 className="text-[15px] font-semibold leading-snug tracking-[-0.012em] text-zinc-950 dark:text-zinc-50 sm:text-[16px]">
              {row.title}
            </h4>
            <p className="mt-1.5 text-pretty text-[14px] leading-[1.52] text-zinc-600 dark:text-zinc-400 sm:mt-2 sm:text-[15px] sm:leading-[1.53]">
              {row.impact}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}

/** Three previews — hidden below `md`; layered from `lg` up */
function HeroWebsiteCollage() {
  const frame =
    "overflow-hidden rounded-xl border border-zinc-200/95 bg-white shadow-[0_16px_48px_-26px_rgba(11,11,10,0.2)] ring-1 ring-zinc-900/[0.05] dark:border-zinc-600/55 dark:bg-zinc-900 dark:shadow-[0_24px_56px_-30px_rgba(0,0,0,0.48)] dark:ring-white/[0.06]";
  return (
    <div
      className="mx-auto flex w-full max-w-[520px] flex-col gap-3.5 sm:gap-4 lg:relative lg:mx-0 lg:block lg:max-w-[540px] lg:min-h-[340px]"
      aria-label="Website previews: Alaya Consulting, Dawn Atelier Academy, Euro Home Direct"
    >
      {/* Primary — Alaya */}
      <div className={`${frame} relative w-full lg:absolute lg:right-0 lg:top-0 lg:z-[1] lg:w-[78%]`}>
        <Image
          src="/images/website-support/alaya-home.png"
          alt="Alaya Consulting website preview"
          width={1280}
          height={720}
          className="h-[152px] w-full object-cover object-top sm:h-[168px] lg:h-[188px] lg:max-h-none xl:h-[198px]"
          sizes="(max-width: 1024px) 100vw, 400px"
          priority
        />
      </div>
      {/* Secondary — Dawn Atelier */}
      <div
        className={`${frame} relative w-full sm:max-w-[90%] lg:absolute lg:bottom-[10%] lg:left-0 lg:z-[2] lg:w-[52%] lg:max-w-none`}
      >
        <Image
          src="/images/website-support/dawn-atelier-home.png"
          alt="Dawn Atelier Academy website preview"
          width={960}
          height={720}
          className="h-[136px] w-full object-cover object-top sm:h-[148px] lg:h-[138px] xl:h-[146px]"
          sizes="(max-width: 1024px) 90vw, 280px"
        />
      </div>
      {/* Tertiary — Euro Home Direct */}
      <div
        className={`${frame} relative ml-auto w-full max-w-[92%] sm:max-w-[88%] lg:absolute lg:bottom-0 lg:right-[4%] lg:z-[3] lg:ml-0 lg:w-[44%] lg:max-w-none`}
      >
        <Image
          src="/images/website-support/ehd-home.png"
          alt="Euro Home Direct website preview"
          width={960}
          height={640}
          className="h-[128px] w-full object-cover object-top sm:h-[136px] lg:h-[128px] xl:h-[136px]"
          sizes="(max-width: 1024px) 88vw, 240px"
        />
      </div>
    </div>
  );
}

export default function WebsiteSupportPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <SiteNavbar />

      <main>
        {/* Hero */}
        <section
          className="relative border-b border-zinc-200/90 bg-[#FAFAF7] dark:border-zinc-800 dark:bg-zinc-950"
          aria-labelledby="website-support-hero-heading"
        >
          <div
            className={`relative ${MAX} ${PAD_X} pb-10 pt-10 sm:pb-14 sm:pt-12 md:pb-16 md:pt-14 lg:pb-16 lg:pt-14 xl:pb-[4.5rem] xl:pt-[4.25rem]`}
          >
            <div className="lg:grid lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] lg:items-center lg:gap-12 xl:gap-16">
            <div className="max-w-xl text-left">
              <h1
                id="website-support-hero-heading"
                className="text-pretty text-[clamp(1.65rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.036em] text-zinc-950 dark:text-zinc-50 lg:text-[clamp(1.85rem,3.5vw,3.15rem)] lg:leading-[1.08]"
              >
                Website Design, Development & Maintenance for Hong Kong SMEs
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-[clamp(1.0625rem,2vw,1.3125rem)] font-medium leading-snug text-zinc-800 dark:text-zinc-200">
                We help businesses build and maintain professional websites — from
                company websites and service pages to WordPress support, Shopify
                maintenance, and website revamps.
              </p>
              <p className="mt-5 max-w-xl text-pretty text-[16px] leading-[1.62] text-zinc-600 dark:text-zinc-400 sm:text-[17px]">
                Whether you need a new website, updates to an existing site, or
                ongoing maintenance support, we build practical websites designed
                around real business needs.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center lg:mt-10">
                <BookAuditScrollCta
                  conversion="website"
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
                  href="#projects"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-zinc-300/90 bg-white px-8 text-[15px] font-medium text-zinc-900 shadow-[0_1px_2px_rgba(11,11,10,0.04)] transition hover:border-zinc-400 sm:min-h-[44px] dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-500"
                >
                  View previous work
                </a>
              </div>
            </div>

            <div className="hidden w-full overflow-x-clip md:mt-10 md:block lg:mt-0">
              <HeroWebsiteCollage />
            </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="scroll-mt-24 border-t border-zinc-200/75 bg-[#EDEBE3] py-14 text-left sm:py-20 lg:py-24 dark:border-zinc-800 dark:bg-zinc-950"
        >
          <div className={MAX + " " + PAD_X}>
            <div className="mx-auto max-w-6xl">
              <h2 className="text-balance text-[clamp(1.625rem,2.8vw,2.25rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-zinc-950 dark:text-zinc-50">
                What we help with
              </h2>
              <p className="mt-3 max-w-4xl text-pretty text-[16px] leading-[1.55] text-zinc-600 dark:text-zinc-400 sm:mt-3.5 sm:text-[17px]">
                We support businesses across website design, maintenance, revamps,
                and long-term operational website support.
              </p>

              <div className="relative mt-6 rounded-2xl border border-zinc-300/60 bg-[#F7F5EE]/95 p-5 shadow-[0_1px_0_rgba(11,11,10,0.04),0_18px_48px_-36px_rgba(11,11,10,0.12)] sm:mt-7 sm:p-7 dark:border-zinc-700/65 dark:bg-zinc-900/35 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-5 top-0 h-[2px] rounded-full sm:inset-x-7"
                  style={{
                    background: `linear-gradient(90deg, color-mix(in oklab, ${ACCENT} 55%, rgb(212 212 216)) 0%, color-mix(in oklab, ${ACCENT} 18%, rgb(228 228 231)) 42%, transparent 100%)`,
                  }}
                />

                <div className="relative mt-5 flex flex-col gap-10 sm:mt-6 lg:mt-7 lg:grid lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.9fr)] lg:items-center lg:gap-9 xl:gap-11">
                  <div className="flex min-w-0 flex-col gap-5 lg:max-w-none">
                    {SERVICE_CARDS.map((item) => (
                      <article
                        key={item.title}
                        className="group relative overflow-hidden rounded-xl border border-zinc-300/72 bg-[#FDFCF7] py-5 pl-5 pr-5 shadow-[0_1px_0_rgba(11,11,10,0.045)] transition-[border-color,box-shadow] duration-200 hover:border-zinc-400/80 hover:shadow-[0_8px_32px_-28px_rgba(11,11,10,0.12)] dark:border-zinc-700/72 dark:bg-zinc-950/55 dark:hover:border-zinc-600/85 sm:pl-6 sm:pr-6"
                        style={{
                          borderLeftWidth: 3,
                          borderLeftColor: `color-mix(in oklab, ${ACCENT} 48%, rgb(200 200 208))`,
                        }}
                      >
                        <span className="mono text-[10px] font-medium uppercase tracking-[0.09em] text-zinc-500 dark:text-zinc-500">
                          {item.label}
                        </span>
                        <h3 className="mt-1.5 text-[18px] font-semibold leading-snug tracking-[-0.02em] text-zinc-950 group-hover:text-zinc-900 dark:text-zinc-50 dark:group-hover:text-zinc-50 sm:text-[20px]">
                          {item.title}
                        </h3>
                        <p className="mt-2.5 text-pretty text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                          {item.body}
                        </p>
                      </article>
                    ))}
                  </div>

                  <aside
                    className="relative flex min-w-0 flex-col overflow-hidden rounded-xl border border-zinc-300/65 bg-[#FAF7EF] p-5 shadow-[0_1px_0_rgba(11,11,10,0.05)] ring-1 ring-zinc-200/45 dark:border-zinc-700/60 dark:bg-zinc-950/50 dark:ring-white/[0.05] sm:p-6"
                    aria-labelledby="website-support-trust-heading"
                  >
                    <h3
                      id="website-support-trust-heading"
                      className="relative text-[17px] font-semibold tracking-[-0.02em] text-zinc-950 dark:text-zinc-50 sm:text-[18px]"
                    >
                      Websites built &amp; maintained
                    </h3>
                    <p className="relative mt-2.5 max-w-none text-pretty text-[13px] leading-[1.52] text-zinc-600 dark:text-zinc-400 sm:mt-3 sm:text-[14px] sm:leading-[1.53]">
                      A selection of businesses and organizations we&apos;ve supported
                      across website design, revamps, maintenance, and ecommerce
                      updates.
                    </p>
                    <div className="relative mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-3.5">
                      {HERO_TRUST_LOGOS.map((mark) => (
                        <div
                          key={mark.src}
                          className="flex min-h-[4.75rem] items-center justify-center rounded-lg border border-zinc-700/22 bg-gradient-to-b from-zinc-800/90 to-zinc-900/95 px-2 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] transition-[border-color,background-color] duration-200 hover:border-zinc-500/35 hover:from-zinc-800 hover:to-zinc-900 dark:border-zinc-600/35 dark:from-zinc-900 dark:to-zinc-950 sm:min-h-[5.25rem] sm:px-2.5 sm:py-3.5 dark:hover:border-zinc-500/45"
                        >
                          <Image
                            src={mark.src}
                            alt={mark.alt}
                            width={200}
                            height={72}
                            className="max-h-10 w-auto max-w-[94%] object-contain brightness-110 sm:max-h-11 sm:max-w-[96%]"
                          />
                        </div>
                      ))}
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected projects */}
        <section
          id="projects"
          className="scroll-mt-24 border-t border-zinc-200/80 bg-[#FAFAF7] py-14 sm:py-20 lg:py-[5.25rem] dark:border-white/[0.07] dark:bg-zinc-950"
        >
          <div className={MAX + " " + PAD_X}>
            <div className="mx-auto max-w-6xl">
              <header className="max-w-3xl">
                <h2 className="text-balance text-[clamp(1.5rem,3vw,2.125rem)] font-semibold tracking-[-0.025em] text-zinc-950 dark:text-zinc-50">
                  We build websites around real operations
                </h2>
                <p className="mt-3 text-pretty text-[15px] leading-snug text-zinc-600 dark:text-zinc-400 sm:mt-3.5 sm:text-[16px] sm:leading-relaxed">
                  From ecommerce storefronts to business websites, maintenance,
                  and long-term operational support.
                </p>
              </header>

              <div className="mt-10 grid grid-cols-1 items-stretch gap-6 sm:mt-11 sm:grid-cols-2 lg:gap-7">
                {WEBSITE_PROJECTS.map((project) => (
                  <article
                    key={project.name}
                    className={`${CARD} ${PROJECT_CARD_HOVER} flex h-full flex-col overflow-hidden`}
                  >
                    <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden border-b border-zinc-200/80 bg-zinc-100/70 dark:border-zinc-700/70 dark:bg-zinc-900/40">
                      <Image
                        src={project.screenshot}
                        alt={project.screenshotAlt}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                    <div className="flex min-h-0 flex-1 flex-col gap-4 p-5 sm:p-6">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <Image
                          src={project.logo}
                          alt={`${project.name} logo`}
                          width={160}
                          height={48}
                          className="h-8 w-auto max-w-[140px] object-contain object-left opacity-95 dark:opacity-95"
                        />
                        <div className="flex min-w-0 items-center gap-2">
                          <span
                            className="size-1 shrink-0 rounded-full"
                            style={{
                              background: ACCENT,
                              boxShadow: `0 0 0 2px color-mix(in oklab, ${ACCENT} 20%, transparent)`,
                            }}
                            aria-hidden
                          />
                          <h3 className="min-w-0 text-[17px] font-semibold tracking-[-0.015em] text-zinc-950 dark:text-zinc-50 sm:text-[18px]">
                            {project.name}
                          </h3>
                        </div>
                      </div>
                      <div className={PROJECT_PILL_ROW}>
                        {project.tags.map((tag) => (
                          <span key={tag} className={PROJECT_PILL}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-pretty text-[14px] leading-[1.52] text-zinc-600 dark:text-zinc-400 sm:text-[15px]">
                        {project.description}
                      </p>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${projectLinkClass} mt-auto pt-0.5`}
                      >
                        View live site →
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Common problems — operational review panels */}
        <section
          className={`border-t border-zinc-200/80 bg-[#F5F4EF] py-14 sm:py-16 lg:py-20 dark:border-white/[0.07] dark:bg-zinc-950`}
          aria-labelledby="website-issues-heading"
        >
          <div className={MAX + " " + PAD_X}>
            <div className="mx-auto max-w-5xl">
              <header className="mx-auto max-w-xl text-center lg:max-w-2xl">
                <h2
                  id="website-issues-heading"
                  className="text-balance text-[clamp(1.5rem,3vw,2.125rem)] font-semibold tracking-[-0.025em] text-zinc-950 dark:text-zinc-50"
                >
                  Common website issues we help fix
                </h2>
                <p className="mt-3 text-pretty text-[15px] leading-[1.55] text-zinc-600 dark:text-zinc-400 sm:mt-4 sm:text-[16px] sm:leading-[1.58]">
                  Common signs a business website is becoming harder to maintain,
                  slower to update, or disconnected from day-to-day operations.
                </p>
              </header>

              <div className="mt-10 flex flex-col gap-6 lg:mt-12 lg:grid lg:grid-cols-[minmax(0,1.22fr)_minmax(0,1fr)] lg:items-stretch lg:gap-7">
                <IssueReviewPanel panel={WEBSITE_ISSUE_PANELS[0]} />
                <div className="flex flex-col gap-6 lg:gap-7">
                  <IssueReviewPanel panel={WEBSITE_ISSUE_PANELS[1]} />
                  <IssueReviewPanel panel={WEBSITE_ISSUE_PANELS[2]} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How we work */}
        <section
          className={`border-t border-zinc-200/80 bg-[#FAFAF7] py-14 sm:py-16 lg:py-20 dark:border-white/[0.07] dark:bg-zinc-950`}
        >
          <div className={MAX + " " + PAD_X}>
            <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
              <h2 className="text-balance text-[clamp(1.5rem,3vw,2.125rem)] font-semibold tracking-[-0.025em] text-zinc-950 dark:text-zinc-50">
                How we approach website projects
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-pretty text-[15px] leading-snug text-zinc-600 dark:text-zinc-400 sm:mt-4 sm:text-[16px] sm:leading-relaxed">
                Straightforward steps—review, plan, build, then keep the site
                dependable as your business changes.
              </p>
            </div>

            <ol className="mx-auto mt-8 grid max-w-6xl list-none grid-cols-1 gap-4 md:mt-9 md:grid-cols-2 md:gap-5">
              {WEBSITE_APPROACH_STEPS.map((step, i) => (
                <li key={step.title}>
                  <article className={`${CARD} flex h-full flex-col p-4 sm:p-5`}>
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

        {/* Final CTA — aligns with /business-systems */}
        <section
          id="contact"
          className="relative scroll-mt-24 overflow-hidden border-t border-zinc-300/45 bg-[#F1EEE6] pt-12 pb-14 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:pt-16 sm:pb-[4.75rem] lg:pt-[4.25rem] lg:pb-[5.5rem] dark:border-zinc-700/55 dark:bg-zinc-900 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
        >
          <div className={`relative ${MAX} ${PAD_X}`}>
            <div className="mx-auto max-w-[42rem] text-center">
              <h2 className="text-balance text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em] text-zinc-950 dark:text-zinc-50">
                Need a website that better supports your business?
              </h2>
              <p className="mt-4 text-pretty text-[17px] leading-[1.52] text-zinc-600 dark:text-zinc-400 sm:mt-5 sm:text-[18px] sm:leading-[1.55]">
                We help businesses build, improve, and maintain practical websites
                designed around real operational needs.
              </p>
            </div>

            <div className="mx-auto mt-7 max-w-5xl md:mt-8 lg:mt-9">
              <div className="grid grid-cols-1 gap-7 border-t border-zinc-300/40 pt-7 dark:border-zinc-600/45 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-start lg:gap-8 lg:pt-6 xl:gap-10">
                <FounderContactPanel showWhatsappButton={false}>
                  <p className="mt-2 max-w-md text-pretty text-[12.5px] font-medium leading-snug text-zinc-700 dark:text-zinc-300 sm:text-[13px]">
                    Founder-led website partner based in Hong Kong.
                  </p>
                  <p className="mt-3 max-w-md text-pretty text-[13px] leading-[1.52] text-zinc-600 dark:text-zinc-400 sm:text-[14px] sm:leading-[1.5]">
                    Works with SMEs on business websites, ecommerce, and ongoing
                    website maintenance and support—same practical approach we use on
                    operational systems work.
                  </p>
                </FounderContactPanel>

                <ContactForm
                  sourcePage="/website-support"
                  defaultServiceInterest="Website design / development"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
