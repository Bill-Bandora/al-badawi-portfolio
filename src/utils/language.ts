import { defaultLanguage, languages, type LanguageCode } from '../config/site';

export function languageFromBrowser(): LanguageCode {
  const browser = navigator.language.slice(0, 2);
  return languages.some((item) => item.code === browser) ? (browser as LanguageCode) : defaultLanguage;
}

export function localized<T extends Record<LanguageCode, string>>(value: T, lang: string): string {
  return value[(lang as LanguageCode) || defaultLanguage] ?? value.de;
}
