import type { Metadata } from "next";

import { ArticleCard } from "@/components/ArticleCard";
import { FeaturedArticleCard } from "@/components/FeaturedArticleCard";
import { PhotoBand } from "@/components/PhotoBand";
import { Section } from "@/components/Section";
import { getArticles, getFeaturedArticles } from "@/lib/data";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Articles",
  description: "Articles written by and about Tom Wetzel.",
  path: "/articles",
});

export default function ArticlesPage() {
  const articles = getArticles();
  const featured = getFeaturedArticles();

  return (
    <>
      <PhotoBand imageKey="hero-articles" alt="Tom Wetzel" minHeight="small" align="start">
        <p className="section-label-onDark">Articles</p>
        <h1 className="prose-heading mt-4 text-4xl leading-tight text-paper sm:text-5xl">
          Writing &amp; commentary
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper-soft">
          A collection of articles Tom has written.
        </p>
      </PhotoBand>

      {featured.length > 0 && (
        <Section variant="surface">
          <p className="section-label">Featured</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((article) => (
              <FeaturedArticleCard key={article.id} article={article} />
            ))}
          </div>
        </Section>
      )}

      <Section>
        <div className="divide-y divide-line border-t border-line">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </Section>
    </>
  );
}
