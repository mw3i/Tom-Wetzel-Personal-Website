import { formatDate } from "@/lib/format";
import type { Article } from "@/lib/types";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col gap-2 py-6 transition-colors hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-badge-light sm:-mx-4 sm:flex-row sm:items-baseline sm:gap-6 sm:px-4"
    >
      <p className="text-xs text-steel sm:w-28 sm:shrink-0">
        {formatDate(article.date)}
      </p>
      <div className="min-w-0 flex-1">
        <p className="text-xs uppercase tracking-[0.2em] text-badge-light">
          {article.publication}
        </p>
        <p className="prose-heading mt-1 text-xl text-ink transition-colors group-hover:text-badge-light sm:text-2xl">
          {article.title}
        </p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
          {article.excerpt}
        </p>
      </div>
    </a>
  );
}
