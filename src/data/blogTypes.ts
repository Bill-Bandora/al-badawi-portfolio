export type BlogLanguage = 'de' | 'en' | 'ar';

export type BlogLink = { label: string; to: string };

export type BlogTable = {
  caption: string;
  headers: string[];
  rows: string[][];
};

export type BlogSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  table?: BlogTable;
  links?: BlogLink[];
  callout?: string;
};

export type BlogSource = {
  label: string;
  url: string;
  note?: string;
};

export type BlogPost = {
  slug: string;
  languages: BlogLanguage[];
  title: string;
  metaTitle: string;
  excerpt: string;
  category: string;
  cardTitle: string;
  publishedAt: string;
  publishedLabel: string;
  modifiedAt?: string;
  readingTime: string;
  intro: string;
  sections: BlogSection[];
  faq?: { question: string; answer: string }[];
  sources?: BlogSource[];
  relatedSlugs: string[];
  projectLinks: BlogLink[];
  cta: { eyebrow: string; title: string; text: string; label: string };
};

export const p1PublishedAt = '2026-10-05';
export const p1PublishedLabel = '5. Oktober 2026';
export const webDevelopmentUrl = '/de/leistungen/webentwicklung';
