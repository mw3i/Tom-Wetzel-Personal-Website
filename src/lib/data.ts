import articlesData from "@data/articles.json";
import bioData from "@data/bio.json";
import bookData from "@data/book.json";
import eventData from "@data/event.json";
import imagesData from "@data/images.json";
import mediaData from "@data/media.json";
import siteData from "@data/site.json";

import type {
  Article,
  Bio,
  Book,
  Event,
  ImageKey,
  MediaAppearance,
  Site,
} from "./types";
import { assetUrl } from "./site";

export function getSite(): Site {
  return siteData as Site;
}

export function getBook(): Book {
  return bookData as Book;
}

export function getEvent(): Event {
  return eventData as Event;
}

export function getBio(): Bio {
  return bioData as Bio;
}

export function getArticles(): Article[] {
  return (articlesData as { articles: Article[] }).articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getFeaturedArticles(): Article[] {
  return getArticles().filter((article) => article.featured);
}

export function getMediaAppearances(): MediaAppearance[] {
  return (mediaData as { appearances: MediaAppearance[] }).appearances.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

/** Returns an asset URL for a real image, or null if the key has no image yet. */
export function getImage(key: ImageKey): string | null {
  const images = imagesData as Record<string, string | null>;
  const value = images[key];
  return value ? assetUrl(value) : null;
}
