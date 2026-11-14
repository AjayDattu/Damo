// Build-time SEO: writes a pre-rendered HTML shell per route (title, description, canonical,
// Open Graph tags and crawlable content), plus sitemap.xml and robots.txt.
// React replaces the static content as soon as the app loads.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export default function seoPlugin() {
  let outDir = "dist";
  let root = process.cwd();
  return {
    name: "seo-prerender",
    apply: "build",
    configResolved(c) {
      outDir = path.resolve(c.root, c.build.outDir);
      root = c.root;
    },
    async closeBundle() {
      const load = (f) => import(pathToFileURL(path.join(root, "src/data", f)).href + `?t=${Date.now()}`);
      const { site, pages, faqs, techGroups } = await load("seo.js");
      const { articles } = await load("articles.js");
      const SITE = (process.env.VITE_SITE_URL || "https://ajaydattu005.netlify.app").replace(/\/$/, "");

      const template = fs.readFileSync(path.join(outDir, "index.html"), "utf8");

      const nav = `<nav><a href="/">Home</a> <a href="/about">About</a> <a href="/projects">Projects</a> <a href="/learn">Learn</a></nav>`;
      const render = (route, title, description, body, type = "website") => {
        const url = SITE + (route === "/" ? "/" : route);
        let html = template
          .replace(/<title>.*?<\/title>/, `<title>${esc(title)}</title>`)
          .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(description)}" />`)
          .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`)
          .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(title)}" />`)
          .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(description)}" />`)
          .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`)
          .replace(/<meta property="og:type"[^>]*>/, `<meta property="og:type" content="${type}" />`)
          .replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${esc(title)}" />`)
          .replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${esc(description)}" />`)
          .replace('<div id="root"></div>', `<div id="root">${nav}<main>${body}</main></div>`);
        html = html.replace(/%SITE_URL%/g, SITE);
        const file = route === "/" ? path.join(outDir, "index.html") : path.join(outDir, route.replace(/^\//, ""), "index.html");
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, html);
      };

      const home = `<h1>${esc(site.name)} — Full-stack Developer</h1><p>${esc(site.description)}</p>
<h2>Tech stack</h2>${techGroups.map((g) => `<h3>${esc(g.title)}</h3><p>${g.items.map(esc).join(", ")}</p>`).join("")}
<h2>Developer guides</h2><ul>${articles.map((a) => `<li><a href="/learn/${a.slug}">${esc(a.title)}</a></li>`).join("")}</ul>
<h2>Frequently asked questions</h2>${faqs.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join("")}`;
      render("/", pages["/"].title, pages["/"].description, home);

      render("/about", pages["/about"].title, pages["/about"].description, `<h1>About ${esc(site.name)}</h1><p>${esc(pages["/about"].description)}</p>`);
      render("/projects", pages["/projects"].title, pages["/projects"].description, `<h1>Projects by ${esc(site.name)}</h1><p>${esc(pages["/projects"].description)}</p>`);
      render("/learn", pages["/learn"].title, pages["/learn"].description,
        `<h1>Developer guides</h1><ul>${articles.map((a) => `<li><a href="/learn/${a.slug}">${esc(a.title)}</a> — ${esc(a.description)}</li>`).join("")}</ul>`);

      for (const a of articles) {
        const body = a.body
          .map((b) => (b.t === "h" ? `<h2>${esc(b.c)}</h2>` : b.t === "ul" ? `<ul>${b.c.map((li) => `<li>${esc(li)}</li>`).join("")}</ul>` : `<p>${esc(b.c)}</p>`))
          .join("");
        render(`/learn/${a.slug}`, `${a.title} | ${site.name}`, a.description, `<article><h1>${esc(a.title)}</h1>${body}</article>`, "article");
      }

      const routes = ["/", "/about", "/projects", "/learn", ...articles.map((a) => `/learn/${a.slug}`)];
      const today = new Date().toISOString().slice(0, 10);
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
        .map((r) => `  <url><loc>${SITE}${r === "/" ? "/" : r}</loc><lastmod>${today}</lastmod></url>`)
        .join("\n")}\n</urlset>\n`;
      fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemap);
      fs.writeFileSync(path.join(outDir, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
    },
  };
}
