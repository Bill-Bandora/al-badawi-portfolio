export function StatusBadge({ label, inverse = false }: { label: string; inverse?: boolean }) {
  return <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-semibold ${inverse ? 'border-cyan/25 bg-cyan/10 text-cyan-100' : 'border-cyan/20 bg-cyan/10 text-cyan'}`}><span className="signal-dot size-1.5 rounded-full bg-cyan" aria-hidden="true" />{label}</span>;
}
