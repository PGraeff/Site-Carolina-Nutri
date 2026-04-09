import { siteConfig } from "@/lib/site-config";

type CrnTextProps = {
  className?: string;
  /** default: corpo discreto · emphasis: destaque sutil (ex.: sobre) */
  variant?: "default" | "muted" | "emphasis";
};

export function CrnText({ className = "", variant = "default" }: CrnTextProps) {
  const crn = siteConfig.crn?.trim();
  if (!crn) return null;

  const styles: Record<NonNullable<CrnTextProps["variant"]>, string> = {
    default: "font-sans text-sm text-[var(--color-muted)]",
    muted: "font-sans text-xs text-[var(--color-muted)]",
    emphasis:
      "font-sans text-sm font-medium tracking-wide text-[var(--color-sage-dark)]",
  };

  return (
    <p className={`${styles[variant]} ${className}`.trim()}>
      <span className="sr-only">Registro profissional: </span>
      {crn}
    </p>
  );
}
