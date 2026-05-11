import Link from "next/link";
import { BookAuditScrollCta } from "@/components/shared/book-audit-scroll-cta";
import {
  ACCENT,
  MAIL_JEFFREY,
  PHONE_DISPLAY,
  SITE_MAX,
  SITE_PAD_X,
  WHATSAPP_URL,
} from "@/components/shared/site-tokens";

const linkMuted =
  "w-fit text-[14px] text-zinc-600 transition-colors duration-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200/70 bg-[#FAFAF7] dark:border-zinc-800/80 dark:bg-zinc-950">
      <div className={`${SITE_MAX} ${SITE_PAD_X} py-12 sm:py-14 md:py-16`}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-5">
            <Link
              href="/"
              className="inline-flex items-baseline gap-0 font-mono text-[14px] font-semibold tracking-[-0.02em] text-zinc-900 dark:text-zinc-100"
            >
              V1<span className="text-zinc-400 dark:text-zinc-500">→</span>V2
            </Link>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              Operator-led systems for real businesses — from scattered V1
              operations to a steadier V2 your team can run every day.
            </p>
            <p className="mono mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.04em] text-zinc-500 dark:text-zinc-400">
              <span
                className="size-1.5 shrink-0 rounded-full"
                style={{
                  background: ACCENT,
                  boxShadow: `0 0 0 3px color-mix(in oklab, ${ACCENT} 22%, transparent)`,
                }}
              />
              Built in Hong Kong
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="mono mb-4 text-[11px] font-medium uppercase tracking-[0.08em] text-zinc-400 dark:text-zinc-500">
              Pages
            </p>
            <nav className="flex flex-col gap-3" aria-label="Footer pages">
              <Link href="/" className={linkMuted}>
                Home
              </Link>
              <Link href="/website-support" className={linkMuted}>
                Website Support
              </Link>
              <Link href="/business-systems" className={linkMuted}>
                Business Systems
              </Link>
              <Link href="/workflow-automation" className={linkMuted}>
                Workflow Automation
              </Link>
            </nav>
          </div>

          <div className="lg:col-span-4">
            <p className="mono mb-4 text-[11px] font-medium uppercase tracking-[0.08em] text-zinc-400 dark:text-zinc-500">
              Contact
            </p>
            <div className="flex flex-col gap-4">
              <p className="text-[15px] font-semibold text-zinc-900 dark:text-zinc-50">
                Jeffrey Choi
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mono w-fit text-[14px] text-zinc-700 underline decoration-zinc-300/80 underline-offset-4 transition hover:text-zinc-900 dark:text-zinc-300 dark:decoration-zinc-600 dark:hover:text-zinc-100"
              >
                {PHONE_DISPLAY}
              </a>
              <a
                href={MAIL_JEFFREY}
                className="mono w-fit text-[14px] text-zinc-700 underline decoration-zinc-300/80 underline-offset-4 transition hover:text-zinc-900 dark:text-zinc-300 dark:decoration-zinc-600 dark:hover:text-zinc-100"
              >
                jeffrey@v1tov2.com
              </a>
              <BookAuditScrollCta
                conversion="v2"
                href="#contact"
                className="mt-1 w-fit text-[15px] font-semibold text-zinc-900 transition hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-300"
              >
                Book a free V2 Audit
              </BookAuditScrollCta>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-200/75 pt-8 dark:border-zinc-800/80">
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-500 sm:text-left">
            © 2026 V1toV2. Operator-led systems build.
          </p>
        </div>
      </div>
    </footer>
  );
}
