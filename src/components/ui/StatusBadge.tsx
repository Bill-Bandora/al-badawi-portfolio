export function StatusBadge({ label, inverse = false }: { label: string; inverse?: boolean }) {
  return <span className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${inverse ? 'bg-white/10 text-cyan-200' : 'bg-cyan/10 text-cyan'}`}>{label}</span>;
}
