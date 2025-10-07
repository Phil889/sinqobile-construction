import { Locale } from '../i18n.config'

export const languages = {
  en: { name: 'English', flag: '🇺🇸' },
  af: { name: 'Afrikaans', flag: '🇿🇦' },
  zu: { name: 'isiZulu', flag: '🇿🇦' },
  st: { name: 'Sesotho', flag: '🇿🇦' },
}

export function getLanguageFromLocale(locale: Locale) {
  return languages[locale] || languages.en
}