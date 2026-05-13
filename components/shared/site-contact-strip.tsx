import {
  MAIL_JEFFREY,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from "@/components/shared/site-tokens";

type SiteContactStripProps = {
  /** Line above the contact block, e.g. “Operator-led … · Hong Kong.” */
  positioningLine: string;
};

export function SiteContactStrip({ positioningLine }: SiteContactStripProps) {
  return (
    <div className="mt-8 border-t border-zinc-200/90 pt-6 dark:border-white/10 sm:mt-10 sm:pt-8">
      <p className="mb-0 text-[13px] leading-snug text-zinc-600 dark:text-zinc-500 md:mb-3">
        {positioningLine}
      </p>

      <div className="mt-3 md:hidden">
        <div className="rounded-xl border border-zinc-200/90 bg-[#FDFCF7] px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
          <div className="divide-y divide-zinc-200/80 dark:divide-white/10">
            <p className="py-2 text-[13px] font-semibold leading-snug text-zinc-950 dark:text-white">
              Jeffrey Choi
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mono block py-2 text-[13px] leading-snug text-zinc-700 underline decoration-zinc-300/80 underline-offset-2 transition hover:text-zinc-950 hover:decoration-zinc-500 dark:text-zinc-200 dark:decoration-white/20 dark:hover:text-white dark:hover:decoration-white/45"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={MAIL_JEFFREY}
              className="mono block break-words py-2 text-[13px] leading-snug text-zinc-700 underline decoration-zinc-300/80 underline-offset-2 transition hover:text-zinc-950 hover:decoration-zinc-500 dark:text-zinc-200 dark:decoration-white/20 dark:hover:text-white dark:hover:decoration-white/45"
            >
              jeffrey@v1tov2.com
            </a>
          </div>
        </div>
      </div>

      <div className="mt-3 hidden grid-cols-1 items-baseline gap-x-8 gap-y-2 md:grid md:grid-cols-3">
        <p className="text-[13.5px] font-medium leading-snug text-zinc-900 dark:text-zinc-100">
          Jeffrey Choi
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mono block text-[13px] leading-snug text-zinc-700 underline decoration-zinc-300/80 underline-offset-4 transition hover:text-zinc-950 dark:text-zinc-200 dark:decoration-white/20 dark:hover:text-white dark:hover:decoration-white/45"
        >
          {PHONE_DISPLAY}
        </a>
        <a
          href={MAIL_JEFFREY}
          className="mono block break-all text-[13px] leading-snug text-zinc-700 underline decoration-zinc-300/80 underline-offset-4 transition hover:text-zinc-950 dark:text-zinc-200 dark:decoration-white/20 dark:hover:text-white dark:hover:decoration-white/45"
        >
          jeffrey@v1tov2.com
        </a>
      </div>
    </div>
  );
}
