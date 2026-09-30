import { MessageCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { localizedUrl } from '../../config/site';

export function FloatingContact() {
  const { lang = 'de' } = useParams();
  const { t } = useTranslation();
  return (
    <Link
      to={localizedUrl('contact', lang)}
      aria-label={`${t('common.discussProject')} — Floating contact`}
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] end-4 z-30 inline-flex min-h-14 min-w-14 items-center justify-center gap-2 rounded-full border border-gold/60 bg-night/95 px-4 font-semibold text-white shadow-[0_12px_45px_rgba(8,145,178,0.3)] backdrop-blur transition hover:-translate-y-1 hover:border-cyan hover:text-cyan motion-reduce:transform-none sm:bottom-6 sm:end-6"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span className="hidden sm:inline">{t('common.discussProject')}</span>
    </Link>
  );
}
