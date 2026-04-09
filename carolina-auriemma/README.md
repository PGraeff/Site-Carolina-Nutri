# Carolina Auriemma — Landing page

Site institucional em uma página (landing) para a nutricionista **Carolina Auriemma**, com foco em conversão para **WhatsApp**. Stack: **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, conteúdo estático (sem backend, CMS ou banco).

## Requisitos

- Node.js 20+ (recomendado)
- npm

## Instalação e desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm start
```

## Deploy na Vercel

1. Envie este repositório para o GitHub (a pasta `carolina-auriemma` é a **raiz do projeto** e já contém o Git inicializado).
2. Em [vercel.com](https://vercel.com), importe o repositório.
3. **Root Directory:** deixe em branco se o repositório contiver só este projeto; se o repositório for a pasta pai, defina `carolina-auriemma` como diretório raiz do projeto na Vercel.
4. Framework Preset: Next.js (detectado automaticamente).
5. Não são obrigatórias variáveis de ambiente na V1.

### Domínio customizado

Depois do deploy, em **Project → Settings → Domains**, adicione o domínio comprado e siga as instruções de DNS da Vercel.

### URL absoluta para Open Graph (opcional)

Para metadados sociais com URL canônica correta, defina na Vercel (ou em `.env.local`):

`NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br`

Se não definir, em produção na Vercel o layout usa `VERCEL_URL` automaticamente.

## Onde editar conteúdo e negócio

| O quê | Onde |
|--------|------|
| Textos, planos, links, WhatsApp, Instagram, e-mail, CRN, trust chips | `lib/site-config.ts` |
| Preço no card (opcional) | Em cada plano, campo `priceLabel` (ex.: `"R$ 250,00"`) — se omitido, o valor não aparece |
| **CRN** | Campo `crn` em `site-config.ts` (ex.: `CRN 12345/SP`) — aparece no hero (chip), rodapé, contato e “Sobre” |
| URLs do WhatsApp com mensagem | `lib/whatsapp.ts` + `lib/contact.ts` |
| Fotos e logos | `public/images/` e os campos em `imagePaths` em `lib/site-config.ts` |
| SEO (título, descrição, OG) | `siteMetadata` em `lib/site-config.ts` e `app/layout.tsx` (`metadataBase`) |

### Imagens

Arquivos atuais (podem ser substituídos mantendo o nome ou atualizando `imagePaths`):

- `carolina-hero.png` — hero
- `carolina-about.png` — sobre
- `logo-light-bg.png` — cabeçalho/rodapé
- `logo-circular.png` — favicon / referência
- Outras variantes de logo na mesma pasta

### WhatsApp

- **CTAs gerais** (hero, cabeçalho, contato, botão flutuante): usa `whatsappQuickChatUrl` em `site-config.ts` quando preenchido; caso contrário, `wa.me` + `whatsappPhone` + `whatsappDefaultMessage`.
- **Cards de planos**: sempre `wa.me` + número + mensagem específica do plano.

## Estrutura de pastas

```
app/
  layout.tsx      # Fontes, metadata, idioma pt-BR
  page.tsx        # Composição das seções
  globals.css     # Tema de cores e tipografia
components/
  layout/         # Header, Footer, botão flutuante
  sections/       # Hero, About, Plans, HowItWorks, Contact
  ui/             # Button, Container, SectionTitle, PlanCard
lib/
  site-config.ts  # Dados centralizados
  whatsapp.ts     # Montagem de links wa.me
  contact.ts      # Links de contato geral
public/
  images/         # Fotos e logos
```

## Scripts

- `npm run dev` — desenvolvimento
- `npm run build` — build de produção
- `npm run start` — servidor após build
- `npm run lint` — ESLint

## Próximas evoluções (fora do escopo V1)

Depoimentos, FAQ, blog, formulários, analytics e páginas internas podem ser acrescentados sem mudar a base estática.

---

Desenvolvido como landing page premium, responsiva e pronta para GitHub + Vercel.
