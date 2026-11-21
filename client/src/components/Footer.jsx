import { restaurant } from '../data/restaurant'
import './Footer.css'

// Computed once when the site loads, outside the component
const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="tibeb" />
      <div className="container footer-grid">
        <div>
          <p className="footer-logo">Mercato</p>
          <p className="footer-muted">{restaurant.cuisine} à Genève.</p>
        </div>

        <div>
          <h3>Adresse</h3>
          <p>
            <a href={restaurant.address.mapsUrl} target="_blank" rel="noreferrer">
              {restaurant.address.street}
              <br />
              {restaurant.address.city}
            </a>
          </p>
        </div>

        <div>
          <h3>Horaires</h3>
          <p>{restaurant.hours.summary}</p>
          <p>
            <a href={restaurant.phone.href}>{restaurant.phone.display}</a>
          </p>
        </div>

        <div>
          <h3>Suivez-nous</h3>
          <ul className="footer-social">
            <li>
              <a href={restaurant.social.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href={restaurant.social.tiktok} target="_blank" rel="noreferrer">
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        © {year} {restaurant.fullName}
      </div>
    </footer>
  )
}
