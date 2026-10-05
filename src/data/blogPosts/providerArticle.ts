import type { BlogPost } from '../blogTypes';
import { p1PublishedAt, p1PublishedLabel, webDevelopmentUrl } from '../blogTypes';

export const providerArticle: BlogPost = {
  slug: 'webdesigner-freelancer-oder-agentur',
  languages: ['de'],
  title: 'Webdesigner, Freelancer oder Agentur – was passt zu Ihrem Unternehmen?',
  metaTitle: 'Webdesigner, Freelancer oder Agentur? | Bandora',
  excerpt: 'Eine Entscheidungshilfe nach Projektumfang, Risiko, Ansprechpartnern, Vertretung, Betrieb und technischem Anspruch.',
  category: 'Anbieterwahl',
  cardTitle: 'Den passenden Partner statt das passende Etikett wählen.',
  publishedAt: p1PublishedAt,
  publishedLabel: p1PublishedLabel,
  readingTime: '9 Min. Lesezeit',
  intro: 'Für ein klar begrenztes Projekt kann ein erfahrener Freelancer die beste Lösung sein. Eine Agentur ist sinnvoll, wenn mehrere Disziplinen gleichzeitig gebraucht werden oder Ausfallsicherheit im Team wichtig ist. Entscheidend ist nicht die Bezeichnung, sondern ob Kompetenz, Kapazität, Verantwortlichkeit und Betrieb zu Ihrem Projekt passen.',
  sections: [
    {
      id: 'vergleich',
      title: 'Freelancer oder Agentur: die Unterschiede auf einen Blick',
      paragraphs: ['Die Gegenüberstellung „Freelancer günstig, Agentur teuer“ hilft wenig. Ein spezialisierter Freelancer kann technisch tiefer arbeiten als eine breite Agentur; eine Agentur kann bei Text, Design und Entwicklung mehrere Rollen parallel abdecken. Prüfen Sie die reale Besetzung Ihres Projekts.'],
      table: {
        caption: 'Typische Stärken und Risiken',
        headers: ['Modell', 'Stärken', 'Darauf achten'],
        rows: [
          ['Freelancer / Entwickler', 'direkter Kontakt, kurze Wege, tiefe Spezialisierung', 'Vertretung, Kapazität, Design-/Content-Partner, Support'],
          ['kleines Studio', 'direkter Kontakt plus kleines Netzwerk mehrerer Disziplinen', 'wer tatsächlich arbeitet, klare Verantwortlichkeit'],
          ['Agentur', 'mehrere Rollen, parallele Arbeit, Vertretung', 'Overhead, Übergaben, tatsächliches Projektteam'],
          ['Baukasten-Dienstleister', 'schneller Standardumfang, planbarer Prozess', 'Plattformbindung, Export, Grenzen bei Sonderfunktionen']
        ]
      }
    },
    {
      id: 'freelancer',
      title: 'Wann passt ein Freelancer?',
      paragraphs: [
        'Ein Freelancer passt gut, wenn das Projekt überschaubar ist, eine feste Ansprechperson gewünscht wird und die benötigte Kompetenz klar benannt werden kann. Das gilt zum Beispiel für eine Firmenwebsite, einen Prototyp oder eine abgegrenzte Webanwendung.',
        'Wichtig sind belastbare Referenzen, ein dokumentierter Scope und ein Plan für Urlaub, Krankheit und spätere Änderungen. Fragen Sie außerdem, ob Design, Text und Datenschutz intern abgedeckt werden oder bei Ihnen beziehungsweise Partnern liegen.'
      ]
    },
    {
      id: 'agentur',
      title: 'Wann ist eine Agentur die bessere Wahl?',
      paragraphs: [
        'Eine Agentur ist sinnvoll, wenn Markenstrategie, Research, Fotografie, Text, UX, Entwicklung, SEO und Kampagnen gleichzeitig koordiniert werden müssen. Auch große Stakeholder-Runden, enge Termine und dauerhafter Support können für ein Team sprechen.',
        'Lassen Sie sich nicht nur das Agenturportfolio zeigen. Fragen Sie nach den Personen, die tatsächlich an Ihrem Projekt arbeiten, und danach, welche Leistungen ausgelagert werden. Eine bekannte Agenturmarke sagt wenig über das konkrete Projektteam.'
      ]
    },
    {
      id: 'fragen',
      title: 'Zehn Fragen vor der Beauftragung',
      paragraphs: ['Gute Anbieter fragen zuerst nach Ihrem Geschäft, Ihren Nutzern und dem gewünschten Ergebnis. Sie versprechen keine garantierte Google-Position und erklären Grenzen ebenso offen wie Möglichkeiten.'],
      bullets: [
        'Welche ähnlichen, live erreichbaren Projekte können Sie zeigen?',
        'Wer arbeitet konkret an Strategie, Design, Text und Entwicklung?',
        'Welche Leistungen und Feedbackrunden sind im Preis enthalten?',
        'Wie werden mobile Bedienung, Performance und Barrierefreiheit geprüft?',
        'Was bedeutet „SEO inklusive“ als konkrete Lieferleistung?',
        'Wem gehören Domain, Repository, Inhalte, Daten und Zugänge?',
        'Wie erfolgt Abnahme und welche Fehler werden danach behoben?',
        'Wie sehen Hosting, Backups, Monitoring und Support aus?',
        'Was passiert bei Krankheit, Kündigung oder Anbieterwechsel?',
        'Welche Annahmen könnten Preis oder Termin später verändern?'
      ],
      links: [{ label: 'Webdesign-Angebote technisch und wirtschaftlich vergleichen', to: '/de/blogs/webdesign-angebote-vergleichen' }]
    },
    {
      id: 'szenarien',
      title: 'Eine praktische Entscheidung nach Projektszenario',
      paragraphs: [
        'Eine fünfseitige Firmenwebsite mit vorhandenen Inhalten braucht selten ein achtköpfiges Team. Ein internationaler Relaunch mit Content-Migration, mehreren Stakeholdern und Kampagnenstart ist dagegen für eine Einzelperson riskant. Eine Web-App mit Datenmodell, API und Rollen braucht echte Entwicklungskompetenz – unabhängig davon, ob außen „Webdesign“ oder „Agentur“ steht.',
        'Bandora Development ist ein entwicklungsorientiertes Angebot. Die Stärke liegt in modernen Webanwendungen, technischen Websites, APIs, Mehrsprachigkeit und einem nachvollziehbaren Build- und Deployment-Prozess. Für Aufgaben außerhalb dieses Rahmens sollte im Angebot offen stehen, wer sie übernimmt.'
      ],
      links: [
        { label: 'Webentwicklung und technische Websites', to: webDevelopmentUrl },
        { label: 'Kosten und Scope einer Website einordnen', to: '/de/blogs/website-erstellen-lassen-kosten-2026' }
      ]
    }
  ],
  faq: [
    { question: 'Ist eine Agentur automatisch professioneller?', answer: 'Nein. Professionalität zeigt sich in klaren Anforderungen, Referenzen, Kommunikation, Verträgen, Tests und verlässlichem Betrieb. Das kann ein Freelancer, Studio oder eine Agentur leisten.' },
    { question: 'Was ist bei einem Freelancer das größte Risiko?', answer: 'Meist die Abhängigkeit von einer Person. Dieses Risiko lässt sich mit Dokumentation, Kundenzugängen, Repository-Übergabe, Backups und einem Vertretungs- oder Exit-Plan reduzieren.' },
    { question: 'Sollte ich mehrere Angebote einholen?', answer: 'Ja, wenn alle Anbieter dasselbe Sollbild erhalten. Sonst vergleichen Sie unterschiedliche Lösungen und interpretieren die Preisdifferenz falsch.' }
  ],
  sources: [
    { label: 'Timm Ehlbeck – einen guten Webdesigner finden', url: 'https://timmehlbeck.de/blog/guten-webdesigner-finden/', note: 'Abruf 05.10.2026' },
    { label: 'Rvertising – Agentur oder Freelancer', url: 'https://rvertising.com/ratgeber/website-erstellen-lassen-agentur-oder-freelancer', note: 'Abruf 05.10.2026' },
    { label: 'Reddit r/Unternehmer – Auswahlfragen aus Auftraggebersicht', url: 'https://www.reddit.com/r/Unternehmer/comments/1wayd6z/wie_finde_ich_eine_gute_webdesign_agentur_f%C3%BCr/', note: 'ergänzende Nutzerfragen; Abruf 05.10.2026' }
  ],
  relatedSlugs: ['webdesign-angebote-vergleichen', 'website-erstellen-lassen-kosten-2026', 'website-erstellen-lassen-ablauf'],
  projectLinks: [
    { label: 'Bandora Studio: Produkt- und Entwicklungsarbeit', to: '/de/projekte/bandora-studio' },
    { label: 'RoomMate+: mobiler MVP mit Kernumfang', to: '/de/projekte/roommate-plus' }
  ],
  cta: { eyebrow: 'Passung vor Verkauf', title: 'Technische Lösung besprechen', text: 'Wenn Sie noch nicht wissen, welches Anbieter- oder Technikmodell passt, lässt sich zuerst der tatsächliche Projektumfang einordnen.', label: 'Technische Lösung besprechen' }
};
