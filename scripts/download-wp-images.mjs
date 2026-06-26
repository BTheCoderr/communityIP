#!/usr/bin/env node
/**
 * Download images from WordPress wp-content/uploads.
 * Works when files are still on DreamHost (before DNS cutover) or via Wayback Machine.
 *
 * Usage: node scripts/download-wp-images.mjs
 */

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "../public/images/board");

const BOARD_IMAGES = [
  { slug: "ashley-gregory", wp: "2024/12/ashley.jpg" },
  { slug: "scott-keeley", wp: "2024/12/scott2.jpg" },
  { slug: "phil-auger", wp: "2024/12/Phil.jpg" },
  { slug: "bill-cole", wp: "2024/12/Bill.jpg" },
  { slug: "paul-mcnamara", wp: "2024/12/Paul.jpg" },
  { slug: "holly-platter", wp: "2024/12/Holly.jpg" },
  { slug: "micah-reyes", wp: "2024/12/MR-Headshot.jpeg" },
];

async function tryDownload(url) {
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) return null;
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 500) return null;
  const ct = res.headers.get("content-type") || "";
  if (!ct.includes("image")) return null;
  return buf;
}

async function main() {
  await mkdir(OUT, { recursive: true });
  let ok = 0;

  for (const { slug, wp } of BOARD_IMAGES) {
    const base = `https://www.communityip.org/wp-content/uploads/${wp}`;
    const sources = [
      base,
      `https://web.archive.org/web/2025/${base}`,
      `https://web.archive.org/web/2024/${base}`,
    ];

    for (const url of sources) {
      try {
        const buf = await tryDownload(url);
        if (buf) {
          const ext = wp.endsWith(".jpeg") ? "jpeg" : "jpg";
          const outPath = join(OUT, `${slug}.${ext}`);
          await writeFile(outPath, buf);
          console.log(`✓ ${slug} ← ${url}`);
          ok++;
          break;
        }
      } catch {
        /* try next source */
      }
    }
  }

  console.log(`\nDownloaded ${ok}/${BOARD_IMAGES.length} board photos to public/images/board/`);
  if (ok === 0) {
    console.log(
      "No images found. Export from DreamHost File Manager or add data/wordpress-export.xml and re-run."
    );
  }
}

main();
