# SEO-Audit vor der Umsetzung

Stand: 30. September 2026

## Technischer Zustand

- Stack: React 18, TypeScript, Vite 6, React Router 7, i18next, Tailwind CSS.
- Rendering: reine Client-Side-SPA. `index.html` enthält nur `<div id="root"></div>`; Seiteninhalte, H1, interne Links und routenspezifische Metadaten entstehen erst nach JavaScript-Ausführung.
- Routing: sprachbasierte Client-Routen unter `/de`, `/en` und `/ar` mit Apache-Fallback auf `index.html`.
- Build: `tsc -b && vite build && node scripts/copy-server-api.mjs`.
- Deployment: Multi-Stage-Dockerfile (Node-Build, PHP/Apache-Runtime), dokumentiert für das bestehende selbst gehostete Gen8/Coolify-Deployment. Die Kontakt-API wird beim Build nach `dist/api` kopiert.
- Marke: sichtbar und technisch konsistent als „Al-Badawi Software Development“; „Bandora Development“ ist im aktuellen Repository nicht als konkurrierende Hauptmarke vorhanden.

## Vorhandene öffentliche URLs

Für Deutsch bestehen: `/de/`, `/de/leistungen`, `/de/projekte`, `/de/projekte/<slug>`, `/de/blogs`, `/de/blogs/<slug>`, `/de/ueber-mich`, `/de/kontakt`, `/de/impressum`, `/de/datenschutz`.

Entsprechende lokalisierte Routen existieren unter `/en/` und `/ar/`. Projekt-Slugs:

- `bandora-org`
- `buynot`
- `geraete-nachverfolgung`
- `roommate-plus`

Blog-Slug:

- `warum-kleine-unternehmen-eine-website-brauchen`

## Vorhandene Inhalte

- Startseite mit Leistungsüberblick, Kompetenzfeldern, vier Projektkarten, Arbeitsweise, Personenprofil und CTA.
- Leistungsübersicht mit sechs belegten Leistungsfeldern.
- Projektübersicht und vier ausführliche Projekt-Detailseiten.
- Über-mich-, Kontakt-, Impressums- und Datenschutzseiten.
- Blogübersicht und ein ausführlicher Artikel.
- Alle Inhalte sind in Deutsch, Englisch und Arabisch angelegt; der vorhandene Blogartikel ist in allen Sprachrouten derzeit deutsch.

## Vorhandene SEO-Konfiguration

- `react-helmet-async` setzt clientseitig Titel, Description, Canonical, hreflang, Open Graph, Twitter Card und ein generisches `WebSite`-JSON-LD.
- `public/robots.txt` erlaubt Crawling und referenziert die Sitemap.
- `vite.config.ts` erzeugt beim Build `sitemap.xml` aus Routen, Projekten und Blogs.
- Projektseiten besitzen sichtbare Breadcrumbs, aber noch kein Breadcrumb-JSON-LD.
- Projektbilder besitzen feste Dimensionen; dekorative Vorschaubilder haben leere Alt-Texte. Das ist bei reinen Illustrationen teilweise vertretbar, bei der Detailansicht fehlt jedoch eine beschreibende Alternative.
- Die 404-Seite erhält clientseitig `noindex`, der Apache liefert für unbekannte Projekt-Slugs einen echten 404. Andere unbekannte SPA-Routen fallen derzeit auf `index.html` mit HTTP 200 zurück.

## Probleme

1. Kritisch: zentrale Inhalte und routenspezifische Metadaten fehlen im initial ausgelieferten HTML.
2. Es gibt nur eine allgemeine Leistungsseite, keine fokussierten, belegbaren Leistungs-Unterseiten.
3. Canonical-/hreflang-Erzeugung basiert auf deutschen Pfadsegmenten und ist für Detail-/Sonderrouten zu unflexibel.
4. Structured Data ist auf ein generisches `WebSite`-Objekt begrenzt; Organization, Service, Article und BreadcrumbList fehlen.
5. Open-Graph-Basisdaten (`site_name`, Locale, Bild-Alt) und explizite `index, follow`-Direktive fehlen.
6. Sitemap enthält keine Änderungsdaten und noch keine Leistungs-Unterseiten.
7. Blogroute verwendet `/blogs`, während die gewünschte Zielarchitektur `/blog` nennt. Die bestehende URL wird aus Bestandsschutz nicht entfernt oder umbenannt.
8. Interne Verknüpfungen zwischen Leistungen, Projekten und Blog sind ausbaufähig.
9. Die Root-URL entscheidet die Sprache clientseitig und ist damit nicht als eigenständige Inhaltsseite indexierbar; die Sprachseiten bleiben die kanonischen Ziele.

## Geplante Änderungen

- Risikoarmes statisches Prerendering aller indexierbaren Routen innerhalb des bestehenden Vite-/React-Stacks.
- Vier belegte Leistungs-Unterseiten für Webentwicklung, Softwareentwicklung, App-Entwicklung und Automatisierung (ohne unbelegte KI-Versprechen).
- Robuste, explizite Canonicals und hreflang-URLs.
- JSON-LD für Organization/WebSite, Service, Article und BreadcrumbList.
- Erweiterte Sitemap und Apache-Regeln für echte 404-Antworten bei unbekannten Detailrouten.
- Beschreibende Alt-Texte, Breadcrumbs und sinnvolle interne Verknüpfung.
- Vorhandene Inhalte, Funktionen, Projekte, Bilder, Animationen, Navigation und Design bleiben erhalten.
