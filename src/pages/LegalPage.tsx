import { useTranslation } from 'react-i18next';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { siteConfig } from '../config/site';

type PrivacySection = {
  title: string;
  paragraphs: string[];
};

const privacySections: PrivacySection[] = [
  {
    title: '1. Verantwortlicher',
    paragraphs: ['Verantwortlich für die Datenverarbeitung auf dieser Website ist:'],
  },
  {
    title: '2. Bereitstellung der Website und Server-Protokolle',
    paragraphs: [
      'Beim Aufruf der Website werden technisch erforderliche Verbindungsdaten verarbeitet. Dazu können IP-Adresse, Datum und Uhrzeit, aufgerufene Datei oder URL, Referrer, Browser- und Betriebssystemangaben sowie HTTP-Status gehören.',
      'Die Verarbeitung dient der sicheren und stabilen Bereitstellung, der Fehleranalyse und der Abwehr von Missbrauch. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt im sicheren Betrieb dieses Webangebots. Protokolldaten werden gelöscht oder anonymisiert, sobald sie für diese Zwecke nicht mehr erforderlich sind. Bei einem Sicherheitsvorfall können sie bis zur Klärung und aufgrund gesetzlicher Pflichten länger aufbewahrt werden.',
    ],
  },
  {
    title: '3. Hosting, Auslieferung und Cloudflare',
    paragraphs: [
      'Die Website wird auf einer administrierten Server-Infrastruktur betrieben. Zur verschlüsselten Auslieferung, DNS-Auflösung und zum Schutz vor Angriffen wird Cloudflare eingesetzt. Dabei verarbeitet Cloudflare insbesondere Verbindungs- und Sicherheitsdaten im Auftrag beziehungsweise im Rahmen der eigenen datenschutzrechtlichen Verantwortlichkeit.',
      'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse besteht in einer schnellen, ausfallsicheren und gegen Angriffe geschützten Bereitstellung. Soweit Daten außerhalb des Europäischen Wirtschaftsraums verarbeitet werden, stützt sich die Übermittlung auf die von Cloudflare vorgesehenen Garantien, insbesondere EU-Standardvertragsklauseln.',
    ],
  },
  {
    title: '4. Kontaktformular und E-Mail',
    paragraphs: [
      'Bei einer Anfrage verarbeiten wir Name, E-Mail-Adresse, optionale Unternehmensangaben, Projektart, gewünschten Zeitraum, Budgetrahmen und die Nachricht. Die Pflichtangaben werden benötigt, um die Anfrage zuzuordnen und zu beantworten.',
      'Die Verarbeitung erfolgt zur Durchführung vorvertraglicher Maßnahmen auf Anfrage nach Art. 6 Abs. 1 lit. b DSGVO. Bei allgemeinen Anfragen ist Art. 6 Abs. 1 lit. f DSGVO die Rechtsgrundlage; das berechtigte Interesse liegt in einer geordneten Kommunikation. Die Bestätigung der Datenschutzhinweise ist keine Einwilligung in Werbung.',
      'Anfragen werden gelöscht, wenn die Bearbeitung abgeschlossen ist und keine gesetzlichen Aufbewahrungspflichten oder berechtigten Gründe für eine weitere Speicherung bestehen. Entsteht ein Vertragsverhältnis, werden geschäftliche Unterlagen entsprechend den gesetzlichen Aufbewahrungsfristen gespeichert. E-Mails können durch den eingesetzten E-Mail-Dienstanbieter verarbeitet werden.',
    ],
  },
  {
    title: '5. Missbrauchsschutz und Rate-Limit',
    paragraphs: [
      'Zum Schutz des Kontaktformulars vor automatisierten Anfragen verwenden wir ein unsichtbares Formularfeld, eine Mindest-Ausfüllzeit und ein serverseitiges Rate-Limit. Hierfür wird die IP-Adresse in einen nicht rückrechenbaren Hash umgewandelt und für ein Zeitfenster von 15 Minuten gezählt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; das berechtigte Interesse liegt im Schutz des Formulars und der Server-Infrastruktur vor Missbrauch.',
    ],
  },
  {
    title: '6. Lokale Speicherung im Browser',
    paragraphs: [
      'Die Website speichert ausschließlich funktionale Einstellungen im lokalen Speicher des Browsers: die gewählte Sprache, die Karten- oder Listenansicht des Blogs sowie die Position der schwebenden Kontakt-Schaltfläche. Diese Angaben bleiben auf dem jeweiligen Gerät, werden nicht zu Analyse- oder Werbezwecken genutzt und können über die Browser-Einstellungen gelöscht werden.',
      'Die Speicherung ist für die von Ihnen gewünschte Darstellung und Bedienung erforderlich. Rechtsgrundlage ist § 25 Abs. 2 Nr. 2 TDDDG in Verbindung mit Art. 6 Abs. 1 lit. f DSGVO.',
    ],
  },
  {
    title: '7. Keine Analyse, Werbung oder externen Einbettungen',
    paragraphs: [
      'Diese Website verwendet keine Analysewerkzeuge, Werbetracker, Marketing-Cookies, eingebetteten Social-Media-Widgets, YouTube-Videos, Google Maps oder extern geladenen Schriftarten. Ein Klick auf einen externen Link – etwa zu GitHub oder einer Projektseite – öffnet den jeweiligen Anbieter; ab diesem Zeitpunkt gilt dessen Datenschutzerklärung.',
    ],
  },
  {
    title: '8. Empfänger und Drittlandübermittlungen',
    paragraphs: [
      'Daten erhalten nur Stellen, die sie für Betrieb, Sicherheit oder Kommunikation benötigen, insbesondere Hosting-, Netzwerk-, Sicherheits- und E-Mail-Dienstleister. Eine Weitergabe zu Werbezwecken findet nicht statt. Eine Übermittlung in Drittländer erfolgt nur, wenn sie für den eingesetzten Dienst erforderlich ist und die Voraussetzungen der Art. 44 ff. DSGVO erfüllt sind.',
    ],
  },
  {
    title: '9. Ihre Rechte',
    paragraphs: [
      'Sie haben nach Maßgabe der DSGVO das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen. Außerdem können Sie sich bei einer Datenschutzaufsichtsbehörde beschweren. Es findet keine automatisierte Entscheidungsfindung und kein Profiling statt. Zur Ausübung Ihrer Rechte genügt eine Nachricht an die oben genannte E-Mail-Adresse.',
    ],
  },
  {
    title: '10. Sicherheit und Aktualisierung',
    paragraphs: [
      'Die Übertragung erfolgt verschlüsselt über HTTPS. Technische und organisatorische Maßnahmen werden dem Risiko entsprechend gepflegt. Diese Erklärung wird angepasst, wenn sich Funktionen, Dienstleister oder rechtliche Anforderungen ändern.',
    ],
  },
];

function ContactBlock() {
  return (
    <address className="not-italic">
      <strong>{siteConfig.brandName}</strong><br />
      {siteConfig.developerName}<br />
      <a className="text-blue underline decoration-blue/30 underline-offset-4 hover:text-cyan" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
    </address>
  );
}

export function LegalPage({ type }: { type: 'imprint' | 'privacy' }) {
  const { t } = useTranslation();
  const title = type === 'imprint' ? t('legal.imprint') : t('legal.privacy');

  return (
    <>
      <SeoHead title={`${title} | Bandora Development`} description={t('seo.legalTitle')} path={type === 'imprint' ? 'impressum' : 'datenschutz'} />
      <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs current={title} />
          <h1 className="text-4xl font-semibold text-ink sm:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-slate-500">Stand: 29. Oktober 2026</p>

          {type === 'imprint' ? (
            <div className="mt-8 grid gap-7 rounded-card border border-slate-200 bg-white p-6 leading-8 text-slate-700 shadow-sm sm:p-8">
              <p>Anbieterkennzeichnung für Bandora Development</p>
              <section>
                <h2 className="text-xl font-semibold text-ink">Diensteanbieter und verantwortlich für den Inhalt</h2>
                <div className="mt-3"><ContactBlock /></div>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-ink">Kontakt</h2>
                <p className="mt-3">E-Mail: <a className="text-blue underline decoration-blue/30 underline-offset-4 hover:text-cyan" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
                <p>Für eine unmittelbare elektronische Kontaktaufnahme steht außerdem das Kontaktformular dieser Website zur Verfügung.</p>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-ink">Verantwortlich für journalistisch-redaktionelle Inhalte</h2>
                <p className="mt-3">Verantwortlich im Sinne von § 18 Abs. 2 Medienstaatsvertrag (MStV):</p>
                <div className="mt-2"><ContactBlock /></div>
              </section>
              <section>
                <h2 className="text-xl font-semibold text-ink">Verbraucherstreitbeilegung</h2>
                <p className="mt-3">Ich bin nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
              </section>
            </div>
          ) : (
            <div className="mt-8 rounded-card border border-slate-200 bg-white p-6 leading-8 text-slate-700 shadow-sm sm:p-8">
              <p>Diese Datenschutzerklärung erläutert, welche personenbezogenen Daten beim Besuch dieser Website und bei einer Kontaktaufnahme verarbeitet werden.</p>
              <div className="mt-8 grid gap-8">
                {privacySections.map((section, index) => (
                  <section key={section.title}>
                    <h2 className="text-xl font-semibold text-ink">{section.title}</h2>
                    <div className="mt-3 grid gap-3">
                      {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                      {index === 0 && <ContactBlock />}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
