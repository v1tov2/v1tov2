"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BookAuditScrollCta } from "@/components/shared/book-audit-scroll-cta";
import { ACCENT, SITE_MAX, SITE_PAD_X } from "@/components/shared/site-tokens";

const bookCtaClass =
  "inline-flex h-10 min-h-[44px] shrink-0 items-center justify-center rounded-full bg-zinc-900 px-4 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-zinc-800 sm:h-10 sm:min-h-0 sm:px-5 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white";

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`relative py-1 text-[13px] transition-colors duration-200 ${
        active
          ? "font-semibold text-zinc-900 dark:text-zinc-50"
          : "font-medium text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
      }`}
    >
      {children}
      {active ? (
        <span
          className="absolute -bottom-1 left-0 right-0 mx-auto h-0.5 max-w-[2.25rem] rounded-full"
          style={{ background: ACCENT }}
          aria-hidden
        />
      ) : null}
    </Link>
  );
}

function BookAuditNavCta() {
  const pathname = usePathname() || "/";
  const conversion =
    pathname === "/"
      ? "v2"
      : pathname.startsWith("/website-support")
        ? "website"
        : "workflow";

  return (
    <BookAuditScrollCta
      conversion={conversion}
      href="#contact"
      className={bookCtaClass}
      aria-label="Scroll to contact to book a free audit"
    >
      Book audit
    </BookAuditScrollCta>
  );
}

export function SiteNavbar() {
  const pathname = usePathname() || "/";
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const isHome = pathname === "/";
  const isWebsiteSupport = pathname.startsWith("/website-support");
  const isWorkflow = pathname.startsWith("/workflow-automation");

  return (
    <header className="sticky top-0 z-[100] border-b border-zinc-200/65 bg-[color-mix(in_srgb,var(--background)_92%,transparent)] backdrop-blur-md backdrop-saturate-150 dark:border-zinc-800/80 dark:bg-[color-mix(in_srgb,#0a0a0a_92%,transparent)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.55] dark:opacity-[0.35]"
        style={{
          background: `radial-gradient(ellipse 80% 120% at 50% -40%, color-mix(in oklab, ${ACCENT} 7%, transparent), transparent 55%)`,
        }}
      />
      <div
        className={`relative flex max-md:justify-between md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-4 gap-3 py-3.5 sm:gap-4 sm:py-4 ${SITE_MAX} ${SITE_PAD_X}`}
      >
        <Link
          href="/"
          className="group inline-flex shrink-0 items-center gap-2.5 justify-self-start text-zinc-900 dark:text-zinc-100"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-zinc-300/90 bg-white shadow-[0_1px_0_rgba(11,11,10,0.04)] transition group-hover:border-zinc-400/90 dark:border-zinc-600 dark:bg-zinc-900 dark:group-hover:border-zinc-500">
            <Image
              src="/v2-icon.svg"
              alt=""
              width={15}
              height={15}
              unoptimized
            />
          </div>
          <span className="text-[14px] font-semibold tracking-[-0.03em]">
            V1<span className="text-zinc-400 dark:text-zinc-500">→</span>V2
          </span>
        </Link>

        <nav
          className="hidden min-w-0 items-center justify-center justify-self-center gap-7 md:flex lg:gap-9"
          aria-label="Primary"
        >
          {!isHome ? <NavLink href="/" active={false}>Home</NavLink> : null}
          <NavLink href="/website-support" active={isWebsiteSupport}>
            Website Support
          </NavLink>
          <NavLink href="/workflow-automation" active={isWorkflow}>
            Workflow Automation
          </NavLink>
        </nav>

        <div className="flex shrink-0 items-center justify-end justify-self-end gap-2 sm:gap-3">
          <span className="hidden text-[12px] font-medium tracking-wide text-zinc-400 lg:inline dark:text-zinc-500">
            Hong Kong
          </span>
          <div className="hidden md:block">
            <BookAuditNavCta />
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-zinc-200/80 bg-white/80 text-zinc-800 transition hover:border-zinc-300 hover:bg-white md:hidden dark:border-white/10 dark:bg-zinc-900/60 dark:text-zinc-200 dark:hover:border-white/20 dark:hover:bg-zinc-900"
            aria-expanded={menuOpen}
            aria-controls="site-mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">Menu</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden
              className="transition-transform duration-200"
              style={{ transform: menuOpen ? "rotate(90deg)" : undefined }}
            >
              {menuOpen ? (
                <path
                  d="M4 4l10 10M14 4L4 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3.5 5.5h11M3.5 9h11M3.5 12.5h11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="site-mobile-nav"
        className={`origin-top border-t border-zinc-200/60 transition-all duration-200 ease-out dark:border-zinc-800/80 md:hidden ${
          menuOpen
            ? "max-h-[24rem] scale-y-100 opacity-100"
            : "pointer-events-none max-h-0 scale-y-95 opacity-0"
        }`}
      >
        <nav
          className={`${SITE_MAX} ${SITE_PAD_X} flex flex-col gap-1 py-4`}
          aria-label="Mobile primary"
        >
          {!isHome ? (
            <Link
              href="/"
              className="rounded-lg px-3 py-3.5 text-[15px] font-medium text-zinc-800 transition hover:bg-zinc-100/90 dark:text-zinc-200 dark:hover:bg-white/[0.06]"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          ) : null}
          <Link
            href="/website-support"
            className={`rounded-lg px-3 py-3.5 text-[15px] font-medium transition hover:bg-zinc-100/90 dark:hover:bg-white/[0.06] ${
              isWebsiteSupport
                ? "bg-[color-mix(in_oklab,oklch(0.86_0.22_142)_12%,#fff)] text-zinc-900 dark:bg-white/[0.08] dark:text-zinc-50"
                : "text-zinc-800 dark:text-zinc-200"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Website Support
          </Link>
          <Link
            href="/workflow-automation"
            className={`rounded-lg px-3 py-3.5 text-[15px] font-medium transition hover:bg-zinc-100/90 dark:hover:bg-white/[0.06] ${
              isWorkflow
                ? "bg-[color-mix(in_oklab,oklch(0.86_0.22_142)_12%,#fff)] text-zinc-900 dark:bg-white/[0.08] dark:text-zinc-50"
                : "text-zinc-800 dark:text-zinc-200"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Workflow Automation
          </Link>
          <div className="mt-2 border-t border-zinc-200/60 pt-4 dark:border-white/10">
            <BookAuditNavCta />
          </div>
          <p className="mono px-3 pt-2 text-center text-[11px] tracking-wide text-zinc-400 dark:text-zinc-500">
            Hong Kong
          </p>
        </nav>
      </div>
    </header>
  );
}
