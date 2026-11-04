import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { projects } from './src/data/projects';
import { blogs } from './src/data/blogs';
import { services } from './src/data/services';

const productionDomain = 'https://bandora-dev.de';

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
        `# Generated canonical route redirects and detail-route allowlists.\n` +
        `# Do not expose English route aliases below /de/ or German aliases below /en/ and /ar/.\n` +
        `RewriteRule ^de/services$ https://bandora-dev.de/de/leistungen [R=301,END,NE]\n` +
        `RewriteRule ^de/services/(.+)$ https://bandora-dev.de/de/leistungen/$1 [R=301,END,NE]\n` +
        `RewriteRule ^de/projects$ https://bandora-dev.de/de/projekte [R=301,END,NE]\n` +
        `RewriteRule ^de/projects/(.+)$ https://bandora-dev.de/de/projekte/$1 [R=301,END,NE]\n` +
        `RewriteRule ^de/about$ https://bandora-dev.de/de/ueber-mich [R=301,END,NE]\n` +
        `RewriteRule ^de/contact$ https://bandora-dev.de/de/kontakt [R=301,END,NE]\n` +
        `RewriteRule ^de/imprint$ https://bandora-dev.de/de/impressum [R=301,END,NE]\n` +
        `RewriteRule ^de/privacy$ https://bandora-dev.de/de/datenschutz [R=301,END,NE]\n` +
        `RewriteRule ^(en|ar)/leistungen$ https://bandora-dev.de/$1/services [R=301,END,NE]\n` +
        `RewriteRule ^(en|ar)/leistungen/(.+)$ https://bandora-dev.de/$1/services/$2 [R=301,END,NE]\n` +
        `RewriteRule ^(en|ar)/projekte$ https://bandora-dev.de/$1/projects [R=301,END,NE]\n` +
        `RewriteRule ^(en|ar)/projekte/(.+)$ https://bandora-dev.de/$1/projects/$2 [R=301,END,NE]\n` +
        `RewriteRule ^(en|ar)/ueber-mich$ https://bandora-dev.de/$1/about [R=301,END,NE]\n` +
        `RewriteRule ^(en|ar)/kontakt$ https://bandora-dev.de/$1/contact [R=301,END,NE]\n` +
        `RewriteRule ^(en|ar)/impressum$ https://bandora-dev.de/$1/imprint [R=301,END,NE]\n` +
        `RewriteRule ^(en|ar)/datenschutz$ https://bandora-dev.de/$1/privacy [R=301,END,NE]\n` +
        `# Unknown detail URLs return a real 404.\n` +
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
        ...routes.map((route) => `${productionDomain}/${lang}/${route}`),
        ...slugs.map((slug) => `${productionDomain}/${lang}/${lang === 'de' ? 'projekte' : 'projects'}/${slug}`),
        ...blogs.filter((blog) => blog.languages.includes(lang as 'de' | 'en' | 'ar')).map((blog) => `${productionDomain}/${lang}/blogs/${blog.slug}`),
        ...serviceSlugs.map((slug) => `${productionDomain}/${lang}/${lang === 'de' ? 'leistungen' : 'services'}/${slug}`),
      ]);
      const lastModified = (url: string) => {
        const blog = blogs.find((item) => url.endsWith(`/blogs/${item.slug}`));
        if (blog) return blog.modifiedAt ?? blog.publishedAt;
        const service = services.find((item) => url.endsWith(`/${item.slug}`));
        return service?.modifiedAt ?? '2026-09-30';
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
