import 'server-only'
import type { Locale } from '../i18n.config'

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  af: () => import('../dictionaries/af.json').then((module) => module.default),
  zu: () => import('../dictionaries/zu.json').then((module) => module.default),
  st: () => import('../dictionaries/st.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en()