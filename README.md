# Astro Landing Kit

[![CI](https://github.com/loSpaccaBit/astro-landing-kit/actions/workflows/ci.yml/badge.svg)](https://github.com/loSpaccaBit/astro-landing-kit/actions/workflows/ci.yml)
[![Deploy](https://github.com/loSpaccaBit/astro-landing-kit/actions/workflows/pages.yml/badge.svg)](https://github.com/loSpaccaBit/astro-landing-kit/actions/workflows/pages.yml)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-blue)](https://lospaccabit.github.io/astro-landing-kit/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A collection of **high-converting, accessible and fast landing page templates** built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com) and [TypeScript](https://www.typescriptlang.org).

Every template is optimized for **Core Web Vitals**, **SEO** and **accessibility** out of the box.

## Live demo

🚀 [lospaccabit.github.io/astro-landing-kit](https://lospaccabit.github.io/astro-landing-kit/)

| Template | Description | Preview |
|----------|-------------|---------|
| **SaaS Starter** | Clean, conversion-focused landing page for SaaS products. | [`/saas-starter`](https://lospaccabit.github.io/astro-landing-kit/saas-starter) |
| **Product Launch** | Early-access page designed to capture waitlist signups. | [`/product-launch`](https://lospaccabit.github.io/astro-landing-kit/product-launch) |
| **Agency & Services** | Professional page for agencies, consultancies and service businesses. | [`/agency-services`](https://lospaccabit.github.io/astro-landing-kit/agency-services) |

## Features

- ⚡ **Astro 6** with static site generation and zero JavaScript by default
- 🎨 **Tailwind CSS 4** with a customizable design-token system
- 🔒 **TypeScript** in strict mode
- 📄 **Content Collections** for template configuration and validation with Zod
- 🔍 **SEO ready**: sitemap, canonical URLs, Open Graph, Twitter Cards, JSON-LD
- ♿ **Accessible**: semantic HTML, focus states, reduced-motion support
- 🌓 **Dark-mode ready** design tokens
- 🧪 **Vitest** for unit tests
- 🚀 **CI/CD** with GitHub Actions
- 🌐 **Hosted on GitHub Pages**

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | Astro 6 |
| Language | TypeScript 5+ |
| Styling | Tailwind CSS 4 |
| Icons | SVG / Lucide Astro |
| Schema | Zod |
| Testing | Vitest |
| CI/CD | GitHub Actions |
| Deploy | GitHub Pages |

## Project structure

```
astro-landing-kit/
├── .github/                 # Workflows, issue templates, funding
├── .github/workflows/       # CI/CD pipelines
├── public/                  # Static assets (favicon, robots.txt, images)
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer, Container
│   │   ├── sections/        # Hero, Features, CTA, etc.
│   │   └── ui/              # Button, Card, Badge atoms
│   ├── content/
│   │   ├── config.ts        # Zod schemas for templates
│   │   └── templates/       # JSON data for each template
│   ├── layouts/
│   │   └── Layout.astro     # Root layout with SEO meta tags
│   ├── pages/
│   │   ├── index.astro      # Template showcase
│   │   └── [template].astro # Dynamic template renderer
│   ├── styles/
│   │   └── global.css       # Tailwind entry + design tokens
│   ├── types/
│   │   └── index.ts         # Shared TypeScript types
│   └── utils/
│       └── seo.ts           # SEO helpers
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## Getting started

### Prerequisites

- Node.js 22+
- pnpm 9+

### Install

```bash
git clone https://github.com/loSpaccaBit/astro-landing-kit.git
cd astro-landing-kit
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321).

### Build

```bash
pnpm build
```

### Lint & type check

```bash
pnpm lint        # astro check
pnpm type-check  # tsc --noEmit
```

### Tests

```bash
pnpm test
```

## Customizing a template

Templates are defined as JSON files in `src/content/templates/`. Each template follows the Zod schema declared in `src/content/config.ts`.

To add a new template:

1. Create `src/content/templates/my-template.json`.
2. Fill in `title`, `description`, `category`, `hero`, `features`, etc.
3. Run `pnpm dev` and visit `/my-template`.

## Deployment

### GitHub Pages (recommended)

The repository includes a [GitHub Actions workflow](.github/workflows/pages.yml) that builds and deploys the site to GitHub Pages on every push to `main`.

1. Fork or clone the repository on GitHub.
2. Go to **Settings → Pages** and set the source to **GitHub Actions**.
3. Push to `main`. The workflow will publish the site to `https://<username>.github.io/astro-landing-kit/`.

### Vercel / Netlify / Cloudflare Pages

The project is static and can be deployed to any static host. Build command: `pnpm build`, output directory: `dist`.

## Roadmap

- [ ] Dark mode toggle
- [ ] Additional sections (Team, Contact, Blog)
- [ ] More templates (Personal Brand, E-commerce, Event)
- [ ] Lighthouse CI integration
- [ ] Storybook for UI components

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before contributing.

## License

[MIT](LICENSE) © Francesco Nocerino

---

Built with ❤️ by [loSpaccaBit](https://github.com/loSpaccaBit).
