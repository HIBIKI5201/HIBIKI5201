import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://hibiki5201.github.io',
  base: '/', // ユーザーページ（hibiki5201.github.io/）として公開するため、ルートに変更
  trailingSlash: 'always',
  build: {
    format: 'directory',
  }
});
