export const GOOGLE_ADS_BOOK_FREE_V2_AUDIT_SEND_TO =
  "AW-18142852608/vhYJCKPnqKgcEIDsl8tD" as const;

/** Replace with a dedicated conversion action in Google Ads when you split website vs V2 leads. */
export const GOOGLE_ADS_BOOK_FREE_WEBSITE_AUDIT_SEND_TO =
  GOOGLE_ADS_BOOK_FREE_V2_AUDIT_SEND_TO;

function fireConversion(sendTo: string): void {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: sendTo,
    });
  }
}

/** Google Ads conversion for “Book a free V2 Audit” CTAs. Safe on server (no-op until window exists). */
export function fireBookFreeV2AuditConversion(): void {
  fireConversion(GOOGLE_ADS_BOOK_FREE_V2_AUDIT_SEND_TO);
}

/** Google Ads conversion for “Book a Free Website Audit” (e.g. /website-support). */
export function fireBookFreeWebsiteAuditConversion(): void {
  fireConversion(GOOGLE_ADS_BOOK_FREE_WEBSITE_AUDIT_SEND_TO);
}

/**
 * Workflow automation landing (/workflow-automation).
 * Today shares the same send_to as website audit; change this constant when you add a dedicated Google Ads conversion action.
 */
export const GOOGLE_ADS_BOOK_FREE_WORKFLOW_AUDIT_SEND_TO =
  GOOGLE_ADS_BOOK_FREE_WEBSITE_AUDIT_SEND_TO;

export function fireBookFreeWorkflowAuditConversion(): void {
  fireConversion(GOOGLE_ADS_BOOK_FREE_WORKFLOW_AUDIT_SEND_TO);
}
