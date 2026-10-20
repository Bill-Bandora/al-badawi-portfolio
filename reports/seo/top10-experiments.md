# Bandora Development – Top-10-Experimente

**Stand:** 20. Oktober 2026  
**Branch:** `codex/top10-seo-pilots`  
**Änderungs-Commit:** `b869361` (`feat: add focused top-10 seo pilots`)  
**Status:** lokal umgesetzt und geprüft, nicht gepusht, nicht deployed

## Ziel und Aussagegrenze

Die Experimente sollen prüfen, ob eine konkrete Bandora-URL für eine passende nicht-gebrandete Suchanfrage in Deutschland wiederholt sichtbar wird. Sie sind keine Rankinggarantie. Besonders beim bisherigen Geräte-Tracking-Signal ist die Datenmenge mit einer Impression pro Tag zu klein, um aus einzelnen Positionen einen stabilen Trend abzuleiten.

Es wurden keine neue Landingpage, keine Redirect-/Canonical-Änderung, keine künstliche Berlin-Seite und keine automatische Indexierungsanfrage angelegt.

## Baseline: tatsächliche GSC-Messung

Quelle: Google Search Console, Property `sc-domain:bandora-dev.de`, Suchtyp Web, Land Deutschland. Abgerufen am 20.10.2026; Daten vom 18.–19.10. waren noch vorläufig.

| Query | URL | Zeitraum | Impressionen | Ø Position | Einordnung |
|---|---|---:|---:|---:|---|
| `gerätenachverfolgung` | `/de/projekte/geraete-nachverfolgung` | 10.–13.10. | 4 | 6,25 | Top-10-Stichprobe, noch kein stabiler Nachweis |
| `gerätenachverfolgung` | `/de/projekte` | 14.–17.10. | 4 | 61,5 | allgemeine URL statt Detailseite |
| `gerätenachverfolgung` | `/de/projekte` | 18.–19.10. | 2 | 49,0 | vorläufig; Positionen 65 und 33 |
| `gerätenachverfolgung` | `/en/projects/geraete-nachverfolgung` | 09.–17.10. | 5 | 28,8 | englische URL im deutschen Datensatz |
| `webdesigner freelancer` | `/de/blogs/webdesigner-freelancer-oder-agentur` | bis 17.10. | 4 | 45,5 | thematische Relevanz, nicht Top 10 |
| `webdesign freelancer` | gleiche Ratgeber-URL | bis 17.10. | 7 | 65,3 | thematische Relevanz, nicht Top 10 |
| `freelancer webdesign` | gleiche Ratgeber-URL | bis 17.10. | 4 | 62,5 | thematische Relevanz, nicht Top 10 |
| `website erstellen lassen freelancer` | gleiche Ratgeber-URL | bis 17.10. | 1 | 54,0 | Einzelbeobachtung |

Property-Sichtbarkeit: 24 Impressionen vom 04.–10.10., 93 vom 11.–17.10. und 13 vorläufige Impressionen vom 18.–19.10.; insgesamt 130 Impressionen und 0 Klicks. Wegen Query-Anonymisierung stimmen aufgeschlüsselte Query-Zeilen nicht zwingend mit der Property-Gesamtsumme überein.

## URL Inspection vom 20.10.2026

Die Prüfung erfolgte ausschließlich lesend in der autorisierten Search-Console-Sitzung. Es wurde kein Live-Test und keine Indexierungsanfrage ausgelöst.

| URL | Google-Status | Letzter Crawl | Nutzer-Canonical | Google-Canonical |
|---|---|---|---|---|
| `/de/projekte/geraete-nachverfolgung` | indexiert | 08.10.2026, 23:37:54 | selbstreferenziell | geprüfte URL |
| `/de/projekte` | indexiert | 08.10.2026, 12:43:13 | selbstreferenziell | geprüfte URL |
| `/de/leistungen/webentwicklung` | nicht indexiert, Duplikat | 05.10.2026, 21:42:41 | selbstreferenziell | alte URL auf `al-badawi.de` |
| `/de/blogs/webdesigner-freelancer-oder-agentur` | indexiert | 12.10.2026, 00:01:32 | selbstreferenziell | geprüfte URL |
| `/` | indexiert, gespeicherter Stand vor Release | 07.10.2026, 14:30:40 | `/en/` | Root-URL |

Für die Geräte-Detailseite nennt Google als verweisende Seiten bereits `/de/projekte` und `/de/leistungen/softwareentwicklung`. Für die geprüfte URL wurde keine verweisende Sitemap angezeigt. Der Wechsel der rankenden URL ist damit weder durch Deindexierung noch durch eine abweichende Canonical-Auswahl erklärt. Die Arbeitshypothese ist ein Relevanz-/URL-Auswahlsignal bei sehr kleiner Stichprobe.

Der aktuelle Übersichtsbericht der Search Console zeigte am 20.10.2026 46 indexierte und 29 nicht indexierte Seiten. Das ist eine Momentaufnahme und nicht direkt mit einer einzelnen Query-Messung gleichzusetzen.

## Inventar der internen Links vor der Änderung

- `/de/projekte`: generische Projektkarte mit Titel, Kurzbeschreibung und Linktext „Projekt ansehen“.
- `/de/leistungen/webentwicklung`, `/de/leistungen/softwareentwicklung` und `/de/leistungen/automatisierung`: jeweilige verwandte Projektkarte mit generischem Linktext „Projekt ansehen“.
- `/de/blogs/wordpress-baukasten-oder-individuelle-website`: kontextueller Link „Geräte-Nachverfolgung mit Daten- und Statuslogik“.
- Startseite: kein Link, da die Geräte-Fallstudie nicht zu den drei bewusst ausgewählten Featured Projects gehört.

Es wurde kein zusätzlicher Startseitenlink erzwungen. Die neuen Links sitzen nur dort, wo Nutzer bereits Projekte beziehungsweise passende Entwicklungsleistungen vergleichen.

## Experiment A: Geräte-Fallstudie

### Hypothese

Wenn die Projektübersicht die indexierte Detail-Fallstudie mit einem konkreten, sachlichen Linktext empfiehlt und die Leistungsseiten denselben Anwendungsfall genauer benennen, kann Google die Detailseite zuverlässiger der Anfrage `gerätenachverfolgung` zuordnen als die allgemeine Projektübersicht.

### Änderungen

- Auf der Projektübersicht wurde ein kurzer Fallstudien-Kontext mit dem Linktext **„IT-Geräte-Nachverfolgung mit Standort- und Statushistorie“** ergänzt.
- Auf den tatsächlich passenden Leistungsseiten benennt der Projektlink nun die IT-Geräte-Nachverfolgung und Statushistorie statt nur „Projekt ansehen“.
- Die bestehende lokale Demo erklärt jetzt den belegbaren MVP-Ablauf in drei Schritten: Suche per Inventarnummer, gemeinsame Aktualisierung von Standort/Status/Verantwortung sowie Historie und Rollback.
- Die Darstellung bleibt ausdrücklich eine lokale Mock-Simulation ohne Produktivdaten. Es wurde kein nicht vorhandener Kundenscreenshot und keine Produktfunktion erfunden.

Betroffene Produktions-URLs nach einem später separat freizugebenden Deployment:

- `https://bandora-dev.de/de/projekte`
- `https://bandora-dev.de/de/projekte/geraete-nachverfolgung`
- die vorhandenen DE/EN/AR-Leistungsseiten mit dieser verwandten Projektkarte

### Primäre Messung

- Query: `gerätenachverfolgung`
- Seite: `/de/projekte/geraete-nachverfolgung`
- Land: Deutschland
- Suchtyp: Web
- Kennzahlen: Impressionen, Ø Position, Klicks, Anteil der Tage mit der beabsichtigten Detail-URL, konkurrierende Impressionen von `/de/projekte`

## Experiment B: Freelancer oder Agentur

### Bestandsprüfung

Der Artikel enthielt bereits Direktantwort, Vergleichstabelle, Freelancer-/Agentur-Kriterien, zehn Auswahlfragen, Szenarien, FAQ, Quellen und interne Links. Eine weitere generische Pro-/Contra-Tabelle oder zusätzliche Standard-FAQ wäre doppelt gewesen.

### Hypothese

Ein transparentes Drei-Jahres-Modell ergänzt eine echte Entscheidungslücke: Nicht nur der Projektstart, sondern Wartung, Änderungen und Übergabefähigkeit bestimmen die wirtschaftliche Anbieterwahl. Das passt zur vergleichenden Suchintention, ohne den Artikel als transaktionale Freelancer-Landingpage umzudeuten.

### Änderung

Eine klar als Beispiel gekennzeichnete Kostenindex-Rechnung vergleicht zwei Angebote über drei Jahre. Sie verwendet ausdrücklich keine Europreise und keine behaupteten Marktwerte. Dazu kommen konkrete Prüffragen zu Support, Updates, Backups, Änderungen, Übergabe und Vertretung.

### Primäre Messung

- Queries: `webdesigner freelancer oder agentur`, `freelancer oder webdesign agentur` sowie die bereits sichtbaren Varianten
- Seite: `/de/blogs/webdesigner-freelancer-oder-agentur`
- Land: Deutschland
- Suchtyp: Web
- Kennzahlen: Impressionen, Ø Position, Klicks, CTR und tatsächlich von GSC ausgegebene neue Query-Varianten

## Experiment C: kommerzielle Webentwicklung

Es wurde bewusst **keine Websiteänderung** vorgenommen. URL Inspection zeigt für `/de/leistungen/webentwicklung` noch die alte `al-badawi.de`-URL als Google-Canonical und einen Crawl vom 05.10.2026. Eine inhaltliche Berlin-Optimierung würde deshalb Migration und Content-Test vermischen. Auch eine zweite Berlin-Landingpage würde dieselbe Suchintention unnötig duplizieren.

Nächster Schritt erst nach einem neuen Google-Crawl und bestätigter Canonical-Übernahme: vorhandene Leistungsseite anhand echter lokaler Geschäftssubstanz und realer Projektbelege bewerten. Keine erfundenen Referenzen, Festpreise oder Standortsignale.

## Technische Verifikation

Stand des Branches nach Commit `b869361`:

- 51/51 gezielte Vitest-Tests bestanden.
- TypeScript-Prüfung bestanden.
- ESLint bestanden.
- Produktionsbuild und SSR-Prerender bestanden.
- 72/72 Sitemap-Routen prerendered.
- SEO-Regression bestanden: Titel, Descriptions, Canonicals, genau ein H1, Main-Inhalt, strukturierte Daten, interne Ziele und reziproke hreflang-Verweise valide.

## Kontrolltermine und Auswertung

Da der Branch noch nicht deployed ist, beginnt der Messzeitraum erst mit einem später ausdrücklich freigegebenen Release. Releasezeit und produktiver Commit sind dann hier zu ergänzen.

1. **Technische Kontrolle:** 48–72 Stunden nach Deployment ausschließlich lesend prüfen, ob die geänderten Seiten erreichbar, canonicalisiert und in der Sitemap enthalten sind.
2. **Erste GSC-Kontrolle:** 7–10 Tage nach Deployment; Fresh Data getrennt kennzeichnen, keine voreilige Umschreibung.
3. **Hauptauswertung:** 28 Tage nach Deployment. Bei einem hypothetischen Release am 20.10.2026 wäre der Termin der **17.11.2026**.

Ein belastbarer Pilot-Erfolg ist vorab definiert als mindestens 20 Impressionen derselben Query-URL-Land-Kombination innerhalb von 28 Tagen, Ø Position höchstens 10 und Top-10-Positionen in zwei getrennten 7-Tage-Fenstern mit jeweils mindestens fünf Impressionen. Wird dieses Volumen nicht erreicht, darf nur ein begrenzter, wiederholter Top-10-Befund berichtet werden – kein stabiler Ranking-Erfolg.

Bei der Kontrolle werden außerdem folgende Vergleichsgrößen unangetastet mitgeführt:

- `/de/projekte` für dieselbe Query, um die URL-Auswahl zu beobachten;
- `/en/projects/geraete-nachverfolgung` im deutschen Datensatz, um Sprachverschiebungen zu erkennen;
- der kommerzielle Webentwicklungs-Cluster ohne Contentänderung;
- Property-Impressionen nur als Kontext, nicht als Ersatz für Query-URL-Daten.

