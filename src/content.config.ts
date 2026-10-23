import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * 内容集合定义。
 *
 * 图片使用 Astro 内置的 image() 助手：frontmatter 中的路径需相对内容文件，
 * 构建时会自动优化并输出多尺寸。例：image: "../../assets/blog/cover.jpg"
 * 不要再用外链 URL —— 构建期抓取第三方图片会引入可用性风险。
 */
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().default(false),
      title: z.string(),
      /** 列表页摘要，控制在 155 字符内，同时作为 meta description */
      snippet: z.string(),
      image: image().optional(),
      publishDate: z.coerce.date(),
      author: z.string().default("XIYUE"),
      category: z.string(),
      tags: z.array(z.string()).default([]),
    }),
});

const teamCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/team" }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().default(false),
      name: z.string(),
      title: z.string(),
      avatar: image(),
      publishDate: z.coerce.date(),
    }),
});

export const collections = {
  blog: blogCollection,
  team: teamCollection,
};
