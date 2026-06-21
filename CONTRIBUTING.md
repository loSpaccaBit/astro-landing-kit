# Contributing to Astro Landing Kit

Thanks for your interest in contributing! This project is a collection of production-ready landing page templates built with Astro, Tailwind CSS and TypeScript.

## How to contribute

1. **Fork the repository** and create your branch from `main`.
2. **Install dependencies** with `pnpm install`.
3. **Make your changes** and ensure the project still builds and passes checks.
4. **Open a pull request** with a clear description of the change.

## Development workflow

```bash
pnpm dev       # Start the dev server
pnpm build     # Build for production
pnpm lint      # Astro check
pnpm type-check # TypeScript check
pnpm test      # Run unit tests
```

## Adding a new template

1. Create a new JSON file in `src/content/templates/`.
2. Follow the Zod schema in `src/content/config.ts`.
3. Add matching section components under `src/components/sections/` if the template uses a new design system.
4. Update `README.md` and the template showcase on the home page.

## Code style

- Use TypeScript strict mode.
- Keep components atomic and reusable.
- Maintain accessibility (WCAG 2.2 AA) and responsive behavior.
- Run Lighthouse audits before submitting visual changes.

## Reporting issues

Please use the [issue templates](https://github.com/loSpaccaBit/astro-landing-kit/issues/new/choose) and include reproduction steps when reporting bugs.
