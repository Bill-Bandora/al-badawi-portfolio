import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { languages, routeMap, routePath } from '../../config/site';

export function LanguageSwitcher() {
  const { lang = 'de' } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  function translatedPath(nextLang: string) {
    const parts = location.pathname.split('/').filter(Boolean);
    const currentPath = parts[1] ?? '';
    const rest = parts.slice(2);
    const entry = Object.values(routeMap).find((route) => (Object.values(route.paths) as string[]).includes(currentPath));
    const nextPath = entry ? routePath(entry.key, nextLang) : currentPath;
    return `/${nextLang}/${[nextPath, ...rest].filter(Boolean).join('/')}`.replace(/\/$/, '/');
  }

  return (
    <div className="flex rounded-card border border-slate-200 bg-white p-1" aria-label="Sprache auswählen">
      {languages.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => {
            navigate(translatedPath(item.code) + location.search);
          }}
          className={`min-h-9 rounded px-3 text-sm font-semibold transition ${lang === item.code ? 'bg-ink text-white' : 'text-slate-700 hover:bg-slate-100'}`}
          aria-pressed={lang === item.code}
        >
          {item.short}
        </button>
      ))}
    </div>
  );
}
