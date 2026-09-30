export function SectionHeading({ title, intro, level = 2 }: { title: string; intro?: string; level?: 1 | 2 }) {
  const Heading = level === 1 ? 'h1' : 'h2';
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <Heading className="text-balance text-3xl font-semibold tracking-normal text-ink md:text-4xl">{title}</Heading>
      {intro ? <p className="mt-4 text-lg leading-8 text-slate-700">{intro}</p> : null}
    </div>
  );
}
