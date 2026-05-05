import Link from "next/link";

const links = [
  { href: "#workflows", label: "Workflows" },
  { href: "#packages", label: "Packages" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-[color-mix(in_srgb,var(--background)_88%,transparent)] backdrop-blur-md dark:border-zinc-800 dark:bg-[color-mix(in_srgb,#0a0a0a_88%,transparent)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          V1<span className="text-zinc-400 dark:text-zinc-500">→</span>V2
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-zinc-600 md:flex dark:text-zinc-400">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="inline-flex h-10 items-center justify-center rounded-full bg-zinc-900 px-4 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
        >
          Book a free V2 Audit
        </Link>
      </div>
    </header>
  );
}
