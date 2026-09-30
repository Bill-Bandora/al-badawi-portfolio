import { ArrowLeft, CalendarDays, Clock } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { SeoHead } from '../components/common/SeoHead';
import { ButtonLink } from '../components/ui/Button';
import { findBlog } from '../data/blogs';
import { localizedUrl } from '../config/site';

export function BlogArticlePage() {
  const { lang = 'de', slug } = useParams();
  const blog = findBlog(slug);

  if (!blog) return <Navigate to={localizedUrl('blogs', lang)} replace />;

  return (
    <>
      <SeoHead title={`${blog.title} | Al-Badawi`} description={blog.excerpt} path={`blogs/${blog.slug}`} />
      <article className="bg-white">
        <header className="bg-gradient-to-br from-ink via-coal to-blue px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Link to={localizedUrl('blogs', lang)} className="inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-white">
              <ArrowLeft className="size-4" /> Zurück zu den Blogs
            </Link>
            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-cyan">Digitalisierung · Kleine Unternehmen</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">{blog.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">{blog.excerpt}</p>
            <div className="mt-7 flex flex-wrap gap-5 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2"><CalendarDays className="size-4" />{blog.publishedLabel}</span>
              <span className="inline-flex items-center gap-2"><Clock className="size-4" />{blog.readingTime}</span>
              <span>Von Bilal Al-Badawi</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="blog-content">
            <p className="lead">Wir leben in einer Zeit, in der man sein Essen per App bestellt, Rechnungen mit dem Handy bezahlt und in wenigen Sekunden herausfindet, welcher Handwerker, Friseur oder Laden in der Nähe gute Bewertungen hat. Und trotzdem gibt es noch erstaunlich viele kleine Unternehmen und Betriebe, die keine eigene Website haben.</p>

            <p>Das ist gar nicht als Vorwurf gemeint. Viele Inhaberinnen und Inhaber haben schlicht genug mit ihrem Tagesgeschäft zu tun. Aufträge bearbeiten, Kunden betreuen, Material bestellen, Papierkram erledigen – da landet die Website schnell auf der Liste mit den Dingen, die man „irgendwann mal“ angeht. Manche sagen auch: „Meine Kunden kommen über Empfehlungen“ oder „Ich habe doch Instagram“. Beides kann gut funktionieren. Trotzdem bleibt ohne eigene Website ziemlich viel Potenzial liegen.</p>

            <h2>Der erste Eindruck entsteht heute oft bei Google</h2>
            <p>Stell dir vor, jemand bekommt deinen Firmennamen von einem Bekannten empfohlen. Was macht diese Person als Nächstes? Sehr wahrscheinlich wird sie dich googeln. Wenn dort nur ein alter Brancheneintrag, ein kaum gepflegtes Social-Media-Profil oder gar nichts auftaucht, entsteht schnell Unsicherheit: Gibt es den Betrieb noch? Ist das seriös? Was genau wird angeboten?</p>

            <p>Eine ordentliche Website beantwortet diese Fragen direkt. Sie zeigt, wer hinter dem Unternehmen steht, welche Leistungen angeboten werden und wie man Kontakt aufnehmen kann. Dafür braucht es übrigens keine riesige Seite mit zwanzig Unterseiten und wilden Animationen. Oft reichen schon eine klare Startseite, eine Leistungsübersicht, ein paar echte Bilder und gut sichtbare Kontaktdaten.</p>

            <h2>Eine Website arbeitet auch nach Feierabend</h2>
            <p>Während du auf einer Baustelle bist, Kundentermine hast oder einfach Feierabend machst, bleibt deine Website erreichbar. Interessenten können sich in Ruhe informieren, Öffnungszeiten prüfen, Referenzen ansehen oder eine Anfrage senden. Das spart nicht nur Rückfragen, sondern kann auch dafür sorgen, dass aus einem neugierigen Besucher ein echter Kunde wird.</p>

            <p>Besonders hilfreich ist das bei erklärungsbedürftigen Leistungen. Statt am Telefon immer wieder dieselben grundlegenden Fragen zu beantworten, kannst du auf der Website verständlich erklären, wie du arbeitest, für wen dein Angebot geeignet ist und was Kunden ungefähr erwarten können. So kommen Anfragen oft schon besser vorbereitet bei dir an.</p>

            <h2>Social Media ist gut – aber nicht dein eigenes Zuhause</h2>
            <p>Instagram, Facebook und TikTok können wertvolle Kanäle sein. Das Problem: Die Plattform gehört nicht dir. Reichweiten ändern sich, Konten können gesperrt werden und nicht jede Zielgruppe ist dort aktiv. Eine Website dagegen ist deine eigene digitale Basis. Du bestimmst, wie dein Unternehmen präsentiert wird, welche Inhalte wichtig sind und wohin Besucher geführt werden.</p>

            <p>Am stärksten ist meistens die Kombination: Social Media sorgt für Aufmerksamkeit, die Website liefert Vertrauen und ausführliche Informationen. Wer einen Beitrag interessant findet, landet mit einem Klick auf einer professionellen Seite und kann dort direkt den nächsten Schritt machen.</p>

            <h2>Lokale Sichtbarkeit bringt echte Chancen</h2>
            <p>Gerade kleine und lokale Betriebe profitieren davon, bei Suchanfragen wie „Elektriker in meiner Nähe“, „Kosmetikstudio in Berlin“ oder „Steuerberater für Kleinunternehmen“ aufzutauchen. Eine technisch saubere Website mit klaren Texten hilft Suchmaschinen zu verstehen, was du anbietest und in welcher Region du tätig bist.</p>

            <p>Natürlich steht man nicht automatisch nach zwei Tagen ganz oben bei Google. Aber ohne Website hat man für viele relevante Suchanfragen praktisch gar keine Chance. Eine Website ist deshalb kein magischer Verkaufsknopf, sondern ein solides Fundament, das langfristig Sichtbarkeit aufbauen kann.</p>

            <h2>Vertrauen lässt sich zeigen</h2>
            <p>Kleine Unternehmen haben oft etwas, das große Anbieter nur schwer nachbauen können: Persönlichkeit, Nähe und echte Erfahrung. Genau das kann eine Website sichtbar machen. Fotos vom Team, abgeschlossene Projekte, Kundenstimmen oder ein kurzer Einblick in die Arbeitsweise wirken deutlich glaubwürdiger als austauschbare Werbesprüche.</p>

            <p>Und ja, eine unübersichtliche oder seit Jahren veraltete Website kann auch abschrecken. Deshalb geht es nicht darum, einfach irgendwie online zu sein. Die Seite sollte schnell laden, auf dem Smartphone funktionieren und Besuchern ohne Umwege zeigen, was sie suchen.</p>

            <h2>Es muss nicht kompliziert anfangen</h2>
            <p>Viele schieben das Thema auf, weil sie direkt an hohe Kosten, monatelange Projekte oder komplizierte Technik denken. Dabei kann der Einstieg bewusst klein gehalten werden. Eine schlanke Website mit den wichtigsten Informationen ist oft viel sinnvoller als ein überladenes Großprojekt, das nie fertig wird.</p>

            <p>Entscheidend ist, dass die Seite ein konkretes Ziel verfolgt: mehr Anfragen, bessere Auffindbarkeit, weniger wiederkehrende Fragen oder einfach ein professioneller erster Eindruck. Wenn dieses Ziel klar ist, lässt sich der Umfang passend zum Unternehmen planen und später jederzeit erweitern.</p>

            <h2>Fazit: Nicht online zu sein ist inzwischen auch eine Entscheidung</h2>
            <p>Empfehlungen, Stammkunden und persönliche Kontakte bleiben wichtig. Eine eigene Website ersetzt diese Dinge nicht – sie verstärkt sie. Sie macht Empfehlungen überprüfbar, schafft Vertrauen und sorgt dafür, dass ein guter Betrieb auch digital so professionell wirkt, wie er tatsächlich arbeitet.</p>

            <p>Für kleine Unternehmen geht es dabei nicht darum, jedem Trend hinterherzulaufen. Es geht darum, dort sichtbar zu sein, wo potenzielle Kunden längst suchen. Und das ist heute nun einmal sehr häufig online.</p>
          </div>

          <aside className="mt-14 rounded-card bg-ink p-7 text-white sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan">Der nächste Schritt</p>
            <h2 className="mt-3 text-2xl font-semibold">Dein Unternehmen soll online sichtbar werden?</h2>
            <p className="mt-3 leading-7 text-slate-300">Ich entwickle übersichtliche, schnelle Websites, die zu deinem Betrieb und deinen Kunden passen.</p>
            <ButtonLink to={localizedUrl('contact', lang)} variant="dark" className="mt-6">Unverbindlich anfragen</ButtonLink>
          </aside>
        </div>
      </article>
    </>
  );
}
