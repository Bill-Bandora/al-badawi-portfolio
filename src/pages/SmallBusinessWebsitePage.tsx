import { ArrowRight, CheckCircle2, CircleCheck, ExternalLink } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { SeoHead } from '../components/common/SeoHead';
import { ButtonLink } from '../components/ui/Button';
import { siteConfig } from '../config/site';
import { NotFoundPage } from './NotFoundPage';

const path = 'website-fuer-kleine-unternehmen';
const contactUrl = '/de/kontakt';

const audiences = [
  ['Handwerksbetriebe', 'Leistungen, Einsatzgebiet und ein unkomplizierter Weg zur Anfrage.'],
  ['Dienstleistungsunternehmen', 'Expertise verständlich darstellen und Vertrauen vor dem Erstgespräch schaffen.'],
  ['Selbstständige', 'Persönliches Profil, Angebot und Arbeitsweise professionell präsentieren.'],
  ['Kleine Unternehmen', 'Angebot, Team und Erreichbarkeit mobil gut nutzbar machen.'],
  ['Lokale Geschäfte', 'Sortiment, Standort, Öffnungszeiten und aktuelle Angebote strukturiert zeigen.'],
  ['Gründer', 'Mit einer belastbaren Basis starten, die später erweitert werden kann.'],
];

const projects = [
  {
    title: 'Bandora Quiz',
    type: 'Live-App & App Store',
    description: 'Öffentlich erreichbare Quiz-Anwendung mit eigenem Live-Betrieb und veröffentlichter iOS-App.',
    href: 'https://quiz.bandora-dev.de/',
    label: 'Live-App öffnen',
    external: true,
  },
  {
    title: 'Bandora Studio',
    type: 'Sichere Produktvorschau',
    description: 'Internes Produktionssystem für mehrsprachige Unternehmenswebsites. Die Vorschau zeigt Funktionsprinzip und Designfamilien ohne Kunden- oder Administrationsdaten.',
    href: '/de/projekte/bandora-studio#interactive-demo-title',
    label: 'Bandora Studio öffnen',
  },
  {
    title: 'Digital Footprint OS',
    type: 'Fallstudie',
    description: 'SEO- und Digital-Footprint-System mit Dashboard, Datenpipeline und kontrollierten Analyseabläufen.',
    href: '/de/projekte/digital-footprint-os',
    label: 'Fallstudie ansehen',
  },
  {
    title: 'Geräte-Nachverfolgung',
    type: 'Interaktive Fallstudie',
    description: 'MVP für nachvollziehbare Gerätestatus, Zuständigkeiten und Änderungshistorien mit lokaler Demonstration.',
    href: '/de/projekte/geraete-nachverfolgung#technical-case-study',
    label: 'Interaktive Fallstudie ansehen',
  },
  {
    title: 'BuyNot',
    type: 'Prototyp-Fallstudie',
    description: 'Mobile Produktidee als iOS-Prototyp – dokumentiert mit Problem, Lösungsansatz und technischem Umfang.',
    href: '/de/projekte/buynot',
    label: 'Projekt ansehen',
  },
  {
    title: 'RoomMate+',
    type: 'Forschungsprojekt',
    description: 'Konzept und prototypische Entwicklung einer mobilen Anwendung für gemeinschaftlich organisierte Haushalte.',
    href: '/de/projekte/roommate-plus',
    label: 'Forschungsprojekt ansehen',
  },
];

const faqs = [
  ['Was kostet eine professionelle Website für ein kleines Unternehmen?', 'Die Kosten hängen von Seitenumfang, Inhaltsarbeit, Funktionen, Sprachen und dem gewünschten Betrieb ab. Nach einem kurzen, unverbindlichen Austausch erhalten Sie ein transparentes individuelles Festpreisangebot – ohne veröffentlichte Pauschalpreise, die Ihren tatsächlichen Bedarf nicht abbilden.'],
  ['Was ist in einem Festpreisangebot enthalten?', 'Das Angebot benennt die vereinbarten Seitentypen, Design- und Entwicklungsleistungen, Inhaltsarbeit, Formulare, technische Abnahme und Übergabe. Optionale oder laufende Leistungen werden getrennt ausgewiesen.'],
  ['Muss ich Texte und Bilder bereits fertig haben?', 'Nein. Im Erstgespräch klären wir, welche Inhalte vorhanden sind, was noch benötigt wird und wer die Erstellung übernimmt. Dieser Umfang wird vor Projektstart eindeutig festgehalten.'],
  ['Ist die Website für Smartphones und Google vorbereitet?', 'Die Website wird responsiv, technisch sauber und mit grundlegenden SEO-Signalen wie Seitentiteln, Beschreibungen, strukturierten Inhalten und Canonical-URLs umgesetzt. Konkrete Rankings können seriös nicht garantiert werden.'],
  ['Kann die Website später erweitert werden?', 'Ja. Struktur und technische Basis werden so geplant, dass vereinbarte Erweiterungen möglich bleiben. Welche Ausbaustufen sinnvoll sind, hängt vom Projekt und dem gewählten Betrieb ab.'],
  ['Gibt es Betreuung nach dem Start?', 'Wartung, Hosting und Weiterentwicklung können bei Bedarf als getrennte Leistungen vereinbart werden. Umfang, Zuständigkeiten und laufende Kosten werden transparent im Angebot festgehalten.'],
];

export function SmallBusinessWebsitePage() {
  const { lang } = useParams();
  if (lang !== 'de') return <NotFoundPage />;
  const title = 'Website für kleine Unternehmen erstellen lassen | Bandora';
  const description = 'Professionelle Website für kleine Unternehmen: individuell geplant, mobil optimiert und mit transparentem Festpreisangebot auf Anfrage.';
  const pageUrl = `${siteConfig.domain}/de/${path}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Professionelle Websites für kleine Unternehmen',
        description,
        provider: { '@type': 'Organization', name: siteConfig.brandName, url: siteConfig.domain },
        areaServed: { '@type': 'Country', name: 'Deutschland' },
        url: pageUrl,
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  };

  return (
    <>
      <SeoHead
        title={title}
        description={description}
        path={path}
        alternateLanguages={['de']}
        schema={schema}
        breadcrumbs={[
          { name: 'Startseite', url: `${siteConfig.domain}/de/` },
          { name: 'Website für kleine Unternehmen', url: pageUrl },
        ]}
      />
      <main>
        <header className="relative overflow-hidden bg-night px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="tech-grid absolute inset-0" aria-hidden="true" />
          <div className="ambient-orb -right-20 top-0 size-80 bg-cyan/20" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">Websites für kleine Unternehmen</p>
            <h1 className="mt-4 max-w-5xl text-balance text-[clamp(2.25rem,8vw,4.6rem)] font-semibold leading-[1.08] tracking-tight">
              Professionelle Website für kleine Unternehmen erstellen lassen
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Modernes Webdesign, schnelle Ladezeiten und individuelle Umsetzung – zu besonders attraktiven Konditionen. Fordern Sie Ihr persönliches Festpreisangebot an.
            </p>
            <p className="mt-3 max-w-3xl font-semibold text-cyan">Professionelle Websites zu besonders attraktiven Konditionen – individuelles Festpreisangebot auf Anfrage.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to={contactUrl}>Festpreisangebot anfordern</ButtonLink>
              <ButtonLink to="/de/projekte" variant="dark">Echte Projekte ansehen</ButtonLink>
            </div>
          </div>
        </header>

        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="benefits-title">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan">Individuell statt austauschbar</p>
            <h2 id="benefits-title" className="mt-3 max-w-3xl text-3xl font-semibold text-ink md:text-4xl">Leistungen für eine professionelle Unternehmenswebsite</h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-700">Welche Bausteine Ihr Projekt tatsächlich benötigt, wird vor dem Angebot geklärt. Vereinbart wird nur der passende Leistungsumfang.</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['Individuelles Webdesign', 'Struktur und Erscheinungsbild passend zu Unternehmen, Angebot und Zielgruppe.'],
                ['Mobil optimiert', 'Für Smartphone, Tablet und Desktop verständlich und gut bedienbar.'],
                ['Schnelle Ladezeiten', 'Bilder, Komponenten und Auslieferung werden technisch sinnvoll vorbereitet.'],
                ['Kontaktformulare', 'Anfragen ohne Umwege – sofern ein Formular zum vereinbarten Umfang gehört.'],
                ['Technische SEO-Basis', 'Saubere Titel, Beschreibungen, Seitenstruktur und Canonical-Signale.'],
                ['Mehrsprachigkeit', 'Weitere Sprachen können bei Bedarf geplant und angeboten werden.'],
                ['Sichere HTTPS-Verbindung', 'Die Veröffentlichung wird für einen verschlüsselten Betrieb vorbereitet.'],
                ['Erweiterbare Funktionen', 'Die technische Basis kann für vereinbarte spätere Ausbaustufen geplant werden.'],
              ].map(([heading, text]) => (
                <article key={heading} className="rounded-card border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <CircleCheck className="size-6 text-cyan" aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-semibold text-ink">{heading}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-14 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="audience-title">
          <div className="mx-auto max-w-6xl">
            <h2 id="audience-title" className="text-3xl font-semibold text-ink md:text-4xl">Für wen eignet sich die Website?</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {audiences.map(([heading, text]) => (
                <article key={heading} className="rounded-card border border-slate-200 bg-white p-6">
                  <h3 className="text-xl font-semibold text-ink">{heading}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-navy px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20" aria-labelledby="why-bandora-title">
          <div className="tech-grid absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold">Warum Bandora</p>
              <h2 id="why-bandora-title" className="mt-3 text-3xl font-semibold md:text-4xl">Direkte technische Verantwortung vom Gespräch bis zum Start</h2>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {['Direkter Ansprechpartner ohne unnötige Übergaben', 'Nachvollziehbarer Umfang vor Projektbeginn', 'Nur belegbare Projekte und Funktionen', 'Saubere Übergabe von Website und vereinbarten Zugängen'].map((item) => (
                <li key={item} className="glass-panel flex gap-3 rounded-card p-5 leading-7 text-slate-200"><CheckCircle2 className="mt-1 size-5 shrink-0 text-cyan" aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="fixed-price-title">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan">Transparentes Angebot</p>
            <h2 id="fixed-price-title" className="mt-3 text-3xl font-semibold text-ink md:text-4xl">Ihre professionelle Website zum individuellen Festpreis</h2>
            <ol className="mt-8 grid gap-5 md:grid-cols-4">
              {[
                ['01', 'Projekt unverbindlich anfragen', 'Sie beschreiben kurz Unternehmen, Ziele und den gewünschten Umfang.'],
                ['02', 'Bedarf gemeinsam abgrenzen', 'Wir klären Seiten, Inhalte, Funktionen, Zuständigkeiten und gewünschte Betreuung.'],
                ['03', 'Festpreisangebot erhalten', 'Sie erhalten ein verständliches Angebot mit vereinbartem Umfang und getrennten Optionen.'],
                ['04', 'Umsetzung starten', 'Nach Ihrer Annahme beginnt die Entwicklung des eindeutig vereinbarten Leistungsumfangs.'],
              ].map(([number, heading, text]) => (
                <li key={number} className="rounded-card border border-slate-200 bg-slate-50 p-6">
                  <span className="text-sm font-semibold text-cyan">{number}</span>
                  <h3 className="mt-3 text-xl font-semibold text-ink">{heading}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{text}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 max-w-3xl leading-7 text-slate-700">Der Festpreis gilt ausschließlich für den im Angebot definierten Umfang. Zusätzliche Leistungen werden vor einer Beauftragung transparent angeboten.</p>
            <ButtonLink to={contactUrl} className="mt-8">Jetzt Festpreisangebot anfordern</ButtonLink>
          </div>
        </section>

        <section className="bg-night px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20" aria-labelledby="projects-title">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">Belegbare Einblicke</p>
            <h2 id="projects-title" className="mt-3 text-3xl font-semibold md:text-4xl">Echte Projekte, klar eingeordnet</h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-300">Live-Anwendung, Vorschau, Fallstudie und Forschungsprojekt werden bewusst getrennt bezeichnet. Geschützte Systeme bleiben geschützt.</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.title} className="glass-panel flex min-w-0 flex-col rounded-card p-6">
                  <span className="w-fit rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan">{project.type}</span>
                  <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
                  <p className="mt-3 flex-1 leading-7 text-slate-300">{project.description}</p>
                  {project.external ? (
                    <a href={project.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-11 items-center font-semibold text-cyan hover:text-white">{project.label}<ExternalLink className="ms-2 size-4" aria-hidden="true" /></a>
                  ) : (
                    <Link to={project.href} className="mt-5 inline-flex min-h-11 items-center font-semibold text-cyan hover:text-white">{project.label}<ArrowRight className="ms-2 size-4" aria-hidden="true" /></Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-14 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="process-title">
          <div className="mx-auto max-w-6xl">
            <h2 id="process-title" className="text-3xl font-semibold text-ink md:text-4xl">Vom ersten Gespräch zur fertigen Website</h2>
            <ol className="mt-8 grid gap-4 md:grid-cols-5">
              {['Ziele & Umfang', 'Inhalte & Struktur', 'Design & Umsetzung', 'Prüfung & Freigabe', 'Veröffentlichung & Übergabe'].map((item, index) => (
                <li key={item} className="rounded-card border border-slate-200 bg-white p-5"><span className="grid size-9 place-items-center rounded-full bg-cyan font-semibold text-white">{index + 1}</span><p className="mt-4 font-semibold text-ink">{item}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="faq-title">
          <div className="mx-auto max-w-4xl">
            <h2 id="faq-title" className="text-3xl font-semibold text-ink md:text-4xl">Häufige Fragen</h2>
            <div className="mt-8 grid gap-3">
              {faqs.map(([question, answer]) => (
                <details key={question} className="group rounded-card border border-slate-200 bg-slate-50 p-5 open:shadow-sm">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">{question}<span className="text-cyan transition group-open:rotate-45" aria-hidden="true">+</span></summary>
                  <p className="mt-4 leading-7 text-slate-700">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-cyan/20 via-ink to-blue/20 px-4 py-16 text-center text-white sm:px-6 lg:px-8 lg:py-20">
          <h2 className="text-3xl font-semibold md:text-4xl">Website-Projekt unverbindlich besprechen</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">Beschreiben Sie kurz Ihr Unternehmen und Ihr Ziel. Sie erhalten eine ehrliche Einschätzung und bei passendem Umfang ein individuelles Festpreisangebot.</p>
          <ButtonLink to={contactUrl} className="mt-8">Jetzt unverbindliches Festpreisangebot anfordern</ButtonLink>
        </section>
      </main>
    </>
  );
}
