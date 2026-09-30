import { BrandCrest } from './BrandCrest';

export function ProfileVisual() {
  return (
    <div className="glow-border relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-[1.4rem] bg-night shadow-deep">
      <img
        src="/images/profile-cyber-placeholder.svg"
        alt="Abstrakter Entwickler-Avatar"
        className="h-full w-full object-cover"
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />
      <div className="glass-panel absolute inset-x-5 bottom-5 flex items-center gap-4 rounded-card p-3 text-white">
        <BrandCrest cropped className="block size-16 shrink-0 border border-gold/60" />
        <div><p className="text-xs uppercase tracking-widest text-gold">Bandora</p><p className="font-semibold">Development</p></div>
      </div>
    </div>
  );
}
