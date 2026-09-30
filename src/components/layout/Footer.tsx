import { Github } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { localizedUrl, navItems, siteConfig } from '../../config/site';
import { LanguageSwitcher } from './LanguageSwitcher';
import { BrandCrest } from '../common/BrandCrest';

export function Footer() {
  const { t } = useTranslation();
  const { lang = 'de' } = useParams();
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-night text-white">
      <div className="tech-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <BrandCrest className="mb-4 block w-24 opacity-90" />
          <p className="text-xl font-semibold text-gradient">{siteConfig.brandName}</p>
          <p className="mt-2 text-slate-300">{siteConfig.developerName}</p>
          <p className="mt-4 max-w-md text-slate-300">{t('footer.text')}</p>
        </div>
        <nav className="grid gap-2" aria-label="Footer Navigation">
          {navItems.map((item) => (
            <Link key={item.key} to={localizedUrl(item.key, lang)} className="text-slate-300 hover:text-cyan">
              {t(`nav.${item.key}`)}
            </Link>
          ))}
          <Link to={localizedUrl('imprint', lang)} className="text-slate-300 hover:text-cyan">
            {t('nav.imprint')}
          </Link>
          <Link to={localizedUrl('privacy', lang)} className="text-slate-300 hover:text-cyan">
            {t('nav.privacy')}
          </Link>
        </nav>
        <div className="grid content-start gap-4">
          <a href={`mailto:${siteConfig.email}`} className="text-slate-300 hover:text-cyan">
            {siteConfig.email}
          </a>
          <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan">
            <Github className="size-4" aria-hidden="true" /> GitHub
          </a>
          <LanguageSwitcher />
        </div>
      </div>
      <div className="relative border-t border-white/10 px-4 py-4 text-center text-sm text-slate-500">© {new Date().getFullYear()} Al-Badawi Software Development</div>
    </footer>
  );
}
