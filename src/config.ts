/**
 * 站点级配置 —— 品牌、域名、联系方式的唯一来源。
 *
 * 改动品牌或域名时只改这里，避免像模板原版那样在 5 个文件里各写一遍。
 * 注意：astro.config.mjs 的 site 与此处的 url 需保持一致（构建期配置无法读取本文件）。
 */
export const site = {
  /** 生产域名，末尾不带斜杠 */
  url: "https://xycat.com",

  /** 英文品牌，全大写，作为字标使用 */
  name: "XIYUE",
  /** 中文品牌，仅中文语境出现 */
  nameCn: "喜阅",

  /** 定位，用于 eyebrow / 结构化数据 */
  positioning: "Creator AI Tools",
  /** 品牌核心句 */
  tagline: "AI tools for people who make things.",

  /** 全站默认描述，页面可覆盖 */
  description:
    "XIYUE makes AI tools for creators: draft scripts, edit video by transcript, generate visuals, and publish from one place. Free to try, no card.",

  /** 公开联系邮箱 —— TODO: 确认后替换 */
  email: "hello@xycat.com",
  /** X / Twitter 账号 —— TODO: 替换为真实账号，模板原值指向模板作者 */
  twitter: "@xiyue",

  /** 默认分享图，1200×630，位于 public/ */
  ogImage: "/opengraph.jpg",
} as const;

/** 主导航。children 存在时渲染为下拉。 */
export interface NavItem {
  title: string;
  path: string;
  children?: { title: string; path: string }[];
}

export const navigation: NavItem[] = [
  {
    title: "Product",
    path: "/#features",
    children: [
      { title: "Write", path: "/#features" },
      { title: "Visuals", path: "/#features" },
      { title: "Video", path: "/#features" },
      { title: "Voice", path: "/#features" },
    ],
  },
  { title: "Pricing", path: "/pricing" },
  { title: "About", path: "/about" },
  { title: "Blog", path: "/blog" },
  { title: "Contact", path: "/contact" },
];

/** 页脚栏位 */
export const footerNav: { title: string; items: { title: string; path: string }[] }[] = [
  {
    title: "Product",
    items: [
      { title: "Tools", path: "/#features" },
      { title: "Pricing", path: "/pricing" },
    ],
  },
  {
    title: "Company",
    items: [
      { title: "About", path: "/about" },
      { title: "Blog", path: "/blog" },
      { title: "Contact", path: "/contact" },
    ],
  },
];
