import { SlidersHorizontal, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const filters = ['all', 'mobile', 'web', 'desktop', 'infrastructure', 'automation', 'trading', 'mvp', 'development', 'completed'] as const;

export function ProjectFilter({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const { t } = useTranslation();
  const [, setSearchParams] = useSearchParams();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [open]);
  const select = (filter: string) => {
    onChange(filter);
    setSearchParams(filter === 'all' ? {} : { filter });
    setOpen(false);
  };
  const label = (filter: string) => filter === 'all' ? t('common.all') : t(`projects.filters.${filter}`);
  return (
    <div className="mb-8">
      <div className="hidden flex-wrap gap-x-2 gap-y-3 min-[769px]:flex" role="toolbar" aria-label="Projektfilter">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={value === filter}
            onClick={() => {
              select(filter);
            }}
            className={`min-h-11 rounded-card border px-4 py-2 font-semibold transition ${value === filter ? 'border-cyan/50 bg-cyan/15 text-cyan shadow-[0_0_24px_rgba(34,211,238,0.1)]' : 'border-white/10 bg-white/5 text-slate-300 hover:border-cyan/35 hover:text-cyan'}`}
          >
            {label(filter)}
          </button>
        ))}
      </div>
      <div className="min-[769px]:hidden">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-cyan/25 bg-cyan/10 px-3 py-2 text-sm font-semibold text-cyan">{label(value)}</span>
          <button type="button" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open} className="inline-flex min-h-11 items-center gap-2 rounded-card border border-white/15 bg-white/5 px-4 font-semibold text-white active:scale-[0.98]"><SlidersHorizontal className="size-4" aria-hidden="true" />{t('projects.filterButton')}</button>
        </div>
        {open && <div className="fixed inset-0 z-50 flex items-end bg-black/65 backdrop-blur-sm" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
          <div role="dialog" aria-modal="true" aria-labelledby="project-filter-title" className="max-h-[78svh] w-full overflow-y-auto rounded-t-[1.6rem] border-t border-gold/35 bg-navy px-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] pt-5 shadow-deep">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-slate-600" aria-hidden="true" />
            <div className="flex items-center justify-between"><h2 id="project-filter-title" className="text-xl font-semibold text-white">{t('projects.filterTitle')}</h2><button type="button" onClick={() => setOpen(false)} aria-label={t('nav.close')} className="grid size-11 place-items-center rounded-full bg-white/5 text-slate-200"><X className="size-5" /></button></div>
            <div className="mt-5 grid grid-cols-2 gap-3" role="group" aria-label="Projektfilter">
              {filters.map((filter) => <button key={filter} type="button" aria-pressed={value === filter} onClick={() => select(filter)} className={`min-h-12 rounded-card border px-3 text-sm font-semibold ${value === filter ? 'border-cyan bg-cyan/15 text-cyan' : 'border-white/10 bg-white/5 text-slate-200'}`}>{label(filter)}</button>)}
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
}
