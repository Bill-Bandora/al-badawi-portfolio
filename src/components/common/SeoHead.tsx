import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { languages, siteConfig, routeMap } from '../../config/site';

export function SeoHead({ title, description, path = '', image, noindex = false }: { title: string; description: string; path?: string; image?: string; noindex?: boolean }) {
  const { lang = 'de' } = useParams();
  const url = (language: string) => {
    const [segment, ...rest] = path.split('/');
    const route = Object.values(routeMap).find((item) => item.paths.de === segment);
    const prefix = route ? route.paths[language as keyof typeof route.paths] : segment;
    return `${siteConfig.domain}/${language}/${[prefix, ...rest].join('/')}`;
  };
  const canonical = url(lang);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.brandName,
    url: siteConfig.domain,
    author: { '@type': 'Person', name: siteConfig.developerName, email: siteConfig.email },
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex ? <meta name="robots" content="noindex, follow" /> : <link rel="canonical" href={canonical} />}
      {!noindex && languages.map((item) => (
        <link key={item.code} rel="alternate" hrefLang={item.code} href={url(item.code)} />
      ))}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      {image && <meta property="og:image" content={`${siteConfig.domain}${image}`} />}
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
