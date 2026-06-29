import Link from "next/link";
import { getAllNewsPosts, formatNewsDate } from "@/lib/news";
import { CTAButton } from "@/components/CTAButton";
import { ArrowRight } from "lucide-react";

export function CommunityUpdates() {
  const posts = getAllNewsPosts();

  return (
    <section className="section-editorial border-b border-community-700/10 bg-cream">
      <div className="section-wide">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">News</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
              Updates from Community IP
            </h2>
            <p className="mt-3 max-w-lg text-forest-800/75">
              Program milestones, partnerships, and community stories.
            </p>
          </div>
          <CTAButton href="/news" variant="secondary">
            All updates
          </CTAButton>
        </div>

        <div className="mt-10 divide-y divide-community-700/10">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/news/${post.slug}`}
              className="group grid gap-3 py-8 transition-colors hover:bg-white/60 sm:grid-cols-[7rem_1fr] sm:gap-8 sm:py-9"
            >
              <time
                dateTime={post.date}
                className="text-sm text-muted-foreground"
              >
                {formatNewsDate(post.date)}
              </time>
              <div>
                <h3 className="font-display text-xl font-semibold text-forest-900 group-hover:text-community-700 sm:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-forest-800/75">
                  {post.excerpt}
                </p>
                <span className="link-arrow mt-4 text-sm">
                  Read update
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
