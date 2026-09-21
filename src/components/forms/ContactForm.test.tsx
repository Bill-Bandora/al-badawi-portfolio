import { screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ContactForm } from './ContactForm';
import { renderWithProviders } from '../../test/render';

vi.mock('../../config/site', async (original) => {
  const actual = await original<typeof import('../../config/site')>();
  return { ...actual, siteConfig: { ...actual.siteConfig, contactMode: 'php' } };
});

afterEach(() => vi.unstubAllGlobals());

describe('runtime contact configuration', () => {
  it('shows mailto instructions when SMTP is absent', async () => {
    const fetch = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ mode: 'mailto' }) });
    vi.stubGlobal('fetch', fetch);
    renderWithProviders(<ContactForm />);
    await waitFor(() => expect(fetch).toHaveBeenCalledWith('/api/contact-config.php', { cache: 'no-store' }));
    expect(screen.getByText(/lokales E-Mail-Programm/)).toBeInTheDocument();
  });
  it('uses server submission when SMTP is available', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, json: async () => ({ mode: 'php' }) }));
    renderWithProviders(<ContactForm />);
    await waitFor(() => expect(screen.queryByText(/lokales E-Mail-Programm/)).not.toBeInTheDocument());
  });
  it('retains the fallback on configuration fetch failure', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')));
    renderWithProviders(<ContactForm />);
    await waitFor(() => expect(screen.getByText(/lokales E-Mail-Programm/)).toBeInTheDocument());
  });
});
