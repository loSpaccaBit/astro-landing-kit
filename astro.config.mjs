// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const siteUrl =
  process.env.PUBLIC_SITE_URL ||
  (isGitHubPages
    ? 'https://lospaccabit.github.io/astro-landing-kit/'
    : 'https://astro-landing-kit-demo.vercel.app');
const basePath = isGitHubPages ? '/astro-landing-kit' : undefined;

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  ...(basePath && { base: basePath }),
  output: 'static',
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],

  image: {
    remotePatterns: [{ protocol: 'https' }],
  },

  build: {
    format: 'directory',
  },
});
