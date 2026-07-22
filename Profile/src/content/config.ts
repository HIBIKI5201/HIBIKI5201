// Astroの「Content Collections」機能の設定ファイル。
//
// Content Collectionsとは: `src/content/<コレクション名>/` フォルダに
// Markdownファイル（frontmatter付き）を並べておくと、Astroがそれらを
// 「決められた型・スキーマを満たすデータの集合」として読み込んでくれる仕組み。
// ここで定義したスキーマ(zodによる型定義)に反した内容のMarkdownがあると、
// ビルド時にエラーとして検出できるので、うっかりtypoしたfrontmatterに気づける。
//
// 実際にデータを取得する側では `import { getCollection } from "astro:content"` を使い、
// 例えば `getCollection("projects")` と書くと
// `src/content/projects/*.md` のfrontmatterがすべてオブジェクトの配列として返ってくる。
// （利用例: src/pages/projects/index.astro など）
import { defineCollection, z } from 'astro:content';

// 「projects」コレクション = ポートフォリオに載せる個々の制作物(ゲーム)のデータ。
// 実体は src/content/projects/project-001.md のようなファイル群。
const projects = defineCollection({
  type: 'content', // Markdown本文(frontmatter以外の部分)を持つコレクションであることを示す
  schema: z.object({
    // z.string() = 文字列必須、.optional() = 未指定でもOK、という具合にzodで型と必須/任意を表現する。
    projectCode: z.string().nullable().optional(), // 例: "PROJECT-013"
    title: z.string(),
    date: z.string(),
    stack: z.array(z.string()),        // 使用エンジン・言語 (例: ["Unity", "C#"])
    technologies: z.array(z.string()), // 使用技術 (例: ["Clean Architecture"])
    tools: z.array(z.string()).optional(),
    productionType: z.enum(['SOLO', 'TEAM', 'OTHER']), // 決まった値しか許さない列挙型
    isPickup: z.boolean().default(false), // 未指定ならfalse扱い(トップページで強調表示するかどうか)
    description: z.string(),
    overview: z.string().optional(),
    thumbnail: z.string().optional(),
    // z.union([...]) = 複数の型のどれかであればOK。URL形式の文字列 か 空文字 か、を許容している。
    videoUrl: z.union([z.string().url(), z.literal("")]).nullable().optional(),
    releaseUrl: z.union([z.string().url(), z.literal("")]).nullable().optional(),
    repoUrl: z.union([z.string().url(), z.literal("")]).nullable().optional(),
  }),
});

// 「trackrecords」コレクション = 受賞歴・実績(Achievements)のデータ。
// 実体は src/content/trackrecords/award-001.md のようなファイル群。
const trackrecords = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.string(), // YYYY-MM-DD or similar for sorting
    title: z.string(),
    description: z.string(),
    grantor: z.string(), // 授賞元
    image: z.string().optional(),
  }),
});

// ここでエクスポートしたキー名("projects" / "trackrecords")が、
// getCollection("projects") のように呼び出す際の名前になる。
export const collections = { projects, trackrecords };
