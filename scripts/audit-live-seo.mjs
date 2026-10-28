import { JSDOM } from 'jsdom';

const baseUrl = (process.argv[2] ?? 'https://bandora-dev.de').replace(/\/$/, '');
const sitemapUrl = `${baseUrl}/sitemap.xml`;
const userAgent = 'BandoraSEOAudit/1.0 (+https://bandora-dev.de)';

async function fetchText(url, redirect = 'follow') {
  const response = await fetch(url, { redirect, headers: { 'user-agent': userAgent } });
  return { response, text: await response.text() };
}

const sitemap = await fetchText(sitemapUrl);
if (!sitemap.response.ok) throw new Error(`Sitemap request failed: ${sitemap.response.status}`);

const urls = [...sitemap.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const urlSet = new Set(urls);
const failures = [];
const records = new Map();

if (!urls.length || urls.length !== urlSet.size) failures.push(`Sitemap URLs are empty or duplicated: ${urls.length}/${urlSet.size}.`);

for (let index = 0; index < urls.length; index += 8) {
  const chunk = urls.slice(index, index + 8);
  const results = await Promise.all(chunk.map(async (url) => {
    try {
      const { response, text } = await fetchText(url);
      return { url, response, text };
    } catch (error) {
      return { url, error };
    }
  }));

  for (const result of results) {
    if (result.error) {
      failures.push(`${result.url}: request failed (${result.error.message}).`);
      continue;
    }
    const { url, response, text } = result;
    if (response.status !== 200) {
      failures.push(`${url}: HTTP ${response.status}.`);
      continue;
    }
    if ((response.headers.get('x-robots-tag') ?? '').toLowerCase().includes('noindex')) failures.push(`${url}: X-Robots-Tag contains noindex.`);

    const document = new JSDOM(text).window.document;
    const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');
    const robots = document.querySelector('meta[name="robots"]')?.getAttribute('content')?.toLowerCase() ?? '';
    const alternates = new Map([...document.querySelectorAll('link[rel="alternate"][hreflang]')].map((node) => [node.getAttribute('hreflang'), node.getAttribute('href')]));
    const h1Count = document.querySelectorAll('h1').length;
    const mainText = document.querySelector('main')?.textContent?.replace(/\s+/g, ' ').trim() ?? '';
    const internalLinks = [...document.querySelectorAll('a[href]')]
      .map((node) => node.getAttribute('href'))
      .filter(Boolean)
      .map((href) => new URL(href, baseUrl))
      .filter((target) => target.origin === baseUrl && !target.pathname.startsWith('/api/') && !target.pathname.startsWith('/cdn-cgi/'));

    if (canonical !== url) failures.push(`${url}: canonical is ${canonical ?? 'missing'}.`);
    if (robots.includes('noindex')) failures.push(`${url}: meta robots contains noindex.`);
    if (h1Count !== 1) failures.push(`${url}: expected one H1, received ${h1Count}.`);
    if (!mainText) failures.push(`${url}: prerendered main content is missing.`);
    for (const schema of document.querySelectorAll('script[type="application/ld+json"]')) {
      try { JSON.parse(schema.textContent ?? ''); } catch { failures.push(`${url}: invalid JSON-LD.`); }
    }
    for (const target of internalLinks) {
      const normalized = `${baseUrl}${target.pathname}`;
      if (target.pathname !== '/' && !urlSet.has(normalized)) failures.push(`${url}: internal target is not in sitemap: ${normalized}.`);
    }
    for (const [language, target] of alternates) {
      if (!language || !target || !urlSet.has(target)) failures.push(`${url}: invalid ${language ?? 'unknown'} alternate ${target ?? 'missing'}.`);
    }
    records.set(url, { alternates, internalLinks });
  }
}

for (const [url, record] of records) {
  const sourceLanguage = new URL(url).pathname.split('/')[1];
  for (const target of record.alternates.values()) {
    if (records.get(target)?.alternates.get(sourceLanguage) !== url) failures.push(`${url}: alternate ${target} is not reciprocal.`);
  }
}

const root = await fetchText(`${baseUrl}/`, 'manual');
const expectedRootTarget = `${baseUrl}/de/`;
if (root.response.status !== 301 || root.response.headers.get('location') !== expectedRootTarget) {
  failures.push(`${baseUrl}/: expected direct 301 to ${expectedRootTarget}, received ${root.response.status} to ${root.response.headers.get('location') ?? 'no location'}.`);
}

const robots = await fetchText(`${baseUrl}/robots.txt`);
if (!robots.response.ok || !robots.text.includes(`Sitemap: ${sitemapUrl}`) || !robots.text.includes('Disallow: /api/')) {
  failures.push('robots.txt is unavailable or missing the sitemap/API rules.');
}

const summary = {
  baseUrl,
  checkedAt: new Date().toISOString(),
  sitemapUrls: urls.length,
  htmlPagesChecked: records.size,
  rootRedirect: { status: root.response.status, location: root.response.headers.get('location') },
  failures,
};

console.log(JSON.stringify(summary, null, 2));
if (failures.length) process.exit(1);
