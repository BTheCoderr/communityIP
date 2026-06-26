import Link from "next/link";
import { newsPosts, formatNewsDate } from "@/lib/news";
import { StampLabel } from "@/components/brand/StampLabel";
import { CTAButton } from "@/components/CTAButton";

export function CommunityUpdates() {
  const posts = [...newsPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="section-editorial bg-cream-50 border-b border-navy-900/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <StampLabel variant="community" className="mb-4">
              Community
            </StampLabel>
            <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              Updates from the movement
            </h2>
            <p className="mt-3 max-w-lg text-navy-800/75">
              Program milestones, partnerships, and stories — not a corporate
              blog.
            </p>
          </div>
          <CTAButton href="/news" variant="secondary">
            All updates
          </CTAButton>
        </div>

        <div className="mt-12 divide-y-2 divide-navy-900/10">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/news/${post.slug}`}
              className="group grid gap-4 py-8 transition-colors hover:bg-cream sm:grid-cols-[8rem_1fr] sm:gap-10 sm:py-10"
            >
              <div>
                <time
                  dateTime={post.date}
                  className="font-mono text-xs uppercase tracking-wider text-muted-foreground"
                >
                  {formatNewsDate(post.date)}
                </time>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-navy-900 group-hover:text-blueprint-700 sm:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-navy-800/70">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-block font-mono text-xs uppercase tracking-wider text-blueprint-700 group-hover:underline">
                  Read update →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
