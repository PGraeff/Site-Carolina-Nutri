import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

/** WhatsApp geral (botão flutuante, hero, contato) — usa link rápido se configurado */
export function getGeneralWhatsAppHref(): string {
  if (siteConfig.whatsappQuickChatUrl?.trim()) {
    return siteConfig.whatsappQuickChatUrl.trim();
  }
  return buildWhatsAppUrl(
    siteConfig.whatsappPhone,
    siteConfig.whatsappDefaultMessage
  );
}

export function getPlanWhatsAppHref(message: string): string {
  return buildWhatsAppUrl(siteConfig.whatsappPhone, message);
}
