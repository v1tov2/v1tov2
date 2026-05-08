"use client";

import type { ComponentProps } from "react";
import { fireBookFreeWebsiteAuditConversion } from "@/lib/analytics/google-ads-conversion";

const DEFAULT_HREF =
  "mailto:hello@v1tov2.com?subject=" +
  encodeURIComponent("Free Website Audit");

export type WebsiteAuditMailCtaProps = ComponentProps<"a">;

export function WebsiteAuditMailCta({
  href = DEFAULT_HREF,
  onClick,
  ...props
}: WebsiteAuditMailCtaProps) {
  return (
    <a
      href={href}
      {...props}
      onClick={(e) => {
        onClick?.(e);
        fireBookFreeWebsiteAuditConversion();
      }}
    />
  );
}
