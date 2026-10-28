// 2026-10-24 - Cloudflare edge router for xycat.com: default landing language
// by visitor country. China (cf.country === "CN") defaults to the Chinese
// site (/zh/); every other country defaults to the English site (/).
//
// An explicit in-app language switch writes a one-year "xiyue_lang" cookie
// (see src/components/lang-switcher.astro). When that cookie is present the
// redirect is skipped, so manual choice always wins over IP.
//
// Redirects only happen on the two home paths (/ and /zh/); deep links keep
// the language written in the URL, which keeps shared links stable.

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const country = request.cf ? request.cf.country : undefined;

    const cookie = request.headers.get("Cookie") || "";
    const match = /(?:^|;\s*)xiyue_lang=([a-z]{2})/.exec(cookie);
    const explicit = match ? match[1] : null;

    const isEnHome = url.pathname === "/" || url.pathname === "";
    const isZhHome = url.pathname === "/zh" || url.pathname === "/zh/";

    if (!explicit) {
      if (country === "CN" && isEnHome) {
        return homeRedirect(request, "/zh/");
      }
      if (country !== "CN" && isZhHome) {
        return homeRedirect(request, "/");
      }
    }

    // Pass through to the origin (aaPanel) unchanged.
    return fetch(request);
  },
};

function homeRedirect(request, to) {
  const url = new URL(request.url);
  url.pathname = to;
  url.search = "";
  url.hash = "";
  return new Response(null, {
    status: 302,
    headers: { Location: url.toString() },
  });
}
