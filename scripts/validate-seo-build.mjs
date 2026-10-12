import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { JSDOM } from 'jsdom';

const root = new URL('..', import.meta.url).pathname.replace(/^\/(?:[A-Za-z]:)/, (match) => match.slice(1));
const dist = join(root, 'dist');
const domain = 'https://bandora-dev.de';
const sitemapXml = await readFile(join(dist, 'sitemap.xml'), 'utf8');
const urls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const failures = [];

if (urls.length !== 72 || new Set(urls).size !== 72) failures.push(`Expected 72 unique sitemap URLs, received ${urls.length}/${new Set(urls).size}.`);

const records = new Map();
for (const url of urls) {
  const parsedUrl = new URL(url);
  const output = join(dist, parsedUrl.pathname.replace(/^\//, ''), 'index.html');
  const html = await readFile(output, 'utf8');
  const document = new JSDOM(html).window.document;
  const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');
  const alternates = new Map([...document.querySelectorAll('link[rel="alternate"][hreflang]')].map((node) => [node.getAttribute('hreflang'), node.getAttribute('href')]));
  const h1Count = document.querySelectorAll('h1').length;
  const mainText = document.querySelector('main')?.textContent?.replace(/\s+/g, ' ').trim() ?? '';
  const schemas = [...document.querySelectorAll('script[type="application/ld+json"]')];

  if (!document.title.trim()) failures.push(`${url}: missing title.`);
  if (!(document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '').trim()) failures.push(`${url}: missing description.`);
  if (canonical !== url) failures.push(`${url}: canonical is ${canonical ?? 'missing'}.`);
  if (document.documentElement.lang !== parsedUrl.pathname.split('/')[1]) failures.push(`${url}: wrong html lang ${document.documentElement.lang}.`);
  if (parsedUrl.pathname.startsWith('/ar/') && document.documentElement.dir !== 'rtl') failures.push(`${url}: Arabic document is not RTL.`);
  if (h1Count !== 1) failures.push(`${url}: expected one H1, received ${h1Count}.`);
  if (!mainText) failures.push(`${url}: prerendered main content is missing.`);
  if (schemas.length === 0) failures.push(`${url}: no structured data.`);
  for (const schema of schemas) {
    try { JSON.parse(schema.textContent ?? ''); } catch { failures.push(`${url}: invalid JSON-LD.`); }
  }
  if (!document.querySelector('nav.fixed.lg\\:hidden')) failures.push(`${url}: mobile navigation missing from prerendered HTML.`);

  const internal = [...document.querySelectorAll('a[href]')]
    .map((node) => node.getAttribute('href'))
    .filter(Boolean)
    .map((href) => new URL(href, domain))
    .filter((target) => target.origin === domain && !target.pathname.startsWith('/api/'));
  for (const target of internal) {
    const targetUrl = `${domain}${target.pathname}`;
    if (target.pathname !== '/' && !urls.includes(targetUrl)) failures.push(`${url}: internal target not in sitemap: ${targetUrl}.`);
  }
  for (const [language, target] of alternates) {
    if (!language || !target || !urls.includes(target)) failures.push(`${url}: invalid ${language ?? 'unknown'} alternate ${target ?? 'missing'}.`);
  }
  records.set(url, { alternates, document });
}

for (const [url, record] of records) {
  const sourceLanguage = new URL(url).pathname.split('/')[1];
  for (const target of record.alternates.values()) {
    const reciprocal = records.get(target)?.alternates.get(sourceLanguage);
    if (reciprocal !== url) failures.push(`${url}: alternate ${target} is not reciprocal.`);
  }
}

const robots = await readFile(join(dist, 'robots.txt'), 'utf8');
if (!robots.includes(`Sitemap: ${domain}/sitemap.xml`)) failures.push('robots.txt does not reference the production sitemap.');
if (!robots.includes('Disallow: /api/')) failures.push('robots.txt no longer protects /api/.');

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`PASS: ${urls.length} prerendered URLs have valid titles, descriptions, canonicals, H1s, main content, schema, internal links and reciprocal hreflang.`);
