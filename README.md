# Portfolio BUT Informatique — Timothé Belcour

Portfolio personnel développé dans le cadre de ma 2ème année de BUT Informatique.  
Il présente mes projets académiques, mes compétences techniques et mon parcours de formation, à travers un site web moderne construit avec React et Vite.

---

## 🛠 Technologies

| Couche | Outils |
|---|---|
| Framework | React 19 |
| Build | Vite 8 |
| Style | Tailwind CSS 4 |
| Routing | React Router 7 |
| Langage | JavaScript (JSX) |

---

## ✦ Fonctionnalités

- **Page d'accueil** — présentation rapide, accès direct aux 6 compétences BUT
- **Page Projets** — cartes visuelles avec screenshots, highlights et technologies
- **Pages projets détaillées** — galerie d'images, fonctionnalités, compétences associées, navigation entre projets
- **Page À propos** — carte profil avec photo, stack technique, formation, contact
- **6 pages Compétences BUT** — critères d'évaluation, traces et réalisations, projets liés, navigation compétence précédente/suivante
- **Navbar responsive** — dropdown compétences sur desktop, menu hamburger sur mobile, sticky avec effet blur au scroll
- **Design dark mode natif** — palette `slate` + accent violet, sobre et lisible

---

## 📁 Projets présentés

### Votendo
Plateforme web de vote de jeux vidéo développée en PHP/MySQL.  
Authentification sécurisée, gestion des rôles (admin, utilisateur), classements dynamiques, sécurité HTTPS.  
`PHP` `MySQL` `HTML/CSS` `HTTPS`

### Flutter Films
Application mobile affichant films et acteurs via l'API REST TMDB.  
Navigation multi-écrans avec Flutter Navigator, gestion asynchrone des requêtes.  
`Flutter` `Dart` `API REST` `Android`

### Docker API
Déploiement et conteneurisation d'une API REST avec Docker et Docker Compose.  
Tests complets des endpoints avec Postman, documentation des routes.  
`Docker` `API REST` `Postman` `Linux`

### VR/AR Research
Travail de recherche et présentation orale sur les technologies et métiers de la réalité virtuelle et augmentée.  
`VR` `AR` `Recherche` `Présentation`

---

## 🎓 Compétences BUT Informatique

Le portfolio est organisé autour des 6 compétences du référentiel national BUT Informatique :

| # | Compétence | Description courte |
|---|---|---|
| 1 | **Réaliser** | Développement d'applications par incréments successifs |
| 2 | **Optimiser** | Analyse et amélioration des performances logicielles |
| 3 | **Administrer** | Configuration et maintenance de systèmes et réseaux |
| 4 | **Gérer** | Conception et exploitation de bases de données |
| 5 | **Conduire** | Gestion de projet et suivi des besoins métiers |
| 6 | **Collaborer** | Travail en équipe et communication technique |

---

## ⚙️ Installation

### Prérequis

- [Node.js](https://nodejs.org/) ≥ 20
- npm ≥ 10

### Cloner et installer

```bash
git clone https://github.com/TimotheBelcour/portfolio-but-informatique.git
cd portfolio-but-informatique
npm install
```

### Lancer en développement

```bash
npm run dev
```

Le site est accessible sur [http://localhost:5173](http://localhost:5173).

---

## 📦 Commandes npm

```bash
# Démarrer le serveur de développement (HMR activé)
npm run dev

# Compiler pour la production
npm run build

# Prévisualiser le build de production en local
npm run preview

# Lancer le linter ESLint
npm run lint
```

---

## 🗂 Structure du projet

```
portfolio-but-informatique/
├── public/
│   ├── images/              # Screenshots projets et photo profil
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx   # Navigation principale responsive
│   │   │   └── Footer.jsx
│   │   ├── ui/
│   │   │   ├── Badge.jsx    # Tag coloré réutilisable
│   │   │   └── ProjectCard.jsx
│   │   └── ScrollToTop.jsx  # Reset scroll à chaque navigation
│   ├── data/
│   │   ├── competences.js   # Les 6 compétences BUT (slug, critères, couleur)
│   │   └── projects.js      # Projets (image, highlights, tags, compétences liées)
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetail.jsx
│   │   └── competences/
│   │       └── CompetencePage.jsx  # Template générique pour les 6 compétences
│   ├── App.jsx              # Définition des routes
│   ├── main.jsx             # Point d'entrée React + BrowserRouter
│   └── index.css            # Base styles + import Tailwind
├── index.html
├── vite.config.js
└── package.json
```

---

## 👤 Auteur

**Timothé Belcour**  
Étudiant en 2ème année de BUT Informatique

- GitHub : [@TimotheBelcour](https://github.com/TimotheBelcour)
- Email : [timothebelcour@outlook.fr](mailto:timothebelcour@outlook.fr)

---

## 📄 Licence

Ce projet est sous licence MIT.  
Vous êtes libre de vous en inspirer, à condition de ne pas le reproduire à l'identique comme votre propre portfolio.

```
MIT License — Copyright (c) 2025 Timothé Belcour
```
