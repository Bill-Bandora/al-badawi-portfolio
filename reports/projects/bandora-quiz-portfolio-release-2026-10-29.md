# Bandora Quiz – Portfolio-Integration und Produktionsrelease

**Abschlussstatus:** erfolgreich  
**Produktivdomain:** `https://bandora-dev.de`  
**Deployment-ID:** `bandora-20261029T101306Z-29ebbd1`  
**Produktiver Commit:** `29ebbd17eed14ac30d74cb15dc699aeee2eadd75`

## Ergebnis

Bandora Quiz ist als eigenständiges Projekt in der Projektübersicht und auf einer vollständigen Detailseite in Deutsch, Englisch und Arabisch veröffentlicht. Die Quiz-App selbst, ihre Datenbank, Review-Konten und die App-Store-Einreichung wurden durch diesen Release nicht verändert.

Öffentliche Seiten:

- Übersicht: `https://bandora-dev.de/de/projekte`
- Deutsch: `https://bandora-dev.de/de/projekte/bandora-quiz`
- Englisch: `https://bandora-dev.de/en/projects/bandora-quiz`
- Arabisch: `https://bandora-dev.de/ar/projects/bandora-quiz`
- Web-App-Ziel: `https://quiz.bandora-dev.de/`

## Inhalt und Darstellung

- neue, prominent einsortierte Projektkarte ohne Duplikat;
- vollständige Detailseite mit Problem, Lösung, Funktionen, Architektur, Verantwortungsbereichen, Technologien und Entwicklungsstatus;
- natürliche DE-/EN-/AR-Fassungen; die englische und arabische Seite machen ausdrücklich kenntlich, dass App und Fragen derzeit deutschsprachig sind;
- lokalisierter primärer Button zur produktiven Web-App;
- zentral pflegbare Release-Metadaten für Version, Build, Prüfstatus und einen später optional ergänzbaren App-Store-Link;
- kein App-Store-Badge und keine Behauptung einer öffentlichen App-Store-Verfügbarkeit;
- Bezug zur Leistung App-Entwicklung und passende verwandte Projekte;
- responsive Bildquellen und `object-fit: contain`, damit das quadratische Icon weder beschnitten noch verzerrt wird.

## Verifiziertes Original-Icon

Quelle: `/home/billbandora/projects/bandora-quiz/assets/app-icon-1024.png`

Der SHA-256-Wert der Quelldatei und der tatsächlich im iOS-Asset-Katalog eingebundenen Datei `ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png` ist identisch:

`3f9cf624190ba1645c7840fcb4a7872bb52e9953a9309abdc44a91bbab29d82f`

Portfolio-Artefakte:

| Datei | Zweck | SHA-256 |
|---|---|---|
| `bandora-quiz-icon-1024.png` | unverändertes Original | `3f9cf624190ba1645c7840fcb4a7872bb52e9953a9309abdc44a91bbab29d82f` |
| `bandora-quiz-icon-640.webp` | responsive Web-Variante | `fa2223a25c1d7412baf73126d331c075dba2cfa22ec26714fb3ddebafbf3939d` |
| `bandora-quiz-icon-320.webp` | responsive Web-Variante | `ddf55a2c7db80642e8273f07a0f47831bef4472c35fa0d7da1b7585eaa1089b7` |

Die produktiv ausgelieferte 1024-PNG wurde erneut heruntergeladen und besitzt ebenfalls exakt den Original-Hash.

## App-Store-Status

Die vorhandene Quiz-Dokumentation bestätigt:

- Version `1.0`;
- Build `10`;
- Einreichung zur App-Prüfung am 29. Oktober 2026 um 07:40:24 UTC;
- dokumentierter Apple-Status `WAITING_FOR_REVIEW`;
- manuelle Veröffentlichung.

Die Portfolio-Seite formuliert deshalb nur, dass Build 10 eingereicht wurde und auf Apples Prüfung wartet.

## Lokale Qualitätssicherung

| Prüfung | Ergebnis |
|---|---|
| TypeScript | PASS |
| ESLint | PASS |
| Vitest | PASS – 63/63 |
| Production Build | PASS |
| Prerendering | PASS – 78 Routen |
| SEO-Build-Validator | PASS – 78/78 Titel, Beschreibungen, Canonicals, H1, Hauptinhalt, Schema, interne Links und reziprokes hreflang |
| Desktop-Preview | PASS – 1440 px, vollständiges Icon |
| Mobile-Preview | PASS – 390 px ohne horizontalen Dokumentüberlauf |
| Arabisch/RTL | PASS – `lang=ar`, `dir=rtl`, 390 px ohne Überlauf |
| Produktionsabhängigkeiten | PASS – `npm audit --omit=dev`: 0 bekannte Vulnerabilities |

Die vollständige Entwicklungsabhängigkeitsprüfung meldet 14 Hinweise in Build-/Testwerkzeugen. Diese Pakete werden nicht in das statisch ausgelieferte Frontend übernommen; wegen des begrenzten Projektauftrags wurden keine zusätzlichen Dependency-Upgrades vorgenommen.

## Deployment

| Feld | Wert |
|---|---|
| Git-Commit | `29ebbd17eed14ac30d74cb15dc699aeee2eadd75` |
| Image | `portfolio-blog:29ebbd1-rc` |
| Image-Digest | `sha256:8146b32adeba90eccf3de84694ae174958750cb98b223daf0ad8c7b52a261dec` |
| produktiver Container | `e11856fb86c91594e14f0b79cbb0b3eda185a118445132bcafc2225ea9a875d3` |
| Deploymentstart | 29.10.2026, 10:13:07 UTC / 11:13:07 CET |
| Deploymentabschluss | 29.10.2026, 10:13:38 UTC / 11:13:38 CET |
| stabile Traefik-Umschaltung | 7,267 Sekunden |
| vorübergehende HTTP-404 | 0 |
| Rollback-Image | `portfolio-blog:1ffc218-rc` |
| Rollback-Digest | `sha256:7233b56e0ed6f7f8b222774b7fc13e5621da69fa783ec3d988f811e0e2e18601` |
| Rollback-Container | `7c5ca2250db3b52ce6f0d7e6297c02c6b74a7982b59c189c3559a299432e84f6` |

Der Git-Push löste kein automatisches Deployment aus. Der serverseitige Dry-Run meldete `mutations: 0`, ein freies Lock, exakte Digests, einen gesunden Ausgangscontainer und keine Konfigurationsabweichung. Der Release-Runner übernahm Labels, Umgebungsvariablen, Healthcheck, Netzwerk, Volumes und Restart-Policy unverändert. Der alte Container wurde gestoppt, aber nicht gelöscht.

Beim ersten internen Traefik-Test nach dem Cutover trat ein Read-Timeout auf. Die öffentlichen HTTPS-Routen waren bereits erreichbar. Nach 6,132 Sekunden bestand die komplette Matrix erstmals und nach 7,267 Sekunden zum zweiten Mal; damit war die stabile Umschaltung bestätigt.

## Produktive Live-Abnahme

| Prüfung | Ergebnis |
|---|---|
| HTTPS-Root | PASS – direkte 301 auf `https://bandora-dev.de/de/` |
| Sitemap | PASS – 78/78 URLs HTTP 200 |
| technische Indexierbarkeit | PASS – 78/78 |
| Canonicals | PASS – 78/78 selbstreferenziell |
| hreflang | PASS – 0 fehlerhafte oder nicht reziproke Verweise |
| strukturierte Daten | PASS – parsebar auf 78/78 Seiten |
| interne Links | PASS |
| historische Weiterleitungen | PASS – 144/144, inklusive Query-Parameter |
| `al-badawi.de` eigenständig | PASS – Root und unbekannter Privatpfad bleiben 404 |
| neue Detailseiten | PASS – DE/EN/AR jeweils HTTP 200 und vollständig prerendered |
| Mobile/RTL | PASS – 390 px, kein horizontaler Dokumentüberlauf |
| Original-Icon | PASS – produktiver Hash identisch, `object-fit: contain` |
| Browser-CTA | PASS – lokalisiert und Ziel `https://quiz.bandora-dev.de/` HTTP 200 |
| App-Store-Kommunikation | PASS – Build 10 vorhanden, kein App-Store-Link oder Badge |
| Kontaktkonfiguration | PASS – HTTP 200 |
| Kontakt-API | PASS – GET 405, ungültiges JSON 400, Honeypot 200 ohne Mailversand |
| Container | PASS – `running`, `healthy`, RestartCount 0 nach Stabilitätsbeobachtung |

Repräsentative öffentliche Antwortzeiten lagen in der Stichprobe zwischen 137 und 159 ms für Root, Übersichten, neue Projektseiten und Quiz-Web-App. Es wurde keine kritische Funktions- oder Performance-Regression festgestellt.

## Abgrenzung zur Quiz-Anwendung

Dieser Portfolio-Release hat keine Datei, Datenbank, Review-Konfiguration oder Apple-Einreichung im Quiz-Projekt verändert und keinen Quiz-Deploymentbefehl ausgeführt.

Während der vorbereitenden Arbeiten wurde unabhängig von diesem Portfolio-Release um 10:07:51 UTC ein bereits vorhandener separater Quiz-Commit `5579a6b` (`fix: harden public legal page delivery`) durch den dortigen Compose-Prozess aktiviert. Dieses Ereignis lag vor dem Portfolio-Release um 10:13:07 UTC und betraf nur öffentliche Rechtstexte sowie deren Tests. Der Quiz-Git-Stand blieb während des Portfolio-Cutovers auf `5579a6b`; Icon, Build-10-Dokumentation und `WAITING_FOR_REVIEW`-Nachweis blieben unverändert. Der Quiz-Container ist gesund und hat `RestartCount=0`.

## Nachweis

- Deploymentjournal: `/var/lib/bandora-deployments/bandora-20261029T101306Z-29ebbd1.jsonl`
- Zustandsdatei: `/var/lib/bandora-deployments/bandora-20261029T101306Z-29ebbd1.state.json`
- Runner: `/opt/bandora-release/3f5ca01-cutover-v2/release_runner.py`
