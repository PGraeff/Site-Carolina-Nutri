type SectionTitleProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  id,
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`mb-10 max-w-2xl space-y-3 ${alignClass}`}>
      {eyebrow ? (
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-rose-strong)]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-serif text-3xl font-semibold leading-tight text-[var(--color-ink)] sm:text-4xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="font-sans text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
