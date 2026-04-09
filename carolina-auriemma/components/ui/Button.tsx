import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "whatsapp" | "ghost";

type Common = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonAsLink = Common & {
  href: string;
  external?: boolean;
  type?: never;
};

type ButtonAsButton = Common & {
  href?: never;
  external?: never;
  type?: "button" | "submit";
};

export type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-medium tracking-wide transition-[color,background-color,box-shadow,transform] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] sm:text-[0.9375rem]";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-sage)] text-white shadow-sm hover:bg-[var(--color-sage-dark)] focus-visible:outline-[var(--color-sage)]",
  secondary:
    "border border-[var(--color-sage)]/35 bg-white/80 text-[var(--color-sage-dark)] hover:border-[var(--color-sage)]/60 hover:bg-[var(--color-cream)] focus-visible:outline-[var(--color-sage)]",
  whatsapp:
    "bg-[#25D366] text-white shadow-sm hover:bg-[#1ebe57] focus-visible:outline-[#128C7E]",
  ghost:
    "text-[var(--color-sage-dark)] hover:bg-[var(--color-rose)]/15 focus-visible:outline-[var(--color-sage)]",
};

export function Button(props: ButtonProps) {
  const { children, className = "", variant = "primary" } = props;
  const styles = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a
          href={href}
          className={styles}
          rel="noopener noreferrer"
          target="_blank"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={props.type ?? "button"} className={styles}>
      {children}
    </button>
  );
}
