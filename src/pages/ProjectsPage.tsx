import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import { SeoHead } from '../components/common/SeoHead';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectFilter } from '../components/projects/ProjectFilter';

export function ProjectsPage() {
  const { t } = useTranslation();
  const [params] = useSearchParams();
  const [filter, setFilter] = useState(params.get('filter') ?? 'all');
  const filtered = useMemo(() => (filter === 'all' ? projects : projects.filter((project) => project.filters.includes(filter))), [filter]);
  return (
    <>
      <SeoHead title={t('seo.projectsTitle')} description={t('projects.intro')} path="projekte" />
      <section className="relative overflow-hidden bg-night px-4 py-20 sm:px-6 lg:px-8">
        <div className="tech-grid absolute inset-0" aria-hidden="true" />
        <div className="relative">
        <SectionHeading title={t('projects.title')} intro={t('projects.intro')} level={1} inverse />
        <div className="mx-auto max-w-7xl">
          <ProjectFilter value={filter} onChange={setFilter} />
          <div className="grid gap-10">
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
