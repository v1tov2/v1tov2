import { ContactForm } from "@/components/contact/ContactForm";
import {
  ACCENT,
  ACCENT_INK,
  MAIL_JEFFREY,
  PHONE_DISPLAY,
  SITE_MAX,
  SITE_PAD_X,
  WHATSAPP_URL,
} from "@/components/shared/site-tokens";

const TYPICAL_V2_LINES = [
  "Fewer manual follow-ups",
  "Clearer operational visibility",
  "Less spreadsheet/WhatsApp chaos",
  "Faster response workflows",
] as const;

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/10 bg-zinc-950 pt-20 pb-32 text-zinc-50 sm:pt-24 sm:pb-36 lg:pt-28 lg:pb-40 dark:border-white/10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 55% 55% at 50% 45%, black 28%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 55% 55% at 50% 45%, black 28%, transparent 72%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_90%,color-mix(in_oklab,oklch(0.86_0.22_142)_12%,transparent),transparent)]"
      />

      <div className={`relative ${SITE_MAX} ${SITE_PAD_X}`}>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-9 xl:gap-10">
          <div className="min-w-0 max-w-xl lg:max-w-none">
            <h2 className="max-w-[18ch] text-balance text-[clamp(2.1rem,4.8vw,3.75rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-white sm:max-w-none">
              Ready for your V2?
            </h2>

            <p className="mt-4 max-w-[36rem] text-pretty text-[17px] leading-[1.55] text-zinc-400 sm:mt-5 sm:text-[18px]">
              Tell us what you&apos;re trying to improve. We&apos;ll reply with practical
              next steps — usually within one business day.
            </p>

            <div className="mt-7 border-t border-white/10 pt-7 sm:mt-7 sm:pt-7">
              <p className="text-[20px] font-semibold tracking-[-0.02em] text-white sm:text-[21px]">
                Jeffrey Choi
              </p>
              <a
                href="tel:+85292253889"
                className="mono mt-3 block min-h-[44px] py-0.5 text-[16px] font-semibold text-zinc-100 no-underline underline-offset-[3px] transition hover:underline hover:decoration-zinc-500 sm:min-h-0 sm:text-[17px]"
              >
                {PHONE_DISPLAY}
              </a>
              <a
                href={MAIL_JEFFREY}
                className="mono mt-1 block min-h-[44px] break-words py-0.5 text-[16px] font-semibold text-zinc-100 underline decoration-white/25 underline-offset-[3px] transition hover:decoration-zinc-400 sm:min-h-0"
              >
                jeffrey@v1tov2.com
              </a>
              <div className="mt-4 max-w-xs sm:mt-5">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg px-5 text-[15px] font-semibold transition hover:opacity-95 active:opacity-90"
                  style={{
                    background: ACCENT,
                    color: ACCENT_INK,
                  }}
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-white/[0.1] bg-zinc-900/45 px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ring-1 ring-white/[0.05] backdrop-blur-[10px] sm:mt-7 sm:px-5 sm:py-4">
              <p className="mono text-[10px] font-semibold uppercase tracking-[0.1em] text-zinc-500">
                Typical V2 improvements
              </p>
              <ul className="mt-2.5 space-y-2 sm:mt-3 sm:space-y-2.5">
                {TYPICAL_V2_LINES.map((line) => (
                  <li
                    key={line}
                    className="flex gap-2.5 text-[13px] leading-snug text-zinc-300 sm:text-[13.5px] sm:leading-relaxed"
                  >
                    <span
                      className="mt-[0.45rem] size-1 shrink-0 rounded-full opacity-95"
                      style={{ background: ACCENT }}
                      aria-hidden
                    />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="min-w-0 w-full lg:self-stretch">
            <ContactForm
              sourcePage="/"
              defaultServiceInterest="Not sure yet"
              surface="dark-hero"
              showWhatsappSecondary={false}
              className="w-full max-w-xl lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
