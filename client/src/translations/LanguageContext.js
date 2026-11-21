import { createContext, useContext } from 'react'
import fr from './fr'
import en from './en'

// List of available languages.
// To add a language later: create its file (e.g. de.js) and add it here.
export const languages = { fr, en }
export const defaultLanguage = 'fr'

// The "context" lets every component know the current language
// without passing it down by hand from component to component.
export const LanguageContext = createContext(null)

// Hook used in the components:
//   const { t, language, setLanguage } = useLanguage()
//   t('home.welcome')  →  "Bienvenue chez" or "Welcome to"
export function useLanguage() {
  return useContext(LanguageContext)
}
