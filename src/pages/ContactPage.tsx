import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ContactForm } from '../components/forms/ContactForm';
import { SeoHead } from '../components/common/SeoHead';
import { CopyEmailButton } from '../components/common/CopyEmailButton';
import { siteConfig } from '../config/site';

export function ContactPage() {
  const { t } = useTranslation();
  return (
    <>
      <SeoHead title={t('seo.contactTitle')} description={t('contact.intro')} path="kontakt" />
      <section className="bg-slate-50 px-4 py-12 max-[768px]:bg-night sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h1 className="text-4xl font-semibold text-ink max-[768px]:text-white md:text-5xl">{t('contact.title')}</h1>
            <p className="mt-4 text-lg leading-8 text-slate-700 max-[768px]:text-slate-300">{t('contact.intro')}</p>
            <a href={`mailto:${siteConfig.email}`} className="mt-8 inline-flex items-center gap-2 text-lg font-semibold text-cyan">
              <Mail className="size-5" /> {siteConfig.email}
            </a>
            <div className="mt-4">
              <CopyEmailButton />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
