// 2026-10-23 - XIYUE rebrand: 新增品牌与站点配置的单一来源。
// 原模板把站名、域名、导航散落在 navbar / footer / Layout / astro.config 四处，
// 改一次品牌要翻五个文件且容易漏改。此处集中后，组件只消费不定义。
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
    "XIYUE builds three live tools for creators: real-time translation, an adaptive teleprompter, and automated stream recording. Free to try.",

  /** 公开联系邮箱 */
  email: "hello@xycat.com",
  /**
   * X / Twitter 账号。2026-10-23 - 模板原值 @surjithctly（模板作者）已移除；
   * 留空则不输出 twitter:creator / twitter:site，避免分享时 @ 到无关账号。
   * 拿到真实账号后填入，如 "@xiyue"。
   */
  twitter: "",

  /** 默认分享图，1200×630，位于 public/ */
  ogImage: "/opengraph.jpg",
} as const;

/** 主导航。children 存在时渲染为下拉。 */
export interface NavItem {
  title: string;
  path: string;
  children?: { title: string; path: string }[];
}

// 2026-10-24 - 产品线收敛为三大直播工具 Translate / Prompter / Recorder。
// 下拉项与页脚 Product 栏共用此定义，避免两处各写一份导致信息架构漂移。
export const navigation: NavItem[] = [
  {
    title: "Product",
    path: "/#features",
    children: [
      { title: "Translate", path: "/#translate" },
      { title: "Prompter", path: "/#prompter" },
      { title: "Recorder", path: "/#recorder" },
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
      { title: "Translate", path: "/#translate" },
      { title: "Prompter", path: "/#prompter" },
      { title: "Recorder", path: "/#recorder" },
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
