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
      <section className="relative overflow-hidden bg-night text-white">
        <div className="tech-grid absolute inset-0" aria-hidden="true" />
        <div className="ambient-orb -left-32 top-16 size-80 bg-cyan/20" aria-hidden="true" />
        <div className="ambient-orb -right-24 bottom-10 size-96 bg-blue/20 [animation-delay:-5s]" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[calc(100svh-72px)] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan">Al-Badawi Software Development</p>
            <h1 className="text-gradient text-balance text-5xl font-semibold tracking-tight md:text-7xl">{t('home.heroTitle')}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{t('home.heroText')}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to={localizedUrl('contact', lang)}>{t('common.discussProject')}</ButtonLink>
              <ButtonLink to={localizedUrl('projects', lang)} variant="dark">
                {t('common.viewProjects')}
              </ButtonLink>
            </div>
          </div>
          <div className="glow-border rounded-[1.4rem]">
            <div className="glass-panel relative overflow-hidden rounded-[1.4rem] p-5 font-mono text-sm">
              <div className="scan-line absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-transparent via-cyan/10 to-transparent" aria-hidden="true" />
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

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading title={t('home.competencies')} />
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {competencies.map((item, index) => {
            const Icon = icons[index];
            return (
              <RevealOnScroll key={item} delay={index * 70} className="rounded-card border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-cyan/30">
                <Icon className="mb-4 size-6 text-cyan" aria-hidden="true" />
                <h3 className="font-semibold text-ink">{item}</h3>
              </RevealOnScroll>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy px-4 py-20 sm:px-6 lg:px-8">
        <div className="tech-grid absolute inset-0" aria-hidden="true" />
        <div className="relative"><SectionHeading title={t('home.trust')} inverse />
        <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2">
          {trust.map((item) => (
            <div key={item} className="glass-panel rounded-card p-5 text-slate-200 transition hover:border-cyan/35">
              {item}
            </div>
          ))}
        </div></div>
      </section>

      <section className="bg-night px-4 py-24 text-white sm:px-6 lg:px-8">
        <SectionHeading title={t('home.featured')} inverse align="left" />
        <div className="mx-auto grid max-w-7xl gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
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

      <section className="bg-navy px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <ProfileVisual />
          <div>
            <h2 className="text-3xl font-semibold text-white">Bilal Al-Badawi</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">{t('home.aboutPreview')}</p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-cyan/20 via-ink to-blue/20 px-4 py-20 text-center text-white sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold md:text-4xl">{t('home.ctaTitle')}</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">{t('home.ctaText')}</p>
        <ButtonLink to={localizedUrl('contact', lang)} className="mt-8">
          {t('common.requestProject')}
        </ButtonLink>
      </section>
    </>
  );
}
