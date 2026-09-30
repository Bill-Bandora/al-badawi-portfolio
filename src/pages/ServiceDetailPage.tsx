import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { ButtonLink } from '../components/ui/Button';
import { TechnologyTag } from '../components/ui/TechnologyTag';
import { findService } from '../data/services';
import { projects } from '../data/projects';
import { localized } from '../utils/language';
import { localizedUrl, routePath, siteConfig } from '../config/site';
import { NotFoundPage } from './NotFoundPage';

export function ServiceDetailPage() {
  const { lang = 'de', slug } = useParams();
  const { t } = useTranslation();
  const service = findService(slug);
  if (!service) return <NotFoundPage />;
  const path = `${routePath('services', lang)}/${service.slug}`;
  const relatedProjects = projects.filter((project) => service.projectSlugs.includes(project.slug));
  const title = `${localized(service.title, lang)} | ${siteConfig.brandName}`;

  return (
    <>
      <SeoHead
        title={title}
        description={localized(service.summary, lang)}
        path={path}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: localized(service.title, lang),
          description: localized(service.summary, lang),
          provider: { '@type': 'Organization', name: siteConfig.brandName, url: siteConfig.domain },
          url: `${siteConfig.domain}/${lang}/${path}`,
        }}
        breadcrumbs={[
          { name: t('common.home'), url: `${siteConfig.domain}/${lang}/` },
          { name: t('services.title'), url: `${siteConfig.domain}${localizedUrl('services', lang)}` },
          { name: localized(service.title, lang), url: `${siteConfig.domain}/${lang}/${path}` },
        ]}
      />
      <div className="bg-night px-4 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs current={localized(service.title, lang)} parent={{ label: t('services.title'), to: localizedUrl('services', lang) }} />
        </div>
      </div>
      <article>
        <header className="relative overflow-hidden bg-ink px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
          <div className="tech-grid absolute inset-0" aria-hidden="true" /><div className="ambient-orb -right-20 top-0 size-80 bg-cyan/15" aria-hidden="true" />
          <div className="relative mx-auto max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan">{t('services.title')}</p>
            <h1 className="mt-4 text-balance text-4xl font-semibold md:text-6xl">{localized(service.title, lang)}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{localized(service.summary, lang)}</p>
            <ButtonLink to={localizedUrl('contact', lang)} className="mt-8">{t('common.discussProject')}</ButtonLink>
          </div>
        </header>

        <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-ink">{t('serviceDetail.audience')}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">{localized(service.audience, lang)}</p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-ink">{t('serviceDetail.useCases')}</h2>
              <ul className="mt-5 space-y-4">
                {service.useCases.map((item) => <li key={item.de} className="flex gap-3 leading-7 text-slate-700"><CheckCircle2 className="mt-1 size-5 shrink-0 text-cyan" aria-hidden="true" />{localized(item, lang)}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-navy px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold text-white">{t('serviceDetail.benefits')}</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {service.benefits.map((item) => <div key={item.de} className="glass-panel rounded-card p-6 leading-7 text-slate-200">{localized(item, lang)}</div>)}
            </div>
          </div>
        </section>

        <section className="bg-night px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold text-white">{t('serviceDetail.process')}</h2>
            <ol className="mt-8 grid gap-5 md:grid-cols-3">
              {service.process.map((item, index) => <li key={item.de} className="glass-panel rounded-card p-6"><span className="text-sm font-semibold text-cyan">{String(index + 1).padStart(2, '0')}</span><p className="mt-3 font-semibold leading-7 text-slate-100">{localized(item, lang)}</p></li>)}
            </ol>
            <h2 className="mt-14 text-2xl font-semibold text-white">{t('serviceDetail.technologies')}</h2>
            <div className="mt-5 flex flex-wrap gap-2">{service.technologies.map((technology) => <TechnologyTag key={technology} label={technology} />)}</div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold text-ink">{t('serviceDetail.projects')}</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {relatedProjects.map((project) => (
                <Link key={project.slug} to={`/${lang}/${routePath('projects', lang)}/${project.slug}`} className="group rounded-card border border-slate-200 bg-white p-6 shadow-sm hover:border-cyan">
                  <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{localized(project.shortDescription, lang)}</p>
                  <span className="mt-5 inline-flex items-center font-semibold text-cyan">{t('common.viewProject')}<ArrowRight className="ms-2 size-4" aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink px-4 py-16 text-center text-white sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold">{t('serviceDetail.cta')}</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">{t('serviceDetail.ctaText')}</p>
          <ButtonLink to={localizedUrl('contact', lang)} className="mt-7">{t('common.requestProject')}</ButtonLink>
        </section>
      </article>
    </>
  );
}
