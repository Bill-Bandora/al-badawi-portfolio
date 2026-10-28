import { fireEvent, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import App from './App';
import { renderWithProviders } from './test/render';
import { buildMailto } from './utils/contact';

describe('portfolio app', () => {
  it('presents the German homepage with consistent brand and organization data', async () => {
    renderWithProviders(<App />, '/de/');
    expect(screen.getByRole('heading', { name: 'Softwareentwicklung von der Idee bis zum funktionierenden Produkt.', level: 1 })).toBeInTheDocument();
    expect(screen.getAllByText(/Unternehmen in Berlin und Umgebung/)).not.toHaveLength(0);
    await waitFor(() => expect(document.title).toBe('Bandora Development | Webdesign & Software Berlin'));
    const schemas = [...document.querySelectorAll('script[type="application/ld+json"]')].map((script) => JSON.parse(script.textContent ?? '{}'));
    const organization = schemas.flatMap((schema) => schema['@graph'] ?? []).find((entry) => entry['@type'] === 'Organization');
    expect(organization).toMatchObject({
      name: 'Bandora Development',
      alternateName: 'Bandora',
      url: 'https://bandora-dev.de',
      logo: 'https://bandora-dev.de/images/brand/bandora-crest-1200.webp',
      areaServed: { '@type': 'City', name: 'Berlin' },
      sameAs: ['https://github.com/Bill-Bandora'],
    });
  });

  it('switches language and applies RTL for Arabic', async () => {
    renderWithProviders(<App />, '/de/');
    await userEvent.click(screen.getAllByRole('button', { name: 'AR' })[0]);
    await waitFor(() => expect(document.documentElement.lang).toBe('ar'));
    expect(document.documentElement.dir).toBe('rtl');
  });

  it('validates the contact form', async () => {
    renderWithProviders(<App />, '/de/kontakt');
    await userEvent.click(screen.getByRole('button', { name: /anfrage senden/i }));
    expect(await screen.findAllByText('Dieses Feld ist erforderlich.')).not.toHaveLength(0);
    expect(screen.getByText('Bitte beschreibe dein Projekt mit mindestens 20 Zeichen.')).toBeInTheDocument();
  });

  it('filters projects without reloading', async () => {
    renderWithProviders(<App />, '/de/projekte');
    await userEvent.click(screen.getByRole('button', { name: 'Abgeschlossen' }));
    expect(screen.getByText('Geräte-Nachverfolgung')).toBeInTheDocument();
    expect(screen.getByText('Bandora Org')).toBeInTheDocument();
    expect(screen.getByText('Bandora Gen8')).toBeInTheDocument();
    expect(screen.getByText('Bandora Studio')).toBeInTheDocument();
    expect(screen.queryByText('BuyNot')).not.toBeInTheDocument();
  });

  it('shows all projects with internal primary links', () => {
    renderWithProviders(<App />, '/de/projekte');
    expect(screen.getByRole('heading', { name: 'Bandora Org' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'IT-Geräte-Nachverfolgung mit Standort- und Statushistorie' })).toHaveAttribute('href', '/de/projekte/geraete-nachverfolgung');
    const links = screen.getAllByRole('link', { name: /Projekt ansehen/ });
    expect(links).toHaveLength(9);
    expect(links[0]).toHaveAttribute('href', '/de/projekte/bandora-org');
    for (const link of links) expect(link.getAttribute('href')).toMatch(/^\/de\/projekte\//);
    expect(screen.queryByText(/Landingpage in Vorbereitung/)).not.toBeInTheDocument();
  });

  it('renders navigation links', () => {
    renderWithProviders(<App />, '/en/');
    expect(screen.getAllByRole('link', { name: /services/i })[0]).toHaveAttribute('href', '/en/services');
    expect(screen.getAllByRole('link', { name: /projects/i })[0]).toHaveAttribute('href', '/en/projects');
    expect(screen.getAllByRole('link', { name: /blogs/i })[0]).toHaveAttribute('href', '/en/blogs');
  });

  it('renders the localized five-item mobile app navigation', () => {
    renderWithProviders(<App />, '/de/projekte');
    const navigation = screen.getByRole('navigation', { name: 'Mobile Hauptnavigation' });
    const links = within(navigation).getAllByRole('link');
    expect(links).toHaveLength(5);
    expect(within(navigation).getByRole('link', { name: 'Projekte' })).toHaveAttribute('aria-current', 'page');
    expect(within(navigation).getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '/de/blogs');
  });

  it('opens the mobile project filter as a sheet and applies a selection', async () => {
    renderWithProviders(<App />, '/de/projekte');
    await userEvent.click(screen.getByRole('button', { name: 'Filter' }));
    const dialog = screen.getByRole('dialog', { name: 'Projekte filtern' });
    await userEvent.click(within(dialog).getByRole('button', { name: 'Abgeschlossen' }));
    expect(screen.queryByRole('dialog', { name: 'Projekte filtern' })).not.toBeInTheDocument();
    expect(screen.getByText('Geräte-Nachverfolgung')).toBeInTheDocument();
    expect(screen.queryByText('BuyNot')).not.toBeInTheDocument();
  });

  it('persists a dragged contact FAB while keeping it within mobile bounds', async () => {
    localStorage.removeItem('bandora-contact-fab-position');
    renderWithProviders(<App />, '/de/');
    const fab = await screen.findByTestId('contact-fab');
    Object.defineProperty(fab, 'setPointerCapture', { value: vi.fn(), configurable: true });
    vi.spyOn(fab, 'getBoundingClientRect').mockReturnValue({ x: 300, y: 500, left: 300, top: 500, right: 356, bottom: 556, width: 56, height: 56, toJSON: () => ({}) });
    const pointer = (type: string, clientX: number, clientY: number) => {
      const event = new MouseEvent(type, { bubbles: true, button: 0, clientX, clientY });
      Object.defineProperty(event, 'pointerId', { value: 1 });
      fireEvent(fab, event);
    };
    pointer('pointerdown', 328, 528);
    pointer('pointermove', 30, 150);
    pointer('pointerup', 30, 150);
    await waitFor(() => expect(localStorage.getItem('bandora-contact-fab-position')).not.toBeNull());
    expect(JSON.parse(localStorage.getItem('bandora-contact-fab-position') ?? '{}')).toMatchObject({ side: 'left' });
  });

  it('renders the localized floating contact link', () => {
    renderWithProviders(<App />, '/en/projects');
    expect(screen.getByRole('link', { name: /Floating contact/ })).toHaveAttribute('href', '/en/contact');
  });

  it('renders the blog article', () => {
    renderWithProviders(<App />, '/de/blogs/warum-kleine-unternehmen-eine-website-brauchen');
    expect(screen.getByRole('heading', { name: /keine website/i, level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /eine website arbeitet auch nach feierabend/i })).toBeInTheDocument();
  });

  it('renders the small-business article with complete English content and links', () => {
    renderWithProviders(<App />, '/en/blogs/warum-kleine-unternehmen-eine-website-brauchen');
    expect(screen.getByRole('heading', { name: /no website\?/i, level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /keeps working after business hours/i })).toBeInTheDocument();
    expect(screen.queryByText(/eine website arbeitet/i)).not.toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /web development/i }).some((link) => link.getAttribute('href') === '/en/services/webentwicklung')).toBe(true);
    expect(screen.getByRole('link', { name: 'Send an enquiry' })).toHaveAttribute('href', '/en/contact');
  });

  it('renders the small-business article in Arabic with RTL and localized links', async () => {
    renderWithProviders(<App />, '/ar/blogs/warum-kleine-unternehmen-eine-website-brauchen');
    expect(screen.getByRole('heading', { name: /لا تملك موقعًا/, level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /يواصل الموقع العمل بعد انتهاء الدوام/ })).toBeInTheDocument();
    expect(screen.queryByText(/eine website arbeitet/i)).not.toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /تطوير الويب/ }).some((link) => link.getAttribute('href') === '/ar/services/webentwicklung')).toBe(true);
    expect(screen.getByRole('link', { name: 'أرسل استفسارك' })).toHaveAttribute('href', '/ar/contact');
    await waitFor(() => expect(document.documentElement.dir).toBe('rtl'));
  });

  it('renders a P1 guide with useful structure and contextual links', () => {
    renderWithProviders(<App />, '/de/blogs/website-erstellen-lassen-kosten-2026');
    expect(screen.getByRole('heading', { name: /website erstellen lassen: kosten 2026/i, level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Inhaltsübersicht' })).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /webdesign/i }).some((link) => link.getAttribute('href') === '/de/leistungen/webdesign')).toBe(true);
    expect(screen.getByRole('heading', { name: 'Häufige Fragen' })).toBeInTheDocument();
  });

  it('adds a transparent three-year cost model to the provider comparison', () => {
    renderWithProviders(<App />, '/de/blogs/webdesigner-freelancer-oder-agentur');
    expect(screen.getByRole('heading', { name: 'Drei Jahre Betrieb: Warum der Startpreis allein nicht reicht' })).toBeInTheDocument();
    expect(screen.getByRole('table', { name: 'Beispielrechnung mit Kostenindex (keine Europreise)' })).toBeInTheDocument();
    expect(screen.getByText('Gesamtindex nach 3 Jahren')).toBeInTheDocument();
  });

  it('does not expose German-only P1 articles in English', () => {
    renderWithProviders(<App />, '/en/blogs');
    expect(screen.getByRole('heading', { name: 'Blogs', level: 1 })).toBeInTheDocument();
    expect(screen.queryByText(/Kosten 2026/)).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /no website/i })).toBeInTheDocument();
  });

  it('switches the blog overview between grid and list with keyboard-accessible controls', async () => {
    renderWithProviders(<App />, '/de/blogs');
    const gridButton = screen.getByRole('button', { name: 'Kartenansicht' });
    const listButton = screen.getByRole('button', { name: 'Listenansicht' });
    const results = document.getElementById('blog-results');
    expect(gridButton).toHaveAttribute('aria-pressed', 'true');
    expect(listButton).toHaveAttribute('aria-pressed', 'false');
    expect(results).toHaveAttribute('data-view', 'grid');
    expect(within(results as HTMLElement).getAllByRole('article')).toHaveLength(7);

    listButton.focus();
    await userEvent.keyboard('{Enter}');
    expect(listButton).toHaveAttribute('aria-pressed', 'true');
    expect(results).toHaveAttribute('data-view', 'list');
    expect(localStorage.getItem('bandora-blog-view')).toBe('list');
  });

  it('restores the saved blog view and localizes the switcher for RTL', async () => {
    localStorage.setItem('bandora-blog-view', 'list');
    renderWithProviders(<App />, '/ar/blogs');
    await waitFor(() => expect(document.documentElement.dir).toBe('rtl'));
    expect(screen.getByRole('button', { name: 'عرض البطاقات' })).toHaveAttribute('aria-pressed', 'false');
    expect(screen.getByRole('button', { name: 'عرض القائمة' })).toHaveAttribute('aria-pressed', 'true');
    expect(document.getElementById('blog-results')).toHaveAttribute('data-view', 'list');
  });

  it('renders a service detail page with related projects and contact CTA', () => {
    renderWithProviders(<App />, '/de/leistungen/webentwicklung');
    expect(screen.getByRole('heading', { name: 'Individuelle Webentwicklung in Berlin', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Typische Anwendungsfälle' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Geräte-Nachverfolgung/ })).toHaveAttribute('href', '/de/projekte/geraete-nachverfolgung');
    expect(screen.getByRole('link', { name: 'Projekt besprechen' })).toHaveAttribute('href', '/de/kontakt');
    expect(screen.getByRole('heading', { name: 'Ratgeber für Ihr Website-Projekt' })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /Ratgeber lesen/ })).toHaveLength(6);
  });

  it('separates the Berlin web design intent from custom web development', async () => {
    renderWithProviders(<App />, '/de/leistungen/webdesign');
    expect(screen.getByRole('heading', { name: 'Webdesign und Website-Erstellung in Berlin', level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Webdesign oder Webentwicklung?' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Individuelle Webentwicklung in Berlin' })).toHaveAttribute('href', '/de/leistungen/webentwicklung');
    await waitFor(() => expect(document.title).toBe('Webdesign Berlin: professionelle Websites | Bandora'));
  });

  it('runs the device-tracking mock demo without external data', async () => {
    renderWithProviders(<App />, '/de/projekte/geraete-nachverfolgung');
    expect(screen.getByRole('heading', { name: 'Nachvollziehbarer Ablauf im MVP' })).toBeInTheDocument();
    expect(screen.getByText('Jede Änderung in der Historie festhalten; fehlerhafte Vorgänge werden zurückgerollt.')).toBeInTheDocument();
    await userEvent.type(screen.getByLabelText('Inventarnummer, z. B. INV-1042'), 'INV-1042');
    await userEvent.click(screen.getByRole('button', { name: 'Gerät suchen' }));
    expect(screen.getByText(/Gerät gefunden: INV-1042/)).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Mitarbeiter zuweisen' }));
    expect(screen.getByText('Mitarbeiter zugewiesen')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Fehler & Rollback simulieren' }));
    expect(screen.getByText('Fehler erkannt · Änderung zurückgerollt')).toBeInTheDocument();
  });

  it('builds mailto fallback', () => {
    const href = buildMailto({
      name: 'Bilal',
      email: 'test@example.com',
      company: '',
      projectType: 'Mobile App',
      timeline: '',
      budget: '',
      message: 'Das ist eine ausreichend lange Projektbeschreibung.',
      privacy: true,
      website: '',
      startedAt: Date.now(),
    });
    expect(href).toContain('mailto:albadawi335@gmail.com');
    expect(href).toContain('Projektanfrage');
  });

  it('renders localized 404 page', () => {
    renderWithProviders(<App />, '/de/nicht-vorhanden');
    expect(screen.getByRole('heading', { name: 'Seite nicht gefunden' })).toBeInTheDocument();
  });
});
