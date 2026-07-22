import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hibiki5201.github.io',
  base: '/HIBIKI5201', // リポジトリ名に合わせて修正
  trailingSlash: 'always',
  build: {
    format: 'directory',
  }
});
