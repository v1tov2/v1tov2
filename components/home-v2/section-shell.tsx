import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  heading: string;
  lead?: string;
  children: ReactNode;
  muted?: boolean;
};

export function SectionShell({
  id,
  eyebrow,
  heading,
  lead,
  children,
  muted,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`relative px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32 ${
        muted ? "bg-zinc-50/70 dark:bg-zinc-900/20" : ""
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,rgba(14,165,233,0.08),transparent)]"
      />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          {eyebrow ? (
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-sky-700 dark:text-sky-400">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl lg:text-[3.4rem]">
            {heading}
          </h2>
          {lead ? (
            <p className="mt-6 text-pretty text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
              {lead}
            </p>
          ) : null}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
