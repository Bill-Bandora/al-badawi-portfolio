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
      <section className="bg-paper px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading title={t('projects.title')} intro={t('projects.intro')} />
        <div className="mx-auto max-w-7xl">
          <ProjectFilter value={filter} onChange={setFilter} />
          <div className="grid gap-6 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
