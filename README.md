# Portfolio BUT Informatique — Timothé Belcour

Portfolio personnel initialement développé en 2ème année de BUT Informatique, mis à jour en 3ème année pour accompagner ma recherche de stage.  
Il présente mon parcours, mes expériences professionnelles, mes projets académiques et mes compétences techniques, à travers un site web construit avec React et Vite.

🔗 **En ligne** : [timothebelcour.github.io/portfolio-but-informatique](https://timothebelcour.github.io/portfolio-but-informatique/)  
🎯 **Recherche un stage de 14 semaines** — développement informatique, de mars à juin 2027.

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

- **Page d'accueil** — présentation rapide, bandeau de recherche de stage, accès direct aux 6 compétences BUT
- **Page Projets** — cartes visuelles avec screenshots, highlights et technologies
- **Pages projets détaillées** — galerie d'images, fonctionnalités, compétences associées, navigation entre projets
- **Page À propos** — carte profil, expérience professionnelle (timeline), formation, stack technique, contact
- **6 pages Compétences BUT** — critères d'évaluation, traces et réalisations, projets liés, navigation compétence précédente/suivante
- **Navbar responsive** — dropdown compétences sur desktop, menu hamburger sur mobile, sticky avec effet blur au scroll
- **Design dark mode natif** — palette `slate` + accent violet, sobre et lisible
- **Images optimisées** — captures converties en WebP et chargées à la demande (site complet < 5 Mo)

---

## 📁 Projets présentés

**13 projets**, dont un stage en entreprise, 5 projets phares et 7 travaux plus courts.

### Projets phares

| Projet | Description | Stack |
|---|---|---|
| **Node-RED — Injection de télégrammes** *(stage VELUX)* | Package de trois nœuds Node-RED pour l'envoi de messages normalisés vers les machines de production via MQTT : de 13-17 blocs assemblés à la main à un seul nœud à configurer | `JavaScript` `Node-RED` `MQTT` `Docker` |
| **Votendo** | Plateforme web de vote de jeux vidéo (SAE3) : authentification bcrypt, rôles, classements, HTTPS validé par Wireshark, MCD/MLD/UML | `PHP` `MySQL` `Apache` `OpenSSL` |
| **SAE4 — Audit GGVote** | Audit sécurité, robustesse et performance d'une application existante, puis mise en œuvre du plan d'amélioration | `PHP` `Docker` `MariaDB` `SQL` |
| **Flutter Films** | Application mobile cinéma : recherche d'acteurs, fiches films, carte interactive et quiz, données via l'API TMDB | `Flutter` `Dart` `TMDB API` |
| **Vision-ix** | API REST conteneurisée, maquettage Figma, interfaces desktop et mobile, tests des endpoints avec Postman | `Docker` `API REST` `Postman` |
| **Three.js — Hockney** | Scène 3D interactive dans le navigateur, inspirée du travail photographique de David Hockney | `Three.js` `JavaScript` `WebGL` |

### Autres projets

Administration système et sécurité réseau sous VirtualBox · Mini-shell Unix en C · Cryptographie RSA et attaque de Wiener · Probabilités et optimisation du surbooking · Algorithme du simplexe · Automates finis et langages formels · Veille technologique VR/AR/MR.

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
│   │   ├── profile.js       # Identité, recherche de stage, expériences, formation
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
Étudiant en 3ème année de BUT Informatique — IUT de Saint-Dié-des-Vosges

- GitHub : [@TimotheBelcour](https://github.com/TimotheBelcour)
- Email : [timothebelcour@outlook.fr](mailto:timothebelcour@outlook.fr)

---

## 📄 Licence

Ce projet est sous licence MIT.  
Vous êtes libre de vous en inspirer, à condition de ne pas le reproduire à l'identique comme votre propre portfolio.

```
MIT License — Copyright (c) 2025 Timothé Belcour
```
