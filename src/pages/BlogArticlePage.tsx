import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, CalendarDays, Check, Clock, ExternalLink } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { SeoHead } from '../components/common/SeoHead';
import { ButtonLink } from '../components/ui/Button';
import { blogUrl, findBlog, visibleBlogs } from '../data/blogs';
import type { BlogLink, BlogPost } from '../data/blogTypes';
import { localizedUrl, siteConfig } from '../config/site';

type BlogEvent = 'blog_view' | 'blog_50_percent' | 'blog_90_percent' | 'blog_to_service_click' | 'blog_cta_click' | 'blog_to_contact_click';

function emitBlogEvent(event: BlogEvent, blog: BlogPost, destination?: string) {
  window.dispatchEvent(new CustomEvent('bandora:analytics', { detail: { event, slug: blog.slug, destination } }));
}

function eventForLink(to: string): BlogEvent | undefined {
  if (to.includes('/leistungen/')) return 'blog_to_service_click';
  if (to.endsWith('/kontakt')) return 'blog_to_contact_click';
  return undefined;
}

function TrackedLink({ link, blog }: { link: BlogLink; blog: BlogPost }) {
  const event = eventForLink(link.to);
  return (
    <Link
      to={link.to}
      data-event={event}
      onClick={() => event && emitBlogEvent(event, blog, link.to)}
      className="inline-flex items-center gap-2 font-semibold text-cyan underline decoration-cyan/30 underline-offset-4 transition hover:text-white"
    >
      {link.label}<ArrowRight className="size-4 shrink-0" aria-hidden="true" />
    </Link>
  );
}

export function BlogArticlePage() {
  const { lang = 'de', slug } = useParams();
  const blog = findBlog(slug, lang);

  useEffect(() => {
    if (!blog) return;
    emitBlogEvent('blog_view', blog);
    const emitted = new Set<number>();
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = (window.scrollY / scrollable) * 100;
      if (progress >= 50 && !emitted.has(50)) { emitted.add(50); emitBlogEvent('blog_50_percent', blog); }
      if (progress >= 90 && !emitted.has(90)) { emitted.add(90); emitBlogEvent('blog_90_percent', blog); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [blog]);

  if (!blog) return <Navigate to={localizedUrl('blogs', lang)} replace />;

  const articleUrl = `${siteConfig.domain}/${lang}/blogs/${blog.slug}`;
  const related = visibleBlogs(lang).filter((item) => blog.relatedSlugs.includes(item.slug));
  const articleSchema: Record<string, unknown> = {
    '@type': 'Article',
    headline: blog.title,
    description: blog.excerpt,
    datePublished: blog.publishedAt,
    ...(blog.modifiedAt ? { dateModified: blog.modifiedAt } : {}),
    inLanguage: lang,
    mainEntityOfPage: articleUrl,
    author: { '@type': 'Person', name: siteConfig.developerName, url: `${siteConfig.domain}/de/ueber-mich` },
    publisher: { '@type': 'Organization', name: siteConfig.brandName, url: siteConfig.domain },
  };
  const faqSchema = blog.faq?.length ? {
    '@type': 'FAQPage',
    mainEntity: blog.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  } : undefined;

  return (
    <>
      <SeoHead
        title={blog.metaTitle}
        description={blog.excerpt}
        path={`blogs/${blog.slug}`}
        alternateLanguages={blog.languages}
        ogType="article"
        schema={{ '@context': 'https://schema.org', '@graph': faqSchema ? [articleSchema, faqSchema] : [articleSchema] }}
        breadcrumbs={[
          { name: 'Startseite', url: `${siteConfig.domain}/${lang}/` },
          { name: 'Blogs', url: `${siteConfig.domain}${localizedUrl('blogs', lang)}` },
          { name: blog.title, url: articleUrl },
        ]}
      />
      <article className="bg-night" data-blog-slug={blog.slug}>
        <header className="bg-gradient-to-br from-ink via-coal to-blue px-4 py-10 text-white sm:px-6 min-[769px]:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Link to={localizedUrl('blogs', lang)} className="inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-white">
              <ArrowLeft className="size-4" aria-hidden="true" /> Zurück zu den Blogs
            </Link>
            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-cyan min-[769px]:mt-10 min-[769px]:text-sm">{blog.category}</p>
            <h1 className="mt-3 max-w-4xl text-balance text-[clamp(2.15rem,10vw,3rem)] font-semibold leading-tight min-[769px]:mt-4 sm:text-5xl">{blog.title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200 min-[769px]:mt-6 min-[769px]:text-lg min-[769px]:leading-8">{blog.excerpt}</p>
            <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-300 min-[769px]:mt-7 min-[769px]:gap-5 min-[769px]:text-sm">
              <span className="inline-flex items-center gap-2"><CalendarDays className="size-4" aria-hidden="true" />{blog.publishedLabel}</span>
              <span className="inline-flex items-center gap-2"><Clock className="size-4" aria-hidden="true" />{blog.readingTime}</span>
              <span>Von Bilal Al-Badawi</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 min-[769px]:py-20">
          <div className="blog-content glass-panel rounded-[1.4rem] p-5 min-[769px]:p-10">
            <p className="lead">{blog.intro}</p>

            {blog.sections.length > 3 && (
              <nav aria-label="Inhaltsübersicht" className="mt-8 rounded-card border border-slate-700 bg-night/60 p-5">
                <h2 className="!mt-0 !text-xl">Inhalt</h2>
                <ol className="mt-4 grid gap-2 text-base sm:grid-cols-2">
                  {blog.sections.map((section) => (
                    <li key={section.id}><a className="text-cyan hover:text-white" href={`#${section.id}`}>{section.title}</a></li>
                  ))}
                </ol>
              </nav>
            )}

            {blog.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.callout && <p className="rounded-card border-s-4 border-cyan bg-cyan/10 p-5 font-semibold text-slate-100">{section.callout}</p>}
                {section.bullets && (
                  <ul className="mt-5 grid gap-3">
                    {section.bullets.map((item) => <li key={item} className="flex gap-3"><Check className="mt-1 size-5 shrink-0 text-cyan" aria-hidden="true" /><span>{item}</span></li>)}
                  </ul>
                )}
                {section.table && (
                  <div className="mt-6 overflow-x-auto rounded-card border border-slate-700">
                    <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
                      <caption className="bg-night/80 px-4 py-3 text-left font-semibold text-white">{section.table.caption}</caption>
                      <thead className="bg-cyan/10 text-white"><tr>{section.table.headers.map((header) => <th key={header} scope="col" className="border-b border-slate-700 px-4 py-3">{header}</th>)}</tr></thead>
                      <tbody>{section.table.rows.map((row) => <tr key={row.join('|')} className="border-b border-slate-800 last:border-0">{row.map((cell, index) => index === 0 ? <th key={cell} scope="row" className="px-4 py-3 font-semibold text-slate-100">{cell}</th> : <td key={cell} className="px-4 py-3 text-slate-300">{cell}</td>)}</tr>)}</tbody>
                    </table>
                  </div>
                )}
                {section.links && <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">{section.links.map((link) => <TrackedLink key={link.to} link={link} blog={blog} />)}</div>}
              </section>
            ))}

            {blog.faq && blog.faq.length > 0 && (
              <section id="fragen" className="scroll-mt-24">
                <h2>Häufige Fragen</h2>
                <div className="mt-5 grid gap-3">
                  {blog.faq.map((item) => <details key={item.question} className="group rounded-card border border-slate-700 bg-night/50 p-5"><summary className="cursor-pointer list-none font-semibold text-white">{item.question}</summary><p className="!mt-3">{item.answer}</p></details>)}
                </div>
              </section>
            )}

            {blog.projectLinks.length > 0 && (
              <section id="praxis">
                <h2>Passende Einblicke aus Bandora-Projekten</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">{blog.projectLinks.map((link) => <Link key={link.to} to={link.to} className="rounded-card border border-slate-700 bg-night/60 p-5 font-semibold text-cyan transition hover:border-cyan hover:text-white">{link.label}<ArrowRight className="ms-2 inline size-4" aria-hidden="true" /></Link>)}</div>
              </section>
            )}

            {blog.sources && blog.sources.length > 0 && (
              <section id="quellen">
                <h2>Quellen und Marktbeispiele</h2>
                <p>Externe Preisangaben sind veröffentlichte Beispiele der jeweiligen Anbieter und keine eigenen Bandora-Preise.</p>
                <ul className="mt-5 grid gap-3 text-sm">{blog.sources.map((source) => <li key={source.url}><a className="inline-flex items-start gap-2 text-cyan underline decoration-cyan/30 underline-offset-4 hover:text-white" href={source.url} target="_blank" rel="noreferrer">{source.label}<ExternalLink className="mt-1 size-3.5 shrink-0" aria-hidden="true" /></a>{source.note && <span className="ms-2 text-slate-500">({source.note})</span>}</li>)}</ul>
              </section>
            )}
          </div>

          {related.length > 0 && (
            <aside aria-labelledby="related-articles" className="mt-8 min-[769px]:mt-12">
              <h2 id="related-articles" className="text-2xl font-semibold text-white">Passende Ratgeber</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">{related.map((item) => <Link key={item.slug} to={blogUrl(item.slug)} className="rounded-card border border-slate-700 bg-navy p-5 text-white transition hover:border-cyan"><span className="text-xs font-semibold uppercase tracking-wider text-cyan">{item.category}</span><h3 className="mt-2 text-lg font-semibold">{item.title}</h3></Link>)}</div>
            </aside>
          )}

          <aside className="mt-8 rounded-card bg-ink p-6 text-white min-[769px]:mt-14 min-[769px]:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan">{blog.cta.eyebrow}</p>
            <h2 className="mt-3 text-2xl font-semibold">{blog.cta.title}</h2>
            <p className="mt-3 leading-7 text-slate-300">{blog.cta.text}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink to="/de/leistungen/webentwicklung" variant="dark" data-event="blog_to_service_click" onClick={() => emitBlogEvent('blog_to_service_click', blog, '/de/leistungen/webentwicklung')}>Mehr zur Webentwicklung</ButtonLink>
              <ButtonLink to="/de/kontakt" variant="dark" data-event="blog_cta_click" onClick={() => { emitBlogEvent('blog_cta_click', blog, '/de/kontakt'); emitBlogEvent('blog_to_contact_click', blog, '/de/kontakt'); }}>{blog.cta.label}</ButtonLink>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
