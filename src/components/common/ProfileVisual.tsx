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
      <div className="glass-panel absolute inset-x-6 bottom-6 rounded-card p-4 text-white">
        <p className="text-sm uppercase tracking-widest text-cyan">AB</p>
        <p className="font-semibold">Software Development</p>
      </div>
    </div>
  );
}
