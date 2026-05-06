export const GOOGLE_ADS_BOOK_FREE_V2_AUDIT_SEND_TO =
  "AW-18142852608/vhYJCKPnqKgcEIDsl8tD" as const;

/** Google Ads conversion for “Book a free V2 Audit” CTAs. Safe on server (no-op until window exists). */
export function fireBookFreeV2AuditConversion(): void {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: GOOGLE_ADS_BOOK_FREE_V2_AUDIT_SEND_TO,
    });
  }
}
