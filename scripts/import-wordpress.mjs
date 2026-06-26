#!/usr/bin/env node
/**
 * Parse WordPress WXR export and print content summary for manual verification.
 * Place export at: data/wordpress-export.xml
 *
 * Usage: npm run import:wordpress
 */

import { readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const WXR = join(__dirname, "../data/wordpress-export.xml");

function stripHtml(html) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractItems(xml) {
  const items = [];
  const re = /<item>([\s\S]*?)<\/item>/g;
  let m;
  while ((m = re.exec(xml))) {
    const block = m[1];
    const title = block.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ?? "";
    const type =
      block.match(/<wp:post_type><!\[CDATA\[(.*?)\]\]><\/wp:post_type>/)?.[1] ?? "";
    const content =
      block.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/)?.[1] ?? "";
    const date = block.match(/<wp:post_date><!\[CDATA\[(.*?)\]\]><\/wp:post_date>/)?.[1] ?? "";
    if (type === "post" || type === "page") {
      items.push({ title, type, date, content: stripHtml(content).slice(0, 200) });
    }
  }
  return items;
}

async function main() {
  try {
    const xml = await readFile(WXR, "utf8");
    const items = extractItems(xml);
    console.log(`Found ${items.length} pages/posts in WordPress export:\n`);
    for (const item of items) {
      console.log(`[${item.type}] ${item.date} — ${item.title}`);
      console.log(`  ${item.content}…\n`);
    }
  } catch {
    console.error(`No export found at data/wordpress-export.xml`);
    console.error("Export from DreamHost WordPress: Tools → Export → All content");
    process.exit(1);
  }
}

main();
