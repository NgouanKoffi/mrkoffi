"use client";

import { useEffect, useState, type ReactNode } from "react";

type IllustKind = "agro" | "money" | "ride" | "biz" | "escrow" | "nda" | "shop" | "build";

function PrjIllust({ kind }: { kind: IllustKind }) {
  const isWeb = kind === "shop" || kind === "build";
  return (
    <div className={`prj-illust il-${kind}`} aria-hidden="true">
      <svg viewBox="0 0 240 200" className="il-bg">
        <defs>
          <pattern id={`grid-${kind}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(242,101,19,.12)" strokeWidth=".5" />
          </pattern>
        </defs>
        <rect width="240" height="200" fill={`url(#grid-${kind})`} />
      </svg>
      <svg viewBox="0 0 220 180" className={isWeb ? "il-browser" : "il-phone"}>
        {isWeb ? (
          <g>
            <rect x="32" y="32" width="156" height="116" rx="6"
              fill="#0E0E10" stroke="#F26513" strokeWidth="2.5" />
            <rect x="32" y="32" width="156" height="18" rx="6" fill="#121212" />
            <circle cx="44" cy="41" r="2.5" fill="#F26513" />
            <circle cx="54" cy="41" r="2.5" fill="rgba(242,101,19,.5)" />
            <circle cx="64" cy="41" r="2.5" fill="rgba(242,101,19,.3)" />
            <rect x="78" y="36" width="100" height="10" rx="2" fill="rgba(255,255,255,.06)" />
          </g>
        ) : (
          <g>
            <rect x="80" y="14" width="60" height="152" rx="10"
              fill="#0E0E10" stroke="#F26513" strokeWidth="2.5" />
            <rect x="86" y="24" width="48" height="120" rx="2" fill="#121212" />
            <circle cx="110" cy="156" r="3" fill="#F26513" />
          </g>
        )}
        {kind === "agro" && (
          <g>
            <circle cx="110" cy="64" r="14" fill="#5fd07a" />
            <path d="M96 96 Q110 84 124 96 L124 110 L96 110 Z" fill="#C9550F" />
            <path d="M100 82 L100 70 M110 78 L110 64 M120 82 L120 70"
              stroke="#5fd07a" strokeWidth="2" strokeLinecap="round" />
            <circle cx="100" cy="124" r="4" fill="#FF8A3D" />
            <circle cx="120" cy="124" r="4" fill="#FF8A3D" />
            <path d="M92 134 L128 134" stroke="#5fd07a" strokeWidth="1.5" />
          </g>
        )}
        {kind === "money" && (
          <g>
            <rect x="92" y="56" width="36" height="22" rx="3"
              fill="#5fd07a" stroke="#0E0E10" strokeWidth="1.5" />
            <circle cx="110" cy="67" r="5" fill="#0E0E10" />
            <text x="110" y="71" fontSize="8" fill="#5fd07a"
              textAnchor="middle" fontWeight="800">$</text>
            <path d="M100 92 L120 92 M118 88 L122 92 L118 96"
              stroke="#F26513" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M120 108 L100 108 M102 104 L98 108 L102 112"
              stroke="#F26513" strokeWidth="2" fill="none" strokeLinecap="round" />
            <rect x="96" y="122" width="28" height="4" rx="1" fill="#1F1F22" />
            <rect x="96" y="130" width="20" height="4" rx="1" fill="#1F1F22" />
          </g>
        )}
        {kind === "ride" && (
          <g>
            <circle cx="110" cy="74" r="18" fill="none"
              stroke="#F26513" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M110 60 L110 88 M96 74 L124 74"
              stroke="#F26513" strokeWidth="1" opacity=".6" />
            <path d="M110 64 C 104 64, 102 70, 104 74 L110 84 L116 74 C 118 70, 116 64, 110 64 Z"
              fill="#F26513" />
            <circle cx="110" cy="72" r="3" fill="#F4F4F5" />
            <path d="M94 110 L126 110 L122 102 L98 102 Z"
              fill="#5fd07a" stroke="#0E0E10" strokeWidth="1" />
            <circle cx="100" cy="112" r="3" fill="#0E0E10" />
            <circle cx="120" cy="112" r="3" fill="#0E0E10" />
            <path d="M92 130 Q110 124 128 130" stroke="#5fd07a"
              strokeWidth="1.5" fill="none" />
          </g>
        )}
        {kind === "biz" && (
          <g>
            <rect x="94" y="60" width="32" height="22" rx="2"
              fill="none" stroke="#F26513" strokeWidth="2" />
            <path d="M104 60 L104 56 L116 56 L116 60"
              stroke="#F26513" strokeWidth="2" fill="none" />
            <line x1="98" y1="92" x2="122" y2="92" stroke="#1F1F22" strokeWidth="1" />
            <rect x="98" y="98" width="6" height="20" fill="#5fd07a" />
            <rect x="107" y="104" width="6" height="14" fill="#FF8A3D" />
            <rect x="116" y="94" width="6" height="24" fill="#F26513" />
            <path d="M96 130 Q110 124 124 130" stroke="#5fd07a"
              strokeWidth="1.5" fill="none" />
          </g>
        )}
        {kind === "escrow" && (
          <g>
            <path d="M110 50 L94 58 L94 78 C 94 90, 102 100, 110 104 C 118 100, 126 90, 126 78 L126 58 Z"
              fill="none" stroke="#F26513" strokeWidth="2" />
            <text x="110" y="86" fontSize="14" fill="#5fd07a"
              textAnchor="middle" fontWeight="800">$</text>
            <path d="M96 116 L106 116 L106 110 L114 110 L114 116 L124 116"
              stroke="#FF8A3D" strokeWidth="2" fill="none" strokeLinecap="round" />
            <circle cx="100" cy="116" r="3" fill="#5fd07a" />
            <circle cx="120" cy="116" r="3" fill="#5fd07a" />
            <path d="M96 132 L124 132" stroke="#1F1F22" strokeWidth="1.5"
              strokeDasharray="2 2" />
          </g>
        )}
        {kind === "nda" && (
          <g>
            <rect x="98" y="68" width="24" height="20" rx="2"
              fill="none" stroke="#F26513" strokeWidth="2" />
            <path d="M102 68 L102 60 C 102 55, 105 52, 110 52 C 115 52, 118 55, 118 60 L118 68"
              fill="none" stroke="#F26513" strokeWidth="2" />
            <circle cx="110" cy="78" r="2" fill="#F26513" />
            <text x="110" y="110" fontSize="9" fill="#FF8A3D"
              textAnchor="middle" fontWeight="800" letterSpacing="1">NDA</text>
            <path d="M96 126 L124 126 M96 134 L118 134"
              stroke="#1F1F22" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        )}
        {kind === "shop" && (
          <g>
            <path d="M88 80 L88 130 L132 130 L132 80 Z"
              fill="none" stroke="#F26513" strokeWidth="2" />
            <path d="M96 80 C 96 70, 102 64, 110 64 C 118 64, 124 70, 124 80"
              fill="none" stroke="#F26513" strokeWidth="2" strokeLinecap="round" />
            <text x="110" y="108" fontSize="14" fill="#5fd07a"
              textAnchor="middle" fontWeight="800">$</text>
            <rect x="142" y="88" width="14" height="10" rx="1"
              fill="#FF8A3D" stroke="#0E0E10" strokeWidth="1" />
            <path d="M148 88 L148 84" stroke="#0E0E10" strokeWidth="1" />
            <rect x="64" y="98" width="16" height="12" rx="1"
              fill="#5fd07a" stroke="#0E0E10" strokeWidth="1" />
            <path d="M64 104 L80 104" stroke="#0E0E10" strokeWidth=".8" />
            <circle cx="98" cy="138" r="3" fill="#FF8A3D" />
            <circle cx="122" cy="138" r="3" fill="#FF8A3D" />
          </g>
        )}
        {kind === "build" && (
          <g>
            <path d="M78 100 L78 78 C 78 70, 86 64, 110 64 C 134 64, 142 70, 142 78 L142 100 Z"
              fill="#F26513" stroke="#0E0E10" strokeWidth="1.5" />
            <path d="M70 100 L150 100" stroke="#0E0E10" strokeWidth="2" strokeLinecap="round" />
            <rect x="106" y="58" width="8" height="8" fill="#F4F4F5" />
            <rect x="84" y="112" width="16" height="22" fill="none"
              stroke="#5fd07a" strokeWidth="2" />
            <rect x="88" y="116" width="3" height="3" fill="#5fd07a" />
            <rect x="94" y="116" width="3" height="3" fill="#5fd07a" />
            <rect x="88" y="122" width="3" height="3" fill="#5fd07a" />
            <rect x="94" y="122" width="3" height="3" fill="#5fd07a" />
            <rect x="120" y="108" width="18" height="26" fill="none"
              stroke="#FF8A3D" strokeWidth="2" />
            <rect x="124" y="112" width="3" height="3" fill="#FF8A3D" />
            <rect x="131" y="112" width="3" height="3" fill="#FF8A3D" />
            <rect x="124" y="119" width="3" height="3" fill="#FF8A3D" />
            <rect x="131" y="119" width="3" height="3" fill="#FF8A3D" />
            <rect x="124" y="126" width="3" height="3" fill="#FF8A3D" />
            <rect x="131" y="126" width="3" height="3" fill="#FF8A3D" />
          </g>
        )}
      </svg>
      <span className="il-deco il-deco-1">{"{ }"}</span>
      <span className="il-deco il-deco-2">{"</>"}</span>
      <span className="il-deco il-deco-3">✦</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navSolid, setNavSolid] = useState(false);
  const [eyeState, setEyeState] = useState<"closed" | "opening" | "done">(
    "closed",
  );
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [sujet, setSujet] = useState("");
  const [msg, setMsg] = useState("");
  const [cProjets, setCProjets] = useState(0);
  const [cSat, setCSat] = useState(0);
  const [cActifs, setCActifs] = useState(0);
  const [prjFilter, setPrjFilter] = useState<"all" | "vitrine" | "dynamic" | "mobile" | "system">("all");

  useEffect(() => {
    const el = document.getElementById("chiffres");
    if (!el) return;
    let fired = false;
    const animate = (
      target: number,
      setter: (n: number) => void,
      dur = 1400,
    ) => {
      const start = performance.now();
      const step = (t: number) => {
        const k = Math.min(1, (t - start) / dur);
        const ease = 1 - Math.pow(1 - k, 3);
        setter(Math.round(target * ease));
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(
      (en) => {
        en.forEach((x) => {
          if (x.isIntersecting && !fired) {
            fired = true;
            animate(27, setCProjets, 1500);
            animate(98, setCSat, 1700);
            animate(5, setCActifs, 1200);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (en) => {
        en.forEach((x) => {
          if (x.isIntersecting) {
            x.target.classList.add("in");
            io.unobserve(x.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const t1 = window.setTimeout(() => setEyeState("opening"), 90);
    const t2 = window.setTimeout(() => setEyeState("done"), 1700);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    )
      return;
    const tokens = [
      "</>",
      "<div>",
      "</div>",
      "{ }",
      "()",
      "[]",
      "=>",
      "&&",
      "||",
      "const",
      "let",
      "return",
      "import",
      "export",
      "async",
      "await",
      "<br/>",
      "<span>",
      "</span>",
      "<p>",
      "useState",
      "useEffect",
      "function()",
      "npm i",
      "git",
      "0x1F",
      "...rest",
      "props",
      "<svg/>",
      "tsx",
      "fetch()",
      "#hex",
      "true",
      "null",
      "// fix",
    ];
    let lastX = 0,
      lastY = 0,
      lastT = 0;
    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      const dx = e.clientX - lastX,
        dy = e.clientY - lastY;
      if (now - lastT < 60 && Math.hypot(dx, dy) < 26) return;
      lastT = now;
      lastX = e.clientX;
      lastY = e.clientY;
      const el = document.createElement("span");
      el.className = "cursor-token";
      el.textContent = tokens[Math.floor(Math.random() * tokens.length)];
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
      el.style.setProperty("--dx", (Math.random() * 50 - 25).toFixed(0) + "px");
      el.style.setProperty(
        "--dy",
        (-Math.random() * 50 - 12).toFixed(0) + "px",
      );
      el.style.setProperty(
        "--rot",
        (Math.random() * 40 - 20).toFixed(0) + "deg",
      );
      document.body.appendChild(el);
      el.addEventListener("animationend", () => el.remove());
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("accueil");
      const h = hero ? hero.offsetHeight : 600;
      const y = window.scrollY;
      // fond plein UNIQUEMENT pendant le scroll dans le hero (évite le bleed),
      // transparent au repos et sur les sections suivantes (sombres incluses)
      setNavSolid(y > 8 && y < h - 70);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  type Status = "live" | "offline" | "private" | "wip";
  type Kind = "vitrine" | "dynamic" | "mobile" | "system";
  type Illust = "agro" | "money" | "ride" | "biz" | "escrow" | "nda" | "shop" | "build";
  type Project = {
    title: string;
    cat: string;
    kind: Kind;
    year: string;
    desc: string;
    img?: string;
    url?: string;
    status: Status;
    location?: string;
    illust?: Illust;
  };
  const statusLabel: Record<Status, string> = {
    live: "En ligne",
    offline: "Hors ligne",
    private: "Privé",
    wip: "En cours",
  };
  const kindLabel: Record<Kind | "all", string> = {
    all: "Tous",
    vitrine: "Vitrines",
    dynamic: "Dynamiques",
    mobile: "Mobiles",
    system: "Systèmes",
  };
  const projects: Project[] = [
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
      title: "Kumtel-Luxell",
      cat: "E-commerce · WordPress",
      kind: "dynamic",
      year: "2021",
      desc: "Boutique en ligne pour la marque Kumtel-Luxell (électroménager). Catalogue, fiches produits, panier, paiement. Pas de trace conservée.",
      status: "offline",
      illust: "shop",
    },
    {
      title: "SOLTP",
      cat: "Site vitrine · Construction",
      kind: "vitrine",
      year: "2021",
      desc: "Site vitrine pour une entreprise de construction et travaux publics. Présentation, services, contact. Aucune trace conservée.",
      status: "offline",
      illust: "build",
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
      illust: "agro",
    },
    {
      title: "Transfert d'argent",
      cat: "App mobile · Fintech",
      kind: "mobile",
      year: "2025",
      desc: "Transfert rapide et sécurisé. Envoi, réception, historique, KYC, intégration Mobile Money et bancaire.",
      status: "private",
      illust: "money",
    },
    {
      title: "Transport à la demande",
      cat: "App mobile · Mobilité",
      kind: "mobile",
      year: "2025",
      desc: "Une appli façon Yango — mais sans les VTC. Mise en relation rapide, géolocalisation, paiement intégré.",
      status: "private",
      illust: "ride",
    },
    {
      title: "Gestion d'entreprise",
      cat: "App mobile · Gestion",
      kind: "mobile",
      year: "2024",
      desc: "Outil de gestion sur mesure : stock, ventes, employés, rapports — tout dans la poche du gérant.",
      status: "private",
      illust: "biz",
    },
    {
      title: "Paiement séquestre (escrow)",
      cat: "App mobile · Tiers de confiance",
      kind: "mobile",
      year: "2025",
      desc: "L'argent est gardé par un tiers de confiance, puis libéré une fois la transaction validée. Zéro arnaque.",
      status: "private",
      illust: "escrow",
    },
    {
      title: "Application sous NDA",
      cat: "App mobile · Confidentielle",
      kind: "mobile",
      year: "2024",
      desc: "Application mobile livrée pour un client. Détails couverts par accord de confidentialité.",
      status: "private",
      illust: "nda",
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

  const envoyer = () => {
    const dest = "koffingouanemmanuel0@gmail.com";
    const s = sujet || "Contact depuis le portfolio";
    const corps =
      "Nom : " +
      prenom +
      " " +
      nom +
      "%0D%0AE-mail : " +
      email +
      "%0D%0ATéléphone : " +
      tel +
      "%0D%0A%0D%0A" +
      msg;
    window.location.href =
      "mailto:" + dest + "?subject=" + encodeURIComponent(s) + "&body=" + corps;
  };

  return (
    <>
      {eyeState !== "done" && (
        <div
          className={`eye-open${eyeState === "opening" ? " opening" : ""}`}
          aria-hidden="true"
        >
          <div className="lid top" />
          <div className="lid bottom" />
        </div>
      )}
      <header className={navSolid ? "scrolled" : ""}>
        <div className="wrap">
          <div className="nav">
            <div className="brand">
              <span className="mr">mr</span>
              <span className="name">koffi</span>
              <span className="dot">.</span>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="#accueil">Accueil</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#process">Process</a>
                </li>
                <li>
                  <a href="#projets">Projets</a>
                </li>
                <li>
                  <a href="#parcours">Parcours</a>
                </li>
              </ul>
            </nav>
            <a href="https://wa.me/2250556598199" target="_blank" rel="noopener noreferrer" className="btn orange">
              Me contacter <span className="ic">↗</span>
            </a>
            <button
              className={`burger${menuOpen ? " open" : ""}`}
              aria-label="Ouvrir le menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
            <a
              href="tel:+2250556598199"
              className="call-btn"
              aria-label="Appeler"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.21 2.2z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <div
        className={`overlay${menuOpen ? " open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <aside
        className={`side${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="side-head">
          <div className="brand">
            <span className="sig">Mr Koffi</span>
            <span className="flourish">~</span>
          </div>
          <button className="close" aria-label="Fermer" onClick={closeMenu}>
            ×
          </button>
        </div>
        <a className="link" href="#accueil" onClick={closeMenu}>
          Accueil
        </a>
        <a className="link" href="#services" onClick={closeMenu}>
          Services
        </a>
        <a className="link" href="#process" onClick={closeMenu}>
          Process
        </a>
        <a className="link" href="#projets" onClick={closeMenu}>
          Projets
        </a>
        <a className="link" href="#parcours" onClick={closeMenu}>
          Parcours
        </a>
        <div className="side-cta">
          <a href="https://wa.me/2250556598199" target="_blank" rel="noopener noreferrer" className="btn orange" onClick={closeMenu}>
            Me contacter <span className="ic">↗</span>
          </a>
        </div>
      </aside>

      {/* HERO */}
      <div className="grid-bg" id="accueil">
        <div className="wrap">
          <section className="hero hero-tri">
            <div className="hero-tri-grid">
              <aside className="ht-left reveal">
                <div className="hello">
                  Bonjour, ravi de vous voir !
                </div>
                <h1>
                  Je suis
                  <br />
                  <span className="o">Koffi N&apos;gouan</span>
                  <br />
                  <span className="o">Emmanuel</span>,<br />
                  développeur
                  <br />
                  <span className="k up">web &amp; mobile</span>.
                </h1>
              </aside>

              <div className="ht-center reveal d1">
                <div className="hero-visual">
                  <span className="deco-plus" style={{ top: "6%", left: "8%" }}>
                    +
                  </span>
                  <span
                    className="deco-plus"
                    style={{ bottom: "14%", left: "2%", fontSize: "18px" }}
                  >
                    +
                  </span>
                  <div className="blob"></div>
                  <img
                    className="me"
                    src="/moiveste.png"
                    alt="KOFFI N'gouan Emmanuel"
                  />
                  <div className="curve" aria-hidden="true">
                    <svg viewBox="0 0 600 80" preserveAspectRatio="none">
                      <path d="M0 40 C 120 10, 240 70, 360 35 S 540 60, 600 25" />
                      <path
                        d="M20 60 C 140 30, 260 80, 380 50 S 560 70, 600 45"
                        style={{ opacity: 0.3 }}
                      />
                    </svg>
                  </div>
                  <div className="stat-mob s1">
                    <div className="num">
                      <b>27</b>
                      <i>+</i>
                    </div>
                    <span>Projets</span>
                  </div>
                  <div className="stat-mob s2">
                    <div className="num">
                      <b>98</b>
                      <i>%</i>
                    </div>
                    <span>Satisfait</span>
                  </div>
                  <div className="stat-mob s3">
                    <div className="num">
                      <b>5</b>
                    </div>
                    <span>En cours</span>
                  </div>
                </div>

                <div className="hero-cta ht-cta">
                  <a href="#projets" className="btn orange">
                    Voir mes projets <span className="ic">↗</span>
                  </a>
                  <a href="https://wa.me/2250556598199" target="_blank" rel="noopener noreferrer" className="btn line">
                    Me contacter
                  </a>
                </div>
              </div>

              <aside className="ht-right reveal">
                <div className="hello hello-r">
                  <span>✦</span> Ce que je fais au quotidien
                </div>
                <p className="lead">
                  Je conçois des applications
                  <br />
                  <em>web</em> et <b>mobiles</b>,<br />
                  j&apos;entraîne des modèles
                  <br />
                  de <em>machine learning</em>,<br />
                  satisfait ou <b>satisfait</b>.
                </p>
              </aside>
            </div>
          </section>
        </div>
      </div>

      {/* BANDEROLES CROISÉES */}
      <div className="stack-cross" aria-label="Mes technologies">
        <div className="stack-band bd1">
          <div className="sb-track">
            {Array.from({ length: 3 }).map((_, k) => (
              <div className="sb-loop" key={k}>
                <span className="sb-item">
                  <img src="https://cdn.simpleicons.org/react/61DAFB" alt="" />
                  <b>React</b>
                </span>
                <em>✦</em>
                <span className="sb-item">
                  <img
                    src="https://cdn.simpleicons.org/nextdotjs/F2F4F7"
                    alt=""
                  />
                  <b>Next.js</b>
                </span>
                <em>✦</em>
                <span className="sb-item">
                  <img
                    src="https://cdn.simpleicons.org/nodedotjs/5FA04E"
                    alt=""
                  />
                  <b>Node</b>
                </span>
                <em>✦</em>
                <span className="sb-item">
                  <img
                    src="https://cdn.simpleicons.org/flutter/02569B"
                    alt=""
                  />
                  <b>Flutter</b>
                </span>
                <em>✦</em>
              </div>
            ))}
          </div>
        </div>
        <div className="stack-band bd2">
          <div className="sb-track">
            {Array.from({ length: 3 }).map((_, k) => (
              <div className="sb-loop" key={k}>
                <span className="sb-item">
                  <img src="https://cdn.simpleicons.org/python/FF9D5C" alt="" />
                  <b>Python</b>
                </span>
                <em>✦</em>
                <span className="sb-item">
                  <img
                    src="https://cdn.simpleicons.org/tensorflow/FF6F00"
                    alt=""
                  />
                  <b>TensorFlow</b>
                </span>
                <em>✦</em>
                <span className="sb-item">
                  <img src="https://cdn.simpleicons.org/php/A399D0" alt="" />
                  <b>PHP</b>
                </span>
                <em>✦</em>
                <span className="sb-item">
                  <img
                    src="https://cdn.simpleicons.org/laravel/FF2D20"
                    alt=""
                  />
                  <b>Laravel</b>
                </span>
                <em>✦</em>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GALERIE - CHIFFRES ARTISTIQUES */}
      <section className="gallery" id="chiffres">
        <div className="wrap">
          <div className="gal-head reveal">
            <span className="gal-eyebrow">— Quelques chiffres —</span>
            <h2 className="gal-title">
              Un <em>petit</em> aperçu
              <br />
              de <em>grands</em> projets.
            </h2>
            <p className="gal-lead">
              Chaque projet, une ligne de code. Chaque client, un déploiement
              réussi. Voilà mon parcours, jusqu&apos;ici.
            </p>
          </div>

          <div className="gal-grid">
            <figure className="canvas c1 reveal d1">
              <svg
                className="art-shape"
                viewBox="0 0 200 200"
                aria-hidden="true"
              >
                <circle cx="100" cy="100" r="78" fill="#F26513" />
                <path
                  d="M40 60 Q 100 10, 160 70 L 145 130 Q 90 170, 50 130 Z"
                  fill="#0E0E10"
                  opacity=".88"
                />
                <circle cx="135" cy="80" r="9" fill="#F4F4F5" />
                <circle cx="135" cy="80" r="3" fill="#0E0E10" />
                <path
                  d="M70 130 Q 100 145, 130 130"
                  fill="none"
                  stroke="#F4F4F5"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M20 30 L 50 50 M 170 40 L 145 60 M 180 160 L 155 145"
                  stroke="#0E0E10"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <div className="canvas-num">
                <b>{cProjets}</b>
                <i>+</i>
              </div>
              <svg
                className="brush"
                viewBox="0 0 200 16"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M4 8 C 40 2, 90 14, 140 6 S 196 10, 196 8"
                  fill="none"
                  stroke="#F26513"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
              <figcaption>
                <span className="cap-tag">№ I</span>
                <h3>Projets livrés</h3>
                <p>
                  Sites web et applications mobiles — livrés et en service.
                </p>
              </figcaption>
            </figure>

            <figure className="canvas c2 reveal d2">
              <svg
                className="art-shape"
                viewBox="0 0 200 200"
                aria-hidden="true"
              >
                <path
                  d="M100 30 C 60 30, 30 60, 30 100 C 30 150, 100 180, 100 180
                  C 100 180, 170 150, 170 100 C 170 60, 140 30, 100 30
                  C 100 30, 100 50, 100 70 C 100 50, 100 30, 100 30 Z"
                  fill="#F26513"
                />
                <path
                  d="M60 80 Q 100 50, 140 80"
                  fill="none"
                  stroke="#0E0E10"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="80" cy="100" r="6" fill="#0E0E10" />
                <circle cx="120" cy="100" r="6" fill="#0E0E10" />
                <path
                  d="M75 130 Q 100 155, 125 130"
                  fill="none"
                  stroke="#0E0E10"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M30 30 L 50 50 M 170 30 L 150 50"
                  stroke="#0E0E10"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <div className="canvas-num">
                <b>{cSat}</b>
                <i>%</i>
              </div>
              <svg
                className="brush"
                viewBox="0 0 200 16"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M4 9 C 50 14, 100 2, 150 10 S 196 6, 196 8"
                  fill="none"
                  stroke="#0E0E10"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
              <figcaption>
                <span className="cap-tag">№ II</span>
                <h3>Satisfaction client</h3>
                <p>
                  Communication claire, deadlines tenues. Un sourire en retour.
                </p>
              </figcaption>
            </figure>

            <figure className="canvas c3 reveal d3">
              <svg
                className="art-shape"
                viewBox="0 0 200 200"
                aria-hidden="true"
              >
                <line
                  x1="60"
                  y1="40"
                  x2="60"
                  y2="160"
                  stroke="#0E0E10"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M60 80 C 60 110, 140 90, 140 120"
                  fill="none"
                  stroke="#F26513"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <circle cx="60" cy="40" r="14" fill="#0E0E10" />
                <circle cx="60" cy="100" r="14" fill="#0E0E10" />
                <circle cx="60" cy="160" r="14" fill="#0E0E10" />
                <circle cx="140" cy="80" r="14" fill="#F26513" />
                <circle cx="140" cy="120" r="14" fill="#F26513" />
                <circle cx="60" cy="40" r="5" fill="#F4F4F5" />
                <circle cx="60" cy="100" r="5" fill="#F4F4F5" />
                <circle cx="60" cy="160" r="5" fill="#F4F4F5" />
                <circle cx="140" cy="80" r="5" fill="#F4F4F5" />
                <circle cx="140" cy="120" r="5" fill="#F4F4F5" />
                <path
                  d="M140 80 C 140 95, 60 95, 60 100"
                  fill="none"
                  stroke="#F26513"
                  strokeWidth="6"
                  strokeLinecap="round"
                  opacity=".55"
                />
              </svg>
              <div className="canvas-num">
                <b>{cActifs}</b>
              </div>
              <svg
                className="brush"
                viewBox="0 0 200 16"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M4 8 C 30 14, 80 4, 120 12 S 180 6, 196 8"
                  fill="none"
                  stroke="#F26513"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
              <figcaption>
                <span className="cap-tag">№ III</span>
                <h3>En développement</h3>
                <p>Branches actives, code en revue. Bientôt en production.</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* À PROPOS — brutalist dark */}
      <section className="ab2" id="apropos">
        <div className="ab2-marquee" aria-hidden="true">
          <div className="ab2-mq-track">
            {Array.from({ length: 4 }).map((_, k) => (
              <span key={k} className="ab2-mq-loop">
                <b>Developer</b>
                <i>✦</i>
                <b>Big&nbsp;Data</b>
                <i>✦</i>
                <b>Doctorant</b>
                <i>✦</i>
                <b>FIFA&nbsp;Head</b>
                <i>✦</i>
                <b>3D&nbsp;Artist</b>
                <i>✦</i>
                <b>Bouaké</b>
                <i>✦</i>
              </span>
            ))}
          </div>
        </div>

        <div className="wrap ab2-wrap">
          <aside className="ab2-side reveal">
            <span className="ab2-vert">Tout moi</span>
          </aside>

          <header className="ab2-head reveal">
            <div className="ab2-head-left">
              <span className="ab2-meta">
                <i>01</i> Ravi de vous lire —
              </span>
              <h2 className="ab2-name">
                Koffi
                <br />
                N&apos;gouan
                <br />
                <em>Emmanuel.</em>
              </h2>
              <p className="ab2-bio">
                Spécialisé en <b>bases de données</b> — licence puis master à
                l&apos;<b>UVCI</b>. La donnée me fascine&nbsp;: sans elle, pas
                de décision, pas de modèle, pas de vie numérique. Chaque table,
                chaque ligne raconte quelque chose. Mon rôle&nbsp;: la
                collecter, la nettoyer, la faire parler. Né à <b>Bouaké</b>,
                j&apos;y code entre <b>web</b>, <b>mobile</b> et <b>data</b>.
              </p>
            </div>
            <div className="ab2-portrait">
              <div className="ab2-portrait-halo" aria-hidden="true"></div>
              <svg
                className="ab2-portrait-arc"
                viewBox="0 0 400 400"
                aria-hidden="true"
              >
                <circle
                  cx="200"
                  cy="200"
                  r="186"
                  fill="none"
                  stroke="#F26513"
                  strokeWidth="1.2"
                  strokeDasharray="2 6"
                  opacity=".55"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="156"
                  fill="none"
                  stroke="#F26513"
                  strokeWidth="1"
                  opacity=".25"
                />
              </svg>
              <div className="ab2-portrait-frame">
                <img
                  src="/moi.png"
                  alt="Koffi N'gouan Emmanuel"
                />
              </div>
              <span className="ab2-corner-bracket tl">⌐</span>
              <span className="ab2-corner-bracket br">¬</span>
              <div className="ab2-stamp">
                <span>UVCI</span>
                <i>
                  Université Virtuelle
                  <br />
                  de Côte d&apos;Ivoire
                </i>
              </div>
              <span className="ab2-portrait-info">
                <i>BOUAKÉ</i>
                <br />
                <em>05° N · 04° W</em>
              </span>
            </div>
          </header>

          <div className="ab2-cards">
            <article className="ab2-card r-a reveal d1">
              <span className="ab2-tag">EDU · 01</span>
              <h3>Bac D</h3>
              <p>
                Scientifique. Équations, intégrales,
                <br />
                premières nuits blanches.
              </p>
              <div className="ab2-corner">★</div>
            </article>
            <article className="ab2-card r-b reveal d2">
              <span className="ab2-tag">EDU · 02</span>
              <h3>Licence</h3>
              <p>
                Bases de données <em>—</em> UVCI.
                <br />
                Le SQL devient une langue.
              </p>
              <div className="ab2-corner">⌘</div>
            </article>
            <article className="ab2-card r-c reveal d3">
              <span className="ab2-tag">EDU · 03</span>
              <h3>Master</h3>
              <p>
                Big Data Analytics <em>—</em> UVCI.
                <br />
                Modèles, pipelines, gros volumes.
              </p>
              <div className="ab2-corner">∑</div>
            </article>
            <article className="ab2-card r-d reveal d4">
              <span className="ab2-tag">EDU · 04</span>
              <h3>Doctorat</h3>
              <p>
                En cours, toujours UVCI.
                <br />
                On creuse plus profond.
              </p>
              <div className="ab2-corner">∞</div>
            </article>
            <article className="ab2-card r-e hobby reveal d2">
              <span className="ab2-tag">OFF · DUTY</span>
              <h3>FIFA</h3>
              <p>
                Manette branchée, matchs tard le soir.
                <br />
                Pause bien méritée après le code.
              </p>
              <div className="ab2-corner">▲</div>
            </article>
          </div>

          <div className="ab2-watermark" aria-hidden="true">
            mr koffi<i>.</i>
          </div>
        </div>
      </section>

      {/* SERVICES — brutalist showcase */}
      <section className="srv" id="services">
        <div className="srv-bg-word" aria-hidden="true">SERVICES</div>
        <div className="wrap srv-wrap">
          <header className="srv-head reveal">
            <span className="srv-eyebrow">
              <i>✦</i> Mes services <i>✦</i>
            </span>
            <h2 className="srv-title">
              Ce que je <em>construis</em>
              <br />
              pour <span className="o">vous</span>.
            </h2>
            <p className="srv-lead">
              Trois terrains de jeu. Code propre, livrables qui tournent,
              zéro promesse en l&apos;air.
            </p>
          </header>

          <div className="srv-grid">
            <article className="srv-card sc1 reveal d1">
              <div className="srv-num">01</div>
              <div className="srv-icon" aria-hidden="true">
                <svg viewBox="0 0 64 64">
                  <rect x="6" y="10" width="52" height="40" rx="4"
                    fill="none" stroke="currentColor" strokeWidth="3" />
                  <path d="M6 20 L58 20" stroke="currentColor" strokeWidth="3" />
                  <circle cx="12" cy="15" r="1.5" fill="currentColor" />
                  <circle cx="17" cy="15" r="1.5" fill="currentColor" />
                  <circle cx="22" cy="15" r="1.5" fill="currentColor" />
                  <path d="M16 32 L24 38 L16 44 M28 44 L40 44"
                    stroke="currentColor" strokeWidth="3"
                    fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Sites Web &amp; Systèmes</h3>
              <p className="srv-desc">
                Tout ce qui marche dans un navigateur. Site vitrine, boutique
                en ligne, système de gestion d&apos;école, de stock, de
                clients, de rendez-vous. Bref, je fais tout.
              </p>
              <ul className="srv-list">
                <li>Site vitrine, blog, boutique en ligne</li>
                <li>Gestion école, stock, clients, RDV</li>
                <li>Nom de domaine + hébergement inclus</li>
              </ul>
              <span className="srv-badge">Web</span>
            </article>

            <article className="srv-card sc2 reveal d2">
              <div className="srv-num">02</div>
              <div className="srv-icon" aria-hidden="true">
                <svg viewBox="0 0 64 64">
                  <rect x="18" y="6" width="28" height="52" rx="5"
                    fill="none" stroke="currentColor" strokeWidth="3" />
                  <path d="M18 14 L46 14 M18 50 L46 50"
                    stroke="currentColor" strokeWidth="3" />
                  <circle cx="32" cy="54" r="1.8" fill="currentColor" />
                  <path d="M28 28 L32 32 L40 24"
                    stroke="currentColor" strokeWidth="3"
                    fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Applications Mobiles</h3>
              <p className="srv-desc">
                Une application pour téléphone, disponible sur Android et
                iPhone. Vos clients la téléchargent, l&apos;utilisent, vous
                envoient des paiements Mobile Money.
              </p>
              <ul className="srv-list">
                <li>Disponible sur Play Store et App Store</li>
                <li>Paiement Mobile Money intégré</li>
                <li>Notifications + suivi en temps réel</li>
              </ul>
              <span className="srv-badge">Mobile</span>
            </article>

            <article className="srv-card sc3 reveal d3">
              <div className="srv-num">03</div>
              <div className="srv-icon" aria-hidden="true">
                <svg viewBox="0 0 64 64">
                  <ellipse cx="32" cy="14" rx="22" ry="7"
                    fill="none" stroke="currentColor" strokeWidth="3" />
                  <path d="M10 14 L10 32 C10 36 20 39 32 39 C44 39 54 36 54 32 L54 14"
                    fill="none" stroke="currentColor" strokeWidth="3" />
                  <path d="M10 32 L10 50 C10 54 20 57 32 57 C44 57 54 54 54 50 L54 32"
                    fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
              </div>
              <h3>Bases de Données</h3>
              <p className="srv-desc">
                Vos informations bien rangées, faciles à retrouver, jamais
                perdues. J&apos;organise vos données pour qu&apos;elles
                travaillent pour vous. C&apos;est mon vrai métier.
              </p>
              <ul className="srv-list">
                <li>Stockage sûr de vos informations</li>
                <li>Sauvegardes automatiques chaque jour</li>
                <li>Recherche rapide, zéro perte</li>
              </ul>
              <span className="srv-badge">Data</span>
            </article>
          </div>

          <div className="srv-cta reveal">
            <p>
              <em>Tout ce que vous voulez</em>
            </p>
            <a href="https://wa.me/2250556598199" target="_blank" rel="noopener noreferrer" className="btn orange">
              Démarrer un projet <span className="ic">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* PROJETS — galerie brutalist */}
      <section className="prj" id="projets">
        <div className="wrap">
          <header className="prj-head reveal">
            <span className="prj-eyebrow">Réalisations</span>
            <h2 className="prj-title">
              Projets livrés,
              <br />
              clients <span className="o">satisfaits</span>.
            </h2>
            <p className="prj-lead">
              Sites, apps, systèmes de gestion — tous en service quelque part.
            </p>
          </header>

          <div className="prj-tabs reveal" role="tablist">
            {(["all", "vitrine", "dynamic", "mobile", "system"] as const).map((k) => {
              const count =
                k === "all"
                  ? projects.length
                  : projects.filter((p) => p.kind === k).length;
              return (
                <button
                  key={k}
                  role="tab"
                  aria-selected={prjFilter === k}
                  className={`prj-tab${prjFilter === k ? " active" : ""}`}
                  onClick={() => setPrjFilter(k)}
                >
                  {kindLabel[k]} <i>{count}</i>
                </button>
              );
            })}
          </div>

          <div className="prj-grid">
            {projects
              .filter((p) => prjFilter === "all" || p.kind === prjFilter)
              .map((p, i) => {
                const initials = p.title
                  .replace(/[^A-Za-zÀ-ÿ0-9 ]/g, "")
                  .split(" ")
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join("")
                  .toUpperCase();
                return (
                  <article
                    key={p.title}
                    className={`prj-card reveal d${(i % 3) + 1}`}
                  >
                    <div
                      className={`prj-cover${p.img ? " has-img" : ""} st-${p.status}`}
                    >
                      {p.img ? (
                        <img src={p.img} alt={p.title} />
                      ) : p.illust ? (
                        <PrjIllust kind={p.illust} />
                      ) : (
                        <span className="prj-mock light">
                          <b>{initials}</b>
                          <i>{p.cat.split(" · ")[0]}</i>
                        </span>
                      )}
                      <span className={`prj-status st-${p.status}`}>
                        {statusLabel[p.status]}
                      </span>
                    </div>
                    <div className="prj-body">
                      <span className="prj-cat">{p.cat}</span>
                      <h3>{p.title}</h3>
                      <p>{p.desc}</p>
                      <div className="prj-meta">
                        <span className="prj-year">{p.year}</span>
                        {p.url ? (
                          <a
                            className="prj-link"
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Visiter <i>↗</i>
                          </a>
                        ) : (
                          <span className="prj-link disabled">
                            {p.status === "wip" ? "Bientôt" : "Non public"}{" "}
                            <i>·</i>
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
          </div>

          <div className="prj-foot reveal">
            <p>
              Et bien d&apos;autres. <em>Le prochain, c&apos;est le vôtre&nbsp;?</em>
            </p>
            <a href="https://wa.me/2250556598199" target="_blank" rel="noopener noreferrer" className="btn orange">
              Discutons-en <span className="ic">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="f-cta">
            <h2>
              Un projet en tête&nbsp;?
              <br />
              <span className="o">Parlons-en.</span>
            </h2>
            <a
              className="btn orange"
              href="https://wa.me/2250556598199"
              target="_blank"
              rel="noopener noreferrer"
            >
              Écrire sur WhatsApp <span className="ic">↗</span>
            </a>
          </div>
          <div className="f-top">
            <div className="f-brand">
              <div className="brand">
                <span className="mr">mr</span>
                <span className="name">koffi</span>
                <span className="dot">.</span>
              </div>
              <p>
                Développeur web &amp; mobile, spécialisé bases de données et Big
                Data. Basé à Bouaké, Côte d&apos;Ivoire.
              </p>
            </div>
            <div className="f-col">
              <h5>Navigation</h5>
              <a href="#accueil">Accueil</a>
              <a href="#services">Services</a>
              <a href="#projets">Projets</a>
              <a href="#apropos">Parcours</a>
            </div>
            <div className="f-col">
              <h5>Me joindre</h5>
              <a href="mailto:koffingouanemmanuel0@gmail.com">E-mail</a>
              <a href="tel:+2250556598199">05 56 59 81 99</a>
              <a
                href="https://wa.me/2250556598199"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div className="f-bottom">
            <span>© 2026 Koffi N&apos;gouan Emmanuel — Bouaké, CI.</span>
            <span>Conçu &amp; codé à la main.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
