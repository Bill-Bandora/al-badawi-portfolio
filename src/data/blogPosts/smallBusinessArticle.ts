import type { BlogPost } from '../blogTypes';
import { webDevelopmentUrl } from '../blogTypes';

export const smallBusinessArticle: BlogPost = {
  slug: 'warum-kleine-unternehmen-eine-website-brauchen',
  languages: ['de', 'en', 'ar'],
  title: 'Keine Website? Warum kleine Unternehmen damit Chancen liegen lassen',
  metaTitle: 'Warum kleine Unternehmen eine Website brauchen | Bandora',
  excerpt: 'Viele kleine Betriebe sind großartig in dem, was sie tun – online findet man davon aber kaum etwas. Eine klare Website kann Vertrauen, Sichtbarkeit und bessere Anfragen unterstützen.',
  category: 'Digitalisierung',
  cardTitle: 'Online sichtbar. Auch als kleiner Betrieb.',
  publishedAt: '2026-09-30',
  publishedLabel: '30. September 2026',
  readingTime: '6 Min. Lesezeit',
  intro: 'Viele kleine Unternehmen leben von Empfehlungen und guter Arbeit. Eine eigene Website ersetzt das nicht. Sie macht Empfehlungen überprüfbar, beantwortet erste Fragen und gibt Interessenten einen verlässlichen Ort, an dem Angebot und Kontakt auch nach Feierabend erreichbar sind.',
  sections: [
    {
      id: 'erster-eindruck',
      title: 'Der erste Eindruck entsteht oft bei Google',
      paragraphs: [
        'Wer einen Firmennamen empfohlen bekommt, sucht häufig online weiter. Wenn dort nur ein alter Brancheneintrag oder gar nichts auftaucht, bleiben einfache Fragen offen: Gibt es den Betrieb noch, was wird angeboten und wie nimmt man Kontakt auf?',
        'Eine kleine, gepflegte Website kann diese Unsicherheit reduzieren. Dafür braucht es nicht zwanzig Unterseiten, sondern klare Leistungen, echte Informationen und einen sichtbaren nächsten Schritt.'
      ]
    },
    {
      id: 'feierabend',
      title: 'Eine Website arbeitet auch nach Feierabend',
      paragraphs: [
        'Während Termine laufen oder der Betrieb geschlossen ist, können Interessenten Leistungen, Öffnungszeiten und Beispiele ansehen. Das spart wiederkehrende Rückfragen und führt zu besser vorbereiteten Anfragen.',
        'Besonders bei erklärungsbedürftigen Leistungen lohnt es sich, Ablauf, Zielgruppe und typische Voraussetzungen verständlich zu beschreiben.'
      ]
    },
    {
      id: 'social',
      title: 'Social Media ist ein Kanal, aber nicht Ihr Eigentum',
      paragraphs: [
        'Instagram, Facebook oder TikTok können Aufmerksamkeit schaffen. Reichweite, Regeln und Kontozugang liegen jedoch bei der Plattform. Eine eigene Website bleibt die kontrollierbare Basis mit eigener Domain, Struktur und Kontaktweg.',
        'Am stärksten ist häufig die Kombination: Social Media weckt Interesse, die Website liefert Tiefe und Vertrauen.'
      ]
    },
    {
      id: 'lokal',
      title: 'Lokale Sichtbarkeit braucht eine belastbare Basis',
      paragraphs: [
        'Lokale Betriebe profitieren von klaren Leistungen, Ortsbezug, einem gepflegten Unternehmensprofil und konsistenten Kontaktdaten. Eine Website schafft dafür indexierbare Inhalte und verknüpft Suche, Empfehlung und Kontakt.',
        'Eine Platzierung entsteht nicht automatisch. Ohne eigene Website fehlt jedoch für viele Suchanfragen die wichtigste kontrollierbare Zielseite.'
      ],
      links: [{ label: 'SEO bereits bei der Website-Erstellung berücksichtigen', to: '/de/blogs/seo-beim-website-erstellen' }]
    },
    {
      id: 'vertrauen',
      title: 'Vertrauen lässt sich konkret zeigen',
      paragraphs: [
        'Fotos, Projekte, Qualifikationen, Arbeitsweise und klare Ansprechpartner sind glaubwürdiger als allgemeine Werbesätze. Kleine Unternehmen können genau hier ihre Nähe und Erfahrung sichtbar machen.',
        'Die Website sollte schnell laden, auf dem Smartphone funktionieren und ohne Umwege erklären, was der Betrieb anbietet.'
      ]
    },
    {
      id: 'start',
      title: 'Es muss nicht kompliziert anfangen',
      paragraphs: [
        'Ein schlanker erster Umfang ist oft besser als ein Großprojekt, das nie fertig wird. Entscheidend ist ein klares Ziel: mehr passende Anfragen, bessere Auffindbarkeit, weniger Rückfragen oder ein professioneller Nachweis nach einer Empfehlung.',
        'Aus diesem Ziel lassen sich Seiten, Inhalte und Technik ableiten. Spätere Erweiterungen bleiben möglich.'
      ],
      links: [
        { label: 'Ablauf von der Idee bis zum Website-Launch', to: '/de/blogs/website-erstellen-lassen-ablauf' },
        { label: 'Webentwicklung bei Bandora Development', to: webDevelopmentUrl }
      ]
    }
  ],
  relatedSlugs: ['website-erstellen-lassen-ablauf', 'website-erstellen-lassen-kosten-2026', 'seo-beim-website-erstellen'],
  projectLinks: [{ label: 'Ausgewählte Bandora-Projekte ansehen', to: '/de/projekte' }],
  cta: { eyebrow: 'Der nächste Schritt', title: 'Ihr Unternehmen soll online sichtbar werden?', text: 'Bandora entwickelt übersichtliche, schnelle Websites, die zu Ihrem Betrieb und Ihren Kunden passen.', label: 'Unverbindlich anfragen' }
};
