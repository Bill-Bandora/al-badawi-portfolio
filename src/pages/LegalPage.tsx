import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { siteConfig } from '../config/site';

export function LegalPage({ type }: { type: 'imprint' | 'privacy' }) {
  const { t } = useTranslation();
  const title = type === 'imprint' ? t('legal.imprint') : t('legal.privacy');
  useEffect(() => {
    console.warn('Rechtliche Pflichtangaben enthalten Entwicklungsplatzhalter und muessen vor Livegang ergaenzt werden.');
  }, []);
  return (
    <>
      <SeoHead title={`${title} | Al-Badawi Software Development`} description={t('seo.legalTitle')} path={type === 'imprint' ? 'impressum' : 'datenschutz'} />
      <section className="bg-paper px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs current={title} />
          <h1 className="text-4xl font-semibold text-ink">{title}</h1>
          {type === 'imprint' ? (
            <div className="mt-8 grid gap-4 rounded-card border border-slate-200 bg-white p-6 leading-8 text-slate-700 shadow-sm">
              <p>
                <strong>{siteConfig.brandName}</strong>
                <br />
                Bilal Al-Badawi
              </p>
              <p></p>
              <p></p>
              <p>E-Mail: {siteConfig.email}</p>
              <p></p>
            </div>
          ) : (
            <div className="mt-8 grid gap-5 rounded-card border border-slate-200 bg-white p-6 leading-8 text-slate-700 shadow-sm">
              <p>{t('legal.privacyText')}</p>
              <p>Verantwortlich: Bilal Al-Badawi, {siteConfig.email}</p>
              <p>Bei Nutzung des Kontaktformulars werden Name, E-Mail-Adresse, optionale Unternehmensangaben und die Projektbeschreibung verarbeitet, um die Anfrage zu beantworten.</p>
              <p>Es werden keine nicht notwendigen Cookies gesetzt.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
