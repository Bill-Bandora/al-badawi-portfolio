import { Github } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SeoHead } from '../components/common/SeoHead';
import { ProfileVisual } from '../components/common/ProfileVisual';
import { SectionHeading } from '../components/ui/SectionHeading';
import { siteConfig } from '../config/site';

const tech = {
  Frontend: ['React', 'React Native', 'Expo', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Vite'],
  Backend: ['Node.js', 'Express', 'NestJS', 'REST APIs'],
  'Datenbanken und Datenzugriff': ['PostgreSQL', 'MariaDB', 'MySQL', 'Prisma', 'Redis'],
  'Infrastruktur und Werkzeuge': ['Git', 'GitHub', 'Docker', 'Render', 'EAS Build', 'App Store Connect'],
};

export function AboutPage() {
  const { t } = useTranslation();
  const techGroups = Object.entries(tech);
  const [activeTech, setActiveTech] = useState(0);
  return (
    <>
      <SeoHead title={t('seo.aboutTitle')} description={t('about.role')} path="ueber-mich" />
      <section className="relative overflow-hidden bg-night px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="tech-grid absolute inset-0" aria-hidden="true" />
        <div className="ambient-orb -left-24 top-20 size-72 bg-cyan/10" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <ProfileVisual />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Bandora Development</p>
            <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">{t('about.title')}</h1>
            <p className="mt-4 text-xl leading-8 text-cyan">{t('about.role')}</p>
            <div className="mt-6 hidden min-[769px]:block"><p className="leading-8 text-slate-300">{t('about.text')}</p><p className="mt-4 leading-8 text-slate-300">{t('about.workflow')}</p></div>
            <details className="group mt-6 rounded-card border border-white/10 bg-white/[0.03] p-4 text-slate-300 min-[769px]:hidden"><summary className="cursor-pointer font-semibold text-cyan">{t('about.more')}</summary><p className="mt-4 leading-7">{t('about.text')}</p><p className="mt-3 leading-7">{t('about.workflow')}</p></details>
            <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center rounded-card border border-gold/40 bg-white/5 px-5 py-2.5 font-semibold text-white hover:border-cyan hover:text-cyan">
              <Github className="me-2 size-5" /> GitHub
            </a>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden border-t border-white/10 bg-navy px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="tech-grid absolute inset-0" aria-hidden="true" />
        <div className="relative"><SectionHeading title={t('about.tech')} inverse />
        <div className="mx-auto hidden max-w-7xl gap-6 min-[769px]:grid min-[769px]:grid-cols-2">
          {techGroups.map(([group, items]) => (
            <div key={group} className="glass-panel rounded-card border border-white/10 p-6 transition hover:-translate-y-1 hover:border-cyan/35">
              <h2 className="text-xl font-semibold text-white">{group}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="rounded-full border border-cyan/15 bg-cyan/[0.07] px-3 py-1 text-sm font-medium text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-lg min-[769px]:hidden">
          <div className="flex gap-2 overflow-x-auto pb-3 [scrollbar-width:none]" role="tablist" aria-label={t('about.tech')}>
            {techGroups.map(([group], index) => <button key={group} type="button" role="tab" aria-selected={activeTech === index} aria-controls={`tech-panel-${index}`} onClick={() => setActiveTech(index)} className={`min-h-11 shrink-0 rounded-full border px-4 text-sm font-semibold active:scale-[0.98] ${activeTech === index ? 'border-cyan bg-cyan/15 text-cyan' : 'border-white/10 bg-white/5 text-slate-300'}`}>{['Frontend', 'Backend', 'Data', 'Infra'][index]}</button>)}
          </div>
          {techGroups.map(([group, items], index) => <div key={group} id={`tech-panel-${index}`} role="tabpanel" hidden={activeTech !== index} className="glass-panel mt-3 min-h-48 rounded-card p-6"><h2 className="text-xl font-semibold text-white">{group}</h2><div className="mt-5 flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-full border border-cyan/15 bg-cyan/[0.07] px-3 py-1.5 text-sm font-medium text-slate-300">{item}</span>)}</div></div>)}
        </div>
        </div>
      </section>
    </>
  );
}
