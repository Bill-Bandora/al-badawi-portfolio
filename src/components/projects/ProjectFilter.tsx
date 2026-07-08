import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const filters = ['all', 'mobile', 'web', 'mvp', 'development', 'completed'] as const;

export function ProjectFilter({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const { t } = useTranslation();
  const [, setSearchParams] = useSearchParams();
  return (
    <div className="-mx-4 mb-8 overflow-x-auto px-4" role="toolbar" aria-label="Projektfilter">
      <div className="flex min-w-max gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={value === filter}
            onClick={() => {
              onChange(filter);
              setSearchParams(filter === 'all' ? {} : { filter });
            }}
            className={`min-h-11 rounded-card border px-4 py-2 font-semibold transition ${value === filter ? 'border-ink bg-ink text-white' : 'border-slate-200 bg-white text-slate-700 hover:border-cyan hover:text-cyan'}`}
          >
            {filter === 'all' ? t('common.all') : t(`projects.filters.${filter}`)}
          </button>
        ))}
      </div>
    </div>
  );
}
