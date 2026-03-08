// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://stanlocht.github.io',
  base: '/joepie',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
