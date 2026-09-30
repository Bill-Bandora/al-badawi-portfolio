import { ArrowUpRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Project } from '../../types/project';
import { localized } from '../../utils/language';
import { routePath } from '../../config/site';
import { TechnologyTag } from '../ui/TechnologyTag';
import { StatusBadge } from '../ui/StatusBadge';
import { MouseGlow, TiltSurface } from '../common/InteractiveSurface';

export function ProjectCard({ project }: { project: Project }) {
  const { lang = 'de' } = useParams();
  const { t } = useTranslation();
  return (
    <TiltSurface className="group overflow-hidden rounded-[1.4rem] shadow-deep">
    <MouseGlow className="glow-border grid overflow-hidden rounded-[1.4rem] md:grid-cols-[1.08fr_0.92fr]">
    <article className="contents">
      <div className="relative min-h-72 overflow-hidden border-b border-white/10 bg-slate-950 md:border-b-0 md:border-e">
        <div className="tech-grid absolute inset-0" aria-hidden="true" />
        <img src={project.image} alt={`${project.title}: ${localized(project.category, lang)}`} width="960" height="600" className="relative h-full min-h-72 w-full object-cover transition duration-700 group-hover:scale-[1.035] motion-reduce:transform-none" loading="lazy" decoding="async" />
        <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-night/75 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan backdrop-blur">Case Study</span>
      </div>
      <div className="grid content-center gap-5 p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge label={localized(project.status, lang)} />
          <span className="text-sm text-slate-400">{localized(project.category, lang)}</span>
        </div>
        <div>
          <h3 className="text-3xl font-semibold text-white">{project.title}</h3>
          <p className="mt-3 leading-7 text-slate-300">{localized(project.shortDescription, lang)}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <TechnologyTag key={tech} label={tech} />
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link to={`/${lang}/${routePath('projects', lang)}/${project.slug}`} className="inline-flex min-h-11 items-center rounded-card bg-gradient-to-r from-cyan to-blue px-4 py-2 font-semibold text-white shadow-[0_12px_30px_rgba(8,145,178,0.2)] transition hover:-translate-y-0.5">
            {t('common.viewProject')} <ArrowUpRight className="ms-2 size-4 rtl:rotate-180" />
          </Link>

        </div>
      </div>
    </article>
    </MouseGlow>
    </TiltSurface>
  );
}
