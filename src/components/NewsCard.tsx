import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { formatNewsDate, type NewsPost } from "@/lib/news";

export function NewsCard({ post }: { post: NewsPost }) {
  return (
    <Link
      href={`/news/${post.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-card transition-all hover:border-teal-200 hover:shadow-soft"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
          <Newspaper className="h-5 w-5" aria-hidden />
        </div>
        <time
          dateTime={post.date}
          className="text-xs font-medium text-muted-foreground"
        >
          {formatNewsDate(post.date)}
        </time>
      </div>
      <h3 className="font-heading text-lg font-bold text-slate-800 group-hover:text-teal-800">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {post.excerpt}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 group-hover:gap-2 transition-all">
        Read more
        <ArrowRight className="h-4 w-4" aria-hidden />
      </span>
    </Link>
  );
}
