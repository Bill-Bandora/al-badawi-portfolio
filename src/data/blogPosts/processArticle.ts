import type { BlogPost } from '../blogTypes';
import { p1PublishedAt, p1PublishedLabel, webDevelopmentUrl } from '../blogTypes';

export const processArticle: BlogPost = {
  slug: 'website-erstellen-lassen-ablauf',
  languages: ['de'],
  title: 'Website erstellen lassen: Ablauf von der Idee bis zum geprüften Launch',
  metaTitle: 'Website erstellen lassen: Ablauf bis Launch | Bandora',
  excerpt: 'Ein realistischer Website-Prozess mit Zielen, Struktur, Inhalten, Design, Entwicklung, Abnahme, Launch und Betrieb.',
  category: 'Ablauf & Launch',
  cardTitle: 'Ein klarer Prozess verhindert teure Überraschungen.',
  publishedAt: p1PublishedAt,
  publishedLabel: p1PublishedLabel,
  readingTime: '10 Min. Lesezeit',
  intro: 'Ein professionelles Website-Projekt läuft in acht nachvollziehbaren Phasen: Zielklärung, Inventar, Struktur, Inhalte, Design, Entwicklung, Abnahme und Launch. Wie lange das dauert, hängt weniger von der Seitenzahl als von Entscheidungen, Inhaltsfreigaben, Sonderfunktionen und Feedbackwegen ab.',
  sections: [
    {
      id: 'zeit',
      title: 'Wie lange dauert die Website-Erstellung?',
      paragraphs: [
        'Öffentlich beworbene Zeiträume reichen von 14 Werktagen für klar definierte Pakete bis zu sechs bis zehn Wochen für umfassendere Firmenwebsites. Beide Angaben können stimmen, wenn der Scope unterschiedlich ist. Ein fester Termin ist erst seriös, wenn Inhalte, Verantwortliche, Funktionen und Feedbackfenster geklärt sind.',
        'Der häufigste Engpass ist nicht das Programmieren, sondern eine offene Inhalts- oder Entscheidungsfrage. Deshalb gehören Texte, Bilder und Freigaben in denselben Zeitplan wie Design und Entwicklung.'
      ]
    },
    {
      id: 'phasen',
      title: 'Die acht Phasen eines belastbaren Website-Projekts',
      paragraphs: ['Die Phasen können sich teilweise überschneiden. Wichtig ist, dass jede Phase ein prüfbares Ergebnis besitzt.'],
      table: {
        caption: 'Vom Erstgespräch bis zum Betrieb',
        headers: ['Phase', 'Ergebnis'],
        rows: [
          ['1. Zielklärung', 'Zielgruppen, Geschäftsziel, Hauptaktion und Erfolgskriterien'],
          ['2. Inventar', 'vorhandene URLs, Inhalte, Bilder, Zugänge und technische Abhängigkeiten'],
          ['3. Struktur', 'Sitemap, Seitentypen, Navigation, Suchintentionen und URL-Plan'],
          ['4. Inhalte', 'freigegebene Texte, Medien, Belege, Metadaten und Verantwortlichkeiten'],
          ['5. Design & UX', 'mobile und Desktop-Zustände, Komponenten, Kontraste und Interaktionen'],
          ['6. Entwicklung', 'funktionierende Seiten, Formulare, CMS/API, Schema und Performance-Basis'],
          ['7. Abnahme', 'Tests, Fehlerliste, Inhaltsprüfung und formale Freigabe'],
          ['8. Launch & Betrieb', 'DNS/Hosting, Monitoring, Backups, Analytics-Entscheidung und Übergabe']
        ]
      }
    },
    {
      id: 'briefing',
      title: 'Was vor dem ersten Design geklärt sein sollte',
      paragraphs: [
        'Das Briefing sollte nicht aus „modern, hochwertig, gerne mit Animationen“ bestehen. Nützlich sind reale Zielgruppenfragen, wichtige Leistungen, vorhandene Belege und die Handlung, zu der jede Seitengruppe führen soll.',
        'SEO beginnt hier: Wenn Suchintention und Seitenplan erst nach dem Design auftauchen, fehlen häufig Platz, Hierarchie und interne Links. Ein späterer Umbau kostet mehr als eine frühe Entscheidung.'
      ],
      bullets: [
        'Welche Nutzerfrage beantwortet jede geplante Seite?',
        'Welche Inhalte und Nachweise existieren bereits?',
        'Welche Aktion ist wichtiger: Anruf, Formular, Termin oder Kauf?',
        'Welche alten URLs müssen erhalten oder weitergeleitet werden?',
        'Wer darf wann Feedback geben und final freigeben?'
      ],
      links: [{ label: 'SEO-Anforderungen vor Design und Entwicklung', to: '/de/blogs/seo-beim-website-erstellen' }]
    },
    {
      id: 'entwicklung',
      title: 'Was während der Entwicklung geprüft werden muss',
      paragraphs: [
        'Eine Vorschau, die auf einem Laptop gut aussieht, ist noch kein abnahmefähiges Produkt. Formulare, Tastaturbedienung, mobile Navigation, 404-Seiten, Metadaten, Social Previews, Canonicals, strukturierte Daten und reale Ladebedingungen brauchen eigene Tests.',
        'Bei der eigenen Portfolioseite prüft Bandora unter anderem TypeScript, Lint, Komponententests, Prerendering, mobile Viewports, Desktop-Regression, Sitemap, strukturierte Daten und echte Serverrouten. Diese Liste wird je Projekt angepasst; sie zeigt aber, was „fertig“ technisch bedeuten kann.'
      ],
      links: [{ label: 'Webdesign-Angebote auf konkrete Qualitätsnachweise prüfen', to: '/de/blogs/webdesign-angebote-vergleichen' }]
    },
    {
      id: 'launch',
      title: 'Ein Launch braucht einen Rückweg',
      paragraphs: [
        'Vor dem Livegang werden Domain, SSL, Caching, Formulare, Weiterleitungen, robots.txt, Sitemap und Monitoring geprüft. Bei einem Relaunch gehört eine URL-zu-URL-Redirect-Matrix dazu. Nach dem Umschalten werden zentrale Seiten und Fehlerpfade noch einmal öffentlich getestet.',
        'Ein kontrollierter Rollback ist kein Zeichen mangelnden Vertrauens, sondern professionelle Risikobegrenzung. Beim Self-Hosting-Setup von Bandora Gen8 werden neue Container zuerst geprüft und erst danach aktiviert; das vorherige Image bleibt als Rückfalloption verfügbar.'
      ],
      links: [{ label: 'Bandora Gen8 und der kontrollierte Deployment-Betrieb', to: '/de/projekte/bandora-gen8' }]
    },
    {
      id: 'vorbereitung',
      title: 'So bereiten Sie Ihr Projekt vor',
      paragraphs: ['Sie müssen kein technisches Pflichtenheft schreiben. Eine kurze, ehrliche Ausgangslage beschleunigt die erste Einschätzung bereits deutlich.'],
      bullets: [
        'Ziel und wichtigste Zielgruppe in jeweils einem Satz',
        'Liste vorhandener Seiten, Texte, Bilder und Zugänge',
        'drei unverzichtbare Funktionen und drei spätere Wünsche',
        'verantwortliche Person für Feedback und Freigabe',
        'gewünschter Launch-Zeitraum mit tatsächlichem Anlass'
      ],
      links: [{ label: 'Website-Projekt mit Bandora Development besprechen', to: webDevelopmentUrl }]
    }
  ],
  faq: [
    { question: 'Was verzögert Website-Projekte am häufigsten?', answer: 'Fehlende oder spät freigegebene Inhalte, wechselnde Anforderungen, mehrere ungeklärte Entscheider und externe Integrationen ohne rechtzeitigen Zugang.' },
    { question: 'Kann Design und Text gleichzeitig entstehen?', answer: 'Ja, aber Struktur und Kernbotschaften müssen früh stabil sein. Sonst wird Design mit Platzhaltertext abgenommen und später durch reale Inhalte beschädigt.' },
    { question: 'Was gehört zur technischen Abnahme?', answer: 'Mindestens zentrale Nutzerwege, mobile und Desktop-Darstellung, Formulare, Tastaturbedienung, Performance, Metadaten, Indexierungsdateien, 404-Verhalten und vereinbarte Schnittstellen.' }
  ],
  sources: [
    { label: 'webseiteerstellenberlin.de – veröffentlichter 14-Tage-Prozess', url: 'https://webseiteerstellenberlin.de/', note: 'Abruf 05.10.2026; Anbieter-Selbstauskunft' },
    { label: 'SEKO Webdesign – veröffentlichter Leistungs- und Zeitrahmen', url: 'https://seko-webdesign.de/leistungen/', note: 'Abruf 05.10.2026; Anbieter-Selbstauskunft' },
    { label: 'Google Search Central – Website-Umzüge mit URL-Änderungen', url: 'https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=de', note: 'Abruf 05.10.2026' }
  ],
  relatedSlugs: ['seo-beim-website-erstellen', 'webdesign-angebote-vergleichen', 'website-erstellen-lassen-kosten-2026'],
  projectLinks: [
    { label: 'Bandora Gen8: Hosting und Deployment', to: '/de/projekte/bandora-gen8' },
    { label: 'Bandora Studio: iterativ entwickeltes Produkt', to: '/de/projekte/bandora-studio' }
  ],
  cta: { eyebrow: 'Vom Ziel zum Launch', title: 'Projektablauf klären', text: 'Ein kurzes Briefing reicht für den Start. Gemeinsam lassen sich Scope, Abhängigkeiten und ein realistischer nächster Schritt bestimmen.', label: 'Projektablauf klären' }
};
