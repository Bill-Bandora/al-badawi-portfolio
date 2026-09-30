import { AppWindow, ArrowRight, Bot, Globe2, Layers3, Server, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { SeoHead } from '../components/common/SeoHead';
import { SectionHeading } from '../components/ui/SectionHeading';
import { RevealOnScroll } from '../components/common/RevealOnScroll';
import { services as serviceDetails } from '../data/services';
import { localized } from '../utils/language';
import { routePath } from '../config/site';

const serviceIcons = [Smartphone, AppWindow, Layers3, Server, Globe2, Bot];

export function ServicesPage() {
  const { t } = useTranslation();
  const { lang = 'de' } = useParams();
  const services = t('services.items', { returnObjects: true }) as Array<{ title: string; text: string; uses: string[] }>;
  return (
    <>
      <SeoHead title={t('seo.servicesTitle')} description={t('services.intro')} path="leistungen" />
      <section className="bg-paper px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading title={t('services.title')} intro={t('services.intro')} level={1} />
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <RevealOnScroll key={service.title} className="rounded-card border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <Icon className="mb-5 size-7 text-cyan" aria-hidden="true" />
                <h2 className="text-xl font-semibold text-ink">{service.title}</h2>
                <p className="mt-3 leading-7 text-slate-700">{service.text}</p>
                <ul className="mt-5 grid gap-2 text-sm text-slate-700">
                  {service.uses.map((use) => (
                    <li key={use} className="rounded bg-slate-50 px-3 py-2">
                      {use}
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            );
          })}
        </div>
        <div className="mx-auto mt-16 max-w-7xl border-t border-slate-200 pt-12">
          <h2 className="text-3xl font-semibold text-ink">{t('serviceDetail.detailTitle')}</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-700">{t('serviceDetail.detailIntro')}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {serviceDetails.map((service) => (
              <Link key={service.slug} to={`/${lang}/${routePath('services', lang)}/${service.slug}`} className="group rounded-card border border-slate-200 bg-white p-6 shadow-sm hover:border-cyan">
                <h3 className="text-xl font-semibold text-ink">{localized(service.title, lang)}</h3>
                <p className="mt-3 leading-7 text-slate-700">{localized(service.summary, lang)}</p>
                <span className="mt-5 inline-flex items-center font-semibold text-cyan">{t('serviceDetail.view')}<ArrowRight className="ms-2 size-4 transition group-hover:translate-x-1" aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
