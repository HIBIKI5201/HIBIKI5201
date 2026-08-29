# AGENTS.md — HIBIKI5201

`HIBIKI5201/HIBIKI5201`。プロフィールサイトと、技術記事の置き場を兼ねるリポジトリ。

## 0. 作業内容ごとの参照先

| やること | 読むもの |
| --- | --- |
| 技術記事を書く・投稿する（Qiita / note） | [Articles/.claude/skills/tech-article/SKILL.md](./Articles/.claude/skills/tech-article/SKILL.md)。題材決め → 骨子 → 本文 → コードの突き合わせ → 公開前チェック → 投稿。常時ルールは [Articles/AGENTS.md](./Articles/AGENTS.md) |
| プロフィールサイトを変更する | `Profile/`（Astro）。`main` への push で GitHub Pages へデプロイされる（`.github/workflows/AstroBuilder.yaml`） |
| ロゴを変更する | `Logo/` |

## 1. 構成

| パス | 種別 | 備考 |
| --- | --- | --- |
| `Profile/` | Astro のサイト | ビルド対象。`npm ci && npm run build` |
| `Logo/` | ロゴ素材 | |
| `Articles/` | **submodule** | `HIBIKI5201/TechArticles`（private）。記事の原稿と投稿スクリプト |

- クローンは `git clone --recurse-submodules`。忘れた場合は `git submodule update --init --recursive`。
- **`Articles/` は private リポジトリです。** 権限が無い環境では submodule の取得だけが失敗し、サイトのビルドには影響しません（CI は submodule を取得しない）。
- **記事の変更は submodule 側でコミットして push してから**、親リポジトリで gitlink の更新をコミットします。

## 2. 常時守ること

- **記事のために題材側のリポジトリのコードを変更しない。** 一次資料として読むだけ。
- **記事の投稿はエージェントが `--dry-run` までを行い、実投稿は人間の指示があるときだけ。** 詳細は [Articles/AGENTS.md](./Articles/AGENTS.md)。
- `Profile/` を変更したら、`main` への push が公開デプロイであることを意識する。作業は `dev` で行う。
