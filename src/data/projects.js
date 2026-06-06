import { imgs } from './projectImages.js'

/* ─────────────────────────────────────────────────────────────────
   Galeries — images sélectionnées par ordre de pertinence
   Les noms correspondent aux fichiers dans src/assets/projects/[slug]/
   ───────────────────────────────────────────────────────────────── */

const votendoGallery = imgs(
  'votendo',
  // ── Interface utilisateur ──────────────────────────
  'votendo-home',
  'votendo-https-home',
  'votendo-page-jeu',
  'votendo-results',
  // ── Fonctionnalités ───────────────────────────────
  'votendo-vote',
  // ── Conception UML / MCD / documentation ─────────
  'votendo-mcd',
  'votendo-uml-diagram',
  'votendo-functional-specs-1',
  // ── Organisation projet ───────────────────────────
  'votendo-trello',
  // ── Sécurité HTTPS / SSL ──────────────────────────
  'apache-https-vhost',
  'ssl-certificate-generation',
  // ── Analyse réseau ────────────────────────────────
  'wireshark-tls-traffic',
  // ── Communication / anglais ───────────────────────
  'Votendo-affiche',
  'sae3-english-votendo-overview',
)

const sae4Gallery = imgs(
  'sae4-ggvote-audit',
  'optimization-objectives',
  'performance-monitoring',
  'project-estimation-part1',
  'project-estimation-part2',
)

const flutterGallery = imgs(
  'flutter-films',
  'flutter-actors',
)

const threejsGallery = imgs(
  'threejs-hockney',
  'threejs-scene-overview',
  'threejs-technical-details',
)

const dockerGallery = imgs(
  'docker-api',
  'postman-api',
  'api-get-guesses-postman',
  'database-guesses-table',
  'database-users-table',
)

const vboxGallery = imgs(
  'virtualbox-network-security',
  'virtualbox-vms',
  'ssh-key-authentication',
  'port-knocking-ssh',
  'ssh-port-forwarding',
  'vnc-remote-desktop',
)

const shellGallery = imgs(
  'mini-shell',
  'mini-shell-redirections',
  'mini-shell-makefile',
)

const rsaGallery = imgs(
  'cryptographie-rsa',
  'tableau-recapitulatif-rsa',
  'dechiffrement-rsa',
  'convergents-rsa',
  'attaque-wiener-cle-privee',
)

const surBookingGallery = imgs(
  'probabilites-surbooking',
  'resultats-globaux',
  'graphique-surbooking-25',
  'graphique-surbooking-105',
)

const simplexeGallery = imgs(
  'simplexe-klee-minty',
  'tableau-initial-simplexe',
  'tableau-synthese-iterations',
  'comparaison-criteres-simplexe',
  'cheminement-3d-comparatif',
)

const automatesGallery = imgs(
  'automates-langages',
  'automate-graphe',
  'langage-final-reconnu',
  'minimisation-nerode',
)

const vrarGallery = imgs(
  'vr-ar',
  'vrar-presentation',
)

/* ─────────────────────────────────────────────────────────────────
   Catalogue des projets
   Champs communs :
     id, slug, year, type, category, featured, title,
     description, image, gallery, highlights, tags,
     competences, status
   Champs case study (pour ProjectDetail) :
     duration, team,
     context, objectives, difficulties, solutions,
     learned, result
   Note : la barre de stats affiche tags.length (technologies)
   et competences.length (compétences BUT)
   ───────────────────────────────────────────────────────────────── */

export const projects = [

  /* ══════════════════════════════════════════════════
     PROJETS PHARES (featured: true)
  ══════════════════════════════════════════════════ */

  {
    id: 1,
    slug: 'votendo',
    year: '2025-2026',
    type: 'Web',
    category: 'web',
    featured: true,
    title: 'Votendo',
    description:
      "Le projet le plus complet que j'ai réalisé au semestre 3 : une plateforme web de vote de jeux vidéo en PHP/MySQL. Il m'a permis de travailler plusieurs aspects différents — développement, base de données, sécurité, administration Apache/HTTPS, analyse réseau, conception UML/MCD, gestion de projet et documentation en anglais.",
    image: votendoGallery[0],
    gallery: votendoGallery,
    highlights: [
      "Développement full-stack PHP/MySQL : authentification bcrypt, système de rôles et classements dynamiques",
      "Administration Apache : Virtual Host HTTPS, certificat OpenSSL et validation du chiffrement TLS par Wireshark",
      "Conception complète : MCD, MLD, diagramme de classes UML et cahier des charges fonctionnel",
      "Gestion de projet Trello : découpage en tâches, planification et livraisons jalonnées",
      "Documentation et présentation du projet en anglais dans le cadre de la SAE3 du BUT",
    ],
    tags: ['PHP', 'MySQL', 'HTML/CSS', 'Apache', 'OpenSSL', 'HTTPS'],
    competences: ['realiser', 'optimiser', 'administrer', 'gerer', 'conduire', 'collaborer'],
    status: 'Terminé',
    duration: 'Semestre 3',
    team: 'Binôme (Lucas Charbonnel)',
    context:
      "Votendo est le projet fil rouge du semestre 3 du BUT Informatique (SAE3), réalisé en binôme avec Lucas Charbonnel. C'est une plateforme web de vote de jeux vidéo qu'on a conçue et développée du début à la fin : modélisation UML/MCD, développement PHP/MySQL, mise en place du HTTPS sur Apache, analyse réseau avec Wireshark, suivi sur Trello et présentation en anglais. C'est le projet le plus complet que j'ai fait pendant ce semestre, parce qu'il touche à beaucoup d'aspects différents.",
    objectives: [
      "Concevoir la base de données relationnelle (MCD → MLD → SQL) et l'architecture applicative (UML de classes)",
      "Développer les fonctionnalités : inscription, authentification sécurisée, système de rôles et classements",
      "Administrer un serveur Apache avec Virtual Host HTTPS et certificat OpenSSL auto-signé",
      "Analyser et valider le trafic réseau via Wireshark : comparer HTTP en clair et HTTPS/TLS chiffré",
      "Planifier les sprints sur Trello, rédiger le cahier des charges fonctionnel et présenter en anglais",
    ],
    difficulties: [
      "Gérer les sessions PHP et le cycle de vie des connexions utilisateur sans framework ni ORM",
      "Configurer Apache avec SSL/TLS, résoudre les avertissements de certificat et forcer HTTP → HTTPS",
      "Protéger contre les injections SQL avec PDO pur, sans couche d'abstraction ni framework",
      "Mettre en place un système de rôles avec vérification des permissions sur les pages protégées",
    ],
    solutions: [
      "PDO avec prepared statements pour toutes les requêtes, password_hash() bcrypt pour les mots de passe",
      "Virtual Host Apache avec directives SSLEngine, SSLCertificateFile et Redirect permanent 80 → 443",
      "Capture Wireshark sur l'interface loopback : visualisation du handshake TLS et confirmation du chiffrement",
      "Vérification des rôles et des permissions sur les pages protégées à l'aide des variables de session PHP",
    ],
    learned: [
      "Cycle complet de développement web : de la modélisation UML/MCD au déploiement HTTPS en passant par le code PHP",
      "Administration serveur Apache : VirtualHost, SSL/TLS, redirections et génération de certificat OpenSSL",
      "Analyse réseau avec Wireshark : lecture du handshake TLS et vérification concrète du chiffrement",
      "Compétences transversales : gestion de projet Trello, documentation fonctionnelle et communication en anglais",
    ],
    result:
      "Au final, une plateforme web qui fonctionne : développement PHP/MySQL sécurisé, HTTPS vérifié avec Wireshark, conception UML/MCD documentée, suivi sur Trello et présentation en anglais. C'est le projet qui montre le mieux la progression que j'ai eue pendant le BUT, parce qu'il m'a fait travailler à la fois le développement, la base de données, la sécurité, le réseau et la documentation.",
  },

  {
    id: 2,
    slug: 'sae4-ggvote-audit',
    year: '2026',
    type: 'Audit',
    category: 'devops',
    featured: true,
    title: 'SAE4 — GGVote Audit',
    description:
      "Projet de SAE4 réalisé en binôme consistant à auditer puis améliorer l'application GGVote. Le travail a porté sur la sécurité, la robustesse, l'optimisation SQL, la containerisation Docker et la maintenabilité du code.",
    image: sae4Gallery[0],
    gallery: sae4Gallery,
    highlights: [
      "Audit sécurité, robustesse et performance",
      "Containerisation complète avec Docker Compose",
      "Optimisation SQL et correction de requêtes",
      "Gestion des logs et des erreurs utilisateur",
      "Factorisation des pages de résultats",
      "Sécurisation de l'accès MariaDB avec utilisateur dédié",
      "Protection CSRF sur les formulaires sensibles",
      "Mise en place de healthchecks Docker",
    ],
    tags: ['PHP', 'Docker', 'MariaDB', 'Sécurité', 'Audit'],
    competences: ['optimiser', 'conduire', 'collaborer', 'administrer', 'gerer'],
    status: 'Terminé',
    duration: 'Semestre 4',
    team: 'Binôme (Robin Biget)',
    context:
      "GGVote est une application web de vote que nous avons reprise dans le cadre de la SAE4. Après un audit complet de la sécurité, de la robustesse et des performances, nous avons défini un plan d'amélioration puis mis en œuvre plusieurs optimisations : factorisation du code, sécurisation de la base de données, gestion des erreurs, journalisation applicative, healthchecks Docker et optimisation SQL.",
    objectives: [
      "Auditer la sécurité, la robustesse et les performances",
      "Identifier les axes d'amélioration prioritaires",
      "Mettre en place les optimisations définies dans le cahier des charges",
      "Améliorer la maintenabilité du code",
      "Sécuriser l'environnement Docker et la base de données",
    ],
    difficulties: [
      "Comprendre une base de code existante sans l'avoir développée",
      "Identifier les points faibles de sécurité et de robustesse",
      "Factoriser du code sans modifier le comportement fonctionnel",
      "Mettre en place Docker et les healthchecks correctement",
    ],
    solutions: [
      "Utilisateur MariaDB dédié avec privilèges limités",
      "Variables d'environnement (.env) pour la configuration",
      "Protection CSRF",
      "Journalisation des erreurs avec error_log",
      "Healthchecks Docker",
      "Optimisation des requêtes SQL",
      "Factorisation des pages de résultats",
      "Export SQL de sauvegarde",
    ],
    learned: [
      "Réaliser un audit technique complet d'une application existante",
      "Identifier et corriger des failles de sécurité courantes",
      "Optimiser des requêtes SQL et réduire la duplication de code",
      "Utiliser Docker Compose dans un contexte de projet réel",
      "Mettre en place une démarche d'amélioration continue à partir d'un audit",
    ],
    result:
      "L'application GGVote est désormais plus sécurisée, plus maintenable et mieux supervisée. Les optimisations réalisées ont permis d'améliorer la gestion des erreurs, la sécurité de la base de données, l'organisation du code et la fiabilité de l'environnement Docker tout en conservant le comportement fonctionnel initial.",
  },

  {
    id: 3,
    slug: 'flutter-films',
    year: '2024',
    type: 'Mobile',
    category: 'mobile',
    featured: true,
    title: 'Flutter Films',
    description:
      "Application mobile Android/iOS développée avec Flutter et Dart, permettant de parcourir films et acteurs via l'API TMDB avec navigation fluide et gestion asynchrone.",
    image: flutterGallery[0],
    gallery: flutterGallery,
    highlights: [
      "Intégration de l'API REST TMDB avec gestion des états asynchrones",
      "Navigation multi-écrans avec Flutter Navigator et passage de données typés",
      "Affichage de fiches films, acteurs et notes sous forme de listes et détails",
      "Gestion robuste des erreurs réseau et des états de chargement",
    ],
    tags: ['Flutter', 'Dart', 'API REST', 'Android'],
    competences: ['realiser', 'optimiser'],
    status: 'Terminé',
    duration: '2 semaines',
    team: 'Solo',
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
    id: 4,
    slug: 'threejs-hockney',
    year: '2025',
    type: '3D / Web',
    category: 'web',
    featured: true,
    title: 'Three.js — Hockney',
    description:
      "Scène 3D interactive dans le navigateur inspirée de l'esthétique de David Hockney, réalisée avec Three.js et WebGL : géométries, matériaux, lumières et navigation OrbitControls.",
    image: threejsGallery[0],
    gallery: threejsGallery,
    highlights: [
      "Modélisation 3D d'une scène inspirée de l'art de David Hockney avec Three.js",
      "Utilisation de géométries, matériaux PBR et éclairage dynamique WebGL",
      "Navigation interactive avec OrbitControls (rotation, zoom, panoramique)",
      "Rendu temps réel dans le navigateur sans plugin externe",
    ],
    tags: ['Three.js', 'WebGL', 'JavaScript', 'HTML/CSS'],
    competences: ['realiser', 'optimiser'],
    status: 'Terminé',
    duration: '2 semaines',
    team: 'Solo',
    context:
      "Projet de découverte de la 3D dans le navigateur réalisé dans le cadre du BUT Informatique. L'objectif était d'implémenter une scène 3D interactive avec Three.js en s'inspirant de l'esthétique colorée et géométrique de l'artiste David Hockney, connu pour ses peintures aux aplats de couleurs vives.",
    objectives: [
      "Prendre en main la bibliothèque Three.js et le pipeline de rendu WebGL",
      "Modéliser une scène 3D avec géométries, matériaux et sources lumineuses",
      "Implémenter une navigation interactive avec OrbitControls",
      "Reproduire une esthétique artistique reconnaissable en 3D temps réel",
    ],
    difficulties: [
      "Comprendre le modèle mental de Three.js (Scene, Camera, Renderer, Mesh)",
      "Gérer les coordonnées 3D et le placement des objets dans l'espace",
      "Configurer l'éclairage pour obtenir l'esthétique flat/colorée de Hockney",
      "Optimiser les performances de rendu pour une animation fluide à 60fps",
    ],
    solutions: [
      "Lecture de la documentation Three.js et étude d'exemples officiels (threejs.org)",
      "Utilisation du système de coordonnées world-space avec des helpers visuels (AxesHelper)",
      "Combinaison de DirectionalLight et AmbientLight avec des matériaux MeshToonMaterial",
      "Limitation des géométries et utilisation de BufferGeometry pour les performances",
    ],
    learned: [
      "Concepts fondamentaux du rendu 3D : pipeline WebGL, caméra perspective, frustum",
      "API Three.js : Scene, PerspectiveCamera, WebGLRenderer, Mesh, Light",
      "Gestion de la boucle de rendu (requestAnimationFrame) et des animations",
      "Lien entre programmation 3D et notions mathématiques (vecteurs, matrices, transformations)",
    ],
    result:
      "Scène 3D interactive rendue en temps réel dans le navigateur, naviguable à la souris (rotation, zoom, panoramique). L'esthétique inspirée de Hockney est obtenue via des matériaux stylisés et un éclairage plat, avec des couleurs vives caractéristiques de son œuvre.",
  },

  {
    id: 5,
    slug: 'docker-api',
    year: '2025',
    type: 'DevOps',
    category: 'devops',
    featured: true,
    title: 'Docker API',
    description:
      "Déploiement et configuration d'une API REST dans un environnement Docker conteneurisé, testée et documentée avec Postman. Orchestration multi-services avec Docker Compose.",
    image: dockerGallery[0],
    gallery: dockerGallery,
    highlights: [
      "Conteneurisation d'une API REST avec Dockerfile optimisé",
      "Orchestration multi-services (API + base de données) avec Docker Compose",
      "Tests exhaustifs des endpoints REST avec Postman (GET, POST, PUT, DELETE)",
      "Documentation des routes et réponses dans une collection Postman exportable",
    ],
    tags: ['Docker', 'API REST', 'Postman', 'Linux'],
    competences: ['realiser', 'administrer', 'optimiser'],
    status: 'Terminé',
    duration: '1 semaine',
    team: 'Solo',
    context:
      "Projet DevOps réalisé dans le cadre du BUT Informatique pour maîtriser la conteneurisation avec Docker. L'objectif était de déployer une API REST dans un environnement Docker reproductible, d'orchestrer les services avec Docker Compose et de documenter tous les endpoints avec Postman.",
    objectives: [
      "Conteneuriser une API REST avec un Dockerfile optimisé et lisible",
      "Orchestrer plusieurs services (API + base de données) avec Docker Compose",
      "Tester exhaustivement les endpoints REST (GET, POST, PUT, DELETE) avec Postman",
      "Documenter les routes et réponses dans une collection Postman partageable",
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
      "API REST entièrement conteneurisée, déployable en une seule commande (docker-compose up). La collection Postman documente l'ensemble des endpoints avec exemples de requêtes et réponses. L'environnement est entièrement reproductible sur n'importe quelle machine disposant de Docker.",
  },

  /* ══════════════════════════════════════════════════
     AUTRES PROJETS (featured: false)
  ══════════════════════════════════════════════════ */

  {
    id: 6,
    slug: 'virtualbox-network-security',
    year: '2025',
    type: 'Réseau',
    category: 'reseau',
    featured: false,
    title: 'VirtualBox — Réseau & Sécurité',
    description:
      "Lab de sécurité réseau sous VirtualBox : configuration de VMs Linux en réseau, authentification SSH par clé, port knocking, port forwarding et accès graphique VNC.",
    image: vboxGallery[0],
    gallery: vboxGallery,
    highlights: [
      "Configuration de VMs Linux en réseau NAT/Host-Only avec VirtualBox",
      "Authentification SSH par clé publique/privée et désactivation du mot de passe",
      "Port knocking pour sécuriser l'accès SSH (séquence de ports cachée)",
      "Accès graphique distant via VNC et port forwarding SSH",
    ],
    tags: ['VirtualBox', 'Linux', 'SSH', 'OpenSSL', 'Réseau'],
    competences: ['administrer', 'optimiser'],
    status: 'Terminé',
    duration: '2 semaines',
    team: 'Solo',
    context:
      "Projet de sécurité réseau réalisé dans le cadre du BUT Informatique pour maîtriser l'administration système et la sécurisation des accès. L'environnement est entièrement virtualisé sous VirtualBox avec plusieurs VMs Linux interconnectées.",
    objectives: [
      "Créer et configurer des VMs Linux interconnectées sous VirtualBox",
      "Mettre en place l'authentification SSH par clé et désactiver l'accès par mot de passe",
      "Implémenter le port knocking pour sécuriser l'accès SSH",
      "Configurer le port forwarding et l'accès graphique distant via VNC",
    ],
    difficulties: [
      "Configuration des interfaces réseau VirtualBox (NAT, Host-Only, Bridged)",
      "Gestion des clés SSH et configuration de sshd_config sans se verrouiller dehors",
      "Mise en place du port knocking avec knockd sans perdre l'accès SSH actif",
      "Configuration de VNC à travers un tunnel SSH pour la sécurité",
    ],
    solutions: [
      "Utilisation de snapshots VirtualBox avant chaque opération risquée",
      "Test en session parallèle avant de couper l'accès par mot de passe",
      "Configuration de knockd avec une séquence de ports et rules iptables",
      "Tunnel SSH local (ssh -L) pour rediriger le port VNC vers localhost",
    ],
    learned: [
      "Architecture réseau d'une infrastructure virtualisée (interfaces, ponts, NAT)",
      "Administration SSH : clés, configuration sshd, hardening de l'accès",
      "Techniques de sécurisation réseau : port knocking, firewall iptables, tunnels",
      "Accès graphique à distance dans un environnement Linux sans interface graphique native",
    ],
    result:
      "Infrastructure virtualisée opérationnelle avec 2 VMs Linux interconnectées. L'accès SSH est sécurisé par clé, protégé par port knocking, et l'accès graphique VNC fonctionne à travers un tunnel SSH chiffré. Toutes les configurations sont documentées et reproductibles.",
  },

  {
    id: 7,
    slug: 'mini-shell',
    year: '2025',
    type: 'Système',
    category: 'systeme',
    featured: false,
    title: 'Mini-Shell',
    description:
      "Implémentation d'un shell Unix minimal en C : parsing de commandes, exécution de processus avec fork/exec, redirections stdin/stdout/stderr et gestion des pipes.",
    image: shellGallery[0],
    gallery: shellGallery,
    highlights: [
      "Parsing de la ligne de commande avec tokenisation en C",
      "Exécution de processus avec fork(), execvp() et wait()",
      "Redirections des entrées/sorties (stdin, stdout, stderr) avec dup2()",
      "Gestion des pipes entre processus avec pipe()",
    ],
    tags: ['C', 'Linux', 'Bash', 'Makefile'],
    competences: ['realiser', 'optimiser'],
    status: 'Terminé',
    duration: '3 semaines',
    team: 'Solo',
    context:
      "Projet de programmation système réalisé dans le cadre du BUT Informatique pour comprendre le fonctionnement interne d'un shell Unix. L'implémentation en C bas niveau permet de maîtriser les appels système POSIX (fork, exec, pipe, dup2) qui sont au cœur de tout OS Unix.",
    objectives: [
      "Comprendre le fonctionnement interne d'un shell Unix (boucle REPL)",
      "Implémenter le parsing de commandes avec gestion des arguments",
      "Gérer la création et la synchronisation de processus avec fork/exec/wait",
      "Implémenter les redirections I/O et les pipes inter-processus",
    ],
    difficulties: [
      "Parsing robuste de la ligne de commande (espaces, guillemets, opérateurs)",
      "Synchronisation entre processus parent et enfant avec wait() et waitpid()",
      "Duplication des descripteurs de fichiers avec dup2() sans laisser de fd ouverts",
      "Chaîner plusieurs processus avec des pipes sans deadlock",
    ],
    solutions: [
      "Tokenisation progressive avec strtok() et traitement des cas particuliers",
      "Structure d'arbre de commandes pour représenter les pipes et redirections",
      "Fermeture systématique des descripteurs inutilisés après dup2()",
      "Création des pipes avant le fork() et fermeture dans chaque processus fils",
    ],
    learned: [
      "Appels système POSIX : fork, exec, wait, pipe, dup2, open, close",
      "Modèle de processus Unix : espace d'adressage, héritage des fd, signaux",
      "Gestion mémoire manuelle en C : malloc/free sans fuite mémoire (valgrind)",
      "Compilation avec Makefile, flags de compilation (Wall, Wextra, sanitizers)",
    ],
    result:
      "Shell Unix fonctionnel acceptant des commandes simples et composées (pipes, redirections). L'exécution de pwd, ls, cat, grep et leurs combinaisons via pipes et redirections est correctement gérée. Le code compile sans warning avec -Wall et passe valgrind sans fuite mémoire.",
  },

  {
    id: 8,
    slug: 'cryptographie-rsa',
    year: '2025',
    type: 'Algorithmes',
    category: 'algo',
    featured: false,
    title: 'Cryptographie RSA',
    description:
      "Étude mathématique et implémentation Python de RSA : chiffrement, déchiffrement, et analyse de l'attaque de Wiener sur les petites clés privées via les fractions continues.",
    image: rsaGallery[0],
    gallery: rsaGallery,
    highlights: [
      "Implémentation complète de RSA (génération de clés, chiffrement, déchiffrement)",
      "Analyse de l'attaque de Wiener exploitant les petits exposants privés",
      "Calcul des convergents des fractions continues pour l'attaque",
      "Tableau récapitulatif comparant la sécurité selon la taille des clés",
    ],
    tags: ['Python', 'Cryptographie', 'Algorithmes', 'Mathématiques'],
    competences: ['realiser', 'optimiser'],
    status: 'Terminé',
    duration: '2 semaines',
    team: 'Binôme',
    context:
      "Projet de mathématiques appliquées et de cryptographie réalisé dans le cadre du BUT Informatique. L'objectif était d'implémenter l'algorithme RSA depuis zéro en Python et d'étudier une attaque connue (Wiener) exploitant les propriétés mathématiques des petites clés privées.",
    objectives: [
      "Comprendre et implémenter l'algorithme RSA (génération de clés, chiffrement, déchiffrement)",
      "Étudier l'attaque de Wiener et ses conditions d'application mathématiques",
      "Implémenter le calcul des fractions continues et de leurs convergents",
      "Analyser les limites de sécurité de RSA selon la taille des paramètres",
    ],
    difficulties: [
      "Implémenter l'algorithme d'Euclide étendu et l'exponentiation modulaire efficacement",
      "Comprendre les conditions exactes d'application de l'attaque de Wiener",
      "Calculer les convergents d'une fraction continue et identifier la clé privée",
      "Gérer les grands entiers Python sans perte de précision",
    ],
    solutions: [
      "Implémentation récursive de l'algorithme d'Euclide étendu pour l'inverse modulaire",
      "Étude du théorème de Wiener : condition d'(d < N^{1/4}/3) pour l'attaque",
      "Algorithme itératif de calcul des convergents à partir du développement en fraction continue",
      "Utilisation des entiers natifs Python (précision arbitraire) sans bibliothèque externe",
    ],
    learned: [
      "Fondements mathématiques de RSA : arithmétique modulaire, théorème d'Euler",
      "Fractions continues et leurs convergents : théorie et algorithme de calcul",
      "Attaque de Wiener : conditions, implémentation et mesure de l'impact sur la sécurité",
      "Bonnes pratiques de génération de clés RSA robustes (taille des exposants)",
    ],
    result:
      "Implémentation Python complète de RSA avec démonstration de l'attaque de Wiener sur des clés volontairement faibles. Le tableau récapitulatif montre les seuils de vulnérabilité selon la taille de d, et l'attaque retrouve la clé privée en quelques millisecondes sur des clés vulnérables.",
  },

  {
    id: 9,
    slug: 'probabilites-surbooking',
    year: '2024',
    type: 'Probabilités',
    category: 'algo',
    featured: false,
    title: 'Probabilités — Surbooking',
    description:
      "Modélisation probabiliste et simulation du problème du surbooking aérien en Python : loi binomiale, simulation Monte Carlo et visualisation Matplotlib des distributions et seuils.",
    image: surBookingGallery[0],
    gallery: surBookingGallery,
    highlights: [
      "Modélisation de la présentation des passagers par loi binomiale",
      "Simulation Monte Carlo pour estimer la probabilité de surbooking",
      "Calcul du nombre optimal de billets à surréserver selon le seuil de risque",
      "Visualisation des distributions et des résultats avec Matplotlib",
    ],
    tags: ['Python', 'Probabilités', 'Matplotlib', 'Statistiques'],
    competences: ['optimiser', 'conduire'],
    status: 'Terminé',
    duration: '2 semaines',
    team: 'Binôme',
    context:
      "Projet de mathématiques appliquées réalisé dans le cadre du BUT Informatique pour modéliser un problème industriel réel avec des outils probabilistes. Le surbooking aérien est un problème classique d'optimisation sous contrainte probabiliste.",
    objectives: [
      "Modéliser la présentation des passagers par une loi probabiliste adaptée",
      "Implémenter une simulation Monte Carlo pour estimer les probabilités empiriquement",
      "Calculer le nombre optimal de billets vendus pour un taux de risque donné",
      "Visualiser les résultats de manière claire et exploitable avec Matplotlib",
    ],
    difficulties: [
      "Choisir et justifier le modèle probabiliste adapté (loi binomiale vs Poisson)",
      "Implémenter une simulation Monte Carlo efficace sur de grands échantillons",
      "Interpréter les résultats et trouver le seuil optimal de surbooking",
      "Visualiser plusieurs scénarios de manière lisible sur un seul graphique",
    ],
    solutions: [
      "Justification de la loi binomiale B(n, p) avec p = taux de présentation moyen",
      "Vectorisation de la simulation avec NumPy pour des performances optimales",
      "Dichotomie sur le nombre de billets pour trouver le seuil de risque cible",
      "Superposition de distributions et d'annotations Matplotlib pour la lisibilité",
    ],
    learned: [
      "Modélisation probabiliste d'un problème réel : choix et justification du modèle",
      "Simulation Monte Carlo et convergence des estimateurs empiriques",
      "Optimisation sous contrainte probabiliste et analyse de sensibilité",
      "Visualisation scientifique avec Matplotlib (subplots, annotations, légendes)",
    ],
    result:
      "Modèle probabiliste opérationnel donnant le nombre optimal de billets à surréserver selon le taux de risque accepté. Les graphiques Matplotlib montrent clairement les distributions pour différents scénarios (25 et 105 sièges) et le compromis entre rentabilité et risque de refus d'embarquement.",
  },

  {
    id: 10,
    slug: 'simplexe-klee-minty',
    year: '2025',
    type: 'Optimisation',
    category: 'algo',
    featured: false,
    title: 'Simplexe — Klee-Minty',
    description:
      "Implémentation et analyse de l'algorithme du simplexe en Python. Étude du pire cas sur le polytope de Klee-Minty, visualisation 3D du cheminement et comparaison des critères de pivot.",
    image: simplexeGallery[0],
    gallery: simplexeGallery,
    highlights: [
      "Implémentation de l'algorithme du simplexe (méthode des tableaux)",
      "Visualisation 3D du cheminement sur le polytope de Klee-Minty",
      "Comparaison des critères de pivot (Bland, Dantzig, plus grand coefficient)",
      "Analyse de la complexité exponentielle sur les instances adverses",
    ],
    tags: ['Python', 'Algorithmes', 'Mathématiques', 'Matplotlib'],
    competences: ['realiser', 'optimiser'],
    status: 'Terminé',
    duration: '2 semaines',
    team: 'Binôme',
    context:
      "Projet d'algorithmique et d'optimisation linéaire réalisé dans le cadre du BUT Informatique. L'objectif était d'implémenter l'algorithme du simplexe et d'analyser son comportement sur le polytope de Klee-Minty, connu pour mettre en échec sa complexité polynomiale supposée.",
    objectives: [
      "Implémenter l'algorithme du simplexe par la méthode des tableaux en Python",
      "Étudier le pire cas : le polytope de Klee-Minty et sa complexité exponentielle",
      "Comparer les performances selon différents critères de choix de variable pivotante",
      "Visualiser le cheminement de l'algorithme sur le polytope en 3D",
    ],
    difficulties: [
      "Implémenter correctement les opérations de pivot sur le tableau simplex",
      "Générer le polytope de Klee-Minty en dimension n et vérifier ses propriétés",
      "Visualiser le cheminement 3D de l'algorithme de manière lisible et interactive",
      "Comparer équitablement plusieurs variantes de l'algorithme sur les mêmes instances",
    ],
    solutions: [
      "Implémentation matricielle avec NumPy pour les opérations de pivot",
      "Génération du polytope de Klee-Minty par formule récurrente",
      "Projection 3D du cheminement avec mpl_toolkits.mplot3d et tracé des arêtes",
      "Benchmark automatisé sur des dimensions croissantes avec mesure du nombre d'itérations",
    ],
    learned: [
      "Algorithme du simplexe : théorie de l'optimisation linéaire, tableaux, règles de pivot",
      "Notion de complexité en pratique vs théorie : algorithme exponentiel au pire cas",
      "Polytopes convexes et leur lien avec l'optimisation linéaire (théorème fondamental)",
      "Visualisation scientifique 3D avec Matplotlib et analyse comparative de variantes",
    ],
    result:
      "Implémentation complète du simplexe avec 3 critères de pivot. La visualisation 3D du cheminement sur Klee-Minty en dimension 3 illustre clairement le comportement exponentiel. Le tableau de synthèse compare le nombre d'itérations par variante et confirme la résistance de Klee-Minty.",
  },

  {
    id: 11,
    slug: 'automates-langages',
    year: '2025',
    type: 'Théorie',
    category: 'algo',
    featured: false,
    title: 'Automates & Langages',
    description:
      "Implémentation Python d'automates finis déterministes et non-déterministes : conversion NFA→DFA, minimisation par l'algorithme de Nerode et reconnaissance de langages formels.",
    image: automatesGallery[0],
    gallery: automatesGallery,
    highlights: [
      "Implémentation d'automates finis déterministes (DFA) et non-déterministes (NFA)",
      "Conversion NFA → DFA par construction de sous-ensembles",
      "Minimisation d'automates par l'équivalence de Nerode",
      "Visualisation graphique des automates et reconnaissance de langages",
    ],
    tags: ['Python', 'Automates', 'Algorithmes', 'Théorie'],
    competences: ['realiser', 'optimiser'],
    status: 'Terminé',
    duration: '2 semaines',
    team: 'Binôme',
    context:
      "Projet de théorie des langages formels réalisé dans le cadre du BUT Informatique. L'objectif était d'implémenter en Python les structures et algorithmes fondamentaux de la théorie des automates : DFA, NFA, conversion, et minimisation par l'équivalence de Nerode.",
    objectives: [
      "Représenter formellement un automate fini (états, alphabet, transitions, états finaux)",
      "Implémenter la conversion NFA → DFA par la méthode des sous-ensembles",
      "Minimiser un DFA par l'algorithme de partition de Nerode",
      "Visualiser les automates sous forme de graphes et tester la reconnaissance de mots",
    ],
    difficulties: [
      "Représenter les ensembles d'états (pour NFA) et les transitions partielles",
      "Implémenter correctement la construction en sous-ensembles pour NFA → DFA",
      "Appliquer l'algorithme de Nerode avec gestion des classes d'équivalence",
      "Visualiser des automates potentiellement complexes de manière lisible",
    ],
    solutions: [
      "Utilisation de frozenset pour représenter les états composites du DFA résultant",
      "Construction BFS des états du DFA à partir de l'état initial NFA",
      "Algorithme de partition raffinée de Nerode avec gestion des états puits",
      "Bibliothèque graphviz pour générer des graphes d'automates automatiquement",
    ],
    learned: [
      "Théorie formelle des automates : DFA, NFA, équivalence, minimisation",
      "Algorithme de construction de sous-ensembles et sa complexité exponentielle au pire cas",
      "Équivalence de Nerode et critère de régularité d'un langage",
      "Représentation et manipulation de graphes en Python (graphviz, nx)",
    ],
    result:
      "Bibliothèque Python implémentant DFA, NFA, la conversion NFA→DFA et la minimisation de Nerode. Les tests sur plusieurs langages formels (a^n b^n, mots pairs, etc.) confirment la correction des algorithmes. La visualisation graphviz génère des diagrammes clairs des automates.",
  },

  {
    id: 12,
    slug: 'vr-ar',
    year: '2025',
    type: 'Recherche',
    category: 'recherche',
    featured: false,
    title: 'VR/AR — Recherche',
    description:
      "Travail de recherche approfondi en équipe sur les technologies VR et AR : état de l'art, cas d'usage professionnels (santé, industrie, jeu vidéo) et présentation orale devant la promotion.",
    image: vrarGallery[0],
    gallery: vrarGallery,
    highlights: [
      "Analyse comparative des technologies VR, AR et MR (réalité mixte)",
      "Étude des applications professionnelles dans la santé, l'industrie et le jeu vidéo",
      "Support de présentation de 25 slides structuré et professionnel",
      "Présentation orale avec session de questions-réponses devant la promotion",
    ],
    tags: ['VR', 'AR', 'Recherche', 'Présentation'],
    competences: ['conduire', 'collaborer'],
    status: 'Terminé',
    duration: '3 semaines',
    team: 'Équipe de 3',
    context:
      "Travail de recherche réalisé en groupe dans le cadre du BUT Informatique sur les technologies de réalité virtuelle et augmentée. L'objectif était de produire une analyse complète de l'état de l'art, d'identifier les cas d'usage professionnels dans plusieurs secteurs, puis de présenter les conclusions devant la promotion.",
    objectives: [
      "Analyser l'état de l'art des technologies VR, AR et MR (réalité mixte)",
      "Identifier les cas d'usage professionnels dans la santé, l'industrie et le jeu vidéo",
      "Réaliser un support de présentation structuré, visuel et professionnel",
      "Présenter et défendre les conclusions oralement avec session de questions-réponses",
    ],
    difficulties: [
      "Synthétiser une grande quantité d'informations techniques issues de sources variées",
      "Vulgariser des concepts complexes pour un public à profil mixte",
      "Coordonner le travail en équipe et répartir équitablement les responsabilités",
      "Différencier clairement VR, AR et MR avec des exemples concrets et visuels",
    ],
    solutions: [
      "Répartition thématique : chaque membre responsable d'un secteur d'application",
      "Schémas comparatifs et tableaux synthétiques pour illustrer les différences",
      "Planning hebdomadaire et points de synchronisation réguliers en équipe",
      "Glossaire technique intégré et exemples concrets pour chaque technologie",
    ],
    learned: [
      "Méthodes de recherche documentaire et veille technologique en informatique",
      "Communication orale et structuration d'une présentation technique",
      "Travail collaboratif : organisation, coordination et gestion des contributions",
      "Vision prospective des technologies émergentes et de leurs enjeux professionnels",
    ],
    result:
      "Support de présentation complet (25 slides) couvrant les technologies VR/AR/MR, leurs applications sectorielles et leurs perspectives d'avenir. La soutenance devant la promotion a inclus une session de questions-réponses. Le projet a développé des compétences transversales en recherche, communication et travail d'équipe.",
  },
]

/* ─────────────────────────────────────────────────────────────────
   Helpers utilitaires
   ───────────────────────────────────────────────────────────────── */

/** Projets phares, dans l'ordre du tableau */
export const featuredProjects = projects.filter((p) => p.featured)

/** Projets non phares */
export const otherProjects = projects.filter((p) => !p.featured)

/** Toutes les catégories présentes (dédupliquées, ordre d'apparition) */
export const categories = [...new Set(projects.map((p) => p.category))]
