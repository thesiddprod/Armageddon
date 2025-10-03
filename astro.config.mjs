// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  // Tailwind v3 is configured via PostCSS (see postcss.config.cjs) and tailwind.config.mjs
});