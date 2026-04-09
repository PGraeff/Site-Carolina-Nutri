import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/lib/site-config";

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-24 border-b border-[var(--color-border)]/70 bg-white py-16 sm:py-20"
      aria-labelledby="how-heading"
    >
      <Container>
        <SectionTitle
          eyebrow="Passo a passo"
          id="how-heading"
          title="Como funciona"
          subtitle="Simples, direto e sem burocracia — para você começar com tranquilidade."
          align="center"
        />

        <ol className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-3">
          {siteConfig.howItWorks.map((step) => (
            <li
              key={step.step}
              className="relative flex flex-col items-center text-center"
            >
              <span
                className="mb-4 flex size-12 items-center justify-center rounded-full bg-[var(--color-sage)] font-serif text-lg font-semibold text-white shadow-sm"
                aria-hidden
              >
                {step.step}
              </span>
              <h3 className="font-sans text-base font-semibold text-[var(--color-ink)]">
                {step.title}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-[var(--color-muted)]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
