import Fx from "./components/Fx";
import IconTrail from "./components/IconTrail";
import Menu from "./components/Menu";
import Wall from "./components/Wall";

const WHATSAPP = "https://wa.me/2250506685198";
const WHATSAPP_ACADEMY =
  "https://wa.me/2250566660927?text=" + encodeURIComponent("Bonjour, je souhaite réserver ma place pour la WordPress Master Class (2e édition).");
const EMAIL = "habibcoulibaly773@gmail.com";
const FACEBOOK = "https://www.facebook.com/habib.coulibaly.3994";
const TIKTOK = "https://www.tiktok.com/@habib.gnimin.coul";
const LINKEDIN = "https://www.linkedin.com/in/gnimin-habib-coulibaly-559a812a2";

const refs = [
  "Africa Digital Academy",
  "CAFSI",
  "Clinique Saint-Martin",
  "AEEMCI",
  "Orange Digital Center",
  "Brunch des Queens",
  "SADEX",
  "UVCI",
  "Collège Henry Poincaré",
];

const services = [
  {
    tag: "Former",
    title: "Formations, ateliers & conférences",
    lead: "Pour les équipes, les établissements et les entrepreneurs qui veulent passer de la curiosité à la pratique.",
    img: "/terrain/cours.webp",
    items: ["IA appliquée à la productivité et au business", "Marketing digital & publicité Facebook", "Personal branding", "WordPress, de zéro à la mise en ligne"],
  },
  {
    tag: "Créer",
    title: "Sites internet WordPress",
    lead: "Un site professionnel, en ligne, que vous savez faire vivre.",
    img: "/terrain/atelier.webp",
    items: ["Sites vitrines & sites d'entreprise", "Hébergement et mise en ligne sur Hostinger", "Maintenance et suivi", "Référence : Clinique Saint-Martin"],
  },
  {
    tag: "Faire grandir",
    title: "Marketing digital & community management",
    lead: "Une présence en ligne qui ramène des clients, pas seulement des likes.",
    img: "/studio/studio-2.webp",
    items: ["Audit de présence digitale", "Gestion des pages Facebook & TikTok", "Création de contenu & campagnes Facebook Ads", "Intégration de l'IA dans vos équipes"],
  },
];

const programmes = [
  {
    title: "Marketing digital — 3 mois",
    lead: "Le programme phare : chaque apprenant travaille sur une vraie entreprise, du premier jour au dernier.",
    chips: ["Community management", "Facebook & Ads", "Intelligence artificielle", "Canva & design pro", "Création de contenu", "WhatsApp Business", "Personal branding", "Montage vidéo mobile"],
    foot: "3 soirs par semaine · 25 places par promotion · Bouaké",
  },
  {
    title: "Masterclass Canva Pro",
    lead: "Apprendre à créer des supports graphiques professionnels.",
    chips: ["Découverte complète de Canva Pro", "Supports professionnels", "Projet pratique & évaluation"],
    foot: "Accès Canva Pro et certification",
  },
  {
    title: "Community management",
    lead: "Créer des contenus efficaces et gérer ses réseaux sociaux.",
    chips: ["Bases du community management", "Contenus visuels & vidéos", "Outils de création", "Développer une communauté engagée"],
    foot: "Présentiel · Bouaké",
  },
  {
    title: "Publicité Facebook",
    lead: "Lancer, cibler et suivre ses campagnes Facebook Ads.",
    chips: ["Meta Business Suite", "Facebook Ads Manager", "Du ciblage au suivi des résultats"],
    foot: "Présentiel et en ligne",
  },
];

const gratuites = [
  "Introduction au business en ligne et digitalisation de son business physique",
  "Les fondamentaux du marketing digital : canaux, stratégies et outils essentiels",
  "Premiers pas dans le digital : découverte des outils essentiels",
  "Comment le digital peut vous aider à trouver des opportunités et générer des revenus ?",
];

const railA = ["groupe", "certificats", "cours", "salle", "conference", "remise-1"];
const railB = ["club", "atelier", "panel-1", "remise-2", "promo"];

// Du plus récent au plus ancien ; le poste en cours en premier.
const parcours = [
  {
    when: "Oct. 2024 → aujourd'hui",
    role: "Fondateur & formateur principal",
    where: "Digital-Tech",
    text: "Structure de formation et de services digitaux. Je conçois et j'anime les programmes de Digital-Tech Academy — marketing digital en 3 mois, WP Masterclass, publicité Facebook — et je réalise des sites WordPress pour des clients, dont la Clinique Saint-Martin.",
  },
  {
    when: "Mai 2026",
    role: "Formation IA en entreprise",
    where: "CAFSI — Cabinet de Formation, de Suivi et d'Insertion",
    text: "Formation du personnel à l'utilisation professionnelle de l'IA : outils de productivité et de communication digitale.",
  },
  {
    when: "2025 → 2026",
    role: "Formateur en marketing digital",
    where: "Africa Digital Academy (ADA)",
    text: "Sessions pratiques orientées résultats, accompagnement des apprenants sur les stratégies digitales et les outils professionnels, conception de supports pédagogiques et d'exercices pratiques.",
  },
  {
    when: "2025",
    role: "Licence Réseau & Sécurité Informatique",
    where: "Université Virtuelle de Côte d'Ivoire (UVCI)",
    text: "Je poursuis aujourd'hui en master Big Data Analytics.",
  },
];

const certifs = ["Certification en Marketing Digital — ADA", "Certification internationale en Cybersécurité", "Parcours de certification IA — Anthropic Academy (en cours)", "Formations continues en transformation digitale"];

const scenes = [
  { title: "Conférence sur l'intelligence artificielle", org: "AEEMCI" },
  { title: "« Au-delà du code »", org: "Série de masterclasses" },
  { title: "« Le Digital, une opportunité pour les Femmes »", org: "Brunch des Queens — devant des cadres et expertes confirmées" },
  { title: "L'Apothéose du Marketing Digital", org: "Collège Henry Poincaré, Bouaké — marketing digital et IA dans un monde connecté" },
  { title: "Digital & Art Oratoire", org: "Yamoussoukro — formation spéciale" },
  { title: "SADEX, le Salon des Expériences", org: "Intervenant — juin 2025" },
];

const awardsPhotos = [
  { src: "/awards/micro-2.webp", alt: "Habib au micro pendant la cérémonie" },
  { src: "/awards/remise.webp", alt: "Remise des trophées et du certificat" },
  { src: "/awards/rti.webp", alt: "Interview au micro de la RTI" },
  { src: "/awards/groupe.webp", alt: "Photo avec les organisateurs" },
  { src: "/awards/vainqueur.webp", alt: "Annonce du vainqueur de la catégorie Innovation" },
  { src: "/awards/felicitations.webp", alt: "Félicitations après la remise" },
  { src: "/awards/trio.webp", alt: "Habib et deux proches, trophées en main" },
  { src: "/awards/micro-1.webp", alt: "Habib prend la parole après la remise" },
];

const phones = [{ src: "/studio/studio-1.webp" }, { src: "/studio/studio-3.webp" }, { src: "/studio/studio-4.webp" }];

const affiches = [
  { src: "/affiches/a-wpmasterclass-2.webp", alt: "WordPress Master Class, 2e édition" },
  { src: "/affiches/a-3mois.webp", alt: "3 mois de formation en marketing digital" },
  { src: "/affiches/a-apotheose.webp", alt: "L'Apothéose du Marketing Digital" },
  { src: "/affiches/a-canva.webp", alt: "Masterclass Canva Pro" },
  { src: "/affiches/a-gratuite-mars.webp", alt: "Formation gratuite en ligne" },
  { src: "/affiches/a-cm.webp", alt: "Formation Community Management" },
  { src: "/affiches/a-wpmasterclass.webp", alt: "WP Masterclass, juillet 2025" },
  { src: "/affiches/a-oratoire.webp", alt: "Digital et Art Oratoire à Yamoussoukro" },
  { src: "/affiches/a-marketing.webp", alt: "Formation en marketing digital" },
  { src: "/affiches/a-numerique.webp", alt: "Initiation et transformation numérique" },
  { src: "/affiches/a-sadex.webp", alt: "SADEX, Salon des Expériences" },
  { src: "/affiches/a-wp-speciale.webp", alt: "Formation spéciale WordPress" },
  { src: "/affiches/a-business-nov.webp", alt: "Introduction au business en ligne" },
  { src: "/affiches/a-wp-gratuite.webp", alt: "Formation gratuite WordPress" },
  { src: "/affiches/a-business-odc.webp", alt: "Formation spéciale à l'Orange Digital Center" },
  { src: "/affiches/a-business-oct.webp", alt: "Business en ligne, octobre 2025" },
];

const skills = [
  "Formation & pédagogie",
  "Conception de programmes",
  "Marketing digital stratégique",
  "Social media marketing",
  "Community management",
  "Publicité Facebook",
  "Création de contenu digital",
  "Développement web WordPress",
  "IA appliquée au business",
  "Automatisation",
  "Réseau & cybersécurité",
];

const tools = [
  { n: "WordPress", c: "#21759b" },
  { n: "Hostinger", c: "#673de6" },
  { n: "ChatGPT", c: "#10a37f" },
  { n: "Claude", c: "#d97757" },
  { n: "n8n", c: "#ea4b71" },
  { n: "Canva", c: "#00c4cc" },
  { n: "CapCut", c: "#111111" },
  { n: "Meta Business Suite", c: "#0866ff" },
  { n: "Facebook Ads Manager", c: "#1877f2" },
  { n: "Google Workspace", c: "#ea4335" },
];

const faq = [
  {
    q: "C'est quoi, concrètement, l'IA appliquée ?",
    a: "C'est l'IA qui sert dès lundi matin : rédiger plus vite, répondre aux clients, automatiser les tâches répétitives, mieux communiquer. Pas de jargon — des outils concrets, adaptés à votre activité.",
  },
  {
    q: "Pouvez-vous former mon équipe dans nos locaux ?",
    a: "Oui. Ateliers, formations et conférences sur mesure, en présentiel à Bouaké et partout ailleurs, ou en ligne. Dernier exemple : le personnel du CAFSI, formé à l'usage professionnel de l'IA en mai 2026.",
  },
  {
    q: "Je n'y connais rien. Les formations sont-elles pour moi ?",
    a: "Oui. Plusieurs sessions sont pensées pour les débutants, et certaines sont gratuites et en ligne. On part de zéro et on pratique sur des cas réels.",
  },
  {
    q: "Que comprend la création d'un site WordPress ?",
    a: "La conception du site vitrine ou d'entreprise, l'hébergement et la mise en ligne sur Hostinger, puis la maintenance. Vous repartez avec un site que vous savez faire vivre.",
  },
  {
    q: "Comment réserver une formation ou demander un devis ?",
    a: "Le plus simple : un message WhatsApp au +225 05 06 68 51 98. Vous pouvez aussi m'écrire par e-mail.",
  },
];

/* ───────── petits composants ───────── */

function Icon({ n }: { n: string }) {
  const p: Record<string, React.ReactNode> = {
    globe: <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm6.9 9h-3a15 15 0 00-1.3-5.6A8 8 0 0118.9 11zM12 4c.9 1.3 1.7 3.9 1.9 7h-3.8c.2-3.1 1-5.7 1.9-7zM5.1 13h3a15 15 0 001.3 5.6A8 8 0 015.1 13zm3-2h-3a8 8 0 014.3-5.6A15 15 0 008.1 11zM12 20c-.9-1.3-1.7-3.9-1.9-7h3.8c-.2 3.1-1 5.7-1.9 7zm2.6-1.4a15 15 0 001.3-5.6h3a8 8 0 01-4.3 5.6z" />,
    arrow: <path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="2.400" strokeLinecap="round" strokeLinejoin="round" />,
    pin: <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.500A2.500 2.500 0 1112 6.500a2.500 2.500 0 010 5z" />,
    star: <path d="M12 2l3 6.300 6.900.900-5 4.800 1.300 6.900L12 17.600 5.800 20.900l1.300-6.900-5-4.800 6.900-.900L12 2z" />,
  };
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
      {p[n]}
    </svg>
  );
}

// Les deux trophées des Awards de Bouaké, dessinés : plaque cristal à étoile et flamme dorée.
function Trophy({ kind }: { kind: "star" | "flame" }) {
  return (
    <svg className="trophy" viewBox="0 0 76 124" aria-hidden="true">
      {kind === "star" ? (
        <>
          <path d="M12 104V54a26 26 0 0152 0v50z" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinejoin="round" />
          <path d="M26 46l12-4 12 4" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.6" strokeLinecap="round" />
          <path transform="translate(26 50)" d="M12 2l3 6.3 6.9.9-5 4.800 1.300 6.900L12 17.600 5.800 20.900l1.300-6.900-5-4.800 6.900-.9z" fill="#ffd21f" />
          <path d="M28 82h20M31 89h14" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M14 104C12 68 24 36 41 12c13 26 19 60 15 92z" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinejoin="round" />
          <path d="M23 103c-3-27 10-42 18-66 5 21-6 33-2 49 2 8 9 11 12 17z" fill="#ffd21f" />
        </>
      )}
      <rect x="6" y="104" width="64" height="13" rx="3" fill="#0a0a0a" stroke="rgba(255,255,255,0.4)" strokeWidth="1.500" />
    </svg>
  );
}

function Rail({ names, cls }: { names: string[]; cls: string }) {
  return (
    <div className={`rail ${cls}`}>
      <div className="rail-track">
        {[...names, ...names].map((n, k) => (
          <img key={k} src={`/terrain/${n}.webp`} alt="" loading="lazy" aria-hidden={k >= names.length} />
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Fx />
      <IconTrail />

      <header className="nav3">
        <a className="nav3-brand" href="#top" aria-label="Gnimin Habib Coulibaly — accueil">
          <svg className="nav3-mark" viewBox="0 0 66 48" fill="none" strokeWidth="4.600" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path className="mk-c" d="M40.050 6.800A21 21 0 1 0 40.050 41.200" />
            <path className="mk-gh" d="M35.400 15.200A11.500 11.500 0 1 0 39.500 24H29M29 24H60M46 8V40M60 8V40" />
          </svg>
          <b>
            <small>Coulibaly</small>
            <span className="serif">Gnimin Habib</span>
          </b>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#a-propos">À propos</a>
          <a href="#services">Services</a>
          <a href="#digital-tech">Digital-Tech</a>
          <a href="#distinctions">Distinctions</a>
          <a href="#parcours">Parcours</a>
        </nav>
        <a className="nav3-cta" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          Me contacter
          <span>
            <Icon n="arrow" />
          </span>
        </a>
        <Menu whatsapp={WHATSAPP} />
      </header>

      <main id="top">
        {/* ═════════ HERO ═════════ */}
        <section className="hero5">
          <span className="h5-word" aria-hidden="true">
            Coulibaly
            <br />
            Gnimin Habib
          </span>
          <img className="h5-fig" src="/cut/bras.webp" alt="Gnimin Habib Coulibaly, bras croisés, lunettes à la main" width={810} height={1280} />

          <div className="h5-note">
            <small>Consultant &amp; formateur</small>
            <b className="serif">Gnimin Habib Coulibaly</b>
            <p>
              Fondateur de <strong>Digital-Tech</strong>. IA appliquée, marketing digital et WordPress, à Bouaké et en
              ligne.
            </p>
            <ul className="h5-does">
              <li>Formations &amp; conférences</li>
              <li>Sites WordPress</li>
              <li>Marketing digital</li>
              <li>Community management</li>
            </ul>
            <div className="h5-socials">
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 21v-7.500h2.500l.400-3h-2.900V8.600c0-.900.300-1.500 1.500-1.500h1.500V4.400c-.300 0-1.200-.100-2.200-.100-2.200 0-3.700 1.300-3.700 3.800v2.400H8v3h2.600V21h2.900z" />
                </svg>
              </a>
              <a href={TIKTOK} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                  <path d="M16.500 3c.300 2.100 1.500 3.500 3.500 3.700v2.900c-1.300.100-2.400-.300-3.500-1v5.900c0 3.200-2.300 5.500-5.300 5.500-2.900 0-5.200-2.300-5.200-5.100 0-3 2.500-5.300 5.700-5v3c-1.500-.300-2.700.600-2.700 2 0 1.200 1 2.100 2.200 2.100 1.400 0 2.300-1 2.300-2.600V3h3z" />
                </svg>
              </a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                  <path d="M6.500 8.500h-3V20h3V8.500zM5 3.500a1.750 1.750 0 100 3.500 1.750 1.750 0 000-3.500zM20.500 13.400c0-3.200-1.700-5.100-4.200-5.100-1.500 0-2.500.700-3 1.600V8.500h-3V20h3v-6c0-1.700.800-2.700 2.100-2.700 1.200 0 2 .900 2 2.700v6h3.100v-6.600z" />
                </svg>
              </a>
              <span>
                <b>5,1 K</b> abonnés
              </span>
            </div>
          </div>

          <div className="h5-note h5-right">
            <small>Reconnu &amp; récompensé</small>
            <b className="serif">
              <em>800+</em> personnes formées
            </b>
            <p>Étudiants, entrepreneurs, professionnels et entreprises accompagnés depuis 2024.</p>
            <ul className="h5-does">
              <li>Meilleur Jeune Entrepreneur</li>
              <li>Prix Innovation &amp; Technologie</li>
              <li>10+ grandes formations</li>
            </ul>
            <div className="h5-awards">
              <span>
                <b>2 prix</b> Awards de Bouaké 2026
              </span>
              <Trophy kind="star" />
              <Trophy kind="flame" />
            </div>
          </div>

          <div className="h5-center">
            <h1>
              Je rends <i>l'IA utile</i>
              <br />
              aux entrepreneurs africains
            </h1>
            <div className="h5-cta">
              <i aria-hidden="true" />
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                Réserver une formation
                <span>
                  <Icon n="arrow" />
                </span>
              </a>
              <i aria-hidden="true" />
            </div>
          </div>
        </section>

        {/* ═════════ RÉFÉRENCES ═════════ */}
        <section className="refs" aria-label="Références et interventions">
          <p className="refs-label">
            Références
            <br />
            &amp; interventions
          </p>
          <div className="refs-rail">
            <ul>
              {[...refs, ...refs].map((r, k) => (
                <li key={k} aria-hidden={k >= refs.length}>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═════════ À PROPOS ═════════ */}
        <section className="about3" id="a-propos">
          <div className="ab3-stage" data-reveal>
            <p className="ab3-word" aria-hidden="true">
              L'IA
              <br />
              sans
              <br />
              jargon.
            </p>
            <img src="/cut/poches.webp" alt="Gnimin Habib Coulibaly, souriant, mains dans les poches" loading="lazy" width={864} height={1080} />
            <p className="ab3-word ab3-outline" aria-hidden="true">
              L'IA
              <br />
              sans
              <br />
              jargon.
            </p>
          </div>

          <div className="ab3-text" data-reveal>
            <small className="kicker">À propos</small>
            <h2>
              Je démystifie l'IA <i>pour ceux qui entreprennent.</i>
            </h2>
            <p>
              Je suis consultant et formateur indépendant. J'accompagne les entreprises, les établissements et les
              professionnels dans le développement de leurs compétences numériques et l'intégration stratégique des
              outils digitaux et de l'intelligence artificielle.
            </p>
            <p>
              L'objectif est toujours le même : <strong>plus de visibilité, plus de productivité, plus de résultats.</strong>
            </p>
            <blockquote className="ab2-mission">
              <small>Ma mission</small>
              Rendre l'intelligence artificielle accessible et utile aux entrepreneurs africains.
            </blockquote>
          </div>

          <ul className="ab3-facts">
            <li>
              <span>
                <Icon n="pin" />
              </span>
              <p>
                <small>Basé à</small>
                Bouaké, Côte d'Ivoire
              </p>
            </li>
            <li>
              <span>
                <Icon n="globe" />
              </span>
              <p>
                <small>J'interviens</small>
                Présentiel &amp; en ligne
              </p>
            </li>
            <li>
              <span>
                <Icon n="star" />
              </span>
              <p>
                <small>Formation</small>
                Licence Réseau &amp; Sécurité
              </p>
            </li>
          </ul>
        </section>

        {/* ═════════ SERVICES ═════════ */}
        <section className="zsv light" id="services">
          <header className="zh" data-reveal>
            <small className="kicker">Ce que je fais</small>
            <h2>
              Trois façons de <i>travailler ensemble.</i>
            </h2>
          </header>
          <ol className="zsv-list">
            {services.map((s, k) => (
              <li key={s.title} data-reveal>
                <span className="zsv-n">0{k + 1}</span>
                <div className="zsv-main">
                  <small>{s.tag}</small>
                  <h3>{s.title}</h3>
                  <p>{s.lead}</p>
                </div>
                <ul className="zplus">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
                <figure>
                  <img src={s.img} alt="" loading="lazy" />
                  <a className="zrb" href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label={`En parler : ${s.title}`}>
                    <Icon n="arrow" />
                  </a>
                </figure>
              </li>
            ))}
          </ol>
        </section>

        {/* ═════════ DIGITAL-TECH ═════════ */}
        <section className="zdt" id="digital-tech">
          <div className="zdt-top">
            <div data-reveal>
              <small className="kicker">Mon entreprise · fondée en octobre 2024</small>
              <h2 className="zdt-name">
                <img src="/brand/digital-tech.webp" alt="Digital-Tech" width={726} height={536} />
              </h2>
              <p className="zdt-lead">
                Structure de formation et de services digitaux, à Bouaké. J'y conçois et j'anime les programmes de{" "}
                <strong>Digital-Tech Academy</strong>, et j'y réalise des sites WordPress pour des clients, dont la Clinique
                Saint-Martin.
              </p>
              <dl className="zdt-stats">
                <div>
                  <dt>800+</dt>
                  <dd>personnes formées</dd>
                </div>
                <div>
                  <dt>10+</dt>
                  <dd>grandes formations</dd>
                </div>
                <div>
                  <dt>3 mois</dt>
                  <dd>le programme phare</dd>
                </div>
                <div>
                  <dt>25</dt>
                  <dd>places par promotion</dd>
                </div>
              </dl>
            </div>
            <figure className="zdt-photo" data-reveal>
              <img src="/terrain/certificats.webp" alt="Apprenants de Digital-Tech Academy brandissant leurs certificats" loading="lazy" />
              <figcaption>Fin de promotion, certificats en main</figcaption>
            </figure>
          </div>

          <div className="ztk" data-reveal>
            <div className="ztk-main">
              <span className="ztk-two" aria-hidden="true">
                2
              </span>
              <small className="ztk-kicker">
                <i /> Prochaine session · 2ᵉ édition
              </small>
              <h3>
                <i>WordPress</i>
                Master Class
              </h3>
              <p>Passez de débutant à créateur de sites web professionnels.</p>
              <ul className="ztk-list">
                <li>Création de sites web avec WordPress</li>
                <li>SEO &amp; personnalisation</li>
                <li>Mise en ligne (hébergement…)</li>
                <li>Projets professionnels</li>
              </ul>
              <p className="ztk-bonus">
                <b>+3</b> formations offertes en ligne : Pub Facebook · Canva · IA
              </p>
            </div>

            <img className="ztk-flyer" src="/affiches/a-wpmasterclass-2.webp" alt="Affiche de la WordPress Master Class, 2e édition" loading="lazy" />

            <div className="ztk-stub">
              <p className="ztk-date">
                <b>24 → 31</b>
                octobre 2026
                <small>PPN-Local UVCI, Bouaké</small>
              </p>
              <p className="ztk-price">
                <s>65.000 FCFA</s>
                <b>45.000</b>
                <span>FCFA · tarif promo jusqu'au 15 octobre</span>
              </p>
              <a className="zpb" href={WHATSAPP_ACADEMY} target="_blank" rel="noopener noreferrer">
                Réserver ma place
                <span>
                  <Icon n="arrow" />
                </span>
              </a>
              <small className="ztk-seats">25 places uniquement</small>
            </div>
          </div>

          <header className="zh zdt-h" data-reveal>
            <small className="kicker">Digital-Tech Academy</small>
            <h2>
              Des formations où <i>l'on pratique.</i>
            </h2>
          </header>
          <div className="zdt-progs">
            {programmes.map((p, k) => (
              <article key={p.title} data-reveal>
                <span>0{k + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.lead}</p>
                <ul>
                  {p.chips.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                <small>{p.foot}</small>
              </article>
            ))}
          </div>

          <div className="zdt-free" data-reveal>
            <div>
              <small className="kicker">100 % gratuit · Google Meet</small>
              <h3>Les sessions gratuites en ligne</h3>
              <p>Régulièrement, j'ouvre une session du soir, gratuite, pour que personne ne reste à la porte du digital.</p>
            </div>
            <ol>
              {gratuites.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ol>
          </div>
        </section>

        {/* ═════════ TERRAIN & AFFICHES ═════════ */}
        <section className="ztr light" id="terrain">
          <header className="ztr-head" data-reveal>
            <b>800+</b>
            <div className="zh">
              <small className="kicker">Sur le terrain</small>
              <h2>
                personnes formées. <i>Et ça se voit.</i>
              </h2>
            </div>
          </header>
          <Rail names={railA} cls="to-left" />
          <Rail names={railB} cls="to-right" />

          <header className="zh ztr-sub" id="affiches" data-reveal>
            <small className="kicker">Le mur d'affiches</small>
            <h2>
              Chaque affiche, <i>une salle remplie.</i>
            </h2>
            <p>Cliquez sur une affiche pour l'agrandir.</p>
          </header>
          <div className="ztr-wall">
            <Wall items={affiches} />
          </div>
        </section>

        {/* ═════════ CONFÉRENCES ═════════ */}
        <section className="zcf zdark" id="conferences">
          <div className="zcf-main">
            <header className="zh" data-reveal>
              <small className="kicker">Conférences &amp; panels</small>
              <h2>
                Micro en main, <i>devant la salle.</i>
              </h2>
              <p>
                J'anime régulièrement des conférences, des ateliers et des panels sur le marketing digital, l'intelligence
                artificielle et la transformation digitale.
              </p>
            </header>
            <ol className="zcf-list">
              {scenes.map((s, k) => (
                <li key={s.title} data-reveal>
                  <span>{String(k + 1).padStart(2, "0")}</span>
                  <p>
                    <b>{s.title}</b>
                    {s.org}
                  </p>
                </li>
              ))}
            </ol>
            <a className="zpb" href={WHATSAPP} target="_blank" rel="noopener noreferrer" data-reveal>
              M'inviter à intervenir
              <span>
                <Icon n="arrow" />
              </span>
            </a>
          </div>
          <div className="zcf-fig" data-reveal>
            <p aria-hidden="true">
              Sur
              <br />
              scène
            </p>
            <img src="/awards/micro-1.webp" alt="Habib, micro en main, pendant une prise de parole" loading="lazy" />
          </div>
        </section>

        {/* ═════════ DISTINCTIONS ═════════ */}
        <section className="zaw zdark" id="distinctions">
          <span className="zaw-year" aria-hidden="true">
            2026
          </span>
          <div className="zaw-top">
            <div data-reveal>
              <header className="zh">
                <small className="kicker">Awards des Jeunes Entrepreneurs de Bouaké · 2026</small>
                <h2>
                  Deux prix, <i>une soirée.</i>
                </h2>
              </header>
              <ul className="zaw-prizes">
                <li>
                  <Trophy kind="star" />
                  <p>
                    <small>Prix</small>
                    Meilleur Jeune Entrepreneur de Bouaké
                  </p>
                </li>
                <li>
                  <Trophy kind="flame" />
                  <p>
                    <small>Catégorie</small>
                    Innovation &amp; Technologie
                  </p>
                </li>
              </ul>
            </div>
            <div className="zaw-col" data-reveal>
              <img className="zaw-main" src="/awards/laureat.webp" alt="Habib, deux trophées et son certificat en main" loading="lazy" />
              <img className="zaw-side" src="/awards/trophees.webp" alt="Les deux trophées des Awards de Bouaké" loading="lazy" />
              <span className="zaw-badge">
                <Icon n="star" /> Double lauréat
              </span>
            </div>
          </div>
          <div className="zaw-strip">
            {awardsPhotos.map((a) => (
              <img key={a.src} src={a.src} alt={a.alt} loading="lazy" data-reveal />
            ))}
          </div>
        </section>

        {/* ═════════ CRÉATEUR DE CONTENU ═════════ */}
        <section className="zcn zdark" id="contenu">
          <div data-reveal>
            <header className="zh">
              <small className="kicker">Créateur de contenu</small>
              <h2>
                Aussi derrière <i>le micro.</i>
              </h2>
              <p>
                Sur Facebook et TikTok, je parle du digital, de l'intelligence artificielle et de leurs usages concrets pour
                les entrepreneurs et les professionnels. Je démystifie l'IA, je partage mon expérience et je montre les
                résultats obtenus avec mes clients et mes apprenants.
              </p>
            </header>
            <p className="zcn-count">
              <b>5,1 K</b> abonnés sur Facebook
            </p>
            <div className="zcn-links">
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer">
                Facebook <Icon n="arrow" />
              </a>
              <a href={TIKTOK} target="_blank" rel="noopener noreferrer">
                TikTok <Icon n="arrow" />
              </a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                LinkedIn <Icon n="arrow" />
              </a>
            </div>
          </div>
          <div className="phones" data-reveal>
            {phones.map((p, k) => (
              <div key={p.src} className={`phone p${k + 1}`}>
                <img src={p.src} alt="Habib en studio, face au micro" loading="lazy" />
                <span className="phone-rec">
                  <i /> REC
                </span>
                <span className="phone-cap">@habib.gnimin.coul</span>
              </div>
            ))}
          </div>
        </section>

        {/* ═════════ PARCOURS & COMPÉTENCES ═════════ */}
        <section className="zpc light" id="parcours">
          <header className="zh" data-reveal>
            <small className="kicker">Parcours &amp; compétences</small>
            <h2>
              Du réseau informatique <i>à la salle de formation.</i>
            </h2>
          </header>
          <div className="zpc-grid">
            <ol className="zpc-time">
              {parcours.map((p) => (
                <li key={p.role} data-reveal>
                  <span>{p.when}</span>
                  <div>
                    <h3>{p.role}</h3>
                    <small>{p.where}</small>
                    <p>{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <aside data-reveal>
              <h3>Certifications</h3>
              <ul className="zplus">
                {certifs.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <h3>Compétences</h3>
              <ul className="zpc-tags">
                {skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <h3>Outils</h3>
              <ul className="zpc-tags inv">
                {tools.map((t) => (
                  <li key={t.n}>{t.n}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* ═════════ FAQ ═════════ */}
        <section className="zfq light" id="faq">
          <header className="zh" data-reveal>
            <small className="kicker">Questions fréquentes</small>
            <h2>
              On me demande <i>souvent…</i>
            </h2>
            <p>Votre question n'est pas dans la liste ? Posez-la moi directement.</p>
            <a className="zpb dark" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              Poser ma question
              <span>
                <Icon n="arrow" />
              </span>
            </a>
          </header>
          <div className="zfq-list" data-reveal>
            {faq.map((f, k) => (
              <details key={f.q} open={k === 0}>
                <summary>
                  {f.q}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ═════════ CONTACT ═════════ */}
        <section className="zct zdark" id="contact">
          <span className="zct-word" aria-hidden="true">
            Parlons-en
          </span>
          <div className="zct-in" data-reveal>
            <small className="kicker">Disponible · présentiel &amp; en ligne</small>
            <h2>
              Une formation, un site, une stratégie ?
              <br />
              <i>Parlons-en.</i>
            </h2>
            <div className="h5-cta">
              <i aria-hidden="true" />
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                Écrire sur WhatsApp
                <span>
                  <Icon n="arrow" />
                </span>
              </a>
              <i aria-hidden="true" />
            </div>
            <ul className="zct-ways">
              <li>
                <small>Appel &amp; WhatsApp</small>
                <a href="tel:+2250506685198">+225 05 06 68 51 98</a>
              </li>
              <li>
                <small>E-mail</small>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>
                <small>Réseaux</small>
                <span>
                  <a href={FACEBOOK} target="_blank" rel="noopener noreferrer">Facebook</a>
                  <a href={TIKTOK} target="_blank" rel="noopener noreferrer">TikTok</a>
                  <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="foot zft">
        <div className="zft-top">
          <div className="zft-brand">
            <a className="nav3-brand" href="#top" aria-label="Haut de page">
              <svg className="nav3-mark" viewBox="0 0 66 48" fill="none" strokeWidth="4.600" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path className="mk-c" d="M40.050 6.800A21 21 0 1 0 40.050 41.200" />
                <path className="mk-gh" d="M35.400 15.200A11.500 11.500 0 1 0 39.500 24H29M29 24H60M46 8V40M60 8V40" />
              </svg>
              <b>
                <small>Coulibaly</small>
                <span className="serif">Gnimin Habib</span>
              </b>
            </a>
            <p>Consultant &amp; formateur en intelligence artificielle appliquée, marketing digital et WordPress. Fondateur de Digital-Tech.</p>
            <p className="zft-mission">Rendre l'IA accessible et utile aux entrepreneurs africains.</p>
          </div>
          <nav aria-label="Plan du site">
            <h3>Le site</h3>
            <a href="#a-propos">À propos</a>
            <a href="#services">Services</a>
            <a href="#digital-tech">Digital-Tech</a>
            <a href="#conferences">Conférences</a>
            <a href="#distinctions">Distinctions</a>
            <a href="#parcours">Parcours</a>
          </nav>
          <nav aria-label="Services">
            <h3>Services</h3>
            <a href="#services">Formations &amp; ateliers</a>
            <a href="#conferences">Conférences</a>
            <a href="#services">Sites WordPress</a>
            <a href="#services">Marketing digital</a>
            <a href="#services">Community management</a>
          </nav>
          <div className="zft-contact">
            <h3>Contact</h3>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">+225 05 06 68 51 98</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <span>Bouaké, Côte d'Ivoire</span>
            <span>Présentiel &amp; en ligne</span>
          </div>
        </div>
        <div className="zft-bottom">
          <span>© 2026 Coulibaly Gnimin Habib. Tous droits réservés.</span>
          <a href="#top">Haut de page ↑</a>
        </div>
      </footer>
    </>
  );
}
