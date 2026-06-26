import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatNewsDate, type NewsPost } from "@/lib/news";

export function NewsCard({ post }: { post: NewsPost }) {
  return (
    <Link
      href={`/news/${post.slug}`}
      className="group flex flex-col border-2 border-navy-900/10 bg-cream p-6 transition-colors hover:border-blueprint-600/30 hover:bg-cream-50"
    >
      <time
        dateTime={post.date}
        className="font-mono text-xs uppercase tracking-wider text-muted-foreground"
      >
        {formatNewsDate(post.date)}
      </time>
      <h3 className="mt-3 font-display text-lg font-bold text-navy-900 group-hover:text-blueprint-700">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-800/70">
        {post.excerpt}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-blueprint-700 transition-all group-hover:gap-2">
        Read update
        <ArrowRight className="h-4 w-4" aria-hidden />
      </span>
    </Link>
  );
}
