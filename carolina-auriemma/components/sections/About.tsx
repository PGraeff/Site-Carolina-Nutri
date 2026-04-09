import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CrnText } from "@/components/ui/CrnText";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { imagePaths, siteConfig } from "@/lib/site-config";

function HighlightIcon({ type }: { type: "leaf" | "balance" | "heart" }) {
  const common = "size-10 shrink-0 rounded-2xl bg-[var(--color-sage)]/12 p-2 text-[var(--color-sage-dark)]";
  if (type === "leaf") {
    return (
      <span className={common} aria-hidden>
        <svg className="size-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c4.5 4.5 6 9 6 12a6 6 0 01-12 0c0-3 1.5-7.5 6-12z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v10" />
        </svg>
      </span>
    );
  }
  if (type === "balance") {
    return (
      <span className={common} aria-hidden>
        <svg className="size-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
          <path strokeLinecap="round" d="M12 3v18" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 21h14M8 9l4-4 4 4M8 15l4 4 4-4" />
        </svg>
      </span>
    );
  }
  return (
    <span className={common} aria-hidden>
      <svg className="size-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    </span>
  );
}

const highlightIcons: Array<"leaf" | "balance" | "heart"> = [
  "leaf",
  "balance",
  "heart",
];

export function About() {
  return (
    <section
      id="sobre"
      className="scroll-mt-24 border-b border-[var(--color-border)]/70 bg-white py-16 sm:py-20"
      aria-labelledby="about-heading"
    >
      <Container>
        <SectionTitle
          eyebrow="Sobre mim"
          title="Uma relação mais leve com a comida"
          subtitle="Orientação humana, prática e sem extremismos — para você ganhar autonomia e consistência no dia a dia."
        />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
          <figure className="relative mx-auto w-full max-w-md lg:mx-0">
            <div
              className="absolute -bottom-4 -left-4 -z-10 h-32 w-32 rounded-full bg-[var(--color-sage)]/15"
              aria-hidden
            />
            <div className="overflow-hidden rounded-[2rem] bg-[var(--color-cream)] shadow-[0_16px_40px_rgb(0,0,0,0.06)] ring-1 ring-[var(--color-border)]">
              <Image
                src={imagePaths.about}
                alt="Carolina Auriemma em ambiente casual e acolhedor"
                width={560}
                height={700}
                className="h-auto w-full object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </figure>

          <div>
            <h3 id="about-heading" className="sr-only">
              Carolina Auriemma
            </h3>
            <p className="font-serif text-xl font-medium leading-relaxed text-[var(--color-ink)] sm:text-2xl">
              {siteConfig.aboutIntro}
            </p>
            <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-[var(--color-muted)]">
              {siteConfig.aboutParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-8 font-serif text-lg font-medium italic text-[var(--color-sage-dark)] sm:text-xl">
              {siteConfig.taglineClosing}
            </p>

            <CrnText variant="emphasis" className="mt-6 border-l-2 border-[var(--color-sage)]/40 pl-4" />

            <ul className="mt-10 grid gap-6 sm:grid-cols-1">
              {siteConfig.aboutHighlights.map((h, i) => (
                <li
                  key={h.title}
                  className="flex gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)]/50 p-5"
                >
                  <HighlightIcon type={highlightIcons[i] ?? "leaf"} />
                  <div>
                    <p className="font-sans text-sm font-semibold text-[var(--color-ink)]">
                      {h.title}
                    </p>
                    <p className="mt-1 font-sans text-sm leading-relaxed text-[var(--color-muted)]">
                      {h.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
