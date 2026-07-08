import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';
import { renderWithProviders } from './test/render';
import { buildMailto } from './utils/contact';

describe('portfolio app', () => {
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
    expect(screen.queryByText('BuyNot')).not.toBeInTheDocument();
  });

  it('keeps external landing pages disabled until live', () => {
    renderWithProviders(<App />, '/de/projekte');
    expect(screen.getAllByText('Landingpage in Vorbereitung')).toHaveLength(3);
  });

  it('renders navigation links', () => {
    renderWithProviders(<App />, '/en/');
    expect(screen.getAllByRole('link', { name: /services/i })[0]).toHaveAttribute('href', '/en/services');
    expect(screen.getAllByRole('link', { name: /projects/i })[0]).toHaveAttribute('href', '/en/projects');
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
