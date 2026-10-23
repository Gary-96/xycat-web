# xycat.com — XIYUE

XIYUE（喜阅）官网。定位：Creator AI Tools。

静态站点，Astro 构建，部署在 aaPanel + 原生 Nginx。

- 生产域名：**https://xycat.com**
- 构建产物：`dist/`（纯静态，服务器无需 Node）

---

## 技术栈

| 组件 | 版本 | 用途 |
| --- | --- | --- |
| Astro | ^7.3.5 | 静态站点生成 |
| Tailwind CSS | ^4.3.3 | 样式（v4，走 Vite 插件） |
| @astrojs/mdx | ^8.0.2 | MDX 内容支持 |
| @astrojs/sitemap | ^3.7.4 | 构建期生成 sitemap |
| astro-seo | ^1.2.0 | meta / OG / Twitter 标签 |
| astro-icon | ^1.2.0 | 内联 SVG 图标 |
| astro-navbar | ^2.4.0 | 响应式导航 |

---

## 快速开始

```bash
pnpm install
cp .env.example .env      # 填入 PUBLIC_WEB3FORMS_KEY
pnpm dev                  # http://localhost:4321
pnpm build                # 输出到 dist/
pnpm preview              # 本地预览构建产物
```

质量检查：

```bash
pnpm check    # astro check（类型检查）
pnpm format   # prettier 格式化
```

---

## 目录结构

```
├── astro.config.mjs        # site 域名、构建格式、预取
├── deploy/
│   ├── nginx-xycat.com.conf   # aaPanel Nginx 配置（含 CUSTOM BLOCK）
│   └── DEPLOY.md              # 部署手册 + 验证清单
├── public/                 # favicon.svg · opengraph.jpg（不参与构建哈希）
└── src/
    ├── config.ts           # ★ 品牌、域名、导航、联系方式的唯一来源
    ├── types.ts            # 共享类型
    ├── assets/             # 参与优化的本地图片
    ├── components/
    ├── content/
    │   ├── blog/           # Markdown 文章
    │   └── team/           # 团队成员（当前为空，关于页会自动隐藏该区块）
    ├── layouts/            # Layout.astro · BlogLayout.astro
    ├── pages/              # 路由 + robots.txt.ts 端点
    └── styles/global.css
```

---

## 改品牌 / 改域名

**品牌信息**集中在 `src/config.ts`：

```ts
export const site = {
  url: "https://xycat.com",
  name: "XIYUE",
  nameCn: "喜阅",
  positioning: "Creator AI Tools",
  tagline: "AI tools for people who make things.",
  email: "hello@xycat.com",
  twitter: "@xiyue",
  ogImage: "/opengraph.jpg",
};
```

**域名**有两处，必须同步：

1. `astro.config.mjs` 的 `site` —— 决定 canonical、OG 绝对地址、sitemap
2. `src/config.ts` 的 `site.url` —— 决定结构化数据里的 URL

> `robots.txt` 由 `src/pages/robots.txt.ts` 在构建时根据 `site` 生成，无需手改。
> 这是对原模板的改进：原版把 sitemap 地址硬编码在 `public/robots.txt`，域名一换就漂移。

---

## 写文章

在 `src/content/blog/` 新建 `.md` 或 `.mdx`：

```yaml
---
draft: false
title: "文章标题"
snippet: "列表页摘要，同时作为 meta description，控制在 155 字符内"
image: "../../assets/blog/cover.jpg"   # 可选
publishDate: "2026-10-23 10:00"
category: "Notes"
author: "XIYUE"
tags: [creators, process]
---
```

规则：

- `draft: true` 或 `publishDate` 在未来的文章，**列表页与详情页都不会生成**（两处使用同一套过滤规则）
- 图片用相对路径引用 `src/assets/` 下的文件，构建时自动优化为多尺寸 AVIF/WebP。**不要用外链 URL**——构建期抓取第三方图片会引入可用性风险
- 摘要 `snippet` 会在列表卡片中显示两行

团队成员同理，放在 `src/content/team/`，`avatar` 为必填图片字段。

---

## 联系表单

表单提交至 Web3Forms，密钥在构建期注入：

```bash
# .env
PUBLIC_WEB3FORMS_KEY=your_key_here
```

未配置密钥时，表单不会发起请求，而是直接提示访客改用 `site.email` 联系——不会静默丢线索。改动密钥后必须**重新构建**。

---

## 部署

完整步骤见 [`deploy/DEPLOY.md`](deploy/DEPLOY.md)，包含建站、上传、Nginx 配置、SSL、验证命令与常见问题。

---

## 许可

本项目基于 Astroship 模板（Web3Templates）修改，根目录 `LICENSE` 为 **GPL-3.0**。

GPL-3.0 具传染性：对外发布的衍生作品需按同许可证开放源码。商用前请确认合规，或购买原模板的商业授权。

原模板 README 标注为 GPL-2.0，与 `LICENSE` 文件正文不一致——以 `LICENSE` 文件为准。
