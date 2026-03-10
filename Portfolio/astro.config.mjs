import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://hibiki5201.github.io',
  base: '/Portfolio', 
  trailingSlash: 'always', // URLの最後に必ず / を付ける設定
  build: {
    format: 'directory', // 各ページをフォルダ/index.html の形式で出力する設定
  }
});
