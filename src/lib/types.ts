export type ImageKey = string;

export interface Site {
  name: string;
  shortName: string;
  headerName: string;
  title: string;
  homeTitle: string;
  tagline: string;
  footerVerse: {
    text: string;
    reference: string;
  };
  email: string;
  social: {
    linkedin: string | null;
    twitter: string | null;
    facebook: string | null;
  };
  seo: {
    defaultDescription: string;
  };
  builderCredit: {
    name: string;
    url: string;
  };
}

export interface BookWork {
  title: string;
  url: string;
}

export interface Book {
  title: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string;
  buyUrl: string;
  buyLabel: string;
  coverImage: ImageKey;
  pullQuote: string;
  pullQuoteAuthor: string;
  /** Other books by the pull-quote's author, credited alongside their name. */
  pullQuoteAuthorWorks?: BookWork[];
}

export interface TimelineEntry {
  role: string;
  organization: string;
  period: string;
}

export interface SpeakingHighlight {
  /** [top-right image, bottom-left image], for the overlapping-photo
   * treatment. Use `image` instead for a single photo, or omit both for a
   * text-only entry (e.g. an engagement with no photos yet). */
  images?: [ImageKey, ImageKey];
  image?: ImageKey;
  caption: string;
}

export interface Bio {
  photo: ImageKey;
  summary: string;
  philosophy: string;
  speaking: {
    summary: string;
    highlights?: SpeakingHighlight[];
  };
  timeline: TimelineEntry[];
}

export interface Article {
  id: string;
  title: string;
  publication: string;
  date: string;
  url: string;
  excerpt: string;
  featured?: boolean;
  image?: string;
}

export type MediaType = "news" | "podcast" | "interview" | "review";

export interface MediaAppearance {
  id: string;
  title: string;
  outlet: string;
  type: MediaType;
  date: string;
  url: string;
  description: string;
  thumbnail?: string;
}

export interface Event {
  active: boolean;
  title: string;
  subtitle: string;
  dateLine: string;
  location: string;
  room: string;
  registrationNote: string;
  address: string;
  website: string;
  websiteLabel: string;
  phone: string;
  mapEmbedUrl: string;
  image: ImageKey;
}

export type Images = Record<string, string | null>;
