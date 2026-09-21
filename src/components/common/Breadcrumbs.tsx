import { ChevronRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Breadcrumbs({ current, parent }: { current: string; parent?: { label: string; to: string } }) {
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
        {parent && <li className="flex items-center gap-2"><ChevronRight className="size-4 rtl:rotate-180" aria-hidden="true" /><Link to={parent.to} className="hover:text-cyan">{parent.label}</Link></li>}
        <li aria-current="page" className="flex items-center gap-2 font-medium text-ink"><ChevronRight className="size-4 rtl:rotate-180" aria-hidden="true" />
          {current}
        </li>
      </ol>
    </nav>
  );
}
