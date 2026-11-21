import { useState } from 'react'
import { restaurant } from '../data/restaurant'
import './Header.css'

// The site's navigation links.
// In Phase 3 these links will open real pages (with React Router).
const links = [
  { href: '/menu', label: 'Menu' },
  { href: '/reservations', label: 'Réservations' },
  { href: '/commander', label: 'Commander' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  // Mobile menu: open (true) or closed (false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="/" className="logo" aria-label={`${restaurant.fullName}, accueil`}>
          <span className="logo-name">Mercato</span>
          <span className="logo-tag">Ethiopian Restaurant</span>
        </a>

        {/* Hamburger button, visible on phones only */}
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Ouvrir le menu</span>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav id="main-nav" className={menuOpen ? 'nav open' : 'nav'}>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <a href="/reservations" className="btn btn-primary nav-cta">
            Réserver
          </a>
        </nav>
      </div>
      <div className="tibeb" />
    </header>
  )
}
