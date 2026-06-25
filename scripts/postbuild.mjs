import { copyFileSync, existsSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { loadEnv } from "vite";
import { render } from "../dist/ssr/entry-server.js";

const root = process.cwd();
const dist = join(root, "dist");
const distIndex = join(dist, "index.html");

const env = loadEnv("production", root, "");
const siteUrl = (env.VITE_SITE_URL || "https://example.com").replace(/\/$/, "");

// Prerender React HTML into index.html
let html = readFileSync(distIndex, "utf-8");
const appHtml = render();

if (!html.includes('<div id="root"></div>')) {
  throw new Error('Expected empty <div id="root"></div> in dist/index.html');
}

html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
html = html.replaceAll("__SITE_URL__", siteUrl);
writeFileSync(distIndex, html);

// Stable social preview image (copied from profile photo)
const profileSrc = join(root, "src", "assets", "profile.png");
const ogImageDist = join(dist, "og-image.png");
if (existsSync(profileSrc)) {
  copyFileSync(profileSrc, ogImageDist);
}

// robots.txt
writeFileSync(
  join(dist, "robots.txt"),
  ["User-agent: *", "Allow: /", "", `Sitemap: ${siteUrl}/sitemap.xml`, ""].join("\n"),
);

// sitemap.xml
const lastmod = new Date().toISOString().slice(0, 10);
writeFileSync(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
);

rmSync(join(dist, "ssr"), { recursive: true, force: true });
console.log(`Postbuild complete (site URL: ${siteUrl})`);
