const bullets = [
  "Your business delivers—but the backstage feels chaotic",
  "Too much depends on manual effort and reminders",
  "Knowledge lives in people’s heads more than systems",
  "You want to scale, but ops are quietly becoming the ceiling",
];

export function WhoItsFor() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-zinc-200/80 bg-gradient-to-b from-white to-zinc-50/80 p-8 shadow-sm dark:border-zinc-800 dark:from-zinc-900/80 dark:to-zinc-950/80 sm:p-10 lg:p-12">
        <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
          You’re probably still in V1 if…
        </h2>
        <ul className="mt-10 space-y-4">
          {bullets.map((line) => (
            <li
              key={line}
              className="flex gap-4 rounded-2xl border border-zinc-100 bg-white/80 px-5 py-4 dark:border-zinc-800 dark:bg-zinc-900/40"
            >
              <span
                className="mt-1.5 inline-flex size-2 shrink-0 rounded-sm bg-zinc-900 dark:bg-zinc-100"
                aria-hidden
              />
              <span className="text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">
                {line}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-3xl text-pretty text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          If that resonates, we should talk—but we’ll always start honest about
          fit, scope, and what “V2” looks like for you.
        </p>
      </div>
    </section>
  );
}
