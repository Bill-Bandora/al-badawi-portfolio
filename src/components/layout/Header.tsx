import { Github } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { localizedUrl, navItems, siteConfig } from '../../config/site';
import { LanguageSwitcher } from './LanguageSwitcher';
import { BrandCrest } from '../common/BrandCrest';

export function Header() {
  const { t } = useTranslation();
  const { lang = 'de' } = useParams();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 border-b pt-[env(safe-area-inset-top)] transition duration-300 ${scrolled ? 'border-white/10 bg-night/[0.96] shadow-[0_18px_50px_rgba(2,6,23,0.42)] backdrop-blur-xl' : 'border-transparent bg-night/[0.9] backdrop-blur-lg'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8 lg:py-3">
          <NavLink to={localizedUrl('home', lang)} className="group flex items-center gap-3 font-semibold text-white">
          <BrandCrest cropped eager className="block size-11 shrink-0 border border-gold/70 shadow-[0_0_24px_rgba(214,168,75,0.18)] transition group-hover:border-gold" />
          <span className="leading-tight">
            Bandora
            <span className="block text-xs font-medium text-slate-400 max-[380px]:hidden">Development</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={localizedUrl(item.key, lang)}
              end={item.key === 'home'}
              className={({ isActive }) =>
                `rounded-card px-3 py-2 text-sm font-medium transition ${isActive ? 'bg-cyan/12 text-cyan shadow-[inset_0_0_0_1px_rgba(34,211,238,0.12)]' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`
              }
            >
              {t(`nav.${item.key}`)}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher />
          <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={t('nav.github')} className="rounded-card p-2 text-slate-300 hover:bg-white/5 hover:text-cyan">
            <Github className="size-5" aria-hidden="true" />
          </a>
        </div>
        <div className="origin-end scale-90 lg:hidden"><LanguageSwitcher /></div>
      </div>
    </header>
  );
}
