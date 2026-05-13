export const CONTACT_SERVICE_OPTIONS = [
  "Website design / development",
  "Website maintenance",
  "Website revamp",
  "Shopify / WordPress support",
  "Business systems / workflow automation",
  "Not sure yet",
] as const;

export type ContactServiceInterest = (typeof CONTACT_SERVICE_OPTIONS)[number];

export function isContactServiceInterest(
  value: string,
): value is ContactServiceInterest {
  return (CONTACT_SERVICE_OPTIONS as readonly string[]).includes(value);
}
