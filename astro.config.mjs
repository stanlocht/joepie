// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://stanlocht.github.io',
  base: isProd ? '/joepie' : '/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
