"use client";

import type { ComponentProps } from "react";
import { BookAuditScrollCta } from "@/components/shared/book-audit-scroll-cta";

export type V2AuditBookCtaLinkProps = Omit<
  ComponentProps<typeof BookAuditScrollCta>,
  "conversion"
>;

/** @deprecated Import `BookAuditScrollCta` with `conversion="v2"` for new code. */
export function V2AuditBookCtaLink({
  href = "#contact",
  ...props
}: V2AuditBookCtaLinkProps) {
  return <BookAuditScrollCta conversion="v2" href={href} {...props} />;
}
