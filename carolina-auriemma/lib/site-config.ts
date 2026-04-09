import type { Metadata } from "next";

export type NavItem = { label: string; href: string };

export type AboutHighlight = { title: string; description: string };

export type TrustItem = { label: string };

export type Plan = {
  id: string;
  name: string;
  tagline: string;
  /** Opcional — ex.: "R$ 250,00" quando quiser exibir preço no card */
  priceLabel?: string;
  features: string[];
  recommendedFor: string;
  /** When true, card shows a “Recomendado” badge */
  recommended: boolean;
  ctaLabel: string;
  whatsappMessage: string;
};

export type HowItWorksStep = {
  step: number;
  title: string;
  description: string;
};

/** Paths under /public — swap files here without touching components */
export const imagePaths = {
  hero: "/images/carolina-hero.png",
  about: "/images/carolina-about.png",
  /** Optional second portrait; used in hero on large screens if desired */
  portraitAlt: "/images/carolina-portrait-2.png",
  logoHeader: "/images/logo-light-bg.png",
  /** Decorative / OG fallback */
  logoMark: "/images/logo-circular.png",
} as const;

export const siteConfig = {
  name: "Carolina Auriemma",
  profession: "Nutricionista",
  city: "São Paulo, SP",
  serviceMode: "Atendimento online e presencial",
  /**
   * Registro no Conselho Regional de Nutricionistas (ex.: "CRN 12345/SP").
   * Aparece no hero (chip), rodapé e contato quando preenchido.
   */
  crn: "CRN-381894",

  instagramUrl: "https://www.instagram.com/nutri.carolauriemma",
  email: "nutri.carolauriemma@gmail.com",
  /** DDI + DDD + número, só dígitos */
  whatsappPhone: "5511939454599",
  /**
   * Link direto de conversa (WhatsApp). Usado no botão flutuante e CTAs gerais
   * quando não há mensagem personalizada.
   */
  whatsappQuickChatUrl: "https://wa.me/message/KCWUZKTYUV2MO1",
  whatsappDefaultMessage:
    "Olá, Carolina! Gostaria de agendar uma consulta.",

  headline:
    "Nutrição personalizada para uma rotina mais leve, equilibrada e sustentável.",
  subheadline:
    "Acompanhamento nutricional individualizado para quem quer emagrecer, melhorar a alimentação e ter mais autonomia — sem culpa, sem extremismos e sem abrir mão da vida real.",

  taglineClosing:
    "Porque, no fim, dieta boa é aquela que cabe na sua vida.",

  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Planos", href: "#planos" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Contato", href: "#contato" },
  ] satisfies NavItem[],

  trustItems: [
    { label: "São Paulo, SP" },
    { label: "Online e presencial" },
  ] as TrustItem[],

  aboutIntro:
    "Oi! Eu sou a Carol, nutricionista apaixonada por ajudar pessoas a construírem uma relação mais leve e equilibrada com a alimentação.",

  aboutParagraphs: [
    "Acredito que alimentação saudável não precisa ser complicada, restritiva ou difícil de manter. Muito pelo contrário: ela precisa fazer sentido na sua rotina, respeitar sua realidade e caber na sua vida.",
    "Na minha prática, meu foco não é só montar um plano alimentar — é te ajudar a ter mais autonomia, entender suas escolhas e criar hábitos que realmente funcionem no longo prazo. Sem extremismos, sem culpa e sem aquele efeito sanfona que tanto frustra.",
    "Atendo pessoas que querem emagrecer, melhorar a alimentação e se sentir mais confiantes com o próprio corpo, mas sem abrir mão da vida social, da rotina corrida e do prazer de comer.",
    "Meu objetivo é simples: te mostrar que é possível ter resultado com leveza, constância e equilíbrio.",
  ],

  aboutHighlights: [
    {
      title: "Atendimento individualizado",
      description:
        "Plano e orientações pensados para a sua rotina, preferências e objetivos.",
    },
    {
      title: "Alimentação sem extremismos",
      description:
        "Sem culpa, sem mil regras impossíveis — foco no que é sustentável pra você.",
    },
    {
      title: "Hábitos na vida real",
      description:
        "Estratégias práticas para conciliar saúde, trabalho, social e descanso.",
    },
  ] satisfies AboutHighlight[],

  howItWorks: [
    {
      step: 1,
      title: "Escolha o plano ideal",
      description:
        "Compare os planos e veja qual faz mais sentido para o seu momento.",
    },
    {
      step: 2,
      title: "Fale comigo no WhatsApp",
      description:
        "Envie uma mensagem com seu interesse — respondo o quanto antes.",
    },
    {
      step: 3,
      title: "Agende sua consulta",
      description:
        "Combinamos data e formato (online ou presencial) e já começamos.",
    },
  ] satisfies HowItWorksStep[],

  plans: [
    {
      id: "basico",
      name: "Plano Básico",
      tagline: "Ideal pra quem quer começar e precisa de um direcionamento inicial.",
      features: [
        "1 consulta individual",
        "Suporte via WhatsApp em até 3 dias úteis",
        "Até 2 ajustes no plano alimentar",
        "Acesso ao app por 45 dias",
      ],
      recommendedFor:
        "Quem busca orientação pontual e já tem mais autonomia na rotina.",
      recommended: false,
      ctaLabel: "Quero agendar",
      whatsappMessage:
        "Olá, Carolina! Tenho interesse no Plano Básico e gostaria de agendar uma consulta.",
    },
    {
      id: "premium",
      name: "Plano Premium",
      tagline:
        "Pra quem quer acompanhamento mais próximo e ajustes ao longo do processo.",
      features: [
        "2 consultas (online ou presencial)",
        "Suporte via WhatsApp em até 1 dia útil",
        "Até 3 ajustes no plano alimentar",
        "Acesso ao app por 60 dias",
        'Material exclusivo de "redução de danos"',
      ],
      recommendedFor:
        "Quem quer evoluir com mais consistência e suporte.",
      recommended: true,
      ctaLabel: "Escolher este plano",
      whatsappMessage:
        "Olá, Carolina! Tenho interesse no Plano Premium e gostaria de agendar uma consulta.",
    },
    {
      id: "platinum",
      name: "Plano Platinum",
      tagline:
        "Acompanhamento completo, próximo e contínuo, com foco em resultado e constância.",
      features: [
        "5 consultas (online ou presencial)",
        "Suporte via WhatsApp no mesmo dia",
        "Ajustes ilimitados no plano alimentar",
        "Acesso ao app por 1 ano",
        "A cada 3 indicações, 1 consulta gratuita",
        'Material exclusivo de "redução de danos"',
      ],
      recommendedFor:
        "Quem quer transformar de vez a rotina alimentar com acompanhamento de verdade.",
      recommended: false,
      ctaLabel: "Falar no WhatsApp",
      whatsappMessage:
        "Olá, Carolina! Tenho interesse no Plano Platinum e gostaria de agendar uma consulta.",
    },
  ] satisfies Plan[],

  contact: {
    title: "Vamos conversar?",
    subtitle:
      "Agende sua consulta e comece a construir uma relação mais leve, possível e equilibrada com a alimentação.",
    primaryCta: "Agendar pelo WhatsApp",
  },

  footerNote: `© ${new Date().getFullYear()} Carolina Auriemma. Todos os direitos reservados.`,
} as const;

export const siteMetadata: Metadata = {
  title: "Carolina Auriemma | Nutricionista em São Paulo e Online",
  description:
    "Acompanhamento nutricional individualizado para quem busca uma relação mais leve e equilibrada com a alimentação. Consultas online e presenciais com foco em saúde, autonomia e resultados sustentáveis.",
  keywords: [
    "nutricionista",
    "São Paulo",
    "consulta nutricional",
    "emagrecimento",
    "alimentação saudável",
    "nutrição online",
  ],
  authors: [{ name: "Carolina Auriemma" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Carolina Auriemma | Nutricionista em São Paulo e Online",
    description:
      "Acompanhamento nutricional individualizado: leveza, equilíbrio e resultados sustentáveis — sem extremismos.",
    siteName: "Carolina Auriemma — Nutricionista",
    images: [
      {
        url: imagePaths.hero,
        width: 1200,
        height: 630,
        alt: "Carolina Auriemma, nutricionista",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carolina Auriemma | Nutricionista",
    description:
      "Nutrição personalizada para uma rotina mais leve, equilibrada e sustentável.",
    images: [imagePaths.hero],
  },
  icons: {
    icon: "/images/logo-circular.png",
    apple: "/images/logo-circular.png",
  },
};
