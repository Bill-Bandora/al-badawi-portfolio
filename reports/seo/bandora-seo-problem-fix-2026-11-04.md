# Bandora Development – SEO-Problembehebung und Produktionsverifikation

**Stichtag:** 04.11.2026  
**Produktivdomain:** `https://bandora-dev.de`  
**Produktiver Commit:** `8460db00a66acd3b00d02c7d04e4b8915be629f4`  
**Produktivimage:** `portfolio-blog:8460db0-rc`  
**Image-Digest:** `sha256:4fc9fb2b3f9bb54f8844ce7231c42e2a73933a15c37316d4c564eefd87e1aa53`  
**Deployment abgeschlossen:** 04.11.2026, 08:45:16 UTC / 09:45:16 CET  
**Abschlussstatus:** erfolgreich

## Kurzfazit

Die geringe organische Sichtbarkeit lässt sich nicht auf einen einzelnen Defekt reduzieren. Zwei konkrete technische Probleme wurden nachgewiesen und behoben: beliebige nicht vorhandene Top-Level-Pfade lieferten zuvor eine indexierbare SPA-Hülle mit HTTP 200, und sprachlich falsche Alias-URLs wie `/de/projects/...` waren ebenfalls als 200 erreichbar. Gleichzeitig waren die kommerziellen Seiten inhaltlich noch weniger konkret als relevante Berliner Wettbewerber.

Produktiv liefern 78/78 Sitemap-URLs jetzt vollständiges prerendered HTML, selbstreferenzielle Canonicals und gültiges hreflang. Unbekannte CMS-Pfade antworten mit 404; sprachlich falsche Aliase leiten direkt per HTTPS-301 auf die kanonische URL. Beide Kernleistungen enthalten nun konkreten Umfang, Kalkulationslogik, reale Eigenprojekte, FAQ und differenzierende Arbeitsweise.

Eine Rankingwirkung ist am Veröffentlichungstag weder messbar noch behauptet. Die aktuelle Search-Console-Datenquelle endet am 01.11.2026 und beschreibt daher ausschließlich den Zustand vor diesem Release.

## 1. Nachgewiesene Fehler

### 1.1 Soft-404- und Duplicate-Signale durch die SPA-Fallback-Regel

Die Apache-Regel lieferte für beliebige nicht lokalisierte Pfade die allgemeine React-Hülle mit HTTP 200. In den produktiven Logs waren Googlebot-Aufrufe unter anderem auf `/wp/`, `/press/`, `/news/wp-json/` und `/two-factor-challenge` mit 200 sichtbar. Diese URLs besitzen keinen Inhalt und dürfen nicht wie echte Seiten wirken.

**Behoben:** Nicht vorhandene, nicht lokalisierte Top-Level-Pfade liefern jetzt einen echten HTTP 404. Der Regressionstest prüft vier typische CMS-/Scannerpfade; der Live-Audit bestätigt 4/4.

### 1.2 Sprachlich falsche Routen waren erreichbar

Der Router akzeptierte alle Sprachsegmente unter jeder Sprache. Dadurch waren beispielsweise `/de/projects/bandora-crypto-scanner`, `/de/services/webentwicklung`, `/en/projekte/...` und `/ar/leistungen/...` als 200 erreichbar, obwohl die Canonicals andere Pfade verwenden. Die GSC-Seitenauswertung vom Zeitraum 14.–27.10. enthält tatsächlich eine Impression für `/de/projects/bandora-crypto-scanner`; produktive Logs zeigten weitere Googlebot-Aufrufe auf `/de/projects/...`.

**Behoben:** Deutsche URLs verwenden ausschließlich `leistungen`, `projekte`, `ueber-mich`, `kontakt`, `impressum` und `datenschutz`; EN/AR verwenden die englischen Segmente. Falsche Varianten werden direkt per 301 auf dasselbe kanonische HTTPS-Ziel konsolidiert. Fünf repräsentative Alias-Gruppen sind automatisiert und live geprüft.

### 1.3 Historische Google-Canonicals

Die Aufgabenstellung spricht von vier aktuellen Abweichungen. Der letzte verfügbare URL-Inspection-Bericht nennt dagegen noch fünf historische Duplikat-URLs:

1. `/ar/blogs/warum-kleine-unternehmen-eine-website-brauchen`
2. `/en/`
3. `/de/blogs/website-erstellen-lassen-ablauf`
4. `/de/blogs/website-erstellen-lassen-kosten-2026`
5. `/de/leistungen/webentwicklung`

Die drei einzeln geprüften deutschen URLs hatten damals noch ihre jeweilige `al-badawi.de`-URL als Google-Canonical. Die Crawls stammten vom 05.–09.10.2026, also vor den finalen Migrationskorrekturen. Die aktuelle Windsor/Search-Console-Schnittstelle stellt Leistungs- und Sitemapdaten bereit, aber keine URL-Inspection- oder Google-Canonical-Felder. Deshalb können die heute in der Oberfläche genannten vier URLs nicht zuverlässig identifiziert werden. Es wurden keine URLs erfunden.

### 1.4 Kein nachgewiesener genereller Googlebot-Block

Die Origin-Logs zeigen erfolgreiche Googlebot-Antworten für `robots.txt`, Sitemap, DE/EN/AR-Seiten, Leistungsseiten, Assets und Bilder. Die Sitemap wurde laut Search Console am 29.10.2026 erneut gelesen; 78 URLs sind eingereicht, 0 Fehler und 0 Warnungen. Ein breiter Cloudflare-Block ist damit nicht plausibel.

**Einschränkung:** Die Cloudflare-Browseroberfläche ließ sich in dieser Sitzung nicht sicher automatisieren. Einzelne WAF-Sicherheitsereignisse, verifizierte Bot-Kennzeichnung und Regel-Matches konnten daher nicht direkt aus Cloudflare exportiert werden. Sicherheitsfunktionen wurden nicht pauschal deaktiviert.

## 2. Migration, externe Erreichbarkeit und ausgeliefertes HTML

### Domainmigration

- 144/144 historische Quell-URLs (`al-badawi.de` Apex und www) leiten direkt per HTTP 301 auf denselben Pfad unter `https://bandora-dev.de`.
- Query-Parameter bleiben erhalten.
- `https://al-badawi.de/` und unbekannte private Pfade bleiben 404; es existiert keine globale Weiterleitung.
- Im Quellcode wurden keine internen Links auf `al-badawi.de` gefunden.
- Der Root von Bandora leitet direkt mit HTTP 301 auf `https://bandora-dev.de/de/`.

### Unabhängige Netzwerke

Ein Globalping-Check aus Falkenstein, Buffalo und Dubai erreichte die Website jeweils mit HTTP 200 und gültigem TLS 1.3. Die lokalen öffentlichen Stichproben nach dem Release lagen für Root, DE/EN/AR und die beiden Leistungsseiten zwischen 0,115 und 0,130 Sekunden. Das externe Web-Prüfwerkzeug konnte die Domain in einer separaten Abfrage nicht laden; die erfolgreiche Messung über unabhängige Probes und die öffentlichen Curl-Tests zeigen, dass dies eine Einschränkung der Prüfverbindung und kein allgemeiner Serverausfall war.

### HTML für Suchmaschinen

Alle 78 Sitemap-Seiten enthalten bereits in der ersten Serverantwort:

- eindeutigen Title und Meta Description;
- H1 und sichtbaren Hauptinhalt;
- selbstreferenziellen Canonical;
- reziprokes hreflang;
- interne HTML-Links;
- parsebares JSON-LD.

Es ist kein clientseitiger Render-Schritt erforderlich, damit Google den Hauptinhalt oder Canonical erkennt.

## 3. Inhaltliche Verbesserungen der Kernleistungen

### `/de/leistungen/webdesign`

Ergänzt wurden:

- konkrete Lieferleistungen von Seitenplan und Nutzerwegen bis Abnahme und kontrolliertem Launch;
- transparente Kalkulationsfaktoren statt eines erfundenen Paketpreises;
- klare Trennung einmaliger, optionaler und laufender Leistungen;
- fünf praxisnahe FAQ zu Kosten, Dauer, Inhalten, Technikwahl und technischer SEO;
- echte Differenzierungsmerkmale: direkter Ansprechpartner, DE/EN/AR einschließlich RTL, SEO-/Performance-/Deployment-Erfahrung;
- `Bandora Studio` als belegbares eigenes Projekt, nicht als erfundene Kundenreferenz;
- Service- und FAQPage-Strukturdaten.

### `/de/leistungen/webentwicklung`

Ergänzt wurden:

- konkrete MVP-, Datenmodell-, API-, Rollen-, Test- und Übergabeleistungen;
- nachvollziehbare Angebotslogik für Funktionen, Schnittstellen, Abnahmekriterien und Betrieb;
- vier FAQ zu Kosten, Abgrenzung zur Website, Erweiterung vorhandener Systeme und Quellcode-/Zugangsrechten;
- technische Alleinstellungsmerkmale aus realen eigenen Projekten und dem selbst betriebenen Gen8-Deployment;
- Service- und FAQPage-Strukturdaten.

### Wettbewerbsabgleich

Relevante Anbieter positionieren sich sichtbar mit Leistungsumfang, Ablauf, Preisspannen oder Kalkulationslogik und FAQ. Verglichen wurden unter anderem [Wolfgegenlicht](https://www.wolfgegenlicht.de/webdesign-preise/), [Homepage Handmade](https://homepagehandmade.de/webdesign-berlin/), [Komplett Webdesign](https://komplettwebdesign.de/webdesign-berlin), [Checkpoint E](https://www.checkpoint-e.de/preise/), [Heinemann Berlin](https://heinemann.berlin/webdevelopment), [Internetagentur Kähler](https://internetagentur-kaehler.de/api-entwicklung-berlin) und [Dosigny](https://dosigny.com/webentwicklung/). Die Bandora-Seiten schließen diese Informationslücken, ohne fremde Preise oder unbelegte Erfolgsversprechen zu übernehmen.

### Nicht veröffentlichte Referenzen

Für BFE Berlin und Quattro Zulassungsdienst wurden weder im Repository noch in der öffentlichen Recherche ausreichend freigegebene Belege zur konkreten Bandora-Leistung, zum Umfang und zu Ergebnissen gefunden. Beide bleiben **BLOCKED** und wurden nicht als Kundenreferenz veröffentlicht.

## 4. Interne Links und Kannibalisierung

Vier nicht experimentgeschützte Ratgeber erhielten neue kontextuelle Links:

- Kostenartikel → individuelle Webentwicklung;
- Plattformvergleich → individuelle Webentwicklung;
- Projektablauf → Webentwicklung bei Rollen, Daten oder Schnittstellen;
- SEO-Ratgeber → Webdesign und Webentwicklung.

Die sechs Ratgeber bleiben in ihrer Suchintention getrennt: Kosten, Plattformwahl, Ablauf, Angebotsvergleich, technische SEO sowie Freelancer-versus-Agentur. Die kommerziellen Zielseiten bleiben Webdesign beziehungsweise Webentwicklung. Der geschützte Freelancer-Experimentartikel und die Geräte-Detailseite wurden inhaltlich nicht verändert; ihre Baseline bleibt erhalten.

## 5. Externe Autorität und Backlink-Lücken

Eine öffentliche Suche fand keine belastbare vollständige Backlink-Liste für `bandora-dev.de` oder `al-badawi.de`. Der vorhandene Ahrefs-Zugang reichte bereits im vorherigen Audit nicht für Backlinkmetriken. Verweisende Domains, verlorene Links und Linkqualität bleiben deshalb **BLOCKED** und wurden nicht geschätzt.

Seriöse nächste Möglichkeiten, jeweils nur mit Freigabe:

1. echte öffentliche Kundenprojekte mit freiwilligem Technik-/Entwicklerhinweis;
2. GitHub-Profil, Organisation und reale Projekt-Repositories mit passender Website-Verknüpfung;
3. fachliche Berliner Verzeichnisse und Communities mit konsistenten echten Angaben;
4. nachvollziehbare technische Projektberichte und Open-Source-Dokumentation;
5. Partner- oder Kundenfallstudien mit belegtem Umfang und Zustimmung.

Es wurden keine Dritten kontaktiert, keine Links gekauft und keine automatisierten Veröffentlichungen durchgeführt.

## 6. Search-Console-Messbasis

**Quelle:** autorisierte, ausschließlich lesende Windsor.ai-Verbindung zur Property `sc-domain:bandora-dev.de`, Suchtyp Web. Die Datenabfrage am 04.11. lieferte Leistungsdaten nur bis 01.11.; URL Inspection ist über diesen Connector nicht verfügbar.

| Zeitraum | ausgegebene Seiten | Impressionen | Klicks | Einordnung |
|---|---:|---:|---:|---|
| 14.–27.10.2026 | 39 | 371 | 2 | 14 vollständige Tage vor dem Webdesign-Release vom 28.10. |
| 28.10.–03.11.2026 | 12 | 31 | 0 | tatsächlich nur Daten bis 01.11.; nicht gleich lang und noch verzögert |

Weder `/de/leistungen/webdesign` noch `/de/leistungen/webentwicklung` erscheint im zweiten Datensatz. Für die gewünschten kommerziellen Berlin-Keywords wurden keine Impressionen ausgegeben. Das ist die nachgewiesene Ausgangslage, keine Rankingverschlechterung; der zweite Zeitraum ist unvollständig und sehr klein.

Für `gerätenachverfolgung` zeigt die Query-Dimension:

- 14.–27.10.: 15 Impressionen, Durchschnittsposition 43,0, Ziel weiterhin `/de/projekte`;
- 28.10.–01.11.: 6 Impressionen, Durchschnittsposition 34,83, Ziel weiterhin `/de/projekte`;
- 0 Klicks in beiden Zeiträumen.

Die richtige Detailseite hatte in der Seitenaggregation vor dem Zeitraum eine einzelne Impression auf Position 10. Eine stabile Top-10-Wirkung ist nicht nachgewiesen. Außerdem enthält die Query-Dimension aus Datenschutz-/Anonymisierungsgründen weniger Klickdaten als die Seitenaggregation; Query- und Seitensummen dürfen daher nicht gleichgesetzt werden.

## 7. Tests und produktive Veröffentlichung

### Entwicklungs- und Buildtests

| Prüfung | Ergebnis |
|---|---|
| TypeScript | PASS |
| ESLint | PASS |
| Vitest | PASS – 64/64 |
| Production Build | PASS |
| Prerendering | PASS – 78 Routen |
| SEO-Build-Validator | PASS – 78/78 |
| Produktionsabhängigkeiten | PASS – 0 bekannte Vulnerabilities |
| Container-Smoke | PASS – Routing, echte 404, Alias-301, PHP, Kontakt-Schutz und Mail-Fallback |
| Mobile DE/AR | PASS – 390 px, `scrollWidth === innerWidth`, H1 vollständig im Viewport |
| Arabisch | PASS – `lang=ar`, `dir=rtl` |

### Deploymentverlauf

1. Commit `280cc08` wurde am 04.11. um 08:38:33 UTC erfolgreich veröffentlicht. Der anschließende Live-Audit fand, dass die neuen Alias-Redirects wegen der internen Proxy-Verbindung ein korrektes Pfadziel mit `http://` erzeugten.
2. Commit `8460db0` korrigierte ausschließlich diese Ziele auf absolute HTTPS-URLs.
3. Ein erster Korrekturversuch stoppte an einem bereits vorhandenen, von Docker gekürzten Rollback-Containernamen. Der Runner stellte den gesunden Stand automatisch wieder her; Journal `bandora-20261104T084301Z-8460db0`, Rollback verifiziert.
4. Der alte gestoppte Rollback-Container wurde ohne Löschen eindeutig umbenannt. Image und Wiederherstellbarkeit blieben erhalten.
5. Der finale kontrollierte Cutover `bandora-20261104T084441Z-8460db0-final` war erfolgreich. Traefik war nach 5,979 Sekunden erstmals und nach 6,917 Sekunden zum zweiten Mal vollständig bestätigt. Es trat ein interner Timeout bei der ersten Beobachtung, aber keine öffentliche 404-Antwort auf.

### Live-Ergebnis

| Prüfung | Ergebnis |
|---|---|
| produktiver Commit/Image-Digest | `8460db0` / `sha256:4fc9…1aa53` |
| Container | healthy, RestartCount 0 |
| Root | direkter HTTPS 301 auf `/de/` |
| Sitemap | 78/78 HTTP 200 und technisch indexierbar |
| Canonicals | 78/78 korrekt |
| hreflang | 0 Fehler |
| strukturierte Daten und interne Links | PASS |
| unbekannte Top-Level-Pfade | 4/4 HTTP 404 |
| kanonische Alias-Redirects | 5/5 direkte HTTPS-301 |
| historische Weiterleitungen | 144/144 direkte 301, Query-Erhalt |
| `al-badawi.de` | Root und unbekannter Privatpfad 404 |
| Kontakt | Konfiguration 200, GET 405, ungültig 400, Honeypot 200, Rate-Limit aktiv |
| öffentliche Antwortzeit-Stichprobe | 0,115–0,130 Sekunden |

Rollback bleibt verfügbar:

- unmittelbarer Vorgänger `portfolio-blog:280cc08-rc`, Digest `sha256:fe96607d…887f2`;
- vorheriger Stand `portfolio-blog:93807d0-rc`, Digest `sha256:30dba11b…d02fd`.

## 8. Blockaden, plausible Ursachen und Messplan

### Weiterhin blockiert

- aktuelle Liste der in GSC sichtbaren vier Canonical-Abweichungen und aktuelle Google-Canonicals: URL Inspection nicht über den Connector verfügbar;
- Cloudflare Security Events/WAF-Regel-Matches: kein zuverlässig automatisierbarer UI-/API-Zugriff in dieser Sitzung;
- vollständige Backlinkdaten: kein ausreichender Ahrefs- oder alternativer Backlink-Datenzugang;
- BFE-/Quattro-Fallstudien: keine belegte Freigabe und Projektdokumentation.

### Plausible, aber noch nicht bewiesene Sichtbarkeitsursachen

- junge Domain und noch laufende Verarbeitung der Domainmigration;
- geringe externe Autorität und keine belegten lokalen Kundenfallstudien;
- sehr kleine GSC-Stichprobe und Datenverzögerung;
- bislang geringe beziehungsweise keine Impressionen für kommerzielle Berlin-Queries;
- vor diesem Release zu wenig konkrete Angebots-, FAQ- und Proof-Informationen auf den beiden Money Pages.

### Erfolgsmessung

Messbeginn ist 04.11.2026, 09:45 CET. Kontrollpunkte:

- **T+7:** 11.11.2026 – erster Crawl-/Impressionscheck;
- **T+14:** 18.11.2026 – erste vergleichbare Zwischenbewertung und bestehende 28-Tage-Experimentauswertung;
- **T+28:** 02.12.2026 – Hauptauswertung.

Je Zielseite und Query werden Deutschland, Websuche, Impressionen, Klicks, CTR, Durchschnittsposition, ausgewählte Ziel-URL und erster Google-Crawl nach Release getrennt erfasst. Markenqueries bleiben separat. Vor einem bestätigten neuen Crawl und ausreichender Datenmenge wird keine Wirkung diesem Release zugerechnet.

## Quellen

- [Google: Domainumzug mit URL-Änderungen](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)
- [Google: Duplicate URLs und Canonicals konsolidieren](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google: Canonical-Probleme untersuchen](https://developers.google.com/search/docs/crawling-indexing/canonicalization-troubleshooting)
- [Google: Redirects und Search](https://developers.google.com/search/docs/crawling-indexing/301-redirects)
- [Google: hreflang und lokalisierte Versionen](https://developers.google.com/search/docs/specialty/international/localized-versions)

