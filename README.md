# al-badawi-portfolio

<<<<<<< HEAD
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

## Statisches STRATO-Deployment

1. `npm run build` ausfuehren.
2. Inhalt des `dist`-Ordners per SFTP oder FTP auf den STRATO-Webspace hochladen.
3. `.htaccess` mit hochladen.
4. Domain `al-badawi.de` auf das Zielverzeichnis zeigen lassen.
5. Falls PHP genutzt wird, muss der Inhalt von `server/api/` nach `dist/api/` beziehungsweise direkt auf dem Webspace nach `/api/` kopiert werden. Das Build-Skript `scripts/copy-server-api.mjs` erledigt das automatisch nach `vite build`.

## PHP-Pruefung auf STRATO

1. `deployment/php-check.php.example` in `php-check.php` umbenennen.
2. Datei temporaer auf STRATO hochladen.
3. Im Browser aufrufen.
4. Bei erfolgreicher Ausgabe `VITE_CONTACT_MODE=php` verwenden.
5. Datei danach sofort wieder loeschen.
6. Falls PHP nicht ausgefuehrt wird, `VITE_CONTACT_MODE=mailto` verwenden.

## Manuell zu ergaenzen

- Vollstaendige Impressumsanschrift.
- Optionale Telefonnummer.
- Steuerliche Angaben nur, falls erforderlich.
- PHP-Absenderadresse in `server/api/config.php` auf eine Domain-Adresse wie `website@al-badawi.de` setzen.
- Echte Projekt-Screenshots, sobald vorhanden.
- Externe Projekt-Landingpages in `src/data/projects.ts` aktivieren, sobald sie live sind.
=======
# al-badawi-portfolio
>>>>>>> 01686c8cfc5303a5bd471a005128708ec94102b1
