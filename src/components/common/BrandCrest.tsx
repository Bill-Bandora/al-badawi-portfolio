export function BrandCrest({ className = '', eager = false, cropped = false }: { className?: string; eager?: boolean; cropped?: boolean }) {
  return (
    <picture className={`${cropped ? 'overflow-hidden rounded-full bg-night' : 'overflow-hidden rounded-full'} ${className}`}>
      <source srcSet="/images/brand/bandora-crest-1200.avif" type="image/avif" />
      <source srcSet="/images/brand/bandora-crest-640.webp 640w, /images/brand/bandora-crest-1200.webp 1200w" type="image/webp" />
      <img
        src="/images/brand/bandora-crest-640.webp"
        width="640"
        height="640"
        alt="Bill Bandora Development Wappen"
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={cropped ? 'h-full w-full scale-[1.46] object-cover object-[50%_42%]' : 'h-full w-full object-contain'}
      />
    </picture>
  );
}
