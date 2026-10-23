import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // 2026-10-23 - XIYUE rebrand: 域名由模板官域改为生产域名 https://xycat.com。
  // 此值是 canonical、OG 绝对地址与 sitemap 的唯一来源；修改时同步 src/config.ts 的 site.url。
  site: "https://xycat.com",

  // 静态托管（aaPanel Nginx）使用 directory 格式：/about/ -> /about/index.html
  // 配合 nginx 的 try_files $uri $uri/ $uri.html，无需额外 rewrite。
  build: { format: "directory" },
  trailingSlash: "ignore",

  // 站内跳转预取，降低跨页导航的感知延迟
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },

  integrations: [mdx(), sitemap(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },
});
