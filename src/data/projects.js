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
  'HomePageGGVoteSAE4',
  'DockerDesktopSAAE4',
  'performance-monitoring',
  'optimization-objectives',
  'project-estimation-part1',
  'project-estimation-part2',
)

const flutterGallery = imgs(
  'flutter-films',
  'AccueilFlutter',
  'ListeDesActeursFlutter',
  'FicheFilmDetailleFlutter',
  'CarteInteractiveFlutter',
  'QuizzEnCoursFlutter',
)

const threejsGallery = imgs(
  'threejs-hockney',
  'threejs-scene-overview',
  'threejs-technical-details',
)

const dockerGallery = imgs(
  'docker-api',
  'Vision-ixDesktop',
  'Vision-ixMobile',
  'MaquetteFigmaVision-ix',
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
    title: 'SAE4 — Audit et amélioration d\'une application complexe',
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
    tags: ['PHP', 'Docker', 'MariaDB', 'SQL', 'Sécurité', 'Audit'],
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
      "L'audit a débouché sur plusieurs améliorations techniques de GGVote : sécurité de la base de données, gestion des erreurs, organisation du code et fiabilité de l'environnement Docker. Les fonctionnalités existantes de l'application ont été conservées — le travail a surtout porté sur la qualité technique (sécurité, robustesse, maintenabilité) plutôt que sur l'ajout de nouvelles fonctionnalités.",
  },

  {
    id: 3,
    slug: 'flutter-films',
    year: '2026',
    type: 'Mobile',
    category: 'mobile',
    featured: true,
    title: 'Flutter Films',
    description:
      "Application mobile autour du cinéma développée en Flutter dans le cadre du BUT Informatique. On peut parcourir et rechercher des acteurs, consulter leurs films et les fiches détaillées, explorer une carte interactive et jouer à des quiz. Les données viennent de l'API TMDB.",
    image: flutterGallery[0],
    gallery: flutterGallery,
    highlights: [
      "Liste des acteurs avec recherche pour retrouver rapidement quelqu'un",
      "Films associés à chaque acteur et accès à leurs fiches détaillées",
      "Fiche film complète : affiche, note, synopsis et casting",
      "Carte interactive (OpenStreetMap) avec plusieurs marqueurs",
      "Plusieurs quiz cinéma pour tester ses connaissances",
      "Navigation fluide entre toutes les pages de l'application",
    ],
    tags: ['Flutter', 'Dart', 'TMDB API', 'OpenStreetMap', 'Material Design'],
    competences: ['realiser', 'optimiser'],
    status: 'Terminé',
    duration: '6 semaines',
    team: 'Solo',
    context:
      "Flutter Films est une application mobile que j'ai développée pendant le BUT Informatique pour apprendre Flutter et Dart. L'idée était de partir d'un thème cinéma et de construire une vraie application avec plusieurs pages : une liste d'acteurs avec recherche, les films de chaque acteur, des fiches détaillées, une carte interactive et des quiz. Les informations sur les films et les acteurs sont récupérées via l'API TMDB.",
    objectives: [
      "Développer une application mobile complète avec Flutter et Dart",
      "Récupérer et afficher les données de films et d'acteurs depuis l'API TMDB",
      "Permettre la recherche d'acteurs et l'accès à leurs films",
      "Construire des fiches détaillées (affiche, note, synopsis, casting)",
      "Ajouter une carte interactive et des quiz pour enrichir l'application",
    ],
    difficulties: [
      "Découvrir Flutter et le fonctionnement des widgets en partant de zéro",
      "Gérer les appels à l'API TMDB et l'affichage pendant le chargement",
      "Mettre en place une carte interactive avec plusieurs marqueurs",
      "Organiser la navigation entre toutes les pages sans s'y perdre",
    ],
    solutions: [
      "Découpage de l'application en widgets réutilisables pour chaque type d'écran",
      "Appels à l'API TMDB avec gestion des états de chargement et des erreurs",
      "Intégration d'OpenStreetMap pour la carte et placement des marqueurs",
      "Mise en place du système de navigation de Flutter entre les différentes pages",
    ],
    learned: [
      "Développer une application mobile complète avec Flutter et Dart",
      "Consommer une API externe (TMDB) et afficher les données récupérées",
      "Construire des interfaces avec Material Design et des widgets réutilisables",
      "Intégrer une carte interactive et gérer la navigation entre plusieurs pages",
    ],
    result:
      "Au final, une application cinéma qui fonctionne et qui regroupe plusieurs fonctionnalités : la recherche d'acteurs, l'affichage de leurs films, les fiches détaillées, une carte interactive et des quiz. C'est le projet qui m'a permis de vraiment apprendre Flutter et de voir comment relier une application mobile à une API.",
  },

  {
    id: 4,
    slug: 'threejs-hockney',
    year: '2026',
    type: '3D / Web',
    category: 'web',
    featured: true,
    title: 'Three.js — Hockney',
    description:
      "Reproduction 3D interactive du tableau « A Bigger Splash » de David Hockney, réalisée avec Three.js et WebGL. La scène (maison, piscine, plongeoir, palmiers, éclaboussure) est affichée à côté de l'œuvre originale, avec une interface qui permet de déplacer le soleil et de changer l'ambiance lumineuse.",
    image: threejsGallery[0],
    gallery: threejsGallery,
    highlights: [
      "Reproduction 3D de « A Bigger Splash » affichée à côté du tableau original",
      "Maison, piscine, plongeoir et palmiers modélisés à partir de géométries de base",
      "Interface dat.gui pour déplacer le soleil et changer l'ambiance lumineuse",
      "Reflets sur les baies vitrées et éclaboussure animée dans la piscine",
      "Navigation libre dans la scène avec OrbitControls (rotation, zoom)",
      "Ombres dynamiques et palmiers animés pour un rendu plus vivant",
    ],
    tags: ['Three.js', 'WebGL', 'JavaScript', 'dat.gui', 'HTML/CSS'],
    competences: ['realiser', 'optimiser'],
    status: 'Terminé',
    duration: 'Semestre 4',
    team: 'Solo',
    context:
      "Projet de 3D web réalisé dans le cadre du BUT Informatique. L'objectif était de reproduire en 3D interactive un tableau connu de David Hockney, « A Bigger Splash », et de l'afficher à côté de l'œuvre originale pour comparer. J'ai choisi ce tableau pour son style géométrique et ses aplats de couleurs, qui se prêtent bien à une modélisation avec des formes simples. Toute la scène est faite avec Three.js et WebGL.",
    objectives: [
      "Reproduire en 3D le tableau « A Bigger Splash » le plus fidèlement possible",
      "Modéliser la scène (maison, piscine, plongeoir, palmiers) avec Three.js",
      "Recréer l'ambiance lumineuse du tableau avec un éclairage et des ombres",
      "Ajouter une interface pour déplacer le soleil et changer l'ambiance",
      "Permettre de se déplacer librement dans la scène avec la souris",
    ],
    difficulties: [
      "Découvrir Three.js et comprendre comment fonctionne une scène 3D",
      "Reproduire les couleurs et l'ambiance du tableau de façon crédible",
      "Gérer les reflets sur les vitres et l'éclaboussure de la piscine",
      "Obtenir des ombres correctes sans trop ralentir l'affichage",
    ],
    solutions: [
      "Modélisation à partir de géométries de base (BoxGeometry, PlaneGeometry) et palmiers dupliqués avec clone()",
      "Matériaux MeshLambertMaterial et MeshStandardMaterial avec des Normal Maps pour le relief",
      "Reflector pour les baies vitrées et Sprite avec texture PNG pour l'éclaboussure",
      "Éclairage AmbientLight + DirectionalLight et ombres adoucies (PCFSoftShadowMap), réglables via dat.gui",
    ],
    learned: [
      "Prendre en main Three.js et le rendu 3D temps réel dans le navigateur (WebGL)",
      "Modéliser une scène avec des géométries, des matériaux et des textures",
      "Gérer l'éclairage, les ombres et quelques effets visuels (reflets, éclaboussure)",
      "Ajouter une interface interactive avec dat.gui pour modifier la scène en direct",
    ],
    result:
      "Au final, une reproduction 3D de « A Bigger Splash » qu'on peut explorer librement à la souris et comparer au tableau original affiché juste à côté. On peut déplacer le soleil et changer l'ambiance lumineuse en temps réel, avec les ombres et les reflets qui réagissent. C'est le projet qui m'a fait découvrir la 3D dans le navigateur et le fonctionnement de Three.js.",
  },

  {
    id: 5,
    slug: 'docker-api',
    year: '2026',
    type: 'Web / IA',
    category: 'web',
    featured: true,
    title: 'Vision-ix',
    description:
      "Vision-ix est un site web qui identifie des personnages de l'univers Astérix à partir d'une image, grâce à une IA. Réalisé en trinôme au semestre 4, le projet réutilise une stack vue en TP (Docker, API REST, Postman). De mon côté, j'ai conçu la maquette Figma et développé la page « Défiez-moi » en JavaScript et PHP : upload d'image, prise de photo, appel à l'API et affichage du résultat de l'IA.",
    image: dockerGallery[0],
    gallery: dockerGallery,
    highlights: [
      "Maquette de l'interface réalisée sur Figma avant le développement",
      "Page « Défiez-moi » développée en JavaScript et PHP (upload d'image et prise de photo)",
      "Envoi de l'image à l'API REST et affichage du personnage reconnu par l'IA",
      "Système de feedback Oui / Neutre / Non sur le résultat de l'IA",
      "Interface responsive adaptée au mobile et au desktop (CSS personnalisé)",
      "Intégration du frontend dans l'architecture Docker du projet",
    ],
    tags: ['JavaScript', 'PHP', 'API REST', 'Docker', 'Postman', 'Figma'],
    competences: ['realiser', 'optimiser', 'conduire', 'collaborer'],
    status: 'Terminé',
    duration: 'Semestre 4',
    team: 'Trinôme (Robin Biget, Julien Durney)',
    context:
      "Au départ, on a fait des TP autour de Docker, d'une API REST et de Postman. Ensuite, dans le cadre d'un projet de semestre 4, on a réutilisé cette stack pour développer Vision-ix, un site qui reconnaît des personnages d'Astérix sur une image grâce à une IA. Le projet a été fait en trinôme avec Robin Biget et Julien Durney : Robin s'est occupé de l'historique, Julien des statistiques, et moi de la page « Défiez-moi ». On a développé le frontend et l'intégration avec l'API existante, le tout dans une architecture Docker.",
    objectives: [
      "Concevoir la maquette de l'interface sur Figma avant de développer",
      "Développer en JavaScript et PHP la page « Défiez-moi » (upload, prise de photo, résultat)",
      "Communiquer avec l'API REST pour envoyer l'image et récupérer le résultat de l'IA",
      "Afficher le résultat de l'IA avec un système de feedback Oui / Neutre / Non",
      "Avoir une interface responsive qui fonctionne sur mobile et desktop",
    ],
    difficulties: [
      "Passer d'une maquette Figma à une vraie interface web fidèle au design",
      "Gérer l'upload d'image et la prise de photo depuis le navigateur",
      "Communiquer avec l'API et gérer l'attente de la réponse de l'IA",
      "Rendre la page agréable à utiliser aussi bien sur mobile que sur desktop",
    ],
    solutions: [
      "Découpage de la page en morceaux de code JavaScript et templates PHP réutilisables d'après la maquette",
      "Champ d'upload et accès à la caméra pour la prise de photo dans le navigateur",
      "Appel à l'API REST avec gestion du chargement et affichage du résultat",
      "Mise en page responsive en CSS personnalisé et tests sur plusieurs tailles d'écran",
    ],
    learned: [
      "Passer d'une maquette Figma à une interface web concrète",
      "Développer une interface responsive en JavaScript, PHP et CSS personnalisé",
      "Faire communiquer un frontend avec une API REST (envoi d'image, résultat)",
      "Travailler en équipe en se répartissant les pages du site",
    ],
    result:
      "Au final, Vision-ix permet d'envoyer une image (depuis un fichier ou la caméra) et d'obtenir le personnage d'Astérix reconnu par l'IA, avec un niveau de fiabilité et un retour Oui / Neutre / Non. J'ai surtout travaillé la page « Défiez-moi », de la maquette Figma jusqu'à l'intégration avec l'API. C'est le projet où j'ai le plus pratiqué le développement web en JavaScript/PHP et le travail en équipe.",
  },

  /* ══════════════════════════════════════════════════
     AUTRES PROJETS (featured: false)
  ══════════════════════════════════════════════════ */

  {
    id: 6,
    slug: 'virtualbox-network-security',
    year: '2026',
    type: 'Réseau',
    category: 'reseau',
    featured: false,
    title: 'VirtualBox — Administration Système & Sécurité Réseau',
    description:
      "Lab d'administration système et de sécurité réseau monté sous VirtualBox. Mise en place de machines virtuelles Linux interconnectées (NAT/Host-Only), puis sécurisation des accès : authentification SSH par clé, port knocking, tunnel SSH et accès graphique VNC chiffré.",
    image: vboxGallery[0],
    gallery: vboxGallery,
    highlights: [
      "Création et configuration de machines virtuelles Linux sous VirtualBox",
      "Mise en réseau des VMs en NAT et Host-Only",
      "Authentification SSH par clé publique/privée et désactivation du mot de passe",
      "Port knocking pour masquer et sécuriser l'accès SSH",
      "Tunnel SSH (port forwarding) pour chiffrer les connexions",
      "Accès graphique distant via VNC sécurisé à travers le tunnel SSH",
    ],
    tags: ['VirtualBox', 'Linux', 'SSH', 'OpenSSL', 'Réseau'],
    competences: ['administrer', 'optimiser'],
    status: 'Terminé',
    duration: 'Semestre 4',
    team: 'Solo',
    context:
      "Projet d'administration système et de sécurité réseau réalisé dans le cadre du BUT Informatique. L'objectif était de monter une petite infrastructure entièrement virtualisée sous VirtualBox, avec plusieurs VMs Linux interconnectées, puis de sécuriser progressivement les accès réseau (SSH, port knocking, tunnels, VNC).",
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
    title: 'Mini-Shell Unix en C',
    description:
      "Implémentation d'un mini-shell Unix en C basé sur les appels système POSIX. Le projet couvre le parsing de commandes, la gestion des processus avec fork/exec/wait, les redirections d'entrées/sorties et l'exécution de pipelines entre processus.",
    image: shellGallery[0],
    gallery: shellGallery,
    highlights: [
      "Parsing de la ligne de commande avec tokenisation en C",
      "Exécution de processus avec fork(), execvp() et wait()",
      "Redirections des entrées/sorties (stdin, stdout, stderr) avec dup2()",
      "Gestion des pipes entre processus avec pipe()",
    ],
    tags: ['C', 'Linux', 'Bash', 'Makefile', 'POSIX'],
    competences: ['realiser', 'optimiser'],
    status: 'Terminé',
    duration: 'Semestre 3',
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
    title: "Cryptographie RSA & Analyse de l'attaque de Wiener",
    description:
      "Projet de cryptographie appliquée réalisé en Python autour de l'algorithme RSA. Implémentation complète du chiffrement et du déchiffrement, étude mathématique des fractions continues et analyse de l'attaque de Wiener permettant de retrouver certaines clés privées insuffisamment sécurisées.",
    image: rsaGallery[0],
    gallery: rsaGallery,
    highlights: [
      "Implémentation complète de RSA (génération de clés, chiffrement, déchiffrement)",
      "Analyse de l'attaque de Wiener exploitant les petits exposants privés",
      "Calcul des convergents des fractions continues pour l'attaque",
      "Tableau récapitulatif comparant la sécurité selon la taille des clés",
    ],
    tags: ['Python', 'Cryptographie', 'Algorithmes', 'Mathématiques', 'RSA', 'Cybersécurité'],
    competences: ['realiser', 'optimiser'],
    status: 'Terminé',
    duration: 'Semestre 3',
    team: 'Binôme (Lucas Charbonnel)',
    context:
      "Projet de mathématiques appliquées et de cryptographie réalisé dans le cadre du BUT Informatique en binôme avec Lucas Charbonnel. L'objectif était d'implémenter l'algorithme RSA depuis zéro en Python, puis d'étudier l'attaque de Wiener afin de comprendre les limites de sécurité liées à certaines configurations de clés privées.",
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
    year: '2025',
    type: 'Probabilités',
    category: 'algo',
    featured: false,
    title: 'Probabilités & Optimisation du Surbooking',
    description:
      "Projet de modélisation probabiliste réalisé en Python autour du problème du surbooking aérien. Utilisation de lois de probabilité, simulations Monte Carlo et visualisations Matplotlib pour déterminer le nombre optimal de billets à vendre selon un niveau de risque accepté.",
    image: surBookingGallery[0],
    gallery: surBookingGallery,
    highlights: [
      "Modélisation de la présentation des passagers par loi binomiale",
      "Simulation Monte Carlo pour estimer la probabilité de surbooking",
      "Calcul du nombre optimal de billets à surréserver selon le seuil de risque",
      "Visualisation des distributions et des résultats avec Matplotlib",
    ],
    tags: ['Python', 'Probabilités', 'Matplotlib', 'Statistiques', 'Monte Carlo'],
    competences: ['optimiser', 'conduire'],
    status: 'Terminé',
    duration: 'Semestre 3',
    team: 'Binôme (Lucas Charbonnel)',
    context:
      "Projet de mathématiques appliquées réalisé dans le cadre du BUT Informatique en binôme avec Lucas Charbonnel. L'objectif était de modéliser le comportement des passagers d'une compagnie aérienne, d'évaluer les risques liés au surbooking et de déterminer une stratégie optimale conciliant rentabilité et satisfaction client.",
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
