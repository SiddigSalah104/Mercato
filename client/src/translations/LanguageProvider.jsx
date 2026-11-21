import { useEffect, useState } from 'react'
import { LanguageContext, languages, defaultLanguage } from './LanguageContext'

const STORAGE_KEY = 'mercato-language'

// Reads the language saved in the browser (if any).
// try/catch: some browsers (private browsing) block this storage.
function getSavedLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && languages[saved]) return saved
  } catch {
    // storage unavailable: fall back to the default language
  }
  return defaultLanguage
}

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getSavedLanguage)

  // Runs on every language change
  useEffect(() => {
    // Tells the browser (and Google) which language the page is in
    document.documentElement.lang = language
    try {
      localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // never mind: the choice just won't be remembered
    }
  }, [language])

  // t('home.welcome') walks down into the current language's file.
  // If a key is missing, it falls back to French, then to the key itself
  // (which makes a forgotten translation easy to spot).
  function t(key) {
    const find = (dictionary) =>
      key.split('.').reduce((value, part) => value?.[part], dictionary)
    return find(languages[language]) ?? find(languages[defaultLanguage]) ?? key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
