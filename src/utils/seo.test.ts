import { describe, it, expect } from 'vitest';
import { createPageMeta, formatTitle, siteConfig, jsonLdScript } from './seo';

describe('SEO utilities', () => {
  it('creates page meta with defaults', () => {
    const meta = createPageMeta({
      title: 'Test Page',
      description: 'A test page description.',
    });

    expect(meta.title).toBe('Test Page');
    expect(meta.description).toBe('A test page description.');
    expect(meta.image).toBe(siteConfig.defaultImage);
    expect(meta.type).toBe('website');
    expect(meta.noindex).toBe(false);
  });

  it('formats page titles', () => {
    expect(formatTitle('Home')).toBe(`Home · ${siteConfig.name}`);
    expect(formatTitle(siteConfig.name)).toBe(siteConfig.name);
  });

  it('serializes JSON-LD entities', () => {
    const json = jsonLdScript({
      '@type': 'WebSite',
      name: 'Astro Landing Kit',
      url: 'https://example.com',
      description: 'Test site',
    });

    expect(json).toContain('https://schema.org');
    expect(json).toContain('Astro Landing Kit');
  });
});
