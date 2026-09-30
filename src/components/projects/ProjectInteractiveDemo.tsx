import { useState } from 'react';

const copy = {
  de: { title: 'Interaktive Systemdemo', note: 'Lokale, illustrative Demo – keine Live-Daten.', run: 'Ablauf starten', choose: 'Ansicht wählen' },
  en: { title: 'Interactive system demo', note: 'Local illustrative demo — no live data.', run: 'Run workflow', choose: 'Choose view' },
  ar: { title: 'عرض تفاعلي للنظام', note: 'عرض توضيحي محلي — دون بيانات مباشرة.', run: 'بدء المسار', choose: 'اختر العرض' },
};

const configs: Record<string, { options: string[]; states: string[] }> = {
  'bandora-gen8': { options: ['Cloudflare', 'Tunnel', 'Docker Host', 'Application'], states: ['Edge protected', 'Encrypted route', 'Healthy', 'Online'] },
  'digital-footprint-os': { options: ['Discover', 'Normalize', 'Review', 'Prepare'], states: ['100+ sources', 'Structured findings', 'Human decision', 'Dry run only'] },
  'bandora-mt5-trader': { options: ['Signal', 'Risk', 'Execution', 'Broker state'], states: ['Received', 'Validated', 'Async request', 'Reconciled'] },
  'bandora-crypto-scanner': { options: ['BTC · 15m', 'ETH · 1h', 'SOL · 5m', 'XRP · 4h'], states: ['OBSERVING', 'INCOMING', 'ENTRY', 'INVALID'] },
  'bandora-studio': { options: ['Retail', 'Beauty', 'Technology', 'Services'], states: ['Catalog focus', 'Editorial focus', 'Product focus', 'Trust focus'] },
};

export function ProjectInteractiveDemo({ projectId, lang }: { projectId: string; lang: string }) {
  const config = configs[projectId];
  const [active, setActive] = useState(0);
  if (!config) return null;
  const text = copy[(lang === 'en' || lang === 'ar' ? lang : 'de') as keyof typeof copy];
  return (
    <section className="relative overflow-hidden bg-[#080d18] px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="interactive-demo-title">
      <div className="tech-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Prototype</p>
        <h2 id="interactive-demo-title" className="mt-3 text-3xl font-semibold text-white">{text.title}</h2>
        <p className="mt-3 text-slate-400">{text.note}</p>
        <div className="gold-border glow-border mt-8 rounded-[1.5rem]">
          <div className="glass-panel rounded-[1.5rem] p-5 sm:p-8">
            <p className="sr-only">{text.choose}</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {config.options.map((option, index) => (
                <button key={option} type="button" aria-pressed={active === index} onClick={() => setActive(index)} className={`min-h-24 rounded-card border p-4 text-start transition ${active === index ? 'border-gold bg-gold/10 text-white' : 'border-white/10 bg-white/[0.03] text-slate-300 hover:border-cyan/40'}`}>
                  <span className="block text-xs font-semibold tabular-nums text-cyan">0{index + 1}</span>
                  <span className="mt-2 block font-semibold">{option}</span>
                </button>
              ))}
            </div>
            <div className="mt-5 flex min-h-28 items-center justify-between rounded-card border border-cyan/20 bg-night px-5 py-4">
              <div><p className="text-sm text-slate-500">{config.options[active]}</p><p aria-live="polite" className="mt-2 text-xl font-semibold text-cyan">{config.states[active]}</p></div>
              <span className="signal-dot size-3 rounded-full bg-cyan" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
