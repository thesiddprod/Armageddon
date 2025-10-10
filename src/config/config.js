// ========================================
// 🏛️ CONFIGURATION CLIENT / ENTREPRISE
// Multi-sites et services
// ========================================

export const config = {
  name: "Nom de l'entreprise",
  description: "Description courte ou longue de l'entreprise.",
  slogan: "Phrase marketing ou slogan",
  branding: {
    logos: {
      base: { horizontal: "armageddon-logo.png", square: "" },
      monochrome: { horizontal: "armageddon-logo.png", square: "" },
      light: { horizontal: "", square: "" },
      favicon: "favicon.svg",
      dimensions: {
        width: "180", // Largeur en pixels
        height: "auto", // Hauteur automatique pour garder le ratio
        className: "h-8 w-auto" // Ou utilise des classes Tailwind (h-8 = 32px, h-10 = 40px, h-12 = 48px)
      }
    }
  },

  // 🌐 Réseaux sociaux
  social: {
    facebook: "",
    instagram: "",
    tiktok: "",
    linkedin: "",
    x: ""
  },

  // 🧭 Navigation / CTA
  navigation: [
    { 
      title: "Accueil", 
      url: "#accueil" 
    },
    {
      title: "Servicesx",
      url: "#services",
      megaMenu: {
        linkGroups: [
          {
            title: "Électricité",
            subMenuLinks: [
              { title: "Installation complète", url: "#installation", description: "Installation électrique complète", image: { src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ctext x='0' y='20' font-size='20'%3E💡%3C/text%3E%3C/svg%3E", alt: "Installation complète" } },
              { title: "Réparation panne", url: "#reparation", description: "Diagnostic et réparation rapide", image: { src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ctext x='0' y='20' font-size='20'%3E🔌%3C/text%3E%3C/svg%3E", alt: "Réparation panne" } }
            ]
          },
          {
            title: "Plomberie",
            subMenuLinks: [
              { title: "Réparation fuite", url: "#fuite", description: "Intervention rapide sur fuites", image: { src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ctext x='0' y='20' font-size='20'%3E🚰%3C/text%3E%3C/svg%3E", alt: "Réparation fuite" } },
              { title: "Installation sanitaire", url: "#sanitaire", description: "Installation de sanitaires", image: { src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ctext x='0' y='20' font-size='20'%3E🛁%3C/text%3E%3C/svg%3E", alt: "Installation sanitaire" } }
            ]
          }
        ],
        /* rightLinkGroup: {
          title: "Ressources",
          subMenuLinks: [
            { title: "Blog", url: "" },
            { title: "", url: "" }
          ]
        } */
      }
    },
    { title: "Équipe", url: "#equipe" },
    { title: "Contact", url: "#contact" }
  ],
  
  cta: [
    { 
      title: "Réserver", 
      variant: "default", // default, secondary, outline, ghost, link, destructive
      size: "sm" // default, sm, lg, icon
    }
    // Ajouter d'autres boutons CTA ici si nécessaire
    // { title: "Contactez-nous", variant: "outline", size: "sm" }
  ],
  

  // 🦶 Footer
  footer: {
    description: "Texte descriptif du footer ou description générale",
    sections: [
      {
        title: "Services",
        links: [
          { label: "Service 1", href: "#service1" },
          { label: "Service 2", href: "#service2" },
          { label: "Service 3", href: "#service3" }
        ]
      },
      {
        title: "Entreprise",
        links: [
          { label: "À propos", href: "#about" },
          { label: "Équipe", href: "#equipe" },
          { label: "Avis", href: "#avis" }
        ]
      }
    ],
    legal: [
      { label: "Mentions légales", href: "#mentions" },
      { label: "Confidentialité", href: "#confidentialite" },
      { label: "CGV", href: "#cgv" }
    ]
  },

  // 🎨 Design technique (polices)
  design: {
    fonts: {
      definitions: {
        brand: {
          name: "Libre Baskerville",
          fallback: "serif",
          cssVar: "--font-brand",
          googleUrl: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
        },
        heading: {
          name: "Inter",
          fallback: "sans-serif",
          cssVar: "--font-heading",
          googleUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        },
        body: {
          name: "Libre Baskerville",
          fallback: "serif",
          cssVar: "--font-body",
          googleUrl: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
        },
        mono: {
          name: "Fira Code",
          fallback: "monospace",
          cssVar: "--font-mono",
          googleUrl: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap"
        }
      }
    }
  },

  // 🏬 Locations / sites
  locations: [
    // ---------- LOCATION 1 ----------
    {
      id: "location-1",
      name: "Atelier / Bureau Principal",
      contact: {
        address: {
          street: "123 Rue du Service",
          city: "Paris",
          postalCode: "75001",
          country: "France",
          full: "123 Rue du Service, 75001 Paris"
        },
        phone: "01 23 45 67 89",
        email: "paris@entreprise.fr",
        website: "www.entreprise-paris.fr"
      },
      access: {
        publicTransport: { metro: ["Ligne 1 - Station Centrale"], bus: ["21 - Arrêt Service"], tram: [] },
        parking: ["Parking Service Center, 200m du site"],
        bike: ["Vélib station 15"]
      },
      hours: {
        monday: { open: "09:00", close: "18:00", closed: false },
        tuesday: { open: "09:00", close: "18:00", closed: false },
        wednesday: { open: "09:00", close: "18:00", closed: false },
        thursday: { open: "09:00", close: "18:00", closed: false },
        friday: { open: "09:00", close: "18:00", closed: false },
        saturday: { open: "10:00", close: "14:00", closed: false },
        sunday: { open: null, close: null, closed: true },
        display: { weekdays: "Lun - Ven: 9h - 18h", saturday: "Samedi: 10h - 14h", sunday: "Dimanche: Fermé" }
      },
      services: [
        {
          category: "Électricité",
          icon: "💡",
          description: "Installation et réparation électrique",
          items: [
            { name: "Installation complète", price: 150 },
            { name: "Réparation panne électrique", price: 80 },
            { name: "Mise aux normes", price: 200 }
          ]
        },
        {
          category: "Plomberie",
          icon: "🚰",
          description: "Travaux de plomberie et dépannage",
          items: [
            { name: "Installation robinetterie", price: 70 },
            { name: "Réparation fuite", price: 60 },
            { name: "Remplacement chauffe-eau", price: 250 }
          ]
        },
        {
          category: "Maintenance",
          icon: "🔧",
          description: "Contrats et interventions régulières",
          items: [
            { name: "Contrat annuel entretien", price: 300 },
            { name: "Intervention ponctuelle", price: 90 },
            { name: "Audit sécurité", price: 120 }
          ]
        }
      ],
      team: [
        {
          name: "Jean Dupont",
          role: "Électricien principal",
          specialties: ["Installation", "Réparation", "Mise aux normes"],
          experience: "12 ans",
          image: "team/jean.png",
          social: { instagram: "", x: "" }
        },
        {
          name: "Lucie Martin",
          role: "Plombière",
          specialties: ["Réparation fuite", "Installation sanitaire"],
          experience: "8 ans",
          image: "team/lucie.png",
          social: { instagram: "" }
        }
      ],
      images: ["locations/paris-1-1.jpg", "locations/paris-1-2.jpg"]
    },

    // ---------- LOCATION 2 ----------
    {
      id: "location-2",
      name: "Agence Secondaire",
      contact: {
        address: { street: "45 Avenue du Service", city: "Lyon", postalCode: "69002", country: "France", full: "45 Avenue du Service, 69002 Lyon" },
        phone: "04 12 34 56 78",
        email: "lyon@entreprise.fr",
        website: "www.entreprise-lyon.fr"
      },
      access: { publicTransport: { metro: ["Ligne A - Station Bellecour"], bus: ["C1 - Arrêt Bellecour"], tram: ["T1 - Arrêt Bellecour"] }, parking: ["Parking Bellecour, 150m"], bike: ["Vélo’v station 7"] },
      hours: {
        monday: { open: "10:00", close: "19:00", closed: false },
        tuesday: { open: "10:00", close: "19:00", closed: false },
        wednesday: { open: "10:00", close: "19:00", closed: false },
        thursday: { open: "10:00", close: "19:00", closed: false },
        friday: { open: "10:00", close: "19:00", closed: false },
        saturday: { open: "09:00", close: "15:00", closed: false },
        sunday: { open: null, close: null, closed: true },
        display: { weekdays: "Lun - Ven: 10h - 19h", saturday: "Samedi: 9h - 15h", sunday: "Dimanche: Fermé" }
      },
      services: [
        {
          category: "Électricité",
          icon: "💡",
          description: "Installation et dépannage",
          items: [
            { name: "Remplacement tableau électrique", price: 180 },
            { name: "Installation luminaire", price: 50 },
            { name: "Dépannage urgence", price: 100 }
          ]
        },
        {
          category: "Plomberie",
          icon: "🚰",
          description: "Travaux et réparation",
          items: [
            { name: "Débouchage canalisation", price: 80 },
            { name: "Réparation fuite", price: 70 },
            { name: "Installation chauffe-eau", price: 220 }
          ]
        }
      ],
      team: [
        {
          name: "Pierre Leblanc",
          role: "Technicien polyvalent",
          specialties: ["Électricité", "Plomberie", "Maintenance"],
          experience: "10 ans",
          image: "team/pierre.png",
          social: { instagram: "", x: "" }
        }
      ],
      images: ["locations/lyon-1-1.jpg", "locations/lyon-1-2.jpg"]
    }
  ]
};
