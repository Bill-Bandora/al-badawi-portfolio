import { readFile } from 'node:fs/promises';

const migrationFile = new URL('../OLD-PORTFOLIO-REDIRECTS.md', import.meta.url);
const markdown = await readFile(migrationFile, 'utf8');
const rows = [...markdown.matchAll(/^\| (https:\/\/[^ |]+) \| (https:\/\/[^ |]+) \| (301|308) \|/gm)]
  .map(([, source, target]) => ({ source, target }));

const historicalRows = rows.filter(({ source }) => new URL(source).pathname !== '/');
const documentedRoots = rows.filter(({ source }) => new URL(source).pathname === '/');
const rootSources = [
  'https://al-badawi.de/',
  'https://www.al-badawi.de/',
  'http://al-badawi.de/',
  'http://www.al-badawi.de/',
].map((source) => ({ source, target: 'https://bandora-dev.de/de/' }));

const failures = [];
const results = [];

if (historicalRows.length !== 144) failures.push(`Expected 144 historical redirect rows, found ${historicalRows.length}.`);
if (documentedRoots.length !== 2) failures.push(`Expected two documented HTTPS root rows, found ${documentedRoots.length}.`);

async function request(url) {
  return fetch(url, {
    redirect: 'manual',
    headers: { 'user-agent': 'BandoraDomainMigrationAudit/1.0 (+https://bandora-dev.de)' },
  });
}

async function verifyRedirect({ source, target }, group) {
  try {
    const first = await request(source);
    const location = first.headers.get('location');
    const permanent = first.status === 301 || first.status === 308;
    if (!permanent || location !== target) {
      failures.push(`${source}: expected permanent direct redirect to ${target}, received ${first.status} to ${location ?? 'no location'}.`);
      results.push({ group, source, status: first.status, location, finalStatus: null, canonical: null });
      return;
    }

    const final = await request(target);
    const html = await final.text();
    const canonical = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1]
      ?? html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i)?.[1]
      ?? null;
    if (final.status !== 200) failures.push(`${source}: final target ${target} returned HTTP ${final.status}.`);
    if (canonical !== target) failures.push(`${source}: final target canonical is ${canonical ?? 'missing'}, expected ${target}.`);
    results.push({ group, source, status: first.status, location, finalStatus: final.status, canonical });
  } catch (error) {
    failures.push(`${source}: request failed (${error.message}).`);
    results.push({ group, source, error: error.message });
  }
}

for (let index = 0; index < historicalRows.length; index += 12) {
  await Promise.all(historicalRows.slice(index, index + 12).map((entry) => verifyRedirect(entry, 'historical')));
}
await Promise.all(rootSources.map((entry) => verifyRedirect(entry, 'root')));

const summary = {
  checkedAt: new Date().toISOString(),
  historicalRedirects: {
    expected: 144,
    checked: results.filter(({ group }) => group === 'historical').length,
    passed: results.filter(({ group, status, finalStatus, canonical, location, source }) =>
      group === 'historical'
      && (status === 301 || status === 308)
      && finalStatus === 200
      && canonical === location
      && new URL(source).pathname === new URL(location).pathname).length,
    statusCounts: results.filter(({ group }) => group === 'historical').reduce((counts, { status }) => {
      counts[status] = (counts[status] ?? 0) + 1;
      return counts;
    }, {}),
  },
  rootRedirects: results.filter(({ group }) => group === 'root'),
  failures,
};

console.log(JSON.stringify(summary, null, 2));
if (failures.length) process.exit(1);

