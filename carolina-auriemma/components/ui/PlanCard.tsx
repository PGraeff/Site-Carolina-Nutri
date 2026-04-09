import type { Plan } from "@/lib/site-config";
import { Button } from "./Button";

type PlanCardProps = {
  plan: Plan;
  href: string;
};

export function PlanCard({ plan, href }: PlanCardProps) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-3xl border bg-white/90 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm transition-shadow duration-200 hover:shadow-[0_12px_40px_rgb(0,0,0,0.07)] sm:p-8 ${
        plan.recommended
          ? "border-[var(--color-sage)]/50 ring-2 ring-[var(--color-sage)]/25"
          : "border-[var(--color-border)]"
      }`}
    >
      {plan.recommended ? (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-rose)] px-4 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)] shadow-sm sm:text-xs">
          Recomendado
        </div>
      ) : null}

      <header className="mb-5 pt-2">
        <h3 className="font-serif text-2xl text-[var(--color-ink)]">
          {plan.name}
        </h3>
        <p className="mt-2 font-sans text-sm leading-relaxed text-[var(--color-muted)]">
          {plan.tagline}
        </p>
        {plan.priceLabel ? (
          <p className="mt-5 font-serif text-3xl font-semibold text-[var(--color-sage-dark)]">
            {plan.priceLabel}
          </p>
        ) : null}
      </header>

      <ul className="mb-6 flex-1 space-y-3 font-sans text-sm leading-relaxed text-[var(--color-ink)]">
        {plan.features.map((item) => (
          <li key={item} className="flex gap-3">
            <span
              className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--color-sage)]"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="rounded-2xl bg-[var(--color-cream)]/80 px-4 py-3">
        <p className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
          Indicado para
        </p>
        <p className="mt-1 font-sans text-sm leading-relaxed text-[var(--color-ink)]">
          {plan.recommendedFor}
        </p>
      </div>

      <div className="mt-6">
        <Button href={href} external variant="whatsapp" className="w-full">
          {plan.ctaLabel}
        </Button>
      </div>
    </article>
  );
}
