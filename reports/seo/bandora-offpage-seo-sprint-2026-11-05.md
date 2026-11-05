# Bandora Development – Offpage-SEO, Autoritätsaufbau und kommerzielle Suchsichtbarkeit

Stand: 05.11.2026

Domain: https://bandora-dev.de

Zielmarkt: Berlin

Repository-Basis zu Sprintbeginn: `98bb8db50e0280c71d8c731a533109b58d463bd6`

Produktiver Code-Stand zu Sprintbeginn: `59c9ffd6` / Image `portfolio-blog:59c9ffd-rc`
Vom Auftrag genannter ältere Bezugspunkt: `8460db00a66acd3b00d02c7d04e4b8915be629f4`

## Kurzfazit

Die technische SEO-Basis und die Leistungsseiten sind vorhanden. Das zentrale Defizit liegt tatsächlich außerhalb der Website: Bandora besitzt kaum überprüfbare externe Unternehmensnennungen und noch weniger technisch bestätigte Links zur Hauptdomain. Das Portfolio zeigt überwiegend eigene Softwareprodukte. Für BFE Berlin und Quattro Zulassungsdienst liegt im Repository weder ein belastbarer Leistungsnachweis noch eine Veröffentlichungsfreigabe vor; beide wurden deshalb nicht als Kundenreferenz veröffentlicht.

Um keine fiktive Autorität zu erzeugen, konzentriert sich dieser Sprint auf vier belastbare Ergebnisse:

1. eine technisch und redaktionell erweiterte Eigenprojekt-Fallstudie zur Geräte-Nachverfolgung;
2. verifizierte, priorisierte Profile und Linkmöglichkeiten statt unkontrollierter Verzeichniseinträge;
3. veröffentlichungsfertige, aber freigabegeschützte Profil- und Kundenanfrageentwürfe;
4. eine reale GSC-Baseline und reproduzierbare Kontrolltermine.

## 1. Bestand und Schutz vorhandener Arbeit

- Aktiver Branch zu Sprintbeginn: `codex/seo-audit-ranking-2026-10-22`.
- `origin/main` und HEAD standen auf `98bb8db50e0280c71d8c731a533109b58d463bd6`.
- Bereits vorhandene uncommittete Release-Runner, Tests und ältere SEO-Berichte wurden nicht verändert oder in diesen Sprint aufgenommen.
- Die öffentliche Website hatte vor dem Sprint 78 in der Sitemap gemeldete URLs. Die Search-Console-Sitemap meldete 78 eingereichte URLs, 0 Fehler und 0 Warnungen; letzter gemessener Download: 29.10.2026.
- Die Root-URL `https://bandora-dev.de/` antwortete vor der Änderung direkt mit 301 auf `https://bandora-dev.de/de/`.
- `https://al-badawi.de/` bleibt eigenständig und antwortete am 05.11.2026 mit 404. Historische Portfolio-Pfade wie `/de/` und `/de/projekte/geraete-nachverfolgung` leiteten dagegen weiterhin gezielt mit 308 auf das entsprechende Ziel unter `bandora-dev.de` weiter.

## 2. Bestehende externe Unternehmensnennungen

### Bestätigt

| Quelle | Öffentliche Nennung | Technischer Befund |
| --- | --- | --- |
| Apple App Store | [Bandora Quiz](https://apps.apple.com/de/app/bandora-quiz/id6827739354) | Öffentliche Produktseite erreichbar. Im HTML sind Links zu `https://quiz.bandora-dev.de/support` und `https://quiz.bandora-dev.de/datenschutz` vorhanden. |
| GitHub | [Bill-Bandora](https://github.com/Bill-Bandora) | Öffentliches Profil mit drei Repositories. Profil-Bio und Website-Feld sind leer; kein Repository besitzt ein Homepage-Feld. Damit besteht eine Nennung, aber noch kein bestätigter Link zu `bandora-dev.de`. |

### Nicht bestätigt

Öffentliche Suchprüfungen ergaben keine eindeutig zu Bandora Development gehörende LinkedIn-Unternehmensseite, keinen Cylex-Eintrag und keinen wlw-Anbieterauftritt. Gleichnamige Treffer zu anderen Unternehmen – insbesondere der portugiesischen Bandora-Energiegruppe – wurden verworfen.

## 3. Tatsächlich bestätigte Backlinks

Der einzige in diesem Sprint technisch bestätigte externe Linkkomplex stammt von der Apple-App-Store-Seite von Bandora Quiz. Die Seite verweist auf die Support- und Datenschutzseiten der Produkt-Subdomain. Das ist ein realer externer Link zu `quiz.bandora-dev.de`, aber kein direkter Link auf die kommerzielle Hauptseite `https://bandora-dev.de/`.

Für die Hauptdomain wurde kein weiterer externer Link technisch bestätigt. Insbesondere werden keine Ahrefs-Zahlen oder Domain-Ratings genannt: Der verfügbare Ahrefs-Zugang antwortete mit **Insufficient plan**. Öffentliche Suchtreffer sind Hinweise auf Nennungen, aber kein vollständiger Backlinkindex.

Die strukturierte Evidenz steht in [offpage-link-tracking-2026-11-05.csv](./offpage-link-tracking-2026-11-05.csv).

## 4. Prüfung echter Kundenreferenzen

### BFE Berlin

Mit `https://bfe-berlin.com/` existiert eine öffentlich zugängliche Website eines Berliner Büros für Elektrotechnik. Das Repository belegt jedoch weder, dass dieses Unternehmen Auftraggeber von Bandora war, noch welche Leistung erbracht wurde oder ob Name, Logo und Screenshots freigegeben sind. Eine Verwechslung mit anderen BFE-Organisationen ist möglich.

### Quattro Zulassungsdienst Berlin

Öffentliche Verzeichnisse nennen `http://www.quattro-zulassungsdienst.de/`. Auch hier enthält das Repository keinen belastbaren Leistungsnachweis und keine Veröffentlichungsfreigabe.

### Entscheidung

- Keine Kundenfallstudie veröffentlicht.
- Keine Kundenlogos oder Erfolgszahlen verwendet.
- Keine Anfrage versendet.
- Beide Kandidaten mit konkreten Prüfschritten und einem freiwilligen Anfrageentwurf in [customer-link-request-drafts-2026-11-05.md](./customer-link-request-drafts-2026-11-05.md) dokumentiert.
- Die Geräte-Nachverfolgung wird ausdrücklich als eigenes Projekt/MVP behandelt, nicht als Kundenauftrag.

## 5. Berliner Wettbewerbs- und Backlink-Gap

Fünf für die untersuchten Suchrichtungen öffentlich sichtbare Wettbewerber wurden exemplarisch geprüft:

| Wettbewerber | Relevante Zielseite | Öffentlich beobachtbare externe Präsenz |
| --- | --- | --- |
| TBA Berlin | [Webdesign Berlin](https://www.tba-berlin.de/webdesign/berlin/) | Partner-/Standortnennung über [TBA Hamburg](https://www.tba-hamburg.de/kontakt/) |
| MEDIAFELD | [Agenturseite](https://www.mediafeld.de/) | Einträge bei [Firmania](https://firmania.de/berlin/mediafeld-kommunikation-design-2391531) und [meinestadt.de](https://branchenbuch.meinestadt.de/berlin/company/15689138) |
| Wolfgegenlicht | [Website erstellen lassen](https://www.wolfgegenlicht.de/website-erstellen-lassen/) | Profile bei [KI Integration](https://kiintegration.com/dienstleister/wolfgang-stefani/) und [Die Besten der Stadt](https://www.diebestenderstadt.de/berlin/wolfgegenlicht--wolfgang-stefani--webdesign-berlin-b00dl0webbj9) |
| HomepageHandmade | [Webdesign Berlin](https://homepagehandmade.de/webdesign-berlin/) | Einträge bei [Cylex](https://web2.cylex.de/firma-home/homepagehandmade-15589283.html), [Wegweiser Aktuell](https://www.wegweiser-aktuell.de/berlin/firma/185440_homepagehandmade.htm) und [Behance](https://www.behance.net/tobiasfabian1) |
| Checkpoint-E | [Webanwendungen](https://checkpoint-e.de/webseiten/webanwendungen/) | Thematisch klar positionierte Fach- und Leistungsseite; im begrenzten öffentlichen Audit kein belastbarer externer Profillink bestätigt |

Das wiederkehrende Muster ist nicht ein einzelner „starker Backlink“, sondern ein konsistentes öffentliches Unternehmensprofil über seriöse Branchen-, Portfolio- und lokale Quellen. Genau diese Basis fehlt Bandora derzeit.

## 6. Priorisierte qualifizierte Linkmöglichkeiten

| Priorität | Quelle | Nutzen | Kosten / Voraussetzung | Status |
| ---: | --- | --- | --- | --- |
| 1 | [GitHub](https://github.com/Bill-Bandora) | Authentischer technischer Absender und direkter Website-Link | kostenlos; autorisierter Zugang | vorbereitet, BLOCKED |
| 2 | [LinkedIn Unternehmensseite](https://www.linkedin.com/help/linkedin/answer/a543852/creating-a-linkedin-company-page) | B2B-Vertrauen, Markenentität, Mitarbeiter-/Gründerbezug | kostenlos; persönlicher Account und Vertretungsbestätigung | vorbereitet, BLOCKED |
| 3 | [wlw](https://hilfe.wlw.de/de/anbieter/kann-ich-meine-firma-auch-kostenlos-bei-wlw-eintragen) | B2B-Fokus auf individuelle Unternehmenssoftware | kostenloser Basiseintrag; Unternehmenszugang | vorbereitet, BLOCKED |
| 4 | [Malt](https://en.malt.de/freelancer) | Direkte Projektanfragen und persönlicher Kompetenznachweis | Profil kostenlos; Identitätsprüfung | vorbereitet, BLOCKED |
| 5 | [freelancermap](https://www.freelancermap.de/registrieren) | Deutschsprachiger IT-Projektmarkt | kostenloses Profil; persönliche Anmeldung | vorbereitet, BLOCKED |
| 6 | [Cylex](https://web2.cylex.de/Homepage/faq.htm) | Lokale Firmenauffindbarkeit und konsistente Stammdaten | kostenloser Eintrag; Datenschutz-/Adressprüfung | vorbereitet, BLOCKED |
| 7 | [Product Hunt](https://help.producthunt.com/en/articles/17350772-launch-guide) | Reales Softwareprodukt Bandora Quiz statt allgemeiner Firmeneintrag | kostenlos; authentischer Maker-Launch | vorbereitet, BLOCKED |
| 8 | [Clutch](https://help.clutch.co/en/knowledge/get-listed-on-clutch) | Internationaler Dienstleisterkontext | Basisprofil kostenlos; Link im Gratisverzeichnis nicht zugesichert; Referenzen nötig | zurückgestellt |
| 9 | [GoodFirms](https://www.goodfirms.co/get-listed) | Software-/Webentwicklungsverzeichnis | kostenloser Antrag; Annahme nicht garantiert; Projektnachweise nötig | zurückgestellt |
| 10 | Apple App Store | Bestehende reale Produktnennung | bestehendes Entwicklerkonto | bereits veröffentlicht; Links nur zur Produkt-Subdomain |

Google Unternehmensprofil ist bewusst nicht in der aktiven Top-10-Liste: Nach den [Google-Berechtigungsregeln](https://support.google.com/business/answer/13763036?hl=de) sind reine Online-Unternehmen nicht berechtigt. Ein Profil ohne öffentliche Adresse wäre nur bei echtem persönlichen Kundenkontakt und plattformkonformer Service-Area-Verifizierung zulässig. Beides ist noch nicht belegt.

## 7. Unternehmensprofile

Veröffentlicht wurde in diesem Sprint kein neues Profil, weil kein autorisierter Zugang bereitstand und mehrere Plattformen persönliche Identitäts- oder Unternehmensbestätigung verlangen. Vollständige Entwürfe für LinkedIn, Cylex, wlw, Malt/freelancermap sowie die konkrete GitHub-Optimierung stehen in [company-profile-drafts-2026-11-05.md](./company-profile-drafts-2026-11-05.md).

Diese Trennung ist wichtig: Ein vorbereiteter Text ist weder eine veröffentlichte Unternehmensnennung noch ein Backlink.

## 8. Fachliche Autorität und umgesetzte Fallstudie

Die bestehende Eigenprojektseite `Geräte-Nachverfolgung` wurde substantiell erweitert. Neu dokumentiert sind:

- Trennung von Gerätestammdaten und aktuellem Standort, Status, Abteilung und Zuweisung;
- chronologische Historie statt kontextfreiem Überschreiben;
- Kommunikation zwischen React-Oberfläche und Express-REST-API über Axios;
- transaktionssichere Änderungen in MariaDB und Rollback bei Teilfehlern;
- konkrete MVP-Teststrategie für Suche, Statuswechsel, Zuweisung, Fehlerfälle und Historienkonsistenz;
- klare Abgrenzung: lokale Simulation mit erfundenen Gerätedaten, keine produktive Datenbank und keine offengelegten Kundendaten.

Vorhandene interne Links von der Projektübersicht und der Webentwicklungsseite verweisen bereits mit konkretisiertem Linktext auf die Fallstudie. Es wurden keine nicht belegten Rollenmodelle, Sicherheitsfunktionen oder Kundenresultate ergänzt.

## 9. Long-Tail-Keyword-Mapping

Die vollständige Zuordnung steht in [keyword-mapping-2026-11-05.csv](./keyword-mapping-2026-11-05.csv). Die besten inhaltlichen Fits sind:

1. **individuelle webanwendung entwickeln lassen** → `/de/leistungen/webentwicklung`
2. **webanwendung entwickeln lassen berlin** → `/de/leistungen/webentwicklung`
3. **individuelle unternehmenssoftware berlin** → `/de/leistungen/softwareentwicklung`
4. **mehrsprachige website erstellen lassen** → `/de/leistungen/webdesign`
5. **website deutsch arabisch erstellen** → `/de/leistungen/webdesign`
6. **website für kleine unternehmen berlin** → `/de/leistungen/webdesign`

Öffentliche Suchergebnisse zeigen zu mehreren Clustern spezialisierte Angebotsseiten, unter anderem [Baypass](https://baypass.net/leistungen/individuelle-webanwendungen), [Moersberger IT](https://www.moersbergerit.de/webanwendung-entwickeln-lassen/), [WSK – Kundenportal](https://wsk.gmbh/kundenportal-programmieren-lassen), [Ragana Studio – mehrsprachige Website](https://www.raganastudio.com/de/mehrsprachige-website/) und [Ichii – Webdesign Berlin](https://ichii.de/de/blog/webdesign-berlin). Das belegt aktive Suchergebnisse und Wettbewerb, aber kein Suchvolumen.

Es wurde keine neue Landingpage erzeugt. Die Suchintentionen überschneiden sich stark mit vorhandenen Leistungsseiten; ohne messbare GSC-Nachfrage und eigenständigen Projektbeleg wäre eine zusätzliche Seite eher Kannibalisierung als Mehrwert.

## 10. Messbasis

Read-only über die vorhandene Search-Console-Verbindung, Property `sc-domain:bandora-dev.de`, Land Deutschland, Suchtyp Web:

| Zeitraum | Impressionen | Klicks | CTR | Ø Position |
| --- | ---: | ---: | ---: | ---: |
| 22.10.–04.11.2026 | 100 | 0 | 0 % | 10,93 |

Für `gerätenachverfolgung` wurden 15 Impressionen, 0 Klicks und eine durchschnittliche Position von 34,0 gemessen. Google zeigte dabei ausschließlich die Projektübersicht `/de/projekte`, nicht die gewünschte Detailseite. Das ist der Ausgangswert vor dieser Fallstudienerweiterung.

Die abgefragten kommerziellen Long-Tails erschienen in den verfügbaren Query-Zeilen nicht. Das ist wegen geringer Datenmenge und Datenschutzschwellen kein Beweis für ein Suchvolumen von null. Die Rohzusammenfassung steht in [gsc-offpage-baseline-2026-11-05.csv](./gsc-offpage-baseline-2026-11-05.csv).

### Klassifizierung

- Kommerziell: die Long-Tails aus dem Keyword-Mapping; derzeit keine gemeldeten Query-Zeilen.
- Informationell: bestehende Ratgeber-Queries und Blog-Zielseiten, soweit von GSC gemeldet.
- Marke: insbesondere `bandora`; manuell als Markenquery klassifiziert. Die Connector-Kennzeichnung „nonbranded“ wird dafür nicht ungeprüft übernommen.

### Kontrolltermine

- 11.11.2026: technische Indexierungs- und erste Query-Prüfung; noch keine belastbare Wirkungsbehauptung.
- 18.11.2026: zweiter Vergleich mit URL-Auswahl und neuen Long-Tails.
- 02.12.2026: Hauptvergleich über mehrere Wochen; externe Links nur zählen, wenn sie veröffentlicht und technisch bestätigt sind.

## 11. Veröffentlichungs- und Prüfstatus

### Produktiver Release

| Merkmal | Verifizierter Wert |
| --- | --- |
| Produktiver Commit | `054cb8c5adbe34be419bbd1afb7d48a1890bf58b` |
| Branch | `main` |
| Docker-Image | `portfolio-blog:054cb8c-rc` |
| Image-Digest | `sha256:d49eca82cb3e9ac1731e1e08bb89ab08d1f7ab07c74650f2b563a749a58001eb` |
| Container-ID | `90a104dca1bb7ba2b53d0d0947d71ed75584f84d932ebee92cb57b780f8da269` |
| Container gestartet | 05.11.2026, 14:07:24 Uhr MEZ |
| Release abgeschlossen | 05.11.2026, 14:07:46 Uhr MEZ |
| Deployment-Journal | `/var/lib/bandora-deployments/bandora-20261105T130700Z-054cb8c.jsonl` |

Der Push auf `origin/main` löste kein zusätzliches automatisches Deployment aus. Der kontrollierte Release-Runner wurde nach bestandenem Dry-Run genau einmal ausgeführt. Er übernahm die bestehende Produktionskonfiguration ohne Abweichung und bestätigte das Routing nach 6,909 Sekunden mit zwei aufeinanderfolgenden erfolgreichen Prüfungen. Es trat keine öffentliche 404-Antwort auf; die erste interne Traefik-Prüfung lief in ein Timeout und war bei der folgenden Prüfung erreichbar.

Die vorherige Version bleibt als gestoppter Rollback-Container `vsbzm6hi85elyqonjswadd9f-190325106707-rollback-bandora-20261105` mit dem Image `portfolio-blog:59c9ffd-rc` und dem Digest `sha256:03dd139d7769dd13db942385c9fe6c408fb63ff5404e209767e0861221c5dbb9` verfügbar.

### Lokale Release-Prüfung

- TypeScript: bestanden (`npm run typecheck`).
- ESLint: bestanden (`npm run lint`).
- Vollständige Testsuite: 64/64 Tests bestanden.
- Produktionsbuild: bestanden; 78 Routen prerendered.
- SEO-Buildvalidierung: 78/78 URLs mit gültigen Titles, Descriptions, Canonicals, H1, Hauptinhalt, strukturierten Daten, internen Links und reziproken hreflang-Verweisen.
- Dependency-Audit: 0 bekannte Production-Vulnerabilities (`npm audit --omit=dev`).
- Mobile Sichtprüfung bei 390 × 844: keine horizontale Überbreite; alle vier Fallstudienkarten innerhalb des Viewports.
- Arabische Sichtprüfung: `lang="ar"`, `dir="rtl"`, Fallstudie vorhanden, keine horizontale Überbreite.

### Produktive Live-Prüfung

- Root-Weiterleitung: `https://bandora-dev.de/` antwortet direkt mit HTTP 301 auf `https://bandora-dev.de/de/`; kein zusätzlicher HTTP-Zwischenschritt und keine Schleife.
- Sitemap und Seiten: 78/78 Sitemap-URLs erreichbar und technisch indexierbar.
- Canonicals: 78/78 korrekt.
- hreflang: 0 fehlerhafte oder nicht reziproke Verweise.
- Historische Weiterleitungen: 144/144 bestanden.
- Vorgerenderter Hauptinhalt, JSON-LD und interne Links: auf allen 78 Seiten bestanden.
- Sprachvarianten: deutsche, englische und arabische Fallstudie produktiv vorhanden; HTML-Metadaten `de/ltr`, `en/ltr` und `ar/rtl` korrekt.
- Kontakt: Konfiguration meldet den vorgesehenen `mailto`-Fallback; GET wird mit 405, ungültiges JSON mit 400, Honeypot ohne Mailversand mit 200 und ein zu schneller Submit mit 429 behandelt. Es wurde keine Testmail versendet.
- Container: nach mehr als 180 Sekunden weiterhin `running`, `healthy`, 0 Neustarts und exakt der freigegebene Digest.
- Repräsentative Performance-Prüfung: 18 HTTPS-Aufrufe auf Start-, Leistungs-, Projekt-, Blog- und Sprachseiten antworteten sämtlich mit HTTP 200; Gesamtzeit 0,090–0,247 Sekunden, im Mittel rund 0,112 Sekunden. Keine kritische Regression festgestellt.
- `al-badawi.de` blieb eigenständig; es wurde keine globale Weiterleitung eingerichtet.

Die in diesem Sprint umgesetzte technische Fallstudie ist damit produktiv. Eine Rankingwirkung ist unmittelbar nach dem Deployment weder messbar noch wird sie behauptet. Die unveränderte GSC-Baseline aus Abschnitt 10 bleibt die Vergleichsgrundlage für die Kontrolltermine.

## 12. Noch erforderliche Freigaben

1. Autorisierter GitHub-Zugang zum Setzen von Bio, Website und Repository-Homepage.
2. Autorisierter persönlicher LinkedIn-Zugang und Bestätigung, für Bandora Development handeln zu dürfen.
3. Autorisierte Konten für Cylex, wlw, Malt/freelancermap und gegebenenfalls Product Hunt.
4. Separate Bestätigung, ob Bandora Kunden persönlich vor Ort bedient; erst dann Google-Unternehmensprofil erneut prüfen.
5. Für BFE Berlin und Quattro: Leistungsnachweis, eindeutige Ansprechpartner, Rechte an Material sowie schriftliche Freigabe für Name, Screenshots und Link.
6. Keine Kontaktaufnahme und keine Veröffentlichung ohne diese Freigaben.

## Erfolgsdefinition

Erfolg wird nicht über die Anzahl vorbereiteter Profile behauptet. Er wird getrennt gemessen als:

- veröffentlichte Unternehmensnennung;
- tatsächlich vorhandener externer Link;
- technisch geprüfter Link und korrektes Ziel;
- neue Search-Console-Impressionen/Klicks für relevante nicht markenbezogene Queries;
- tatsächliche Veränderung von URL-Auswahl und Durchschnittsposition nach ausreichender Datenmenge.

Der Sprint garantiert weder einen Backlink durch Dritte noch ein Ranking.
