import { Code2, Database, Rocket, Smartphone, Workflow, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { SeoHead } from '../components/common/SeoHead';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ButtonLink } from '../components/ui/Button';
import { ProjectCard } from '../components/projects/ProjectCard';
import { RevealOnScroll } from '../components/common/RevealOnScroll';
import { ProfileVisual } from '../components/common/ProfileVisual';
import { localizedUrl } from '../config/site';

const icons = [Smartphone, Code2, Rocket, Database, Wrench, Workflow];

export function HomePage() {
  const { t } = useTranslation();
  const { lang = 'de' } = useParams();
  const competencies = t('home.competencyItems', { returnObjects: true }) as string[];
  const trust = t('home.trustItems', { returnObjects: true }) as string[];
  const process = t('home.processItems', { returnObjects: true }) as string[];
  const terminal = t('home.terminal', { returnObjects: true }) as string[];

  return (
    <>
      <SeoHead title={t('seo.homeTitle')} description={t('seo.homeDescription')} />
      <section className="bg-ink text-white">
        <div className="mx-auto grid min-h-[calc(100svh-72px)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan">Al-Badawi Software Development</p>
            <h1 className="text-balance text-4xl font-semibold tracking-normal md:text-6xl">{t('home.heroTitle')}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{t('home.heroText')}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to={localizedUrl('contact', lang)}>{t('common.discussProject')}</ButtonLink>
              <ButtonLink to={localizedUrl('projects', lang)} variant="dark">
                {t('common.viewProjects')}
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-card border border-white/10 bg-white/10 p-4 shadow-soft">
            <div className="rounded-card bg-coal p-4 font-mono text-sm">
              <div className="mb-4 flex gap-2">
                <span className="size-3 rounded-full bg-red-400" />
                <span className="size-3 rounded-full bg-yellow-400" />
                <span className="size-3 rounded-full bg-green-400" />
              </div>
              <p className="text-slate-400">build-project --scope</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {terminal.map((item) => (
                  <span key={item} className="rounded bg-cyan/15 px-3 py-4 text-center text-cyan">
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-5 animate-pulse text-slate-300 motion-reduce:animate-none">status: MVP ready for testing</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading title={t('home.competencies')} />
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {competencies.map((item, index) => {
            const Icon = icons[index];
            return (
              <RevealOnScroll key={item} className="rounded-card border border-slate-200 bg-white p-5 shadow-sm">
                <Icon className="mb-4 size-6 text-cyan" aria-hidden="true" />
                <h3 className="font-semibold text-ink">{item}</h3>
              </RevealOnScroll>
            );
          })}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading title={t('home.trust')} />
        <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2">
          {trust.map((item) => (
            <div key={item} className="rounded-card border border-slate-200 bg-white p-4 text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink px-4 py-16 text-white sm:px-6 lg:px-8">
        <SectionHeading title={t('home.featured')} />
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="bg-paper px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading title={t('home.process')} />
        <ol className="mx-auto grid max-w-7xl gap-4 md:grid-cols-5">
          {process.map((item, index) => (
            <li key={item} className="relative rounded-card border border-slate-200 bg-white p-5 shadow-sm">
              <span className="mb-4 grid size-10 place-items-center rounded-full bg-cyan text-white">{index + 1}</span>
              <p className="font-semibold text-ink">{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <ProfileVisual />
          <div>
            <h2 className="text-3xl font-semibold text-ink">Bilal Al-Badawi</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">{t('home.aboutPreview')}</p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold md:text-4xl">{t('home.ctaTitle')}</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">{t('home.ctaText')}</p>
        <ButtonLink to={localizedUrl('contact', lang)} className="mt-8">
          {t('common.requestProject')}
        </ButtonLink>
      </section>
    </>
  );
}
