# Récap des modifications — Portfolio Mr Koffi

Session du 2026-06-19. Toutes les modifs portent sur `app/globals.css` et `app/page.tsx`.

## 1. Palette
- **Avant :** crème + corail/orange (jugé « trop Claude »), puis essai bleu nuit (refusé).
- **Maintenant :** style SKILLFIRE — **blanc + noir neutre + orange vif**.
  - Fond : `#FFFFFF` / `#F4F4F5`
  - Texte / sections sombres : `#121212` / `#0E0E10` / `#141414`
  - Accent orange : `#F26513` (foncé `#D9540E`, clair `#FF8A3D`)
  - Gris neutres (zinc) pour le secondaire
- Remap global sur tout le CSS + les SVG inline.

## 2. Hero (accueil)
- **Mobile :** texte affiché **avant** la photo, puis les boutons.
- **Mobile :** masqué le bloc intro gauche (« Bonjour… Je suis Koffi N'gouan Emmanuel, développeur web & mobile ») + l'eyebrow « Ce que je fais au quotidien ». (Desktop : conservés.)
- Textes qui coulent proprement, centrés.

## 3. Banderoles techno
- Ne chevauchent plus le hero sur mobile (suppression de la remontée négative).

## 4. Header / nav
- Réparé le sticky cassé par `overflow-x:hidden` → remplacé par `overflow-x:clip`.
- Header **transparent en permanence** (pas de bandeau blanc) — le pill flotte.

## 5. Section « À propos »
- Supprimé les **surlignages orange** sur les mots gras (effet marqueur) → orange propre.
- Corrigé le **fond qui s'affichait clair** (bug `background-blend-mode:overlay`) → fond noir net.
- **Photo passée à gauche**, texte à droite (desktop). Mobile : ordre inchangé.

## 6. Contact
- **Section formulaire « Démarrons votre projet » supprimée.**
- **Tous les boutons « Me contacter » → WhatsApp direct** : `https://wa.me/2250556598199` (PC + mobile).

## 7. Footer
- **Refait** : grand CTA « Un projet en tête ? Parlons-en. » + bouton WhatsApp + colonnes (brand, Navigation, Me joindre).

## 8. Contenu
- Lien projet **Model Agenci** : `vercel.app` → `https://www.modelagenci.com/`.
- **Proverbe retiré** (citation + signature) sous la galerie chiffres.

## 9. Coordonnées branchées
- WhatsApp / tél : **+225 05 56 59 81 99** (`+2250556598199`)
- E-mail : **koffingouanemmanuel0@gmail.com**

## 10. Git / GitHub
- Repo initialisé, `.gitignore` étendu (node_modules, .next, backups locaux exclus).
- Poussé sur **https://github.com/NgouanKoffi/mrkoffi** (branche `main`).
- Auteur commit en email noreply GitHub (contournement protection GH007).

---

## Session du 2026-06-20

### 11. Scroll horizontal des banderoles
- **Bug :** banderoles techno inclinées (`rotate`) débordaient → scroll horizontal sur la page.
- **Cause :** `overflow-x:clip` était posé sur `body` seul ; ne se propage pas toujours au viewport.
- **Fix :** ajout de `overflow-x:clip` sur `html` → le clipping s'applique au viewport, plus de débordement.
- Commit `0fbbfab`, poussé sur `main`.

---

## Sauvegardes locales (non commitées)
- `app/globals.claudebak.css`, `app/globals.bluebak.css`, `app/globals.original.css`, `app/globals.prepalette.css`
- `app/page.bluebak.tsx`, `app/page.claudebak.tsx`, `app/page.prepalette.tsx`

## Restes / optionnel
- Code mort : fonction `envoyer()` + états du formulaire supprimé (compile OK, à nettoyer si voulu).
- CSS inutilisé : `.contact-grid`, `.form`, `.field`, `.ci-line` (le formulaire n'existe plus).
- Hero « SKILLFIRE » (mur de cartes projets en éventail) : pas encore fait — en attente du choix centre (photo/téléphone) + texte du titre géant.

---

## Session du 2026-09-24 — Refonte « produit » (style CarlDev / landing fintech)

Deux essais : une V1 sombre/immersive (WebGL, GSAP) rejetée (« trop laid »), puis pivot vers le style demandé :
**fond blanc, orange, cartes arrondies, mockups d'interface** — références djanatocarlos.com + landing fintech.

### Stack
- Next 16 + React 19, zéro lib d'animation (reveal via IntersectionObserver). Dépendances 3D/GSAP/Lenis retirées.
- Police `next/font` : **Plus Jakarta Sans**.

### Structure (`app/`)
- `page.tsx` — hero (carte dégradé orange + photo veste + cartes flottantes), mission, problème/solution (liste + graphique SVG),
  4 features pastel, services (3 cartes avec mockups navigateur / 2 téléphones / dashboard), process (timeline + chat WhatsApp),
  chiffres, stack, CTA sombre, footer pêche.
- `components/Nav.tsx` (pill sticky + menu mobile), `Projects.tsx` (filtres + 9 cartes puis « Voir tous »), `Faq.tsx` (accordéon),
  `Mockups.tsx` (BrowserMock, PhoneMock, ChartCard, ChatMock, DataMock, Timeline — CSS/SVG, réutilisent les captures `/projects`).
- `data/projects.ts` — 27 projets + coordonnées.
- `globals.css` — tokens : orange `#F26513`, encre `#0F1115`, pêche `#FFF3EC`, radius 28px, ombres douces.

### Notes
- Pas de témoignages inventés : la carte « FullMargin » du hero décrit le projet, pas un avis client.
- Serveur dev de l'utilisateur sur :3000 (accessible aussi via IP LAN).

---

## Session du 2026-09-24 (suite) — V3 « immersive »

Reproche : mobile = desktop empilé, orange saturé en aplat, zéro effet au scroll. Références fournies : hero « coach »
(photo grande + halo chaud) et landing fintech (blanc, corail doux, mockups flottants, cartes pêche).

### Stack
- `gsap` + `ScrollTrigger` ajoutés (`app/components/useScrollFx.ts`) : titres mot par mot (`.split`), fade-up (`.up`),
  parallaxe (`data-py` dans un `data-py-root`), lignes SVG dessinées (`.draw`), cartes empilées (`.stack`), panneaux
  plein écran (`.panels`), badge rotatif (`.spin`), compteurs (`data-count`). Désactivé si `prefers-reduced-motion`.
- CSS réécrit **mobile-first** (`globals.css`), breakpoints 720 / 1000. Ancienne V2 sauvée dans `globals.v2bak.css` (ignoré git).

### Palette
- Corail doux `#F0663F`, dégradés `#FF8C63 → #FFB899`, pêche `#FFF1EA`, sable, brume, encre `#131316`.
- Plus aucun aplat orange plein écran : l'orange vit dans les halos radiaux et les touches.

### Structure page
1. Hero : halo, photo `moiveste.png` détourée, titre « Développeur Web & Mobile qui livre. », stats flottantes, panneau
   « Message » à droite (desktop) / dessous (mobile).
2. Marquee technos. 3. « Prenez le contrôle » (2 téléphones + cartes flottantes en parallaxe).
4. Problème (chart) → Réponse : 4 cartes empilées sticky (pêche, sable, brume, encre) avec numéro en filigrane.
5. Services : 3 panneaux 100svh sticky (blanc / pêche / encre) avec mockups.
6. Feuille de route + chiffres. 7. Projets : carrousel horizontal snap (6 cartes) → grille « Voir tous ».
8. Process (timeline + chat). 9. FAQ. 10. Carte pêche (badge rotatif + 2 navigateurs) + CTA sombre. 11. Footer pêche.

### Notes
- Le contrôle visuel via iframes 390px est lent en dev (animations GSAP ralenties), mais tout s'affiche bien en réel.
- Non commité pour l'instant.

### Lottie (2026-09-24, suite)
- Animations LottieFiles gratuites (licence Lottie Simple : usage commercial libre, sans attribution) récupérées via
  la session du user, extraites du .lottie en JSON dans `public/lottie/` : `web-anim`, `mpay`, `data-smashing`,
  `appt`, `finance`, `chat-mahendra`, `rocket-laptop`.
- Composant `app/components/Lottie.tsx` (lottie-web, rendu SVG, fetch à la demande, play seulement si visible,
  respecte prefers-reduced-motion). Dépendance `lottie-web` ajoutée.
- Placements : panneaux Services (web / mobile / data), « Prenez le contrôle » (appt), feuille de route (finance),
  carte Feedback WhatsApp (chat), carte pêche CTA (fusée). Header refait : pleine largeur transparent → blanc au scroll,
  menu mobile plein écran.

### Session 2026-09-24 (soir) — retouches section par section
- **Header** : pleine largeur, transparent sur le hero → blanc quasi opaque + ombre au scroll ; menu mobile plein écran (ouverture en cercle).
- **Hero v2** : photo `moiveste.png` dans une **arche dégradée corail** (`.arch`, `clip-path` pour laisser dépasser la tête), cartes flottantes « Projet livré », « Réponse en ~10 min », « Satisfaction 98 % », bloc confiance (avatars + « 27+ projets livrés »). Plus de panneau « Message ».
- **Problème** : 2 colonnes (3 douleurs + graphique **incrusté** sans carte ni ombre).
- **Cartes empilées** : texte centré verticalement, gros numéro en filigrane.
- **Services** : titre isolé supprimé, eyebrow « Services · 1/3 » dans chaque panneau ; illustrations **Lottie** (web-anim, mpay, data-smashing) ; bloc « admin » retiré.
- **Contrôle / feuille de route** : Lottie `appt` et `finance` à la place des faux téléphones.
- **Projets** : plus de carrousel ni « Voir tous » → grille complète (3 / 2 / 1 col.), cartes avec capture dans un cadre dégradé, icônes **SVG** (plus d'emoji), bouton rond ↗.
- **Process v2** : 4 cartes étapes (icône, numéro, livrable) reliées par une ligne pointillée + bandeau sombre « Canal unique WhatsApp » avec Lottie chat. Faux chat et timeline supprimés.
- **FAQ v2** : colonne gauche sticky avec carte pêche « Une autre question ? », questions en cartes numérotées, ouverte = fond pêche.
- **Footer v3** : clair et compact (marque + nav inline + bouton, 3 cartes contact, copyright + badge « Disponible »). Versions sombre/filigrane rejetées.
- **Espacements** : padding sections 130 → 96 px max ; hauteurs fixes des visuels → auto.
- **Animations** : titres, fondus et compteurs rejouent dans les **deux sens** (`toggleActions: play reset restart reverse`).
- Note : les animations GSAP se figent si l'onglet est en arrière-plan (`document.hidden`), pas un bug.

### En attente
- **Nouvelle photo hero** : le user génère un portrait studio (fond terracotta #B8623A, t-shirt gris, lunettes) avec Gemini à partir d'un prompt descriptif (tête allongée, front haut, menton étroit, peau brun foncé, lunettes rectangulaires métal). À intégrer dans `.arch` à réception (remplacer `/moiveste.png`).
- Carte « FullMargin » du hero supprimée avec le hero v2 ; plus aucune mention de projet réel hors grille Projets.
- Toujours **rien commité**. Fichiers : `app/page.tsx`, `app/globals.css`, `app/components/{Nav,Projects,Faq,Illustrations,Lottie,useScrollFx,Mockups}.tsx`, `app/data/projects.ts`, `public/lottie/*.json`, deps `gsap`, `lottie-web`.

---

## Session du 2026-09-24 (nuit) → 2026-09-25 — Hero v4 « cahier à spirale »

Référence de départ : hero « Semaan » (panneau orange | photo au centre | panneau blanc). ~60 itérations avec le user,
vérifiées à chaque fois sur :3000 via Chrome. **Toujours rien commité.**

### Résultat final (desktop ≥ 1000 px)
```
┌────────────── orange ──────────────┬─ spirale ─┬────────────── blanc ──────────────┐
│        CRÉER  (plein, indenté)     │  ○──○     │        PENSER (plein)             │
│  LIVRER. (contour)                 │  ○──○     │             CODER. (contour, ind.) │
│  Des sites web qui inspirent.      │  ○──○     │   Je suis Koffi N'gouan Emmanuel, │
│  Des applications mobiles qui…     │  [photo]  │   développeur web & mobile depuis │
│  [ Voir mes projets ↗ ] (blanc)    │  contour  │   plus de 4 ans. Je vous aide…    │
│                                    │  blanc    │        Viens, on en parle ↘       │
│  (avatars) 27+ projets livrés      │           │      [ Démarrer un projet ] vert  │
└────────────────────────────────────┴───────────┴───────────────────────────────────┘
```
- Deux blocs strictement **en miroir** (même police, même taille, escaliers inversés, même marge `--hero-pad`,
  bouton en bas des deux côtés). Le user a insisté à plusieurs reprises sur l'équilibre gauche/droite.
- Mobile (< 1000) : panneau orange plein écran (texte en haut, photo en bas ~40svh) puis bloc blanc dessous ;
  pas de spirale ni de lignes.

### Fichiers touchés
`app/page.tsx` (section hero), `app/globals.css` (bloc « HERO v3/v4 » + media 1000 px), `app/layout.tsx` (polices),
`app/components/CodeTrail.tsx` (nouveau), `app/components/useScrollFx.ts` (parallaxe photo),
`public/koffi-portrait.jpg` (source Gemini), `public/koffi-portrait.webp` (sticker généré), `RECAP.md`.

### Photo
- Source : portrait Gemini fond blanc → `public/koffi-portrait.jpg`. Détourage local `rembg` (`u2net_human_seg`,
  alpha matting), fichier brut conservé dans `%TEMP%\cut_raw.png` (à régénérer si absent).
- **2026-09-26** : desktop remplacé par portrait costume (source racine `Apply_frequency_separation_and_suit_2K_*.jpeg`),
  sticker régénéré 1000×750 (~56 Ko), même recette (contour r=20 à 2000 px, ombre 18/26) ; mobile inchangé.
- Sticker `public/koffi-portrait.webp` (1000×836, ~100 Ko) fabriqué en Python/PIL :
  1. recadrage **juste avant** que le t-shirt touche les bords (sinon bords verticaux visibles), tête recentrée ;
  2. marge haute + 60 px gardés sous la coupe, masque flouté 1.2 px ;
  3. **contour blanc** par dilatation **circulaire** r=22 (~4.7 px rendus ; le `MaxFilter` carré aplatissait le crâne ;
     28 px jugé trop épais, 16 px trop fin) puis flou 1.5 px ;
  4. **ombre portée** brune floutée (décalage 18/26 px, 55 %) pour l'effet « incrusté » ;
  5. rognage net en bas après dilatation (pas d'angle vif), redimensionné à 1000 px.
- CSS : `.hero-photo` en `grid-column: 1 / 3`, calée en bas, centrée sur la frontière, 58svh (max 560 px),
  `translateY(0)`, `overflow: clip` sur `.hero` cache la coupe du bas. Parallaxe GSAP adoucie (`yPercent: 4`).
- **Rejetés** : fondu bas `mask-image` (« casse la photo »), 8 `drop-shadow` CSS (scroll très lent → contour et ombre
  gravés dans le fichier), badge « +4 ans » au-dessus de la tête, traits blancs rayonnants (2 versions), décalages
  6 % / 2 % vers le bas (« trop enfoncée »).

### Frontière orange / blanc
- `.hero-spiral` (desktop) : bande 96 px centrée, motif SVG data-URI répété tous les 44 px d'après la photo de
  référence du user : 2 trous rectangulaires perforés sombres, fil de fer fin en arc qui plonge dedans, ombre floue du
  fil. Ombres de gouttière 160 px des deux côtés (`::before` / `::after`), lignes de cahier fines tous les 40 px
  (`.hero-left::after` blanc 13 %, `.hero-lines` gris 7 % côté blanc). Photo devant (z-index 2 > 1).
- Grille `minmax(0,1fr) minmax(0,1fr)` : sinon un titre `nowrap` élargit une colonne et décale la frontière.
- **Rejetés** : ligne droite, zigzag `clip-path` (36 px puis 72 px), anneaux noirs simples (« pas réaliste »).

### Panneau orange (`.hero-left`)
- Titre `.hero-title` Bebas Neue (`--font-display`, next/font) : « CRÉER » plein indenté de `--stair`
  (clamp 48–162 px), « LIVRER. » contour (`-webkit-text-stroke`). Taille 7vw (88–134 px), réduite à la demande.
- Tagline 18–21 px : « Des sites web qui inspirent. / Des applications mobiles qui livrent. » (complétée avec
  web/mobiles à la demande). Bouton blanc « Voir mes projets ↗ ». En bas : avatars + compteur « 27+ projets livrés ».
- **Rejetés** : eyebrow avec trait, rangée texte|bouton avec filet, puces services, bandeau chiffres, badge rotatif
  (« font trop IA », « allonge inutilement », « de grâce »).

### Panneau blanc (`.hero-right`)
- Bloc `.hero-right-in` collé au **bord droit** : « PENSER » plein, « CODER. » contour noir indenté (escalier
  inversé). Idée du user : « recopier la même recette qu'à gauche » plutôt que le nom.
- Paragraphe 15.5–17 px, poids 500, gris, aligné à gauche dans le bloc, max 400 px :
  « Je suis **Koffi N'gouan Emmanuel**, développeur web & mobile depuis plus de **4 ans**. Je vous aide à réaliser
  vos projets sur mesure, du brief à la mise en ligne, avec un suivi clair à chaque étape. »
- `.hero-nudge` « Viens, on en parle » (italique corail, flèche SVG `.draw`) puis, tout en bas, bouton **vert
  WhatsApp** `.btn.wa` (#25d366, icône 24 px) « Démarrer un projet ».
- **Rejetés** (dans l'ordre) : « Missions freelance », « Votre prochain projet », « Bonjour, je suis » + nom en
  Jakarta, nom en Bebas (3 lignes puis 2), WEB / MOBILE. (doublon tagline), carte citation, carte « Comment je
  travaille », « Satisfait ou remboursé », « Disponible pour un nouveau projet », taglines « Sites… / Applications… »,
  « Plus de 4 ans… / Du brief… », « Vous avez une idée ?… », version 2 lignes (« vide »), version 21 px alignée à
  droite (« vilaine »).

### Header
- Logo blanc tant que non scrollé. Sur le hero (desktop) header **pleine largeur** avec la marge `--hero-pad`
  (clamp 24–184 px, élargie pour rapprocher les blocs de la photo) ; au scroll retour au conteneur 1200 px.

### Traînée de code (`app/components/CodeTrail.tsx`)
- Canvas fixe plein écran (z-index 60, `pointer-events: none`). Tous les ~16 px de souris, un **token court**
  (`{ }`, `</>`, `=>`, `λ`, `fn`, `def`, `SELECT`, `useState`…) est posé sur le chemin, JetBrains Mono
  (`--font-mono`) 10–14 px, sans rotation, s'estompe en 1.2–2 s, max 120. Désactivé sur tactile et
  `prefers-reduced-motion`. V1 (phrases longues tournées) rejetée : « s'affiche horizontal, codes mal affichés ».

### Divers
- Marquee technos : PostgreSQL et WordPress retirés ; défilement 38 s → 22 s.
- Outils : `rembg[cpu]` installé en global (pip), modèle dans `~/.rembg/`. Le resize de fenêtre Chrome ne descend pas
  sous ~1400 px : contrôle mobile via page iframe 390 px temporaire (supprimée).
- Supprimés du hero : arche, cartes flottantes `hf*`, squiggle `sq0`, scroll-hint, `moiveste.png` (plus référencé).

### À faire / en attente
- **Commit** : rien n'est commité depuis `0fbbfab`. Tout le hero v4, Lottie, GSAP, CodeTrail, polices sont en
  working tree.
- Vérifier le hero sur mobile réel (la traînée y est désactivée ; spirale masquée).
- Le user trouvait le scroll lent avant le retrait des `drop-shadow` : à reconfirmer chez lui.
