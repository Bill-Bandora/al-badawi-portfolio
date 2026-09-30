import { useState } from 'react';
import { CheckCircle2, History, RotateCcw, Search, UserRound } from 'lucide-react';

type Event = { label: string; time: string };

export function DeviceTrackingDemo({ lang }: { lang: string }) {
  const copy = lang === 'de' ? {
    badge: 'Lokale interaktive Simulation', title: 'Gerätefluss ausprobieren', intro: 'Mockdaten demonstrieren Suche, Statuswechsel, Zuweisung und Historie. Es werden keine Produktivdaten verwendet.', placeholder: 'Inventarnummer, z. B. INV-1042', search: 'Gerät suchen', empty: 'Gib INV-1042 ein, um das simulierte Gerät zu öffnen.', found: 'Gerät gefunden', status: 'Status', owner: 'Zugewiesen an', assign: 'Mitarbeiter zuweisen', advance: 'Status aktualisieren', rollback: 'Fehler & Rollback simulieren', history: 'Historie', device: 'Notebook · Entwicklung', ready: 'In Bearbeitung', next: 'Qualitätsprüfung', person: 'M. Schneider', created: 'Gerät im System erfasst', assigned: 'Mitarbeiter zugewiesen', changed: 'Status auf Qualitätsprüfung geändert', rolled: 'Fehler erkannt · Änderung zurückgerollt',
  } : lang === 'ar' ? {
    badge: 'محاكاة تفاعلية محلية', title: 'جرّب مسار الجهاز', intro: 'توضح بيانات تجريبية البحث وتغيير الحالة والتعيين والسجل دون استخدام بيانات إنتاج.', placeholder: 'رقم الجرد، مثلا INV-1042', search: 'بحث عن الجهاز', empty: 'أدخل INV-1042 لفتح الجهاز التجريبي.', found: 'تم العثور على الجهاز', status: 'الحالة', owner: 'مخصص إلى', assign: 'تعيين موظف', advance: 'تحديث الحالة', rollback: 'محاكاة خطأ وتراجع', history: 'السجل', device: 'حاسوب محمول · التطوير', ready: 'قيد المعالجة', next: 'فحص الجودة', person: 'M. Schneider', created: 'تم تسجيل الجهاز', assigned: 'تم تعيين الموظف', changed: 'تغيرت الحالة إلى فحص الجودة', rolled: 'تم اكتشاف خطأ · تم التراجع',
  } : {
    badge: 'Local interactive simulation', title: 'Try the device workflow', intro: 'Mock data demonstrates search, status changes, assignment and history. No production data is used.', placeholder: 'Inventory number, e.g. INV-1042', search: 'Find device', empty: 'Enter INV-1042 to open the simulated device.', found: 'Device found', status: 'Status', owner: 'Assigned to', assign: 'Assign employee', advance: 'Update status', rollback: 'Simulate error & rollback', history: 'History', device: 'Notebook · Development', ready: 'In progress', next: 'Quality review', person: 'M. Schneider', created: 'Device registered in the system', assigned: 'Employee assigned', changed: 'Status changed to quality review', rolled: 'Error detected · change rolled back',
  };
  const [query, setQuery] = useState('');
  const [found, setFound] = useState(false);
  const [assigned, setAssigned] = useState(false);
  const [status, setStatus] = useState(copy.ready);
  const [events, setEvents] = useState<Event[]>([{ label: copy.created, time: '09:12' }]);

  function add(label: string) {
    setEvents((current) => [...current, { label, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
  }

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-night px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="device-demo-title">
      <div className="tech-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">{copy.badge}</p>
        <h2 id="device-demo-title" className="mt-3 text-3xl font-semibold text-white md:text-4xl">{copy.title}</h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-300">{copy.intro}</p>
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel rounded-[1.25rem] p-5 sm:p-7">
            <form onSubmit={(event) => { event.preventDefault(); setFound(query.trim().toUpperCase() === 'INV-1042'); }}>
              <label htmlFor="inventory-search" className="text-sm font-semibold text-slate-200">{copy.placeholder}</label>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <input id="inventory-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="INV-1042" className="min-h-12 flex-1 rounded-card border border-white/10 bg-white/5 px-4 text-white placeholder:text-slate-500 focus:border-cyan" />
                <button className="inline-flex min-h-12 items-center justify-center rounded-card bg-cyan px-5 font-semibold text-white hover:bg-blue"><Search className="me-2 size-4" aria-hidden="true" />{copy.search}</button>
              </div>
            </form>
            {!found ? <p className="mt-8 rounded-card border border-dashed border-white/15 p-6 text-slate-400">{copy.empty}</p> : (
              <div className="mt-8 rounded-card border border-cyan/20 bg-cyan/[0.06] p-5">
                <div className="flex items-center gap-3 text-cyan"><CheckCircle2 className="size-5" /><span className="font-semibold">{copy.found}: INV-1042</span></div>
                <p className="mt-4 text-xl font-semibold text-white">{copy.device}</p>
                <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2"><div><dt className="text-slate-500">{copy.status}</dt><dd className="mt-1 font-semibold text-slate-200">{status}</dd></div><div><dt className="text-slate-500">{copy.owner}</dt><dd className="mt-1 font-semibold text-slate-200">{assigned ? copy.person : '—'}</dd></div></dl>
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  <button type="button" onClick={() => { setAssigned(true); add(copy.assigned); }} className="min-h-11 rounded-card border border-white/10 bg-white/5 px-3 text-sm font-semibold text-slate-200 hover:border-cyan/30"><UserRound className="me-2 inline size-4" />{copy.assign}</button>
                  <button type="button" onClick={() => { setStatus(copy.next); add(copy.changed); }} className="min-h-11 rounded-card border border-white/10 bg-white/5 px-3 text-sm font-semibold text-slate-200 hover:border-cyan/30">{copy.advance}</button>
                  <button type="button" onClick={() => add(copy.rolled)} className="min-h-11 rounded-card border border-amber-400/20 bg-amber-400/5 px-3 text-sm font-semibold text-amber-200 hover:border-amber-400/40 sm:col-span-2"><RotateCcw className="me-2 inline size-4" />{copy.rollback}</button>
                </div>
              </div>
            )}
          </div>
          <div className="glass-panel rounded-[1.25rem] p-5 sm:p-7" aria-live="polite">
            <h3 className="flex items-center gap-2 text-xl font-semibold text-white"><History className="size-5 text-cyan" />{copy.history}</h3>
            <ol className="mt-7 space-y-0">
              {events.map((item, index) => <li key={`${item.label}-${index}`} className="relative border-s border-white/15 pb-7 ps-6 last:pb-0"><span className="absolute -left-[5px] top-1 size-2.5 rounded-full bg-cyan shadow-[0_0_14px_rgba(34,211,238,0.7)]" /><p className="text-slate-200">{item.label}</p><time className="mt-1 block text-xs text-slate-500">{item.time}</time></li>)}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
