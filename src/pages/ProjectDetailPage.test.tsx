import { screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import App from '../App';
import { renderWithProviders } from '../test/render';
import { projects } from '../data/projects';

describe('project landing pages', () => {
  for (const lang of ['de', 'en', 'ar']) {
    for (const project of projects) {
      const path = `/${lang}/${lang === 'de' ? 'projekte' : 'projects'}/${project.slug}`;
      it(`renders ${path} with localized navigation and project sections`, async () => {
        renderWithProviders(<App />, path);
        expect(screen.getByRole('heading', { level: 1, name: project.title })).toBeInTheDocument();
        await waitFor(() => expect(document.documentElement.lang).toBe(lang));
        expect(document.documentElement.dir).toBe(lang === 'ar' ? 'rtl' : 'ltr');
        const main = screen.getByRole('main');
        expect(within(main).getAllByRole('heading', { level: 2 }).length).toBeGreaterThanOrEqual(7);
        expect(main.querySelector(`a[href="/${lang}/${lang === 'de' ? 'kontakt' : 'contact'}"]`)).not.toBeNull();
        expect(main.querySelector(`nav a[href="/${lang}/${lang === 'de' ? 'projekte' : 'projects'}"]`)).not.toBeNull();
        expect(main.querySelector('a[target="_blank"]')).toBeNull();
      });
    }
  }
  it('keeps Bandora planned capabilities separate and does not invent a technology stack', () => {
    renderWithProviders(<App />, '/de/projekte/bandora-org');
    expect(screen.getAllByText('Geplant')).toHaveLength(5);
    expect(screen.getByText('Automatisch erzeugte Wochenblätter')).toBeInTheDocument();
    expect(screen.queryByText('Electron')).not.toBeInTheDocument();
  });
  it('switches the mobile problem/solution segment without removing either text from the DOM', async () => {
    renderWithProviders(<App />, '/de/projekte/bandora-org');
    const solution = screen.getByRole('tab', { name: 'Lösung' });
    expect(solution).toHaveAttribute('aria-selected', 'false');
    await userEvent.click(solution);
    expect(solution).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Teilnehmerdaten, Termine und ihre Dokumentation müssen zusammen nachvollziehbar bleiben. Gleichzeitig darf ein nicht erreichbarer Updateserver die tägliche Arbeit nicht unterbrechen.')).toBeInTheDocument();
  });
  it('renders a localized not-found page for an unknown project without redirecting', () => {
    renderWithProviders(<App />, '/de/projekte/does-not-exist');
    expect(screen.getByRole('heading', { name: 'Seite nicht gefunden' })).toBeInTheDocument();
    expect(window.location.pathname).toBe('/de/projekte/does-not-exist');
  });
});
