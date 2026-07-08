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
      <section className="bg-paper px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <ProfileVisual />
          <div>
            <h1 className="text-4xl font-semibold text-ink md:text-5xl">{t('about.title')}</h1>
            <p className="mt-4 text-xl leading-8 text-cyan">{t('about.role')}</p>
            <p className="mt-6 leading-8 text-slate-700">{t('about.text')}</p>
            <p className="mt-4 leading-8 text-slate-700">{t('about.workflow')}</p>
            <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center rounded-card bg-ink px-5 py-2.5 font-semibold text-white hover:bg-cyan">
              <Github className="me-2 size-5" /> GitHub
            </a>
          </div>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading title={t('about.tech')} />
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {Object.entries(tech).map(([group, items]) => (
            <div key={group} className="rounded-card border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-ink">{group}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
