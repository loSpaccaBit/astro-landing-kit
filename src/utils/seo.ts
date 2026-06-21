import type { SiteConfig, PageMeta, JsonLdEntity } from '@/types';

const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://astro-landing-kit-demo.vercel.app';

export const siteConfig: SiteConfig = {
  name: 'Astro Landing Kit',
  tagline: 'High-converting, accessible landing page templates built with Astro.',
  url: siteUrl,
  defaultImage: '/og-default.png',
  twitterHandle: '@loSpaccaBit',
};

export function createPageMeta(options: Partial<PageMeta> & { title: string; description: string }): PageMeta {
  return {
    title: options.title,
    description: options.description,
    canonical: options.canonical,
    image: options.image ?? siteConfig.defaultImage,
    imageAlt: options.imageAlt ?? options.title,
    type: options.type ?? 'website',
    noindex: options.noindex ?? false,
  };
}

export function formatTitle(title: string): string {
  if (title === siteConfig.name) return title;
  return `${title} · ${siteConfig.name}`;
}

export function jsonLdScript(entity: JsonLdEntity) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    ...entity,
  });
}
