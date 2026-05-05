import Link from "next/link";

const links = [
  { href: "#what-we-build", label: "What we build" },
  { href: "#workflows", label: "Workflows" },
  { href: "#packages", label: "Packages" },
  { href: "#process", label: "Process" },
  { href: "#sourcexpress", label: "Why us" },
] as const;

const linkClassName =
  "whitespace-nowrap transition-colors hover:text-zinc-900 dark:hover:text-zinc-100";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-[color-mix(in_srgb,var(--background)_88%,transparent)] backdrop-blur-md dark:border-zinc-800 dark:bg-[color-mix(in_srgb,#0a0a0a_88%,transparent)]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-5 py-3.5 sm:px-6 md:px-8">
        <Link
          href="/"
          className="shrink-0 font-mono text-[13px] font-semibold tracking-[-0.02em] text-zinc-900 dark:text-zinc-100"
        >
          V1<span className="text-zinc-400 dark:text-zinc-500">→</span>V2
        </Link>

        <nav
          className="hidden items-center gap-6 text-[13px] text-zinc-600 md:flex lg:gap-7 dark:text-zinc-400"
          aria-label="Primary"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={linkClassName}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="inline-flex h-9 shrink-0 items-center justify-center rounded-full bg-zinc-900 px-4 text-[13px] font-semibold text-white transition hover:bg-zinc-800 sm:h-10 sm:px-5 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
        >
          Book a free V2 Audit
        </Link>
      </div>

      <div className="border-t border-zinc-200/80 md:hidden dark:border-zinc-800">
        <nav
          className="mx-auto flex max-w-[1200px] snap-x snap-mandatory items-stretch gap-1 overflow-x-auto px-5 py-2.5 [scrollbar-width:none] sm:px-6 md:px-8 [&::-webkit-scrollbar]:hidden"
          aria-label="Section navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${linkClassName} snap-start shrink-0 rounded-md px-2 py-1.5 text-center text-[12px] text-zinc-600 sm:px-2.5 dark:text-zinc-400`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
