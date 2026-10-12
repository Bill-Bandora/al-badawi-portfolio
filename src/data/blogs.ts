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

export function localizedBlog(blog: BlogPost, lang: string) {
  const translation = blog.translations?.[lang as BlogLanguage];
  return translation ? { ...blog, ...translation } : blog;
}

export function visibleBlogs(lang: string) {
  return blogs.filter((blog) => blogSupportsLanguage(blog, lang)).map((blog) => localizedBlog(blog, lang));
}

export function findBlog(slug: string | undefined, lang?: string) {
  const blog = blogs.find((item) => item.slug === slug && (!lang || blogSupportsLanguage(item, lang)));
  return blog && lang ? localizedBlog(blog, lang) : blog;
}

export function blogUrl(slug: string) {
  return `/de/blogs/${slug}`;
}
