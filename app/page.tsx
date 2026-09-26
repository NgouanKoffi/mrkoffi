"use client";

import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Faq from "./components/Faq";
import { ChartCard } from "./components/Mockups";
import { WebScene, MobileScene } from "./components/Illustrations";
import Island3D from "./components/Island3D";
import Lottie from "./components/Lottie";
import CodeTrail from "./components/CodeTrail";
import BackToTop from "./components/BackToTop";
import { useScrollFx } from "./components/useScrollFx";
import { WHATSAPP, EMAIL, PHONE, PHONE_DISPLAY, DELIVERED } from "./data/projects";

const STACK = [
  ["react", "React"],
  ["nextdotjs", "Next.js"],
  ["typescript", "TypeScript"],
  ["nodedotjs", "Node.js"],
  ["flutter", "Flutter"],
  ["laravel", "Laravel"],
  ["php", "PHP"],
  ["mongodb", "MongoDB"],
  ["python", "Python"],
  ["unity", "Unity"],
  ["blender", "Blender"],
];

const WaIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.9 11.9 0 0 0 4.6 4.1c1.7.7 2.1.6 2.8.6a2.5 2.5 0 0 0 1.7-1.2 2 2 0 0 0 .1-1.2c0-.1-.2-.2-.4-.3z" />
  </svg>
);

/* Gribouillis orange qui se dessinent au scroll */
const Squiggle = ({ className = "" }: { className?: string }) => (
  <svg className={`doodle draw ${className}`} viewBox="0 0 140 70" fill="none" aria-hidden="true">
    <path d="M6 58 C 30 10, 62 12, 84 36 S 118 40, 132 12" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M118 10 L133 10 L133 25" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Wave = ({ className = "" }: { className?: string }) => (
  <svg className={`doodle draw ${className}`} viewBox="0 0 220 60" fill="none" aria-hidden="true">
    <path
      d="M2 40 C 30 8, 50 8, 70 34 S 110 60, 130 30 S 170 2, 218 26"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

export default function Home() {
  useScrollFx();

  return (
    <>
      <CodeTrail />
      <BackToTop />
      <Nav />
      <main>
        {/* ================= HERO (split orange / blanc, photo au centre) ================= */}
        <section className="hero" id="accueil">
          <div className="hero-left">
            <div className="hero-halo" aria-hidden="true" />
            <div className="hero-left-in">
              <div className="hero-title-wrap">
                <h1 className="hero-title split">
                  <span className="line">Créer</span>
                  <span className="line outline">Livrer.</span>
                </h1>
              </div>
              <div className="hero-mid">
                <p className="hero-tag up" data-delay="0.15">
                  Sites, applis et logiciels
                  <br />
                  qui marchent, même en 3G.
                </p>
                <div className="up" data-delay="0.25">
                  <a href="#projets" className="btn white lg hero-btn">
                    Voir mes projets <i>↗</i>
                  </a>
                </div>
                {/* gribouillis « Danger horr » : en bas, à droite du bouton, hors flux */}
                <p className="doodle d1 up" data-delay="0.5" aria-hidden="true">
                  Danger horr, forcer
                  <br />
                  ils sont en danger.
                  <br />
                  <span className="stra">stra stra stra…</span>
                </p>
              </div>
              <div className="hero-trust up" data-delay="0.35">
                <div className="avatars" aria-hidden="true">
                  <span>FM</span>
                  <span>MA</span>
                  <span>MK</span>
                  <span className="more">+24</span>
                </div>
                <p>
                  <b>
                    <span data-count={DELIVERED}>0</span>+ projets livrés
                  </b>
                  pour des clients de Bouaké au Canada.
                </p>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-right-in">
              <h2 className="hero-title hero-name split">
                <span className="line">Penser</span>
                <span className="line outline">Coder.</span>
              </h2>
              <p className="hero-tag dark up" data-delay="0.15">
                Je suis <strong>Koffi N&apos;gouan Emmanuel</strong>, développeur web &amp; mobile à Bouaké depuis{" "}
                <strong>4 ans</strong>. Vous parlez directement avec moi, pas avec un commercial, et vous voyez votre
                projet avancer sur un lien de test dès la première semaine.
              </p>
              <div className="hero-nudge up" data-delay="0.28" aria-hidden="true">
                <span>Viens, on en parle</span>
                <svg viewBox="0 0 120 80" fill="none">
                  <path d="M6 10 C 34 6, 74 4, 92 26 S 104 62, 100 70" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M88 60 L100 72 L110 58" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="hero-cta-bottom up" data-delay="0.3">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn wa lg hero-btn">
                  <WaIcon /> Démarrer un projet
                </a>
              </div>
            </div>
          </div>

          <div className="hero-lines" aria-hidden="true" />
          <div className="hero-spiral" aria-hidden="true">
            <i />
          </div>

          {/* gribouillis au bic, façon marge de cahier */}
          <div className="doodles" aria-hidden="true">
            <p className="doodle d2 up" data-delay="0.65">
              Que des sites,
              <br />
              que des{" "}
              <span className="ul">
                bangerrrrrrrrrs
                <svg className="scribble" viewBox="0 0 200 18" fill="none" preserveAspectRatio="none">
                  <path d="M3 10 C 30 4, 55 14, 80 8 S 130 4, 160 10 S 190 14, 197 8" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M8 15 C 40 10, 70 17, 100 12 S 150 9, 192 14" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
                </svg>
              </span>
            </p>
            {/* miroir de d3 : coin haut gauche, à gauche de CRÉER */}
            <p className="doodle d4 up" data-delay="0.95">
              Même si tu habites
              <br />
              sur la planète Mars,
              <br />
              je peux faire ton travail
            </p>
            <p className="doodle d3 up" data-delay="0.8">
              Si y a pas place pour
              <br />
              mon équipe, personne
              <br />
              va djo <span className="star">✱</span>
            </p>
          </div>

          <picture className="hero-photo-wrap">
            <source media="(max-width: 999px)" srcSet="/koffi-mobile.webp" width={806} height={1100} />
            <img
              src="/koffi-portrait.webp"
              alt="Koffi N'gouan Emmanuel, développeur web et mobile"
              className="hero-photo"
              width={1000}
              height={836}
              fetchPriority="high"
            />
          </picture>
        </section>

        {/* ================= MARQUEE TECH ================= */}
        <div className="marquee" aria-label="Technologies">
          <div className="mq-track">
            {[...STACK, ...STACK].map(([slug, name], i) => (
              <span key={slug + i}>
                <img src={`https://cdn.simpleicons.org/${slug}/6B6B70`} alt="" loading="lazy" />
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* ================= CONTRÔLE (mockups flottants) ================= */}
        <section className="section" id="pourquoi">
          <div className="wrap ctrl" data-py-root>
            <div className="ctrl-visual">
              <div className="blob" aria-hidden="true" />
              <div className="ctrl-lottie" data-py="20">
                <Lottie name="appt" />
              </div>
              <div className="fcard fc-rev" data-py="80">
                <small>Ventes du mois</small>
                <b>184 500 F</b>
                <span className="grow">↗ +38 %</span>
              </div>
              <div className="fcard fc-person" data-py="-70">
                <span className="avatar">KA</span>
                <div>
                  <b>Kouassi A.</b>
                  <small>Commande #2841</small>
                </div>
                <span className="paid">Payé</span>
              </div>
              <Wave className="wv1" />
            </div>

            <div className="ctrl-copy">
              <span className="eyebrow">
                <i /> Pourquoi moi
              </span>
              <h2 className="split">
                Pas juste un joli site&nbsp;: <span className="o">un outil qui encaisse</span>.
              </h2>
              <p className="up">
                Vos clients paient en Orange Money ou Wave, reçoivent leur confirmation, et vous suivez tout depuis
                votre téléphone. C&apos;est ce que je construis pour des boutiques, une université et un centre culturel.
              </p>
              <ul className="bars">
                {[
                  ["Pensé pour le téléphone", "Vos clients sont sur mobile, souvent en 3G : pages légères, boutons faciles à toucher.", "M4 12h16M12 4v16"],
                  ["Mobile Money intégré", "Orange Money, MTN MoMo, Wave ou carte : le client paie sans quitter votre site.", "M3 7h18v10H3zM3 11h18"],
                  ["Vos données à l'abri", "Sauvegardes automatiques et accès par mot de passe : un téléphone perdu ne vous fait rien perdre.", "M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z"],
                ].map(([t, d, ico], i) => (
                  <li className="up" data-delay={i * 0.1} key={t}>
                    <span className="ico">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d={ico} />
                      </svg>
                    </span>
                    <div>
                      <b>{t}</b>
                      <p>{d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ================= MON PARCOURS (timeline) ================= */}
        <section className="section dark-sec" id="parcours">
          <div className="wrap parcours">
            <div className="sec-head parcours-head">
              <span className="eyebrow">
                <i /> Mon parcours
              </span>
              <h2 className="split">
                Ma formation, <span className="o">en quelques dates</span>.
              </h2>
              <p className="up">Parcours scolaire et universitaire suivi en Côte d&apos;Ivoire.</p>
              <p className="doodle parcours-note up" data-delay="0.2" aria-hidden="true">
                L&apos;homme réfléchi
                <br />
                depuis ça finit pas 😂
                <svg className="scribble" viewBox="0 0 200 18" fill="none" preserveAspectRatio="none">
                  <path d="M3 10 C 30 4, 55 14, 80 8 S 130 4, 160 10 S 190 14, 197 8" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </p>
            </div>

            <ol className="timeline">
              {[
                ["2019", "Bac D", "Baccalauréat série D (mathématiques et sciences)"],
                ["2023", "Licence", "Licence en Bases de données"],
                ["2025", "Master 2", "Master 2 Big Data Analytics"],
              ].map(([year, short, title], i) => (
                <li className="tl-item up" data-delay={i * 0.07} key={year}>
                  <span className="tl-year">{year}</span>
                  <span className="tl-dot" aria-hidden="true" />
                  <div className="tl-body">
                    <h3>{short}</h3>
                    <p>{title}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ================= PROBLÈME → RÉPONSE (cartes empilées) ================= */}
        <section className="section soft" id="reponse">
          <div className="wrap">
            <div className="pain" data-py-root>
              <div className="pain-copy">
                <span className="tag dark up">Le problème</span>
                <h2 className="split">
                  Faire développer son site ou son appli, <span className="o">c&apos;est souvent un cauchemar.</span>
                </h2>
                <ul className="pain-list">
                  {[
                    ["Aucune visibilité", "Vous confiez votre projet… et plus aucune nouvelle pendant des semaines.", "M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.9 5.1A10.9 10.9 0 0 1 12 5c5 0 9 4 10 7a11.6 11.6 0 0 1-3.2 4.3M6.6 6.6A11.7 11.7 0 0 0 2 12c1 3 5 7 10 7a9.9 9.9 0 0 0 4.4-1"],
                    ["Échanges chaotiques", "Les demandes se perdent entre WhatsApp, e-mails et appels manqués.", "M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12zM9 10l6 4M15 10l-6 4"],
                    ["Aucun cadre", "Pas de devis clair, pas de délai. Et quand il y a un problème, plus personne.", "M6 3h9l5 5v13H6zM14 3v6h6M9 14h6M9 18h4"],
                  ].map(([t, d, ico], i) => (
                    <li className="up" data-delay={i * 0.1} key={t}>
                      <span className="ico">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d={ico} />
                        </svg>
                      </span>
                      <div>
                        <b>{t}</b>
                        <p>{d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pain-chart up">
                <div className="blob" aria-hidden="true" />
                <div data-py="30">
                  <ChartCard />
                </div>
                <Squiggle className="sq1" />
              </div>
            </div>

            <div className="sec-head mt">
              <span className="tag orange up">Ma réponse</span>
              <h2 className="split">
                Un suivi clair, <span className="o">du brief à la mise en ligne</span>.
              </h2>
            </div>

            <div className="stack">
              {[
                ["01", "Transparence totale", "Une URL de preview dès la première semaine. Vous suivez l'avancement en temps réel, sans avoir à demander.", "peach"],
                ["02", "Délais tenus", "Un planning fixé au brief, découpé en étapes. Chaque livraison a une date, et elle est respectée.", "sand"],
                ["03", "Code propre & sur mesure", "Pas de template bricolé. Un code maintenable, que n'importe quel développeur peut reprendre après moi.", "mist"],
                ["04", "Support après livraison", "Formation à votre espace admin, sauvegardes automatiques, maintenance et évolutions.", "ink"],
              ].map(([n, t, d, c]) => (
                <article className={`stack-card ${c}`} data-num={n} key={n}>
                  <span className="num">{n}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                  <span className="arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SERVICES (panneaux plein écran) ================= */}
        <section id="services">
          <div className="panels">
            <div className="panel p-web">
              <div className="panel-in wrap" data-py-root>
                <div className="panel-copy">
                  <span className="eyebrow">
                    <i /> Services · 1/3
                  </span>
                  <span className="tag orange">Web</span>
                  <h3>Sites web &amp; systèmes de gestion</h3>
                  <p>
                    Site vitrine, boutique en ligne, plateforme SaaS, gestion d&apos;école, de stock, de clients ou de
                    rendez-vous. Tout ce qui tourne dans un navigateur.
                  </p>
                  <ul>
                    <li>Vitrine · blog · e-commerce</li>
                    <li>Espace admin sur mesure</li>
                    <li>Nom de domaine + hébergement inclus</li>
                  </ul>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn dark">
                    Demander un devis
                  </a>
                </div>
                <div className="panel-visual">
                  <WebScene />
                </div>
              </div>
            </div>

            <div className="panel p-mobile">
              <div className="panel-in wrap" data-py-root>
                <div className="panel-copy">
                  <span className="eyebrow">
                    <i /> Services · 2/3
                  </span>
                  <span className="tag orange">Mobile</span>
                  <h3>Applications mobiles</h3>
                  <p>
                    Une application publiée sur Play Store et App Store. Vos clients la téléchargent, l&apos;utilisent et
                    vous paient en Mobile Money.
                  </p>
                  <ul>
                    <li>Android + iPhone (Flutter)</li>
                    <li>Paiement Orange Money · MTN · Wave</li>
                    <li>Notifications + suivi en temps réel</li>
                  </ul>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn dark">
                    Demander un devis
                  </a>
                </div>
                <div className="panel-visual">
                  <MobileScene />
                </div>
              </div>
            </div>

            <div className="panel p-data p-game">
              <div className="panel-in wrap" data-py-root>
                <div className="panel-copy">
                  <span className="eyebrow">
                    <i /> Services · 3/3
                  </span>
                  <span className="tag orange">Jeux &amp; 3D</span>
                  <h3>Jeux vidéo &amp; environnements 3D</h3>
                  <p>
                    Jeux ludiques, mondes 3D à explorer : je participe à la conception et au développement, de la
                    modélisation des décors jusqu&apos;au gameplay.
                  </p>
                  <ul>
                    <li>Environnements &amp; décors 3D</li>
                    <li>Jeux ludiques et éducatifs (mobile &amp; PC)</li>
                    <li>Unity · Blender · C#</li>
                  </ul>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn dark">
                    Demander un devis
                  </a>
                </div>
                <div className="panel-visual">
                  <Island3D />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CHIFFRES + ROADMAP ================= */}
        <section className="section" id="chiffres">
          <div className="wrap road" data-py-root>
            <div className="road-copy">
              <h2 className="split">
                <span className="o">Une feuille de route</span> claire, pour livrer votre projet sans stress.
              </h2>
              <p className="up">
                Chaque projet suit les mêmes étapes, sur un canal unique. Vous savez toujours où on en est et ce qui vient
                ensuite.
              </p>
              <div className="stats">
                {[
                  [String(DELIVERED), "+", "projets livrés, de Bouaké au Canada"],
                  ["98", "%", "de clients satisfaits"],
                  ["5", "", "projets en cours"],
                  ["1500", "+", "utilisateurs sur mes systèmes"],
                ].map(([v, s, l], i) => (
                  <div className="up" data-delay={i * 0.08} key={l}>
                    <b>
                      <span data-count={v}>0</span>
                      {s}
                    </b>
                    <small>{l}</small>
                  </div>
                ))}
              </div>
            </div>
            <div className="road-visual">
              <div className="ring" aria-hidden="true" />
              <div className="road-lottie" data-py="30">
                <Lottie name="finance" />
              </div>
              <div className="fcard fc-rev r1" data-py="-60">
                <small>Revenus</small>
                <b>+38 %</b>
                <span className="grow">6 mois</span>
              </div>
              <div className="fcard fc-step" data-py="70">
                <small>Étape 3 / 4</small>
                <b>Développement</b>
                <i style={{ width: "72%" }} />
              </div>
              <Squiggle className="sq2" />
            </div>
          </div>
        </section>

        {/* ================= PROJETS ================= */}
        <Projects />

        {/* ================= PROCESS ================= */}
        <section className="section soft" id="process">
          <div className="wrap">
            <div className="sec-head center">
              <span className="eyebrow">
                <i /> Process
              </span>
              <h2 className="split">
                Comment on travaille <span className="o">ensemble</span>.
              </h2>
              <p className="up">Quatre étapes, un canal unique, aucune zone d&apos;ombre.</p>
            </div>

            <ol className="steps">
              {[
                ["01", "Brief", "On échange sur WhatsApp ou en appel : objectifs, délais, budget. Vous repartez avec un devis clair sous 48 h.", "Devis + planning", "M4 6h16M4 12h10M4 18h7"],
                ["02", "Maquette", "Vous voyez le design avant la première ligne de code. On ajuste jusqu'à validation.", "Maquette validée", "M4 5h16v14H4zM4 10h16M9 10v9"],
                ["03", "Développement", "Avancement visible en continu sur une URL de preview. Chaque étape a une date, et elle est tenue.", "URL de preview", "M8 9l-4 3 4 3M16 9l4 3-4 3M13 5l-2 14"],
                ["04", "Mise en ligne", "Domaine, hébergement, SSL, formation à votre espace admin. Vous êtes autonome, je reste disponible.", "Site en ligne + formation", "M5 12l4 4L19 6"],
              ].map(([n, title, desc, out, ico], i) => (
                <li className="step up" data-delay={i * 0.1} key={n}>
                  <span className="step-n">{n}</span>
                  <span className="step-ico">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={ico} />
                    </svg>
                  </span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <span className="step-out">
                    <i /> {out}
                  </span>
                </li>
              ))}
            </ol>

            <div className="channel up">
              <div className="ch-copy">
                <span className="tag orange">Canal unique</span>
                <h3>Tout passe par WhatsApp. Vous voyez, vous commentez, je corrige.</h3>
                <ul>
                  <li>Réponse en 10 minutes en moyenne, 7 j / 7</li>
                  <li>Historique conservé, rien ne se perd</li>
                  <li>Une preview à commenter à chaque étape</li>
                </ul>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn dark">
                  <WaIcon /> Écrire sur WhatsApp
                </a>
              </div>
              <div className="ch-visual">
                <Lottie name="chat-mahendra" />
                <div className="fcard fc-reply">
                  <span className="avatar">MK</span>
                  <div>
                    <b>Mr Koffi</b>
                    <small>en ligne · répond vite</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <Faq />

        {/* ================= GRANDE CARTE PÊCHE + CTA SOMBRE ================= */}
        <section className="section" id="contact">
          <div className="wrap">
            <div className="peach-card up" data-py-root>
              <div className="pc-copy">
                <h2>Un projet en tête ? Décrivez-le en quelques lignes, je reviens vers vous sous 48 h avec un devis clair.</h2>
                <p>Sans engagement. Réponse rapide sur WhatsApp, planning et prix détaillés avant tout démarrage.</p>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="link">
                  Écrire sur WhatsApp →
                </a>
              </div>
              <div className="pc-visual">
                <div className="pc-blob" aria-hidden="true" />
                <div className="pc-rocket" data-py="-30">
                  <Lottie name="rocket-laptop" />
                </div>
              </div>
            </div>

            <div className="cta up">
              <span className="cta-corner tl" />
              <span className="cta-corner br" />
              <svg className="cta-flower" viewBox="0 0 100 100" aria-hidden="true">
                <path
                  d="M50 0c6 14 14 14 20 4-2 12 4 18 16 16-10 6-10 14 4 20-14 6-14 14-4 20-12-2-18 4-16 16-6-10-14-10-20 4-6-14-14-14-20-4 2-12-4-18-16-16 10-6 10-14-4-20 14-6 14-14 4-20 12 2 18-4 16-16 6 10 14 10 20-4z"
                  fill="#FF7A52"
                />
              </svg>
              <h2>
                Un avenir digital plus brillant pour votre activité, <span className="o">dès aujourd&apos;hui.</span>
              </h2>
              <p>Site, application ou système de gestion. On en parle, je chiffre, on lance.</p>
              <div className="cta-btns">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn white">
                  <WaIcon /> Écrire sur WhatsApp
                </a>
                <a href={`mailto:${EMAIL}`} className="btn ghost-light">
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="wrap">
          <div className="foot-row">
            <div className="foot-brand">
              <a href="#accueil" className="brand">
                Mr<span>Koffi</span>
                <i>.</i>
              </a>
              <p>Développeur web &amp; mobile · Bouaké, Côte d&apos;Ivoire</p>
            </div>
            <nav className="foot-nav" aria-label="Pied de page">
              <a href="#accueil">Accueil</a>
              <a href="#services">Services</a>
              <a href="#parcours">Mon parcours</a>
              <a href="#process">Process</a>
              <a href="#projets">Projets</a>
              <a href="#faq">FAQ</a>
            </nav>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn dark sm">
              <WaIcon /> Me contacter
            </a>
          </div>

          <div className="foot-contacts">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="fc">
              <span className="fc-ico">
                <WaIcon />
              </span>
              <span>
                <small>WhatsApp</small>
                <b>{PHONE_DISPLAY}</b>
              </span>
            </a>
            <a href={`mailto:${EMAIL}`} className="fc">
              <span className="fc-ico">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="3" />
                  <path d="M3 8l9 6 9-6" />
                </svg>
              </span>
              <span>
                <small>E-mail</small>
                <b>{EMAIL}</b>
              </span>
            </a>
            <div className="fc">
              <span className="fc-ico">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s7-6.5 7-11a7 7 0 0 0-14 0c0 4.5 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <span>
                <small>Basé à</small>
                <b>Bouaké · clients partout</b>
              </span>
            </div>
          </div>

          <div className="foot-bottom">
            <span>© 2026 Koffi N&apos;gouan Emmanuel. Tous droits réservés.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
