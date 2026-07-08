import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import type { ReactNode } from 'react';
import '../i18n';

export function renderWithProviders(ui: ReactNode, path = '/de/') {
  window.history.pushState({}, '', path);
  return render(
    <HelmetProvider>
      <BrowserRouter>{ui}</BrowserRouter>
    </HelmetProvider>,
  );
}
