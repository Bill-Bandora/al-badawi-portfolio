import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { SeoHead } from '../components/common/SeoHead';
import { ButtonLink } from '../components/ui/Button';
import { localizedUrl } from '../config/site';

export function NotFoundPage() {
  const { t } = useTranslation();
  const { lang = 'de' } = useParams();
  return (
    <>
      <SeoHead title={t('notFound.title')} description={t('notFound.text')} noindex />
      <section className="grid min-h-[60svh] place-items-center bg-paper px-4 py-16 text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan">404</p>
          <h1 className="mt-4 text-4xl font-semibold text-ink">{t('notFound.title')}</h1>
          <p className="mt-4 text-slate-700">{t('notFound.text')}</p>
          <ButtonLink to={localizedUrl('home', lang)} className="mt-8">
            {t('common.home')}
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
