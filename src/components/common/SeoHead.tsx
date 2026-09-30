import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { languages, siteConfig, routeMap } from '../../config/site';

type Schema = Record<string, unknown>;
type Breadcrumb = { name: string; url: string };

export function SeoHead({ title, description, path = '', image, imageAlt, noindex = false, schema, breadcrumbs }: { title: string; description: string; path?: string; image?: string; imageAlt?: string; noindex?: boolean; schema?: Schema; breadcrumbs?: Breadcrumb[] }) {
  const { lang = 'de' } = useParams();
  const url = (language: string) => {
    const [segment, ...rest] = path.split('/');
    const route = Object.values(routeMap).find((item) => item.paths.de === segment);
    const prefix = route ? route.paths[language as keyof typeof route.paths] : segment;
    return `${siteConfig.domain}/${language}/${[prefix, ...rest].join('/')}`;
  };
  const canonical = url(lang);
  const baseSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', '@id': `${siteConfig.domain}/#organization`, name: siteConfig.brandName, url: siteConfig.domain, founder: { '@type': 'Person', name: siteConfig.developerName }, sameAs: [siteConfig.githubUrl] },
      { '@type': 'WebSite', '@id': `${siteConfig.domain}/#website`, name: siteConfig.brandName, url: siteConfig.domain, publisher: { '@id': `${siteConfig.domain}/#organization` }, inLanguage: languages.map((item) => item.code) },
    ],
  };
  const breadcrumbSchema = breadcrumbs && {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: item.url })),
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'} />
      {!noindex && <link rel="canonical" href={canonical} />}
      {!noindex && languages.map((item) => (
        <link key={item.code} rel="alternate" hrefLang={item.code} href={url(item.code)} />
      ))}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteConfig.brandName} />
      <meta property="og:locale" content={lang === 'de' ? 'de_DE' : lang === 'ar' ? 'ar_AR' : 'en_US'} />
      {image && <meta property="og:image" content={`${siteConfig.domain}${image}`} />}
      {image && imageAlt && <meta property="og:image:alt" content={imageAlt} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
      {breadcrumbSchema && <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>}
    </Helmet>
  );
}
