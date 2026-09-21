import { ArrowUpRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Project } from '../../types/project';
import { localized } from '../../utils/language';
import { routePath } from '../../config/site';
import { TechnologyTag } from '../ui/TechnologyTag';
import { StatusBadge } from '../ui/StatusBadge';

export function ProjectCard({ project }: { project: Project }) {
  const { lang = 'de' } = useParams();
  const { t } = useTranslation();
  return (
    <article className="group grid overflow-hidden rounded-card border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft focus-within:shadow-soft">
      <img src={project.image} alt="" width="960" height="600" className="aspect-[16/10] w-full bg-slate-100 object-cover" loading="lazy" />
      <div className="grid gap-4 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge label={localized(project.status, lang)} />
          <span className="text-sm text-slate-600">{localized(project.category, lang)}</span>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-ink">{project.title}</h3>
          <p className="mt-2 leading-7 text-slate-700">{localized(project.shortDescription, lang)}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <TechnologyTag key={tech} label={tech} />
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link to={`/${lang}/${routePath('projects', lang)}/${project.slug}`} className="inline-flex min-h-11 items-center rounded-card bg-ink px-4 py-2 font-semibold text-white transition hover:bg-cyan">
            {t('common.viewProject')} <ArrowUpRight className="ms-2 size-4 rtl:rotate-180" />
          </Link>

        </div>
      </div>
    </article>
  );
}
