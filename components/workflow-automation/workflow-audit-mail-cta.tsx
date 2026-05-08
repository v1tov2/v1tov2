"use client";

import type { ComponentProps } from "react";
import { fireBookFreeWorkflowAuditConversion } from "@/lib/analytics/google-ads-conversion";

const DEFAULT_HREF =
  "mailto:hello@v1tov2.com?subject=" +
  encodeURIComponent("Free Workflow Audit");

export type WorkflowAuditMailCtaProps = ComponentProps<"a">;

/** Mail CTA for workflow landing; conversion send_to is swappable in `google-ads-conversion.ts`. */
export function WorkflowAuditMailCta({
  href = DEFAULT_HREF,
  onClick,
  ...props
}: WorkflowAuditMailCtaProps) {
  return (
    <a
      href={href}
      {...props}
      onClick={(e) => {
        onClick?.(e);
        fireBookFreeWorkflowAuditConversion();
      }}
    />
  );
}
