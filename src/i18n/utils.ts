/**
 * 2026-10-24 - i18n 工具函数。
 *
 * 语言判定以 URL 为准（/zh 前缀 → zh，其余 → en），而不是只依赖 Astro.currentLocale：
 * 前者在静态构建、预览、以及 i18n 配置被改动时行为一致，不会因为 currentLocale
 * 返回 undefined 而静默回落到英文。
 */
import { ui, type Lang } from "./ui";

export const defaultLang: Lang = "en";

/** 切换器上显示的语言名 */
export const languages: Record<Lang, string> = {
  en: "EN",
  zh: "中文",
};

/** 从 URL 解析语言：/zh/... → zh，其余 → en */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  return first === "zh" ? "zh" : defaultLang;
}

/** 取当前语言的文案字典 */
export function useTranslations(lang: Lang) {
  return ui[lang];
}

/**
 * 语言对照路由表。
 * 只登记「确实有译文」的页面；未登记的路径（如 /blog）在切换时回落到目标语言首页，
 * 而不是拼出一个不存在的 /zh/blog 让用户吃 404。
 */
const routes: { en: string; zh: string }[] = [
  { en: "/", zh: "/zh/" },
  { en: "/pricing", zh: "/zh/pricing" },
  { en: "/about", zh: "/zh/about" },
  { en: "/contact", zh: "/zh/contact" },
];

const normalize = (path: string) => {
  const trimmed = path.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
};

/** 当前页面在目标语言下的对应地址 */
export function getSwitchPath(pathname: string, target: Lang): string {
  const key = normalize(pathname);
  const hit = routes.find(
    (route) => normalize(route.en) === key || normalize(route.zh) === key
  );
  if (hit) return hit[target];
  return target === "zh" ? "/zh/" : "/";
}

/** 当前页面的中英双语地址，用于 hreflang 与切换器 */
export function getAlternatePaths(pathname: string) {
  return {
    en: getSwitchPath(pathname, "en"),
    zh: getSwitchPath(pathname, "zh"),
  };
}
