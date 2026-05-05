import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 px-4 py-10 sm:px-6 lg:px-8 dark:border-zinc-800">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between dark:text-zinc-400">
        <p>
          (c) {new Date().getFullYear()} V1toV2. Operator-led systems build.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#workflows" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Workflows
          </Link>
          <Link href="#packages" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Packages
          </Link>
          <Link href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
