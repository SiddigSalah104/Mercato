import { useState } from 'react'
import { restaurant } from '../data/restaurant'
import { useLanguage } from '../translations/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import './Header.css'

// The site's navigation links ("key" points to the translated text).
// In Phase 3 these links will open real pages (with React Router).
const links = [
  { href: '/menu', key: 'nav.menu' },
  { href: '/reservations', key: 'nav.reservations' },
  { href: '/commander', key: 'nav.order' },
  { href: '/a-propos', key: 'nav.about' },
  { href: '/contact', key: 'nav.contact' },
]

export default function Header() {
  const { t } = useLanguage()
  // Mobile menu: open (true) or closed (false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="/" className="logo" aria-label={`${restaurant.fullName}, ${t('nav.home')}`}>
          <span className="logo-name">Mercato</span>
          <span className="logo-tag">Ethiopian Restaurant</span>
        </a>

        <div className="header-actions">
          <LanguageSwitcher />

          {/* Hamburger button, visible on phones only */}
          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">{t('nav.openMenu')}</span>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>

        <nav id="main-nav" className={menuOpen ? 'nav open' : 'nav'}>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{t(link.key)}</a>
              </li>
            ))}
          </ul>
          <a href="/reservations" className="btn btn-primary nav-cta">
            {t('common.reserve')}
          </a>
        </nav>
      </div>
      <div className="tibeb" />
    </header>
  )
}
