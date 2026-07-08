export function StatusBadge({ label }: { label: string }) {
  return <span className="inline-flex rounded-full bg-cyan/10 px-3 py-1 text-sm font-semibold text-cyan">{label}</span>;
}
