# Récap — Portfolio Coulibaly Gnimin Habib

Session du 2026-10-04. Projet créé de zéro dans `gniminhabib/` (Next.js 16, React 19, CSS classique, aucune dépendance d'animation).

Lancer : `cd gniminhabib` puis `npm run dev` → http://localhost:3001 (le portfolio de Koffi reste sur 3000, dans `kne/`).

## 1. Organisation du dépôt
- Le portfolio de Koffi a été déplacé de la racine vers `kne/`.
- `gniminhabib/` contient le site de Habib.
  - `_sources/` : les 65 photos WhatsApp d'origine, le texte de présentation, la main retouchée ChatGPT.
  - `designpinterest/` : les 7 références visuelles fournies.
  - `public/` : images préparées en WebP — `affiches/` (16), `awards/` (14), `terrain/` (13), `portraits/`, `studio/`, `cut/` (15 portraits détourés avec rembg), `img/`.

## 2. Identité
- **Personal branding de Habib : rouge studio / noir / blanc**, jaune en accent (boutons, mots forts, filets).
- **Violet réservé à Digital-Tech** (son entreprise) : section dédiée et mot « Digital-Tech » du hero.
- Typo : Poppins (texte, celle de ses affiches), Playfair Display italique (mots forts, noms), Anton (grands mots et chiffres).
- Style **flat** : aucune ombre, aucun effet verre (sauf le flou du header au défilement).
- Logo : monogramme **CGH** lié (le C jaune enveloppe le G, la barre du G devient celle du H) + « COULIBALY / Gnimin Habib ». Même signe en favicon.

## 3. Ordre de la page
1. **Hero** — portrait centré qui se fond vers le bas, « COULIBALY / GNIMIN HABIB » géant en fond, deux colonnes en miroir (qui il est · ce qu'il a obtenu), titre, bouton.
2. **Références & interventions** — bande de noms qui défile.
3. **À propos** — « L'IA SANS JARGON. » en lettres géantes, portrait pris dans les lettres, mission, trois repères en bandeau.
4. **Services** — 3 lignes numérotées.
5. **Digital-Tech** — présentation, chiffres, billet « WordPress Master Class 2ᵉ édition », 4 programmes de l'Academy, sessions gratuites.
6. **Terrain & affiches** — 800+, deux rails de photos, mur de 16 affiches cliquables.
7. **Conférences** — 6 interventions, photo dans une arche.
8. **Distinctions** — deux prix, grand « 2026 », photos de la soirée.
9. **Créateur de contenu** — trois téléphones, 5,1 K abonnés.
10. **Parcours & compétences** — frise (du plus récent au plus ancien), certifications, compétences, outils.
11. **FAQ**
12. **Contact** — répond au hero, bouton WhatsApp, coordonnées.
13. **Footer**

Menu du header dans le même ordre : À propos · Services · Digital-Tech · Distinctions · Parcours.

## 4. Comportements
- **Header caméléon** : prend la couleur de la section survolée, flou derrière, textes en sombre sur fond clair.
- **Jonctions entre sections** : la couleur précédente descend en vagues, doublée d'un ruban jaune ; les vagues coulent.
- **Animations au défilement**, différentes selon l'élément (titres, lignes alternées, photos en rideau, billet qui bascule, affiches, téléphones…). Elles se rejouent à chaque passage, dans les deux sens.
- **Compteurs** : tous les chiffres repartent de zéro à chaque entrée dans l'écran (formats « 45.000 », « 5,1 K », « 01 » respectés).
- **Parallaxe** sur les grands mots de fond. Barre de progression jaune en haut.
- « Réduire les animations » du système : tout est désactivé, la page reste entièrement visible.

## 5. Mobile
- Menu à barres → panneau plein écran, 8 liens numérotés + bouton WhatsApp.
- Hero : portrait recentré et réduit, colonnes en version courte sous le bouton.
- Aucun débordement horizontal (testé à 300, 320, 360 et 400 px en vrai mode mobile).
- Masqués sur mobile, à la demande : portrait de « À propos » et son halo rouge, pastille « Prochaine session », affiche du billet, pastille « Double lauréat ».
- Mur d'affiches en 2 colonnes, vagues plus fines, boutons centrés, programmes alignés à gauche.

## 6. Fichiers
- `app/page.tsx` — tout le contenu et la structure.
- `app/globals.css` — base + hero + header.
- `app/sections.css` — sections sous le hero + jonctions.
- `app/motion.css` — animations.
- `app/mobile.css` — téléphone et tablette (chargé en dernier).
- `app/components/Fx.tsx` — défilement : header, vagues, animations, compteurs, parallaxe.
- `app/components/Menu.tsx` — menu mobile.
- `app/components/Wall.tsx` — mur d'affiches + visionneuse.

## 7. À confirmer avec Habib
- **Numéro de téléphone** : le site utilise +225 05 06 68 51 98 (son texte) ; ses affiches montrent 05 66 66 09 27, utilisé seulement pour « Réserver ma place ».
- **« 10+ grandes formations »** : tiré de son visuel « Digital-Tech en chiffres ».
- **Références** : les noms viennent de son texte et de ses affiches, à des titres différents (employeur, client, lieu, intervention). S'il a les logos, ils peuvent remplacer les noms.
- **« L'IA sans jargon »** et les légendes de photos sont des formulations rédigées pendant la session.
- Liens vus sur Facebook mais non ajoutés : `linktr.ee/Habib704`, boutique Chariow.
- **Master Class** : dates et tarif (24–31 octobre 2026, 45.000 FCFA jusqu'au 15 octobre) à retirer ou mettre à jour après l'événement.

## 8. Vérifications faites en fin de session
- **Build de production** : `npm run build` passe ; le site servi par `next start` est identique au pixel près à la version de développement (bureau 1640 px et mobile 400 px).
- **Nettoyage** : règles CSS visant des classes disparues, composants, icônes et images inutilisés supprimés. CSS : ~9 000 → ~4 800 lignes ; `public/` : 100 → 44 fichiers. Rendu identique au pixel près avant/après à 1640, 820 et 400 px.
- **Tests fonctionnels** (sur le build de production) : menu mobile (ouverture, fermeture par Échap et par clic sur un lien), visionneuse d'affiches (clic, flèches clavier, bouton suivant, Échap, clic hors image), header en version claire sur mobile, aucun lien interne cassé, aucune image cassée, aucune erreur console.
- **Tablette** relue à 820 et 1024 px ; trois défauts corrigés (réseaux du hero empilés, troisième repère d'« À propos » coupé, photo Digital-Tech trop haute).
- **Mobile** : aucun débordement horizontal ni texte coupé à 300, 320, 360 et 400 px.

## 9. Reste à faire
- **Adresse du site** : définir `NEXT_PUBLIC_SITE_URL` au déploiement (voir `.env.example`). Sans elle, les aperçus de partage pointent sur `localhost`.
- **Déploiement** : régler le dossier racine du projet sur `gniminhabib` (et sur `kne` pour le portfolio de Koffi).
- **Vrai téléphone** : non testé (tactile, fluidité des animations et du flou du header sur appareil modeste).
- **CSS** : il reste des règles qui se surchargent (réglages successifs du hero et du mobile). Sans effet à l'écran ; une fusion manuelle les réduirait encore.
- Facebook n'a pu être lu qu'en vue publique : posts non exploités.
- `_sources/` et `designpinterest/` sont exclus du dépôt (photos brutes du client) : à sauvegarder ailleurs.
