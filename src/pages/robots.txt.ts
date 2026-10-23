import type { APIRoute } from "astro";

/**
 * 动态生成 robots.txt —— sitemap 地址取自 astro.config.mjs 的 site，
 * 避免像原模板那样在 public/robots.txt 里手写死值导致协议与域名漂移。
 */
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://xycat.com");

  const body = `User-agent: *
Allow: /

Sitemap: ${new URL("sitemap-index.xml", base).toString()}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
