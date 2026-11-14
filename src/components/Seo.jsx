import { useEffect } from "react";
import { SITE_URL, site } from "../data/seo";

const setMeta = (attr, key, value) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

/** Per-page <title>, description, canonical, Open Graph / Twitter tags and optional JSON-LD. */
function Seo({ title, description, path = "/", type = "website", jsonLd }) {
  useEffect(() => {
    const url = SITE_URL + (path === "/" ? "/" : path);
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", type);
    setMeta("property", "og:site_name", site.name);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = url;

    document.head.querySelectorAll("script[data-seo]").forEach((n) => n.remove());
    (jsonLd ? [].concat(jsonLd) : []).forEach((obj) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.seo = "1";
      s.textContent = JSON.stringify(obj);
      document.head.appendChild(s);
    });
  }, [title, description, path, type, jsonLd]);
  return null;
}

export default Seo;
