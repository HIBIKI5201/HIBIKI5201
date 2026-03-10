import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hibiki5201.github.io',
  base: '/', 
  trailingSlash: 'always',
  build: {
    format: 'directory',
  }
});
