import type { BlogPost } from '../blogTypes';
import { p1PublishedAt, p1PublishedLabel, webDevelopmentUrl } from '../blogTypes';

export const offerArticle: BlogPost = {
  slug: 'webdesign-angebote-vergleichen',
  languages: ['de'],
  title: 'Webdesign-Angebote vergleichen: 15 Punkte, die wirklich enthalten sein müssen',
  metaTitle: 'Webdesign-Angebote vergleichen: 15 Prüfpunkte | Bandora',
  excerpt: 'So bringen Sie unterschiedliche Website-Angebote bei Umfang, Qualität, Rechten, Betrieb und Gesamtkosten auf dieselbe Vergleichsbasis.',
  category: 'Angebotsprüfung',
  cardTitle: 'Nicht die Summe vergleichen, sondern den vereinbarten Umfang.',
  publishedAt: p1PublishedAt,
  publishedLabel: p1PublishedLabel,
  readingTime: '10 Min. Lesezeit',
  intro: 'Webdesign-Angebote sind erst vergleichbar, wenn sie dasselbe Ergebnis beschreiben. Prüfen Sie nicht nur Seitenzahl und Preis, sondern Ziele, Inhalte, Funktionen, technische Abnahme, Rechte, Betrieb und Kosten über mehrere Jahre. Was nicht schriftlich definiert ist, wird später zur Annahme, zum Nachtrag oder zum Streitpunkt.',
  sections: [
    {
      id: 'basis',
      title: 'Zuerst ein gemeinsames Sollbild schaffen',
      paragraphs: [
        'Schicken Sie allen Anbietern dieselbe kurze Projektbeschreibung. Eine Landingpage, eine mehrseitige Firmenwebsite und ein Kundenportal dürfen nicht in einer Tabelle nebeneinanderstehen, nur weil alle „Website“ heißen.',
        'Notieren Sie Muss-Funktionen, vorhandene Inhalte, gewünschte Sprachen, alte URLs, Termin, interne Verantwortliche und den gewünschten Betrieb. Anbieter dürfen bessere Lösungen vorschlagen, sollten Abweichungen aber sichtbar markieren.'
      ]
    },
    {
      id: 'checkliste',
      title: 'Die 15 Prüfpunkte für jedes Angebot',
      paragraphs: ['Zu jedem Punkt sollte das Angebot eine Leistung, eine Zuständigkeit oder einen ausdrücklichen Ausschluss enthalten.'],
      bullets: [
        '1. Geschäftsziel, Zielgruppe und gewünschte Hauptaktion',
        '2. Seitenplan und unterschiedliche Seitentypen',
        '3. Funktionen, Integrationen und bewusste Ausschlüsse',
        '4. Verantwortung für Texte, Bilder, Übersetzungen und Rechtstexte',
        '5. individuelles Design, Vorlage oder Design-System',
        '6. mobile Zustände, Browserumfang und Barrierefreiheitsniveau',
        '7. SEO-Leistungen: Research, Titles, Canonicals, Sitemap, Schema, Redirects',
        '8. Performance-Ziele und reale Messmethode',
        '9. Feedbackrunden, Änderungsprozess und Abnahme',
        '10. Domain, Hosting, SSL, E-Mail und technische Zugänge',
        '11. Eigentum an Quellcode, Design, Inhalten und Daten',
        '12. Backups, Monitoring, Updates und Wiederherstellung',
        '13. Support nach Launch, Reaktionszeiten und Stundensätze',
        '14. Einmalige und laufende Kosten auf derselben Netto-/Bruttobasis',
        '15. Exit-Plan: Export, Dokumentation und Anbieterwechsel'
      ]
    },
    {
      id: 'seo',
      title: 'Was „SEO inklusive“ konkret bedeuten sollte',
      paragraphs: [
        'Eine SEO-Grundlage kann Suchintention, Seitenstruktur, sprechende URLs, einzigartige Titles und Descriptions, Canonicals, Indexierungssteuerung, Sitemap, strukturierte Daten, interne Links, mobile Performance und Redirects umfassen. Laufende Content-Arbeit und Linkaufbau sind separate Leistungen.',
        'Bitten Sie um eine prüfbare Liste. Ein grünes Plugin-Symbol oder die Formulierung „Google-optimiert“ ist keine Abnahme.'
      ],
      links: [{ label: 'SEO beim Website-Erstellen richtig einplanen', to: '/de/blogs/seo-beim-website-erstellen' }]
    },
    {
      id: 'technik',
      title: 'Technische Qualität muss abnehmbar sein',
      paragraphs: [
        'Fragen Sie, welche Browser und Viewports getestet werden, wie Formulare abgesichert sind, ob unbekannte URLs echte 404-Antworten liefern und wer Performance misst. Bei mehrsprachigen Seiten kommen Sprachpfade, hreflang, Canonicals und RTL-Darstellung hinzu.',
        'Bei Bandora gehören automatisierter Build, TypeScript, Lint, Komponententests, Prerendering und ein kontrollierter Deployment-Check zum eigenen Website-Prozess. Nicht jedes Kundenprojekt braucht dieselben Werkzeuge, aber jedes braucht definierte Qualitätsnachweise.'
      ]
    },
    {
      id: 'kostenvergleich',
      title: 'Gesamtkosten statt Einstiegspreis vergleichen',
      paragraphs: [
        'Addieren Sie Projektpreis, Lizenzen, Hosting, Wartung, Supportkontingente und realistische Änderungen über denselben Zeitraum. Halten Sie fest, ob ein Mietmodell nach Kündigung exportierbar ist und ob ein Festpreis nur bei unverändertem Scope gilt.',
        'Ein höherer Preis kann durch echte Inhaltsarbeit, Migration und Tests begründet sein. Ein niedrigerer Preis kann bei kleinem Scope völlig passen. Entscheidend ist, dass die Differenz sichtbar und gewollt ist.'
      ],
      links: [{ label: 'Website-Kosten und Kostentreiber nachvollziehen', to: '/de/blogs/website-erstellen-lassen-kosten-2026' }]
    },
    {
      id: 'warnsignale',
      title: 'Warnsignale im Angebot und Verkaufsgespräch',
      paragraphs: ['Ein einzelnes Warnsignal muss kein Ausschluss sein. Mehrere ungeklärte Punkte erhöhen jedoch das Projektrisiko deutlich.'],
      bullets: [
        'garantierter Platz 1 bei Google',
        'kein benanntes Projektteam oder keine erreichbaren Referenzen',
        '„alles inklusive“ ohne Leistungsbeschreibung',
        'Domain und Zugänge bleiben ausschließlich beim Anbieter',
        'keine Regelung für Fehler, Abnahme oder Kündigung',
        'Technologie wird verkauft, bevor Anforderungen geklärt sind'
      ],
      links: [
        { label: 'Freelancer und Agenturen passend zum Projekt vergleichen', to: '/de/blogs/webdesigner-freelancer-oder-agentur' },
        { label: 'Webentwicklung bei Bandora Development', to: webDevelopmentUrl }
      ]
    }
  ],
  faq: [
    { question: 'Sollte das billigste Angebot ausscheiden?', answer: 'Nein. Es sollte erklären können, warum es günstiger ist. Ein enger Scope kann wirtschaftlich sinnvoll sein. Fehlende Kernleistungen oder unklare Bindung sind dagegen ein Risiko.' },
    { question: 'Festpreis oder Abrechnung nach Aufwand?', answer: 'Ein Festpreis passt zu klar definiertem Scope. Aufwand passt zu Forschung, unklaren Alt-Systemen oder iterativer Produktentwicklung. In beiden Fällen brauchen Sie Annahmen, Grenzen und einen Änderungsprozess.' },
    { question: 'Wer sollte die Domain besitzen?', answer: 'Das beauftragende Unternehmen sollte als Inhaber registriert sein und administrativen Zugriff behalten. Dasselbe Prinzip gilt für relevante Hosting-, Analytics- und Unternehmensprofile.' }
  ],
  sources: [
    { label: 'Mein Digitaler Betrieb – Webdesign-Angebote vergleichen', url: 'https://www.meindigitalerbetrieb.de/webdesign-angebote-vergleichen', note: 'Abruf 05.10.2026' },
    { label: 'KI-WebSichtbar – Webdesign-Angebote vergleichen', url: 'https://ki-websichtbar.de/blog/webdesign-angebot-vergleichen/', note: 'Abruf 05.10.2026' },
    { label: 'Google Search Central – SEO-Starterleitfaden', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=de', note: 'Abruf 05.10.2026' }
  ],
  relatedSlugs: ['website-erstellen-lassen-kosten-2026', 'webdesigner-freelancer-oder-agentur', 'seo-beim-website-erstellen'],
  projectLinks: [
    { label: 'Bandora Gen8: Betrieb und Deployment', to: '/de/projekte/bandora-gen8' },
    { label: 'Bandora Org: strukturierter Funktionsumfang', to: '/de/projekte/bandora-org' }
  ],
  cta: { eyebrow: 'Zweite technische Sicht', title: 'Angebot technisch einordnen lassen', text: 'Wenn Leistungsumfang oder Technologie unklar sind, können die offenen Punkte vor einer Beauftragung strukturiert werden.', label: 'Angebot technisch einordnen lassen' }
};
