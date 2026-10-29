// 2026-10-30 - 翻转全站架构为中文默认根路径，英文加 /en 前缀，补充完整对照路由。
/**
 * i18n 工具函数。
 * 语言判定以 URL 为准（/en 前缀 → en，其余 → zh），保持静态构建与运行时行为一致。
 */
import { ui, type Lang } from "./ui";

export const defaultLang: Lang = "zh";

/** 切换器上显示的语言名 */
export const languages: Record<Lang, string> = {
  en: "EN",
  zh: "中文",
};

/** 从 URL 解析语言：/en 或 /en/... → en，其余（含 / 与 /pricing 等根路径）→ zh */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  return first === "en" ? "en" : defaultLang;
}

/** 取当前语言的文案字典 */
export function useTranslations(lang: Lang) {
  return ui[lang];
}

/**
 * 语言对照路由表。
 * 覆盖所有已翻译的双语页面；未登记的路径在切换时平滑回落至目标语言首页。
 */
const routes: { en: string; zh: string }[] = [
  { en: "/en", zh: "/" },
  { en: "/en/pricing", zh: "/pricing" },
  { en: "/en/about", zh: "/about" },
  { en: "/en/contact", zh: "/contact" },
  { en: "/en/docs", zh: "/docs" },
  { en: "/en/privacy", zh: "/privacy" },
  { en: "/en/terms", zh: "/terms" },
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
  return target === "en" ? "/en" : "/";
}

/** 当前页面的中英双语地址，用于 hreflang 与切换器 */
export function getAlternatePaths(pathname: string) {
  return {
    en: getSwitchPath(pathname, "en"),
    zh: getSwitchPath(pathname, "zh"),
  };
}

/** 路径前缀格式化工具：中文输出原路径，英文自动添加 /en */
export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, l: Lang = lang) {
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    if (l === "en") {
      return cleanPath === "/" ? "/en" : `/en${cleanPath}`;
    }
    return cleanPath;
  };
}