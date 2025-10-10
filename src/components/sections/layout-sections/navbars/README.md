# 🧭 Navbar8 - Documentation Complète

## 📋 Vue d'ensemble

Navbar8 est une navbar responsive ultra-personnalisable qui utilise automatiquement les données de `config.js` par défaut, mais peut être overridée via des props Astro.

---

## ✅ Réponses à tes questions

### 1. **Est-ce que les boutons CTA utilisent bien le component Button de Shadcn ?**

**OUI** ✅ Les boutons utilisent le component `Button` de Shadcn UI importé depuis `@/components/ui/button`.

```tsx
import { Button } from "@/components/ui/button"

// Dans le code :
<Button variant={button.variant} size={button.size}>
  {button.title}
</Button>
```

**Variants disponibles :**
- `default` (bouton primaire)
- `secondary`
- `outline`
- `ghost`
- `link`
- `destructive`

**Sizes disponibles :**
- `default`
- `sm` (small)
- `lg` (large)
- `icon`

---

### 2. **Comment personnaliser les icônes du megamenu ?**

Il y a **3 façons** de gérer les icônes :

#### **Option 1 : Emojis (le plus simple)** 🎨

Dans `config.js`, utilise une data URL SVG avec l'emoji :
```js
{
  title: "Installation complète",
  url: "#installation",
  description: "Installation électrique complète",
  image: {
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ctext x='0' y='20' font-size='20'%3E💡%3C/text%3E%3C/svg%3E",
    alt: "Installation complète"
  }
}
```

#### **Option 2 : URL d'image**

```js
{
  title: "Installation complète",
  url: "#installation",
  description: "Installation électrique complète",
  image: {
    src: "/images/icons/lightbulb.svg", // Chemin relatif ou URL
    alt: "Installation complète"
  }
}
```

#### **Option 3 : Composants Lucide React (avancé)**

Pour utiliser les icônes de **Lucide React** (comme `ChevronDown`, `Menu`, `X`) :

1. Installer si pas déjà fait :
```bash
npm install lucide-react
```

2. Modifier `Navbar8Client.tsx` pour accepter un nom d'icône :
```tsx
import * as LucideIcons from 'lucide-react';

// Dans le rendu :
{subMenuLink.iconName && (() => {
  const Icon = LucideIcons[subMenuLink.iconName];
  return Icon ? <Icon className="h-6 w-6" /> : null;
})()}
```

3. Dans `config.js` :
```js
icon: "Zap" // Nom de l'icône Lucide
```

---

## 🎯 Utilisation

### **Mode 1 : Avec config.js (par défaut)**

La navbar utilise **automatiquement** les données de `config.js` :

```astro
---
import Navbar8 from '@/components/sections/layout-sections/navbars/Navbar8.astro';
---

<Navbar8 />
```

**Données utilisées :**
- Logo : `config.branding.logos.base.horizontal`
- Navigation : `config.navigation` (passé directement)
- Boutons : `config.cta` (tableau de boutons)

---

### **Mode 2 : Override partiel**

Tu peux override n'importe quelle prop :

```astro
<Navbar8 
  logo={{ 
    url: "/custom", 
    src: "/custom-logo.svg", 
    alt: "Custom Logo" 
  }}
/>
```

Ou seulement les boutons :
```astro
<Navbar8 
  buttons={[
    { title: "Mon CTA", variant: "default", size: "sm" }
  ]}
/>
```

---

### **Mode 3 : Sans config.js**

Désactive complètement l'utilisation de config.js :

```astro
<Navbar8 
  useConfigData={false}
  logo={{ ... }}
  navLinks={[ ... ]}
  buttons={[ ... ]}
/>
```

---

## 🗂️ Structure des données dans config.js

### **Navigation**

```js
navigation: [
  {
    title: "Accueil",
    url: "#accueil"
    // Pas de megaMenu = lien simple
  },
  {
    title: "Services",
    url: "#services",
    megaMenu: {
      linkGroups: [
        {
          title: "Électricité", // Titre de la colonne
          subMenuLinks: [
            {
              title: "Installation complète",
              url: "#installation",
              description: "Installation électrique complète",
              image: { // Optionnel
                src: "data:image/svg+xml,...", // Emoji encodé ou URL
                alt: "Installation complète"
              }
            }
          ]
        }
      ],
      rightLinkGroup: {
        title: "Ressources",
        subMenuLinks: []
      }
    }
  }
]
```

**Règles importantes :**
- Format **directement compatible** avec React (pas de transformation)
- Les `linkGroups` vont dans les colonnes de gauche (max 3)
- Le `rightLinkGroup` va dans la colonne de droite avec fond secondary

---

### **Boutons CTA**

```js
cta: [
  {
    title: "Réserver",
    variant: "default",
    size: "sm"
  },
  {
    title: "Contact",
    variant: "outline",
    size: "sm"
  }
]
```

**Note :** Format tableau direct, pas de `enabled` - si tu ne veux pas un bouton, enlève-le du tableau.

---

## 🎨 Personnalisation visuelle

### **Couleurs**

Les couleurs sont dans `global.css` via les CSS variables :
- `--background`
- `--foreground`
- `--primary`
- `--border`
- `--secondary`

### **Tailwind Classes**

Tu peux modifier les classes dans `Navbar8Client.tsx` :

```tsx
// Hauteur de la navbar
className="min-h-16 md:min-h-18"

// Padding horizontal
className="px-[5%]"

// Hover des liens
className="hover:text-primary"
```

---

## 📱 Responsive

### **Desktop (≥ 1024px)**
- Navigation horizontale visible
- Mega menu en fixed pleine largeur
- Hamburger caché

### **Mobile (< 1024px)**
- Navigation horizontale cachée
- Menu hamburger visible
- Menu mobile avec scroll vertical
- Accordéons pour les mega menus

### **Points de rupture**
- `lg:` → 1024px
- `md:` → 768px

---

## 🔧 Fonctionnalités avancées

### **Mega Menu Desktop**

Hover sur un lien avec `megaMenu` :
- Affiche un dropdown pleine largeur
- Position : `fixed left-0 right-0 top-[4rem]`
- Animation : `max-h` avec transition
- Fermeture : `onMouseLeave`

### **Mega Menu Mobile**

Clic sur un lien avec `megaMenu` :
- Ouvre un accordéon dans le menu mobile
- Animation : `max-h` avec transition
- Toggle : clic sur le titre

### **Scrollbar cachée**

La scrollbar du menu mobile est invisible mais fonctionnelle :
```tsx
className="scrollbar-hide"
```

Défini dans `global.css` :
```css
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
```

---

## 🐛 Troubleshooting

### **Le logo ne s'affiche pas**

Vérifie que le chemin est correct dans `config.js` :
```js
branding: {
  logos: {
    base: { 
      horizontal: "/logos/mon-logo.svg" // Doit être dans /public
    }
  }
}
```

### **Les boutons CTA ne s'affichent pas**

Vérifie que le tableau `cta` n'est pas vide dans `config.js` :
```js
cta: [
  { title: "Mon bouton", variant: "default", size: "sm" }
]
```

### **Les icônes du megamenu ne s'affichent pas**

- Si emoji : normal sur certains navigateurs anciens
- Si URL : vérifie que le fichier existe
- Vérifie la console pour les erreurs

### **Erreurs TypeScript "Cannot find module"**

C'est normal ! Les imports `.js` dans Astro fonctionnent à l'exécution même si TypeScript se plaint.

---

## 📦 Fichiers du système

```
navbars/
├── Navbar8.astro              # Wrapper Astro (passe config.js directement)
├── Navbar8Client.tsx          # Component React (UI + logique)
├── README.md                  # Cette doc

config/
└── config.js                  # Source de vérité (format React natif)
```

---

## 🚀 Prochaines étapes

1. ✅ Navbar personnalisable via config.js
2. ✅ Icônes avec emojis ou URLs
3. ✅ Boutons Shadcn
4. 🔄 Footer avec le même système
5. 🔄 Sections dynamiques

---

**Besoin d'aide ?** Consulte les exemples dans `index.astro` ou `config.js`.
