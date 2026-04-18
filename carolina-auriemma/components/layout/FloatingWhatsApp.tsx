import { getGeneralWhatsAppHref } from "@/lib/contact";
import { siteConfig } from "@/lib/site-config";

export function FloatingWhatsApp() {
  const href = getGeneralWhatsAppHref("floating");

  return (
    <a
      href={href}
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#1ebe57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C7E] sm:bottom-8 sm:right-8"
      rel="noopener noreferrer"
      target="_blank"
      aria-label={`Conversar no WhatsApp com ${siteConfig.name}`}
    >
      <svg
        className="size-8"
        viewBox="0 0 32 32"
        fill="currentColor"
        aria-hidden
      >
        <path d="M16.003 3C9.377 3 4 8.37 4 14.995c0 2.275.593 4.48 1.714 6.435L4.05 28.05l6.77-1.653a11.95 11.95 0 005.183 1.25h.005c6.626 0 12.003-5.37 12.003-11.996C28.011 8.37 22.634 3 16.003 3zm6.96 17.169c-.3.85-1.485 1.56-2.43 1.77-.615.135-1.425.24-4.155-1.005-3.48-1.41-5.73-4.875-5.91-5.115-.18-.24-1.41-1.875-1.41-3.57 0-1.695.885-2.535 1.2-2.895.315-.36.69-.45.915-.45.225 0 .45.005.645.015.21.015.495-.075.78.6.285.69.975 2.385 1.065 2.565.09.18.15.39.03.645-.12.24-.18.39-.36.6-.18.21-.375.465-.54.63-.18.18-.365.375-.155.735.21.36.93 1.53 1.995 2.475 1.365 1.215 2.52 1.59 2.88 1.77.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.085.99 2.445 1.17.36.18.6.27.69.42.09.15.09.87-.21 1.71z" />
      </svg>
    </a>
  );
}
