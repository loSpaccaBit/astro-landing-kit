import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const templates = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/templates' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tagline: z.string(),
    category: z.enum(['saas', 'product', 'agency', 'personal']),
    designSystem: z.enum(['kinetic-slate', 'neon-surge', 'editorial-warmth']).default('kinetic-slate'),
    featured: z.boolean().default(false),
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
    hero: z.object({
      title: z.string(),
      subtitle: z.string(),
      primaryCta: z.object({ text: z.string(), href: z.string() }).optional(),
      secondaryCta: z.object({ text: z.string(), href: z.string() }).optional(),
      stats: z
        .array(
          z.object({
            value: z.string(),
            label: z.string(),
          })
        )
        .default([]),
    }),
    logos: z.array(z.string()).default([]),
    features: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      )
      .default([]),
    steps: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      )
      .default([]),
    testimonials: z
      .array(
        z.object({
          quote: z.string(),
          author: z.string(),
          role: z.string(),
          company: z.string().optional(),
        })
      )
      .default([]),
    pricing: z
      .array(
        z.object({
          name: z.string(),
          price: z.string(),
          description: z.string(),
          features: z.array(z.string()),
          cta: z.string(),
          highlighted: z.boolean().default(false),
        })
      )
      .default([]),
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .default([]),
    cta: z
      .object({
        title: z.string(),
        subtitle: z.string(),
        primaryCta: z.object({ text: z.string(), href: z.string() }).optional(),
        secondaryCta: z.object({ text: z.string(), href: z.string() }).optional(),
      })
      .optional(),
  }),
});

export const collections = {
  templates,
};
