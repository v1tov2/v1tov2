"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import {
  fireBookFreeV2AuditConversion,
  fireBookFreeWebsiteAuditConversion,
  fireBookFreeWorkflowAuditConversion,
} from "@/lib/analytics/google-ads-conversion";

export type BookAuditConversionKind = "v2" | "website" | "workflow";

export type BookAuditScrollCtaProps = Omit<
  ComponentPropsWithoutRef<"a">,
  "href"
> & {
  conversion: BookAuditConversionKind;
  href?: string;
  children: ReactNode;
};

const SCROLL_OFFSET = 96;

function fireConversion(kind: BookAuditConversionKind) {
  switch (kind) {
    case "v2":
      fireBookFreeV2AuditConversion();
      break;
    case "website":
      fireBookFreeWebsiteAuditConversion();
      break;
    case "workflow":
      fireBookFreeWorkflowAuditConversion();
      break;
  }
}

/** Hash only (e.g. `#contact`) or path+hash (e.g. `/#contact`) for same-origin targets. */
function scrollToIdFromHref(href: string) {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return;
  const id = href.slice(hashIndex + 1);
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;

  const top =
    el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  window.history.replaceState(null, "", `#${id}`);
}

/**
 * Primary “Book audit” control: fires the right Ads conversion, then smooth-scrolls
 * to `#contact` (sticky header offset applied). Does not open mailto.
 */
export function BookAuditScrollCta({
  conversion,
  href = "#contact",
  onClick,
  children,
  ...props
}: BookAuditScrollCtaProps) {
  return (
    <a
      href={href}
      {...props}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;

        fireConversion(conversion);

        if (href.startsWith("#") && href.length > 1) {
          e.preventDefault();
          scrollToIdFromHref(href);
          return;
        }

        if (href.startsWith("/#") && href.length > 2) {
          e.preventDefault();
          scrollToIdFromHref(href.slice(1));
        }
      }}
    >
      {children}
    </a>
  );
}
