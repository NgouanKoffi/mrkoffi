export type Status = "live" | "offline" | "private" | "wip";
export type Kind = "vitrine" | "dynamic" | "mobile" | "system";

export type Project = {
  title: string;
  cat: string;
  kind: Kind;
  year: string;
  desc: string;
  img?: string;
  url?: string;
  status: Status;
  location?: string;
};

export const statusLabel: Record<Status, string> = {
  live: "En ligne",
  offline: "Hors ligne",
  private: "Privé",
  wip: "En cours",
};

export const kindLabel: Record<Kind | "all", string> = {
  all: "Tous",
  vitrine: "Vitrines",
  dynamic: "Dynamiques",
  mobile: "Mobiles",
  system: "Systèmes",
};

export const WHATSAPP = "https://wa.me/2250556598199";
export const EMAIL = "koffingouanemmanuel0@gmail.com";
export const PHONE = "+2250556598199";
export const PHONE_DISPLAY = "+225 05 56 59 81 99";

const raw: Project[] = [
  {
    title: "Laboratoire Afri' Cosmetic",
    cat: "E-commerce · Cosmétique",
    kind: "dynamic",
    year: "2026",
    desc: "Boutique en ligne d'un laboratoire cosmétique ivoirien : catalogue multi-marques, diagnostic de routine, magazine, suivi de commande, paiement Mobile Money et espace B2B.",
    img: "/projects/laboratoireafricosmetic.png",
    url: "https://laboratoireafricosmetic.com/",
    status: "live",
  },
  {
    title: "Radio Gbêkê FM",
    cat: "Site radio · Streaming",
    kind: "dynamic",
    year: "2026",
    desc: "Site officiel de la radio Gbêkê FM 105.2 (Bouaké) : direct audio 24/7, Web TV, grille des émissions, podcasts & replays, actualités régionales.",
    img: "/projects/radiogbekefm.png",
    url: "https://www.radiogbekefm.com/",
    status: "live",
  },
  {
    title: "CalmPay",
    cat: "App mobile · Paiement séquestre",
    kind: "mobile",
    year: "2026",
    desc: "Paiement Mobile Money sécurisé par séquestre : l'argent est bloqué jusqu'à livraison validée par les deux parties. Orange, MTN, Moov, Wave. Factures lien/QR, suivi livraison, biométrie.",
    img: "/projects/calmpay.png",
    url: "https://calmpay-psi.vercel.app/",
    status: "live",
  },
  {
    title: "Radio Gbêkê FM — App",
    cat: "App mobile · Android",
    kind: "mobile",
    year: "2026",
    desc: "Application Android officielle de Radio Gbêkê FM 105.2 : écoute en direct 24/7, podcasts & replays, grille des émissions, actualités et notifications. Publiée sur Google Play.",
    img: "/projects/radiogbekeapp.png",
    url: "https://play.google.com/store/apps/details?id=ci.radiogbeke.app",
    status: "live",
  },
  {
    title: "FullMargin — App",
    cat: "App mobile · Trading",
    kind: "mobile",
    year: "2026",
    desc: "Application Android officielle de l'écosystème FullMargin : communautés, marketplace, formations, journal de trading, FullMetrix (agent IA, copy trading, risk guardian), finances. 500+ téléchargements, 4,6★ sur Google Play.",
    img: "/projects/fullmarginapp.png",
    url: "https://play.google.com/store/apps/details?id=net.fullmargin.app",
    status: "live",
  },
  {
    title: "FullMargin",
    cat: "Écosystème SaaS · Trading",
    kind: "dynamic",
    year: "2025",
    desc: "Plateforme tout-en-un pour traders : communautés, formations, live, marketplace, journal de trading, métriques, finance. Conçu de A à Z, sans template.",
    img: "/projects/fullmargin.png",
    url: "https://fullmargin.net",
    status: "live",
  },
  {
    title: "Model Agenci",
    cat: "Agence mode · Site + Admin",
    kind: "dynamic",
    year: "2025",
    desc: "Site complet pour une agence de mannequinat. Présentation talents, événementiel, casting, interface administrateur dédiée.",
    img: "/projects/modelagenci.png",
    url: "https://www.modelagenci.com/",
    status: "live",
  },
  {
    title: "MK Confection",
    cat: "Maison de couture · Boutique + Admin",
    kind: "dynamic",
    year: "2025",
    desc: "Site signature pour une styliste-mannequin. Vitrine élégante, boutique et espace administrateur pour gérer collections et créations.",
    img: "/projects/mkconfection.png",
    url: "https://mk-confection.vercel.app",
    status: "live",
  },
  {
    title: "FullMargin Lab",
    cat: "Studio dev · Sous-marque SaaS",
    kind: "dynamic",
    year: "2025",
    desc: "Site studio sur mesure : robots de trading, automatisations, dashboards. Vitrine du laboratoire FullMargin.",
    img: "/projects/fullmarginlab.png",
    url: "https://labo.fullmargin.net",
    status: "live",
  },
  {
    title: "EffetsPerdus",
    cat: "Plateforme communautaire",
    kind: "dynamic",
    year: "2025",
    desc: "Outil pour retrouver les documents perdus (CNI, permis, CMU…) sans exposer ses pièces sur les réseaux. Gratuit, déjà 100+ inscrits.",
    img: "/projects/effetsperdus.png",
    url: "https://www.facebook.com/share/p/18cJiuM6eC/",
    status: "live",
  },
  {
    title: "Portfolio Armel N'guessan",
    cat: "Portfolio · Social Media Manager",
    kind: "dynamic",
    year: "2025",
    desc: "Portfolio sur mesure pour un social media manager. Animations, parcours, statistiques, contact direct.",
    img: "/projects/armel.png",
    url: "https://www.facebook.com/share/p/1NBU4hSQ3w/",
    status: "live",
  },
  {
    title: "English On My Way",
    cat: "Landing page · Cabinet d'anglais",
    kind: "vitrine",
    year: "2025",
    desc: "Landing pour un cabinet d'anglais. Évaluation niveau, formulaire cours gratuit, avis élèves, multilingue FR/EN.",
    img: "/projects/english.png",
    url: "https://english-on-my-way.vercel.app",
    status: "live",
  },
  {
    title: "OISVA",
    cat: "Site ONG · Santé",
    kind: "vitrine",
    year: "2024",
    desc: "Site pour une ONG dédiée à la lutte contre le diabète. Présentation, événements, sensibilisation, dons.",
    img: "/projects/oisva.png",
    url: "https://www.facebook.com/share/p/1DcKf4A9Wr/",
    status: "live",
  },
  {
    title: "Akwaba Gbêkê",
    cat: "Blog · Radio Gbêkê FM",
    kind: "dynamic",
    year: "2024",
    desc: "Site d'actualité régionale pour la radio Gbêkê FM de Bouaké. Articles, catégories, intégrations réseaux sociaux.",
    img: "/projects/akwaba.png",
    url: "https://www.xn--akwabagbk-s4ab.com",
    status: "live",
  },
  {
    title: "T6 Trucking Inc",
    cat: "Site logistique · Canada",
    kind: "vitrine",
    year: "2023",
    desc: "Site web pour une entreprise de transport et logistique basée au Canada. Services, suivi colis, devis en ligne.",
    img: "/projects/t6trucking.png",
    url: "https://www.facebook.com/share/p/1HjH4Ju83o/",
    status: "live",
    location: "Canada",
  },
  {
    title: "Ombea Cleaning",
    cat: "Site entreprise · Canada",
    kind: "vitrine",
    year: "2023",
    desc: "Site vitrine pour une entreprise de nettoyage à Edmonton, Alberta. Services, prise de RDV en ligne, contact.",
    img: "/projects/ombea.png",
    url: "https://www.facebook.com/share/p/14ewkFMBmBu/",
    status: "live",
    location: "Canada",
  },
  {
    title: "CVB — Blog UVCI Bouaké",
    cat: "Blog universitaire",
    kind: "dynamic",
    year: "2023",
    desc: "Blog de la communauté UVCI de Bouaké. Actualités, événements, partage d'expériences entre étudiants.",
    img: "/projects/cvb.png",
    url: "https://www.facebook.com/photo/?fbid=610201397812478&set=a.458240359675250",
    status: "live",
  },
  {
    title: "Viateur Hôtel",
    cat: "Plateforme immobilière + Admin",
    kind: "dynamic",
    year: "2023",
    desc: "Site appart'hôtel avec espace admin : gestion appartements, agents, demandes locataires. HTML/CSS/JS/PHP.",
    img: "/projects/viateur.png",
    url: "https://www.facebook.com/share/p/1GuoXd13W2/",
    status: "offline",
  },
  {
    title: "CCJAB — Cartes d'accès",
    cat: "Système bibliothèque · Centre Culturel",
    kind: "system",
    year: "2023",
    desc: "Système de création et d'impression de cartes d'accès pour la bibliothèque du Centre Culturel Jacques Aka de Bouaké. Impression en bloc, liste de présence.",
    img: "/projects/ccjab.png",
    url: "https://www.facebook.com/share/p/14eVDXiGmij/",
    status: "private",
  },
  {
    title: "UAO — Cartes d'accès biblio",
    cat: "Système bibliothèque · Université",
    kind: "system",
    year: "2023",
    desc: "Système de gestion des cartes d'accès pour la bibliothèque de l'Université Alassane Ouattara de Bouaké (SDIST). Base de plus de 1500 étudiants.",
    img: "/projects/uao.png",
    url: "https://www.facebook.com/share/p/1BBvCJsjJS/",
    status: "private",
  },
  {
    title: "TekCom.ci",
    cat: "E-commerce · WordPress",
    kind: "dynamic",
    year: "2022",
    desc: "Boutique en ligne d'électronique et accessoires : smartphones, ordinateurs, électroménager, jeux vidéo. Catalogue complet, panier, paiement.",
    img: "/projects/tekcom.png",
    url: "https://www.facebook.com/share/p/18mk2rFy6W/",
    status: "offline",
  },
  {
    title: "Capital Construction",
    cat: "Site entreprise · BTP",
    kind: "vitrine",
    year: "2022",
    desc: "Landing page pour une entreprise de BTP située à Cocody, Abidjan. Présentation, services, catalogue de maisons, contact.",
    img: "/projects/capital.png",
    url: "https://www.facebook.com/share/p/1B4ShXXuHH/",
    status: "offline",
  },
  {
    title: "Kumtel-Luxell",
    cat: "E-commerce · WordPress",
    kind: "dynamic",
    year: "2021",
    desc: "Boutique en ligne pour la marque Kumtel-Luxell (électroménager). Catalogue, fiches produits, panier, paiement.",
    status: "offline",
  },
  {
    title: "SOLTP",
    cat: "Site vitrine · Construction",
    kind: "vitrine",
    year: "2021",
    desc: "Site vitrine pour une entreprise de construction et travaux publics. Présentation, services, contact.",
    status: "offline",
  },
  {
    title: "Système événementiel CCJAB",
    cat: "Gestion d'événements · Centre Culturel",
    kind: "system",
    year: "2024",
    desc: "Système complet de gestion d'événements pour le Centre Culturel Jacques Aka de Bouaké. Confidentiel.",
    status: "private",
  },
  {
    title: "Agriculture × Élevage",
    cat: "App mobile · Big Data",
    kind: "mobile",
    year: "2025",
    desc: "Application liant agriculteurs et éleveurs. Données terrain, prédictions et optimisation des cycles — moteur Big Data en arrière-plan.",
    status: "private",
  },
  {
    title: "Transfert d'argent",
    cat: "App mobile · Fintech",
    kind: "mobile",
    year: "2025",
    desc: "Transfert rapide et sécurisé. Envoi, réception, historique, KYC, intégration Mobile Money et bancaire.",
    status: "private",
  },
  {
    title: "Transport à la demande",
    cat: "App mobile · Mobilité",
    kind: "mobile",
    year: "2025",
    desc: "Une appli façon Yango — mais sans les VTC. Mise en relation rapide, géolocalisation, paiement intégré.",
    status: "private",
  },
  {
    title: "Gestion d'entreprise",
    cat: "App mobile · Gestion",
    kind: "mobile",
    year: "2024",
    desc: "Outil de gestion sur mesure : stock, ventes, employés, rapports — tout dans la poche du gérant.",
    status: "private",
  },
  {
    title: "Application sous NDA",
    cat: "App mobile · Confidentielle",
    kind: "mobile",
    year: "2024",
    desc: "Application mobile livrée pour un client. Détails couverts par accord de confidentialité.",
    status: "private",
  },
  {
    title: "5 Projets en cours",
    cat: "Roadmap · En développement",
    kind: "dynamic",
    year: "2026",
    desc: "Cinq projets actifs en développement : nouveaux sites, plateformes et systèmes. Bientôt en ligne.",
    status: "wip",
  },
];

/** Vrai site/app accessible (pas un simple post Facebook). */
export const hasRealLink = (p: Project) => !!p.url && !/facebook\.com/i.test(p.url);

/* Projets avec vrai lien d'abord (ordre d'origine conservé ensuite). */
export const projects: Project[] = [...raw].sort((a, b) => Number(hasRealLink(b)) - Number(hasRealLink(a)));

export const featured = projects.filter((p) => p.img && p.status === "live");

/** Nombre de projets livrés (tout sauf « en cours ») — alimente les compteurs de la page. */
export const DELIVERED = projects.filter((p) => p.status !== "wip").length;
