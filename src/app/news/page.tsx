import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { NewsCard } from "@/components/NewsCard";
import { newsPosts } from "@/lib/news";

export const metadata: Metadata = {
  title: "News",
  description: "Updates and stories from Community IP.",
};

export default function NewsPage() {
  const sorted = [...newsPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <PageHeader
          eyebrow="News"
          title="Updates from Community IP"
          description="Stories about our programs, partnerships, and mission to expand IP access for underserved inventors."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
