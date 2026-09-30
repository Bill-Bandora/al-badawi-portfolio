import { AppWindow, ArrowRight, Bot, Globe2, Layers3, Server, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { SeoHead } from '../components/common/SeoHead';
import { SectionHeading } from '../components/ui/SectionHeading';
import { RevealOnScroll } from '../components/common/RevealOnScroll';
import { services as serviceDetails } from '../data/services';
import { localized } from '../utils/language';
import { routePath } from '../config/site';
import { BrandCrest } from '../components/common/BrandCrest';
import { projects } from '../data/projects';

const serviceIcons = [Smartphone, AppWindow, Layers3, Server, Globe2, Bot];

export function ServicesPage() {
  const { t } = useTranslation();
  const { lang = 'de' } = useParams();
  const services = t('services.items', { returnObjects: true }) as Array<{ title: string; text: string; uses: string[] }>;
  return (
    <>
      <SeoHead title={t('seo.servicesTitle')} description={t('services.intro')} path="leistungen" />
      <section className="relative overflow-hidden bg-night px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <div className="tech-grid absolute inset-0" aria-hidden="true" />
        <BrandCrest className="pointer-events-none absolute -right-24 top-0 hidden w-[34rem] opacity-[0.09] lg:block" />
        <div className="relative mx-auto max-w-7xl"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">{t('services.title')}</p><h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-tight sm:text-6xl">{t('services.heroTitle')}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{t('services.heroIntro')}</p></div>
      </section>
      <section className="relative overflow-hidden bg-navy px-4 py-20 sm:px-6 lg:px-8">
        <div className="tech-grid absolute inset-0" aria-hidden="true" />
        <div className="relative"><SectionHeading title={t('services.title')} intro={t('services.intro')} inverse />
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <RevealOnScroll key={service.title} delay={index * 70} className="group glass-panel rounded-card border border-white/10 p-6 transition hover:-translate-y-1 hover:border-gold/45">
                <div className="mb-5 flex items-center justify-between"><Icon className="size-7 text-cyan" aria-hidden="true" /><span className="text-4xl font-semibold text-white/5 transition group-hover:text-gold/20">0{index + 1}</span></div>
                <h2 className="text-xl font-semibold text-white">{service.title}</h2>
                <p className="mt-3 leading-7 text-slate-300">{service.text}</p>
                <ul className="mt-5 grid gap-2 text-sm text-slate-300">
                  {service.uses.map((use) => (
                    <li key={use} className="rounded border border-white/5 bg-white/[0.04] px-3 py-2">
                      {use}
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            );
          })}
        </div>
        <div className="mx-auto mt-16 max-w-7xl border-t border-white/10 pt-12">
          <h2 className="text-3xl font-semibold text-white">{t('serviceDetail.detailTitle')}</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">{t('serviceDetail.detailIntro')}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {serviceDetails.map((service) => (
              <Link key={service.slug} to={`/${lang}/${routePath('services', lang)}/${service.slug}`} className="group rounded-card border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan">
                <h3 className="text-xl font-semibold text-white">{localized(service.title, lang)}</h3>
                <p className="mt-3 leading-7 text-slate-300">{localized(service.summary, lang)}</p>
                <span className="mt-5 inline-flex items-center font-semibold text-cyan">{t('serviceDetail.view')}<ArrowRight className="ms-2 size-4 transition group-hover:translate-x-1" aria-hidden="true" /></span>
                <div className="mt-5 flex flex-wrap gap-2">{service.projectSlugs.slice(0, 3).map((slug) => { const project = projects.find((item) => item.slug === slug); return project ? <span key={slug} className="rounded-full border border-gold/25 px-3 py-1 text-xs text-gold">{project.title}</span> : null; })}</div>
              </Link>
            ))}
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
