import exiriftImage from "../assets/exiriftimage.png";
import MorpionImage from "../assets/morpionimage.jpg";
import VentilationImage from "../assets/ventilationimage.png";
import MthrImage from "../assets/mthrimage.png"
import ComputerVisionImage from "../assets/ComputerVisionImage.png"
import EscopieImage from "../assets/escopieimage.jpg"
import StugoImage from "../assets/stugoimage.png"
import CardiaqueImage from "../assets/cardiaqueimage.jpg"
export const projets = [
  {
  id: 1,
  name: "SafeVision Assist",
  subtitle: "Data + IA + Vision Assistive",

  status: "En cours",
  year: "2025 - 2026",
  role: "Computer Vision Developer (projet académique)",

  desc: "Système d’assistance pour aveugles avec détection de dangers en temps réel.",

  description:
    "Développement d’un outil intelligent destiné aux personnes aveugles permettant de détecter les dangers (véhicules, piétons, feux) via une caméra et de déclencher des alertes en temps réel, avec un système connecté pour les urgences.",

  objective:
    "Créer un dispositif capable d’analyser l’environnement en temps réel pour prévenir les dangers et alerter les secours en cas d’incident.",

  progress: 20,

  stack: ["C++", "Python", "Torch", "Qt", "Git","Windows"],

  languages: ["C++", "SQL", "Python"],
  libraries: ["OpenCV", "PyTorch","LibTorch", "Qt","Eigen",""],
  tools: ["Git","VSCode","Cmake"],

  features: [
    "Détection d’objets (véhicules, piétons, feux)",
    "Alerte sonore en temps réel",
    "Système d’alerte automatique aux urgences",
    "Tableau de bord de suivi des incidents",
    "Authentification sécurisée"
  ],

  challenges: [
    "Choix et entraînement d’un modèle IA adapté",
    "Traitement temps réel sur appareil embarqué",
    "Gestion et synchronisation des données avec la base",
    "Fiabilité des détections en environnement réel",
    "Intégration matériel + logiciel"
  ],

  feeling:
  "Projet à fort impact humain qui me tient particulièrement à cœur, car il combine des domaines qui m'intéressent profondément comme la Data et l’IA, tout en apportant une réelle sensibilisation aux difficultés rencontrées par les personnes aveugles.",

  github: "https://github.com/MyRemKi/ComputerVision_Project_2025_2026",
  demo: "",

    image:ComputerVisionImage,
  },
  {
    id: 4,
    name: "Escopie",
    subtitle: "Jeu Vidéo",

    status: "En cours",
    year: "2022",
    role: "Développeur C++ (Projet Personnel)",

    desc: "Jeu 2D développé en C++ avec SFML, intégrant des mécaniques de gameplay, des effets visuels et une architecture orientée objet.",

    description : "Escopie est un jeu 2D en cours de développement conçu entièrement en C++ avec la bibliothèque SFML. Le projet vise à créer une expérience interactive fluide en combinant des mécaniques de gameplay dynamiques, des effets visuels soignés et une gestion optimisée des performances en temps réel. L’architecture du jeu repose sur des principes de programmation orientée objet afin d’assurer une bonne modularité et une évolutivité du code. De la conception graphique à l’intégration des systèmes de jeu (mouvements, interactions, IA), chaque composant est développé de manière progressive pour construire un univers cohérent et immersif.",

    objective:
      "Concevoir un jeu 2D en C++ en appliquant une architecture orientée objet, tout en maîtrisant la gestion des graphismes, des interactions et des performances en temps réel avec SFML.",

    progress: 30,

    stack: ["C++","SFML","MSYS64", "Windows"],

    languages: ["C++"],
    libraries: ["SFML"],
    tools: ["VSCODE","MSYS64"],

    features: [
      "Création des effets sonores",
      "Création des musiques",
      "Réalisation des images",
      "Conception de la maquette du jeu",
      "Mise en application de la maquette du jeu en code Orienté Objet",
    ],

    challenges: [
      "Apprendre à coder un jeu 2D",
      "Appliquer des fonctionnalités avancées fonctionnalités en C++",
      "Structurer un code",
      "Appliquer un design propre et intuitif",
      "Résoudre des problèmes durant un projet",
      "Créer des bots 'IA'"
    ],

    feeling:"Projet particulièrement marquant pour moi, car il s’agit de ma première expérience de développement d’un projet personnel en C++ en programmation orientée objet. Il m’a permis de mieux comprendre la structuration d’un code complexe, la gestion des mécaniques en temps réel avec SFML, ainsi que les enjeux liés aux performances. J’ai également pris du plaisir à concevoir un univers de jeu de A à Z (graphismes, sons, gameplay), ce qui m’a apporté une vraie satisfaction créative. Ce projet m’a confronté à de nombreuses difficultés techniques, mais chacune d’elles a renforcé ma rigueur, ma capacité à résoudre des problèmes et mon autonomie en développement.",

    github: "https://github.com/MyRemKi/Projet_Jeu",
    demo: "",

    image:EscopieImage,
  },
  {
    id: 5,
    name: "Ventilation ERP",
    subtitle: "Système embarqué & Électronique",

    status: "Terminé",
    year: "2022 - 2023",
    role: "Développeur Embarqué C++ (Projet Académique)",

    desc: "Système embarqué de gestion de ventilation visant à contrôler le débit d’air et la puissance pour améliorer la qualité de l’air.",

    description:
      "Projet académique de développement d’un système embarqué permettant de contrôler une ventilation. Le programme en C++ gère les entrées et sorties afin d’ajuster la puissance de ventilation et relever le débit d’air. Le système est connecté à une Raspberry Pi avec des modules GrovePi pour l’interfaçage matériel.",

    objective:
      "Développer un programme en C++ capable de piloter une ventilation en fonction des données mesurées, afin d’améliorer la qualité de l’air dans un environnement intérieur.",

    progress: 90,

    stack: ["C++","GrovePi", "Linux"],

    languages: ["C++"],
    libraries: ["Standard C++ libs", "GrovePi libs"],
    tools: ["CodeLite", "Linux", "Raspberry Pi", "GrovePi"],

    features: [
      "Gestion des entrées/sorties en C++",
      "Contrôle de la puissance de ventilation",
      "Lecture du débit d’air",
      "Interfaçage matériel avec Raspberry Pi",
      "Câblage et utilisation de modules GrovePi"
    ],

    challenges: [
      "Comprendre le fonctionnement d’un système embarqué",
      "Gérer les entrées/sorties matérielles en C++",
      "Mettre en place une communication avec les composants physiques",
      "Assurer un contrôle fiable de la ventilation",
      "Travailler sous environnement Linux"
    ],

    feeling:
      "Projet formateur sur le développement embarqué en C++ et l’interfaçage avec du matériel réel, notamment sur la gestion des entrées/sorties et le contrôle de systèmes physiques.",

    github: "https://github.com/MyRemKi/Projet_2022_2023_Ventilation_ERP",
    demo: "",

    image: VentilationImage,
  },
  {
    id: 6,
    name: "Jeu Morpion",
    subtitle: "Python & Logique Algorithmique",

    status: "Terminé",
    year: "2018 - 2019",
    role: "Développeur Python (Projet Académique)",

    desc: "Jeu de morpion en console développé en Python avec mode multijoueur local et IA.",

    description:
      "Développement d’un jeu de morpion (tic-tac-toe) en Python fonctionnant entièrement en console. Le projet permet de jouer en local à deux joueurs ou contre une intelligence artificielle simple. L’accent a été mis sur la logique algorithmique, la gestion des entrées utilisateur et la structure du code.",

    objective:
      "Concevoir un jeu en console en Python intégrant une logique de jeu complète, un mode multijoueur local et une IA capable de prendre des décisions simples.",

    progress: 100,

    stack: ["Python"],

    languages: ["Python"],
    libraries: ["Pas de libs"],
    tools: ["VSCode","Windows 10"],

    features: [
      "Mode 1 vs 1 en local",
      "Mode joueur contre IA",
      "Interface en ligne de commande",
      "Gestion des entrées utilisateur",
      "Détection des conditions de victoire et d’égalité"
    ],

    challenges: [
      "Implémenter la logique complète du morpion",
      "Créer une IA simple pour jouer contre l’utilisateur",
      "Gérer les entrées utilisateur de manière fiable",
      "Structurer le code de manière claire",
      "Gérer les différents états du jeu"
    ],

    feeling:
      "Premier projet formateur en Python, permettant de consolider les bases en algorithmique, logique de jeu et interaction utilisateur en console.",

    github: "https://github.com/MyRemKi/Projet_2018_2019_Jeu_Morpion_Console",
    demo: "",

    image: MorpionImage,
  },
  {
    id: 7,
    name: "ExiRift",
    subtitle: "Jeu Vidéo",

    status: "En cours",
    year: 2026,
    role: "Développeur C++ (Projet personnel)",

    desc: "Jeu d'aventure et de combat en 2D où le joueur explore des failles, affronte des monstres et récupère du butin pour devenir plus puissant.",

    description:
      "ExiRift est un jeu d'action-RPG en 2D dans lequel le joueur explore des environnements hostiles peuplés de créatures. Il affronte des vagues d'ennemis allant de simples monstres à des mini-boss et des boss redoutables. Chaque combat remporté permet de récupérer du butin : armes, équipements et objets aux raretés variées, qui renforcent le personnage au fil de la progression. Le joueur gère son inventaire, s'équipe stratégiquement et devient de plus en plus puissant pour survivre à des ennemis toujours plus dangereux.",

    objective:
      "Concevoir un moteur de jeu RPG en console structuré autour de la POO, intégrant un système de combat, un générateur de loot basé sur des probabilités et une gestion complète de l'inventaire.",

    progress: 35,

    stack: ["C++"],

    languages: ["C++"],
    libraries: ["STL (iostream, string, chrono, thread,etc...)","SFML"],
    tools: ["VSCode", "g++ / MinGW", "Windows 11"],

    features: [
      "Rendu graphique 2D en temps réel avec SFML",
      "Affichage du joueur, des ennemis et de la carte à l'écran",
      "Déplacement du personnage et gestion des collisions",
      "Système de combat contre des mobs (Basic, MiniBoss, Boss)",
      "Système de loot avec règles de drop probabilistes",
      "Gestion de la rareté et des types d'items",
      "Inventaire visuel du joueur (sprites, HUD)",
      "Boucle de jeu gérée par événements et rafraîchissement d'images"
    ],

    challenges: [
      "Concevoir une architecture modulaire et découplée (Player, Enemy, Drop, Rules, Items, Equipments, Inventory) respectant les principes de la POO",
      "Migrer un moteur de jeu console vers un rendu graphique 2D temps réel avec SFML sans casser la logique existante",
      "Structurer une boucle de jeu robuste séparant clairement les phases d'événements, de mise à jour (update) et de rendu (render)",
      "Implémenter un système de loot pondéré combinant plusieurs paramètres (type de mob, rareté, tables de drop, probabilités)",
      "Gérer la génération aléatoire de manière contrôlée et reproductible (entiers, flottants, jets de chance) au service du gameplay",
      "Synchroniser la logique métier (combat, statistiques, inventaire) avec l'état visuel affiché à l'écran (sprites, HUD, animations)",
      "Mettre en place un système de collisions et de déplacements fluides tout en gérant les différents états du jeu (exploration, combat, menu, inventaire)",
      "Gérer la mémoire dynamique (allocation/libération des entités, mobs, items) et prévenir les fuites mémoire",
      "Concevoir un système d'entités extensible via des templates/classes réutilisables pour ajouter facilement de nouveaux mobs, items et équipements",
      "Équilibrer les nombreux paramètres de jeu (dégâts, points de vie, taux de drop, rareté) pour garder une progression cohérente"
    ],

    feeling:"Projet ambitieux permettant d'approfondir la programmation orientée objet en C++, la conception d'architectures modulaires et la logique de jeu avec systèmes probabilistes.",
    github: "https://github.com/MyRemKi/ExiRift",
    demo: "",

    image: exiriftImage,
  },
  {
    id: 8,
    name: "MTHR & Capteur TH",
    subtitle: "Domotique & Supervision Web",

    status: "Terminé",
    year: "2021 - 2022",
    role: "Développeur Embarqué & Full-Stack (Projet Académique)",

    desc: "Système domotique de relevé de température et d'humidité via un capteur branché à une Raspberry Pi 4, avec stockage en base PostgreSQL et affichage sur une page web locale.",

    description:
      "Projet académique de domotique consistant à développer un programme en C++ exécuté sur une Raspberry Pi 4, chargé de relever la température et l'humidité d'une pièce via un capteur physique. Les données mesurées sont ensuite transmises et stockées dans une base de données PostgreSQL, puis affichées en temps réel sur une page web locale accessible via PHP. Le site propose également un système d'authentification pour sécuriser l'accès aux relevés.",

    objective:
      "Concevoir une chaîne complète de domotique permettant de mesurer la température et l'humidité d'une pièce via un capteur relié à une Raspberry Pi, de stocker ces données dans une base PostgreSQL et de les restituer sur une interface web locale.",

    progress: 100,

    stack: ["C++", "Raspberry Pi 4", "PostgreSQL","PHP"],

    languages: ["C++", "PHP", "SQL", "HTML", "CSS"],
    libraries: ["Standard C++ libs", "libpq / connecteur PostgreSQL","lib-ic2"],
    tools: ["Raspberry Pi 4", "Capteur Température/Humidité", "PostgreSQL", "Linux"],

    features: [
      "Programme C++ de relevé de température et d'humidité sur Raspberry Pi 4",
      "Transmission des données mesurées vers une base PostgreSQL",
      "Affichage en temps réel de la température intérieure",
      "Affichage en temps réel de l'humidité intérieure",
      "Système d'authentification (login, vérification, logout)",
      "Page web locale de supervision",
    ],

    challenges: [
      "Interfacer un capteur physique avec un programme C++ sur Raspberry Pi",
      "Mettre en place la communication entre le programme C++ et une base PostgreSQL",
      "Concevoir une base de données adaptée à l'historisation des mesures",
      "Afficher les données en temps réel sur une page web locale",
      "Mettre en place un système de connexion basique local pour une seule machine",
      "Synchroniser les données sur la page"
    ],

    feeling:
      "Un projet dans lequel je me suis beaucoup investi, car il m'a fait toucher à toute la chaîne domotique : du relevé physique en C++ sur Raspberry Pi jusqu'à l'affichage web, en passant par le stockage en base PostgreSQL. C'est le projet qui m'a vraiment donné le goût de faire dialoguer du matériel embarqué avec des applications web.",

    github: "https://github.com/MyRemKi/Projet_2021_2023_MTHR-et-Capteur-TH",
    demo: "",

    image: MthrImage,
  },
  {
    id: 2,
    name: "StuGo CO2 Explorer",
    subtitle: "Application Desktop d'Analyse de Données",

    status: "Terminé",
    year: "2025 - 2026",
    role: "Développeur Python (Projet Professionnel)",

    desc: "Application de bureau PyQt6 permettant de visualiser et d'analyser les émissions CO2 liées à la mobilité étudiante à partir de fichiers Excel.",

    description:
      "Projet professionnel de développement d'une application de bureau en Python/PyQt6 dédiée à l'analyse des émissions CO2 liées à la mobilité étudiante. L'application charge des fichiers Excel structurés par zone d'émission, calcule automatiquement les totaux, et propose de nombreux types de graphiques 2D et 3D (barres, camemberts, treemap, nuages de points...). Le projet suit une Clean Architecture à 4 couches (Présentation, Application, Domaine, Infrastructure) et intègre un outil admin autonome d'analyse de logs.",

    objective:
      "Concevoir une application desktop robuste et maintenable pour l'analyse de données CO2 étudiantes, en appliquant une architecture logicielle propre (Clean Architecture) et des design patterns reconnus, tout en offrant une interface riche en visualisations de données.",

    progress: 100,

    stack: ["Python", "PyQt6", "Pandas", "Matplotlib"],

    languages: ["Python"],
    libraries: ["PyQt6", "pandas", "matplotlib", "openpyxl", "squarify"],
    tools: ["Git", "PyInstaller", "Inno Setup"],

    features: [
      "Import et validation de fichiers Excel multi-feuilles",
      "Calcul automatique des totaux CO2 par zone d'émission",
      "Graphiques 2D (barres, camembert, donut, aire, treemap, nuage de points)",
      "Graphiques 3D (barres 3D, camembert 3D, cube 3D)",
      "Comparaison multi-fichiers",
      "Système de thèmes personnalisables",
      "Persistance de session et des préférences utilisateur",
      "Historique d'actions avec support undo/redo",
      "Outil admin autonome d'analyse et de filtrage des logs",
      "Export des données et graphiques (CSV/image)"
    ],

    challenges: [
      "Structurer le projet selon une Clean Architecture à 4 couches sans dépendance ascendante",
      "Mettre en place un bus d'événements central pour découpler les composants (pattern Observer)",
      "Implémenter le pattern Command avec historique undo/redo",
      "Gérer le rendu de graphiques 2D et 3D avec matplotlib intégré à PyQt6",
      "Assurer une interface DPI-aware sur différents écrans",
      "Concevoir un système de thèmes dynamique généré via un Builder de stylesheet QSS"
    ],

    feeling:
      "Un projet professionnel particulièrement formateur, où je me suis fortement investi sur la qualité de l'architecture logicielle plutôt que sur la seule fonctionnalité. Structurer l'application en couches propres et appliquer des design patterns (Singleton, Observer, Command, Factory, Façade...) m'a fait progresser sur la conception logicielle à grande échelle, au-delà du simple 'faire fonctionner le code'.",

    github: "https://github.com/MyRemKi/Projet_Professionnel_2025_2026_Stugo",
    demo: "",

    image: StugoImage,
  },
  {
    id: 3,
    name: "Data Science Cardiaque",
    subtitle: "Machine Learning & Analyse de Données",

    status: "Terminé",
    year: "2025 - 2026",
    role: "Développeur Data Science (Projet Académique - L3 SDN)",

    desc: "Application desktop PyQt5 d'exploration, de visualisation et de simulation par Machine Learning sur un dataset de 180 000 cas cardiaques collectés en Chine.",

    description:
      "Projet académique consistant à développer une application de bureau en Python/PyQt5 permettant d'explorer, nettoyer, visualiser et modéliser un dataset médical volumineux (heart_attack_china.csv, 180 000 lignes). L'application propose un tableau de données paginé et filtrable, onze types de graphiques interactifs, un module complet de nettoyage de données (suppression, imputation, édition), ainsi qu'un module de simulation par Machine Learning permettant de prédire le risque cardiaque d'un patient à partir de 25 paramètres, via deux modèles entraînés en parallèle (Random Forest et Régression Logistique).",

    objective:
      "Développer une application data science complète, de l'import et du nettoyage de données brutes jusqu'à la prédiction de risque via des modèles de Machine Learning, avec une interface graphique permettant une exploration visuelle riche du dataset.",

    progress: 100,

    stack: ["Python", "PyQt5", "Scikit-learn", "Pandas"],

    languages: ["Python"],
    libraries: ["PyQt5", "pandas", "numpy", "matplotlib", "seaborn", "scipy", "scikit-learn"],
    tools: ["Git"],

    features: [
      "Import de dataset par drag & drop avec chargement en arrière-plan",
      "Tableau de données paginé, triable et filtrable en temps réel",
      "Onze visualisations interactives (histogrammes, heatmap, violin plot, hexbin...)",
      "Filtres dynamiques appliqués avec debounce sur les graphiques",
      "Module de nettoyage de données (suppression, imputation, édition de cellules)",
      "Historique d'actions annulable (jusqu'à 10 étapes)",
      "Formulaire de simulation à 25 paramètres patient",
      "Entraînement parallèle de deux modèles ML (Random Forest et Régression Logistique)",
      "Jauge de risque cardiaque et importance des variables",
      "Matrice de confusion et métriques comparatives (accuracy, F1, AUC)",
      "Export du dataset brut ou nettoyé"
    ],

    challenges: [
      "Traiter et nettoyer un dataset volumineux (180 000 lignes) sans bloquer l'interface",
      "Entraîner deux modèles de Machine Learning en parallèle sur un thread séparé",
      "Concevoir onze visualisations différentes avec filtres dynamiques réactifs",
      "Interpréter et restituer les résultats d'un modèle ML de façon lisible (importance des variables, contribution patient)",
      "Gérer un historique de modifications annulables sur les opérations de nettoyage",
      "Assurer la fluidité de l'interface pendant les traitements longs (chargement, entraînement)"
    ],

    feeling:
      "Un projet où je me suis beaucoup investi sur la partie data science autant que sur l'interface, car il fallait concilier rigueur du traitement des données (nettoyage, imputation) avec la pédagogie de la restitution (visualisations, interprétation des modèles ML). Voir la jauge de risque réagir en fonction du profil patient renseigné, après tout le travail de nettoyage et d'entraînement en amont, a été la partie la plus gratifiante du projet.",

    github: "https://github.com/MyRemKi/Projet_IA",
    demo: "",

    image: CardiaqueImage,
  },
]

