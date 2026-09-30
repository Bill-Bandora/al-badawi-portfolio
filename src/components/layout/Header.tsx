import { Github, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { localizedUrl, navItems, siteConfig } from '../../config/site';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const { t } = useTranslation();
  const { lang = 'de' } = useParams();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 border-b transition duration-300 ${scrolled || open ? 'border-white/10 bg-night/92 shadow-[0_18px_50px_rgba(2,6,23,0.42)] backdrop-blur-xl' : 'border-transparent bg-night/72 backdrop-blur-lg'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <NavLink to={localizedUrl('home', lang)} className="group flex items-center gap-3 font-semibold text-white">
          <span className="grid size-11 place-items-center rounded-card border border-cyan/30 bg-gradient-to-br from-cyan/20 to-blue/20 text-cyan shadow-[0_0_24px_rgba(34,211,238,0.12)] transition group-hover:border-cyan/60">AB</span>
          <span className="leading-tight">
            Al-Badawi
            <span className="block text-xs font-medium text-slate-400">Software Development</span>
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

        <button
          type="button"
          aria-label={open ? t('nav.close') : t('nav.menu')}
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="rounded-card p-3 text-white hover:bg-white/10 lg:hidden"
        >
          {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
        </button>
      </div>

      <div id="mobile-menu" className={`grid overflow-hidden transition-all lg:hidden ${open ? 'max-h-[80vh] border-t border-slate-200' : 'max-h-0'}`}>
        <nav className="flex flex-col gap-1 bg-night/98 px-4 py-4" aria-label="Mobile Navigation">
          {navItems.map((item) => (
            <NavLink key={item.key} to={localizedUrl(item.key, lang)} end={item.key === 'home'} className={({ isActive }) => `rounded-card px-3 py-3 font-medium ${isActive ? 'bg-cyan/10 text-cyan' : 'text-slate-300'}`}>
              {t(`nav.${item.key}`)}
            </NavLink>
          ))}
          <div className="mt-2 flex items-center justify-between border-t border-slate-200 pt-3">
            <LanguageSwitcher />
            <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" className="rounded-card p-2 text-slate-300 hover:bg-white/10" aria-label={t('nav.github')}>
              <Github className="size-5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
