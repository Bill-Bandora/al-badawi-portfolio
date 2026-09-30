import { Component, type ReactNode } from 'react';

export class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="mx-auto max-w-3xl px-6 py-24 text-white">
          <h1 className="text-3xl font-semibold">Die Seite konnte nicht geladen werden.</h1>
          <p className="mt-4 text-slate-300">Bitte lade die Seite neu oder kontaktiere Bilal Al-Badawi per E-Mail.</p>
        </main>
      );
    }
    return this.props.children;
  }
}
