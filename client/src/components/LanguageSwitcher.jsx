import { languages, useLanguage } from '../translations/LanguageContext'
import './LanguageSwitcher.css'

// FR | EN buttons for changing the language
export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="lang-switcher" role="group" aria-label={t('nav.chooseLanguage')}>
      {Object.keys(languages).map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          className={code === language ? 'active' : ''}
          aria-pressed={code === language}
          title={languages[code].meta.languageName}
          onClick={() => setLanguage(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
