import { useEffect, useState } from 'react';
import { ArrowRight, CalendarDays, Clock, LayoutGrid, List } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SeoHead } from '../components/common/SeoHead';
import { SectionHeading } from '../components/ui/SectionHeading';
import { visibleBlogs, type BlogPost } from '../data/blogs';
import { localizedUrl } from '../config/site';

type BlogView = 'grid' | 'list';

const viewStorageKey = 'bandora-blog-view';

const viewLabels = {
  de: { group: 'Blogdarstellung', grid: 'Kartenansicht', list: 'Listenansicht', selected: 'Aktuelle Ansicht' },
  en: { group: 'Blog display', grid: 'Grid view', list: 'List view', selected: 'Current view' },
  ar: { group: 'طريقة عرض المدونة', grid: 'عرض البطاقات', list: 'عرض القائمة', selected: 'العرض الحالي' },
} as const;

function BlogVisual({ blog, compact = false }: { blog: BlogPost; compact?: boolean }) {
  return (
    <div className={`relative flex overflow-hidden bg-gradient-to-br from-ink via-blue to-cyan text-white ${compact ? 'min-h-32 items-end p-5 sm:min-h-full' : 'min-h-48 items-end p-6'}`}>
      <div className="tech-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">{blog.category}</p>
        {!compact && <p className="mt-3 text-xl font-semibold leading-tight">{blog.cardTitle}</p>}
      </div>
    </div>
  );
}

function BlogMeta({ blog }: { blog: BlogPost }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400">
      <span className="inline-flex items-center gap-1.5"><CalendarDays className="size-3.5" aria-hidden="true" />{blog.publishedLabel}</span>
      <span className="inline-flex items-center gap-1.5"><Clock className="size-3.5" aria-hidden="true" />{blog.readingTime}</span>
    </div>
  );
}

export function BlogsPage() {
  const { t } = useTranslation();
  const { lang = 'de' } = useParams();
  const [view, setView] = useState<BlogView>('grid');
  const blogsUrl = localizedUrl('blogs', lang).replace(/\/$/, '');
  const blogs = visibleBlogs(lang);
  const labels = viewLabels[lang as keyof typeof viewLabels] ?? viewLabels.de;

  useEffect(() => {
    try {
      const stored = localStorage.getItem(viewStorageKey);
      if (stored === 'grid' || stored === 'list') setView(stored);
    } catch {
      // The default grid remains available if browser storage is restricted.
    }
  }, []);

  const selectView = (nextView: BlogView) => {
    setView(nextView);
    try {
      localStorage.setItem(viewStorageKey, nextView);
    } catch {
      // The control still works for the current visit without persistent storage.
    }
  };

  return (
    <>
      <SeoHead
        title={t('seo.blogsTitle')}
        description="Gedanken und praktische Impulse rund um Websites, Digitalisierung und Software für kleine Unternehmen."
        path="blogs"
      />
      <section className="relative overflow-hidden bg-night px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="tech-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            title="Blogs"
            intro="Gedanken, Erfahrungen und praktische Impulse rund um Websites, Digitalisierung und Software. Ohne unnötiges Fachchinesisch."
            level={1}
            inverse
          />

          <div className="mb-6 flex justify-center sm:mb-8 sm:justify-end">
            <div className="inline-flex max-w-full rounded-card border border-white/10 bg-navy/90 p-1 shadow-[0_12px_32px_rgba(2,8,23,0.32)]" role="group" aria-label={labels.group}>
              <button
                type="button"
                aria-label={labels.grid}
                aria-pressed={view === 'grid'}
                aria-controls="blog-results"
                title={labels.grid}
                onClick={() => selectView('grid')}
                className={`inline-flex min-h-10 items-center gap-2 rounded-[0.65rem] px-3 text-sm font-semibold transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan motion-reduce:transition-none sm:px-4 ${view === 'grid' ? 'bg-cyan text-night shadow-[0_0_20px_rgba(34,211,238,0.22)]' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}
              >
                <LayoutGrid className="size-4" aria-hidden="true" /><span>{labels.grid}</span>
              </button>
              <button
                type="button"
                aria-label={labels.list}
                aria-pressed={view === 'list'}
                aria-controls="blog-results"
                title={labels.list}
                onClick={() => selectView('list')}
                className={`inline-flex min-h-10 items-center gap-2 rounded-[0.65rem] px-3 text-sm font-semibold transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan motion-reduce:transition-none sm:px-4 ${view === 'list' ? 'bg-cyan text-night shadow-[0_0_20px_rgba(34,211,238,0.22)]' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}
              >
                <List className="size-4" aria-hidden="true" /><span>{labels.list}</span>
              </button>
            </div>
          </div>
          <p className="sr-only" aria-live="polite">{labels.selected}: {view === 'grid' ? labels.grid : labels.list}</p>

          <div
            id="blog-results"
            data-view={view}
            className={`${view === 'grid' ? 'grid grid-cols-1 gap-4 min-[640px]:grid-cols-2 min-[640px]:gap-5 min-[769px]:gap-6 xl:grid-cols-3 xl:gap-8' : 'grid gap-4 min-[640px]:gap-5 min-[769px]:gap-6'} transition-[opacity,transform] duration-150 motion-reduce:transition-none`}
          >
            {blogs.map((blog) => view === 'grid' ? (
              <article key={blog.slug} className="glow-border group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.4rem] border border-white/10 bg-navy shadow-[0_18px_45px_rgba(2,8,23,0.34)] transition duration-200 hover:-translate-y-1 hover:border-cyan/50 hover:shadow-[0_22px_55px_rgba(8,145,178,0.18)] motion-reduce:transform-none motion-reduce:transition-none">
                <BlogVisual blog={blog} />
                <div className="flex flex-1 flex-col p-6 text-slate-200 sm:p-7">
                  <BlogMeta blog={blog} />
                  <h2 className="mt-4 text-xl font-semibold leading-snug text-white sm:text-2xl">{blog.title}</h2>
                  <p className="mt-3 line-clamp-4 leading-7 text-slate-300">{blog.excerpt}</p>
                  <Link to={`${blogsUrl}/${blog.slug}`} className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-cyan transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan">
                    Artikel lesen <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ) : (
              <article key={blog.slug} className="glow-border group grid min-w-0 overflow-hidden rounded-[1.25rem] border border-white/10 bg-navy shadow-[0_16px_38px_rgba(2,8,23,0.3)] transition duration-200 hover:-translate-y-0.5 hover:border-cyan/50 hover:shadow-[0_20px_45px_rgba(8,145,178,0.16)] motion-reduce:transform-none motion-reduce:transition-none sm:grid-cols-[11rem_minmax(0,1fr)] lg:grid-cols-[15rem_minmax(0,1fr)]">
                <BlogVisual blog={blog} compact />
                <div className="flex min-w-0 flex-col justify-center p-5 text-slate-200 sm:p-6 lg:p-7">
                  <BlogMeta blog={blog} />
                  <h2 className="mt-3 text-xl font-semibold leading-snug text-white sm:text-2xl">{blog.title}</h2>
                  <p className="mt-2 line-clamp-2 leading-7 text-slate-300">{blog.excerpt}</p>
                  <Link to={`${blogsUrl}/${blog.slug}`} className="mt-4 inline-flex w-fit items-center gap-2 font-semibold text-cyan transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan">
                    Artikel lesen <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
