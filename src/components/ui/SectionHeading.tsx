export function SectionHeading({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <h2 className="text-balance text-3xl font-semibold tracking-normal text-ink md:text-4xl">{title}</h2>
      {intro ? <p className="mt-4 text-lg leading-8 text-slate-700">{intro}</p> : null}
    </div>
  );
}
