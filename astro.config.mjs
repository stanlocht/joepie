// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://stanlocht.github.io',
  base: process.env.GITHUB_PAGES === 'true' ? '/joepie' : '/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
