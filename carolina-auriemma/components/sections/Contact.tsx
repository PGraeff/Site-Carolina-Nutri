import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CrnText } from "@/components/ui/CrnText";
import { getGeneralWhatsAppHref } from "@/lib/contact";
import { siteConfig } from "@/lib/site-config";

export function Contact() {
  const waHref = getGeneralWhatsAppHref("contact");

  return (
    <section
      id="contato"
      className="scroll-mt-24 bg-gradient-to-b from-[var(--color-cream)] to-[var(--color-rose)]/20 py-16 sm:py-24"
      aria-labelledby="contact-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-[var(--color-border)] bg-white/90 p-8 text-center shadow-[0_20px_50px_rgb(0,0,0,0.06)] backdrop-blur-sm sm:p-12">
          <h2
            id="contact-heading"
            className="font-serif text-3xl font-semibold text-[var(--color-ink)] sm:text-4xl"
          >
            {siteConfig.contact.title}
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            {siteConfig.contact.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:items-center">
            <Button
              href={waHref}
              external
              variant="whatsapp"
              className="w-full min-h-14 text-base sm:w-auto sm:min-w-[280px]"
            >
              {siteConfig.contact.primaryCta}
            </Button>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-[var(--color-border)] pt-8 font-sans text-sm text-[var(--color-muted)] sm:flex-row sm:justify-center sm:gap-8">
            <a
              href={siteConfig.instagramUrl}
              className="text-[var(--color-sage-dark)] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sage)]"
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram — @nutri.carolauriemma
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sage)]"
            >
              {siteConfig.email}
            </a>
          </div>
          <p className="mt-4 font-sans text-xs text-[var(--color-muted)]">
            {siteConfig.city} · {siteConfig.serviceMode}
          </p>
          <CrnText variant="muted" className="mt-2" />
        </div>
      </Container>
    </section>
  );
}
