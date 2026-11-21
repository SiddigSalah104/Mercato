// French texts for the site.
// Each key (e.g. "nav.menu") must exist in every language file.
export default {
  meta: {
    languageName: 'Français',
  },
  common: {
    cuisine: 'Cuisine éthiopienne',
    hours: 'Tous les jours · 11h30 – 23h00',
    reserve: 'Réserver',
    order: 'Commander',
  },
  nav: {
    menu: 'Menu',
    reservations: 'Réservations',
    order: 'Commander',
    about: 'À propos',
    contact: 'Contact',
    openMenu: 'Ouvrir le menu',
    home: 'accueil',
    chooseLanguage: 'Choisir la langue',
  },
  home: {
    welcome: 'Bienvenue chez',
    lead: 'Les saveurs de l’Éthiopie au cœur de Genève, à deux pas de la gare Cornavin.',
    reserveTable: 'Réserver une table',
    seeMenu: 'Voir le menu',
    practicalInfo: 'Informations pratiques',
    hoursLabel: 'Horaires',
    addressLabel: 'Adresse',
    phoneLabel: 'Téléphone',
    ourCuisine: 'Notre cuisine',
    sharedTable: 'Une table à partager',
    // PLACEHOLDER CONTENT: to be replaced by the restaurant's texts
    highlights: [
      {
        title: 'Le partage',
        text: 'Les plats sont servis ensemble sur un grand plateau d’injera, à partager à la main, comme en Éthiopie.',
      },
      {
        title: 'Les classiques',
        text: 'Doro wot, tibs, kitfo… des recettes traditionnelles aux épices berbéré.',
      },
      {
        title: 'Végétarien & vegan',
        text: 'Shiro, misir, alicha : une large sélection de plats sans viande.',
      },
    ],
    ctaTitle: 'Envie de goûter ?',
    ctaText: 'Réservez votre table ou commandez à emporter.',
  },
  footer: {
    inGeneva: 'à Genève.',
    address: 'Adresse',
    hours: 'Horaires',
    followUs: 'Suivez-nous',
  },
}
