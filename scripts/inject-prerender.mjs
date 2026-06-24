import { readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { render } from "../dist/ssr/entry-server.js";

const distIndex = join(process.cwd(), "dist", "index.html");
let html = readFileSync(distIndex, "utf-8");
const appHtml = render();

if (!html.includes('<div id="root"></div>')) {
  throw new Error('Expected empty <div id="root"></div> in dist/index.html');
}

html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
writeFileSync(distIndex, html);
rmSync(join(process.cwd(), "dist", "ssr"), { recursive: true, force: true });
console.log("Prerendered portfolio HTML into dist/index.html");
