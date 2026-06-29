import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { StampLabel } from "@/components/brand/StampLabel";
import {
  getAllNewsPosts,
  getNewsPost,
  formatNewsDate,
} from "@/lib/news";

export function generateStaticParams() {
  return getAllNewsPosts().map((p) => ({ slug: p.slug }));
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
    <PageShell narrow>
      <Link
        href="/news"
        className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-blueprint-700 hover:underline"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to News
      </Link>

      <article className="mt-8">
        <StampLabel variant="community" className="mb-4">
          Community update
        </StampLabel>
        <time
          dateTime={post.date}
          className="font-mono text-xs uppercase tracking-wider text-muted-foreground"
        >
          {formatNewsDate(post.date)}
        </time>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl text-balance">
          {post.title}
        </h1>
        {post.author && (
          <p className="mt-4 text-base text-forest-800/80">
            By {post.author}
          </p>
        )}
        {post.featuredImage && (
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl">
            <Image
              src={post.featuredImage}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        )}
        <div className="mt-8 space-y-5 border-t border-community-700/10 pt-8">
          {post.body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="leading-relaxed text-navy-800/80"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </PageShell>
  );
}
