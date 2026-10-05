import type { BlogLanguage, BlogPost } from './blogTypes';
import { costArticle } from './blogPosts/costArticle';
import { providerArticle } from './blogPosts/providerArticle';
import { platformArticle } from './blogPosts/platformArticle';
import { processArticle } from './blogPosts/processArticle';
import { offerArticle } from './blogPosts/offerArticle';
import { seoArticle } from './blogPosts/seoArticle';
import { smallBusinessArticle } from './blogPosts/smallBusinessArticle';

export type { BlogPost } from './blogTypes';

export const blogs: BlogPost[] = [
  costArticle,
  providerArticle,
  platformArticle,
  processArticle,
  offerArticle,
  seoArticle,
  smallBusinessArticle,
];

export function blogSupportsLanguage(blog: BlogPost, lang: string) {
  return blog.languages.includes(lang as BlogLanguage);
}

export function visibleBlogs(lang: string) {
  return blogs.filter((blog) => blogSupportsLanguage(blog, lang));
}

export function findBlog(slug: string | undefined, lang?: string) {
  return blogs.find((blog) => blog.slug === slug && (!lang || blogSupportsLanguage(blog, lang)));
}

export function blogUrl(slug: string) {
  return `/de/blogs/${slug}`;
}
