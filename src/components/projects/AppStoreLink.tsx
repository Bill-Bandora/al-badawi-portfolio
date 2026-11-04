import { Download } from 'lucide-react';

const labels: Record<string, string> = {
  de: 'Im App Store herunterladen',
  en: 'Download on the App Store',
  ar: 'تنزيل من App Store',
};

export function AppStoreLink({ url, lang }: { url: string; lang: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-card border border-white/30 bg-black px-4 py-2.5 text-center font-semibold text-white transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan">
      <Download className="size-5 shrink-0" aria-hidden="true" />
      {labels[lang] ?? labels.de}
    </a>
  );
}
