import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.jsx'
import LanguageProvider from './translations/LanguageProvider'

// LanguageProvider wraps the whole site: every component can
// then find out the current language and the matching texts.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
