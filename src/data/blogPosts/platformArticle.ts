import type { BlogPost } from '../blogTypes';
import { p1PublishedAt, p1PublishedLabel, webDevelopmentUrl } from '../blogTypes';

export const platformArticle: BlogPost = {
  slug: 'wordpress-baukasten-oder-individuelle-website',
  languages: ['de'],
  title: 'WordPress, Baukasten oder individuelle Website – welche Lösung passt wirklich?',
  metaTitle: 'WordPress, Baukasten oder individuelle Website? | Bandora',
  excerpt: 'Die richtige Plattform hängt von Redaktion, Funktionen, Kontrolle, Wartung und dem gewünschten Änderungsweg ab – nicht von Glaubenssätzen.',
  category: 'Technikentscheidung',
  cardTitle: 'Das System nach dem Betrieb wählen, nicht nach dem Trend.',
  publishedAt: p1PublishedAt,
  publishedLabel: p1PublishedLabel,
  readingTime: '10 Min. Lesezeit',
  intro: 'Ein Baukasten passt zu einem kleinen Standardauftritt, WordPress zu regelmäßig gepflegten Inhalten mit einem passenden CMS-Setup und eine individuelle Website zu klaren Seitentypen, besonderem Design oder eigener Fachlogik. Keine dieser Lösungen ist pauschal „besser“. Entscheidend ist, wer Inhalte ändert, welche Funktionen gebraucht werden und wer den Betrieb verantwortet.',
  sections: [
    {
      id: 'entscheidung',
      title: 'Die kurze Entscheidungsmatrix',
      paragraphs: ['Beginnen Sie nicht mit einem Produktnamen. Beschreiben Sie zuerst Redaktion, Funktionen, Integrationen, Rechte und den gewünschten Anbieterwechsel. Daraus ergibt sich eine belastbare Shortlist.'],
      table: {
        caption: 'Welcher Lösungsweg passt zu welchem Bedarf?',
        headers: ['Ausgangslage', 'Plausible Lösung', 'Vorher prüfen'],
        rows: [
          ['wenige Standardseiten, seltene Änderungen', 'Baukasten oder schlanke individuelle Website', 'Export, Domain, Tarifgrenzen, Änderungsweg'],
          ['häufige Artikel und Seiten durch internes Team', 'WordPress oder anderes CMS', 'Rollen, Editor, Plugins, Updates, Backups'],
          ['besonderes Design, wenige Inhaltstypen', 'Custom Marketing-Website oder individuelles CMS-Theme', 'Komponenten, Quellcode, Hosting, Übergabe'],
          ['Login, Rollen, Daten, Freigaben, Berechnungen', 'Standardsoftware prüfen, sonst individuelle Web-App', 'Datenmodell, Sicherheit, Schnittstellen, Betrieb'],
          ['Shop als Kerngeschäft', 'geeignete Commerce-Plattform', 'Produkte, Zahlungen, Versand, Recht, Integrationen']
        ]
      }
    },
    {
      id: 'baukasten',
      title: 'Wann reicht ein Website-Baukasten?',
      paragraphs: [
        'Ein Baukasten kann vernünftig sein, wenn Sie schnell mit einem standardisierten Umfang starten, Inhalte selbst pflegen und innerhalb der vorgesehenen Funktionen bleiben möchten. Hosting, Editor und Updates liegen meist beim Plattformanbieter.',
        'Prüfen Sie vorab Exportmöglichkeiten, Tarifgrenzen, Formulare, Mehrsprachigkeit, SEO-Felder und was nach einer Kündigung übrig bleibt. Ein niedriger Monatsbetrag ist nur dann günstig, wenn die Plattform den Bedarf mehrere Jahre abdeckt.'
      ]
    },
    {
      id: 'wordpress',
      title: 'Wann ist WordPress sinnvoll?',
      paragraphs: [
        'WordPress ist stark, wenn ein Team regelmäßig Seiten, Beiträge und Medien verwalten soll und ein klar eingerichtetes Redaktionsmodell braucht. Individuelles Design und WordPress schließen sich nicht aus: Ein projektspezifisches Theme kann Inhalte strukturiert und trotzdem eigenständig darstellen.',
        'Der Betrieb muss jedoch geklärt sein. Core, Theme, Plugins, Benutzerkonten, Backups und Wiederherstellung brauchen Verantwortliche. Jede Erweiterung sollte einen belegten Zweck, eine Updatequelle und einen Rückweg haben.'
      ]
    },
    {
      id: 'individuell',
      title: 'Wann lohnt sich eine individuelle Website?',
      paragraphs: [
        'Eine individuell entwickelte Marketing-Website passt, wenn Gestaltung, Performance, Mehrsprachigkeit oder technische Kontrolle wichtig sind und die Inhaltstypen überschaubar bleiben. Änderungen können über Code, ein schlankes CMS oder einen definierten Serviceprozess erfolgen.',
        'Custom Code ist kein Selbstzweck. Er lohnt sich, wenn er konkrete Grenzen eines Standardsystems löst oder den Betrieb vereinfacht. Eine schlechte Eigenentwicklung ist riskanter als ein gut gepflegtes Standardsystem.'
      ],
      callout: '„Individuell“ sollte im Angebot getrennt werden: individuelles Design, individuelle Komponenten und individuelle Fachlogik sind drei verschiedene Leistungen.'
    },
    {
      id: 'webapp',
      title: 'Wann wird aus der Website eine Web-App?',
      paragraphs: [
        'Sobald Nutzer sich anmelden, strukturierte Daten bearbeiten, unterschiedliche Rollen besitzen oder Geschäftsprozesse durchlaufen, reicht der reine Website-Vergleich nicht mehr. Dann müssen Datenmodell, Authentifizierung, Rechte, Fehlerfälle, Schnittstellen und Betrieb als Softwareprojekt geplant werden.',
        'Eigene Projekte wie Digital Footprint OS oder Geräte-Nachverfolgung zeigen diesen Unterschied: Nicht das Layout, sondern Zustände, Daten und nachvollziehbare Abläufe bestimmen die Architektur.'
      ],
      links: [
        { label: 'Digital Footprint OS als Webanwendungsprojekt', to: '/de/projekte/digital-footprint-os' },
        { label: 'Geräte-Nachverfolgung mit Daten- und Statuslogik', to: '/de/projekte/geraete-nachverfolgung' }
      ]
    },
    {
      id: 'prueffragen',
      title: 'Sieben Fragen, die die Systemwahl klären',
      paragraphs: ['Die Antworten sind wichtiger als die Lieblingsplattform des Anbieters.'],
      bullets: [
        'Wer ändert welche Inhalte und wie häufig?',
        'Welche Funktionen sind heute sicher nötig?',
        'Welche Schnittstellen oder Daten kommen später realistisch hinzu?',
        'Wer übernimmt Updates, Backups, Monitoring und Wiederherstellung?',
        'Brauchen Sie Quellcode, Export und freie Hosting-Wahl?',
        'Welche Performance- und SEO-Ziele werden überprüfbar abgenommen?',
        'Wie kann ein anderer Dienstleister das System übernehmen?'
      ],
      links: [
        { label: 'Webentwicklung bei Bandora Development', to: webDevelopmentUrl },
        { label: 'Laufende Kosten im Website-Budget berücksichtigen', to: '/de/blogs/website-erstellen-lassen-kosten-2026' }
      ]
    }
  ],
  faq: [
    { question: 'Ist WordPress schlecht für Performance oder SEO?', answer: 'Nein. Das Ergebnis hängt von Theme, Plugins, Hosting, Inhalten und Umsetzung ab. WordPress kann schnell und suchmaschinenfreundlich sein; ein überladenes Setup kann jedoch unnötige Risiken schaffen.' },
    { question: 'Ist eine individuelle Website wartungsfrei?', answer: 'Nein. Auch Custom-Projekte benötigen gepflegte Abhängigkeiten, Serverbetrieb, Backups und Tests. Sie können weniger öffentlich angreifbare Komponenten besitzen, sind aber nicht automatisch wartungsfrei.' },
    { question: 'Kann ich später das System wechseln?', answer: 'Ja, aber Aufwand und Datenverlust hängen von Exporten, Inhaltstruktur, URLs, Rechten und Dokumentation ab. Der Exit sollte vor der Beauftragung geklärt werden.' }
  ],
  sources: [
    { label: 'Tecschmiede Berlin – WordPress oder individuelle Website', url: 'https://tecschmiede-berlin.de/ratgeber/wordpress-oder-individuelle-website/', note: 'Abruf 05.10.2026' },
    { label: 'WordPress.org – offizielle Dokumentation', url: 'https://wordpress.org/documentation/', note: 'Abruf 05.10.2026' },
    { label: 'Google Search Central – SEO-Starterleitfaden', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=de', note: 'Abruf 05.10.2026' }
  ],
  relatedSlugs: ['website-erstellen-lassen-kosten-2026', 'seo-beim-website-erstellen', 'webdesign-angebote-vergleichen'],
  projectLinks: [
    { label: 'Bandora Gen8: Self-Hosting und Betrieb', to: '/de/projekte/bandora-gen8' },
    { label: 'Digital Footprint OS: individuelle Webanwendung', to: '/de/projekte/digital-footprint-os' }
  ],
  cta: { eyebrow: 'Technik ohne Dogma', title: 'Passende Lösung besprechen', text: 'Beschreiben Sie Redaktion, Funktionen und Betrieb. Daraus lässt sich ableiten, ob Standardplattform, CMS oder individuelle Entwicklung sinnvoll ist.', label: 'Technische Lösung besprechen' }
};
