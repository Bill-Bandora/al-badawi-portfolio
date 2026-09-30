import { ArrowRight, CalendarDays, Clock } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SeoHead } from '../components/common/SeoHead';
import { SectionHeading } from '../components/ui/SectionHeading';
import { blogs } from '../data/blogs';
import { localizedUrl } from '../config/site';

export function BlogsPage() {
  const { t } = useTranslation();
  const { lang = 'de' } = useParams();
  const blogsUrl = localizedUrl('blogs', lang).replace(/\/$/, '');

  return (
    <>
      <SeoHead
        title={t('seo.blogsTitle')}
        description="Gedanken und praktische Impulse rund um Websites, Digitalisierung und Software für kleine Unternehmen."
        path="blogs"
      />
      <section className="bg-paper px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          title="Blogs"
          intro="Gedanken, Erfahrungen und praktische Impulse rund um Websites, Digitalisierung und Software. Ohne unnötiges Fachchinesisch."
        />
        <div className="mx-auto max-w-5xl">
          {blogs.map((blog) => (
            <article key={blog.slug} className="overflow-hidden rounded-card border border-slate-200 bg-white shadow-soft">
              <div className="grid md:grid-cols-[0.7fr_1.3fr]">
                <div className="flex min-h-64 items-end bg-gradient-to-br from-ink via-blue to-cyan p-8 text-white">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">Digitalisierung</p>
                    <p className="mt-3 text-2xl font-semibold leading-tight">Online sichtbar.<br />Auch als kleiner Betrieb.</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-2"><CalendarDays className="size-4" />{blog.publishedLabel}</span>
                    <span className="inline-flex items-center gap-2"><Clock className="size-4" />{blog.readingTime}</span>
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold leading-tight text-ink sm:text-3xl">{blog.title}</h2>
                  <p className="mt-4 leading-7 text-slate-700">{blog.excerpt}</p>
                  <Link to={`${blogsUrl}/${blog.slug}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan hover:text-blue">
                    Artikel lesen <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
