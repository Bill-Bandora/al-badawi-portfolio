# Al-Badawi Software Development

Produktionsreife statische Portfolio-Website fuer `https://al-badawi.de`.

## Lokale Entwicklung

```bash
npm install
npm run dev
```

## Qualitaetspruefung

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## Kontaktmodus

Die Website unterstuetzt zwei Modi:

```env
VITE_CONTACT_MODE=php
```

oder:

```env
VITE_CONTACT_MODE=mailto
```

`php` sendet JSON per POST an `/api/contact.php`. `mailto` validiert im Browser und oeffnet danach das lokale E-Mail-Programm.

## Deployment über GitHub Pages

Jeder Push auf `main` baut die Website und veröffentlicht `dist` automatisch über
GitHub Pages. Die Custom Domain wird durch `public/CNAME` auf `al-badawi.de`
festgelegt.

Da GitHub Pages kein PHP ausführt, verwendet das Deployment
`VITE_CONTACT_MODE=mailto`.

## PHP-Pruefung auf STRATO

1. `deployment/php-check.php.example` in `php-check.php` umbenennen.
2. Datei temporaer auf STRATO hochladen.
3. Im Browser aufrufen.
4. Bei erfolgreicher Ausgabe `VITE_CONTACT_MODE=php` verwenden.
5. Datei danach sofort wieder loeschen.
6. Falls PHP nicht ausgefuehrt wird, `VITE_CONTACT_MODE=mailto` verwenden.

## PHP-Dateien kopieren

Der Inhalt von `server/api/` muss nach dem Build nach `dist/api/` beziehungsweise direkt auf dem Webspace nach `/api/` kopiert werden. Das passiert automatisch ueber:

```bash
node scripts/copy-server-api.mjs
```

## Manuell zu ergaenzen

- Vollstaendige Impressumsanschrift.
- Optionale Telefonnummer.
- Steuerliche Angaben nur, falls erforderlich.
- PHP-Absenderadresse in `server/api/config.php` auf eine Domain-Adresse wie `website@al-badawi.de` setzen.
- Echte Projekt-Screenshots, sobald vorhanden.
- Externe Projekt-Landingpages in `src/data/projects.ts` aktivieren, sobald sie live sind.
