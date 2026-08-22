export type ImageKey = string;

export interface Site {
  name: string;
  shortName: string;
  headerName: string;
  title: string;
  tagline: string;
  email: string;
  social: {
    linkedin: string | null;
    twitter: string | null;
    facebook: string | null;
  };
  seo: {
    defaultDescription: string;
  };
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
  pullQuoteAttribution: string;
}

export interface TimelineEntry {
  role: string;
  organization: string;
  period: string;
}

export interface Bio {
  photo: ImageKey;
  summary: string;
  philosophy: string;
  speaking: {
    summary: string;
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

export type Images = Record<string, string | null>;
