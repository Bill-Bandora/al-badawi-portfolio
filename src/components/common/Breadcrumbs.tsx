import { ChevronRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Breadcrumbs({ current }: { current: string }) {
  const { lang = 'de' } = useParams();
  const { t } = useTranslation();
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-600">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link to={`/${lang}/`} className="hover:text-cyan">
            {t('common.home')}
          </Link>
        </li>
        <ChevronRight className="size-4 rtl:rotate-180" aria-hidden="true" />
        <li aria-current="page" className="font-medium text-ink">
          {current}
        </li>
      </ol>
    </nav>
  );
}
