export interface SiteConfig {
  name: string;
  tagline: string;
  url: string;
  defaultImage: string;
  twitterHandle: string;
}

export interface PageMeta {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

export type JsonLdEntity =
  | { '@type': 'WebSite'; name: string; url: string; description: string }
  | { '@type': 'WebPage'; name: string; description: string; url: string };

export type DesignSystem = 'kinetic-slate' | 'neon-surge' | 'editorial-warmth';

export interface TemplateFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface TemplateStep {
  title: string;
  description: string;
}

export interface TemplateStat {
  value: string;
  label: string;
}

export interface TemplateTestimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

export interface TemplatePricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface TemplateFaq {
  question: string;
  answer: string;
}

export interface TemplateCta {
  title: string;
  subtitle: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
}
