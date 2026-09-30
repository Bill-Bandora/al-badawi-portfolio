export function BrandCrest({ className = '', eager = false }: { className?: string; eager?: boolean }) {
  return (
    <picture className={className}>
      <source srcSet="/images/brand/bandora-crest-1200.avif" type="image/avif" />
      <source srcSet="/images/brand/bandora-crest-640.webp 640w, /images/brand/bandora-crest-1200.webp 1200w" type="image/webp" />
      <img
        src="/images/brand/bandora-crest-640.webp"
        width="640"
        height="640"
        alt="Bill Bandora Development Wappen"
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className="h-full w-full object-contain"
      />
    </picture>
  );
}
