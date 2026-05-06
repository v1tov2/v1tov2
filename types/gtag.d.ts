export {};

declare global {
  interface Window {
    gtag?: (
      command: string,
      actionOrDate: string | Date,
      params?: Record<string, unknown>,
    ) => void;
  }
}
