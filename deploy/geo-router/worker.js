// 2026-10-30 - Cloudflare edge router for xycat.com: default landing language
// by visitor country. The site now defaults to Chinese at the root path (/);
// China (cf.country === "CN") stays on the root, every other country is
// redirected from the root to the English site (/en/).
//
// An explicit in-app language switch writes a one-year "xiyue_lang" cookie
// (see src/components/lang-switcher.astro). When that cookie is present the
// redirect is skipped, so manual choice always wins over IP.
//
// Redirects only happen on the two home paths (/ and /en/); deep links keep
// the language written in the URL, which keeps shared links stable.

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const country = request.cf ? request.cf.country : undefined;

    const cookie = request.headers.get("Cookie") || "";
    const match = /(?:^|;\s*)xiyue_lang=([a-z]{2})/.exec(cookie);
    const explicit = match ? match[1] : null;

    const isZhHome = url.pathname === "/" || url.pathname === "";
    const isEnHome = url.pathname === "/en" || url.pathname === "/en/";

    if (!explicit) {
      if (country === "CN" && isEnHome) {
        // Chinese visitors who landed on the English home fall back to root
        return homeRedirect(request, "/");
      }
      if (country !== "CN" && isZhHome) {
        // Non-Chinese visitors who landed on the Chinese home get the /en site
        return homeRedirect(request, "/en/");
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
