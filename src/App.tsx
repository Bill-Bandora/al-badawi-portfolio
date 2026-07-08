import { Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Layout } from './layouts/Layout';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { defaultLanguage, languages, routeMap } from './config/site';
import { languageFromBrowser } from './utils/language';

function RootRedirect() {
  const stored = localStorage.getItem('language');
  const lang = languages.some((item) => item.code === stored) ? stored : languageFromBrowser();
  return <Navigate to={`/${lang}/`} replace />;
}

function LanguageGate() {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const location = useLocation();
  const validLang = languages.some((item) => item.code === lang);

  useEffect(() => {
    if (validLang && lang) {
      void i18n.changeLanguage(lang);
      localStorage.setItem('language', lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  }, [i18n, lang, validLang]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  if (!validLang) {
    return <Navigate to={`/${defaultLanguage}/`} replace />;
  }

  return <Layout />;
}

export default function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/:lang" element={<LanguageGate />}>
          <Route index element={<HomePage />} />
          {Object.values(routeMap.services.paths).map((path) => (
            <Route key={path} path={path} element={<ServicesPage />} />
          ))}
          {Object.values(routeMap.projects.paths).map((path) => (
            <Route key={path} path={path} element={<ProjectsPage />} />
          ))}
          {Object.values(routeMap.projects.paths).map((path) => (
            <Route key={`${path}-detail`} path={`${path}/:slug`} element={<ProjectDetailPage />} />
          ))}
          {Object.values(routeMap.about.paths).map((path) => (
            <Route key={path} path={path} element={<AboutPage />} />
          ))}
          {Object.values(routeMap.contact.paths).map((path) => (
            <Route key={path} path={path} element={<ContactPage />} />
          ))}
          {Object.values(routeMap.imprint.paths).map((path) => (
            <Route key={path} path={path} element={<LegalPage type="imprint" />} />
          ))}
          {Object.values(routeMap.privacy.paths).map((path) => (
            <Route key={path} path={path} element={<LegalPage type="privacy" />} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}
