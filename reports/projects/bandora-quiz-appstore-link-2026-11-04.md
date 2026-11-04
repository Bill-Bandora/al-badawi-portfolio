# Bandora Quiz: App-Store-Downloadlink – Produktionsrelease

## Ergebnis

Der App-Store-Downloadlink für Bandora Quiz wurde am 04.11.2026 erfolgreich
auf `https://bandora-dev.de` veröffentlicht. Das bestehende Projekt wurde
weiterverwendet; es wurde kein zweiter Projekteindruck angelegt.

- App-Store-Downloadbutton auf der Projektkarte sowie oben und unten auf der
  Projektdetailseite.
- Lokalisierte Beschriftungen für Deutsch, Englisch und Arabisch.
- Browser-Spielzugang und vorhandenes Projektbild unverändert erhalten.
- Veröffentlichungsstatus auf kostenlos im deutschen App Store für iPhone
  aktualisiert.
- App-Store-Ziel: `https://apps.apple.com/de/app/bandora-quiz/id6827739354`.
- Die Quiz-App, ihr Fragenbestand und App Store Connect wurden nicht verändert.

## Release

| Merkmal | Wert |
| --- | --- |
| Produktiver Commit | `59c9ffd6c5de0e34b2620041946f3139cb3dce4a` |
| Docker-Image | `portfolio-blog:59c9ffd-rc` |
| Verifizierter Digest | `sha256:03dd139d7769dd13db942385c9fe6c408fb63ff5404e209767e0861221c5dbb9` |
| Deployment-ID | `bandora-20261104T193208Z-59c9ffd` |
| Deployment abgeschlossen | 04.11.2026, 20:32:40 CET |
| Produktivcontainer | `307ddcad097021ad6bd30c13d59e3d3dbdde575a64bb466963b55fb23890102f` |
| Zustand nach Beobachtung | `running`, `healthy`, 0 Neustarts |

Der Push auf `origin/main` löste kein automatisches Deployment aus. Das Image
wurde aus dem exakten Commit auf `bandora-gen8` gebaut und mit dem vorhandenen
serverseitigen Release-Runner ausgerollt. Secrets, Labels, Netzwerke,
Umgebungsvariablen, Volumes, Healthcheck und Traefik-Konfiguration blieben
unverändert.

Der Cutover begann um 20:32:25 CET und war um 20:32:40 CET abgeschlossen.
Traefik bestätigte das neue Routing nach 6,988 Sekunden in zwei aufeinander
folgenden Prüfungen. Beim ersten öffentlichen Root-Aufruf trat ein einmaliger
Read-Timeout auf; es gab keine beobachtete 404-Antwort. Die folgenden Prüfungen
lieferten den erwarteten direkten HTTP-301-Redirect und stabile HTTP-200-Ziele.

## Build- und Darstellungsprüfung

- TypeScript: bestanden.
- ESLint: bestanden.
- Vitest: 64/64 Tests bestanden.
- Production Build: bestanden, 78 Routen vorgerendert.
- SEO-Build-Validator: 78/78 Seiten bestanden.
- `npm audit --omit=dev`: 0 bekannte Schwachstellen.
- Desktopansicht der Projektübersicht visuell geprüft.
- Deutsche und arabische mobile Detailseite bei 390 Pixeln geprüft:
  kein horizontaler Überlauf, Buttons vollständig sichtbar, RTL korrekt.

## Produktive Live-Verifikation

- Root: direkter HTTP 301 nach `https://bandora-dev.de/de/`.
- Sitemap: 78/78 URLs erreichbar und technisch valide.
- Canonicals, hreflang, Hauptinhalt, Schema und interne Links: ohne Fehler.
- Projektübersicht und Bandora-Quiz-Detailseite in DE/EN/AR: jeweils HTTP 200.
- Lokalisierte App-Store-Beschriftung auf allen sechs Seiten vorhanden.
- App-Store-Ziel: HTTP 200.
- Browser-Spielzugang: HTTP 200 und weiterhin vorhanden.
- Historische Domainweiterleitungen: 144/144 direkte HTTP 301 mit korrektem
  Ziel und erhaltenem Query-Parameter.
- Kontaktkonfiguration/API-Schutz und Container-Healthcheck: bestanden.
- `al-badawi.de` bleibt eigenständig; der Root liefert weiterhin HTTP 404.

## Rollback

Die vorherige produktive Version bleibt gestoppt und wiederherstellbar:

- Container:
  `vsbzm6hi85elyqonjswadd9f-190325106707-rollback-bandora-20261104`
- Digest:
  `sha256:4fc9fb2b3f9bb54f8844ce7231c42e2a73933a15c37316d4c564eefd87e1aa53`
- Deploymentjournal:
  `/var/lib/bandora-deployments/bandora-20261104T193208Z-59c9ffd.jsonl`
