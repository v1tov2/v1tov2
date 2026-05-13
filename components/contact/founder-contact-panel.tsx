import Link from "next/link";
import type { ReactNode } from "react";
import {
  ACCENT,
  ACCENT_INK,
  MAIL_HELLO,
  MAIL_JEFFREY,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from "@/components/shared/site-tokens";

export function FounderContactPanel({
  children,
  showWhatsappButton = true,
}: {
  children?: ReactNode;
  /** Set false when the page offers a single WhatsApp CTA on the contact form */
  showWhatsappButton?: boolean;
}) {
  return (
    <div className="text-left lg:pt-0.5">
      <p className="text-[22px] font-semibold tracking-[-0.025em] text-zinc-950 dark:text-zinc-50 sm:text-[24px]">
        Jeffrey Choi
      </p>
      <p className="mt-1.5 text-[13px] font-medium text-zinc-500 dark:text-zinc-400 sm:text-[13.5px]">
        Founder, V1toV2
      </p>
      {children}
      <div className="mt-6 border-t border-zinc-300/35 pt-5 dark:border-zinc-600/40">
        <p className="mono text-[11px] font-semibold uppercase tracking-[0.05em] text-zinc-600 dark:text-zinc-400">
          Reach directly
        </p>
        <a
          href="tel:+85292253889"
          className="mono mt-3 block min-h-[44px] py-1 text-[16px] font-semibold text-zinc-950 no-underline underline-offset-[3px] transition hover:underline hover:decoration-zinc-400 dark:text-zinc-50 dark:hover:decoration-zinc-500 sm:min-h-0 sm:text-[17px]"
        >
          {PHONE_DISPLAY}
        </a>
        <a
          href={MAIL_JEFFREY}
          className="mono mt-1 block min-h-[44px] break-words py-1 text-[16px] font-semibold text-zinc-950 underline decoration-zinc-300/85 underline-offset-[3px] transition hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400 sm:min-h-0"
        >
          jeffrey@v1tov2.com
        </a>
        {showWhatsappButton ? (
          <div className="mt-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] w-full max-w-xs items-center justify-center rounded-lg px-5 text-[14.5px] font-semibold transition hover:opacity-95 active:opacity-90 sm:min-h-[44px]"
              style={{
                background: ACCENT,
                color: ACCENT_INK,
              }}
            >
              Chat on WhatsApp
            </a>
          </div>
        ) : null}
        <p className="mt-4 border-t border-zinc-300/35 pt-3 text-[10.5px] leading-snug text-zinc-400 dark:border-zinc-600/40 dark:text-zinc-500">
          <span className="text-zinc-400 dark:text-zinc-500">General inbox: </span>
          <Link
            href={MAIL_HELLO}
            className="mono text-zinc-400 underline decoration-zinc-300/55 underline-offset-2 transition hover:text-zinc-600 hover:decoration-zinc-400 dark:text-zinc-500 dark:decoration-zinc-600/70 dark:hover:text-zinc-300"
          >
            hello@v1tov2.com
          </Link>
        </p>
      </div>
    </div>
  );
}
