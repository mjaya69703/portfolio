// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import robots from 'astro-robots';

// https://astro.build/config
export default defineConfig({
  site: 'https://ascendkyo.dev',
  logging: {
    level: 'warn',
  },
  vite: {
    plugins: [tailwindcss()],
    logLevel: 'warn',
  },

  integrations: [mdx(), sitemap(), robots()]
});