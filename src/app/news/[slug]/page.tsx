import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  newsPosts,
  getNewsPost,
  formatNewsDate,
} from "@/lib/news";

export function generateStaticParams() {
  return newsPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsPost(slug);
  if (!post) return { title: "Post not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getNewsPost(slug);
  if (!post) notFound();

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Link
          href="/news"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to News
        </Link>

        <article className="mt-8">
          <time
            dateTime={post.date}
            className="text-sm font-medium text-teal-700"
          >
            {formatNewsDate(post.date)}
          </time>
          <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl text-balance">
            {post.title}
          </h1>
          <div className="mt-8 space-y-5">
            {post.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
