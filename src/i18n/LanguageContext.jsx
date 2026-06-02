import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import uk from './translations/uk.js'
import ru from './translations/ru.js'
import en from './translations/en.js'
import { personalInfo } from '../data/projects.js'

export const SUPPORTED_LANGUAGES = [
  { code: 'uk', label: 'Українська', short: 'UA' },
  { code: 'ru', label: 'Русский',    short: 'RU' },
  { code: 'en', label: 'English',    short: 'EN' },
]

const STORAGE_KEY = 'portfolio.lang'
const DEFAULT_LANG = 'uk'

const translations = { uk, ru, en }

function detectInitialLang() {
  if (typeof window === 'undefined') return DEFAULT_LANG
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored && translations[stored]) return stored
  const browser = (window.navigator.language || '').toLowerCase()
  if (browser.startsWith('uk')) return 'uk'
  return DEFAULT_LANG
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitialLang)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
    document.title = `${personalInfo.name} — ${translations[lang].meta.title}`
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', translations[lang].meta.description)
  }, [lang])

  const value = useMemo(() => {
    const t = (key, vars) => interpolate(translations[lang], key, vars)
    return { lang, setLang, t, supported: SUPPORTED_LANGUAGES }
  }, [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}

export function useTranslation() {
  const { t, lang } = useLanguage()
  return { t, lang }
}

function interpolate(dict, key, vars) {
  const value = key.split('.').reduce((acc, k) => (acc == null ? acc : acc[k]), dict)
  if (typeof value !== 'string') return key
  if (!vars) return value
  return value.replace(/\{(\w+)\}/g, (_, name) => (name in vars ? vars[name] : `{${name}}`))
}
