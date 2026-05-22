export const competences = [
  {
    id: 1,
    slug: 'realiser',
    title: 'Réaliser',
    fullTitle: "Réaliser un développement d'application",
    color: 'violet',
    description:
      "Partir des exigences et aller, par incréments successifs, vers un système logiciel qui les satisfait.",
    criteres: [
      'Implémenter des conceptions simples',
      'Élaborer des conceptions simples',
      'Faire des essais et évaluer leurs résultats',
      'Développer des interfaces utilisateurs',
    ],
    apprentissages: [
      "Concevoir et développer une application web complète en PHP/MySQL depuis les spécifications",
      "Intégrer une API REST externe dans une application mobile Flutter avec gestion asynchrone",
      "Structurer un projet selon une architecture MVC et séparer les responsabilités",
      "Gérer l'authentification et les sessions utilisateurs côté serveur avec hachage sécurisé",
    ],
    niveauScore: 3,
  },
  {
    id: 2,
    slug: 'optimiser',
    title: 'Optimiser',
    fullTitle: 'Optimiser des applications informatiques',
    color: 'blue',
    description:
      'Analyser et optimiser des applications informatiques pour améliorer leurs performances.',
    criteres: [
      'Analyser un problème avec des méthodes formelles',
      'Comparer des algorithmes pour des problèmes classiques',
      'Formaliser et mettre en œuvre des outils mathématiques',
      'Évaluer la performance des programmes',
    ],
    apprentissages: [
      "Analyser la complexité algorithmique de solutions et identifier les goulets d'étranglement",
      "Comparer des algorithmes sur des cas concrets et justifier le choix de l'un d'eux",
      "Optimiser la gestion asynchrone des requêtes réseau avec Future et async/await",
      "Évaluer les performances d'un programme à l'aide de métriques concrètes",
    ],
    niveauScore: 2,
  },
  {
    id: 3,
    slug: 'administrer',
    title: 'Administrer',
    fullTitle: 'Administrer des systèmes informatiques communicants complexes',
    color: 'green',
    description:
      'Installer, configurer et maintenir des systèmes informatiques et réseaux en conditions opérationnelles.',
    criteres: [
      "Identifier les différents composants d'un système numérique",
      'Utiliser les systèmes informatiques',
      "Installer et configurer un système d'exploitation",
      'Configurer un réseau informatique',
    ],
    apprentissages: [
      "Installer et configurer un environnement Linux en ligne de commande",
      "Conteneuriser une application avec Docker et rédiger un Dockerfile",
      "Orchestrer des services multi-conteneurs avec Docker Compose",
      "Exposer et sécuriser des ports applicatifs dans un environnement réseau",
    ],
    niveauScore: 3,
  },
  {
    id: 4,
    slug: 'gerer',
    title: 'Gérer',
    fullTitle: "Gérer des données de l'information",
    color: 'orange',
    description:
      "Concevoir, gérer, administrer et exploiter les données de l'entreprise et mettre à disposition les informations.",
    criteres: [
      'Mettre à jour et interroger une base de données',
      'Visualiser des données',
      'Concevoir une base de données',
      'Assurer la confidentialité des données',
    ],
    apprentissages: [
      "Concevoir un schéma entité-relation adapté aux besoins d'une application",
      "Rédiger des requêtes SQL avec jointures, agrégats et sous-requêtes",
      "Assurer la sécurité des données : droits, injection SQL, confidentialité",
      "Mettre à jour et maintenir une base de données applicative en conditions réelles",
    ],
    niveauScore: 3,
  },
  {
    id: 5,
    slug: 'conduire',
    title: 'Conduire',
    fullTitle: 'Conduire un projet',
    color: 'yellow',
    description:
      'Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs.',
    criteres: [
      'Appréhender les besoins du client',
      'Mettre en place les outils de gestion de projet',
      'Identifier les acteurs et leurs rôles',
      'Planifier les activités',
    ],
    apprentissages: [
      "Identifier et formaliser les besoins d'un projet informatique à partir du cahier des charges",
      "Planifier les étapes et les livrables en tenant compte des contraintes de temps",
      "Réaliser un support de présentation professionnel et structuré pour un projet",
      "Présenter et défendre un travail à l'oral devant un jury ou une promotion",
    ],
    niveauScore: 2,
  },
  {
    id: 6,
    slug: 'collaborer',
    title: 'Collaborer',
    fullTitle: "Collaborer au sein d'une équipe informatique",
    color: 'pink',
    description:
      'Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.',
    criteres: [
      'Identifier ses aptitudes pour travailler dans une équipe',
      'Comprendre la diversité et la convergence des métiers',
      'Agir dans le respect et la confiance',
      'Rendre compte de son activité',
    ],
    apprentissages: [
      "Répartir les rôles et les responsabilités au sein d'une équipe projet",
      "Utiliser des outils de versioning collaboratif (Git) pour travailler en parallèle",
      "Communiquer régulièrement sur l'avancement et les points bloquants",
      "Rendre compte de son travail de manière claire, structurée et synthétique",
    ],
    niveauScore: 2,
  },
]
