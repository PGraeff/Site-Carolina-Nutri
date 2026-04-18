/**
 * Builds WhatsApp click-to-chat URLs (wa.me) with optional pre-filled text.
 * Phone must include country code without + (e.g. "5511939544599").
 */
export function normalizeWhatsAppDigits(input: string): string {
  return input.replace(/\D/g, "");
}

export function buildWhatsAppUrl(
  phoneDigits: string,
  message?: string | null
): string {
  const digits = normalizeWhatsAppDigits(phoneDigits);
  if (!digits) {
    return "https://wa.me/";
  }
  const base = `https://wa.me/${digits}`;
  const trimmed = message?.trim();
  if (!trimmed) {
    return base;
  }
  return `${base}?text=${encodeURIComponent(trimmed)}`;
}
