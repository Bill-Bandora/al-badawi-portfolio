import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const filters = ['all', 'mobile', 'web', 'desktop', 'infrastructure', 'automation', 'trading', 'mvp', 'development', 'completed'] as const;

export function ProjectFilter({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const { t } = useTranslation();
  const [, setSearchParams] = useSearchParams();
  return (
    <div className="mb-8" role="toolbar" aria-label="Projektfilter">
      <div className="flex flex-wrap gap-x-2 gap-y-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={value === filter}
            onClick={() => {
              onChange(filter);
              setSearchParams(filter === 'all' ? {} : { filter });
            }}
            className={`min-h-11 rounded-card border px-4 py-2 font-semibold transition ${value === filter ? 'border-cyan/50 bg-cyan/15 text-cyan shadow-[0_0_24px_rgba(34,211,238,0.1)]' : 'border-white/10 bg-white/5 text-slate-300 hover:border-cyan/35 hover:text-cyan'}`}
          >
            {filter === 'all' ? t('common.all') : t(`projects.filters.${filter}`)}
          </button>
        ))}
      </div>
    </div>
  );
}
