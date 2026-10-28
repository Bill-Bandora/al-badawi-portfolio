# Bandora Development – SEO-Audit, Berlin-Optimierung und Produktionsbericht

**Stichtag:** 28.10.2026

**Zielmarkt:** Berlin und Umgebung

**Primärsprache:** Deutsch

**Produktivdomain:** `https://bandora-dev.de`

**Status:** Implementierung und lokale Freigabeprüfungen abgeschlossen; Produktionsdaten werden nach dem kontrollierten Deployment ergänzt.

## 1. Management Summary

Der technische Ausgangszustand war stabil: Die bisherige Produktion lieferte 72 Sitemap-URLs, selbstreferenzielle Canonicals, reziproke hreflang-Verweise und vorgerenderten Hauptinhalt aus. Der wesentliche strategische Mangel war keine technische Blockade, sondern eine fehlende eigene Landingpage für die kommerzielle Suchintention **Webdesign Berlin**. Die bestehende Webentwicklungsseite vermischte Website-Erstellung und individuelle Anwendungsentwicklung und enthielt zu wenig regionalen Kontext.

Umgesetzt wurden deshalb eine eigenständige, dreisprachige Webdesign-Leistungsseite, eine präzisierte Webentwicklungsseite, lokale Berlin-Signale, klar getrennte interne Themencluster, passende Service-Schemata und ein reproduzierbarer Live-SEO-Auditor. Vier bestehende Website-Ratgeber verlinken nun auf die fachlich passendere Webdesign-Seite. Das laufende Freelancer-/Agentur-Experiment und das Gerätenachverfolgungs-Experiment wurden nicht inhaltlich verändert und erhielten keine neuen experimentverzerrenden Links.

Die technische Zielmenge steigt durch die neue Seite in DE/EN/AR von 72 auf **75 Sitemap-URLs**. Eine Rankingverbesserung ist damit nicht bewiesen; sie muss mit echten Google-Daten nach einem erneuten Crawl gemessen werden.

## 2. Bestand und geschützter Ausgangszustand

| Bereich | Feststellung |
|---|---|
| Repository | `C:\Users\albad\al-badawi-portfolio` |
| Framework | React, TypeScript, Vite, React Router; statisches Prerendering aller öffentlichen Routen |
| Inhalte | TypeScript-Datenmodule für Leistungen, Projekte und Blogartikel; i18next für DE/EN/AR |
| SEO | `SeoHead`, Canonicals, hreflang, JSON-LD, Sitemap-Generator, prerenderte HTML-Dateien |
| Deployment | Docker/Coolify/Traefik auf `bandora-gen8`; serverseitiger Release-Runner mit Lock, Journal, Konfigurationsvergleich und Rollback |
| Produktiver Ausgangs-Commit | `99c038d` (vor diesem Release) |
| Produktives Ausgangs-Image | `portfolio-blog:99c038d-rc` |
| Ausgangs-Digest | `sha256:f1c35d9bff72cf7a569ed44eec72345838b7881009f3898b7c4efa1fe3873011` |
| Rollback | Ausgangs-Image bleibt lokal auf `bandora-gen8` erhalten; zusätzlich `portfolio-blog:3f5ca01-rc` verfügbar |
| Aktive Experimente | Gerätenachverfolgung und Freelancer-vs.-Agentur, gestartet am 21.10.2026 |

Vorhandene, nicht eingecheckte Release-Runner- und Berichtsdateien wurden als fremder Arbeitsstand behandelt, nicht überschrieben und nicht in den Website-Commit aufgenommen. `al-badawi.de` bleibt eigenständig; die erlaubten historischen Einzelweiterleitungen werden separat geprüft.

## 3. Technischer SEO-Audit vor der Änderung

Der externe Baseline-Audit gegen die laufende Produktion ergab:

- 72/72 Sitemap-URLs erreichbar und technisch indexierbar;
- direkter HTTPS-Root-Redirect mit HTTP 301 auf `https://bandora-dev.de/de/`;
- pro Seite genau ein Canonical auf der aktuellen Domain;
- reziproke DE/EN/AR-hreflang-Verweise;
- wesentlicher Hauptinhalt, H1 und strukturierte Daten bereits im ausgelieferten HTML;
- `robots.txt` und Sitemap erreichbar;
- keine internen Sitemap-Ziele mit 4xx/5xx;
- keine globale Weiterleitung von `al-badawi.de`.

Cloudflare ersetzt öffentlich sichtbare `mailto:`-Links durch `/cdn-cgi/l/email-protection`. Diese technisch beabsichtigte E-Mail-Verschleierung ist kein interner 404-Link und wird vom neuen Audit ausdrücklich erkannt.

### Prioritätsseite Webentwicklung

`/de/leistungen/webentwicklung` war technisch vorhanden, 200, crawlbar, canonicalisiert und vorgerendert. Die Defizite lagen in der Suchintention:

- generischer Title und H1 ohne klare Berlin-Zuordnung;
- Website-Erstellung und individuelle Webanwendung nicht sauber getrennt;
- Kosten-/Umfangsfaktoren und Entscheidungshilfe fehlten;
- keine eigene Zielseite für `webdesign berlin` und `website erstellen lassen berlin`.

### Sechs priorisierte neue Ratgeber

| URL | Primäre Intention | Befund / Maßnahme |
|---|---|---|
| `/de/blogs/website-erstellen-lassen-kosten-2026` | Website-Kosten | technisch gut; Service-Link auf Webdesign präzisiert |
| `/de/blogs/webdesigner-freelancer-oder-agentur` | Anbieterwahl | technisch gut; aktives Experiment, deshalb unverändert |
| `/de/blogs/wordpress-baukasten-oder-individuelle-website` | Systemwahl | Service-Link auf Webdesign präzisiert |
| `/de/blogs/website-erstellen-lassen-ablauf` | Projektablauf | Service-Link auf Webdesign präzisiert |
| `/de/blogs/webdesign-angebote-vergleichen` | Angebotsvergleich | Service-Link auf Webdesign präzisiert |
| `/de/blogs/seo-beim-website-erstellen` | SEO bei Erstellung | verbleibt fachlich im technischen Webentwicklungscluster |

Die Artikel besitzen eindeutige URLs, Titles, Descriptions, H1-Strukturen, Canonicals und Sprachvarianten. Es wurde keine Zusammenlegung vorgenommen, weil dafür zunächst aktuelle Ranking- und Linkdaten je URL erforderlich wären.

## 4. Tatsächliche Google-Indexierung und Baseline

### Bestätigter historischer Stand

Die letzte belastbare, autorisierte GSC-Momentaufnahme vom 20.10.2026 meldete 46 indexierte und 29 nicht indexierte bekannte URLs. `/de/leistungen/webentwicklung` war damals noch als Duplikat mit einem alten `al-badawi.de`-Canonical gespeichert. Der Freelancer-Artikel war indexiert und hatte am 12.10.2026 einen selbstreferenziellen Google-Canonical. Diese Daten liegen vor dem aktuellen Release und teilweise vor den vorangegangenen SEO-Releases.

Die unveränderte Experiment-Baseline enthält 130 Property-Impressionen und 0 Klicks für den dokumentierten Zeitraum 04.–19.10.2026. Sie darf weder diesem Release noch den aktiven Experimenten als Erfolg zugerechnet werden.

### Aktueller Zugriff am 28.10.2026

**BLOCKED:** Eine neue ausschließlich lesende Search-Console-Auswertung konnte nicht zuverlässig abgeschlossen werden.

- Die vorhandene Browsersteuerung brach vor jeglicher Interaktion ab, weil die aktuelle Browser-URL nicht sicher bestimmt werden konnte.
- Die offizielle Search-Console-/URL-Inspection-API ist für das vorhandene OAuth-Setup ohne freigegebenes Google-Cloud-Quotenprojekt mit `403 SERVICE_DISABLED` blockiert.
- Es wurden keine Search-Console-Einstellungen geändert, kein Cloud-Projekt aktiviert und keine Indexierungsanträge gestellt.

Damit werden in diesem Bericht sauber getrennt:

1. **technische Indexierbarkeit:** für die lokale Release-Version vollständig geprüft;
2. **öffentliche Auffindbarkeit:** nur als unvollständige öffentliche Stichprobe einordenbar;
3. **bestätigte Google-Indexierung:** nur der oben genannte historische GSC-Stand.

## 5. Berliner Konkurrenz- und Content-Gap-Analyse

Öffentliche organische Suchstichproben wurden am 28.10.2026 für `webdesigner berlin`, `webdesign berlin`, `webentwicklung berlin` und `website erstellen lassen berlin` erhoben. Personalisierung, Standort und laufende SERP-Änderungen erlauben daraus keine dauerhafte Positionsbehauptung.

| Wettbewerber / Seite | Seitentyp und erkennbare Stärke | Gap bei Bandora vor Umsetzung |
|---|---|---|
| [webfuzzi.de](https://webfuzzi.de/webseite-erstellen-lassen/) | kommerzielle Landingpage, klarer Ablauf und Website-Erstellung | keine getrennte Website-Erstellungsseite |
| [webseiteerstellenberlin.de](https://webseiteerstellenberlin.de/) | Exact-Intent-Landingpage mit starkem Berlin-Fokus | schwache lokale Service-Zuordnung |
| [ROIWERK Berlin](https://roiwerk.com/de/start/unternehmen/berlin) | lokale Unternehmensseite, Leistungs- und Nutzenargumentation | Berlin nicht konsequent in kommerziellen Seiten |
| [Homepage Handmade](https://homepagehandmade.de/webdesign-berlin/) | eigenständige Webdesign-Berlin-Seite mit Prozess und Kontaktintention | Webdesign mit Webentwicklung vermischt |
| [Qilano](https://www.qilano.de/webdesign-berlin/) | Webdesign-Landingpage, Leistungsabgrenzung und lokale Relevanz | keine dedizierte Webdesign-URL |
| [media & it](https://www.mediaundit.de/webdesign-webentwicklung) | getrennte Darstellung von Design und Entwicklung | unklare Intent-Trennung |
| [go innovative](https://goinnovative.de/webentwicklung-berlin) | spezifische Webentwicklungsseite mit Berlin im Seitenthema | Webentwicklung zu allgemein formuliert |
| [Codana](https://www.codana.de/webentwicklung/berlin) | lokale Webentwicklungs-Landingpage und technische Leistungsbreite | lokale und technische Suchintention nicht gemeinsam abgedeckt |

Wiederkehrende SERP-Muster sind spezifische Leistungsseiten statt allgemeiner Startseiten, Berlin in Title/H1, transparenter Ablauf, Preis-/Umfangsfaktoren, Projektbelege, FAQs sowie klare Kontaktwege. Bandora hat technisch starke Projektdetails, aber noch keine verifizierte öffentliche Kundenfallstudie für eine Berliner Unternehmenswebsite und keine freigegebenen Daten zu BFE Berlin oder Quattro Zulassungsdienst im Repository.

### Priorisierte Content Gaps

1. **Hoher Nutzen, mittlerer Aufwand, niedriges Risiko:** eigene Webdesign-Berlin-Seite – umgesetzt.
2. **Hoher Nutzen, kleiner Aufwand:** lokale und fachliche Präzisierung der Webentwicklungsseite – umgesetzt.
3. **Hoher Nutzen, kleiner Aufwand:** kontextuelle interne Links zwischen Startseite, Leistungen und Ratgebern – umgesetzt.
4. **Hoher Nutzen, aber BLOCKED:** belastbare Kundenfallstudien für reale Berliner Websites; es fehlen freigegebene Fakten, Screenshots und Ergebnisse.
5. **Mittlerer Nutzen, externe Abhängigkeit:** echte Bewertungen, Google-Unternehmensprofil und Kundenlinks; nur mit nachweisbarer Berechtigung beziehungsweise Zustimmung.

## 6. Keyword-Mapping

Suchvolumen und Keyword Difficulty sind mangels freigeschalteter SEO-Datenquelle **unbekannt**. Ahrefs war mit dem vorhandenen Plan nicht abrufbar; es wurden keine Kosten ausgelöst.

| Keyword / Cluster | Intention | Zielseite | Wettbewerb | Priorität | Umsetzung |
|---|---|---|---|---|---|
| webdesign berlin; webdesigner berlin | kommerziell/lokal | `/de/leistungen/webdesign` | hoch | P1 | neue eigenständige Landingpage |
| website erstellen lassen berlin; website erstellen berlin | kommerziell/lokal | `/de/leistungen/webdesign` | hoch | P1 | Prozess, Zielgruppe und technische Basis ergänzt |
| professionelle website berlin; homepage erstellen lassen berlin | kommerziell/lokal | `/de/leistungen/webdesign` | mittel–hoch | P1 | Nutzen und responsive Umsetzung beschrieben |
| webentwicklung berlin; webentwickler berlin | kommerziell/lokal | `/de/leistungen/webentwicklung` | hoch | P1 | Title, H1, Beschreibung und Berlin-Bezug präzisiert |
| individuelle webentwicklung berlin; webanwendung entwickeln lassen | kommerziell/technisch | `/de/leistungen/webentwicklung` | mittel–hoch | P1 | Datenlogik, APIs, Rollen und Dashboards abgegrenzt |
| webagentur berlin | kommerziell/lokal | `/de/leistungen` | hoch | P2 | keine unzutreffende Agenturbehauptung; Leistungsübersicht bleibt Ziel |
| webdesign freelancer berlin | kommerziell/vergleichend | `/de/blogs/webdesigner-freelancer-oder-agentur` | mittel | P1 Experiment | laufendes Experiment unverändert |
| webdesigner freelancer oder agentur | informativ/kommerziell | derselbe Artikel | mittel | P1 Experiment | Kostenindexrechnung und Baseline geschützt |
| website erstellen lassen kosten; website erstellen kosten 2026 | informativ/kommerziell | `/de/blogs/website-erstellen-lassen-kosten-2026` | hoch | P1 | fachlicher Link zu Webdesign |
| was kostet ein webdesigner; webdesign kosten berlin | informativ/lokal | Kostenartikel → Webdesign | mittel–hoch | P1 | Intent-Kette ohne neue konkurrierende URL |
| wordpress baukasten oder individuelle website | informativ | `/de/blogs/wordpress-baukasten-oder-individuelle-website` | mittel | P1 | Webdesign als Conversion-Ziel |
| website erstellen lassen ablauf | informativ/kommerziell | `/de/blogs/website-erstellen-lassen-ablauf` | mittel | P1 | Webdesign als Conversion-Ziel |
| webdesign angebote vergleichen | informativ/kommerziell | `/de/blogs/webdesign-angebote-vergleichen` | mittel | P1 | Webdesign als Conversion-Ziel |
| seo beim website erstellen | informativ | `/de/blogs/seo-beim-website-erstellen` | mittel | P1 | technisches Cluster Webentwicklung erhalten |
| website für kleine unternehmen berlin | kommerziell/lokal | `/de/leistungen/webdesign` | mittel | P2 | Zielgruppe konkret benannt |
| webdesign für handwerker berlin | kommerziell/lokal | `/de/leistungen/webdesign` | unbekannt | P2 | kein ungestützter Branchen-Claim; später mit echter Referenz ausbauen |
| website wartung kosten | informativ | noch keine eigenständige URL | unbekannt | P3 | erst nach GSC-/SERP-Datennachweis erstellen |

## 7. Durchgeführte Änderungen

| Dateien | URLs | Problem | Lösung / erwarteter Nutzen |
|---|---|---|---|
| `src/data/services.ts` | `/de|en|ar/leistungen/webdesign` | Webdesign-Intent fehlte | vollständige, klar abgegrenzte Leistungsseite in drei Sprachen |
| `src/data/services.ts`, `src/pages/ServiceDetailPage.tsx` | `/de/leistungen/webentwicklung` | generischer Intent, wenig Berlin-Bezug | Berlin-Title/H1, technische Abgrenzung, Kostenfaktoren und Entscheidungshilfe |
| `src/pages/ServiceDetailPage.tsx` | beide Kernleistungen | schwache Querverbindung | reguläre HTML-Links zwischen Webdesign und Webentwicklung; Service-JSON-LD mit `areaServed` |
| `src/pages/HomePage.tsx` | `/de/`, `/en/`, `/ar/` | Kernleistungen nicht direkt genug verlinkt | sichtbarer, kontextueller Zweier-Cluster auf Startseite |
| vier Blog-Datenmodule, `BlogArticlePage.tsx` | Kosten, Baukasten, Ablauf, Angebote | generischer Link zur Webentwicklung | fachlich passender Link zur Webdesign-Landingpage |
| `SeoHead.tsx`, `site.ts` | global | lokale Zuordnung nicht strukturiert | Berlin als `areaServed` der Organisation, ohne erfundene Adresse |
| `de.json` | Start, Leistungen, Kontakt | lokale Positionierung zu schwach | natürliche Berlin-Zuordnung in Title, Description und sichtbaren Texten |
| `vite.config.ts`, SEO-Validator | Sitemap | neue Route und Änderungsdatum | 75 URLs und servicebezogenes `lastmod` |
| `audit-live-seo.mjs`, `package.json` | Produktion | kein einheitlicher reproduzierbarer Außencheck | Audit für Status, Canonical, hreflang, HTML, Schema, interne Links, Robots und Root-301 |
| Tests | Release | neue Intent-Trennung nicht abgesichert | zusätzliche Assertions für Webdesign und aktualisierte Webentwicklung |

### Neue und optimierte Seiten

- **Neu:** `https://bandora-dev.de/de/leistungen/webdesign`
- **Neu:** `https://bandora-dev.de/en/leistungen/webdesign`
- **Neu:** `https://bandora-dev.de/ar/leistungen/webdesign`
- **Optimiert:** `https://bandora-dev.de/de/leistungen/webentwicklung`
- **Optimiert:** Startseiten DE/EN/AR und die vier oben genannten Ratgeber-Verknüpfungen.

## 8. Projektbelege, Vertrauen und Local SEO

Die Webentwicklungsseite behält ausschließlich vorhandene reale Portfolio-Projekte als technische Belege. Die neue Webdesign-Seite zeigt bewusst keine Kundenreferenz, weil im Repository keine hinreichend verifizierte und freigegebene Webdesign-Fallstudie vorliegt.

**BLOCKED – BFE Berlin / Quattro Zulassungsdienst:** Für eine belastbare Veröffentlichung fehlen mindestens Kundenfreigabe, Ausgangssituation, tatsächlich gelieferter Umfang, Screenshots, Technologien und belegbares Ergebnis. Ohne diese Daten wurde nichts erfunden.

**Google-Unternehmensprofil:** Im Repository ist keine autorisierte Profilverwaltung dokumentiert. Eine korrekte Einrichtung setzt ein tatsächlich berechtigtes Unternehmen, eine verifizierbare reale Geschäftsadresse oder ein regelkonformes Einzugsgebiet sowie Kontoinhaber-Autorisierung voraus. Es wurde kein Profil angelegt und keine Adresse ergänzt.

Geeignete nächste Offpage-Möglichkeiten, jeweils nur nach Zustimmung:

1. echte Kunden-Projektseite mit verlinkter Entwickler-/Technikreferenz;
2. freigegebene Projektberichte zu realen öffentlichen Bandora-Projekten;
3. seriöse Berliner Unternehmens- und Branchenverzeichnisse mit konsistenten echten Firmendaten;
4. GitHub-Projektprofile mit nachvollziehbarer Verbindung zur öffentlichen Fallstudie;
5. fachliche Beiträge oder Kooperationen mit realen Berliner Partnern.

Eine öffentliche Suche nach Erwähnungen von `bandora-dev.de` und der alten Domain lieferte keine belastbare vollständige Backlink-Liste. Ahrefs antwortete mit `Insufficient plan`. Daher sind verweisende Domains, Linkverluste und Linkmetriken **BLOCKED** und wurden nicht geschätzt.

## 9. Technische Qualitätssicherung vor Deployment

| Prüfung | Ergebnis |
|---|---|
| TypeScript | PASS |
| ESLint | PASS |
| Vitest | PASS – 59/59 |
| Production Build | PASS |
| Prerendering | PASS – 75 Routen |
| SEO-Build-Validator | PASS – 75/75 Titles, Descriptions, Canonicals, H1, Main, Schema, Links, hreflang |
| Dependency-Audit | PASS – 0 bekannte Vulnerabilities |
| Release-Runner-Tests auf Linux | PASS – 33/33 |
| Mobile Layout | PASS – 320 und 390 px ohne horizontalen Dokumentüberlauf |
| Arabisch/RTL | PASS – `lang=ar`, `dir=rtl`, 320/390 px ohne Überlauf |
| Lighthouse | BLOCKED lokal – CLI nicht installiert; keine zusätzliche Abhängigkeit nur für diesen Lauf aufgenommen |
| Bundlevergleich | JS 506,94 kB / 164,72 kB gzip; keine neue Bibliothek oder Bilddatei hinzugefügt |

Die zunächst optisch abgeschnitten wirkende 390-px-Chrome-Aufnahme wurde mit dem DevTools-Protokoll überprüft. Die erste Headless-Aufnahme unterlag der Windows-Fenster-Mindestbreite. Echte emulierte Viewports bestätigten für 320 und 390 px jeweils `scrollWidth === innerWidth`; H1 und Breadcrumb liegen vollständig innerhalb des Viewports.

## 10. Produktivdeployment

Wird nach erfolgreichem kontrolliertem Rollout ergänzt:

| Feld | Wert |
|---|---|
| Deploymentstatus | PENDING |
| Produktiver Commit | PENDING |
| Docker-Image | PENDING |
| Image-Digest | PENDING |
| Deployment-Zeitpunkt | PENDING |
| Rollback-Punkt | `portfolio-blog:99c038d-rc` / `sha256:f1c35d9bff72cf7a569ed44eec72345838b7881009f3898b7c4efa1fe3873011` |
| Externe Live-Prüfung | PENDING |

## 11. Messplan

Festes Tracking-Set:

- `webdesigner berlin`
- `webdesign berlin`
- `webentwickler berlin`
- `webentwicklung berlin`
- `website erstellen lassen berlin`
- `website erstellen lassen kosten`
- `was kostet ein webdesigner`
- `webdesigner freelancer oder agentur`
- `individuelle webentwicklung berlin`
- `website für kleine unternehmen berlin`

Nach dem Deployment werden T+14 und T+28 als Vergleichsfenster berechnet. Pro Query werden Land Deutschland, Suchtyp Web, Ziel-URL, Impressionen, Klicks, CTR und durchschnittliche Position erfasst. Markenqueries werden getrennt. Eine Veränderung zählt erst nach einem nachgewiesenen Google-Crawl der betroffenen Seite; geringe Stichproben werden nicht als Trend ausgegeben.

Die aktiven Top-10-Experimente behalten ihre ursprünglichen Kontrolltermine 28.10.2026, 04.11.2026 und 18.11.2026. Dieser Release verändert ihre Baseline nicht.

## 12. Noch offene beziehungsweise blockierte Punkte

1. **Aktuelle GSC-Daten:** blockiert durch fehlendes freigegebenes API-Quotenprojekt und nicht zuverlässig verifizierbare Browser-URL.
2. **Backlinkmetriken:** Ahrefs-Plan unzureichend; keine alternative kostenpflichtige Quelle autorisiert.
3. **Kundenfallstudien:** keine hinreichend verifizierten/freigegebenen Fakten für BFE Berlin oder Quattro im Repository.
4. **Google-Unternehmensprofil:** keine dokumentierte Eigentümer-Autorisierung oder verifizierbare Profilbasis.
5. **Reale Core Web Vitals/INP:** keine freigegebenen Feldmessdaten verfügbar; technische Regression wird über Bundle, Rendering und Live-Checks kontrolliert.

## 13. Einordnung

Die Umsetzung verbessert die technische und inhaltliche Grundlage für nicht markenbezogene Berliner Suchanfragen. Sie beweist noch keine Rankingverbesserung und garantiert keine Top-10-Position. Ob Google die neue Webdesign-Seite indexiert, den geänderten Webentwicklungs-Intent verarbeitet und relevante Impressionen erzeugt, wird ausschließlich anhand späterer echter Search-Console-Daten bewertet.
