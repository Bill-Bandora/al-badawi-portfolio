import { Github } from 'lucide-react';
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
  return (
    <>
      <SeoHead title={t('seo.aboutTitle')} description={t('about.role')} path="ueber-mich" />
      <section className="relative overflow-hidden bg-night px-4 py-20 sm:px-6 lg:px-8">
        <div className="tech-grid absolute inset-0" aria-hidden="true" />
        <div className="ambient-orb -left-24 top-20 size-72 bg-cyan/10" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <ProfileVisual />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Bandora Development</p>
            <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">{t('about.title')}</h1>
            <p className="mt-4 text-xl leading-8 text-cyan">{t('about.role')}</p>
            <p className="mt-6 leading-8 text-slate-300">{t('about.text')}</p>
            <p className="mt-4 leading-8 text-slate-300">{t('about.workflow')}</p>
            <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center rounded-card border border-gold/40 bg-white/5 px-5 py-2.5 font-semibold text-white hover:border-cyan hover:text-cyan">
              <Github className="me-2 size-5" /> GitHub
            </a>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden border-t border-white/10 bg-navy px-4 py-20 sm:px-6 lg:px-8">
        <div className="tech-grid absolute inset-0" aria-hidden="true" />
        <div className="relative"><SectionHeading title={t('about.tech')} inverse />
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {Object.entries(tech).map(([group, items]) => (
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
        </div>
      </section>
    </>
  );
}
