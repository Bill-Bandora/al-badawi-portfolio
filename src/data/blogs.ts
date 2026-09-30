export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  publishedLabel: string;
  readingTime: string;
};

export const blogs: BlogPost[] = [
  {
    slug: 'warum-kleine-unternehmen-eine-website-brauchen',
    title: 'Keine Website? Warum kleine Unternehmen damit Chancen liegen lassen',
    excerpt:
      'Viele kleine Betriebe sind großartig in dem, was sie tun – online findet man davon aber kaum etwas. Dabei kann schon eine einfache Website spürbar mehr Vertrauen, Sichtbarkeit und Anfragen bringen.',
    publishedAt: '2026-09-30',
    publishedLabel: '30. September 2026',
    readingTime: '6 Min. Lesezeit',
  },
];

export function findBlog(slug: string | undefined) {
  return blogs.find((blog) => blog.slug === slug);
}
