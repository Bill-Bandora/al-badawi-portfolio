import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { projects } from './src/data/projects';
import { blogs } from './src/data/blogs';
import { services } from './src/data/services';

export default defineConfig({
  ssr: { noExternal: ['react-helmet-async'] },
  plugins: [react(), {
    name: 'project-route-assets',
    generateBundle() {
      const slugs = projects.map((project) => project.slug);
      const blogSlugs = blogs.map((blog) => blog.slug);
      const multilingualBlogSlugs = blogs.filter((blog) => blog.languages.includes('de') && blog.languages.includes('en') && blog.languages.includes('ar')).map((blog) => blog.slug);
      const serviceSlugs = services.map((service) => service.slug);
      if (slugs.some((slug) => !/^[a-z0-9-]+$/.test(slug))) throw new Error('Invalid project slug');
      if (blogSlugs.some((slug) => !/^[a-z0-9-]+$/.test(slug))) throw new Error('Invalid blog slug');
      if (serviceSlugs.some((slug) => !/^[a-z0-9-]+$/.test(slug))) throw new Error('Invalid service slug');
      this.emitFile({ type: 'asset', fileName: 'project-routes.conf', source:
        `# Generated detail-route allowlists. Unknown detail URLs return a real 404.\n` +
        `RewriteRule ^(?:de|en|ar)/(?:projekte|projects)/(?!(?:${slugs.join('|')})/?$).+ - [R=404,END]\n` +
        `RewriteRule ^de/blogs/(?!(?:${blogSlugs.join('|')})/?$).+ - [R=404,END]\n` +
        `RewriteRule ^(?:en|ar)/blogs/(?!(?:${multilingualBlogSlugs.join('|')})/?$).+ - [R=404,END]\n` +
        `RewriteRule ^(?:de|en|ar)/(?:leistungen|services)/(?!(?:${serviceSlugs.join('|')})/?$).+ - [R=404,END]\n` +
        `RewriteRule ^(?:de|en|ar)/(?!(?:leistungen|services|projekte|projects|blogs|ueber-mich|about|kontakt|contact|impressum|imprint|datenschutz|privacy)(?:/|$)).+ - [R=404,END]\n` });
      const paths = {
        de: ['', 'leistungen', 'projekte', 'blogs', 'ueber-mich', 'kontakt', 'impressum', 'datenschutz'],
        en: ['', 'services', 'projects', 'blogs', 'about', 'contact', 'imprint', 'privacy'],
        ar: ['', 'services', 'projects', 'blogs', 'about', 'contact', 'imprint', 'privacy'],
      };
      const urls = Object.entries(paths).flatMap(([lang, routes]) => [
        ...routes.map((route) => `https://al-badawi.de/${lang}/${route}`),
        ...slugs.map((slug) => `https://al-badawi.de/${lang}/${lang === 'de' ? 'projekte' : 'projects'}/${slug}`),
        ...blogs.filter((blog) => blog.languages.includes(lang as 'de' | 'en' | 'ar')).map((blog) => `https://al-badawi.de/${lang}/blogs/${blog.slug}`),
        ...serviceSlugs.map((slug) => `https://al-badawi.de/${lang}/${lang === 'de' ? 'leistungen' : 'services'}/${slug}`),
      ]);
      const lastModified = (url: string) => {
        const blog = blogs.find((item) => url.endsWith(`/blogs/${item.slug}`));
        return blog?.modifiedAt ?? blog?.publishedAt ?? '2026-09-30';
      };
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source:
        '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
        urls.map((url) => `  <url><loc>${url}</loc><lastmod>${lastModified(url)}</lastmod></url>`).join('\n') + '\n</urlset>\n' });
    },
  }],
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    globals: true,
  },
});
