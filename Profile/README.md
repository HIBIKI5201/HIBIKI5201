# Profile

八幡拓音の個人プロフィールサイト。[Astro](https://astro.build)というフレームワークで作られた静的サイトです。

このREADMEは、Astroを触ったことがない人でもこのリポジトリの構成が分かるように書いています。

## Astroとは(超概要)

- **静的サイトジェネレーター**。`npm run build` を実行すると、React/Vueのような重いJavaScriptをブラウザに送らずに、完成された素のHTML/CSSファイル一式(`dist/`フォルダ)を書き出す。
- コンポーネントは `.astro` という独自の拡張子のファイルで書く。1つの `.astro` ファイルは
  1. 上部の `---` で囲まれたブロック(フロントマター) = **ビルド時にだけ実行されるJS/TS**
  2. その下のHTMLっぽい部分(テンプレート) = 実際に出力される見た目
  3. 任意で `<script>` タグ = **ブラウザ側で動くJS**(クリック操作などインタラクティブな処理はここに書く)
  4. 任意で `<style>` タグ = そのコンポーネント専用のCSS(自動でクラス名がスコープされ、他とぶつからない)

  という4つのパートからできている。詳しい説明は各ファイル内のコメントにも書いてあるので、
  実際のコード(特に `src/components/Header.astro` や `src/pages/projects/[slug].astro`)を
  読みながら確認するのがおすすめ。

- `src/pages/` フォルダの中のファイルパスが、そのままサイトのURLになる(ファイルベースルーティング)。
  例: `src/pages/projects/index.astro` → `/projects/`

## プロジェクト構成

```text
Profile/
├── astro.config.mjs        # サイト全体の設定(公開URL、ベースパスなど)
├── package.json
├── public/                 # そのままの形で配信される静的ファイル
│   ├── favicon.svg / favicon.ico
│   └── images/
│       ├── project/        # プロジェクト(ゲーム)のサムネイル画像
│       └── record/         # 実績・受賞歴の画像(賞状など)
└── src/
    ├── content/             # Content Collections(型付きのMarkdownデータ)
    │   ├── config.ts        # コレクションのスキーマ(データの形)定義
    │   ├── projects/        # プロジェクト1件 = 1つの.mdファイル
    │   └── trackrecords/    # 受賞歴1件 = 1つの.mdファイル
    ├── layouts/
    │   └── Layout.astro     # 全ページ共通の<html>骨組み・グローバルCSS・ヘッダー配置
    ├── components/           # ページを組み立てる部品(コンポーネント)
    │   ├── Header.astro      # 固定ヘッダー(ロゴ・ナビゲーション)
    │   ├── PageToc.astro      # ページ内Sticky目次(スクロール連動ハイライト付き)
    │   ├── Hero.astro         # トップページ最上部の自己紹介
    │   ├── Profile.astro      # 興味・スキル・好きなゲームなど
    │   ├── MissionArchive.astro # トップページの「注目プロジェクト(PICKUP)」
    │   ├── TrackRecord.astro  # 実績・受賞歴セクション(クリックでモーダル表示)
    │   ├── Career.astro       # 職歴
    │   └── Footer.astro       # フッター
    └── pages/
        ├── index.astro                # トップページ("/")
        └── projects/
            ├── index.astro            # プロジェクト一覧("/projects/")
            └── [slug].astro           # プロジェクト詳細(動的ルート。1ファイルで全プロジェクト分のページを生成)
```

`src/components/Welcome.astro` と `src/components/Deployment.astro` は、Astroのテンプレート(`npm create astro`)
作成時に付属するサンプルファイルで、どこからも読み込まれていない未使用ファイルです。

## ページの中身をどう変えるか

### プロジェクト(ゲーム作品)を追加・編集したい

`src/content/projects/` に `project-XXX.md` を追加/編集する。frontmatter(`---`で囲まれた部分)の
書き方は `src/content/config.ts` の `projects` スキーマで決まっている。主な項目:

| 項目 | 内容 |
| :--- | :--- |
| `projectCode` | 表示される管理番号(例: "PROJECT-013") |
| `title` / `date` / `description` | タイトル・制作期間・一言説明 |
| `stack` / `technologies` / `tools` | 使用エンジン・技術・ツール(タグとして表示) |
| `productionType` | `"SOLO"` / `"TEAM"` / `"OTHER"` |
| `isPickup` | `true` にするとトップページ・一覧の特別枠(PICKUP)に表示される |
| `thumbnail` / `videoUrl` / `releaseUrl` / `repoUrl` | サムネイル画像・デモ動画・公開URL・リポジトリURL |

本文(frontmatterより下のMarkdown)に `## overview` という見出しを書くと、その直後の文章が
詳細ページ上部の「OVERVIEW」欄に表示される。それ以外の見出し(`#`や`##`)は自動的にページ内目次の
項目としても認識される。

画像は `public/images/project/` に置き、`thumbnail: "/images/project/ファイル名.png"` のように指定する。

### 受賞歴・実績を追加したい

`src/content/trackrecords/` に `award-XXX.md` を追加する。項目は `date` / `title` / `description` /
`grantor`(授与元) / `image`。画像は `public/images/record/` に置く。

### プロフィール本文(自己紹介・スキルなど)を変えたい

`src/components/Hero.astro`(名前・所属)、`Profile.astro`(興味・スキル・好きなゲーム)、
`Career.astro`(職歴)を直接編集する。これらは外部データを読み込まない、素のHTML+テキストのコンポーネント。

## スタイリングの方針

- CSSフレームワーク(Tailwindなど)は使わず、各コンポーネントの `<style>` タグにプレーンCSSを書くAstro標準の
  やり方に統一している。
- 色・フォントなどの共通値は `src/layouts/Layout.astro` の `:root { --accent-color: ...; }` で
  CSSカスタムプロパティとして定義し、他のコンポーネントから `var(--accent-color)` の形で参照する。
- ページによって微妙に色味を変えたい場合は、そのページの `<style>` 内で
  `:where(.何かのクラス) { --accent-color: 別の値; }` のように上書きしている
  (例: `src/pages/projects/index.astro`)。
- `.mil-border` クラス(`Layout.astro`で定義)は、四隅に鉤(かぎ)括弧の装飾が付いた枠線の共通スタイル。
  サイト内の多くのカード・パネルで使い回している。

## 開発コマンド

すべてこのフォルダ(`Profile/`)の直下で実行する。

| コマンド | 内容 |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | 依存パッケージのインストール(初回のみ) |
| `npm run dev`             | 開発サーバーを起動 (`http://localhost:4321`) |
| `npm run build`           | 本番用に `./dist/` へビルド |
| `npm run preview`         | ビルド結果をローカルでプレビュー |

## 公開・デプロイ

`main` ブランチに push すると、`.github/workflows/AstroBuilder.yaml` のGitHub Actionsが自動で
`npm run build` を実行し、GitHub Pages ( `https://hibiki5201.github.io/HIBIKI5201/` ) に公開する。

`astro.config.mjs` の `base: '/HIBIKI5201'` は、GitHub Pagesがリポジトリのサブパスにサイトをホストするための
設定。ローカルで `npm run dev` したときも `http://localhost:4321/HIBIKI5201/` を開く必要がある
(`http://localhost:4321/` だけだと404になる)。
