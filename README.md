# L'Eden Photographie — Maud Paradis

Site vitrine de Maud Paradis, photographe professionnelle, vidéaste et community manager spécialisée dans le tourisme, basée à Nancy dans le Grand Est.

---

## Stack technique

- **React 19** + **Vite 8**
- **React Router DOM 7** — navigation SPA
- **Bootstrap 5** — mise en page et composants (accordéons, modals)
- **Bootstrap Icons** — icônes
- **EmailJS** — envoi de formulaire de contact sans back-end
- **vite-plugin-image-optimizer** + **sharp** + **svgo** — compression automatique des images au build

---

## Pages

| Route | Page |
|---|---|
| `/` | Accueil |
| `/about` | À propos |
| `/services` | Services |
| `/portfolio` | Portfolio |
| `/contact` | Contact |
| `/mentions-legales` | Mentions légales |
| `/politique-de-confidentialite` | Politique de confidentialité |
| `/termes-et-conditions` | Termes et conditions |

---

## Structure du projet

```
src/
├── assets/
│   ├── images/           # Photos (hotel, paysages, monuments, profil, services, portfolio)
│   └── svg/              # Éléments graphiques (logo, bordures, cercles)
├── components/
│   ├── layout/
│   │   ├── Header.jsx    # Navigation avec menu hamburger (mobile)
│   │   └── Footer.jsx    # Liens, réseaux sociaux, mentions légales
│   └── ui/
│       ├── Banner.jsx          # Bannière photo en haut des pages intérieures
│       ├── Title.jsx           # Titre de section avec ligne décorative
│       ├── CardAbout.jsx       # Carte présentation (photo + texte) avec animation
│       ├── CardServices.jsx    # Carte service avec modal et animation
│       ├── CardPortfolio.jsx   # Carte portfolio avec modal et animation
│       ├── CardMentions.jsx    # Carte accordion pour pages légales
│       ├── ModalServices.jsx   # Modal détail service avec carousel automatique
│       ├── ModalPortfolio.jsx  # Modal galerie photos avec scroll interne
│       └── ModalContact.jsx    # Modal confirmation envoi formulaire
├── config/
│   └── emailjs.js        # Clés EmailJS (serviceId, templateId, publicKey)
├── hooks/
│   └── useContactForm.js # Logique formulaire + envoi EmailJS
├── pages/
│   ├── global/           # Accueil, À propos, Services, Portfolio, Contact
│   └── legales/          # Mentions, Politique, Termes
└── styles/
    ├── stylescomponents/ # CSS par composant
    ├── stylespages/      # CSS par page
    ├── responsive/       # CSS mobile (max-width: 768px)
    ├── responsive-tablet/# CSS tablette (769px – 1024px)
    └── animation/        # CSS animations d'entrée (IntersectionObserver)
```

---

## Installation

```bash
npm install
```

## Lancer en développement

```bash
npm run dev
```

Accessible en réseau local (mobile) grâce au flag `--host` intégré au script.

## Build de production

```bash
npm run build
```

Les images sont automatiquement compressées (qualité 75%) au build via `vite-plugin-image-optimizer`.

---

## Déploiement

Le site est hébergé chez **o2switch**.

---

## Fonctionnalités

- **Formulaire de contact** avec envoi par EmailJS et modal de confirmation
- **Carousel automatique** dans les modals Services (défilement toutes les 3s)
- **Galerie portfolio** avec grille 3 colonnes et scroll interne dans le modal
- **Animations d'entrée** au scroll via `IntersectionObserver` (gauche, droite, haut, bas)
- **Lazy loading** des routes (React `lazy` + `Suspense`) et des images (`loading="lazy"`)
- **SEO** : meta tags, Open Graph, Twitter Card, JSON-LD Schema.org
- **Responsive** : mobile (≤768px) et tablette (769px–1024px)

---

## Réseaux sociaux

- Instagram : [@l.eden.photographie](https://www.instagram.com/l.eden.photographie)
- Facebook : [L'Eden Photographie](https://www.facebook.com/profile.php?id=61576324495698)
- LinkedIn : [Maud Paradis](https://fr.linkedin.com/in/maud-paradis-78a248167)
