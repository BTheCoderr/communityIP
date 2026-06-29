import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface NewsPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
  author?: string;
  featuredImage?: string;
  legacyPath?: string;
}

const NEWS_DIR = path.join(process.cwd(), "src/content/news");

function parseDate(value: unknown): string {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }
  if (typeof value === "string") {
    return value.slice(0, 10);
  }
  return "";
}

function parseNewsFile(filename: string): NewsPost {
  const raw = fs.readFileSync(path.join(NEWS_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  const slug =
    (typeof data.slug === "string" && data.slug) ||
    filename.replace(/\.md$/, "");

  const paragraphs = content
    .trim()
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return {
    slug,
    title: String(data.title ?? ""),
    date: parseDate(data.date),
    excerpt: String(data.excerpt ?? ""),
    body: paragraphs,
    author: data.author ? String(data.author) : undefined,
    featuredImage: data.featuredImage
      ? String(data.featuredImage)
      : undefined,
    legacyPath: data.legacyPath ? String(data.legacyPath) : undefined,
  };
}

export function getAllNewsPosts(): NewsPost[] {
  if (!fs.existsSync(NEWS_DIR)) return [];

  return fs
    .readdirSync(NEWS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map(parseNewsFile)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export const newsPosts = getAllNewsPosts();

export function getNewsPost(slug: string) {
  return newsPosts.find((p) => p.slug === slug);
}

export function formatNewsDate(date: string) {
  return new Date(date + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
