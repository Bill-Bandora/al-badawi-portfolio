# Bandora Development – Reparatur der Domainmigration

**Prüf- und Deploymentdatum:** 09.11.2026  
**Alte Domain:** `al-badawi.de` und `www.al-badawi.de`  
**Zieldomain:** `https://bandora-dev.de`  
**Status:** erfolgreich produktiv veröffentlicht und verifiziert

## 1. Ursache des Root-404

Die 404-Antwort war kein DNS-, Cloudflare- oder Zertifikatsfehler. Die produktive Traefik-Konfiguration enthielt drei Router mit exakten `PathRegexp`-Allowlisten für die Sprachbereiche `/de/`, `/en/` und `/ar/`. Diese Regeln deckten 72 historische Pfade auf Apex- und www-Host ab, also 144 Quell-URLs.

Der Root-Pfad `/` war in `OLD-PORTFOLIO-REDIRECTS.md` ausdrücklich als nicht umzuleitende URL dokumentiert und fehlte deshalb in allen drei Routern. Eine Anfrage an die alte Startseite erreichte keinen passenden Router und endete in Traefiks HTTP 404.

## 2. Sicherung und kleine Produktionsänderung

Vor der Änderung wurden der vollständige Produktionscontainerzustand, die Traefik-Labels, das `coolify`-Netzwerk, die laufenden Container und eine Root-HTTP-Antwort gesichert:

`/var/lib/bandora-deployments/al-badawi-root-redirect-20261109T110506Z-prechange`

Die neue Konfiguration liegt auf dem Server unter:

`/opt/bandora-redirects/al-badawi-root/docker-compose.yml`

Sie startet genau einen kleinen Redirect-Container:

- Container: `bandora-legacy-root-redirect`
- Image: `nginx@sha256:5616878291a2eed594aee8db4dade5878cf7edcb475e59193904b198d9b830de`
- Netzwerk: ausschließlich das bereits vorhandene externe Netzwerk `coolify`
- Routerregel: beide alten Hosts und exakt `Path(`/`)`
- Priorität: 400
- Ziel: `https://bandora-dev.de/de/`
- Redirect: permanent, live HTTP 301

Der bestehende Produktionscontainer `vsbzm6hi85elyqonjswadd9f-190325106707` blieb unverändert auf `portfolio-blog:7198dc9-rc`, healthy und ohne Neustart. Die 144 bisherigen Routerregeln wurden nicht verändert. Unbekannte und private Pfade bleiben dadurch weiterhin 404.

### Geänderte Repository-Dateien

- `deployment/al-badawi-root-redirect.compose.yml`: versionierte Root-Router-Konfiguration.
- `scripts/audit-domain-migration.mjs`: reproduzierbare Prüfung der 144 historischen Regeln und vier Root-Varianten.
- `package.json`: Befehl `npm run audit:migration`.
- `OLD-PORTFOLIO-REDIRECTS.md`: Root-Regeln und tatsächlich eingesetzter permanenter Status 301 dokumentiert.
- dieser Abschlussbericht.

## 3. Ergebnis der vier Startseiten-Weiterleitungen

| Quelle | Erste Antwort | Direktes Ziel | Weiterleitungen | Endstatus | Ziel-Canonical |
| --- | ---: | --- | ---: | ---: | --- |
| `https://al-badawi.de/` | 301 | `https://bandora-dev.de/de/` | 1 | 200 | korrekt |
| `https://www.al-badawi.de/` | 301 | `https://bandora-dev.de/de/` | 1 | 200 | korrekt |
| `http://al-badawi.de/` | 301 | `https://bandora-dev.de/de/` | 1 | 200 | korrekt |
| `http://www.al-badawi.de/` | 301 | `https://bandora-dev.de/de/` | 1 | 200 | korrekt |

Es gibt weder einen zusätzlichen HTTP-Zwischenschritt noch eine www-Umleitung, Redirect-Schleife oder abweichende Zieladresse.

## 4. Ergebnis der 144 historischen Weiterleitungen

`npm run audit:migration` liest die verbindliche Migrationsliste und prüft jede Quell-URL ohne automatisches Folgen der ersten Antwort. Anschließend werden Endstatus und Canonical des exakten Zielpfads geprüft.

- geprüft: 144/144
- bestanden: 144/144
- Status: 144 × HTTP 301
- Zielpfade: 144/144 pfadtreu auf `bandora-dev.de`
- Endstatus: 144/144 HTTP 200
- Ziel-Canonicals: 144/144 selbstreferenziell und korrekt
- Schleifen oder zusätzliche Ketten: 0

Kontrollproben für nicht freigegebene Pfade blieben unverändert:

- `https://al-badawi.de/test-private` → 404
- `https://www.al-badawi.de/notizen` → 404

## 5. Öffentliche Indexierungsdiagnose

Der vollständige Live-Audit ergab:

- Sitemap: HTTP 200, 78 eindeutige URLs
- Sitemap-Seiten: 78/78 HTTP 200
- Canonicals: 78/78 korrekt und selbstreferenziell
- hreflang: keine ungültigen oder nicht reziproken Verweise
- `robots.txt`: HTTP 200, korrekter Sitemap-Verweis
- keine websiteweite Robots-Sperre
- API-Bereich bleibt wie vorgesehen per `Disallow: /api/` ausgeschlossen
- keine `noindex`-Direktiven auf den geprüften Seiten
- Root der neuen Domain: direkter HTTP 301 nach `/de/`

### Webentwicklung und sechs SEO-Ratgeber

Alle sieben Prioritätsseiten liefern HTTP 200, stehen in der Sitemap, haben einen selbstreferenziellen Canonical, `index, follow`, keinen `X-Robots-Tag: noindex` und mindestens einen internen Link.

| Seite | Interne Linkvorkommen im prerendered HTML |
| --- | ---: |
| `/de/leistungen/webentwicklung` | 17 |
| `/de/blogs/website-erstellen-lassen-kosten-2026` | 11 |
| `/de/blogs/webdesigner-freelancer-oder-agentur` | 4 |
| `/de/blogs/wordpress-baukasten-oder-individuelle-website` | 6 |
| `/de/blogs/website-erstellen-lassen-ablauf` | 10 |
| `/de/blogs/webdesign-angebote-vergleichen` | 12 |
| `/de/blogs/seo-beim-website-erstellen` | 10 |

Damit ist für diese Seiten kein öffentlich sichtbares technisches Indexierungshindernis nachweisbar. Dies bestätigt ausdrücklich **nicht**, dass Google sie bereits indexiert hat.

### Einordnung der Search-Console-Zahlen

Die gemeldeten Kategorien – 9 gefunden, nicht indexiert; 1 gecrawlt, nicht indexiert; 3 abweichende Google-Canonicals; 7 alternative Seiten mit richtigem Canonical; 1 Weiterleitungsseite – können ohne die betroffenen Einzel-URLs nicht seriös einzelnen Ursachen zugeordnet werden.

Technisch plausible Einordnungen, aber keine bestätigten URL-Diagnosen:

- „Alternative Seite mit richtigem Canonical“ und „Seite mit Weiterleitung“ können erwartete Alias- oder Migrations-URLs beschreiben.
- Abweichende Google-Canonicals können noch ältere Migrationssignale oder inhaltlich ähnliche Sprach-/Übersichtsseiten betreffen.
- „Gefunden“ beziehungsweise „gecrawlt – nicht indexiert“ ist trotz technischer Indexierbarkeit möglich und kann von Googles Auswahl, Crawlingpriorität, Signalkonsolidierung oder Inhaltsbewertung abhängen.

Es wurden keine Google-Indexierungsstände erfunden und keine Indexierungsanträge gestellt.

## 6. Deployment- und Rollbackstatus

- Compose-Konfiguration vor Start erfolgreich validiert.
- Deployment gestartet: 09.11.2026, 12:05:44 Uhr CET.
- Redirect-Container: `running`, `healthy`, 0 Neustarts.
- Beobachtungszeit vor Abschluss: mehr als fünf Minuten.
- Produktive Website: weiterhin erreichbar und healthy.
- Produktionsabhängigkeiten: `npm audit --omit=dev` meldet 0 bekannte Schwachstellen.
- Rollback ist ohne Änderung des Hauptcontainers möglich: `docker compose ... down` entfernt ausschließlich den separaten Root-Router und stellt den gesicherten 404-Ausgangszustand wieder her.

Ein Rollback war nicht erforderlich.

## 7. Konkrete nächste Schritte

1. In der Google Search Console die betroffenen Einzel-URLs aus allen fünf Kategorien exportieren, damit jede URL gegen ihren tatsächlichen Google-Canonical und letzten Crawl geprüft werden kann.
2. Nach dem nächsten Google-Crawl kontrollieren, ob die alte Root-URL als Weiterleitung verarbeitet und `https://bandora-dev.de/de/` als Ziel übernommen wurde. Ein sinnvoller erster Termin ist nach 7–14 Tagen.
3. Die Root-Regel bei zukünftigen Traefik-/Coolify-Umbauten beibehalten; keine Domain-Wildcard ergänzen, damit private Pfade auf `al-badawi.de` unabhängig bleiben.
4. Den wiederholbaren Check `npm run audit:migration` nach Infrastrukturänderungen gemeinsam mit `npm run audit:live` ausführen.

Es wurden keine neuen Artikel, Designänderungen oder sonstigen Inhaltsänderungen vorgenommen.
