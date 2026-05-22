export const projects = [
  {
    id: 1,
    slug: 'votendo',
    year: '2024',
    type: 'Web',
    title: 'Votendo',
    description:
      "Plateforme web complète de vote de jeux vidéo, développée en PHP/MySQL. Les utilisateurs s'inscrivent, votent pour leurs jeux favoris et consultent les classements en temps réel.",
    image: '/images/votendo-home.png',
    gallery: [
      '/images/votendo-home.png',
      '/images/votendo-vote.png',
      '/images/votendo-results.png',
      '/images/votendo-page-jeu.png',
    ],
    highlights: [
      "Authentification sécurisée avec sessions PHP et hachage des mots de passe",
      "Système de rôles : administrateur, utilisateur standard, modérateur",
      "Vote pour les meilleurs jeux vidéo avec classement dynamique",
      "Pages entièrement dynamiques générées côté serveur",
      "Sécurité HTTPS et protection contre les injections SQL",
    ],
    tags: ['PHP', 'MySQL', 'HTML/CSS', 'HTTPS'],
    competences: ['realiser', 'gerer'],
    status: 'Terminé',

    duration: '3 semaines',
    team: 'Solo',
    featuresCount: 8,
    problemsSolved: 4,

    context:
      "Projet réalisé dans le cadre du BUT Informatique pour maîtriser le développement web côté serveur. L'objectif pédagogique était de créer une application web complète en PHP pur, sans framework, en gérant l'authentification, les sessions, les rôles utilisateurs et la sécurité des données.",

    objectives: [
      "Concevoir et implémenter une base de données relationnelle avec MySQL",
      "Développer un système d'authentification sécurisé avec gestion des sessions PHP",
      "Mettre en place un système de rôles (administrateur, modérateur, utilisateur)",
      "Sécuriser l'application contre les injections SQL, XSS et les attaques CSRF",
      "Générer des pages dynamiques côté serveur avec PHP pur sans framework",
    ],

    difficulties: [
      "Gérer les sessions PHP et maintenir l'état de connexion entre les pages",
      "Protéger contre les injections SQL sans framework ORM ni couche d'abstraction",
      "Implémenter un système de rôles avec vérification des permissions à chaque requête",
      "Maintenir une architecture propre en PHP pur sans structure MVC imposée",
    ],

    solutions: [
      "Utilisation de PDO avec prepared statements pour neutraliser les injections SQL",
      "Hachage des mots de passe avec password_hash() et l'algorithme bcrypt",
      "Middleware PHP vérifiant les droits en début de chaque page protégée",
      "Architecture artisanale séparant config, modèles et vues dans des dossiers dédiés",
    ],

    learned: [
      "Maîtrise du cycle HTTP requête/réponse et du fonctionnement des sessions",
      "Conception et normalisation d'une base de données relationnelle (3NF)",
      "Bonnes pratiques de sécurité web : OWASP Top 10, hachage, validation côté serveur",
      "Organisation d'un projet PHP sans framework et prévention du code spaghetti",
    ],

    result:
      "Plateforme web fonctionnelle et sécurisée permettant l'inscription, l'authentification, le vote pour des jeux vidéo et la consultation de classements en temps réel. Le système de rôles (admin, modérateur, utilisateur) est pleinement opérationnel, avec HTTPS et protection contre les failles SQL.",
  },

  {
    id: 2,
    slug: 'flutter-films',
    year: '2024',
    type: 'Mobile',
    title: 'Flutter Films',
    description:
      "Application mobile Android/iOS développée avec Flutter, permettant de parcourir des films, des acteurs et leurs notes, en consommant une API REST externe.",
    image: '/images/flutter-actors.png',
    gallery: ['/images/flutter-actors.png'],
    highlights: [
      "Intégration d'une API REST (TMDB) avec gestion des requêtes asynchrones",
      "Affichage de fiches films, acteurs et notes sous forme de listes et détails",
      "Navigation fluide entre les écrans avec Flutter Navigator",
      "Gestion des états avec setState et Future/async",
    ],
    tags: ['Flutter', 'Dart', 'API REST', 'Android'],
    competences: ['realiser', 'optimiser'],
    status: 'Terminé',

    duration: '2 semaines',
    team: 'Solo',
    featuresCount: 5,
    problemsSolved: 3,

    context:
      "Application mobile développée pour découvrir le développement cross-platform avec Flutter et Dart. L'API TMDB (The Movie Database) a été intégrée pour récupérer des données de films et d'acteurs en temps réel, avec une navigation multi-écrans fluide.",

    objectives: [
      "Développer une application mobile fonctionnelle pour Android et iOS avec Flutter",
      "Consommer une API REST externe (TMDB) avec gestion des états asynchrones",
      "Implémenter une navigation multi-écrans avec passage de données entre routes",
      "Créer une interface responsive adaptée à différentes tailles d'écran mobile",
    ],

    difficulties: [
      "Gestion des états asynchrones (chargement, erreur, succès) pour chaque requête API",
      "Parsing de réponses JSON complexes et imbriquées depuis l'API TMDB",
      "Navigation avec passage de données typées entre plusieurs écrans Flutter",
      "Affichage des images distantes avec mise en cache et états de chargement",
    ],

    solutions: [
      "FutureBuilder pour gérer automatiquement les états async / loading / error",
      "Modèles Dart avec factory constructors et fromJson() pour le parsing structuré",
      "Flutter Navigator avec arguments typés pour le passage de données entre routes",
      "Widget Image.network avec gestion des erreurs et placeholders de chargement",
    ],

    learned: [
      "Paradigme déclaratif et système de widgets Flutter (stateless vs stateful)",
      "Programmation asynchrone en Dart : async/await, Future, Stream",
      "Consommation d'une API REST avec le package http et gestion des erreurs réseau",
      "Design responsive mobile-first et adaptation aux contraintes d'écran",
    ],

    result:
      "Application mobile Android permettant de parcourir films et acteurs via l'API TMDB. L'interface affiche affiches, notes et détails avec des transitions fluides entre écrans. La gestion robuste des erreurs réseau garantit une bonne expérience même en connexion instable.",
  },

  {
    id: 3,
    slug: 'docker-api',
    year: '2025',
    type: 'DevOps',
    title: 'Docker API',
    description:
      "Déploiement et configuration d'une API REST dans un environnement conteneurisé Docker, testée et documentée avec Postman.",
    image: '/images/postman-api.png',
    gallery: ['/images/postman-api.png'],
    highlights: [
      "Création et configuration d'un Dockerfile pour conteneuriser l'API",
      "Orchestration multi-services avec Docker Compose",
      "Tests complets des endpoints REST avec Postman (GET, POST, PUT, DELETE)",
      "Documentation des routes et des réponses attendues",
    ],
    tags: ['Docker', 'API REST', 'Postman', 'Linux'],
    competences: ['administrer', 'realiser'],
    status: 'Terminé',

    duration: '1 semaine',
    team: 'Solo',
    featuresCount: 6,
    problemsSolved: 4,

    context:
      "Projet DevOps réalisé dans le cadre du BUT Informatique pour maîtriser la conteneurisation avec Docker. L'objectif était de déployer une API REST dans un environnement Docker reproductible, d'orchestrer les services avec Docker Compose et de documenter tous les endpoints avec Postman.",

    objectives: [
      "Conteneuriser une API REST avec un Dockerfile optimisé et lisible",
      "Orchestrer plusieurs services (API + base de données) avec Docker Compose",
      "Tester exhaustivement les endpoints REST (GET, POST, PUT, DELETE) avec Postman",
      "Documenter les routes et réponses attendues dans une collection Postman partageable",
    ],

    difficulties: [
      "Configuration du réseau entre les conteneurs Docker (API ↔ base de données)",
      "Gestion des variables d'environnement et des secrets de manière sécurisée",
      "Persistance des données entre les redémarrages de conteneurs",
      "Débogage d'erreurs à l'intérieur des conteneurs sans accès direct au système",
    ],

    solutions: [
      "Réseaux Docker bridge dédiés pour isoler la communication inter-conteneurs",
      "Variables d'environnement via fichier .env référencé dans docker-compose.yml",
      "Volumes Docker nommés pour persister les données même après suppression du conteneur",
      "Docker logs et docker exec -it pour inspecter et déboguer les conteneurs en direct",
    ],

    learned: [
      "Principes de la conteneurisation : isolation, portabilité et reproductibilité",
      "Écriture de Dockerfiles et optimisation de la taille des images (layers, .dockerignore)",
      "Orchestration multi-services et réseaux isolés avec Docker Compose",
      "Tests d'API systématiques avec Postman et organisation en collections exportables",
    ],

    result:
      "API REST entièrement conteneurisée, déployable en une seule commande (docker-compose up). La collection Postman documente l'ensemble des endpoints avec des exemples de requêtes et réponses. L'environnement est entièrement reproductible sur n'importe quelle machine disposant de Docker.",
  },

  {
    id: 4,
    slug: 'vr-ar',
    year: '2025',
    type: 'Recherche',
    title: 'VR/AR Research',
    description:
      "Travail de recherche approfondi sur les technologies de réalité virtuelle et augmentée : état de l'art, cas d'usage professionnels et présentation orale devant la promotion.",
    image: '/images/vrar-presentation.png',
    gallery: ['/images/vrar-presentation.png'],
    highlights: [
      "Analyse comparative des technologies VR et AR actuelles",
      "Étude des débouchés métier dans les domaines de la santé, industrie et jeu vidéo",
      "Réalisation d'un support de présentation structuré",
      "Présentation orale et soutenance devant la promotion",
    ],
    tags: ['VR', 'AR', 'Recherche', 'Présentation'],
    competences: ['conduire', 'collaborer'],
    status: 'Terminé',

    duration: '3 semaines',
    team: 'Équipe de 3',
    featuresCount: undefined,
    problemsSolved: 3,

    context:
      "Travail de recherche réalisé en groupe dans le cadre du BUT Informatique sur les technologies de réalité virtuelle et augmentée. L'objectif était de produire une analyse complète de l'état de l'art, d'identifier les cas d'usage professionnels dans plusieurs secteurs, puis de présenter les conclusions devant la promotion.",

    objectives: [
      "Analyser l'état de l'art des technologies VR, AR et MR (réalité mixte)",
      "Identifier les cas d'usage professionnels dans la santé, l'industrie et le jeu vidéo",
      "Réaliser un support de présentation structuré, visuel et professionnel (25 slides)",
      "Présenter et défendre les conclusions oralement avec session de questions-réponses",
    ],

    difficulties: [
      "Synthétiser une grande quantité d'informations techniques issues de sources variées",
      "Vulgariser des concepts complexes pour un public à profil mixte (technique et non-technique)",
      "Coordonner le travail en équipe et répartir équitablement les responsabilités",
      "Différencier clairement VR, AR et MR avec des exemples concrets et visuels",
    ],

    solutions: [
      "Répartition thématique : chaque membre responsable d'un secteur d'application",
      "Schémas comparatifs et tableaux synthétiques pour illustrer les différences entre technologies",
      "Planning hebdomadaire et points de synchronisation réguliers en équipe",
      "Glossaire technique intégré et exemples concrets référencés pour chaque technologie",
    ],

    learned: [
      "Méthodes de recherche documentaire et veille technologique en informatique",
      "Communication orale et structuration d'une présentation technique devant un public",
      "Travail collaboratif : organisation, coordination et gestion des contributions",
      "Vision prospective des technologies émergentes et de leurs enjeux professionnels",
    ],

    result:
      "Support de présentation complet (25 slides) couvrant les technologies VR/AR/MR, leurs applications sectorielles et leurs perspectives d'avenir. La soutenance devant la promotion a inclus une session de questions-réponses. Le projet a développé des compétences transversales en recherche, communication et travail d'équipe.",
  },
]
