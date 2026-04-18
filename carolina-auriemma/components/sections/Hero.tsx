import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getGeneralWhatsAppHref } from "@/lib/contact";
import { imagePaths, siteConfig } from "@/lib/site-config";

export function Hero() {
  const waHref = getGeneralWhatsAppHref("hero");
  const trust = [
    ...siteConfig.trustItems.map((t) => t.label),
    ...(siteConfig.crn?.trim() ? [siteConfig.crn.trim()] : []),
  ];

  return (
    <section
      id="inicio"
      className="scroll-mt-24 border-b border-[var(--color-border)]/70 bg-gradient-to-b from-[var(--color-cream)] to-white pb-14 pt-10 sm:pb-20 sm:pt-14"
      aria-labelledby="hero-heading"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 max-w-xl lg:order-1">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-rose-strong)]">
              {siteConfig.profession} · {siteConfig.city}
            </p>
            <h1
              id="hero-heading"
              className="mt-4 font-serif text-[2rem] font-semibold leading-[1.15] text-[var(--color-ink)] sm:text-4xl lg:text-[2.75rem]"
            >
              {siteConfig.headline}
            </h1>
            <p className="mt-5 font-sans text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
              {siteConfig.subheadline}
            </p>

            {trust.length > 0 ? (
              <ul className="mt-6 flex flex-wrap gap-2">
                {trust.map((label) => (
                  <li
                    key={label}
                    className="rounded-full border border-[var(--color-border)] bg-white/80 px-3 py-1 font-sans text-xs text-[var(--color-ink)] sm:text-sm"
                  >
                    {label}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={waHref} external variant="whatsapp" className="w-full sm:w-auto">
                Falar no WhatsApp
              </Button>
              <Button href="#planos" variant="secondary" className="w-full sm:w-auto">
                Ver planos
              </Button>
            </div>

            <p className="mt-8 border-l-2 border-[var(--color-sage)]/50 pl-4 font-serif text-lg italic leading-relaxed text-[var(--color-sage-dark)] sm:text-xl">
              {siteConfig.taglineClosing}
            </p>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative w-full max-w-md">
              <div
                className="absolute -inset-3 -z-10 rounded-[2rem] bg-[var(--color-rose)]/25 blur-2xl"
                aria-hidden
              />
              <figure className="overflow-hidden rounded-[2rem] bg-[var(--color-cream)] shadow-[0_20px_50px_rgb(0,0,0,0.08)] ring-1 ring-[var(--color-border)]">
                <Image
                  src={imagePaths.hero}
                  alt="Retrato profissional de Carolina Auriemma, nutricionista"
                  width={640}
                  height={800}
                  className="h-auto w-full object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </figure>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
