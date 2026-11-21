import { restaurant } from '../data/restaurant'
import { useLanguage } from '../translations/LanguageContext'
import './Home.css'

// Accent colour for each card (in order: green, yellow, red)
const cardColors = ['green', 'yellow', 'red']

export default function Home() {
  const { t } = useLanguage()

  return (
    <>
      {/* ---------- Hero section ---------- */}
      <section className="hero">
        <div className="container hero-inner">
          <span className="eyebrow hero-eyebrow">{t('common.cuisine')}</span>
          <h1>
            {t('home.welcome')} <span className="hero-name">Mercato</span>
          </h1>
          <p className="hero-lead">{t('home.lead')}</p>
          <div className="hero-actions">
            <a href="/reservations" className="btn btn-primary">
              {t('home.reserveTable')}
            </a>
            <a href="/menu" className="btn btn-outline">
              {t('home.seeMenu')}
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Practical info strip ---------- */}
      <section className="info-strip" aria-label={t('home.practicalInfo')}>
        <div className="container info-grid">
          <div>
            <span className="info-label">{t('home.hoursLabel')}</span>
            <span>{t('common.hours')}</span>
          </div>
          <div>
            <span className="info-label">{t('home.addressLabel')}</span>
            <a href={restaurant.address.mapsUrl} target="_blank" rel="noreferrer">
              {restaurant.address.street}, {restaurant.address.city}
            </a>
          </div>
          <div>
            <span className="info-label">{t('home.phoneLabel')}</span>
            <a href={restaurant.phone.href}>{restaurant.phone.display}</a>
          </div>
        </div>
      </section>

      {/* ---------- Highlights ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t('home.ourCuisine')}</span>
            <h2>{t('home.sharedTable')}</h2>
          </div>
          <div className="cards">
            {t('home.highlights').map((item, i) => (
              <article key={item.title} className={`card card-${cardColors[i]}`}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Call to action ---------- */}
      <section className="container">
        <div className="cta">
          <h2>{t('home.ctaTitle')}</h2>
          <p>{t('home.ctaText')}</p>
          <div className="hero-actions">
            <a href="/reservations" className="btn btn-primary">
              {t('common.reserve')}
            </a>
            <a href="/commander" className="btn btn-outline">
              {t('common.order')}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
