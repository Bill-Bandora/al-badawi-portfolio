export function ProfileVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-card border border-slate-200 bg-white shadow-soft">
      <img
        src="/images/profile-cyber-placeholder.svg"
        alt="Abstrakter Entwickler-Avatar"
        className="h-full w-full object-cover"
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />
      <div className="absolute inset-x-6 bottom-6 rounded-card bg-ink/90 p-4 text-white">
        <p className="text-sm uppercase tracking-widest text-cyan">AB</p>
        <p className="font-semibold">Software Development</p>
      </div>
    </div>
  );
}
