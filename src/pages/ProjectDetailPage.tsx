import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import { localized } from '../utils/language';
import { localizedUrl } from '../config/site';
import { SeoHead } from '../components/common/SeoHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { TechnologyTag } from '../components/ui/TechnologyTag';
import { StatusBadge } from '../components/ui/StatusBadge';
import { ButtonLink } from '../components/ui/Button';
import { NotFoundPage } from './NotFoundPage';

const themes: Record<string, { hero: string; number: string; reverse?: boolean }> = {
  'bandora-org': { hero: 'bg-slate-900 text-white', number: 'text-cyan-300' },
  buynot: { hero: 'bg-emerald-950 text-white', number: 'text-emerald-300', reverse: true },
  'device-tracking': { hero: 'bg-indigo-950 text-white', number: 'text-indigo-300' },
  roommate: { hero: 'bg-violet-950 text-white', number: 'text-violet-300', reverse: true },
};

export function ProjectDetailPage() {
  const { slug, lang = 'de' } = useParams();
  const { t } = useTranslation();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFoundPage />;
  const theme = themes[project.id] ?? themes['bandora-org'];

  return (
    <>
      <SeoHead title={`${project.title} | Al-Badawi Software Development`} description={localized(project.shortDescription, lang)} path={`projekte/${project.slug}`} image={project.image} />
      <div className="bg-paper px-4 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl"><Breadcrumbs current={project.title} parent={{ label: t('projects.title'), to: localizedUrl('projects', lang) }} /></div>
      </div>
      <section className={`${theme.hero} overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:py-20`}>
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className={`min-w-0 ${theme.reverse ? 'lg:order-2' : ''}`}>
            <StatusBadge label={localized(project.status, lang)} inverse />
            <p className={`mt-6 text-sm font-medium ${theme.number}`}>{localized(project.category, lang)}</p>
            <h1 className="mt-4 break-words text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{project.title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">{localized(project.shortDescription, lang)}</p>
            <ButtonLink to={localizedUrl('contact', lang)} variant="dark" className="mt-8">{t('projectLanding.cta')}</ButtonLink>
          </div>
          <figure className={`min-w-0 ${theme.reverse ? 'lg:order-1' : ''}`}>
            <img src={project.image} width="960" height="600" alt="" className="aspect-[16/10] w-full rounded-2xl border border-white/20 bg-paper object-cover shadow-soft" />
            <figcaption className="mt-3 text-sm text-slate-300">{t('projectLanding.visual')}</figcaption>
          </figure>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24" aria-labelledby="project-overview">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 border-b border-slate-200 pb-12 md:grid-cols-[1fr_2fr]">
            <h2 id="project-overview" className="text-2xl font-semibold text-ink">{t('projectLanding.overview')}</h2>
            <p className="text-lg leading-8 text-slate-700">{localized(project.description, lang)}</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Info number="01" title={t('projects.problem')} text={localized(project.problem, lang)} />
            <Info number="02" title={t('projects.solution')} text={localized(project.solution, lang)} />
          </div>
        </div>
      </section>
      <section className="bg-paper px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="project-features">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium text-slate-600">{t('projectLanding.scope')}</p>
          <h2 id="project-features" className="mt-3 text-3xl font-semibold text-ink">{t('projects.features')}</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, index) => (
              <li key={feature.en} className="rounded-card border border-slate-200 bg-white p-6">
                <span className="text-sm font-semibold tabular-nums text-cyan" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 text-lg font-medium leading-7 text-ink">{localized(feature, lang)}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="min-w-0">
            <h2 className="text-3xl font-semibold text-ink">{t('projectLanding.approach')}</h2>
            <p className="mt-5 leading-8 text-slate-700">{localized(project.architectureNotes, lang)}</p>
            {project.technologies.length > 0 && <div className="mt-6 flex flex-wrap gap-2">{project.technologies.map((tech) => <TechnologyTag key={tech} label={tech} />)}</div>}
          </div>
          <div className="rounded-card border-s-4 border-cyan bg-paper p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-ink">{t('projects.role')}</h2>
            <ul className="mt-5 space-y-4">{project.role.map((role) => <li key={role.en} className="leading-7 text-slate-700">{localized(role, lang)}</li>)}</ul>
          </div>
        </div>
      </section>
      <section className="border-y border-slate-200 bg-paper px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-ink">{t('projectLanding.evolution')}</h2>
          <div className="mt-5"><StatusBadge label={localized(project.status, lang)} /></div>
          <p className="mt-5 max-w-3xl leading-8 text-slate-700">{localized(project.developmentStatus, lang)}</p>
          {project.futureFeatures && <ul className="mt-8 grid gap-4 md:grid-cols-2">{project.futureFeatures.map((feature) => (
            <li key={feature.en} className="rounded-card border border-dashed border-slate-300 bg-white p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t('projectLanding.planned')}</span>
              <p className="mt-2 leading-7 text-ink">{localized(feature, lang)}</p>
            </li>
          ))}</ul>}
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-2xl bg-ink p-8 text-white sm:p-12">
          <h2 className="max-w-2xl text-3xl font-semibold">{t('projectLanding.cta')}</h2>
          <p className="mt-4 text-slate-300">{t('projectLanding.ctaText')}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink to={localizedUrl('contact', lang)} variant="dark">{t('nav.contact')}</ButtonLink>
            <ButtonLink to={localizedUrl('projects', lang)} variant="dark">{t('projectLanding.back')}</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

function Info({ number, title, text }: { number: string; title: string; text: string }) {
  return <div><span className="text-sm font-semibold text-cyan" aria-hidden="true">{number}</span><h2 className="mt-3 text-2xl font-semibold text-ink">{title}</h2><p className="mt-5 leading-8 text-slate-700">{text}</p></div>;
}
