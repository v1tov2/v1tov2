import Link from "next/link";

const ACCENT = "oklch(0.86 0.22 142)";

const navLinks = [
  { href: "#what-we-build", label: "What we build" },
  { href: "#workflows", label: "Workflows" },
  { href: "#packages", label: "Packages" },
  { href: "#process", label: "Process" },
  { href: "#sourcexpress", label: "Why us" },
  { href: "#contact", label: "Contact" },
] as const;

const linkClass =
  "w-fit text-[14px] text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 bg-[#FAFAF7] dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-6 sm:py-14 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-5">
            <Link
              href="/"
              className="inline-flex font-mono text-[13px] font-semibold tracking-[-0.02em] text-zinc-900 dark:text-zinc-100"
            >
              V1<span className="text-zinc-400 dark:text-zinc-500">→</span>V2
            </Link>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              Operator-led systems for real businesses — from messy V1 habits
              to a steadier V2 your team can run every day.
            </p>
            <p className="mono mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.04em] text-zinc-500 dark:text-zinc-400">
              <span
                className="size-1.5 shrink-0 rounded-full"
                style={{
                  background: ACCENT,
                  boxShadow: `0 0 0 3px color-mix(in oklab, ${ACCENT} 22%, transparent)`,
                }}
              />
              Available now · limited build slots
            </p>
          </div>

          <div className="lg:col-span-4">
            <p className="mono mb-4 text-[11px] font-medium uppercase tracking-[0.08em] text-zinc-400 dark:text-zinc-500">
              Navigate
            </p>
            <nav className="flex flex-col gap-3" aria-label="Footer">
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-3">
            <p className="mono mb-4 text-[11px] font-medium uppercase tracking-[0.08em] text-zinc-400 dark:text-zinc-500">
              Contact
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@v1tov2.com"
                className="mono w-fit text-[14px] text-zinc-700 underline decoration-zinc-300/80 underline-offset-4 transition hover:text-zinc-900 dark:text-zinc-300 dark:decoration-zinc-600 dark:hover:text-zinc-100"
              >
                hello@v1tov2.com
              </a>
              <Link
                href="#contact"
                className="w-fit text-[15px] font-medium text-zinc-900 transition hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-300"
              >
                Book a free V2 Audit
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-200/80 pt-8 dark:border-zinc-800">
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-500 sm:text-left">
            © 2026 V1toV2. Operator-led systems build.
          </p>
        </div>
      </div>
    </footer>
  );
}
