# Bandora Development – Technische SEO-Korrekturen

**Stand:** 12. Oktober 2026  
**Ausgangsbasis:** `reports/seo/bandora-seo-audit-2026-10-12.md`  
**Status:** Release Candidate vorbereitet; kein Deployment, keine DNS-/Cloudflare-/Search-Console-Änderung, keine Indexierungsanfrage.

## 1. Ergebnisübersicht

| Problem | Vorher | Nachher im Release Candidate | Test bestanden |
|---|---|---|---|
| hreflang auf Projekt-/Leistungsdetails | 52 falsche oder nicht reziproke Verweise; unter anderem `/de/projects/` und `/de/services/` | alle lokalisierten Segmente werden aus einer gemeinsamen Route-Zuordnung erzeugt; 0 fehlerhafte hreflang-Verweise im 72-URL-Buildtest | ja |
| Root-URL `/` | produktiv HTTP 200 mit leerer SPA-Shell und clientseitiger Weiterleitung | Apache-Regel für direkten HTTP 301 auf `/de/`; `/de/`, `/en/` und `/ar/` bleiben unverändert | Code-/Regressionstest ja; Container-Lauf noch offen |
| deutscher Inhalt unter EN/AR-Blog-URLs | derselbe deutsche Artikeldatensatz auf drei Sprachpfaden; AR von Google als Duplikat ausgeschlossen | vollständige eigenständige EN- und AR-Fassungen inklusive Metadaten, Überschriften, Inhalt, Datum, CTA und internen Links | ja |
| technische Vollständigkeit der 72 Seiten | Audit-Snapshot mit bekannten hreflang-Fehlern | 72/72 Buildseiten mit Title, Description, Canonical, H1, Hauptinhalt, JSON-LD, gültigen internen Links und reziprokem hreflang | ja |
| historische Migration-Redirects | 144 selektive Pfadweiterleitungen | 144/144 weiterhin permanent, direkt und pfadtreu; alte Root-/Privatpfade bleiben 404 | ja |

## 2. Behobene Probleme

### 2.1 hreflang-Lokalisierung

**Technische Ursache:** `SeoHead` suchte das erste URL-Segment nur in den deutschen Route-Werten. Dadurch wurden `projects` und `services` auf englischen und arabischen Seiten nicht als lokalisierbare Routen erkannt.

**Lösung:**

- `localizedContentPath()` in `src/config/site.ts` erkennt ein Segment nun über sämtliche Sprachvarianten des zentralen `routeMap`.
- `SeoHead` verwendet diese Funktion für Canonical-, Open-Graph- und hreflang-URLs.
- Die öffentlichen Pfade bleiben unverändert.
- `alternateLanguages` begrenzt hreflang weiterhin auf tatsächlich vorhandene Sprachfassungen.
- Automatisierte Tests decken alle neun Projekte, alle vier Leistungen und alle drei Sprachrichtungen ab.

**Betroffene Dateien:**

- `src/config/site.ts`
- `src/components/common/SeoHead.tsx`
- `src/config/site.test.ts`
- `scripts/validate-seo-build.mjs`

### 2.2 Serverbehandlung der Root-URL

**Technische Ursache:** `/` wurde durch Apache als `index.html` mit HTTP 200 ausgeliefert. Erst React wählte im Browser eine Sprache. Suchmaschinen konnten daher die inhaltsarme Root-Shell separat indexieren.

**Lösung:** Direkt am Anfang der vorhandenen Apache-Rewrite-Regeln wird ausschließlich der leere Root-Pfad permanent auf `/de/` umgeleitet:

```apache
RewriteRule ^$ /de/ [R=301,END]
```

Die Regel:

- betrifft nur `bandora-dev.de` innerhalb des Anwendungscontainers;
- verändert keine Cloudflare-/Traefik-Konfiguration;
- erzeugt keine globale Weiterleitung von `al-badawi.de`;
- greift nicht für `/de/`, `/en/`, `/ar/`, Assets oder APIs;
- behält Query-Parameter durch das Apache-Standardverhalten bei.

Der Docker-Smoke-Test wurde erweitert, damit er den ungefolgten Status 301, das Ziel `/de/` und die direkte Erreichbarkeit aller drei Sprachstartseiten prüft.

**Betroffene Dateien:**

- `docker/apache.conf`
- `tests/docker-smoke.py`

**Container-Nachweis:** Docker Desktop stellte auf dem Arbeitsplatz keine Engine bereit. Deshalb wurde derselbe Release Candidate am 12.10.2026 isoliert auf `bandora-gen8` als `portfolio-blog:seo-rc-20261012-01` gebaut und mit dem unveränderten `tests/docker-smoke.py` geprüft. Beide Testläufe (SMTP-Testkonfiguration und Start ohne SMTP) bestanden. Der produktive Container, seine Ports und seine Umgebungsvariablen wurden dabei nicht verändert.

### 2.3 Vollständige englische und arabische Artikelfassungen

**Technische Ursache:** Der mehrsprachig deklarierte Artikel verwendete einen einzigen deutschen Datensatz. Route und `inLanguage` wechselten, der Hauptinhalt aber nicht.

**Lösung:**

- Das Blogmodell unterstützt jetzt sprachspezifische vollständige Inhaltsobjekte.
- `visibleBlogs()` und `findBlog()` liefern passend zur Route den lokalisierten Datensatz.
- Englisch und Arabisch besitzen eigene Titel, Meta-Titles, Descriptions, Einleitungen, sechs Inhaltsabschnitte, Datums-/Lesezeitangaben, Projektlinks und CTAs.
- Die Aussagen entsprechen inhaltlich dem deutschen Original. Es wurden keine Preise, Ergebnisse, Kunden, Referenzen oder neuen Leistungsversprechen ergänzt.
- EN verweist intern nur auf vorhandene EN-Ziele, AR nur auf vorhandene AR-Ziele.
- Die Artikeloberfläche lokalisiert Inhaltsverzeichnis, Autorzeile, FAQ-/Quellen-/Projektüberschriften und CTAs.
- Das arabische Dokument wird beim Prerendern mit `lang="ar"` und `dir="rtl"` erzeugt.
- Article-JSON-LD verwendet den lokalisierten Titel, Auszug und `inLanguage`.

**Betroffene Dateien:**

- `src/data/blogTypes.ts`
- `src/data/blogs.ts`
- `src/data/blogPosts/smallBusinessArticle.ts`
- `src/pages/BlogArticlePage.tsx`
- `src/App.test.tsx`

## 3. Vollständiger Regressionstest

### 3.1 Automatisierte Prüfungen

| Prüfung | Ergebnis |
|---|---|
| ESLint | bestanden |
| TypeScript | bestanden |
| Vitest | 56/56 Tests bestanden |
| Produktionsbuild | bestanden |
| Prerender | 72 Routen |
| Sitemap | 72 eindeutige URLs, unverändert |
| Build-SEO-Validator | 72/72 bestanden |
| isolierter Docker-Build auf Gen8 | bestanden |
| unveränderter Container-Smoke-Test | beide Laufmodi bestanden |
| falsche `/de/projects/`-/`/de/services/`-Alternates | 0 |
| deutscher Artikeltext in gebauten EN-/AR-Dokumenten | 0 Treffer der geprüften deutschen Kernaussagen |
| Arabisch RTL | bestanden |
| Mobile Navigation im Prerender | auf 72/72 Seiten vorhanden |

Der neue `scripts/validate-seo-build.mjs` prüft jede Sitemap-URL auf:

1. vorhandenes vorgerendertes Dokument;
2. Meta-Title und Meta-Description;
3. exakt selbstreferenziellen Canonical;
4. korrektes `html lang` und arabisches RTL;
5. genau eine H1;
6. vorgerenderten Hauptinhalt;
7. syntaktisch gültiges JSON-LD;
8. vorhandene mobile Navigation;
9. interne Ziele innerhalb der Sitemap;
10. existierende und reziproke hreflang-Ziele;
11. robots.txt-Verweis auf die Produktions-Sitemap und API-Sperre.

Ausführung:

```text
npm run test:seo
PASS: 72 prerendered URLs have valid titles, descriptions, canonicals, H1s, main content, schema, internal links and reciprocal hreflang.
```

### 3.2 Historische Redirects

Live-Prüfung am 12.10.2026:

- 144/144 alte Portfolio-URLs antworten permanent mit HTTP 301;
- 144/144 Ziele entsprechen exakt demselben Pfad unter `https://bandora-dev.de`;
- keine Redirectkette in der geprüften Matrix;
- `https://al-badawi.de/`, `https://www.al-badawi.de/` und ein unbekannter privater Testpfad bleiben HTTP 404 ohne Redirect.

Die Redirect-Infrastruktur wurde nicht verändert. Insbesondere wurde kein Umbau auf HTTP 308 vorgenommen.

### 3.3 Sprachumschaltung und Mobile Navigation

- Bestehender Sprachumschalter-Test DE → AR mit RTL: bestanden.
- Lokalisierte Navigation: bestanden.
- Neue EN-/AR-Artikeltests inklusive lokalisierter Service- und Kontaktlinks: bestanden.
- Bestehender Fünf-Punkte-Mobile-Navigationstest: bestanden.
- Mobile Navigation zusätzlich auf allen 72 vorgerenderten Dokumenten nachgewiesen.

## 4. Performance-Regression

Lighthouse 13.5.0 auf dem lokalen Produktionsbuild. Die Werte sind synthetische Labwerte und können geringfügig schwanken.

| Seite | Profil | Referenz | Nachher | LCP | TBT | CLS | Übertragungsgröße |
|---|---|---:|---:|---:|---:|---:|---:|
| Startseite | Mobile | 97 | 96 | 2,5 s | 40 ms | 0 | 273 KiB |
| Startseite | Desktop | 100 | 100 | 0,5 s | 0 ms | 0 | 273 KiB |
| Webentwicklung | Mobile | 98 | 97 | 2,4 s | 20 ms | 0 | 269 KiB |
| Webentwicklung | Desktop | 100 | 100 | 0,5 s | 0 ms | 0 | 269 KiB |
| Kostenartikel | Mobile | 96 | 96 | 2,6 s | 40 ms | 0 | 272 KiB |
| Kostenartikel | Desktop | 100 | 100 | 0,5 s | 0 ms | 0 | 272 KiB |

Die Abweichung von einem Punkt bei zwei Mobile-Läufen liegt innerhalb üblicher Lighthouse-Streuung. Es gibt keine deutliche Regression bei LCP, TBT oder CLS. Der Produktionsbundle umfasst 508.880 Byte JavaScript und 52.134 Byte CSS vor Übertragungskompression. Es wurde keine neue Bibliothek eingebunden.

## 5. Search Console und erneuter Crawl

Es wurden weder Search-Console-Einstellungen verändert noch Indexierungsanträge gestellt. Ein grüner Buildtest ändert den Google-Index nicht; erst Deployment und erneuter Google-Crawl können die GSC-Befunde verändern.

### Priorisierte URL-Inspection-Liste nach einem freigegebenen Deployment

1. `https://bandora-dev.de/` – Live-Status 301 und Ziel `/de/` prüfen; keine Inhaltsindexierung der Root mehr gewünscht.
2. `https://bandora-dev.de/de/leistungen/webentwicklung` – höchste Priorität wegen alter, von Google gewählter Canonical.
3. `https://bandora-dev.de/ar/blogs/warum-kleine-unternehmen-eine-website-brauchen` – neue eigenständige arabische Fassung.
4. `https://bandora-dev.de/en/blogs/warum-kleine-unternehmen-eine-website-brauchen` – neue eigenständige englische Fassung.
5. `https://bandora-dev.de/de/blogs/website-erstellen-lassen-kosten-2026` – bestehender Duplikatstatus aus der Migration.
6. `https://bandora-dev.de/de/blogs/website-erstellen-lassen-ablauf` – bestehender Duplikatstatus aus der Migration.
7. `https://bandora-dev.de/en/` – bestehender Duplikatstatus; nach Root- und hreflang-Korrektur erneut prüfen.
8. Je eine EN-/AR-Projekt- und Leistungsdetailseite als Stichprobe für gerendertes hreflang, zum Beispiel `.../en/projects/bandora-org` und `.../ar/services/webentwicklung`.

Eine Indexierungsanfrage ist eine separate Entscheidung und benötigt weiterhin ausdrückliche Freigabe. Selbst nach einer Anfrage bleibt die tatsächliche Neuindexierung zeitverzögert und nicht garantiert.

## 6. Vorher-/Nachher-Bewertung

- **Canonical:** unverändert korrekt auf allen 72 Inhaltsseiten.
- **hreflang:** von 52 nachgewiesenen Fehlern auf 0 im Build reduziert.
- **Sitemap:** unverändert 72 URLs.
- **Blogsprachqualität:** von deutschem Duplikat zu drei eigenständigen Sprachfassungen.
- **Root:** serverseitige 301-Regel ist im Release Candidate enthalten; produktive Wirkung erst nach Freigabe und Deployment.
- **Alte Domain:** unverändert selektiv; 144 historische Pfade leiten, Root/private Pfade nicht.
- **Leistungsseiten und sechs SEO-Ratgeber:** keine unbeabsichtigten Inhaltsänderungen; Build und Regressionstests bestanden.

## 7. Verbleibende Risiken und offene Entscheidungen

1. **Produktive Root-Wirkung:** kann ohne Deployment nicht live bestätigt werden. Nach Release müssen Status, `Location`, Query-Erhalt und Loop-Freiheit öffentlich geprüft werden.
2. **Google-Verarbeitung:** die fünf Duplikatbefunde und alte Domain-Canonicals können trotz technischer Korrektur noch Tage oder Wochen sichtbar bleiben.
3. **Redaktionelle Qualität:** EN und AR sind fachlich vollständige Übersetzungen des deutschen Originals; ein optionales muttersprachliches Lektorat kann Stilnuancen verbessern, ist aber kein technischer Blocker.
4. **Freigabe:** Deployment, produktiver Smoke-Test und mögliche spätere Indexierungsanfragen benötigen jeweils Freigabe.

## 8. Release-Status

**Releasebereit nach Freigabe.** Quellcode, Typprüfung, Lint, Unit-/Komponententests, Produktionsbuild, 72-Seiten-SEO-Regression, Performanceprüfung, isolierter Docker-Build und der unveränderte Container-Smoke-Test sind grün. Vor dem produktiven Deployment ist eine ausdrückliche Deployment-Freigabe erforderlich.

Es wurde kein Push oder Deployment durchgeführt.
