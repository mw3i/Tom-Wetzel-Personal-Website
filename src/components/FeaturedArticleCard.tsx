import Image from "next/image";

import { formatDate } from "@/lib/format";
import { assetUrl } from "@/lib/site";
import type { Article } from "@/lib/types";

export function FeaturedArticleCard({ article }: { article: Article }) {
  const src = article.image ? assetUrl(article.image) : null;

  if (src) {
    return (
      <a
        href={article.url}
        target="_blank"
        rel="noreferrer"
        className="group relative flex h-64 flex-col justify-end overflow-hidden rounded-sm p-6 shadow-lg shadow-ink/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-badge-light"
      >
        <Image
          src={src}
          alt=""
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/70 to-navy-deep/40" />
        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-onDark">
            {article.publication}
          </p>
          <p className="prose-heading mt-2 text-xl leading-snug text-paper">
            {article.title}
          </p>
          <p className="mt-2 text-xs text-paper-soft">
            {formatDate(article.date)}
          </p>
        </div>
      </a>
    );
  }

  return (
    <a
      href={article.url}
      target="_blank"
      rel="noreferrer"
      className="group flex h-64 flex-col justify-between rounded-sm border border-line bg-surface p-6 transition-colors hover:border-badge-light/50 hover:bg-surface-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-badge-light"
    >
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-badge-light">
          {article.publication}
        </p>
        <p className="prose-heading mt-2 text-xl leading-snug text-ink transition-colors group-hover:text-badge-light">
          {article.title}
        </p>
      </div>
      <p className="text-xs text-steel">{formatDate(article.date)}</p>
    </a>
  );
}
