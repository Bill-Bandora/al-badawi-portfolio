# Design-Upgrade-Plan

Stand: 1. Oktober 2026

## Unveränderliche Basis

Die bestehende SEO-Implementierung bleibt funktional und strukturell erhalten: 51 öffentliche URLs, Inhalte, Texte, Routen, Prerendering, Metadaten, Canonicals, hreflang, Sitemap, robots.txt, Structured Data, Breadcrumbs, interne Links und HTTP-Statuscodes. Neue visuelle Komponenten werden so gebaut, dass ihr aussagekräftiger Inhalt auch beim serverseitigen Prerendering vorhanden ist. Interaktionen ergänzen diesen Inhalt ausschließlich clientseitig.

## Analyse des bestehenden Designs

- Die Seite nutzt ein kleines Tailwind-Designsystem mit Navy (`ink`), Anthrazit (`coal`), Cyan und Blau.
- Typografie und Abstände sind konsistent, wirken bisher aber sehr dokumentarisch: viele weiße Flächen, dünne graue Rahmen und gleichförmige Karten.
- Navigation, Buttons, Projektkarten und Projektseiten sind funktional, besitzen jedoch wenig räumliche Tiefe und kaum visuelle Hierarchie.
- Das vorhandene Scroll-Reveal nutzt ausschließlich `transform` und `opacity`, respektiert `prefers-reduced-motion` und ist eine gute Basis.
- Die vier Projektmedien sind ausdrücklich Illustrationen, keine echten Screenshots. Sie werden prominenter gezeigt, aber weiterhin klar als stilisierte Projektvisuals bezeichnet.
- Für Geräte-Nachverfolgung sind Suche, Statuswechsel, Mitarbeiterzuweisung, Historie und Rollback als bestehende Funktionen belegt. Nur dort ist daher eine lokale Mock-Demo fachlich sicher.

## Visuelles Konzept

### Designbasis

- Dunkler, atmosphärischer Seitenhintergrund aus Navy/Anthrazit mit dezenten radialen Cyan-/Blau-Verläufen.
- Helle Inhaltsflächen werden gezielt als Kontrastinseln eingesetzt statt als durchgehender weißer Hintergrund.
- Neue wiederverwendbare Oberflächen: `surface-dark`, `surface-light`, Glow-Rahmen, Rasterhintergrund und weiche Tiefenschatten.
- Größere Radien, klarere Typografiehierarchie und großzügige Projektvisualisierungen.
- Bestehende Cyan-/Blau-Markenfarben bleiben erhalten; keine neue konkurrierende Farbwelt.

### Motion-System

- Reveal mit kleinen vertikalen Bewegungen und optionalem Stagger.
- CSS-basierte Ambient-Orbs und animierte Raster-/Linienakzente.
- Mausabhängiger Glow nur auf großen Zeigegeräten.
- Leichter 3D-Tilt für ausgewählte Projektvisuals, mit Tastaturneutralität und automatischer Deaktivierung bei reduzierter Bewegung.
- Hover-Transformationen nur über `transform`, `opacity`, `border-color` und `box-shadow`.
- Bestehender Scroll-Fortschritt erhält einen Glow; kein layout-triggerndes Motion-System.

## Umsetzung nach Priorität

### 1. Globale Designbasis

- Farbtoken, Schatten, Radien und globale Hintergrundflächen erweitern.
- Wiederverwendbare Utility-Klassen für Raster, Glow, Panels, Eyebrows und Motion ergänzen.
- Fokuszustände und Reduced-Motion-Verhalten erhalten bzw. ausbauen.

### 2. Navigation

- Dunkle, halbtransparente technische Navigationsleiste mit klarer aktiver Route.
- Mobile Navigation als hochwertiges Overlay-Panel, ohne Navigationslogik zu verändern.
- Markenblock und CTA-/GitHub-Zustände visuell verfeinern.

### 3. Startseite

- Hero als technische Bühne mit Ambient-Licht, Raster und lebendiger Build-Konsole.
- Kompetenzbereiche als gestaffelte, kontrastreiche Panels.
- Projekte werden großformatig und abwechselnd präsentiert; alle bestehenden Projektinformationen und Links bleiben enthalten.
- Prozess als visuelle Linie statt isolierter Standardkarten.

### 4. Projektseiten

- Individuelle Projektfarben bleiben erhalten und werden zu vollständigen Projektwelten erweitert.
- Hero mit großem, perspektivischem Projektvisual und technischen Metadaten.
- Problem/Lösung als gerichteter visueller Übergang.
- Feature-Karten erhalten Microinteractions, ohne Funktionalität vorzutäuschen.
- Architekturdiagramm ausschließlich aus belegten Technologien und Beschreibungen.
- Geräte-Nachverfolgung erhält eine klar als lokale Simulation markierte Demo mit Mockdaten.
- Keine Illustration wird als echter Screenshot bezeichnet.

### 5. Leistungsseiten

- Dunkle Hero-Flächen und kontrastierende Detailsektionen.
- Ablauf, Vorteile, Technologien und Referenzprojekte werden visuell stärker verbunden.
- Inhalte und Service-Schema bleiben unverändert.

### 6. Blog und übrige Seiten

- Editoriale Lesefläche mit dunklem Rahmen, Fortschrittsakzenten und hochwertiger Typografie.
- Blogübersicht, Kontakt, Über mich und rechtliche Seiten in dasselbe Designsystem integrieren.

### 7. Mobile und Accessibility

- Layouts ab 320 px prüfen; interaktive Demo ohne Hover bedienbar.
- Touch-Ziele mindestens 44 px, sichtbare Fokuszustände und semantische Controls.
- Motion bei `prefers-reduced-motion` vollständig reduzieren.
- Maus-Glow und 3D-Tilt auf Touch-Geräten deaktivieren.

### 8. Performance und SEO-Regression

- Keine Motion-Library; nur React, CSS und vorhandene APIs.
- Keine zusätzlichen Schrift-, Tracking- oder Third-Party-Ressourcen.
- Bilder behalten feste Abmessungen und Lazy Loading außerhalb des sichtbaren Bereichs.
- Nach jeder Phase: Lint, TypeScript und relevante Tests.
- Abschluss: Produktionsbuild, 51 Prerender-Dokumente, genau eine H1, Canonical/Title/Description, Schema, Sitemap, robots.txt, 404 und öffentliche HTTP-Tests.

## Bewusst nicht vorgesehen

- Keine erfundenen Screenshots, Technologien, Kunden, Ergebnisse oder Produktivdaten.
- Keine WebGL-/Canvas-Schwereffekte oder große Animationsbibliothek.
- Keine Änderung an URLs oder Markenbezeichnung.
- Keine Entfernung bestehender Texte, Sections, Bilder, Animationen oder Funktionen.
