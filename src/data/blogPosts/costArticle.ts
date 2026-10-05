import type { BlogPost } from '../blogTypes';
import { p1PublishedAt, p1PublishedLabel, webDevelopmentUrl } from '../blogTypes';

export const costArticle: BlogPost = {
  slug: 'website-erstellen-lassen-kosten-2026',
  languages: ['de'],
  title: 'Website erstellen lassen: Kosten 2026 – womit Unternehmen wirklich rechnen müssen',
  metaTitle: 'Website erstellen lassen: Kosten 2026 | Bandora',
  excerpt: 'Was eine Firmenwebsite kostet, welche Leistungen den Preis treiben und wie Sie Angebote vergleichen, ohne Äpfel mit Birnen zu verrechnen.',
  category: 'Kosten & Planung',
  cardTitle: 'Budget planen, bevor das Angebot kommt.',
  publishedAt: p1PublishedAt,
  publishedLabel: p1PublishedLabel,
  readingTime: '11 Min. Lesezeit',
  intro: 'Eine professionelle Website hat keinen sinnvollen Einheitspreis. In unserer SERP-Stichprobe vom 5. Oktober 2026 reichen veröffentlichte Anbieterpreise von sehr schlanken Paketen unter 1.000 Euro bis zu fünfstelligen Individualprojekten. Der entscheidende Unterschied ist nicht das Wort „Website“, sondern der vereinbarte Umfang: Strategie, Inhalte, Design, Funktionen, technische Qualität, Rechte und Betrieb.',
  sections: [
    {
      id: 'kurzantwort',
      title: 'Was kostet es, eine Website erstellen zu lassen?',
      paragraphs: [
        'Die belastbare Antwort entsteht erst aus einem konkreten Sollbild. Ein Onepager mit gelieferten Texten ist ein anderes Produkt als eine mehrsprachige Firmenwebsite mit individuellen Leistungsseiten, Terminbuchung, Migration bestehender URLs und laufender Betreuung.',
        'Öffentlich genannte Beispiele zeigen vor allem die Breite des Marktes: webseiteerstellenberlin.de veröffentlicht Pakete von 499 bis 1.999 Euro, Wolfgegenlicht nennt 1.490 Euro für einen Design-Sprint und 3.500 Euro für einen Relaunch, Redcat ordnet unterschiedliche Anbieterformen grob zwischen 1.500 und 20.000 Euro ein. Das sind Selbstauskünfte einzelner Anbieter, keine allgemeingültige Marktpreisliste.'
      ],
      callout: 'Vergleichen Sie nie nur Endbeträge. Vergleichen Sie Seitenumfang, Inhalte, Funktionen, Abnahme, Rechte und laufende Kosten auf derselben Basis.'
    },
    {
      id: 'preisbestandteile',
      title: 'Welche Arbeit steckt im Preis?',
      paragraphs: [
        'Der sichtbare Bildschirm ist nur ein Teil des Projekts. Vor der Entwicklung müssen Zielgruppe, Suchintention, Seitenstruktur und gewünschte Handlungen geklärt werden. Danach folgen Design, responsive Umsetzung, Inhaltsarbeit, Formulare, technische SEO, Tests und Veröffentlichung.',
        'Bei individuellen Projekten kommen Datenmodelle, Rollen, Schnittstellen oder Automatisierungen hinzu. Genau an dieser Stelle wird aus einer Marketing-Website eine Webanwendung. Ein Kontaktformular ist Standard; ein Kundenportal mit Login, Status und unterschiedlichen Rechten ist Softwareentwicklung.'
      ],
      table: {
        caption: 'Typische Kostenblöcke eines Website-Projekts',
        headers: ['Block', 'Was konkret geklärt werden sollte'],
        rows: [
          ['Strategie & Struktur', 'Ziele, Zielgruppen, Suchintentionen, Seitenplan und Conversion-Pfade'],
          ['Inhalte', 'Wer schreibt Texte, liefert Bilder, prüft Fakten und gibt Inhalte frei?'],
          ['Design & UX', 'Individuelles System oder Vorlage, mobile Zustände, Barrierefreiheit, Feedbackrunden'],
          ['Entwicklung', 'Seitentypen, Formulare, CMS, Mehrsprachigkeit, Schnittstellen und Sonderfunktionen'],
          ['SEO & Qualität', 'Titles, Canonicals, Sitemap, strukturierte Daten, Performance, 404 und Redirects'],
          ['Launch & Betrieb', 'Hosting, Domain, Monitoring, Backups, Wartung, Support und Übergabe']
        ]
      }
    },
    {
      id: 'kostentreiber',
      title: 'Die sechs größten Kostentreiber',
      paragraphs: [
        'Nicht jede zusätzliche Unterseite ist teuer. Teuer wird vor allem zusätzliche Unklarheit: neue Seitentypen während der Entwicklung, fehlende Inhalte, unentschiedene Verantwortlichkeiten oder Funktionen, deren Fehlerfälle erst spät auffallen.',
        'Ein gutes Angebot trennt Muss-Anforderungen, spätere Ausbaustufen und bewusste Ausschlüsse. So lässt sich ein sinnvoller erster Umfang bauen, ohne das Projekt mit Optionen zu überladen.'
      ],
      bullets: [
        'Anzahl verschiedener Seitentypen statt bloßer Seitenzahl',
        'Texterstellung, Bildauswahl und inhaltliche Abstimmung',
        'individuelles Design und Anzahl der Feedbackrunden',
        'Mehrsprachigkeit einschließlich Metadaten, Navigation und hreflang',
        'Schnittstellen, Login, Buchung, Shop oder andere Fachlogik',
        'Migration bestehender URLs, Inhalte und Suchmaschinen-Signale'
      ],
      links: [
        { label: 'Welche technische Lösung zum Projekt passt', to: '/de/blogs/wordpress-baukasten-oder-individuelle-website' },
        { label: 'So läuft ein Website-Projekt bis zum Launch ab', to: '/de/blogs/website-erstellen-lassen-ablauf' }
      ]
    },
    {
      id: 'laufende-kosten',
      title: 'Welche laufenden Kosten kommen nach dem Launch hinzu?',
      paragraphs: [
        'Nach der Erstellung bleiben Domain, Hosting, Backups, Sicherheits- und Abhängigkeitsupdates, Monitoring sowie inhaltliche Änderungen. Bei einem Baukasten stecken Teile davon im Tarif. Bei WordPress entstehen Aufgaben rund um Core, Theme und Plugins. Bei einer individuell entwickelten Website müssen Abhängigkeiten, Build-Prozess, Server und Formulare betreut werden.',
        'Die entscheidende Angebotsfrage lautet daher nicht nur „Was kostet die Wartung?“, sondern „Was ist darin enthalten und wie wird ein Ausfall behandelt?“. Ein Backup ohne getesteten Restore ist kein belastbarer Wiederherstellungsplan.'
      ]
    },
    {
      id: 'budget',
      title: 'So erhalten Sie eine belastbare Budgeteinschätzung',
      paragraphs: [
        'Schreiben Sie vor der Anfrage auf, was die Website geschäftlich erreichen soll. Nennen Sie vorhandene Inhalte, benötigte Sprachen, wichtige Funktionen, einen gewünschten Termin und wer intern Entscheidungen trifft. Ein Entwickler kann daraus einen ersten Scope und offene Risiken ableiten.',
        'Bei Bandora Development beginnt die Einschätzung deshalb nicht mit Farben oder Animationen, sondern mit Ziel, Informationsarchitektur und technischem Umfang. Bei Projekten wie Bandora Studio oder Digital Footprint OS war die klare Trennung zwischen Kernfunktion und späterem Ausbau entscheidend.'
      ],
      bullets: [
        'Welches konkrete Problem soll die Website lösen?',
        'Welche fünf bis zehn Seiten oder Seitentypen werden wirklich gebraucht?',
        'Welche Inhalte existieren bereits und wer liefert den Rest?',
        'Welche Funktionen sind zum Launch unverzichtbar?',
        'Welche Qualitätsnachweise und Übergaben erwarten Sie?'
      ],
      links: [{ label: 'Webentwicklung und professionelle Websites bei Bandora', to: webDevelopmentUrl }]
    },
    {
      id: 'angebote',
      title: 'Woran erkennen Sie ein gutes Angebot?',
      paragraphs: [
        'Ein guter Preis ist ein nachvollziehbarer Preis. Das Angebot sollte Ergebnisse, Seiten, Funktionen, Verantwortlichkeiten, Feedbackrunden, Abnahme, Zahlungsplan und Folgekosten benennen. Außerdem muss klar sein, wem Domain, Quellcode, Inhalte und Zugänge gehören.',
        'Wenn zwei Angebote weit auseinanderliegen, markieren Sie nicht zuerst die Summe, sondern jede fehlende oder anders definierte Leistung. Häufig erklärt sich der Unterschied durch Textarbeit, Migration, SEO, Tests, Support oder die Frage, ob nach Kündigung etwas exportiert werden kann.'
      ],
      links: [{ label: '15 Punkte zum Vergleich von Webdesign-Angeboten', to: '/de/blogs/webdesign-angebote-vergleichen' }]
    }
  ],
  faq: [
    { question: 'Warum nennen Anbieter so unterschiedliche Preise?', answer: 'Weil unter „Website“ sehr unterschiedliche Leistungen verkauft werden. Umfang, Inhalte, Design, Sonderfunktionen, Migration, Qualitätssicherung und Betreuung müssen identisch sein, bevor Preise sinnvoll vergleichbar werden.' },
    { question: 'Sind Hosting und Wartung im Projektpreis enthalten?', answer: 'Nicht automatisch. Beides muss im Angebot mit Leistungsumfang, Laufzeit, Reaktionszeit und Kündigungsfolgen ausdrücklich beschrieben sein.' },
    { question: 'Ist eine günstige Website automatisch schlecht?', answer: 'Nein. Ein kleiner, klar begrenzter Umfang kann günstig und sinnvoll sein. Problematisch wird es, wenn notwendige Leistungen fehlen oder ein niedriger Einstiegspreis spätere Bindung und Folgekosten verdeckt.' }
  ],
  sources: [
    { label: 'webseiteerstellenberlin.de – veröffentlichte Pakete', url: 'https://webseiteerstellenberlin.de/', note: 'Abruf 05.10.2026; Anbieter-Selbstauskunft' },
    { label: 'Wolfgegenlicht – Webdesign-Preise Berlin 2026', url: 'https://www.wolfgegenlicht.de/webdesign-preise/', note: 'Abruf 05.10.2026; Anbieter-Selbstauskunft' },
    { label: 'Redcat Media – Kosten und Beispiele', url: 'https://www.redcat-media.de/webseite-erstellen-lassen-kosten/', note: 'Abruf 05.10.2026; Anbieter-Selbstauskunft' },
    { label: 'Deine-Agenturen – Kosten, Ablauf und Anbieterwahl', url: 'https://deine-agenturen.com/ratgeber/website-erstellen-lassen', note: 'Abruf 05.10.2026' }
  ],
  relatedSlugs: ['webdesign-angebote-vergleichen', 'wordpress-baukasten-oder-individuelle-website', 'website-erstellen-lassen-ablauf'],
  projectLinks: [
    { label: 'Bandora Studio: modularer Produktumfang', to: '/de/projekte/bandora-studio' },
    { label: 'Digital Footprint OS: Webanwendung mit Fachlogik', to: '/de/projekte/digital-footprint-os' }
  ],
  cta: { eyebrow: 'Budget ohne Ratespiel', title: 'Projekt grob einschätzen lassen', text: 'Beschreiben Sie Ziel, Seitenumfang und notwendige Funktionen. Sie erhalten eine erste technische Einordnung statt einer pauschalen Paketnummer.', label: 'Projekt grob einschätzen lassen' }
};
