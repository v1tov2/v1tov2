"use client";

import { useCallback, useId, useMemo, useState } from "react";
import {
  WHATSAPP_URL,
  ACCENT,
  ACCENT_INK,
} from "@/components/shared/site-tokens";
import { isLikelyEmail } from "@/lib/contact/email";
import {
  CONTACT_SERVICE_OPTIONS,
  type ContactServiceInterest,
} from "@/lib/contact/service-options";

export type { ContactServiceInterest };

const MAX_MESSAGE_LENGTH = 4000;

export type ContactFormProps = {
  sourcePage: string;
  defaultServiceInterest?: ContactServiceInterest;
  className?: string;
  /** Tighter padding and fields — for inline / homepage use */
  compact?: boolean;
  /** Set false when WhatsApp is offered elsewhere on the page */
  showWhatsappSecondary?: boolean;
  /**
   * `warm` — default cream card (landing pages).
   * `dark-hero` — charcoal embed for homepage dark CTA only.
   */
  surface?: "warm" | "dark-hero";
};

type SubmitState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success" }
  | { status: "error"; message: string };

function fireContactFormSubmitGtag(
  sourcePage: string,
  serviceInterest: string,
): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "contact_form_submit", {
      source_page: sourcePage,
      service_interest: serviceInterest,
    });
  }
}

export function ContactForm({
  sourcePage,
  defaultServiceInterest = "Website design / development",
  className = "",
  compact = false,
  showWhatsappSecondary = true,
  surface = "warm",
}: ContactFormProps) {
  const formId = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneOrWhatsapp, setPhoneOrWhatsapp] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [serviceInterest, setServiceInterest] =
    useState<ContactServiceInterest>(defaultServiceInterest);
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>({
    status: "idle",
  });
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    serviceInterest?: string;
  }>({});

  const trimmedMessageLen = useMemo(
    () => Math.min(message.trim().length, MAX_MESSAGE_LENGTH),
    [message],
  );

  const resetForm = useCallback(() => {
    setName("");
    setEmail("");
    setPhoneOrWhatsapp("");
    setCompanyWebsite("");
    setServiceInterest(defaultServiceInterest);
    setMessage("");
    setHoneypot("");
    setFieldErrors({});
  }, [defaultServiceInterest]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tName = name.trim();
    const tEmail = email.trim();
    const tPhone = phoneOrWhatsapp.trim();
    const tCompany = companyWebsite.trim();
    const tMessage = message.trim();

    const errors: typeof fieldErrors = {};
    if (!tName) errors.name = "Please add your name.";
    if (!tEmail) {
      errors.email = "Please add your email.";
    } else if (!isLikelyEmail(tEmail)) {
      errors.email = "Please add a valid email address.";
    }
    if (!serviceInterest) {
      errors.serviceInterest = "Please choose what you’re looking for.";
    }
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setSubmitState({ status: "idle" });
      return;
    }
    if (tMessage.length > MAX_MESSAGE_LENGTH) {
      setFieldErrors({});
      setSubmitState({
        status: "error",
        message: `Message is too long (max ${MAX_MESSAGE_LENGTH} characters).`,
      });
      return;
    }

    setFieldErrors({});
    setSubmitState({ status: "loading" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: tName,
          email: tEmail,
          phoneOrWhatsapp: tPhone,
          companyWebsite: tCompany,
          serviceInterest,
          message: tMessage,
          honeypot,
          sourcePage,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        setSubmitState({
          status: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
        return;
      }

      fireContactFormSubmitGtag(sourcePage, serviceInterest);
      setSubmitState({ status: "success" });
      resetForm();
    } catch {
      setSubmitState({
        status: "error",
        message: "Could not send. Check your connection and try again.",
      });
    }
  };

  const isDarkHero = surface === "dark-hero";

  const inputClass = isDarkHero
    ? compact
      ? "mt-1 w-full rounded-lg border border-white/[0.14] bg-zinc-950/90 px-3 py-1.5 text-[15px] text-zinc-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] outline-none ring-0 transition placeholder:text-zinc-500 focus:border-white/30 focus:ring-2 focus:ring-white/10 sm:mt-1.5 sm:px-3 sm:py-2 sm:text-[15px]"
      : "mt-1 w-full rounded-lg border border-white/[0.14] bg-zinc-950/90 px-3 py-2 text-[15px] text-zinc-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] outline-none transition placeholder:text-zinc-500 focus:border-white/30 focus:ring-2 focus:ring-white/10 sm:mt-1.5 sm:px-3.5 sm:py-2.5 sm:text-[15px]"
    : compact
      ? "mt-1 w-full rounded-lg border border-zinc-300/85 bg-white px-3 py-1.5 text-[15px] text-zinc-900 shadow-[0_1px_0_rgba(11,11,10,0.03)] outline-none ring-zinc-400/30 transition placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 dark:border-zinc-600/70 dark:bg-zinc-900/80 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500 sm:mt-1.5 sm:px-3 sm:py-2 sm:text-[15px]"
      : "mt-1 w-full rounded-lg border border-zinc-300/85 bg-white px-3 py-2 text-[15px] text-zinc-900 shadow-[0_1px_0_rgba(11,11,10,0.03)] outline-none ring-zinc-400/30 transition placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 dark:border-zinc-600/70 dark:bg-zinc-900/80 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500 sm:mt-1.5 sm:px-3.5 sm:py-2.5 sm:text-[15px]";
  const labelClass = isDarkHero
    ? "text-[13px] font-medium text-zinc-300"
    : "text-[13px] font-medium text-zinc-700 dark:text-zinc-300";

  const formShellClass = isDarkHero
    ? compact
      ? "relative rounded-xl border border-white/[0.12] bg-zinc-900/80 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-white/[0.06] backdrop-blur-[12px] [color-scheme:dark] sm:p-3.5"
      : "relative rounded-xl border border-white/[0.12] bg-zinc-900/80 p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-white/[0.06] backdrop-blur-[12px] [color-scheme:dark] sm:p-4"
    : compact
      ? "relative rounded-xl border border-zinc-300/65 bg-[#FAF8F2] p-3 shadow-[0_1px_0_rgba(11,11,10,0.035)] ring-1 ring-zinc-200/35 dark:border-zinc-600/65 dark:bg-zinc-800/35 dark:ring-white/[0.05] sm:p-3.5"
      : "relative rounded-xl border border-zinc-300/65 bg-[#FAF8F2] p-3.5 shadow-[0_1px_0_rgba(11,11,10,0.035)] ring-1 ring-zinc-200/35 dark:border-zinc-600/65 dark:bg-zinc-800/35 dark:ring-white/[0.05] sm:p-4";

  const introEyebrowClass = isDarkHero
    ? "mono text-[11px] font-semibold uppercase tracking-[0.05em] text-zinc-500"
    : "mono text-[11px] font-semibold uppercase tracking-[0.05em] text-zinc-600 dark:text-zinc-400";
  const introBodyClass = isDarkHero
    ? "mt-1 text-[13px] leading-snug text-zinc-400"
    : "mt-1 text-[13px] leading-snug text-zinc-600 dark:text-zinc-400";

  const optionalMutedClass = isDarkHero
    ? "font-normal text-zinc-500"
    : "font-normal text-zinc-500 dark:text-zinc-500";

  const selectChevron =
    surface === "dark-hero"
      ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23a1a1aa'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`
      : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2371717a'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`;

  const reqStarClass = isDarkHero
    ? "text-red-400"
    : "text-red-600 dark:text-red-400";
  const errTextClass = isDarkHero
    ? "mt-1.5 text-[13px] text-red-300"
    : "mt-1.5 text-[13px] text-red-600 dark:text-red-400";

  return (
    <div className={className}>
      <form
        id={formId}
        onSubmit={onSubmit}
        className={formShellClass}
        noValidate
      >
        <p className={introEyebrowClass}>
          Tell us what you need help with
        </p>
        <p className={introBodyClass}>
          We&apos;ll reply by email, usually within one business day.
        </p>

        <div
          className={
            compact
              ? "mt-2.5 flex flex-col gap-2 sm:mt-3 sm:gap-2"
              : "mt-3 flex flex-col gap-2.5 sm:mt-3.5 sm:gap-2.5"
          }
        >
          <div>
            <label htmlFor={`${formId}-name`} className={labelClass}>
              Name <span className={reqStarClass}>*</span>
            </label>
            <input
              id={`${formId}-name`}
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
              aria-invalid={Boolean(fieldErrors.name)}
              aria-describedby={
                fieldErrors.name ? `${formId}-name-err` : undefined
              }
            />
            {fieldErrors.name ? (
              <p
                id={`${formId}-name-err`}
                className={errTextClass}
                role="alert"
              >
                {fieldErrors.name}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor={`${formId}-email`} className={labelClass}>
              Email <span className={reqStarClass}>*</span>
            </label>
            <input
              id={`${formId}-email`}
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={
                fieldErrors.email ? `${formId}-email-err` : undefined
              }
            />
            {fieldErrors.email ? (
              <p
                id={`${formId}-email-err`}
                className={errTextClass}
                role="alert"
              >
                {fieldErrors.email}
              </p>
            ) : null}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor={`${formId}-phone`} className={labelClass}>
                Phone or WhatsApp{" "}
                <span className={optionalMutedClass}>(optional)</span>
              </label>
              <input
                id={`${formId}-phone`}
                name="phoneOrWhatsapp"
                type="tel"
                autoComplete="tel"
                value={phoneOrWhatsapp}
                onChange={(e) => setPhoneOrWhatsapp(e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor={`${formId}-site`} className={labelClass}>
                Company / website{" "}
                <span className="font-normal">(optional)</span>
              </label>
              <input
                id={`${formId}-site`}
                name="companyWebsite"
                type="text"
                autoComplete="url"
                placeholder="e.g. yourbrand.com"
                value={companyWebsite}
                onChange={(e) => setCompanyWebsite(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor={`${formId}-service`} className={labelClass}>
              What do you need help with?{" "}
              <span className={reqStarClass}>*</span>
            </label>
            <select
              id={`${formId}-service`}
              name="serviceInterest"
              value={serviceInterest}
              onChange={(e) =>
                setServiceInterest(e.target.value as ContactServiceInterest)
              }
              className={`${inputClass} cursor-pointer appearance-none bg-[length:1rem] bg-[right_0.65rem_center] bg-no-repeat pr-10`}
              style={{
                backgroundImage: selectChevron,
              }}
              aria-invalid={Boolean(fieldErrors.serviceInterest)}
              aria-describedby={
                fieldErrors.serviceInterest
                  ? `${formId}-service-err`
                  : undefined
              }
            >
              {CONTACT_SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {fieldErrors.serviceInterest ? (
              <p
                id={`${formId}-service-err`}
                className={errTextClass}
                role="alert"
              >
                {fieldErrors.serviceInterest}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor={`${formId}-message`} className={labelClass}>
              Message <span className="font-normal">(optional)</span>
            </label>
            <textarea
              id={`${formId}-message`}
              name="message"
              rows={compact ? 2 : 3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={MAX_MESSAGE_LENGTH}
              className={`${inputClass} ${compact ? "min-h-[4.25rem] sm:min-h-[4.5rem]" : "min-h-[5.25rem] sm:min-h-[5.5rem]"} resize-y`}
            />
            <p
              className={
                isDarkHero
                  ? "mt-1 text-right text-[11px] text-zinc-500"
                  : "mt-1 text-right text-[11px] text-zinc-400 dark:text-zinc-500"
              }
            >
              {trimmedMessageLen} / {MAX_MESSAGE_LENGTH}
            </p>
          </div>

          <div className="hidden">
            <label htmlFor={`${formId}-hp`}>Company fax</label>
            <input
              id={`${formId}-hp`}
              name="honeypot"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>
        </div>

        {submitState.status === "error" ? (
          <p
            className={
              isDarkHero
                ? "mt-3 rounded-lg border border-red-500/35 bg-red-950/45 px-3 py-2.5 text-[13.5px] text-red-100"
                : "mt-3 rounded-lg border border-red-200/90 bg-red-50/90 px-3 py-2.5 text-[13.5px] text-red-800 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-200"
            }
            role="alert"
          >
            {submitState.message}
          </p>
        ) : null}

        {submitState.status === "success" ? (
          <p
            className={
              isDarkHero
                ? "mt-3 rounded-lg border border-emerald-500/30 bg-emerald-950/40 px-3 py-2.5 text-[13.5px] text-emerald-50"
                : "mt-3 rounded-lg border border-emerald-200/90 bg-emerald-50/90 px-3 py-2.5 text-[13.5px] text-emerald-900 dark:border-emerald-900/40 dark:bg-emerald-950/35 dark:text-emerald-100"
            }
            role="status"
          >
            Thank you for getting in touch — we&apos;ll get back to you within one business day.
          </p>
        ) : null}

        <div className={compact ? "mt-3" : "mt-3.5"}>
          <button
            type="submit"
            disabled={submitState.status === "loading"}
            className={`inline-flex w-full items-center justify-center rounded-lg px-5 text-[15px] font-semibold text-zinc-900 transition enabled:cursor-pointer enabled:hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60 dark:text-zinc-950 sm:px-6 ${compact ? "min-h-[44px] sm:min-h-[46px]" : "min-h-[46px] sm:min-h-[48px]"}`}
            style={{
              background: ACCENT,
              color: ACCENT_INK,
            }}
          >
            {submitState.status === "loading" ? "Sending…" : "Send message"}
          </button>
        </div>
      </form>

      {showWhatsappSecondary ? (
        <div className={compact ? "mt-3" : "mt-3.5"}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={
              isDarkHero
                ? `inline-flex w-full items-center justify-center rounded-lg border border-white/15 bg-zinc-950/60 px-5 text-[14.5px] font-medium text-zinc-200 transition hover:border-white/25 hover:bg-zinc-900/80 ${compact ? "min-h-[44px] sm:min-h-[46px]" : "min-h-[46px] sm:min-h-[48px]"}`
                : `inline-flex w-full items-center justify-center rounded-lg border border-zinc-300/90 bg-white px-5 text-[14.5px] font-medium text-zinc-900 shadow-[0_1px_2px_rgba(11,11,10,0.04)] transition hover:border-zinc-400 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-500 ${compact ? "min-h-[44px] sm:min-h-[46px]" : "min-h-[46px] sm:min-h-[48px]"}`
            }
          >
            Prefer a faster reply? Chat on WhatsApp
          </a>
        </div>
      ) : null}
    </div>
  );
}
