export const defaultLanguage = 'de';
export const languages = [
  { code: 'de', label: 'Deutsch', short: 'DE' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ar', label: 'العربية', short: 'AR' },
] as const;

export type LanguageCode = (typeof languages)[number]['code'];

export const siteConfig = {
  brandName: 'Bandora Development',
  shortBrand: 'Bandora',
  developerName: 'Bilal Al-Badawi',
  domain: 'https://bandora-dev.de',
  email: 'albadawi335@gmail.com',
  githubUrl: 'https://github.com/Bill-Bandora?tab=repositories',
  contactMode: import.meta.env.VITE_CONTACT_MODE ?? 'mailto',
};

export const routeMap = {
  home: { key: 'home', paths: { de: '', en: '', ar: '' } },
  services: { key: 'services', paths: { de: 'leistungen', en: 'services', ar: 'services' } },
  projects: { key: 'projects', paths: { de: 'projekte', en: 'projects', ar: 'projects' } },
  blogs: { key: 'blogs', paths: { de: 'blogs', en: 'blogs', ar: 'blogs' } },
  about: { key: 'about', paths: { de: 'ueber-mich', en: 'about', ar: 'about' } },
  contact: { key: 'contact', paths: { de: 'kontakt', en: 'contact', ar: 'contact' } },
  imprint: { key: 'imprint', paths: { de: 'impressum', en: 'imprint', ar: 'imprint' } },
  privacy: { key: 'privacy', paths: { de: 'datenschutz', en: 'privacy', ar: 'privacy' } },
} as const;

export const navItems = [
  routeMap.home,
  routeMap.services,
  routeMap.projects,
  routeMap.blogs,
  routeMap.about,
  routeMap.contact,
] as const;

export function routePath(key: keyof typeof routeMap, lang: string = defaultLanguage) {
  const language = languages.some((item) => item.code === lang) ? (lang as LanguageCode) : defaultLanguage;
  return routeMap[key].paths[language];
}

export function localizedUrl(key: keyof typeof routeMap, lang: string = defaultLanguage) {
  const path = routePath(key, lang);
  return `/${lang}/${path}`.replace(/\/$/, '/');
}
