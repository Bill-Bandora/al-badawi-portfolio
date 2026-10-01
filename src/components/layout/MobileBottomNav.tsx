import { FolderKanban, Home, Layers3, Newspaper, UserRound } from 'lucide-react';
import { NavLink, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { localizedUrl } from '../../config/site';

const items = [
  { key: 'home', icon: Home },
  { key: 'services', icon: Layers3 },
  { key: 'projects', icon: FolderKanban },
  { key: 'blogs', icon: Newspaper },
  { key: 'about', icon: UserRound },
] as const;

export function MobileBottomNav() {
  const { lang = 'de' } = useParams();
  const { t } = useTranslation();
  return (
    <nav aria-label={t('mobileNav.label')} className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/25 bg-night/[0.94] px-2 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-5">
        {items.map(({ key, icon: Icon }) => (
          <NavLink key={key} to={localizedUrl(key, lang)} end={key === 'home'} className={({ isActive }) => `group flex min-h-16 flex-col items-center justify-center gap-1 rounded-xl px-1 text-[0.68rem] font-semibold transition active:scale-[0.98] ${isActive ? 'text-cyan' : 'text-slate-400'}`}>
            {({ isActive }) => <><span className={`grid size-8 place-items-center rounded-xl transition ${isActive ? 'bg-cyan/12 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.18)]' : ''}`}><Icon className="size-4" aria-hidden="true" /></span><span>{t(`mobileNav.${key}`)}</span></>}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
