"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { fireBookFreeV2AuditConversion } from "@/lib/analytics/google-ads-conversion";

export type V2AuditBookCtaLinkProps = ComponentProps<typeof Link>;

export function V2AuditBookCtaLink({
  href = "#contact",
  onClick,
  ...props
}: V2AuditBookCtaLinkProps) {
  return (
    <Link
      href={href}
      {...props}
      onClick={(e) => {
        onClick?.(e);
        fireBookFreeV2AuditConversion();
      }}
    />
  );
}
