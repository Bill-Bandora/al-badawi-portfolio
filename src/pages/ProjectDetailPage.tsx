import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import { localized } from '../utils/language';
import { localizedUrl, routePath, siteConfig } from '../config/site';
import { SeoHead } from '../components/common/SeoHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { TechnologyTag } from '../components/ui/TechnologyTag';
import { StatusBadge } from '../components/ui/StatusBadge';
import { ButtonLink } from '../components/ui/Button';
import { NotFoundPage } from './NotFoundPage';
import { services } from '../data/services';
import { ArchitectureFlow } from '../components/projects/ArchitectureFlow';
import { DeviceTrackingDemo } from '../components/projects/DeviceTrackingDemo';
import { TiltSurface } from '../components/common/InteractiveSurface';
import { ProjectInteractiveDemo } from '../components/projects/ProjectInteractiveDemo';
import { ProjectCard } from '../components/projects/ProjectCard';

const themes: Record<string, { hero: string; number: string; reverse?: boolean }> = {
  'bandora-org': { hero: 'bg-slate-900 text-white', number: 'text-cyan-300' },
  buynot: { hero: 'bg-emerald-950 text-white', number: 'text-emerald-300', reverse: true },
  'device-tracking': { hero: 'bg-indigo-950 text-white', number: 'text-indigo-300' },
  roommate: { hero: 'bg-violet-950 text-white', number: 'text-violet-300', reverse: true },
  'bandora-gen8': { hero: 'bg-[#080d18] text-white', number: 'text-gold' },
  'digital-footprint-os': { hero: 'bg-[#15102d] text-white', number: 'text-violet-300', reverse: true },
  'bandora-mt5-trader': { hero: 'bg-[#080d18] text-white', number: 'text-gold' },
  'bandora-crypto-scanner': { hero: 'bg-[#07131b] text-white', number: 'text-cyan', reverse: true },
  'bandora-studio': { hero: 'bg-[#120e25] text-white', number: 'text-gold' },
};

export function ProjectDetailPage() {
  const { slug, lang = 'de' } = useParams();
  const { t } = useTranslation();
  const [mobileInfo, setMobileInfo] = useState<'problem' | 'solution'>('problem');
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFoundPage />;
  const theme = themes[project.id] ?? themes['bandora-org'];
  const relatedServices = services.filter((service) => service.projectSlugs.includes(project.slug));
  const relatedProjects = (project.relatedSlugs ?? []).map((item) => projects.find((candidate) => candidate.slug === item)).filter(Boolean) as typeof projects;
  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': project.id === 'bandora-gen8' ? 'CreativeWork' : 'SoftwareApplication',
    name: project.title,
    description: localized(project.shortDescription, lang),
    applicationCategory: localized(project.category, lang),
    operatingSystem: project.id === 'bandora-gen8' ? 'Linux' : 'Cross-platform',
    creator: { '@type': 'Person', name: siteConfig.developerName },
    url: `${siteConfig.domain}/${lang}/${routePath('projects', lang)}/${project.slug}`,
  };

  return (
    <>
      <SeoHead
        title={`${project.title} | Bandora Development`}
        description={localized(project.shortDescription, lang)}
        path={`${routePath('projects', lang)}/${project.slug}`}
        image={project.image}
        imageAlt={`${project.title}: ${localized(project.category, lang)}`}
        schema={projectSchema}
        breadcrumbs={[
          { name: t('common.home'), url: `${siteConfig.domain}/${lang}/` },
          { name: t('projects.title'), url: `${siteConfig.domain}${localizedUrl('projects', lang)}` },
          { name: project.title, url: `${siteConfig.domain}/${lang}/${routePath('projects', lang)}/${project.slug}` },
        ]}
      />
      <div className="bg-night px-4 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl"><Breadcrumbs current={project.title} parent={{ label: t('projects.title'), to: localizedUrl('projects', lang) }} /></div>
      </div>
      <section className={`${theme.hero} relative overflow-hidden px-4 py-10 sm:px-6 min-[769px]:py-16 lg:px-8 lg:py-24`}>
        <div className="tech-grid absolute inset-0" aria-hidden="true" />
        <div className="ambient-orb -right-24 top-10 size-80 bg-cyan/15" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 min-[769px]:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className={`min-w-0 ${theme.reverse ? 'lg:order-2' : ''}`}>
            <StatusBadge label={localized(project.status, lang)} inverse />
            <p className={`mt-4 text-sm font-medium min-[769px]:mt-6 ${theme.number}`}>{localized(project.category, lang)}</p>
            <h1 className="mt-3 break-words text-[clamp(2.35rem,11vw,4rem)] font-semibold tracking-tight min-[769px]:mt-4 min-[769px]:text-6xl lg:text-7xl">{project.title}</h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-200 min-[769px]:mt-6 min-[769px]:text-lg min-[769px]:leading-8">{localized(project.shortDescription, lang)}</p>
            <ButtonLink to={localizedUrl('contact', lang)} variant="dark" className="mt-6 min-[769px]:mt-8">{t('projectLanding.cta')}</ButtonLink>
          </div>
          <TiltSurface className={`min-w-0 ${theme.reverse ? 'lg:order-1' : ''}`}>
            <figure className="glow-border overflow-hidden rounded-[1.5rem] bg-night p-2 shadow-deep">
              <div className="relative overflow-hidden rounded-[1.15rem]"><div className="scan-line absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-transparent via-cyan/10 to-transparent" aria-hidden="true" /><img src={project.image} width="960" height="600" alt={`${project.title}: ${localized(project.category, lang)}`} className="aspect-[16/10] w-full bg-paper object-cover" /></div>
              <figcaption className="px-3 pb-2 pt-4 text-sm text-slate-400">{t('projectLanding.visual')}</figcaption>
            </figure>
          </TiltSurface>
        </div>
      </section>
      <nav className="sticky top-[4.1rem] z-20 border-b border-slate-200 bg-white/95 px-4 py-2 backdrop-blur min-[769px]:hidden" aria-label={t('projectLanding.mobileSections.label')}>
        <div className="mx-auto grid max-w-md grid-cols-3 gap-1 rounded-2xl bg-slate-100 p-1 text-center text-xs font-semibold text-slate-600">
          <a href="#project-overview" className="rounded-xl px-2 py-2.5 transition hover:bg-white hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan">{t('projectLanding.mobileSections.overview')}</a>
          <a href="#project-features" className="rounded-xl px-2 py-2.5 transition hover:bg-white hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan">{t('projectLanding.mobileSections.features')}</a>
          <a href="#project-approach" className="rounded-xl px-2 py-2.5 transition hover:bg-white hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan">{t('projectLanding.mobileSections.tech')}</a>
        </div>
      </nav>
      <section className="bg-slate-50 px-4 py-12 sm:px-6 min-[769px]:py-20 lg:px-8 lg:py-24" aria-labelledby="project-overview">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 border-b border-slate-200 pb-8 min-[769px]:gap-6 min-[769px]:pb-12 md:grid-cols-[1fr_2fr]">
            <h2 id="project-overview" className="text-2xl font-semibold text-ink">{t('projectLanding.overview')}</h2>
            <p className="text-lg leading-8 text-slate-700">{localized(project.description, lang)}</p>
          </div>
          <div className="mt-8 min-[769px]:mt-12">
            <div className="mb-4 grid grid-cols-2 gap-1 rounded-2xl bg-slate-200 p-1 min-[769px]:hidden" role="tablist" aria-label={t('projectLanding.mobileSections.problemSolution')}>
              <button type="button" role="tab" aria-selected={mobileInfo === 'problem'} onClick={() => setMobileInfo('problem')} className={`min-h-11 rounded-xl px-3 text-sm font-semibold transition ${mobileInfo === 'problem' ? 'bg-white text-cyan shadow-sm' : 'text-slate-600'}`}>{t('projects.problem')}</button>
              <button type="button" role="tab" aria-selected={mobileInfo === 'solution'} onClick={() => setMobileInfo('solution')} className={`min-h-11 rounded-xl px-3 text-sm font-semibold transition ${mobileInfo === 'solution' ? 'bg-white text-cyan shadow-sm' : 'text-slate-600'}`}>{t('projects.solution')}</button>
            </div>
            <div className="grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
            <div className={mobileInfo !== 'problem' ? 'max-[768px]:hidden' : ''}><Info number="01" title={t('projects.problem')} text={localized(project.problem, lang)} /></div>
            <div className="hidden items-center text-3xl text-cyan md:flex" aria-hidden="true">→</div>
            <div className={mobileInfo !== 'solution' ? 'max-[768px]:hidden' : ''}><Info number="02" title={t('projects.solution')} text={localized(project.solution, lang)} /></div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-navy px-4 py-12 sm:px-6 min-[769px]:py-20 lg:px-8" aria-labelledby="project-features">
        <div className="tech-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-medium text-slate-400">{t('projectLanding.scope')}</p>
          <h2 id="project-features" className="mt-3 text-3xl font-semibold text-white">{t('projects.features')}</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, index) => (
              <li key={feature.en} className="group glass-panel rounded-card p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan/30 motion-reduce:transform-none min-[769px]:p-6">
                <span className="text-sm font-semibold tabular-nums text-cyan" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 text-lg font-medium leading-7 text-slate-100">{localized(feature, lang)}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="project-approach" className="bg-night px-4 py-12 sm:px-6 min-[769px]:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="min-w-0">
            <h2 className="text-3xl font-semibold text-white">{t('projectLanding.approach')}</h2>
            <p className="mt-5 leading-8 text-slate-300">{localized(project.architectureNotes, lang)}</p>
            {project.technologies.length > 0 && <div className="mt-6 flex flex-wrap gap-2">{project.technologies.map((tech) => <TechnologyTag key={tech} label={tech} />)}</div>}
          </div>
          <div className="glass-panel rounded-card border-s-4 border-s-cyan p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-white">{t('projects.role')}</h2>
            <ul className="mt-5 space-y-4">{project.role.map((role) => <li key={role.en} className="leading-7 text-slate-300">{localized(role, lang)}</li>)}</ul>
          </div>
          <div className="lg:col-span-2"><ArchitectureFlow projectId={project.id} /></div>
        </div>
      </section>
      {project.id === 'device-tracking' && <DeviceTrackingDemo lang={lang} />}
      <ProjectInteractiveDemo projectId={project.id} lang={lang} />
      <section className="border-y border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 min-[769px]:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-ink">{t('projectLanding.evolution')}</h2>
          <div className="mt-5"><StatusBadge label={localized(project.status, lang)} /></div>
          <p className="mt-5 max-w-3xl leading-8 text-slate-700">{localized(project.developmentStatus, lang)}</p>
          {project.disclaimer && <p className="mt-6 max-w-3xl rounded-card border border-amber-300/50 bg-amber-50 p-4 text-sm leading-6 text-amber-950">{localized(project.disclaimer, lang)}</p>}
          {project.technicalChallenges && <div className="mt-10"><h3 className="text-xl font-semibold text-ink">Technical challenges</h3><ul className="mt-4 grid gap-3 md:grid-cols-2">{project.technicalChallenges.map((item) => <li key={item.en} className="rounded-card border border-slate-200 bg-white p-5 text-slate-700">{localized(item, lang)}</li>)}</ul></div>}
          {project.futureFeatures && <ul className="mt-8 grid gap-4 md:grid-cols-2">{project.futureFeatures.map((feature) => (
            <li key={feature.en} className="rounded-card border border-dashed border-slate-300 bg-white p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t('projectLanding.planned')}</span>
              <p className="mt-2 leading-7 text-ink">{localized(feature, lang)}</p>
            </li>
          ))}</ul>}
        </div>
      </section>
      {relatedProjects.length > 0 && <section className="bg-night px-4 py-12 sm:px-6 min-[769px]:py-20 lg:px-8"><div className="mx-auto max-w-6xl"><h2 className="mb-6 text-3xl font-semibold text-white min-[769px]:mb-8">Related projects</h2><div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 min-[769px]:mx-0 min-[769px]:grid min-[769px]:gap-8 min-[769px]:overflow-visible min-[769px]:px-0 min-[769px]:pb-0">{relatedProjects.map((item) => <div key={item.id} className="w-[86vw] shrink-0 snap-center min-[769px]:w-auto"><ProjectCard project={item} /></div>)}</div></div></section>}
      <section className="bg-night px-4 py-12 sm:px-6 min-[769px]:py-20 lg:px-8">
        <div className="glow-border mx-auto max-w-6xl rounded-[1.5rem] bg-navy p-8 text-white shadow-deep sm:p-12">
          <h2 className="max-w-2xl text-3xl font-semibold">{t('projectLanding.cta')}</h2>
          <p className="mt-4 text-slate-300">{t('projectLanding.ctaText')}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {relatedServices.map((service) => <ButtonLink key={service.slug} to={`/${lang}/${routePath('services', lang)}/${service.slug}`} variant="dark">{localized(service.title, lang)}</ButtonLink>)}
          </div>
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
  return <div className="rounded-card border border-slate-200 bg-white p-6 shadow-soft sm:p-8"><span className="text-sm font-semibold text-cyan" aria-hidden="true">{number}</span><h2 className="mt-3 text-2xl font-semibold text-ink">{title}</h2><p className="mt-5 leading-8 text-slate-700">{text}</p></div>;
}
