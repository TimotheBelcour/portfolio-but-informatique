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
      'Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences',
      "Appliquer des principes d'accessibilité et d'ergonomie",
      'Adopter de bonnes pratiques de conception et de programmation',
      "Vérifier et valider la qualité de l'application par les tests",
    ],
    apprentissages: [
      "Implémenter une application à partir de spécifications fonctionnelles : du cahier des charges au code fonctionnel",
      "Adopter des bonnes pratiques : nommage, séparation des responsabilités, architecture claire (MVC, couches)",
      "Développer des interfaces utilisateur pour le web (HTML/CSS/PHP) et le mobile (Flutter/Dart)",
      "Vérifier la conformité des fonctionnalités développées par des tests manuels et des scénarios de validation",
    ],
    analyse:
      "Au fil des projets du BUT, j'ai appris à partir d'un besoin concret et à produire quelque chose de fonctionnel — une plateforme web, une appli mobile, une scène 3D interactive. J'ai progressé sur la façon de structurer mon code et d'organiser mes projets. Là où je suis encore limité, c'est sur les tests : je vérifie manuellement, mais je n'ai pas encore vraiment de pratique des tests automatisés. L'accessibilité, c'est pareil — je connais le principe mais je n'y consacre pas encore assez d'attention. Pour la suite, j'aimerais mieux poser la conception avant de me lancer dans le code, et commencer à tester de façon plus rigoureuse.",
    niveauScore: 3,
  },
  {
    id: 2,
    slug: 'optimiser',
    title: 'Optimiser',
    fullTitle: 'Optimiser des applications informatiques',
    color: 'blue',
    description:
      "Analyser et proposer des solutions informatiques en tenant compte des contraintes de performance, de sécurité et d'impact.",
    criteres: [
      'Choisir des structures de données complexes adaptées au problème',
      'Utiliser des techniques algorithmiques adaptées pour des problèmes complexes',
      'Comprendre les enjeux et moyens de sécurisation des données et du code',
      "Évaluer l'impact environnemental et sociétal des solutions proposées",
    ],
    apprentissages: [
      "Choisir et implémenter des structures de données adaptées : tableaux de pivots, fractions continues, ensembles d'états",
      "Analyser et comparer des algorithmes sur des cas réels : complexité, nombre d'itérations, comportement au pire cas",
      "Appliquer des mesures de sécurisation concrètes : hachage bcrypt, requêtes préparées PDO, chiffrement TLS",
      "Évaluer les performances d'une application avec des outils de mesure : profiling SQL, analyse réseau Wireshark",
    ],
    analyse:
      "J'ai eu l'occasion de travailler sur des algorithmes assez complexes dans plusieurs projets, ce qui m'a aidé à mieux comprendre les questions de performance et de complexité. Sur la sécurité, j'ai mis en pratique quelques techniques concrètes et je commence à avoir de bons réflexes. Ce que je maîtrise moins bien, c'est tout ce qui touche à l'éco-conception et à l'impact des solutions : je sais que ça existe, mais ça reste surtout théorique pour moi. Je dois aussi progresser sur la mesure de performance — je suis plus à l'aise pour identifier un problème que pour le quantifier vraiment.",
    niveauScore: 2,
  },
  {
    id: 3,
    slug: 'administrer',
    title: 'Administrer',
    fullTitle: 'Administrer des systèmes informatiques communicants complexes',
    color: 'green',
    description:
      "Déployer, configurer et sécuriser des systèmes, serveurs et services réseaux dans des environnements virtualisés.",
    criteres: [
      'Concevoir et développer des applications communicantes',
      'Utiliser des serveurs et des services réseaux virtualisés',
      "Sécuriser les services et données d'un système",
    ],
    apprentissages: [
      "Configurer un serveur Apache avec Virtual Host HTTPS, certificat OpenSSL et redirection HTTP → HTTPS",
      "Déployer des services dans des environnements virtualisés avec Docker et Docker Compose",
      "Créer et interconnecter des machines virtuelles Linux sous VirtualBox (NAT, Host-Only, SSH, VNC)",
      "Sécuriser des accès réseau : authentification par clé SSH, port knocking, tunnels chiffrés",
    ],
    analyse:
      "J'ai eu l'occasion de travailler avec des environnements assez variés — Docker, Linux, Apache, VirtualBox — et j'ai appris à configurer, déployer et sécuriser des services de façon concrète. Je suis plus à l'aise sur la conteneurisation et la configuration HTTPS/SSH. Là où je manque encore de recul, c'est sur les environnements réseau plus complexes et sur la façon de surveiller des systèmes en production. Jusqu'ici j'ai surtout travaillé en local ou en virtuel, donc je n'ai pas encore d'expérience sur de vraies infrastructures. Pour la suite, je veux continuer à pratiquer et mieux comprendre comment ça se passe en conditions réelles.",
    niveauScore: 3,
  },
  {
    id: 4,
    slug: 'gerer',
    title: 'Gérer',
    fullTitle: "Gérer des données de l'information",
    color: 'orange',
    description:
      "Concevoir, administrer et exploiter les données d'une organisation en garantissant leur qualité et leur confidentialité.",
    criteres: [
      "Optimiser les modèles de données de l'entreprise",
      'Assurer la confidentialité des données',
      'Organiser la restitution de données à travers la programmation et la visualisation',
      'Manipuler des données hétérogènes',
    ],
    apprentissages: [
      "Concevoir et optimiser des modèles de données relationnels : MCD, MLD, normalisation jusqu'en 3NF",
      "Rédiger des requêtes SQL avec jointures, agrégats, sous-requêtes et clauses de filtrage",
      "Assurer la confidentialité des données : droits d'accès, prévention des injections SQL, hachage",
      "Organiser la restitution de données issues de traitements Python via Matplotlib et tableaux récapitulatifs",
    ],
    analyse:
      "J'ai surtout développé cette compétence à travers la conception de bases de données et l'écriture de requêtes SQL dans mes projets web. J'ai aussi eu l'occasion de produire des visualisations en Python dans des projets d'analyse. Ce que je maîtrise moins bien, c'est la manipulation de données plus volumineuses ou issues de sources variées — je n'ai pas encore eu à gérer ça dans un projet réel. C'est un domaine où je dois encore progresser, surtout si je travaille un jour sur des projets qui impliquent beaucoup de données.",
    niveauScore: 3,
  },
  {
    id: 5,
    slug: 'conduire',
    title: 'Conduire',
    fullTitle: 'Conduire un projet',
    color: 'yellow',
    description:
      "Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs.",
    criteres: [
      "Identifier les processus présents dans une organisation",
      "Formaliser les besoins du client et de l'utilisateur",
      "Identifier les critères de faisabilité d'un projet informatique",
      'Définir et mettre en œuvre une démarche de suivi de projet',
    ],
    apprentissages: [
      "Formaliser les besoins d'un projet à partir d'un cahier des charges et produire une documentation fonctionnelle",
      "Estimer la taille et la faisabilité d'un projet informatique à partir de différentes méthodes d'analyse",
      "Planifier et suivre les étapes d'un projet avec Trello : tâches, jalons, livrables et priorités",
      "Présenter et défendre un projet à l'oral devant un jury ou une promotion, en français et en anglais",
    ],
    analyse:
      "J'ai appris à formaliser les besoins d'un projet, à écrire un cahier des charges et à planifier avec Trello. J'ai aussi participé à des présentations orales en français et en anglais, ce qui m'a aidé à mieux organiser mes idées. Là où je dois encore progresser, c'est sur l'anticipation : je sous-estime parfois la complexité d'une tâche ou je ne vois pas assez tôt ce qui peut bloquer. J'ai aussi découvert des méthodes d'estimation de projet dans la SAE4, et j'aimerais mieux les maîtriser pour mieux cadrer mes projets à l'avenir.",
    niveauScore: 2,
  },
  {
    id: 6,
    slug: 'collaborer',
    title: 'Collaborer',
    fullTitle: "Collaborer au sein d'une équipe informatique",
    color: 'pink',
    description:
      "Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.",
    criteres: [
      "Comprendre la diversité, la structure et la dimension de l'informatique dans une organisation",
      "Appliquer une démarche pour intégrer une équipe informatique au sein d'une organisation",
      "Mobiliser les compétences interpersonnelles pour intégrer une équipe informatique",
      'Rendre compte de son activité professionnelle',
    ],
    apprentissages: [
      "Travailler en équipe sur des projets du BUT avec répartition claire des rôles et responsabilités",
      "Utiliser Git pour collaborer en parallèle : branches, commits, résolution de conflits",
      "Communiquer sur l'avancement d'un projet et produire des livrables collectifs (rapport, présentation, affiche)",
      "Rendre compte de son activité de manière structurée à différents interlocuteurs (professeurs, jury, promotion)",
    ],
    analyse:
      "J'ai travaillé en équipe sur plusieurs projets du BUT — avec des rôles répartis, des livrables communs et des présentations à faire ensemble. J'utilise Git régulièrement et j'ai pris l'habitude de rendre compte de mon avancement. Ce que je dois encore améliorer, c'est la façon de communiquer en équipe de manière plus organisée et plus régulière. Je veux aussi mieux comprendre comment fonctionne une équipe informatique dans une vraie entreprise, parce que c'est quelque chose que je n'ai pas encore vraiment vécu.",
    niveauScore: 2,
  },
]
