import { useMemo, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import { SeoHead } from '../components/common/SeoHead';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectFilter } from '../components/projects/ProjectFilter';

export function ProjectsPage() {
  const { t } = useTranslation();
  const { lang = 'de' } = useParams();
  const [params] = useSearchParams();
  const [filter, setFilter] = useState(params.get('filter') ?? 'all');
  const filtered = useMemo(() => (filter === 'all' ? projects : projects.filter((project) => project.filters.includes(filter))), [filter]);
  return (
    <>
      <SeoHead title={t('seo.projectsTitle')} description={t('projects.intro')} path="projekte" />
      <section className="relative overflow-hidden bg-night px-4 py-12 sm:px-6 min-[769px]:py-20 lg:px-8">
        <div className="tech-grid absolute inset-0" aria-hidden="true" />
        <div className="relative">
        <SectionHeading title={t('projects.title')} intro={t('projects.intro')} level={1} inverse />
        <div className="mx-auto max-w-7xl">
          <aside className="mb-8 rounded-card border border-cyan/25 bg-cyan/[0.06] p-5 text-slate-200 sm:p-6" aria-labelledby="device-tracking-case-study">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan">
              {lang === 'de' ? 'Fallstudie' : lang === 'ar' ? 'دراسة حالة' : 'Case study'}
            </p>
            <h2 id="device-tracking-case-study" className="mt-2 text-xl font-semibold text-white">
              {lang === 'de' ? 'Interne IT-Geräte über Abteilungen hinweg nachvollziehen' : lang === 'ar' ? 'تتبّع أجهزة تقنية المعلومات عبر الأقسام' : 'Track internal IT devices across departments'}
            </h2>
            <p className="mt-3 max-w-4xl leading-7 text-slate-300">
              {lang === 'de'
                ? 'Die Fallstudie zeigt, wie Inventarnummer, Standort, Bearbeitungsstatus, zuständige Abteilung und Änderungshistorie in einem gemeinsamen Ablauf zusammengeführt werden.'
                : lang === 'ar'
                  ? 'توضح دراسة الحالة كيف يجتمع رقم الجرد والموقع وحالة المعالجة والقسم المسؤول وسجل التغييرات في مسار واحد.'
                  : 'The case study shows how inventory number, location, processing status, responsible department and change history form one traceable workflow.'}
            </p>
            <Link to={`/${lang}/${lang === 'de' ? 'projekte' : 'projects'}/geraete-nachverfolgung`} className="mt-4 inline-flex font-semibold text-cyan underline decoration-cyan/40 underline-offset-4 hover:text-white">
              {lang === 'de' ? 'IT-Geräte-Nachverfolgung mit Standort- und Statushistorie' : lang === 'ar' ? 'تتبّع أجهزة تقنية المعلومات مع سجل الموقع والحالة' : 'IT device tracking with location and status history'}
            </Link>
          </aside>
          <ProjectFilter value={filter} onChange={setFilter} />
          <div className="grid gap-6 min-[769px]:gap-10">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
