/* ─────────────────────────────────────────────────────────────────
   Profil — source unique de vérité
   Identité, recherche de stage, expériences et formation.
   Utilisé par Home, About et Footer pour éviter les doublons.
   ───────────────────────────────────────────────────────────────── */

export const profile = {
  firstName: 'Timothé',
  lastName: 'Belcour',
  role: 'Développeur en formation',
  year: '3ème année',
  school: 'IUT de Saint-Dié-des-Vosges',
  location: 'Remiremont (88) — Vosges',
  email: 'timothebelcour@outlook.fr',
  github: 'https://github.com/TimotheBelcour',
  githubHandle: 'TimotheBelcour',
}

/* Recherche de stage — affichée en bandeau sur l'accueil */
export const stage = {
  active: true,
  label: 'Recherche de stage',
  duration: '14 semaines',
  period: 'mars à juin 2027',
  domaine: 'Développement informatique',
  mobilite: 'Grand Est et alentours — permis B, véhiculé',
}

/* ─── Expérience professionnelle ──────────────────────────────── */

export const experiences = [
  {
    id: 'velux',
    title: 'Stagiaire développeur — Équipe IIoT (VIP-Core)',
    company: 'VELUX',
    place: 'Chemaudin-et-Vaux',
    period: 'juin — août 2026',
    current: false,
    projectSlug: 'velux-node-red-vip',
    summary:
      "Stage de 8 semaines au sein de l'équipe IIoT (VIP-Core). Conception et développement d'un package de trois nœuds Node-RED permettant d'envoyer des messages normalisés vers les machines de production via MQTT.",
    highlights: [
      "Envoi d'un télégramme ramené de 13 à 17 blocs assemblés à la main à un seul nœud à configurer",
      'Gestion des erreurs portée de rien du tout à 7 situations distinguées',
      '18 télégrammes testés, 10 validés complètement en conditions réelles',
      '5 pages de documentation publiées sur le portail interne, plus une aide intégrée par nœud',
      "Méthode agile : sprints de deux semaines, points quotidiens, revue devant l'équipe",
      "Équipe internationale : anglais en langue de travail, à l'oral comme dans le code",
    ],
    tags: ['JavaScript', 'Node-RED', 'MQTT', 'JSON', 'Docker', 'Git'],
    color: 'violet',
  },
  {
    id: 'norske-skog',
    title: 'Technicien en alternance — BTS Pilotage des Procédés',
    company: 'Norske Skog Golbey',
    place: 'Golbey',
    period: '2022 — 2024',
    current: false,
    summary:
      "Alternance de deux ans sur un site industriel papetier, historiquement spécialisé dans le papier journal et aujourd'hui engagé dans la production de papier pour carton ondulé.",
    highlights: [
      'Supervision de systèmes industriels automatisés',
      'Maintenance des équipements et suivi qualité (QHSE)',
      "Travail en équipe postée sur une installation en production continue",
    ],
    tags: ['Supervision', 'Automatisme', 'QHSE', 'Maintenance'],
    color: 'blue',
  },
]

/* ─── Formation ───────────────────────────────────────────────── */

export const formations = [
  {
    id: 'but',
    title: 'BUT Informatique',
    school: 'IUT de Saint-Dié-des-Vosges',
    period: '2024 — 2027',
    detail: '3ème année',
    current: true,
  },
  {
    id: 'bts',
    title: 'BTS Pilotage des Procédés',
    school: 'CFA Papetier de Gérardmer — en alternance',
    period: '2022 — 2024',
    detail: 'Obtenu',
    current: false,
  },
  {
    id: 'bac',
    title: 'Baccalauréat Technologique STI2D',
    school: 'Spécialité ITEC',
    period: '2019 — 2022',
    detail: 'Obtenu',
    current: false,
  },
]

/* ─── Stack technique ─────────────────────────────────────────── */

export const stack = {
  langages: ['JavaScript', 'PHP', 'Java', 'C', 'Python', 'Dart', 'SQL', 'HTML/CSS'],
  frameworks: ['React', 'Flutter', 'Node-RED', 'Tailwind CSS'],
  outils: ['Docker', 'Git', 'MySQL', 'MQTT', 'JSON', 'Linux', 'Apache', 'VS Code'],
}

/* ─── Langues et divers ───────────────────────────────────────── */

export const infos = [
  { label: 'Anglais', value: 'B1 — échanges professionnels en équipe internationale' },
  { label: 'Permis B', value: 'Véhiculé' },
  { label: 'Volley-ball', value: 'Joueur en club et entraîneur des cadets à Remiremont' },
]
