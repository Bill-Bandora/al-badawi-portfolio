# SEO-Domain-Split: al-badawi.de und bandora-dev.de

Stand: 2026-10-08

## Zielbild

- `bandora-dev.de` ist die kanonische Domain des öffentlichen Bandora-Development-Portfolios.
- `al-badawi.de` bleibt eine eigenständige Domain für künftige private Inhalte.
- Es gibt ausdrücklich keine globale Domainweiterleitung und keine Catch-all-Regel.
- Ausschließlich die in [OLD-PORTFOLIO-REDIRECTS.md](./OLD-PORTFOLIO-REDIRECTS.md) dokumentierten historischen Portfolio-URLs werden mit einer permanenten HTTP-Weiterleitung (301 oder 308) auf denselben Pfad unter `bandora-dev.de` weitergeleitet.

## Herkunft der Allowlist

Die unmittelbar vor dem Domainwechsel erzeugte Sitemap und die aktuelle Sitemap enthalten dieselben 72 Pfade. Der Migrations-Commit änderte den Hostnamen von `al-badawi.de` auf `bandora-dev.de`, nicht die Route-Struktur. Diese 72 Pfade bilden daher die belastbare historische URL-Menge. Die www-Variante war ebenfalls erreichbar und ist pro Pfad separat berücksichtigt: 72 Pfade × 2 Hosts = 144 Quell-URLs.

Die maschinenlesbare Pfadliste liegt unter [deployment/legacy-portfolio-paths.txt](./deployment/legacy-portfolio-paths.txt).

## Technische Umsetzung

Die selektiven Redirects laufen im bereits vorhandenen Traefik-Reverse-Proxy. Drei hoch priorisierte Router decken die Sprachzweige `/de/`, `/en/` und `/ar/` mit exakt aufgezählten Pfaden ab. Eine gemeinsame RedirectRegex-Middleware setzt den Zielhost auf `bandora-dev.de` und behält den Pfad bei.

Die Regeln werden in den Coolify-Anwendungslabels dauerhaft gespeichert und zusätzlich am laufenden Container aktiviert. So bleiben sie bei einem späteren Coolify-Redeploy erhalten. Es wird keine neue Infrastruktur eingeführt.

## Bewusst nicht weitergeleitet

Folgende Beispiele müssen auf `al-badawi.de` und der www-Variante ohne `Location`-Header als 404 verbleiben, bis dort eigenständige Inhalte entstehen:

- `/`
- `/test-private`
- `/persoenlich`
- `/notizen`

Damit können auf der privaten Domain künftig neue Inhalte angelegt werden, ohne von der Portfolio-Migration erfasst zu werden.

## Kanonische SEO-Signale auf bandora-dev.de

Die Portfolio-Anwendung verwendet ausschließlich `https://bandora-dev.de` für:

- Canonical-Links
- hreflang-Links
- Open-Graph-URLs
- strukturierte Daten und Breadcrumbs
- interne Links
- Sitemap-URLs
- robots.txt-Sitemap-Verweis

Die Sitemap enthält weiterhin genau 72 kanonische URLs. Die Migration fügt keine neuen Inhaltsseiten hinzu und verändert weder Design noch Texte.

## Betrieb und Rollback

Die Redirect-Regeln tragen den Namenspräfix `portfolio-legacy-`. Ein Rollback besteht darin, ausschließlich diese Router- und Middleware-Labels aus Coolify und dem laufenden Container zu entfernen. Die eigentliche Portfolio-Anwendung sowie die unabhängige Domain bleiben davon unberührt.

## Abnahme vom 2026-10-08

- 144/144 historische Quell-URLs liefern permanent HTTP 308 und direkt das exakte Ziel auf `bandora-dev.de`.
- 72/72 Ziel-URLs liefern HTTP 200.
- Es gibt keine mehrstufige Redirect-Kette.
- Apex- und www-Root sowie die Testpfade `/test-private`, `/persoenlich` und `/notizen` liefern 404 ohne Weiterleitung.
- 72/72 Seiten verwenden den korrekten Canonical und Open-Graph-URL; alle vorhandenen hreflang-Links zeigen ausschließlich auf `bandora-dev.de`.
- Sitemap und robots.txt sind erreichbar und nennen ausschließlich die neue Portfolio-Domain.
- Der veröffentlichte HTML-Code der 72 Seiten enthält keine URL der alten Domain; damit sind auch strukturierte Daten, Breadcrumbs und interne Links frei von alten Domainreferenzen.
- Cloudflare Tunnel und der Anwendungscontainer sind aktiv; die TLS-Prüfung aller HTTPS-Testaufrufe war erfolgreich.
- Die bisherige Container-Version bleibt gestoppt als Rollback-Kopie erhalten.

