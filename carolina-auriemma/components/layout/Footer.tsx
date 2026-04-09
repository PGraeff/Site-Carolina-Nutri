import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CrnText } from "@/components/ui/CrnText";
import { getGeneralWhatsAppHref } from "@/lib/contact";
import { imagePaths, siteConfig } from "@/lib/site-config";

export function Footer() {
  const waHref = getGeneralWhatsAppHref();

  return (
    <footer className="border-t border-[var(--color-border)] bg-white/80 py-12">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-3">
            <Image
              src={imagePaths.logoFooter}
              alt={`${siteConfig.name} — ${siteConfig.profession}`}
              width={140}
              height={42}
              className="h-9 w-auto opacity-90"
            />
            <p className="font-sans text-sm text-[var(--color-muted)]">
              {siteConfig.profession} · {siteConfig.city}
            </p>
            <CrnText variant="muted" className="max-w-xs leading-relaxed" />
          </div>
          <div className="flex flex-col gap-2 font-sans text-sm sm:items-end">
            <a
              href={waHref}
              className="text-[var(--color-sage-dark)] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sage)]"
              rel="noopener noreferrer"
              target="_blank"
            >
              WhatsApp
            </a>
            <a
              href={siteConfig.instagramUrl}
              className="text-[var(--color-sage-dark)] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sage)]"
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram (@nutri.carolauriemma)
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-[var(--color-muted)] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sage)]"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
        <p className="mt-10 font-sans text-xs text-[var(--color-muted)]">
          {siteConfig.footerNote}
        </p>
      </Container>
    </footer>
  );
}
