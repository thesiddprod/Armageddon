// ========================================
// 🏛️ ARMAGEDDON - CONFIGURATION COMPLÈTE
// ========================================
// 
// BASE DE DONNÉES DU SITE
// Contient TOUTES les vraies données : business + contenu
// Un seul import pour tout le site !

export const config = {
  // ==========================================
  // 🏢 INFORMATIONS GÉNÉRALES
  // ==========================================
  business: {
    name: "Armageddon",
    tagline: "We're never going out of style.",
    description: "Découvrez l'excellence de nos services de coiffure et esthétique dans un cadre moderne et relaxant. Notre équipe d'experts vous accompagne pour sublimer votre style unique.",
    foundedYear: 2010,
    slogan: "Excellence, créativité et bien-être au cœur de nos services.",
    logo: "",
    // Variations de logo (centralisées, data-only)
    logos: {
      base: {
        horizontal: "base/armageddon-logo.png",
        square: ""
      },
      monochrome: {
        horizontal: "monochrome/armageddon-logo.png",
        square: ""
      },
      light: {
        horizontal: "light/armageddon-logo.png",
        square: ""
      },
      favicon: "logos/favicon/favicon.ico"
    }
  },

  // ==========================================
  // 📍 COORDONNÉES & CONTACT
  // ==========================================
  contact: {
    address: {
      street: "123 Rue de la Beauté",
      city: "Paris",
      postalCode: "75001",
      country: "France",
      full: "123 Rue de la Beauté, 75001 Paris"
    },
    phone: "01 23 45 67 89",
    email: "contact@salon-elegance.fr",
    website: "www.salon-elegance.fr"
  },

  // ==========================================
  // 🕒 HORAIRES D'OUVERTURE
  // ==========================================
  hours: {
    monday: { open: "09:00", close: "19:00", closed: false },
    tuesday: { open: "09:00", close: "19:00", closed: false },
    wednesday: { open: "09:00", close: "19:00", closed: false },
    thursday: { open: "09:00", close: "19:00", closed: false },
    friday: { open: "09:00", close: "19:00", closed: false },
    saturday: { open: "09:00", close: "18:00", closed: false },
    sunday: { open: null, close: null, closed: true },
    
    // Format d'affichage
    display: {
      weekdays: "Lun - Ven: 9h - 19h",
      saturday: "Samedi: 9h - 18h",
      sunday: "Dimanche: Fermé"
    }
  },

  // ==========================================
  // 💼 SERVICES & TARIFS
  // ==========================================
  services: [
    {
      category: "Coiffure Classique",
      icon: "✂️",
      description: "Coupes et coiffages pour tous",
      items: [
        { name: "Coupe Femme", price: 55 },
        { name: "Coupe Homme", price: 35 },
        { name: "Coupe Enfant", price: 25 },
        { name: "Brushing", price: 30 }
      ]
    },
    {
      category: "Coloration & Soins",
      icon: "🎨", 
      description: "Couleurs et traitements capillaires",
      items: [
        { name: "Coloration", price: 75 },
        { name: "Mèches", price: 95 },
        { name: "Balayage", price: 110 },
        { name: "Soin capillaire", price: 35 }
      ]
    },
    {
      category: "Esthétique & Beauté",
      icon: "💅",
      description: "Soins du visage et beauté", 
      items: [
        { name: "Soin du visage", price: 65 },
        { name: "Manucure", price: 35 },
        { name: "Pédicure", price: 45 },
        { name: "Épilation sourcils", price: 20 }
      ]
    },
    {
      category: "Forfaits Détente",
      icon: "🌸",
      description: "Packages bien-être complets",
      items: [
        { name: "Forfait Beauté", price: 120 },
        { name: "Forfait Mariée", price: 180 },
        { name: "Forfait Détente", price: 95 },
        { name: "Forfait Découverte", price: 75 }
      ]
    }
  ],

  // ==========================================
  // 👥 ÉQUIPE
  // ==========================================
  team: [
    {
      name: "Sophie Martin",
      role: "Directrice & Coiffeuse",
      specialties: ["Coupe", "Coloration", "Balayage"],
      experience: "15 ans"
    },
    {
      name: "Julie Dubois",
      role: "Esthéticienne",
      specialties: ["Soins du visage", "Manucure", "Extension cils"],
      experience: "8 ans"
    },
    {
      name: "Marie Leroy",
      role: "Masseuse",
      specialties: ["Massage relaxant", "Réflexologie", "Pierres chaudes"],
      experience: "12 ans"
    }
  ],

  // ==========================================
  // 🌐 RÉSEAUX SOCIAUX
  // ==========================================
  social: {
    facebook: "https://facebook.com/salon-elegance",
    instagram: "https://instagram.com/salon_elegance",
    tiktok: "https://tiktok.com/@salon.elegance",
    google: "https://g.page/salon-elegance",
    x: "https://x.com/salon-elegance",
  },

  // ==========================================
  // 🧭 NAVIGATION - Liens du site
  // ==========================================
  navigation: [
    { label: "Accueil", href: "#accueil" },
    { label: "Services", href: "#services" },
    { label: "Équipe", href: "#equipe" },
    { label: "Contact", href: "#contact" }
  ],

  // ==========================================
  // 🦶 FOOTER - Contenu des liens
  // ==========================================
  footer: {
    description: "", // Si vide, utilise business.description
    
    // Sections de liens
    sections: [
      {
        title: "Services",
        links: [
          { label: "Coiffure", href: "#coiffure" },
          { label: "Coloration", href: "#coloration" },
          { label: "Soins", href: "#soins" }
        ]
      },
      {
        title: "Salon",
        links: [
          { label: "À propos", href: "#about" },
          { label: "Équipe", href: "#equipe" },
          { label: "Avis", href: "#avis" }
        ]
      }
    ],
    // Mentions légales
    legal: [
      { label: "Mentions légales", href: "#mentions" },
      { label: "Confidentialité", href: "#confidentialite" },
      { label: "CGV", href: "#cgv" }
    ]
  },

  // ==========================================
  // 🤖 CALL-TO-ACTION
  // ==========================================
  cta: {
    text: "Réserver",
    href: "#reservation"
  },

  // ==========================================
  // 🎨 DESIGN TECHNIQUE - Polices uniquement
  // ==========================================
  // (Séparé car ne peut pas être importé dans theme.css)
  design: {
    fonts: {
      // Définitions des polices par rôle (source unique de vérité)
      definitions: {
        brand: {
          // Utilisée pour le logo/branding uniquement
          name: "Libre Baskerville",
          fallback: "serif",
          cssVar: "--font-brand",
          googleUrl: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
        },
        heading: {
          // Titres H1/H2/H3 etc.
          name: "Inter", 
          fallback: "sans-serif",
          cssVar: "--font-heading",
          googleUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        },
        body: {
          // Texte courant / paragraphes / boutons
          name: "Libre Baskerville",
          fallback: "serif",
          cssVar: "--font-body",
          googleUrl: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
        },
        mono: {
          // Code / chiffres / UI techniques
          name: "Fira Code",
          fallback: "monospace", 
          cssVar: "--font-mono",
          googleUrl: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap"
        }
      },
      
      // Fonctions utilitaires
      getGoogleFontsUrls() {
        return Object.values(this.definitions).map(font => font.googleUrl);
      },
      
      getCSSVariables() {
        const vars = {};
        Object.entries(this.definitions).forEach(([key, font]) => {
          vars[font.cssVar] = `'${font.name}', ${font.fallback}`;
        });
        return vars;
      },
      
      getInlineRootVars() {
        return Object.values(this.definitions)
          .map(font => `${font.cssVar}: '${font.name}', ${font.fallback};`)
          .join(' ');
      },
      
      getFontFamily(type = 'body') {
        const font = this.definitions[type];
        return font ? `'${font.name}', ${font.fallback}` : 'sans-serif';
      }
    }
  }
};

/* ==========================================
   🤖 PROMPT IA - FORMATAGE SERVICES
   ==========================================
   
   Pour formater automatiquement votre carte de services :
   
   "Transforme cette carte de services en format JavaScript pour Armageddon.
   Structure requise :
   
   services: [
     {
       category: "Nom de la catégorie",
       icon: "emoji-approprié",
       description: "Description courte",
       items: [
         { name: "Nom du service", price: prix_en_euros }
       ]
     }
   ]
   
   Voici ma carte de services :
   [COLLER VOTRE CARTE ICI]
   
   Respecte bien la structure et utilise des emojis appropriés."
   
   ========================================== */
