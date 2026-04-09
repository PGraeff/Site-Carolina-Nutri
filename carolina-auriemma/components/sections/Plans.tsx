import { Container } from "@/components/ui/Container";
import { PlanCard } from "@/components/ui/PlanCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getPlanWhatsAppHref } from "@/lib/contact";
import { siteConfig } from "@/lib/site-config";

export function Plans() {
  return (
    <section
      id="planos"
      className="scroll-mt-24 border-b border-[var(--color-border)]/70 bg-[var(--color-cream)] py-16 sm:py-20"
      aria-labelledby="plans-heading"
    >
      <Container>
        <SectionTitle
          eyebrow="Investimento"
          id="plans-heading"
          title="Planos de acompanhamento"
          subtitle="Escolha o ritmo que combina com você. Todos incluem orientação personalizada e suporte pelo WhatsApp."
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {siteConfig.plans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              href={getPlanWhatsAppHref(plan.whatsappMessage)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
