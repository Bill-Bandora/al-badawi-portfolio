import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const serverEntry = pathToFileURL(join(root, 'dist-ssr', 'entry-server.js')).href;
const { prerenderRoutes, render } = await import(serverEntry);
const template = await readFile(join(dist, 'index.html'), 'utf8');

for (const route of [...new Set(prerenderRoutes)]) {
  const rendered = await render(route);
  const output = join(dist, route.replace(/^\//, ''), 'index.html');
  const document = template
    .replace(/<html[^>]*>/, `<html lang="${rendered.lang}" dir="${rendered.dir}">`)
    .replace(/\s*<title>[^<]*<\/title>/, '')
    .replace('</head>', `    ${rendered.head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${rendered.html}</div>`);
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, document);
  if (!route.endsWith('/')) {
    const extensionlessOutput = join(dist, `${route.replace(/^\//, '')}.html`);
    await mkdir(dirname(extensionlessOutput), { recursive: true });
    await writeFile(extensionlessOutput, document);
  }
}

await rm(join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`Prerendered ${new Set(prerenderRoutes).size} routes.`);
