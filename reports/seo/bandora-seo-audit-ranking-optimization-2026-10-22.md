# Bandora Development – SEO-Audit und Rankingoptimierung

**Prüfdatum:** 22.10.2026

**Domain:** `https://bandora-dev.de`

**Produktiver Ausgangsstand:** Commit `3f5ca019accc71283ee563eaa40818e4729321ae`

**Status dieses Änderungspakets:** lokal umgesetzt und vollständig geprüft; zum Zeitpunkt dieses Berichts noch nicht produktiv veröffentlicht

## 1. Kurzfazit

Die technische Basis ist intakt. Der Live-Crawl vom 22.10.2026 bestätigte alle 72 Sitemap-URLs, selbstreferenzielle Canonicals, reziproke hreflang-Verweise und sämtliche 144 selektiven Migrationsweiterleitungen. `al-badawi.de` bleibt außerhalb dieser bekannten Pfade eigenständig und liefert am Root sowie für einen unbekannten Testpfad weiterhin HTTP 404.

Es wurden nur zwei kleine, nachweisbare Optimierungen vorbereitet:

1. Die deutsche Startseite ordnet **Bandora Development** klarer den Themen Softwareentwicklung, Webentwicklung und Webdesign zu.
2. Das vorhandene `Organization`-Schema wurde mit ausschließlich realen Angaben ergänzt: Kurzname `Bandora`, vorhandenes Logo, Kontakt-E-Mail, Gründer-ID und kanonisches GitHub-Profil.

Nicht umgesetzt wurden eine Berlin-Landingpage, lokale Standortbehauptungen, `ProfessionalService`-Markup oder weitere Änderungen am Freelancer-Artikel. Für einen belastbaren Berlin-Bezug fehlen derzeit öffentliche Standort-/Service-Area-Belege. Der Freelancer-Artikel ist außerdem erst seit dem 21.10.2026 Bestandteil eines kontrollierten 28-Tage-Experiments; eine erneute Änderung nach einem Tag würde die Messung entwerten.

## 2. Technische SEO und Domainmigration

### 2.1 Live-Prüfung vom 22.10.2026

| Prüfung | Ergebnis |
|---|---:|
| Root `https://bandora-dev.de/` | HTTP 301 direkt auf `https://bandora-dev.de/de/` |
| Sitemap-URLs | 72 eindeutig: DE 28, EN 22, AR 22 |
| HTTP 200 | 72/72 |
| technisch indexierbar | 72/72 |
| selbstreferenzielle Canonicals | 72/72 |
| H1 und vorgerenderter Hauptinhalt | 72/72 |
| syntaktisch gültige JSON-LD-Blöcke | 72/72 |
| hreflang-Fehler | 0 |
| arabische Seiten mit `lang="ar"` und `dir="rtl"` | 22/22 |
| selektive Alt-Domain-Weiterleitungen | 144/144 direkte HTTP-301-Ziele |
| Query-Parameter bei Alt-Domain-Weiterleitung | erhalten |
| `https://al-badawi.de/` | HTTP 404 |
| unbekannter privater Alt-Domain-Pfad | HTTP 404 |

Die permanenten 301-Ziele und die selbstreferenziellen Canonicals sind konsistente Canonical-Signale. Google empfiehlt bei Domainumzügen direkte serverseitige Permanentredirects, neue selbstreferenzielle Canonicals, aktualisierte interne Links und neue Sitemap-URLs. Genau diese technische Konstellation ist live vorhanden. Die selektiven Redirects dürfen nicht durch eine globale Weiterleitung von `al-badawi.de` ersetzt werden.

### 2.2 Gefundene technische Probleme

Es wurde **kein aktueller Live-Fehler** in Redirects, Sitemap, Canonicals oder hreflang gefunden. Das bekannte Problem liegt in Googles noch nicht sicher bestätigter Verarbeitung älterer Signale, nicht in der aktuellen technischen Auslieferung.

Google weist darauf hin, dass eine Domainmigration URL für URL verarbeitet wird und bei kleinen bis mittleren Websites einige Wochen dauern kann. Deshalb wäre eine weitere Änderung an Redirects oder Canonicals derzeit kontraproduktiv.

## 3. Google Search Console: bestätigter und nicht bestätigter Stand

### 3.1 Letzter belastbarer Messstand

Die jüngsten verifizierten Search-Console-Daten stammen vom 20.10.2026:

- 46 indexierte und 29 nicht indexierte bekannte URLs;
- `/de/leistungen/webentwicklung` war noch als Duplikat nicht indexiert;
- letzter Crawl dieser Leistungsseite: 05.10.2026;
- Google-Canonical dort noch die historische `al-badawi.de`-URL;
- `/de/blogs/webdesigner-freelancer-oder-agentur` indexiert, letzter Crawl 12.10.2026, Google-Canonical korrekt selbstreferenziell;
- Root-Stand noch aus einem Crawl vor der finalen Root-Weiterleitung;
- frühere Zuwächse auf 46 indexierte URLs liegen vor dem aktuellen Experiment und sind kein Ergebnis der am 21.10. veröffentlichten Änderungen.

### 3.2 Heutige Zugriffseinschränkung

Der heutige offizielle API-Aufruf war korrekt mit `webmasters.readonly` autorisiert, wurde von Google aber mit `403 SERVICE_DISABLED` abgewiesen, weil für die Search-Console-API kein nutzbares Quotenprojekt konfiguriert ist. Die Browsersteuerung konnte die Search-Console-URL nicht mit ausreichender Sicherheit erkennen und wurde deshalb ohne weitere Eingabe beendet.

Damit sind für den 22.10.2026 **keine neuen Google-Indexierungs-, Canonical- oder Rankingwerte verifiziert**. Es wurden keine Indexierungsanträge, Live-Tests oder Einstellungsänderungen ausgelöst.

## 4. Markenranking

### 4.1 Diagnose

Die Startseite war technisch indexierbar und trug bereits `Bandora Development` im Title sowie als sichtbaren Eyebrow-Text. Die Hauptüberschrift „Von der Idee zur funktionierenden Software“ beschrieb die Leistung jedoch nur allgemein. Das `Organization`-Schema enthielt Name, URL, Gründer und einen GitHub-Link, aber keinen Kurznamen und kein Logo.

Eine aktuelle Web-Suchstichprobe zeigte für den unspezifischen Begriff `Bandora` überwiegend andere Entitäten, unter anderem den Orts-/Instrumentbegriff. Für `Bandora Development` wurde Bandoras Website in der Stichprobe nicht zuverlässig sichtbar. Das einzige verknüpfte externe Profil ist GitHub; dort lautet der sichtbare Profilname aktuell `BBadawi`, nicht `Bandora Development`. Dieses externe Profil wurde nur analysiert und nicht verändert.

### 4.2 Umgesetzte, sachlich begrenzte Optimierung

| Element | Vorher | Nachher |
|---|---|---|
| DE-Title | `Bandora Development | Apps, Webanwendungen und MVPs` | `Bandora Development | Software- und Webentwicklung` |
| DE-H1 | `Von der Idee zur funktionierenden Software.` | `Softwareentwicklung von der Idee bis zum funktionierenden Produkt.` |
| DE-Hero | Apps, Webanwendungen und MVPs | Webdesign, Webentwicklung, mobile Apps, APIs und testbare MVPs |
| `Organization.alternateName` | nicht vorhanden | `Bandora` |
| `Organization.logo` | nicht vorhanden | bestehendes Bandora-Logo unter der Produktivdomain |
| `Organization.email` | nicht vorhanden | vorhandene Kontakt-E-Mail |
| GitHub-`sameAs` | Profil-URL mit `?tab=repositories` | kanonische Profil-URL ohne Query-Parameter |

Das ergänzt keine erfundenen Unternehmensdaten. `ProfessionalService` beziehungsweise `LocalBusiness` wurde bewusst nicht ergänzt: Google empfiehlt lokale Geschäftsdaten nur, wenn eine reale lokale Präsenz zutreffend und mit Adresse beziehungsweise Kontaktangaben belegbar ist.

## 5. Webentwicklung und Webdesign in Berlin

### 5.1 Suchintention

Die aktuelle Ergebnisstichprobe für `webentwicklung berlin` und `webdesign berlin` ist überwiegend lokal-kommerziell. Erfolgreiche Seiten nennen einen realen Berliner Standort oder einen nachvollziehbaren lokalen Leistungsbezug und kombinieren diesen häufig mit Leistungen, Prozess, Referenzen, Preisen beziehungsweise konkreten Kontaktmöglichkeiten.

`Webentwicklung Berlin` ist stärker technisch geprägt: individuelle Webanwendungen, APIs, CMS, Portale, Wartung und technische Kompetenz. `Webdesign Berlin` ist stärker auf Unternehmenswebsite, Gestaltung, UX, Sichtbarkeit und Angebotsvergleich ausgerichtet. Für Bandora überschneiden sich beide Intents ausreichend, um zunächst **eine** leistungsstarke bestehende URL zu verwenden. Eine zweite Landingpage würde ohne getrennte Leistungsbelege eher interne Konkurrenz erzeugen.

### 5.2 Entscheidung für `/de/leistungen/webentwicklung`

Die bestehende Seite deckt Firmenwebsites, Webanwendungen, Zielgruppen, Anwendungsfälle, Prozess, Technologien, Projekte, Kontakt-CTA und thematisch passende Ratgeber bereits ab. Sie ist technisch sauber und intern verlinkt.

Es wurde heute keine Berlin-Optimierung vorgenommen, weil:

1. kein öffentlich belegter Berliner Standort beziehungsweise eine verifizierbare Service Area vorhanden ist;
2. die letzte bestätigte Google-Canonical noch aus dem Vor-Migrations-Crawl vom 05.10.2026 stammt;
3. ein Contenttest vor dem ersten bestätigten neuen Crawl Migration und Rankingänderung vermischen würde.

Nächster Entscheidungspunkt ist die erste neue URL-Inspection nach einem Crawl vom 12.10.2026 oder später. Erst wenn Google die neue Canonical übernommen hat und ein echter Berlin-Bezug belegbar ist, sollte die bestehende URL mit einem präzisen lokalen Abschnitt ergänzt werden. Eine neue Landingpage ist derzeit nicht gerechtfertigt.

## 6. Freelancer-Artikel

### 6.1 Suchintention und Bestand

Die aktuelle Ergebnisstichprobe zeigt eine klare Vergleichsintention: Nutzer erwarten eine frühe Direktantwort, Kosten-/Risikovergleich, persönliche Betreuung, Leistungsbreite, Ausfallsicherheit, Wartung, Übergabe und langfristige Zusammenarbeit.

Der bestehende Bandora-Artikel erfüllt diese Intention bereits mit:

- einer frühen Antwort „Freelancer bei klar begrenztem Projekt, Agentur bei mehreren Disziplinen oder notwendiger Ausfallsicherheit“;
- einer Vergleichstabelle;
- eigenen Abschnitten für Freelancer und Agentur;
- zehn Auswahlfragen;
- internen Links zur Webentwicklungsseite und thematischen Ratgebern;
- einer klar als Beispielrechnung gekennzeichneten Drei-Jahres-Kostenindexrechnung;
- FAQ-, Article- und Breadcrumb-Schema.

Die am 21.10.2026 veröffentlichte Kostenindexrechnung ist das laufende Experiment B. Deshalb wurde weder eine zweite, weitgehend doppelte Vergleichstabelle noch ein neuer SEO-Title veröffentlicht. Die vorhandene Baseline bleibt unverändert:

| Query | Impressionen bis 17.10. | Ø Position |
|---|---:|---:|
| `webdesigner freelancer` | 4 | 45,5 |
| `webdesign freelancer` | 7 | 65,3 |
| `freelancer webdesign` | 4 | 62,5 |
| `website erstellen lassen freelancer` | 1 | 54,0 |

Die nächste aussagekräftige Kontrolle ist am 28.10.2026, die 14-Tage-Kontrolle am 04.11.2026 und die Hauptauswertung am 18.11.2026. Werte vor dem ersten Google-Crawl nach dem 21.10.2026 dürfen nicht als Experimentwirkung gewertet werden.

## 7. Keywords und interne Links

### 7.1 Adressierte Begriffe

- Startseite: `Bandora Development`, `Bandora`, `Softwareentwicklung`, `Webentwicklung`, `Webdesign`, `mobile Apps`, `APIs`, `MVP`.
- Bestehende Leistungsseite: weiter `Webentwicklung`, Firmenwebsite, individuelle Webanwendung und Website-Projekt; Berlin-Keywords noch nicht künstlich ergänzt.
- Freelancer-Artikel: weiter `webdesigner freelancer`, `webdesign freelancer`, `freelancer webdesign`, `webdesigner freelancer oder agentur`.

### 7.2 Interne Links

Es wurden keine neuen Links erzwungen. Die Startseite verlinkt über die Hauptnavigation auf Leistungen, Projekte, Blog und Kontakt. Die Webentwicklungsseite besitzt Projektlinks, Kontakt-CTA und sechs Ratgeberlinks. Der Freelancer-Artikel enthält bereits einen kontextuellen Link auf die Webentwicklungsseite, passende Ratgeber und Projektbeispiele. Zusätzliche Links ohne neuen Nutzerwert wären kein begründeter SEO-Schritt.

## 8. Qualitätskontrolle

Nach den Änderungen wurden folgende Prüfungen ausgeführt:

| Prüfung | Ergebnis |
|---|---|
| Vitest-Gesamtsuite | 58/58 bestanden |
| neuer Marken-/Schema-Regressionstest | bestanden |
| ESLint | bestanden |
| TypeScript | bestanden |
| Produktionsbuild | bestanden |
| SSR-/Prerender-Build | 72 Routen |
| SEO-Buildvalidator | 72/72 bestanden |
| Titles, Descriptions, Canonicals, H1, Main, Schema | bestanden |
| interne Ziele und reziprokes hreflang | bestanden |
| live technische Stichprobe vor Änderung | 72/72 Seiten und 144/144 Redirects korrekt |

Die Änderung betrifft keinen Seitenaufbau, keine Navigation, kein CSS und keine Interaktionslogik. Deshalb entsteht durch dieses Paket keine neue mobile/desktop Layoutfläche. Ein vollständiges neues Lighthouse- oder WCAG-Audit wurde nicht simuliert; der bestehende Build, die UI-Tests und die unveränderte Gestaltung zeigen jedoch keine Regression.

## 9. Veröffentlichungsstatus

Das Paket ist lokal geprüft, aber in diesem Bericht noch nicht als produktiv bezeichnet. Die öffentliche Website läuft weiterhin auf Commit `3f5ca019accc71283ee563eaa40818e4729321ae` und Image `portfolio-blog:3f5ca01-rc` mit Digest `sha256:ebcf841632d742be8749b6264157b825541a4e5481108a8b36881cd858014e62`.

Vor einer Veröffentlichung muss für den neuen Commit ein reproduzierbarer Docker-Release-Candidate mit festem Digest gebaut und über den bestehenden kontrollierten Release-Runner ausgerollt werden. Der bisherige produktive Container und das Image bleiben dabei Rollback-Basis. Ein Git-Push allein darf keinen automatischen Coolify-Rollout auslösen.

## 10. Vorher-/Nachher-Bewertung und nächste Schritte

### Nachgewiesene Verbesserung

- präzisere Marken-/Leistungszuordnung auf der deutschen Startseite;
- vollständigeres und konsistenteres Organization-Markup ohne fiktive Angaben;
- kanonische externe Profil-URL;
- keine Änderung an funktionierenden Migrationselementen;
- keine Verfälschung der laufenden Freelancer-Experimentbaseline.

### Noch zu messen

1. Wird `/de/` für `Bandora Development` und `Bandora` nach dem nächsten Google-Crawl häufiger als Zielseite ausgewählt?
2. Hat Google den direkten Root-301 verarbeitet?
3. Hat Google für `/de/leistungen/webentwicklung` die neue Domain als Canonical übernommen?
4. Gibt es einen ersten verwertbaren lokalen Query-Cluster, bevor Berlin-Inhalte ergänzt werden?
5. Verbessert sich Experiment B nach dem ersten Post-Release-Crawl gegenüber der unveränderten Baseline?

### Fünf priorisierte Folgemaßnahmen

1. Search Console am 28.10.2026 ausschließlich lesend erneut prüfen; alten und neuen Crawlzeitpunkt trennen.
2. Ein eigenes Google-Cloud-Quotenprojekt für die bestehende Read-only-API-Verbindung nur nach separater Freigabe einrichten.
3. GitHub-Profilname, Beschreibung und Website-Link manuell auf Markenkonsistenz prüfen; keine automatische Drittplattformänderung.
4. Einen Berliner Ortsbezug erst mit echter, öffentlich zulässiger Service-Area-/Adress- oder Referenzsubstanz ergänzen.
5. Den Freelancer-Artikel bis zur 28-Tage-Auswertung unverändert lassen, sofern kein technischer Fehler auftritt.

## 11. Quellen

- [Google: Site Moves and Migrations](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)
- [Google: Redirects and Google Search](https://developers.google.com/search/docs/crawling-indexing/301-redirects)
- [Google: Canonical URLs konsolidieren](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google: Organization Structured Data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Google: Title Links](https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets)
- [GitHub-Profil Bill-Bandora](https://github.com/Bill-Bandora)
- aktuelle Suchintent-Stichprobe unter anderem mit DUNA Digital, Kreowsky, Manuel Langenstein, Go Innovative, Codana sowie aktuellen Freelancer-/Agentur-Vergleichsartikeln; ausgewertet am 22.10.2026.
