import type { BlogPost } from '../blogTypes';
import { p1PublishedAt, p1PublishedLabel, webDevelopmentUrl } from '../blogTypes';

export const seoArticle: BlogPost = {
  slug: 'seo-beim-website-erstellen',
  languages: ['de'],
  title: 'SEO beim Website-Erstellen: Was vor Design und Entwicklung feststehen muss',
  metaTitle: 'SEO beim Website-Erstellen von Anfang an | Bandora',
  excerpt: 'Search Intent, Seitenstruktur, URLs, Inhalte und technische Signale gehören in die Planung – nicht als Plugin kurz vor dem Launch.',
  category: 'SEO & Technik',
  cardTitle: 'SEO beginnt mit dem Seitenplan, nicht mit dem Plugin.',
  publishedAt: p1PublishedAt,
  publishedLabel: p1PublishedLabel,
  readingTime: '11 Min. Lesezeit',
  intro: 'SEO beginnt vor dem ersten Layout. Suchintention, Themenarchitektur, URLs, interne Links und Inhalte bestimmen, welche Seiten überhaupt entstehen müssen. Entwicklung sorgt anschließend dafür, dass Suchmaschinen diese Inhalte laden, verstehen und sauber indexieren können.',
  sections: [
    {
      id: 'intent',
      title: '1. Suchintention vor Keywords',
      paragraphs: [
        'Eine Leistungsseite und ein Ratgeber können dasselbe Thema berühren, aber unterschiedliche Aufgaben haben. „Webdesign Berlin“ verlangt überwiegend einen lokalen Anbieter; „Website erstellen lassen Kosten“ verlangt zunächst eine Entscheidungshilfe. Werden beide Queries auf einen Artikel gezwungen, passt keine Seite wirklich.',
        'Ordnen Sie jede wichtige Query einer Nutzerfrage, einer Funnel-Stufe und genau einer primären Zielseite zu. Varianten und Synonyme dürfen gemeinsam behandelt werden, solange die Intention gleich bleibt.'
      ]
    },
    {
      id: 'struktur',
      title: '2. Informationsarchitektur und URLs planen',
      paragraphs: [
        'Aus dem Intent-Mapping entsteht eine schlanke Sitemap: Startseite, Leistungen, Projekte, Ratgeber und Kontakt erfüllen jeweils eine klare Rolle. Verwandte Inhalte werden als Cluster miteinander verbunden.',
        'URLs sollten stabil, beschreibend und ohne unnötige Ebenen sein. Bei einem Relaunch wird jede alte relevante URL einer neuen Ziel-URL zugeordnet. Erst danach darf die Struktur umgesetzt werden.'
      ],
      links: [{ label: 'Ablauf eines Website-Projekts bis zum Launch', to: '/de/blogs/website-erstellen-lassen-ablauf' }]
    },
    {
      id: 'content',
      title: '3. Inhalte für Menschen und Suchergebnisse strukturieren',
      paragraphs: [
        'Jede Seite braucht eine eindeutige H1, eine direkte Antwort auf die Hauptfrage und nachvollziehbare Unterthemen. Tabellen sind sinnvoll, wenn mehrere Optionen wirklich verglichen werden. FAQ helfen nur, wenn echte wiederkehrende Fragen beantwortet werden.',
        'Google empfiehlt einzigartige, hilfreiche Inhalte aus eigener Kenntnis. Bandora kann deshalb technische Erfahrung aus Mehrsprachigkeit, Mobile UX, Prerendering, Hosting, APIs und Deployment einbringen – ohne Kundenerfolge oder Marktwerte zu erfinden.'
      ],
      callout: 'Ein Keyword muss nicht in jedem Absatz stehen. Präzise Antworten, klare Begriffe und passende interne Links sind hilfreicher als Wiederholung.'
    },
    {
      id: 'technik',
      title: '4. Die technische SEO-Basis im Build',
      paragraphs: ['Die technische Grundlage muss pro Seitentyp funktionieren und im ausgelieferten HTML prüfbar sein. Dazu gehören mindestens:'],
      bullets: [
        'einzigartiger Title und Meta Description',
        'selbstreferenzierender Canonical',
        'korrekte Statuscodes und echte 404-Seiten',
        'XML-Sitemap und sinnvolle robots.txt',
        'Article-, Service- oder andere passende strukturierte Daten',
        'BreadcrumbList für hierarchische Detailseiten',
        'hreflang nur für tatsächlich vorhandene Sprachvarianten',
        'lesbares, indexierbares HTML durch SSR oder Prerendering',
        'interne Links ohne JavaScript-Abhängigkeit'
      ]
    },
    {
      id: 'ux',
      title: '5. Mobile UX, Performance und Barrierefreiheit',
      paragraphs: [
        'Technische SEO endet nicht bei Metadaten. Eine mobile Navigation muss bedienbar sein, Texte müssen lesbar bleiben, Formulare brauchen Labels und Layouts dürfen beim Laden nicht springen. Core Web Vitals sind keine vollständige Qualitätsbewertung, aber eine nützliche technische Kontrolle.',
        'Bei der eigenen Portfolioseite verbindet Bandora eine mobile App-Navigation, sichere Touch-Flächen, Reduced Motion, prerendered HTML und strukturierte Daten. Die Umsetzung wird auf mehreren Viewports getestet, statt mobile Qualität nur aus einem responsiven Screenshot abzuleiten.'
      ]
    },
    {
      id: 'launch',
      title: '6. Vor und nach dem Launch messen',
      paragraphs: [
        'Vor dem Launch werden Sitemap, Canonicals, Schema, interne Links, Weiterleitungen, Formulare und öffentliche Statuscodes geprüft. Danach sollten Google Search Console und eine datenschutzkonforme Analytics-Entscheidung folgen.',
        'Search Console zeigt später reale Queries, Impressions, CTR und Positionen. Erst diese Daten entscheiden, ob ein Artikel erweitert, eine Money Page geschärft oder ein neues Thema angelegt werden sollte. Ohne diese Daten bleiben Prioritäten qualitativ.'
      ],
      links: [
        { label: 'Webdesign-Angebote auf SEO-Lieferleistungen prüfen', to: '/de/blogs/webdesign-angebote-vergleichen' },
        { label: 'Webentwicklung und technische Websites', to: webDevelopmentUrl }
      ]
    },
    {
      id: 'checkliste',
      title: 'SEO-Checkliste für das Erstgespräch',
      paragraphs: ['Mit diesen Fragen erkennen Sie, ob SEO Teil der Architektur oder nur ein Etikett im Angebot ist.'],
      bullets: [
        'Welche Suchintention bedient welche Seite?',
        'Wie werden doppelte oder konkurrierende Themen vermieden?',
        'Wer verantwortet Keyword-Recherche und Content-Briefings?',
        'Wie werden Canonicals, Sitemap, Schema und Statuscodes getestet?',
        'Wie werden alte URLs und Rankings bei einem Relaunch übertragen?',
        'Welche Messdaten stehen nach dem Launch zur Verfügung?'
      ]
    }
  ],
  faq: [
    { question: 'Reicht ein SEO-Plugin für eine neue Website?', answer: 'Nein. Ein Plugin kann Felder und technische Funktionen bereitstellen, ersetzt aber keine Suchintention, Seitenarchitektur, Inhalte, interne Links oder Qualitätsprüfung.' },
    { question: 'Wann sollte Keyword-Recherche stattfinden?', answer: 'Vor dem finalen Seitenplan und vor dem Design. So erhält jede relevante Intention eine passende Seite und muss nicht nachträglich in fertige Layouts gepresst werden.' },
    { question: 'Braucht jede Seite strukturierte Daten?', answer: 'Nein. Schema sollte zum tatsächlichen Seitentyp und sichtbaren Inhalt passen. Falsche oder künstliche Markups schaffen keinen Mehrwert.' }
  ],
  sources: [
    { label: 'Google Search Central – SEO-Starterleitfaden', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=de', note: 'Abruf 05.10.2026' },
    { label: 'Google Search Central – strukturierte Daten', url: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=de', note: 'Abruf 05.10.2026' },
    { label: 'Google Search Central – mehrsprachige Websites', url: 'https://developers.google.com/search/docs/specialty/international/localized-versions?hl=de', note: 'Abruf 05.10.2026' },
    { label: 'web.dev – Core Web Vitals', url: 'https://web.dev/articles/vitals', note: 'Abruf 05.10.2026' }
  ],
  relatedSlugs: ['website-erstellen-lassen-ablauf', 'webdesign-angebote-vergleichen', 'wordpress-baukasten-oder-individuelle-website'],
  projectLinks: [
    { label: 'Bandora Studio: modularer, testbarer Produktaufbau', to: '/de/projekte/bandora-studio' },
    { label: 'Digital Footprint OS: strukturierte Webanwendung', to: '/de/projekte/digital-footprint-os' }
  ],
  cta: { eyebrow: 'SEO als Teil des Builds', title: 'Website technisch prüfen lassen', text: 'Wenn Seitenstruktur, Indexierung oder technische Qualität unklar sind, lässt sich der aktuelle Stand vor dem nächsten Umbau einordnen.', label: 'Website technisch prüfen lassen' }
};
