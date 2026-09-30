import { ArrowRight, Database, MonitorSmartphone, Server, ShieldCheck } from 'lucide-react';

const flows: Record<string, string[]> = {
  'bandora-org': ['Desktop-Anwendung', 'Lokale Programmdaten', 'Update-System', 'Backup vor Updates'],
  buynot: ['React Native + Expo', 'NestJS API', 'PostgreSQL + Prisma', 'Redis'],
  'device-tracking': ['React + Vite', 'Express REST API', 'MariaDB', 'Transaktionssichere Historie'],
  roommate: ['React Native', 'Modulare Komponenten', 'REST APIs', 'Erweiterbare Funktionen'],
};

const icons = [MonitorSmartphone, Server, Database, ShieldCheck];

export function ArchitectureFlow({ projectId }: { projectId: string }) {
  const items = flows[projectId] ?? [];
  return (
    <div className="relative mt-8 grid gap-3 md:grid-cols-4" aria-label="Technischer Ablauf">
      <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-gradient-to-r from-cyan/10 via-cyan/70 to-blue/10 md:block" aria-hidden="true" />
      {items.map((item, index) => {
        const Icon = icons[index];
        return (
          <div key={item} className="relative flex items-center gap-3 rounded-card border border-white/10 bg-white/[0.04] p-4 md:grid md:justify-items-center md:text-center">
            <span className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full border border-cyan/30 bg-navy text-cyan shadow-[0_0_25px_rgba(34,211,238,0.13)]"><Icon className="size-5" aria-hidden="true" /></span>
            <span className="text-sm font-semibold text-slate-200">{item}</span>
            {index < items.length - 1 && <ArrowRight className="ms-auto size-4 text-cyan md:hidden" aria-hidden="true" />}
          </div>
        );
      })}
    </div>
  );
}
