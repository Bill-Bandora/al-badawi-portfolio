import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { projects } from './src/data/projects';

export default defineConfig({
  plugins: [react(), {
    name: 'project-route-assets',
    generateBundle() {
      const slugs = projects.map((project) => project.slug);
      if (slugs.some((slug) => !/^[a-z0-9-]+$/.test(slug))) throw new Error('Invalid project slug');
      this.emitFile({ type: 'asset', fileName: 'project-routes.conf', source:
        `# Generated from src/data/projects.ts. Unknown project URLs return a real 404.\nRewriteRule ^(?:de|en|ar)/(?:projekte|projects)/(?!(?:${slugs.join('|')})/?$).+ - [R=404,END]\n` });
      const paths = {
        de: ['', 'leistungen', 'projekte', 'ueber-mich', 'kontakt', 'impressum', 'datenschutz'],
        en: ['', 'services', 'projects', 'about', 'contact', 'imprint', 'privacy'],
        ar: ['', 'services', 'projects', 'about', 'contact', 'imprint', 'privacy'],
      };
      const urls = Object.entries(paths).flatMap(([lang, routes]) => [
        ...routes.map((route) => `https://al-badawi.de/${lang}/${route}`),
        ...slugs.map((slug) => `https://al-badawi.de/${lang}/${lang === 'de' ? 'projekte' : 'projects'}/${slug}`),
      ]);
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source:
        '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
        urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n') + '\n</urlset>\n' });
    },
  }],
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    globals: true,
  },
});
