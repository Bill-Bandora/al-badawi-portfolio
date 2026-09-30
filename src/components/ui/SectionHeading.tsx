export function SectionHeading({ title, intro, level = 2, inverse = false, align = 'center' }: { title: string; intro?: string; level?: 1 | 2; inverse?: boolean; align?: 'center' | 'left' }) {
  const Heading = level === 1 ? 'h1' : 'h2';
  return (
    <div className={`mb-10 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <span className="mb-4 inline-block h-px w-12 bg-gradient-to-r from-cyan to-blue" aria-hidden="true" />
      <Heading className={`text-balance text-3xl font-semibold tracking-tight md:text-5xl ${inverse ? 'text-white' : 'text-ink'}`}>{title}</Heading>
      {intro ? <p className={`mt-4 text-lg leading-8 ${inverse ? 'text-slate-300' : 'text-slate-700'}`}>{intro}</p> : null}
    </div>
  );
}
