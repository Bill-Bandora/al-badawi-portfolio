# Bandora Development – Google Search Console & SEO-Audit

**Stichtag:** 12. Oktober 2026  
**Migration:** al-badawi.de → bandora-dev.de am 6. Oktober 2026  
**Umfang:** Analyse von Repository, Live-Auslieferung, allen 72 Sitemap-URLs, beiden Search-Console-Properties, öffentlicher SERP-Stichprobe und Lighthouse-Labtests.  
**Arbeitsweise:** ausschließlich lesend. Es wurden keine Website-, Hosting-, DNS-, Search-Console- oder Indexierungsänderungen vorgenommen und keine Indexierung beantragt.

## A. Management Summary

### Kurzurteil

Die Website hat **keinen flächendeckenden technischen Ausfall**. Alle 72 kanonischen Sitemap-URLs antworten mit HTTP 200, sind crawlbar, besitzen einen selbstreferenziellen Canonical, eine eindeutige H1, Metadaten und vorgerenderten Hauptinhalt. Die Sitemap wurde in Google Search Console erfolgreich gelesen. Das aktuelle Indexdefizit ist überwiegend durch den erst sechs Tage alten Domainumzug und noch nicht abgeschlossene Canonical-Konsolidierung erklärbar.

Google kennt für bandora-dev.de derzeit 73 URLs: 37 indexiert und 36 nicht indexiert. Von den 72 Sitemap-URLs sind exakt **36 indexiert, 5 als Duplikat ausgeschlossen und 31 zwar gefunden, aber noch nicht gecrawlt/indexiert**. Die zusätzliche 73. URL ist die nicht in der Sitemap enthaltene Root-URL `https://bandora-dev.de/`.

### Wichtigste Ursachen, nach Einfluss

1. **Domainmigration noch in Verarbeitung.** Vier der fünf als Duplikat ausgeschlossenen Prioritätsseiten wurden zuletzt am 05.10.2026 gecrawlt, also **vor** dem Domainwechsel. Bei der geprüften Webentwicklungsseite nennt Google noch die alte Domain als ausgewählte Canonical. Gleichzeitig sind auf al-badawi.de noch zehn URLs indexiert, darunter fünf neue SEO-Seiten. Das ist ein belastbares Zeichen für einen noch laufenden Signaltransfer, nicht für einen aktuellen Cross-Domain-Canonical im Live-HTML.
2. **31 URLs sind nur entdeckt.** Search Console zeigt für alle 31 „Gefunden – zurzeit nicht indexiert“ und keinen letzten Crawl. Google hat sie erst am 10.10.2026 in den Bericht aufgenommen. Das spricht primär für Crawl-/Verarbeitungszeit bei einer jungen Domain mit wenig externen Signalen.
3. **Fehlerhafte hreflang-Rückverweise.** Bei Projekt- und Leistungsdetails erzeugen englische und arabische Seiten deutsche Alternates mit den falschen Segmenten `/de/projects/` bzw. `/de/services/`. Der Crawl fand 52 nicht-reziproke oder nicht in der Sitemap vorhandene hreflang-Ziele.
4. **Root-URL ist ein indexierbarer SPA-Shell-Endpunkt.** `https://bandora-dev.de/` liefert HTTP 200, nur den Titel „Bandora Development“, keinen Canonical und leitet erst clientseitig sprachabhängig weiter. Google hat diese URL bereits indexiert und ihr Impressionen zugeordnet. Das erzeugt eine unnötige zusätzliche URL im Canonical-Set.
5. **Echte Sprachduplikate.** Der Artikel „Warum kleine Unternehmen eine Website brauchen“ verwendet dieselben deutschen Inhaltsdaten für DE, EN und AR. EN und AR haben identische Hauptinhalts-Hashes; die arabische URL ist bereits als Duplikat ausgeschlossen.

### Aktuelle Sichtbarkeit

- bandora-dev.de: **0 Klicks, 16 Impressionen, CTR 0 %, Durchschnittsposition 28,2** im verfügbaren Zeitraum 04.–09.10.2026.
- al-badawi.de: **1 Klick, 49 Impressionen, CTR 2 %, Durchschnittsposition 30,9** im Zeitraum 26.09.–09.10.2026.
- Erste neue Domain-Signale: „bandora“ Position 4 (1 Impression), „webdesign freelancer“ Position 66 (2), „gerätenachverfolgung“ Position 55,5 (2). Die Datenmenge ist zu klein für belastbare Trend- oder CTR-Entscheidungen.
- Die Prioritätsseite „Webdesigner, Freelancer oder Agentur?“ hat als einzige der sechs neuen Artikel bereits Impressionen auf der neuen Domain. Fünf der sieben Prioritätsseiten sind noch nicht indexiert.

### Sofortige Entscheidung

**Nicht** die funktionierenden Domainredirects oder Canonicals neu bauen. Stattdessen zuerst Root-URL, hreflang und die falschen Sprachvarianten korrigieren, dann Google Zeit zur erneuten Verarbeitung geben. Die selektiven alten URLs leiten aktuell direkt per HTTP 301 auf exakt denselben Pfad unter bandora-dev.de weiter; 301 und 308 sind für Google permanente Redirect-Signale.

## B. Google-Indexierungsübersicht

### B1. Search-Console-Gesamtbild

| Property | Indexiert | Nicht indexiert | Wesentliche Gründe | Berichtsstand |
|---|---:|---:|---|---|
| bandora-dev.de | 37 | 36 | 31 gefunden/nicht indexiert; 5 Duplikate | Indexbericht 09.10.2026 |
| al-badawi.de | 10 | 2 | 1 Seite mit Weiterleitung; 1 gecrawlt/nicht indexiert | Indexbericht 09.10.2026 |

Sitemap `https://bandora-dev.de/sitemap.xml`: eingereicht am 05.10.2026, zuletzt gelesen am 08.10.2026, Status **Erfolgreich**, 72 erkannte Seiten. Core Web Vitals: zu wenig Felddaten. HTTPS-Bericht: keine kritischen Probleme. Breadcrumb-Bericht: 5 gültig, 0 ungültig.

### B2. Vollständige URL-Matrix der 72 Sitemap-URLs

„Selbstreferenziell“ bedeutet: der heute live ausgelieferte Canonical entspricht der URL exakt. „Nicht überprüfbar“ bedeutet nicht „falsch“; die Google-Canonical wurde nicht für jede URL einzeln über URL Inspection abgefragt. Die eine belastbare Einzelprüfung ist gesondert genannt.

| URL | GSC-Status | Ausschlussgrund | Nutzer-Canonical | Google-Canonical | Letzter Crawl | Maßnahme |
|---|---|---|---|---|---|---|
| [`/de/`](https://bandora-dev.de/de/) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 07.10.2026 | beobachten |
| [`/de/leistungen`](https://bandora-dev.de/de/leistungen) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 08.10.2026 | beobachten |
| [`/de/projekte`](https://bandora-dev.de/de/projekte) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 08.10.2026 | beobachten |
| [`/de/blogs`](https://bandora-dev.de/de/blogs) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 09.10.2026 | beobachten |
| [`/de/ueber-mich`](https://bandora-dev.de/de/ueber-mich) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 08.10.2026 | beobachten |
| [`/de/kontakt`](https://bandora-dev.de/de/kontakt) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/de/impressum`](https://bandora-dev.de/de/impressum) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/de/datenschutz`](https://bandora-dev.de/de/datenschutz) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/de/projekte/bandora-org`](https://bandora-dev.de/de/projekte/bandora-org) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/de/projekte/buynot`](https://bandora-dev.de/de/projekte/buynot) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/de/projekte/geraete-nachverfolgung`](https://bandora-dev.de/de/projekte/geraete-nachverfolgung) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 08.10.2026 | beobachten |
| [`/de/projekte/roommate-plus`](https://bandora-dev.de/de/projekte/roommate-plus) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/de/projekte/bandora-gen8`](https://bandora-dev.de/de/projekte/bandora-gen8) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/de/projekte/digital-footprint-os`](https://bandora-dev.de/de/projekte/digital-footprint-os) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 07.10.2026 | beobachten |
| [`/de/projekte/bandora-mt5-trader`](https://bandora-dev.de/de/projekte/bandora-mt5-trader) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 07.10.2026 | beobachten |
| [`/de/projekte/bandora-crypto-scanner`](https://bandora-dev.de/de/projekte/bandora-crypto-scanner) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/de/projekte/bandora-studio`](https://bandora-dev.de/de/projekte/bandora-studio) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/de/blogs/website-erstellen-lassen-kosten-2026`](https://bandora-dev.de/de/blogs/website-erstellen-lassen-kosten-2026) | Nicht indexiert | Duplikat; Google wählte andere Canonical | selbstreferenziell | nicht überprüfbar | 05.10.2026 | nach P0-Fixes neu bewerten |
| [`/de/blogs/webdesigner-freelancer-oder-agentur`](https://bandora-dev.de/de/blogs/webdesigner-freelancer-oder-agentur) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 09.10.2026 | beobachten |
| [`/de/blogs/wordpress-baukasten-oder-individuelle-website`](https://bandora-dev.de/de/blogs/wordpress-baukasten-oder-individuelle-website) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/de/blogs/website-erstellen-lassen-ablauf`](https://bandora-dev.de/de/blogs/website-erstellen-lassen-ablauf) | Nicht indexiert | Duplikat; Google wählte andere Canonical | selbstreferenziell | nicht überprüfbar | 05.10.2026 | nach P0-Fixes neu bewerten |
| [`/de/blogs/webdesign-angebote-vergleichen`](https://bandora-dev.de/de/blogs/webdesign-angebote-vergleichen) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/de/blogs/seo-beim-website-erstellen`](https://bandora-dev.de/de/blogs/seo-beim-website-erstellen) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/de/blogs/warum-kleine-unternehmen-eine-website-brauchen`](https://bandora-dev.de/de/blogs/warum-kleine-unternehmen-eine-website-brauchen) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 08.10.2026 | beobachten |
| [`/de/leistungen/webentwicklung`](https://bandora-dev.de/de/leistungen/webentwicklung) | Nicht indexiert | Duplikat; Google wählte andere Canonical | selbstreferenziell | `https://al-badawi.de/de/leistungen/webentwicklung` | 05.10.2026 | nach P0-Fixes neu bewerten |
| [`/de/leistungen/softwareentwicklung`](https://bandora-dev.de/de/leistungen/softwareentwicklung) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 08.10.2026 | beobachten |
| [`/de/leistungen/app-entwicklung`](https://bandora-dev.de/de/leistungen/app-entwicklung) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/de/leistungen/automatisierung`](https://bandora-dev.de/de/leistungen/automatisierung) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/en/`](https://bandora-dev.de/en/) | Nicht indexiert | Duplikat; Google wählte andere Canonical | selbstreferenziell | nicht überprüfbar | 07.10.2026 | nach P0-Fixes neu bewerten |
| [`/en/services`](https://bandora-dev.de/en/services) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 07.10.2026 | beobachten |
| [`/en/projects`](https://bandora-dev.de/en/projects) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 07.10.2026 | beobachten |
| [`/en/blogs`](https://bandora-dev.de/en/blogs) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 07.10.2026 | beobachten |
| [`/en/about`](https://bandora-dev.de/en/about) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 07.10.2026 | beobachten |
| [`/en/contact`](https://bandora-dev.de/en/contact) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 09.10.2026 | beobachten |
| [`/en/imprint`](https://bandora-dev.de/en/imprint) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 08.10.2026 | beobachten |
| [`/en/privacy`](https://bandora-dev.de/en/privacy) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 07.10.2026 | beobachten |
| [`/en/projects/bandora-org`](https://bandora-dev.de/en/projects/bandora-org) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/en/projects/buynot`](https://bandora-dev.de/en/projects/buynot) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/en/projects/geraete-nachverfolgung`](https://bandora-dev.de/en/projects/geraete-nachverfolgung) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 08.10.2026 | beobachten |
| [`/en/projects/roommate-plus`](https://bandora-dev.de/en/projects/roommate-plus) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 07.10.2026 | beobachten |
| [`/en/projects/bandora-gen8`](https://bandora-dev.de/en/projects/bandora-gen8) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 08.10.2026 | beobachten |
| [`/en/projects/digital-footprint-os`](https://bandora-dev.de/en/projects/digital-footprint-os) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 07.10.2026 | beobachten |
| [`/en/projects/bandora-mt5-trader`](https://bandora-dev.de/en/projects/bandora-mt5-trader) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 07.10.2026 | beobachten |
| [`/en/projects/bandora-crypto-scanner`](https://bandora-dev.de/en/projects/bandora-crypto-scanner) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 08.10.2026 | beobachten |
| [`/en/projects/bandora-studio`](https://bandora-dev.de/en/projects/bandora-studio) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 07.10.2026 | beobachten |
| [`/en/blogs/warum-kleine-unternehmen-eine-website-brauchen`](https://bandora-dev.de/en/blogs/warum-kleine-unternehmen-eine-website-brauchen) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 07.10.2026 | beobachten |
| [`/en/services/webentwicklung`](https://bandora-dev.de/en/services/webentwicklung) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 07.10.2026 | beobachten |
| [`/en/services/softwareentwicklung`](https://bandora-dev.de/en/services/softwareentwicklung) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 07.10.2026 | beobachten |
| [`/en/services/app-entwicklung`](https://bandora-dev.de/en/services/app-entwicklung) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 07.10.2026 | beobachten |
| [`/en/services/automatisierung`](https://bandora-dev.de/en/services/automatisierung) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 07.10.2026 | beobachten |
| [`/ar/`](https://bandora-dev.de/ar/) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/ar/services`](https://bandora-dev.de/ar/services) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/ar/projects`](https://bandora-dev.de/ar/projects) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/ar/blogs`](https://bandora-dev.de/ar/blogs) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/ar/about`](https://bandora-dev.de/ar/about) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 08.10.2026 | beobachten |
| [`/ar/contact`](https://bandora-dev.de/ar/contact) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/ar/imprint`](https://bandora-dev.de/ar/imprint) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 08.10.2026 | beobachten |
| [`/ar/privacy`](https://bandora-dev.de/ar/privacy) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 08.10.2026 | beobachten |
| [`/ar/projects/bandora-org`](https://bandora-dev.de/ar/projects/bandora-org) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/ar/projects/buynot`](https://bandora-dev.de/ar/projects/buynot) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/ar/projects/geraete-nachverfolgung`](https://bandora-dev.de/ar/projects/geraete-nachverfolgung) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/ar/projects/roommate-plus`](https://bandora-dev.de/ar/projects/roommate-plus) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/ar/projects/bandora-gen8`](https://bandora-dev.de/ar/projects/bandora-gen8) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/ar/projects/digital-footprint-os`](https://bandora-dev.de/ar/projects/digital-footprint-os) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/ar/projects/bandora-mt5-trader`](https://bandora-dev.de/ar/projects/bandora-mt5-trader) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 08.10.2026 | beobachten |
| [`/ar/projects/bandora-crypto-scanner`](https://bandora-dev.de/ar/projects/bandora-crypto-scanner) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/ar/projects/bandora-studio`](https://bandora-dev.de/ar/projects/bandora-studio) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/ar/blogs/warum-kleine-unternehmen-eine-website-brauchen`](https://bandora-dev.de/ar/blogs/warum-kleine-unternehmen-eine-website-brauchen) | Nicht indexiert | Duplikat; Google wählte andere Canonical | selbstreferenziell | nicht überprüfbar | 09.10.2026 | nach P0-Fixes neu bewerten |
| [`/ar/services/webentwicklung`](https://bandora-dev.de/ar/services/webentwicklung) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 09.10.2026 | beobachten |
| [`/ar/services/softwareentwicklung`](https://bandora-dev.de/ar/services/softwareentwicklung) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/ar/services/app-entwicklung`](https://bandora-dev.de/ar/services/app-entwicklung) | Nicht indexiert | Gefunden – zurzeit nicht indexiert | selbstreferenziell | nicht überprüfbar | nicht zutreffend | Crawl abwarten; Qualität prüfen |
| [`/ar/services/automatisierung`](https://bandora-dev.de/ar/services/automatisierung) | Indexiert | — | selbstreferenziell | nicht einzeln geprüft | 10.10.2026 | beobachten |

### B3. Zusätzliche Root-URL

| URL | Sitemap | HTTP | Initiales HTML | GSC | Bewertung |
|---|---|---:|---|---|---|
| `https://bandora-dev.de/` | nein | 200 | leere SPA-Shell, kein Canonical, kein H1 | indexiert; 4 Impressionen, Position 19 | P0: eindeutige serverseitige Behandlung |

### B4. Sieben Prioritätsseiten

| URL | GSC-Status | Letzter Crawl | Google-Canonical | Haupttext-Zeichen | H2 | interne Eingänge |
|---|---|---|---|---:|---:|---:|
| [`/de/leistungen/webentwicklung`](https://bandora-dev.de/de/leistungen/webentwicklung) | Duplikat / nicht indexiert | 05.10.2026 | alte Domain (Crawl 05.10.) | 2.799 | 8 | 16 |
| [`/de/blogs/website-erstellen-lassen-kosten-2026`](https://bandora-dev.de/de/blogs/website-erstellen-lassen-kosten-2026) | Duplikat / nicht indexiert | 05.10.2026 | nicht überprüfbar | 8.048 | 12 | 8 |
| [`/de/blogs/webdesigner-freelancer-oder-agentur`](https://bandora-dev.de/de/blogs/webdesigner-freelancer-oder-agentur) | Indexiert | 09.10.2026 | nicht überprüfbar | 6.082 | 11 | 4 |
| [`/de/blogs/wordpress-baukasten-oder-individuelle-website`](https://bandora-dev.de/de/blogs/wordpress-baukasten-oder-individuelle-website) | Gefunden / nicht indexiert | nicht zutreffend | nicht überprüfbar | 6.469 | 12 | 5 |
| [`/de/blogs/website-erstellen-lassen-ablauf`](https://bandora-dev.de/de/blogs/website-erstellen-lassen-ablauf) | Duplikat / nicht indexiert | 05.10.2026 | nicht überprüfbar | 6.413 | 12 | 9 |
| [`/de/blogs/webdesign-angebote-vergleichen`](https://bandora-dev.de/de/blogs/webdesign-angebote-vergleichen) | Gefunden / nicht indexiert | nicht zutreffend | nicht überprüfbar | 6.182 | 12 | 8 |
| [`/de/blogs/seo-beim-website-erstellen`](https://bandora-dev.de/de/blogs/seo-beim-website-erstellen) | Gefunden / nicht indexiert | nicht zutreffend | nicht überprüfbar | 6.471 | 13 | 9 |

Alle sieben liefern heute HTTP 200, `index, follow`, korrekte selbstreferenzielle Canonicals, Article/Service- und Breadcrumb-Schema sowie aussagekräftigen vorgerenderten Inhalt. Die vier „Duplikat“-Befunde sind daher nicht mit einem heute falschen Live-Canonical gleichzusetzen.

## C. Root-Cause-Analyse

### C1. Hauptursache: verzögerte Canonical-Konsolidierung nach dem Domainumzug

Die Evidenz ist konsistent:

- Migration am 06.10.2026; die problematischen DE-Prioritätsseiten wurden zuletzt am 05.10.2026 gecrawlt.
- URL Inspection für `/de/leistungen/webentwicklung`: Googlebot Smartphone crawlte am 05.10.2026 erfolgreich, Nutzer-Canonical war die neue URL, Google wählte aber noch `https://al-badawi.de/de/leistungen/webentwicklung`.
- Auf der alten Property sind am 09.10.2026 weiterhin zehn URLs indexiert, darunter Kosten-, Ablauf-, Angebots-, SEO- und Webentwicklungsseiten.
- Heute zeigen alle 72 Live-Canonicals, Open-Graph-URLs, Sitemap-Einträge und robots.txt ausschließlich auf bandora-dev.de.
- Heute leiten 144/144 historischen Quell-URLs (72 Pfade × apex/www) direkt per 301 auf denselben neuen Pfad weiter, ohne Kette; Query-Parameter bleiben erhalten. Root und unbekannte private Pfade der alten Domain bleiben 404.

Google beschreibt Redirects und `rel=canonical` als starke, Sitemap-Einträge als schwächere, aber kombinierbare Canonical-Signale. Eine Re-Evaluierung von Duplikat-Clustern kann laut Google bis zu etwa zwei Wochen dauern. Deshalb ist „abwarten und sauber halten“ hier fachlich richtiger als neue URL- oder Redirect-Experimente.

### C2. Kein Crawl-Blocker auf den 72 Zielseiten

Live-Crawl-Ergebnis:

- 72/72 HTTP 200
- 72/72 exakt selbstreferenzielle Canonicals und `og:url`
- 72/72 indexierbar; kein `noindex`, kein X-Robots-Block
- 72/72 mit Titel, Description, genau einer H1 und vorgerendertem Hauptinhalt
- 0 Sitemap-Redirects, 0 interne Redirect-Ziele, 0 verwaiste Sitemap-Seiten
- 0 Verweise auf al-badawi.de im ausgelieferten HTML
- 0 Schema-JSON-Fehler im syntaktischen Crawl

Der eine gemeldete interne 404-Pfad `/cdn-cgi/l/email-protection` stammt aus Cloudflares E-Mail-Obfuskation und ist kein normaler redaktioneller Link. Er sollte bei Gelegenheit semantisch geprüft werden, erklärt aber nicht das Indexdefizit.

### C3. hreflang-Fehler

In [`src/components/common/SeoHead.tsx`](../../src/components/common/SeoHead.tsx) Zeilen 22–26 wird das erste Pfadsegment ausschließlich gegen `item.paths.de` gesucht. Auf `/en/projects/...` und `/ar/projects/...` lautet das Segment aber `projects`, auf Leistungsseiten `services`; deshalb wird keine Route gefunden und für Deutsch fälschlich dasselbe Segment weiterverwendet. Betroffen sind 13 Detailseiten-Cluster (9 Projekte + 4 Leistungen), insgesamt 52 fehlerhafte Rückverweis-Befunde.

Auswirkung: Google kann Sprachvarianten schlechter zuordnen; falsche Ziele erzeugen 404 oder nicht-kanonische Routen. Das ist kein vollständiger Indexblocker, aber ein klares internationales SEO-Signalproblem.

### C4. Root-URL

[`src/App.tsx`](../../src/App.tsx) Zeilen 20–23 und 56 leiten die Root-Route erst im Browser über React abhängig von gespeicherter/Browsersprache weiter. [`index.html`](../../index.html) Zeilen 9–13 enthält deshalb für die Root-Auslieferung nur einen generischen Titel und eine leere Root-DIV, aber keinen Canonical. Der Prerender in [`src/entry-server.tsx`](../../src/entry-server.tsx) Zeilen 13–18 umfasst nur die Sprachrouten, nicht `/`.

Auswirkung: Google indexiert eine dünne 200-URL zusätzlich zu `/de/`, `/en/` und `/ar/`. Empfehlung: Root serverseitig eindeutig auf die Standardsprachseite umleiten oder als echte x-default-Sprachauswahl mit eigenem Inhalt, Canonical und hreflang ausbauen. Für dieses Projekt ist ein permanenter Redirect auf `/de/` die einfachste konsistente Variante, sofern keine echte sprachneutrale Landingpage gewünscht ist.

### C5. Sprachduplikat

[`src/data/blogPosts/smallBusinessArticle.ts`](../../src/data/blogPosts/smallBusinessArticle.ts) Zeilen 4–15 deklariert DE, EN und AR, stellt aber nur einen deutschen Datensatz bereit. [`src/pages/BlogArticlePage.tsx`](../../src/pages/BlogArticlePage.tsx) Zeilen 57–85 übernimmt denselben Titel, Auszug und Inhalt je Sprachpfad. Der Live-Crawl bestätigt identischen Hauptinhalt für EN und AR; die arabische URL ist bereits als Duplikat ausgeschlossen.

Auswirkung: unnötige Crawl-/Canonical-Konkurrenz und schlechte Nutzererfahrung. Entweder redaktionell vollständig übersetzen oder EN/AR aus `languages`, Sitemap und hreflang entfernen, bis Übersetzungen vorliegen.

## D. Keyword- und Ranking-Analyse

### D1. Datenlage und Grenzen

Die neue Property hat nur sechs Tage verwertbare Performance-Daten und 16 Impressionen. Ein 7-/28-Tage-Vergleich wäre statistisch irreführend. Die folgenden Aussagen sind deshalb Richtungsindikatoren, keine stabile Rankingmessung. Öffentliche Suchergebnisse wurden als SERP-Stichprobe ausgewertet; exakte Positionen stammen ausschließlich aus Search Console.

### D2. GSC-Queries

| Query | Klicks | Impressionen | Ø Position | Einordnung |
|---|---:|---:|---:|---|
| gerätenachverfolgung | 0 | 2 | 55,5 | Projektintent; noch geringe Relevanz/Autorität |
| bendora | 0 | 2 | 65,0 | Tipp-/Brandvariante |
| webdesign freelancer | 0 | 2 | 66,0 | erster nicht-gebrandeter Commercial-Intent; Anbieterartikel rankt |
| bandora | 0 | 1 | 4,0 | gutes frühes Brandsignal |
| footprints software | 0 | 1 | 27,0 | projektbezogen, vermutlich englische Detailseite |

Alte Domain: „albadawi“/„al badawi“/„al-badawi“ rankten ungefähr Position 3,5–4,3; die neuen fachlichen Keywords waren noch schwach oder nur vereinzelt sichtbar. Der eine Klick ging an `www.al-badawi.de/`. Dies bestätigt, dass Brand- und URL-Signale noch aufgeteilt sind.

### D3. Seiten mit ersten Impressionen

- `/en/projects/digital-footprint-os`: 4 Impressionen, Position 11,5
- Root `/`: 4, Position 19,0 – technisch unerwünschte Sichtbarkeit
- `/en/services`: 4, Position 29,3
- `/en/about`: 3, Position 6,7
- `/de/blogs/webdesigner-freelancer-oder-agentur`: 2, Position 66,0
- `/de/`: 1, Position 2,0

Mehrere EN-Projektseiten erzielen bereits gute Einzelpositionen bei minimalen Impressionen. Das ist ermutigend, aber noch kein Traffic-Muster. Auf Geräteebene: Desktop 11 Impressionen, Position 23,7; Mobile 5, Position 38,0. Auch hier ist die Stichprobe zu klein.

### D4. Suchintention und Content-Fit der sieben Prioritätsseiten

| Seite | Primärer Intent | Aktueller Fit | Gap |
|---|---|---|---|
| Webentwicklung | kommerziell/transaktional | technisch stark, Projekte und Kontakt vorhanden | breitere Webdesign-/KMU-Sprache, Prozess-/Preisanker und belastbare Vertrauensbelege schärfen |
| Kosten 2026 | Commercial Investigation | sehr ausführlich, Tabellen, FAQ, interne Links | eine besonders frühe kompakte Preisantwort/Spanne und konkrete Beispielpakete würden SERP-Nutzen erhöhen |
| Freelancer oder Agentur | Anbieterwahl | trifft Query bereits | Entscheidungsmatrix, Risiko-/Vertretungsbelege und authoritativer Autorabschnitt ausbauen |
| WordPress/Baukasten/individuell | Systemvergleich | differenziert statt dogmatisch | visuelle Entscheidungstabelle und konkrete Betriebsszenarien schärfen |
| Ablauf bis Launch | Prozess/Vertrauen | gute Phasen- und QA-Differenzierung | echte Timeline/Deliverables und Übergabe-Checkliste als Snippet-Block |
| Angebote vergleichen | Checkliste | starke Prüfpunkte | druck-/kopierbare Kurzcheckliste, echte Beispielkriterien und klare Conversion-Brücke |
| SEO von Anfang an | informational + kommerziell | technisch fundiert | Proof über reale Messwerte/Cases und stärkere Abgrenzung zur Leistungsseite |

### D5. Wettbewerber- und SERP-Muster

Die öffentliche Stichprobe für „webdesigner berlin“, „webentwicklung berlin“, „website erstellen lassen berlin“ und „website erstellen lassen kosten 2026“ zeigt wiederkehrende Muster:

- lokale Exact-Match-Landingpages mit Berlin im Title, H1 und URL;
- sofort sichtbare Preisanker oder Paketpreise;
- klare Dauer-/Prozessversprechen, häufig „14 Tage“;
- lokale Proof-Elemente, Portfolios, Bewertungen und direkte Kontakt-CTAs;
- bei Kostenartikeln: kurze Antwort weit oben, Preisbereiche, Vergleichstabellen, laufende Kosten und FAQs.

Beispiele: [Webseite erstellen Berlin](https://webseiteerstellenberlin.de/), [Codewerk Berlin](https://codewerkberlin.de/), [Webentwicklung Berlin](https://webentwicklung.berlin/), [Webdesign Berlin](https://webdesign-berlin.de/) sowie Kosten-/Auswahlseiten aus der bestehenden Research-Dokumentation.

Bandora hat gegenüber generischen Agenturseiten glaubwürdige technische Differenzierung: Prerendering, echte Statuscodes, APIs, Apps, Automatisierung, QA und eigene Projekte. Es fehlen im Vergleich aber noch starke externe Vertrauenssignale, konkrete Kunden-/Ergebnisbelege und – falls Berlin gezielt werden soll – verifizierbare lokale Substanz. Die frühere Entscheidung, keine `/de/webdesign-berlin`-Seite ohne echten Berlin-Bezug zu bauen, bleibt richtig.

### D6. Keyword-Map und Kannibalisierung

- `/de/leistungen/webentwicklung` soll die kommerziellen Kernthemen „Webentwicklung“, „Website erstellen lassen“ und qualifizierte Projektanfragen bündeln.
- Kosten-, Anbieter-, System-, Ablauf-, Angebots- und SEO-Fragen bleiben jeweils auf ihrem spezialisierten Ratgeber.
- Die Startseite sollte Brand + breites Leistungsversprechen tragen, nicht denselben kommerziellen Keyword-Fokus wie die Webentwicklungsseite.
- Kannibalisierungsrisiko entsteht, wenn alle sechs Ratgeber Titles/H1s pauschal auf „Website erstellen lassen“ umoptimiert werden. Die aktuelle thematische Trennung ist grundsätzlich gut.
- Eine lokale Berlin-Seite erst anlegen, wenn reale Service Area, Referenzen oder belastbare Ortsbelege vorhanden sind; sonst bleibt sie schwächer als etablierte lokale Exact-Match-Seiten.

## E. Technische Fehler und Dateibezug

| Priorität | Befund | Evidenz | Datei/Zeilen | Empfohlene Korrektur |
|---|---|---|---|---|
| P0 | falsche hreflang-Rückverweise auf EN/AR Detailseiten | 52 Crawl-Befunde; `/de/projects/` und `/de/services/` statt lokalisierter DE-Pfade | `src/components/common/SeoHead.tsx:22-26,48-50`; Route-Mapping `src/config/site.ts:20-28` | Route anhand **aller** lokalisierten Segmente erkennen; reziproke Tests für DE/EN/AR ergänzen |
| P0 | Root `/` liefert 200-SPA-Shell ohne Canonical | live 200, 582 Byte, leerer Root, bereits indexiert | `src/App.tsx:20-23,56`; `index.html:9-13`; `src/entry-server.tsx:13-18` | serverseitig permanent auf `/de/` oder echte x-default-Seite |
| P1 | deutscher Artikel unter EN/AR | identischer Hauptinhalt EN/AR; AR als Duplikat ausgeschlossen | `src/data/blogPosts/smallBusinessArticle.ts:4-15`; `src/pages/BlogArticlePage.tsx:57-85` | vollständig übersetzen oder Sprachvarianten bis dahin entfernen |
| P1 | generische/duplizierte Descriptions | Blogübersichten in 3 Sprachen gleich; Rechtsseiten je Sprache doppelt | Übersetzungsdaten/LegalPage und Blogdaten | einzigartige, sprachlich korrekte Descriptions; Rechtsseiten pragmatisch niedriger priorisieren |
| P2 | identische Projekttitel über alle Sprachen | 9 Title-Duplikatgruppen | Projektdaten und ProjectDetailPage | lokalisierte Nutzen-/Technik-Zusätze, sofern natürlich |
| P2 | Cloudflare-E-Mail-Link erscheint crawlerseitig als 404 | `/cdn-cgi/l/email-protection` | Cloudflare Email Address Obfuscation / Footer | prüfen, ob echter `mailto:` ohne Obfuskation möglich und datenschutzkonform ist |
| Beobachten | Live-Redirectcode weicht von Doku ab | aktuell 301, Dokumentation nennt 308 | `OLD-PORTFOLIO-REDIRECTS.md` und Proxy-Konfiguration | kein SEO-Problem; Dokumentation bei nächster Wartung angleichen |

### Performance-Labtest

Lighthouse 13.5.0 am 12.10.2026, je ein Lauf pro Profil. Das sind Labwerte, keine Core-Web-Vitals-Felddaten; Search Console hat noch zu wenig CrUX-Daten.

| Seite | Profil | Score | FCP | LCP | TBT | CLS |
|---|---|---:|---:|---:|---:|---:|
| Startseite | Mobile | 97 | 1,8 s | 2,4 s | 60 ms | 0 |
| Startseite | Desktop | 100 | 0,4 s | 0,5 s | 0 ms | 0 |
| Webentwicklung | Mobile | 98 | 1,7 s | 2,2 s | 40 ms | 0 |
| Webentwicklung | Desktop | 100 | 0,4 s | 0,5 s | 0 ms | 0 |
| Kostenartikel | Mobile | 96 | 1,9 s | 2,3 s | 100 ms | 0 |
| Kostenartikel | Desktop | 100 | 0,4 s | 0,5 s | 0 ms | 0 |

Performance ist aktuell **kein Indexierungsproblem**. INP ist in einem synthetischen Einzeltest nicht sinnvoll messbar; auf Felddaten warten.

## F. Priorisierter Maßnahmenplan

### P0 – zuerst, weil Signale eindeutig falsch oder unnötig doppelt sind

1. **hreflang-Generator reparieren und testen.** Abnahme: jede alternative URL existiert, ist indexierbar, selbstkanonisch und verweist reziprok zurück; keine `/de/projects/`-/`/de/services/`-Ziele.
2. **Root-URL technisch festlegen.** Bevorzugt serverseitiger 301 auf `/de/`; alternativ echte x-default-Sprachauswahl. Keine 200-Leershell mehr.
3. **Sprachduplikat bereinigen.** Den kleinen-Unternehmen-Artikel vollständig in EN/AR übersetzen oder diese Varianten aus Indexsignalen entfernen.
4. **Redirects unangetastet lassen und überwachen.** Die 144 selektiven 301-Weiterleitungen sind direkt, pfadtreu und query-erhaltend. Keine globale Weiterleitung der privaten Root-Domain einführen.

### P1 – nach dem technischen Pass

1. Für die sieben Prioritätsseiten nach erneutem Crawl URL Inspection und Indexstatus dokumentieren; nur wenige zentrale URLs zur erneuten Prüfung priorisieren, keine Massenanfragen.
2. Money Page um klare Zielgruppen-/Leistungsabgrenzung, Prozess, Preislogik ohne erfundene Pauschalen, echte Projektbelege und Autoren-/Vertrauenssignale ergänzen.
3. Die sechs Ratgeber jeweils mit einem frühen Direktantwort-Block, eigenständiger Entscheidungshilfe und klarer Conversion-Brücke schärfen.
4. Interne Links von Startseite, Leistungsübersicht und relevanten Projekten zur Webentwicklungsseite und zum passenden Ratgeber kontextuell stärken. Die bestehende Verlinkung ist vorhanden; Anker und prominente Einbindung datenbasiert verbessern.
5. Search-Console-Vergleich der alten/neuen Property wöchentlich festhalten: alte indexierte URLs müssen sinken, neue steigen.

### P2 – wenn mindestens 28 Tage Daten vorliegen

1. Titles/Descriptions anhand realer Impressionen und CTR testen; keine voreiligen Rewrites bei 0–2 Impressionen.
2. Projekttitel je Sprache differenzieren und Projektseiten um Ergebnisse, Rolle, Scope, technische Entscheidungen und verifizierbare Screenshots erweitern.
3. Externe Vertrauenssignale aufbauen: vollständige GitHub-/Projektbelege, seriöse Branchen-/Partnerprofile und echte Erwähnungen; keine gekauften Massenlinks.
4. Berlin-Landingpage nur nach nachweisbarem lokalem Bezug. Bis dahin breitere DACH-/KMU- und Remote-Intent-Positionierung.

## G. 14-/30-/90-Tage-Plan

### Bis Tag 14 (20.10.2026)

- P0-Fixes entwickeln, testen und nach kontrolliertem Release live verifizieren.
- Alle 72 URLs erneut technisch crawlen; Ziel: 72 Canonicals korrekt, 0 hreflang-Fehler, 0 indexierbare Root-Shell.
- Beide GSC-Properties erneut exportieren: Indexierung, Seiten, Queries, Sitemap.
- Prüfen, ob die fünf Duplikat-URLs nach dem erwartbaren Zwei-Wochen-Fenster neu gecrawlt wurden.
- Redirect-Stichprobe und 144er-Matrix unverändert grün halten.

**Messkriterien:** neue Crawldaten nach 06.10.; weniger alte-domain Canonicals; kein Wachstum der Duplikatgruppe; erste Indexierung der 31 gefundenen URLs.

### Bis Tag 30 (05.11.2026)

- 28-Tage-GSC-Daten nach Seitentyp, Sprache, Query und Gerät auswerten.
- Prioritätsseiten mit Impressionen identifizieren; nur dort Snippets und Inhalte gezielt optimieren.
- Verhältnis indexiert/nicht indexiert je Sprache messen. AR separat bewerten, weil dort die meisten nur entdeckten URLs liegen.
- Money Page und die zwei stärksten Ratgeber mit echten Proof-/Entscheidungselementen erweitern.
- Core Web Vitals erneut prüfen; bei weiterhin fehlenden Felddaten Lighthouse nur als Regressionstest nutzen.

**Messkriterien:** mehr als 36/72 Sitemap-URLs indexiert; alte Property deutlich rückläufig; wachsende nicht-gebrandete Impressionen; keine neue Canonical-Abweichung.

### Bis Tag 90 (04.01.2027)

- Query-Cluster nach Geschäftsnähe bewerten: Webentwicklung, Kosten, Anbieterwahl, Systemwahl, Ablauf, SEO.
- Content-Refresh nur für Seiten mit Impressionen aber schwacher CTR/Position 8–30.
- Echte Case-Study-/Projektbelege veröffentlichen, sofern vorhanden.
- Backlink-/Erwähnungsaufbau über reale Projekte, Fachbeiträge und Profile.
- Entscheidung über lokale Berlin-Strategie auf Basis echter Geschäfts- und Standortbelege.

**Messkriterien:** stabile neue-domain Brandrankings, messbare nicht-gebrandete Klicks, alte URLs weitgehend aus dem Index, Prioritätsseiten vollständig indexiert, erste CTR-Basis pro Cluster.

## H. Vergleich mit früheren Findings

### Was umgesetzt bzw. verbessert wurde

- Der Audit vom 30.09.2026 dokumentierte 51 vorgerenderte URLs; heute sind 72 Sitemap-URLs live und technisch vollständig vorgerendert.
- Vier Leistungsdetails, strukturierte Daten, 404-Handling, Canonicals, Sitemap, robots.txt und interne Verlinkung sind live nachweisbar.
- Der Content-Plan vom 05.10.2026 empfahl sechs P1-Ratgeber; alle sechs sind veröffentlicht, mit 6.000–8.000 Haupttextzeichen, 11–13 H2, FAQ-/Article-Schema und internen Links.
- Die Domainmigration wurde technisch weitgehend sauber umgesetzt: neue Domain in Config, Sitemap, robots.txt und Live-HTML; selektive pfadtreue Permanentredirects von der alten Domain.
- Performance und Layout-Stabilität sind im Lab sehr gut.

### Was sich erst jetzt durch echte Daten zeigt

- Die frühere Dokumentation nannte hreflang als vorhanden; der echte Live-Crawl zeigt nun, dass Detailseiten zwar Tags besitzen, aber 52 Rückverweise logisch falsch sind.
- Der frühere Audit ließ die Root bewusst als clientseitige Sprachauswahl; Search Console zeigt nun, dass Google diese dünne 200-URL tatsächlich indexiert und Impressionen zuordnet.
- „Bloginhalte redaktionell übersetzen oder gezielt noindex“ war bereits offen. Die arabische Duplikat-Ausgrenzung bestätigt, dass dieser Punkt jetzt priorisiert werden muss.
- Der vorherige SERP-Report hatte keine Search-Console-Daten. Jetzt gibt es erste reale Signale: Anbieterwahl erzeugt die ersten nicht-gebrandeten Impressionen; Kosten-/Ablaufseiten hängen noch in der Migration.
- Die damalige Empfehlung gegen eine unbelegte Berlin-Landingpage bleibt nach aktueller SERP-Stichprobe gültig; lokale Wettbewerber dominieren mit spezifischem Ortsbezug, Preis-/Prozessversprechen und Proof.

## Quellen und Nachweise

### Interne Nachweise

- [SEO-AUDIT-AFTER.md](../../SEO-AUDIT-AFTER.md)
- [SEO-CONTENT-PLAN-WEBDESIGN.md](../../SEO-CONTENT-PLAN-WEBDESIGN.md)
- [SEO-SERP-RESEARCH-WEBDESIGN-BERLIN.md](../../SEO-SERP-RESEARCH-WEBDESIGN-BERLIN.md)
- [SEO-DOMAIN-SPLIT-NOTES.md](../../SEO-DOMAIN-SPLIT-NOTES.md)
- [OLD-PORTFOLIO-REDIRECTS.md](../../OLD-PORTFOLIO-REDIRECTS.md)

### Google-Dokumentation

- [Site Moves and Migrations](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)
- [Canonical URLs konsolidieren](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Canonicalization-Probleme beheben](https://developers.google.com/search/docs/crawling-indexing/canonicalization-troubleshooting)
- [Redirects and Google Search](https://developers.google.com/search/docs/crawling-indexing/301-redirects)
- [Localized Versions / hreflang](https://developers.google.com/search/docs/specialty/international/localized-versions)

### Methodische Hinweise

Search-Console-Zahlen sind Momentaufnahmen und Berichte können zeitverzögert sein. Google garantiert Indexierung nicht. Der Bericht trennt deshalb strikt zwischen heute live beobachtbaren technischen Signalen, Search-Console-Berichtsständen und fachlichen Schlussfolgerungen. Es wurden keine Suchvolumina erfunden und keine öffentlichen Suchtreffer als exakte Rankingpositionen ausgegeben.

