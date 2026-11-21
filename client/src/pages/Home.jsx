import { restaurant } from '../data/restaurant'
import './Home.css'

// PLACEHOLDER CONTENT: the texts below are temporary.
// They will be replaced by the restaurant's real texts and photos
// once they are validated.
const highlights = [
  {
    title: 'Le partage',
    text: 'Les plats sont servis ensemble sur un grand plateau d’injera, à partager à la main, comme en Éthiopie.',
    color: 'green',
  },
  {
    title: 'Les classiques',
    text: 'Doro wot, tibs, kitfo… des recettes traditionnelles aux épices berbéré.',
    color: 'yellow',
  },
  {
    title: 'Végétarien & vegan',
    text: 'Shiro, misir, alicha : une large sélection de plats sans viande.',
    color: 'red',
  },
]

export default function Home() {
  return (
    <>
      {/* ---------- Hero section ---------- */}
      <section className="hero">
        <div className="container hero-inner">
          <span className="eyebrow hero-eyebrow">{restaurant.cuisine}</span>
          <h1>
            Bienvenue chez <span className="hero-name">Mercato</span>
          </h1>
          <p className="hero-lead">
            Les saveurs de l’Éthiopie au cœur de Genève, à deux pas de la gare
            Cornavin.
          </p>
          <div className="hero-actions">
            <a href="/reservations" className="btn btn-primary">
              Réserver une table
            </a>
            <a href="/menu" className="btn btn-outline">
              Voir le menu
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Practical info strip ---------- */}
      <section className="info-strip" aria-label="Informations pratiques">
        <div className="container info-grid">
          <div>
            <span className="info-label">Horaires</span>
            <span>{restaurant.hours.summary}</span>
          </div>
          <div>
            <span className="info-label">Adresse</span>
            <a href={restaurant.address.mapsUrl} target="_blank" rel="noreferrer">
              {restaurant.address.street}, {restaurant.address.city}
            </a>
          </div>
          <div>
            <span className="info-label">Téléphone</span>
            <a href={restaurant.phone.href}>{restaurant.phone.display}</a>
          </div>
        </div>
      </section>

      {/* ---------- Highlights ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Notre cuisine</span>
            <h2>Une table à partager</h2>
          </div>
          <div className="cards">
            {highlights.map((item) => (
              <article key={item.title} className={`card card-${item.color}`}>
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
          <h2>Envie de goûter ?</h2>
          <p>Réservez votre table ou commandez à emporter.</p>
          <div className="hero-actions">
            <a href="/reservations" className="btn btn-primary">
              Réserver
            </a>
            <a href="/commander" className="btn btn-outline">
              Commander
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
