import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import de from '../locales/de.json';
import en from '../locales/en.json';
import ar from '../locales/ar.json';
import { defaultLanguage } from '../config/site';

i18n.use(initReactI18next).init({
  resources: {
    de: { translation: de },
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: defaultLanguage,
  fallbackLng: defaultLanguage,
  interpolation: { escapeValue: false },
  returnEmptyString: false,
});

export default i18n;
