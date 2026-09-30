import { BrandCrest } from './BrandCrest';

export function ProfileVisual() {
  return (
    <div className="gold-border glow-border relative mx-auto w-full max-w-md rounded-[1.4rem] shadow-deep">
      <div className="glass-panel relative flex min-h-52 items-center gap-6 overflow-hidden rounded-[1.4rem] p-7 text-white sm:p-9">
        <div className="tech-grid absolute inset-0" aria-hidden="true" />
        <div className="ambient-orb -left-12 top-4 size-36 bg-gold/10" aria-hidden="true" />
        <BrandCrest cropped className="relative block size-28 shrink-0 border border-gold/70 shadow-[0_18px_45px_rgba(214,168,75,0.2)] sm:size-32" />
        <div className="relative min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Bandora</p>
          <p className="mt-2 text-2xl font-semibold sm:text-3xl">Development</p>
          <span className="mt-4 block h-px w-20 bg-gradient-to-r from-gold to-cyan" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
