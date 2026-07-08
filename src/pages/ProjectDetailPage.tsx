import { Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import { localized } from '../utils/language';
import { SeoHead } from '../components/common/SeoHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { TechnologyTag } from '../components/ui/TechnologyTag';
import { StatusBadge } from '../components/ui/StatusBadge';

export function ProjectDetailPage() {
  const { slug, lang = 'de' } = useParams();
  const { t } = useTranslation();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <Navigate to={`/${lang}/404`} replace />;

  return (
    <>
      <SeoHead title={`${project.title} | Al-Badawi Software Development`} description={localized(project.shortDescription, lang)} path={`projekte/${project.slug}`} />
      <section className="bg-paper px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs current={project.title} />
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <StatusBadge label={localized(project.status, lang)} />
              <h1 className="mt-5 text-4xl font-semibold text-ink md:text-5xl">{project.title}</h1>
              <p className="mt-4 text-lg text-cyan">{localized(project.category, lang)}</p>
              <p className="mt-6 text-lg leading-8 text-slate-700">{localized(project.description, lang)}</p>
            </div>
            <img src={project.image} alt="" className="rounded-card border border-slate-200 bg-white shadow-soft" />
          </div>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <Info title={t('projects.problem')} text={localized(project.problem, lang)} />
          <Info title={t('projects.solution')} text={localized(project.solution, lang)} />
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="rounded-card border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-ink">{t('projects.features')}</h2>
            <ul className="mt-5 grid gap-3">
              {project.features.map((feature) => (
                <li key={localized(feature, lang)} className="rounded bg-slate-50 p-3 text-slate-700">
                  {localized(feature, lang)}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-card border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-ink">{t('projects.role')}</h2>
            <ul className="mt-5 grid gap-3">
              {project.role.map((role) => (
                <li key={localized(role, lang)} className="rounded bg-slate-50 p-3 text-slate-700">
                  {localized(role, lang)}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl rounded-card border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-ink">{t('projects.technologies')}</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <TechnologyTag key={tech} label={tech} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Info({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-card border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-ink">{title}</h2>
      <p className="mt-4 leading-8 text-slate-700">{text}</p>
    </div>
  );
}
