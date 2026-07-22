// Astroプロジェクト全体の設定ファイル。
// このファイルはビルド/開発サーバー起動時に一度だけ読み込まれ、
// サイト全体に関わる設定（デプロイ先のURLや出力形式など）をまとめて指定する。
import { defineConfig } from 'astro/config';

export default defineConfig({
  // 本番公開時の完全なURL。sitemapや正規URLの生成に使われる。
  site: 'https://hibiki5201.github.io',

  // GitHub Pagesはユーザーサイトではなく「プロジェクトページ」として公開されるため、
  // 実際のURLは https://hibiki5201.github.io/HIBIKI5201/ のようにリポジトリ名がパスに入る。
  // そのため全ページ・全リンクの先頭に自動で "/HIBIKI5201" を付け足す必要があり、それがこの設定。
  // コード中で `import.meta.env.BASE_URL` として参照している値はここで決まる。
  base: '/HIBIKI5201', // リポジトリ名に合わせて修正

  // true にすると生成されるURLの末尾に必ず "/" が付く（例: /projects/ ）。
  // 末尾スラッシュの有無でリンクが一致せず404になる事故を防ぐため、常に統一している。
  trailingSlash: 'always',

  build: {
    // 'directory' にすると、例えば /projects/ページは
    // dist/projects/index.html として出力される（'file'だと dist/projects.html になる）。
    // 上のtrailingSlash設定と組み合わせて、静的ホスティングでも
    // ディレクトリ形式のURLがそのまま機能するようにしている。
    format: 'directory',
  }
});
