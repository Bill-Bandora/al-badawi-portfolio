import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import i18n from './i18n';
import { projects } from './data/projects';
import { blogs } from './data/blogs';
import { services } from './data/services';
import { languages, routeMap } from './config/site';

type RenderedHelmet = { title: { toString(): string }; meta: { toString(): string }; link: { toString(): string }; script: { toString(): string } };

export const prerenderRoutes = languages.flatMap(({ code }) => {
  const baseRoutes = Object.values(routeMap).map((route) => `/${code}/${route.paths[code]}`.replace(/\/$/, '/') || `/${code}/`);
  const projectRoutes = projects.map((project) => `/${code}/${routeMap.projects.paths[code]}/${project.slug}`);
  const blogRoutes = blogs.map((blog) => `/${code}/${routeMap.blogs.paths[code]}/${blog.slug}`);
  const serviceRoutes = services.map((service) => `/${code}/${routeMap.services.paths[code]}/${service.slug}`);
  return [...baseRoutes, ...projectRoutes, ...blogRoutes, ...serviceRoutes];
});

export async function render(url: string) {
  const lang = url.split('/').filter(Boolean)[0] ?? 'de';
  await i18n.changeLanguage(lang);
  const helmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
  );
  const helmet = (helmetContext as { helmet?: RenderedHelmet }).helmet;
  return {
    html,
    lang,
    dir: lang === 'ar' ? 'rtl' : 'ltr',
    head: helmet ? [helmet.title.toString(), helmet.meta.toString(), helmet.link.toString(), helmet.script.toString()].join('\n') : '',
  };
}
