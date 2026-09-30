# SEO-Audit nach der Umsetzung

Stand: 30. September 2026

## 1. Vorgenommene Änderungen

- Statisches Prerendering in den bestehenden React-/Vite-Build integriert.
- 51 indexierbare Sprach-, Übersichts-, Projekt-, Blog- und Leistungsrouten erhalten vollständiges initiales HTML.
- Vier fachlich durch bestehende Inhalte belegte Leistungsseiten ergänzt.
- Leistungsübersicht, Projekte und Blog intern miteinander verknüpft.
- Einheitliche Titel, Descriptions, Canonicals, hreflang, Robots-, Open-Graph- und Twitter-Metadaten erweitert.
- Genau eine H1 auf jeder indexierbaren, vorgerenderten Seite sichergestellt.
- Bildbeschreibungen für Projektvisuals ergänzt; feste Dimensionen und Lazy Loading bleiben erhalten.
- Apache so erweitert, dass vorgerenderte Dokumente ohne erzwungenen Trailing Slash ausgeliefert werden.
- Unbekannte Projekt-, Blog-, Leistungs- und Top-Level-Routen erhalten im Docker/Apache-Betrieb einen echten 404-Status mit bestehender React-404-Seite.
- Keine bestehenden Inhalte, Funktionen, Projekte, Bilder, Animationen oder Navigationselemente entfernt.

## 2. Neue URLs

- `/de/leistungen/webentwicklung`
- `/de/leistungen/softwareentwicklung`
- `/de/leistungen/app-entwicklung`
- `/de/leistungen/automatisierung`
- Entsprechende Seiten unter `/en/services/<slug>` und `/ar/services/<slug>`

## 3. Bewusst unveränderte URLs

- Alle vorher vorhandenen Sprach-, Projekt-, Blog-, Kontakt- und Rechtsseiten bleiben bestehen.
- Die vorhandene Blogroute `/blogs` bleibt aus Bestandsschutz erhalten; sie wurde nicht auf `/blog` umbenannt.
- Projekt-Slugs und bestehende Canonicals wurden nicht unnötig geändert.

## 4. Technische SEO-Verbesserungen

- Jede indexierbare Route enthält im ausgelieferten HTML genau einen Titel, eine Description, eine H1 und einen selbstreferenzierenden Canonical.
- `index, follow, max-image-preview:large` ist für öffentliche Seiten explizit; 404-Seiten bleiben `noindex, follow`.
- Open Graph wurde um Site-Name, Locale und Bild-Alt ergänzt; Twitter erhält Titel und Description.
- hreflang bleibt für Deutsch, Englisch und Arabisch vorhanden.
- Die Root-URL bleibt eine clientseitige Sprachauswahl; kanonische Inhaltsziele sind die Sprachrouten.

## 5. Rendering-Verbesserungen

- Vorher: leere SPA-Shell im initialen HTML.
- Nachher: Static Site Generation/Prerendering während des Vite-Builds mit React Server Rendering und anschließender Client-Hydration.
- Inhalte, H1, Navigation, interne Links, Metadaten und JSON-LD sind ohne JavaScript im Quelltext verfügbar.
- Kein Frameworkwechsel und keine Änderung am bestehenden Erscheinungsbild.

## 6. Structured Data

- `Organization`
- `WebSite`
- `Service` auf Leistungsseiten
- `Article` auf Blogartikeln
- `BreadcrumbList` auf Leistungs-, Projekt- und Blogdetailseiten

Es wurden keine LocalBusiness-Daten, Bewertungen, Kunden, Kennzahlen oder Standorte erfunden.

## 7. Sitemap

- Build-generiert unter `https://al-badawi.de/sitemap.xml`.
- Enthält 51 eindeutige, indexierbare URLs inklusive Leistungsseiten und `lastmod`.
- Admin-, API-, Entwicklungs- und 404-URLs werden nicht aufgenommen.

## 8. robots.txt

- Öffentliche Inhalte bleiben crawlbar.
- `/api/` ist gesperrt.
- Sitemap ist absolut referenziert.

## 9. Performance

- Vorhandene SVG-Projektvisuals, Bilddimensionen und Lazy Loading bleiben erhalten.
- Prerendering verbessert die Zeit bis zu sichtbarem/crawlbarem Inhalt, ohne Animationen oder Funktionen zu entfernen.
- Bestehende Traefik-Kompression und das statische Apache-Runtime-Modell bleiben unverändert.
- Keine spekulative Bildkonvertierung oder Qualitätsreduktion vorgenommen.

## 10. Interne Verlinkung

- Leistungsübersicht → Leistungsdetails.
- Leistungsdetails → passende vorhandene Projekte und Kontakt.
- Projekte → dazu passende Leistungsseiten.
- Blogartikel → Webentwicklung und Kontakt.
- Sichtbare Breadcrumbs plus Breadcrumb-JSON-LD auf Detailseiten.

## 11. Tests und Verifikation

- ESLint: bestanden.
- TypeScript: bestanden.
- Vitest: 26/26 Tests bestanden.
- Produktionsbuild: bestanden.
- 51/51 vorgerenderte Dokumente besitzen genau einen Titel, eine H1 und einen Canonical.
- Sitemap und robots.txt werden erzeugt bzw. kopiert.
- Docker Desktop lief auf dem Windows-Arbeitsplatz nicht; deshalb wurde das Produktionsimage direkt auf Gen8 gebaut und dort isoliert geprüft. Die Entrypoint-Zeilenenden werden im Docker-Build zusätzlich normalisiert, damit Builds unabhängig von der Checkout-Plattform starten.

## 12. Noch offene SEO-Aufgaben

- Echte Projektscreenshots ergänzen, sobald sie verfügbar sind; vorhandene Illustrationen bleiben bis dahin korrekt gekennzeichnet.
- Bloginhalte für englische und arabische Sprachrouten redaktionell übersetzen oder diese Varianten später gezielt auf `noindex` setzen.
- Reale Suchanfragen und Impressionen nach der Indexierung auswerten und Inhalte datenbasiert weiterentwickeln.
- Optional ein eigenes Social-Sharing-Bild im passenden Seitenformat erstellen.

## 13. Aufgaben mit Benutzerzugriff

- Google Search Console: Property prüfen, Sitemap einreichen und Indexierung überwachen.
- Analytics/Conversion Tracking: nur nach Auswahl eines datenschutzkonformen Setups und Aktualisierung der Datenschutzhinweise.
- Google Business Profile: nur bei tatsächlich gewünschter lokaler Unternehmensdarstellung einrichten/ergänzen.
- Google Ads und externe Backlinks sind keine Voraussetzung für die technische SEO-Umsetzung und wurden nicht verändert.
