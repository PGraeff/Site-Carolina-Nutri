import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "@/lib/site-config";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const metadataBaseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  ...siteMetadata,
  metadataBase: new URL(metadataBaseUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${montserrat.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[var(--color-cream)] font-sans text-[var(--color-ink)]">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18159204384"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18159204384');

            window.gtag_report_conversion = function(url) {
              var callback = function () {
                if (typeof url !== 'undefined') {
                  window.location = url;
                }
              };

              gtag('event', 'conversion', {
                send_to: 'AW-18159204384/NCeACJWilawcEKDw_dJD',
                value: 1.0,
                currency: 'BRL',
                event_callback: callback
              });

              return false;
            };
          `}
        </Script>
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[var(--color-ink)] focus:shadow-lg focus:outline focus:outline-2 focus:outline-[var(--color-sage)]"
        >
          Ir para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
