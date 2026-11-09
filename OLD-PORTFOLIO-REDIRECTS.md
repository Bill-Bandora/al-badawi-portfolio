# Reservierte alte Portfolio-URLs

Stand: 2026-11-09

Diese Liste ist die verbindliche Allowlist für die selektive Domainmigration. Sie wurde aus der letzten Portfolio-Sitemap vor dem Wechsel abgeleitet; der Migrations-Commit änderte nur den Hostnamen und nicht die Pfadstruktur. Es gibt **72 nachgewiesene Pfade**. Da sowohl die Apex-Domain als auch die historische www-Variante erreichbar waren, ergeben sich **144 reservierte historische Quell-URLs**. Seit dem 09.11.2026 kommen die beiden Root-URLs hinzu; ihre HTTP-Varianten werden ebenfalls direkt auf die deutsche Startseite umgeleitet.

## Technische Umsetzung

Die vorhandene Traefik-Instanz nutzt drei exakte, hoch priorisierte PathRegexp-Router für die Sprachzweige `/de/`, `/en/` und `/ar/`. Die Router enthalten ausschließlich die 144 unten aufgeführten historischen Pfad-URLs. Eine RedirectRegex-Middleware antwortet permanent und setzt den Zielhost auf `bandora-dev.de`, ohne den Pfad zu verändern. Diese Regeln bleiben unverändert am Coolify-Anwendungscontainer erhalten.

Ein separater Traefik-Router aus `deployment/al-badawi-root-redirect.compose.yml` erfasst ausschließlich `Path(`/`)` auf Apex- und www-Host und leitet HTTP sowie HTTPS permanent und direkt nach `https://bandora-dev.de/de/`. Es gibt weiterhin keine Domain-weite Weiterleitung und keine Pfad-Wildcard.

## Bewusst nicht umgeleitet

Diese URLs bleiben unabhängig und liefern weiterhin 404 ohne `Location`-Header:

- `https://al-badawi.de/test-private`
- `https://al-badawi.de/persoenlich`
- `https://al-badawi.de/notizen`

Neue oder private Pfade sind ebenfalls nicht von den Regeln erfasst. Die unten gelisteten historischen Pfade bleiben dagegen für das frühere Portfolio reserviert und dürfen auf `al-badawi.de` nicht wiederverwendet werden.

| Alte URL | Neue URL | Redirect-Status | Grund | Reservierter Legacy-Pfad |
|---|---|---:|---|---|
| https://al-badawi.de/ | https://bandora-dev.de/de/ | 301 | Historische Startseite der bisherigen Portfolio-Domain | ja |
| https://www.al-badawi.de/ | https://bandora-dev.de/de/ | 301 | Historische www-Variante der bisherigen Portfolio-Startseite | ja |
| https://al-badawi.de/de/ | https://bandora-dev.de/de/ | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/ | https://bandora-dev.de/de/ | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/de/leistungen | https://bandora-dev.de/de/leistungen | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/leistungen | https://bandora-dev.de/de/leistungen | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/de/projekte | https://bandora-dev.de/de/projekte | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/projekte | https://bandora-dev.de/de/projekte | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/de/blogs | https://bandora-dev.de/de/blogs | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/blogs | https://bandora-dev.de/de/blogs | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/de/ueber-mich | https://bandora-dev.de/de/ueber-mich | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/ueber-mich | https://bandora-dev.de/de/ueber-mich | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/de/kontakt | https://bandora-dev.de/de/kontakt | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/kontakt | https://bandora-dev.de/de/kontakt | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/de/impressum | https://bandora-dev.de/de/impressum | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/impressum | https://bandora-dev.de/de/impressum | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/de/datenschutz | https://bandora-dev.de/de/datenschutz | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/datenschutz | https://bandora-dev.de/de/datenschutz | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/de/projekte/bandora-org | https://bandora-dev.de/de/projekte/bandora-org | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/projekte/bandora-org | https://bandora-dev.de/de/projekte/bandora-org | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/de/projekte/buynot | https://bandora-dev.de/de/projekte/buynot | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/projekte/buynot | https://bandora-dev.de/de/projekte/buynot | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/de/projekte/geraete-nachverfolgung | https://bandora-dev.de/de/projekte/geraete-nachverfolgung | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/projekte/geraete-nachverfolgung | https://bandora-dev.de/de/projekte/geraete-nachverfolgung | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/de/projekte/roommate-plus | https://bandora-dev.de/de/projekte/roommate-plus | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/projekte/roommate-plus | https://bandora-dev.de/de/projekte/roommate-plus | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/de/projekte/bandora-gen8 | https://bandora-dev.de/de/projekte/bandora-gen8 | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/projekte/bandora-gen8 | https://bandora-dev.de/de/projekte/bandora-gen8 | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/de/projekte/digital-footprint-os | https://bandora-dev.de/de/projekte/digital-footprint-os | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/projekte/digital-footprint-os | https://bandora-dev.de/de/projekte/digital-footprint-os | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/de/projekte/bandora-mt5-trader | https://bandora-dev.de/de/projekte/bandora-mt5-trader | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/projekte/bandora-mt5-trader | https://bandora-dev.de/de/projekte/bandora-mt5-trader | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/de/projekte/bandora-crypto-scanner | https://bandora-dev.de/de/projekte/bandora-crypto-scanner | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/projekte/bandora-crypto-scanner | https://bandora-dev.de/de/projekte/bandora-crypto-scanner | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/de/projekte/bandora-studio | https://bandora-dev.de/de/projekte/bandora-studio | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/projekte/bandora-studio | https://bandora-dev.de/de/projekte/bandora-studio | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/de/blogs/website-erstellen-lassen-kosten-2026 | https://bandora-dev.de/de/blogs/website-erstellen-lassen-kosten-2026 | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/blogs/website-erstellen-lassen-kosten-2026 | https://bandora-dev.de/de/blogs/website-erstellen-lassen-kosten-2026 | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/de/blogs/webdesigner-freelancer-oder-agentur | https://bandora-dev.de/de/blogs/webdesigner-freelancer-oder-agentur | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/blogs/webdesigner-freelancer-oder-agentur | https://bandora-dev.de/de/blogs/webdesigner-freelancer-oder-agentur | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/de/blogs/wordpress-baukasten-oder-individuelle-website | https://bandora-dev.de/de/blogs/wordpress-baukasten-oder-individuelle-website | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/blogs/wordpress-baukasten-oder-individuelle-website | https://bandora-dev.de/de/blogs/wordpress-baukasten-oder-individuelle-website | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/de/blogs/website-erstellen-lassen-ablauf | https://bandora-dev.de/de/blogs/website-erstellen-lassen-ablauf | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/blogs/website-erstellen-lassen-ablauf | https://bandora-dev.de/de/blogs/website-erstellen-lassen-ablauf | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/de/blogs/webdesign-angebote-vergleichen | https://bandora-dev.de/de/blogs/webdesign-angebote-vergleichen | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/blogs/webdesign-angebote-vergleichen | https://bandora-dev.de/de/blogs/webdesign-angebote-vergleichen | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/de/blogs/seo-beim-website-erstellen | https://bandora-dev.de/de/blogs/seo-beim-website-erstellen | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/blogs/seo-beim-website-erstellen | https://bandora-dev.de/de/blogs/seo-beim-website-erstellen | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/de/blogs/warum-kleine-unternehmen-eine-website-brauchen | https://bandora-dev.de/de/blogs/warum-kleine-unternehmen-eine-website-brauchen | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/blogs/warum-kleine-unternehmen-eine-website-brauchen | https://bandora-dev.de/de/blogs/warum-kleine-unternehmen-eine-website-brauchen | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/de/leistungen/webentwicklung | https://bandora-dev.de/de/leistungen/webentwicklung | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/leistungen/webentwicklung | https://bandora-dev.de/de/leistungen/webentwicklung | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/de/leistungen/softwareentwicklung | https://bandora-dev.de/de/leistungen/softwareentwicklung | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/leistungen/softwareentwicklung | https://bandora-dev.de/de/leistungen/softwareentwicklung | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/de/leistungen/app-entwicklung | https://bandora-dev.de/de/leistungen/app-entwicklung | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/leistungen/app-entwicklung | https://bandora-dev.de/de/leistungen/app-entwicklung | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/de/leistungen/automatisierung | https://bandora-dev.de/de/leistungen/automatisierung | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/de/leistungen/automatisierung | https://bandora-dev.de/de/leistungen/automatisierung | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/en/ | https://bandora-dev.de/en/ | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/en/ | https://bandora-dev.de/en/ | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/en/services | https://bandora-dev.de/en/services | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/en/services | https://bandora-dev.de/en/services | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/en/projects | https://bandora-dev.de/en/projects | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/en/projects | https://bandora-dev.de/en/projects | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/en/blogs | https://bandora-dev.de/en/blogs | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/en/blogs | https://bandora-dev.de/en/blogs | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/en/about | https://bandora-dev.de/en/about | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/en/about | https://bandora-dev.de/en/about | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/en/contact | https://bandora-dev.de/en/contact | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/en/contact | https://bandora-dev.de/en/contact | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/en/imprint | https://bandora-dev.de/en/imprint | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/en/imprint | https://bandora-dev.de/en/imprint | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/en/privacy | https://bandora-dev.de/en/privacy | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/en/privacy | https://bandora-dev.de/en/privacy | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/en/projects/bandora-org | https://bandora-dev.de/en/projects/bandora-org | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/en/projects/bandora-org | https://bandora-dev.de/en/projects/bandora-org | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/en/projects/buynot | https://bandora-dev.de/en/projects/buynot | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/en/projects/buynot | https://bandora-dev.de/en/projects/buynot | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/en/projects/geraete-nachverfolgung | https://bandora-dev.de/en/projects/geraete-nachverfolgung | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/en/projects/geraete-nachverfolgung | https://bandora-dev.de/en/projects/geraete-nachverfolgung | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/en/projects/roommate-plus | https://bandora-dev.de/en/projects/roommate-plus | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/en/projects/roommate-plus | https://bandora-dev.de/en/projects/roommate-plus | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/en/projects/bandora-gen8 | https://bandora-dev.de/en/projects/bandora-gen8 | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/en/projects/bandora-gen8 | https://bandora-dev.de/en/projects/bandora-gen8 | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/en/projects/digital-footprint-os | https://bandora-dev.de/en/projects/digital-footprint-os | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/en/projects/digital-footprint-os | https://bandora-dev.de/en/projects/digital-footprint-os | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/en/projects/bandora-mt5-trader | https://bandora-dev.de/en/projects/bandora-mt5-trader | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/en/projects/bandora-mt5-trader | https://bandora-dev.de/en/projects/bandora-mt5-trader | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/en/projects/bandora-crypto-scanner | https://bandora-dev.de/en/projects/bandora-crypto-scanner | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/en/projects/bandora-crypto-scanner | https://bandora-dev.de/en/projects/bandora-crypto-scanner | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/en/projects/bandora-studio | https://bandora-dev.de/en/projects/bandora-studio | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/en/projects/bandora-studio | https://bandora-dev.de/en/projects/bandora-studio | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/en/blogs/warum-kleine-unternehmen-eine-website-brauchen | https://bandora-dev.de/en/blogs/warum-kleine-unternehmen-eine-website-brauchen | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/en/blogs/warum-kleine-unternehmen-eine-website-brauchen | https://bandora-dev.de/en/blogs/warum-kleine-unternehmen-eine-website-brauchen | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/en/services/webentwicklung | https://bandora-dev.de/en/services/webentwicklung | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/en/services/webentwicklung | https://bandora-dev.de/en/services/webentwicklung | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/en/services/softwareentwicklung | https://bandora-dev.de/en/services/softwareentwicklung | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/en/services/softwareentwicklung | https://bandora-dev.de/en/services/softwareentwicklung | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/en/services/app-entwicklung | https://bandora-dev.de/en/services/app-entwicklung | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/en/services/app-entwicklung | https://bandora-dev.de/en/services/app-entwicklung | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/en/services/automatisierung | https://bandora-dev.de/en/services/automatisierung | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/en/services/automatisierung | https://bandora-dev.de/en/services/automatisierung | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/ar/ | https://bandora-dev.de/ar/ | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/ar/ | https://bandora-dev.de/ar/ | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/ar/services | https://bandora-dev.de/ar/services | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/ar/services | https://bandora-dev.de/ar/services | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/ar/projects | https://bandora-dev.de/ar/projects | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/ar/projects | https://bandora-dev.de/ar/projects | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/ar/blogs | https://bandora-dev.de/ar/blogs | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/ar/blogs | https://bandora-dev.de/ar/blogs | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/ar/about | https://bandora-dev.de/ar/about | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/ar/about | https://bandora-dev.de/ar/about | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/ar/contact | https://bandora-dev.de/ar/contact | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/ar/contact | https://bandora-dev.de/ar/contact | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/ar/imprint | https://bandora-dev.de/ar/imprint | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/ar/imprint | https://bandora-dev.de/ar/imprint | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/ar/privacy | https://bandora-dev.de/ar/privacy | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/ar/privacy | https://bandora-dev.de/ar/privacy | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/ar/projects/bandora-org | https://bandora-dev.de/ar/projects/bandora-org | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/ar/projects/bandora-org | https://bandora-dev.de/ar/projects/bandora-org | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/ar/projects/buynot | https://bandora-dev.de/ar/projects/buynot | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/ar/projects/buynot | https://bandora-dev.de/ar/projects/buynot | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/ar/projects/geraete-nachverfolgung | https://bandora-dev.de/ar/projects/geraete-nachverfolgung | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/ar/projects/geraete-nachverfolgung | https://bandora-dev.de/ar/projects/geraete-nachverfolgung | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/ar/projects/roommate-plus | https://bandora-dev.de/ar/projects/roommate-plus | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/ar/projects/roommate-plus | https://bandora-dev.de/ar/projects/roommate-plus | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/ar/projects/bandora-gen8 | https://bandora-dev.de/ar/projects/bandora-gen8 | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/ar/projects/bandora-gen8 | https://bandora-dev.de/ar/projects/bandora-gen8 | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/ar/projects/digital-footprint-os | https://bandora-dev.de/ar/projects/digital-footprint-os | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/ar/projects/digital-footprint-os | https://bandora-dev.de/ar/projects/digital-footprint-os | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/ar/projects/bandora-mt5-trader | https://bandora-dev.de/ar/projects/bandora-mt5-trader | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/ar/projects/bandora-mt5-trader | https://bandora-dev.de/ar/projects/bandora-mt5-trader | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/ar/projects/bandora-crypto-scanner | https://bandora-dev.de/ar/projects/bandora-crypto-scanner | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/ar/projects/bandora-crypto-scanner | https://bandora-dev.de/ar/projects/bandora-crypto-scanner | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/ar/projects/bandora-studio | https://bandora-dev.de/ar/projects/bandora-studio | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/ar/projects/bandora-studio | https://bandora-dev.de/ar/projects/bandora-studio | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/ar/blogs/warum-kleine-unternehmen-eine-website-brauchen | https://bandora-dev.de/ar/blogs/warum-kleine-unternehmen-eine-website-brauchen | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/ar/blogs/warum-kleine-unternehmen-eine-website-brauchen | https://bandora-dev.de/ar/blogs/warum-kleine-unternehmen-eine-website-brauchen | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/ar/services/webentwicklung | https://bandora-dev.de/ar/services/webentwicklung | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/ar/services/webentwicklung | https://bandora-dev.de/ar/services/webentwicklung | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/ar/services/softwareentwicklung | https://bandora-dev.de/ar/services/softwareentwicklung | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/ar/services/softwareentwicklung | https://bandora-dev.de/ar/services/softwareentwicklung | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/ar/services/app-entwicklung | https://bandora-dev.de/ar/services/app-entwicklung | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/ar/services/app-entwicklung | https://bandora-dev.de/ar/services/app-entwicklung | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |
| https://al-badawi.de/ar/services/automatisierung | https://bandora-dev.de/ar/services/automatisierung | 301 | Historische Portfolio-URL aus der unmittelbar vor dem Domainwechsel erzeugten Sitemap | ja |
| https://www.al-badawi.de/ar/services/automatisierung | https://bandora-dev.de/ar/services/automatisierung | 301 | Historische www-Variante desselben Portfolio-Pfads | ja |

