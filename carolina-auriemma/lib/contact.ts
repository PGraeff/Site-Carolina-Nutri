import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export type GeneralWhatsAppCta = keyof typeof siteConfig.whatsappCtaMessages;

function appendMessageToUrl(url: string, message: string): string {
  const trimmedMessage = message.trim();
  if (!trimmedMessage) {
    return url;
  }

  try {
    const parsed = new URL(url);
    parsed.searchParams.set("text", trimmedMessage);
    return parsed.toString();
  } catch {
    const joiner = url.includes("?") ? "&" : "?";
    return `${url}${joiner}text=${encodeURIComponent(trimmedMessage)}`;
  }
}

/** WhatsApp geral (botão flutuante, hero, contato) com mensagem por contexto */
export function getGeneralWhatsAppHref(cta?: GeneralWhatsAppCta): string {
  const message =
    (cta ? siteConfig.whatsappCtaMessages[cta] : undefined) ??
    siteConfig.whatsappDefaultMessage;

  if (siteConfig.whatsappQuickChatUrl?.trim()) {
    return appendMessageToUrl(siteConfig.whatsappQuickChatUrl.trim(), message);
  }

  return buildWhatsAppUrl(siteConfig.whatsappPhone, message);
}

export function getPlanWhatsAppHref(message: string): string {
  return buildWhatsAppUrl(siteConfig.whatsappPhone, message);
}
