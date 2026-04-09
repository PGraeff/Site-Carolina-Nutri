"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getGeneralWhatsAppHref } from "@/lib/contact";
import { imagePaths, siteConfig } from "@/lib/site-config";

export function Header() {
  const [open, setOpen] = useState(false);
  const waHref = getGeneralWhatsAppHref();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)]/80 bg-[var(--color-cream)]/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
          <Link
            href="#inicio"
            className="flex shrink-0 items-center gap-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sage)]"
            onClick={() => setOpen(false)}
          >
            <Image
              src={imagePaths.logoHeader}
              alt={`${siteConfig.name} — ${siteConfig.profession}`}
              width={160}
              height={48}
              className="h-10 w-auto sm:h-11"
              priority
            />
          </Link>

          <nav
            className="hidden items-center gap-8 font-sans text-sm font-medium text-[var(--color-ink)] md:flex"
            aria-label="Principal"
          >
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-1 py-1 text-[var(--color-muted)] transition-colors hover:text-[var(--color-sage-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sage)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href={waHref} external variant="primary" className="!px-5">
              Agendar
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-[var(--color-ink)] hover:bg-[var(--color-rose)]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sage)] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Abrir menu</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`border-t border-[var(--color-border)]/60 md:hidden ${open ? "block pb-4" : "hidden"}`}
        >
          <nav
            className="flex flex-col gap-1 pt-3 font-sans text-sm font-medium"
            aria-label="Mobile"
          >
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-[var(--color-ink)] hover:bg-[var(--color-rose)]/15"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <Button
                href={waHref}
                external
                variant="primary"
                className="w-full"
              >
                Agendar no WhatsApp
              </Button>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
