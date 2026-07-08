import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { languages, siteConfig } from '../../config/site';

export function SeoHead({ title, description, path = '' }: { title: string; description: string; path?: string }) {
  const { lang = 'de' } = useParams();
  const canonical = `${siteConfig.domain}/${lang}/${path}`.replace(/\/$/, '/');
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
      <link rel="canonical" href={canonical} />
      {languages.map((item) => (
        <link key={item.code} rel="alternate" hrefLang={item.code} href={`${siteConfig.domain}/${item.code}/${path}`} />
      ))}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
