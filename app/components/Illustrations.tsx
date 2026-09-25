/* Illustrations génériques : Lottie (licence Lottie Simple, usage commercial libre) + CSS/SVG. Aucune capture de projet réel. */
import Lottie from "./Lottie";

/* ---------- cadres ---------- */
export function BrowserFrame({ url, children, className = "" }: { url: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`mock-browser ${className}`}>
      <div className="mb-bar">
        <i />
        <i />
        <i />
        <span className="mb-url">
          <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.2">
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
          {url}
        </span>
      </div>
      <div className="mb-screen ui">{children}</div>
    </div>
  );
}

export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mock-phone">
      <div className="mp-notch" />
      <div className="mp-screen ui">{children}</div>
    </div>
  );
}

/* ---------- écrans « site » ---------- */
export function SiteUI({ tone = "a" }: { tone?: "a" | "b" | "c" }) {
  return (
    <div className={`site tone-${tone}`}>
      <div className="site-nav">
        <i className="logo" />
        <span />
        <span />
        <span />
        <em />
      </div>
      <div className="site-hero">
        <div className="site-txt">
          <b className="l1" />
          <b className="l2" />
          <b className="l3" />
          <div className="site-cta">
            <i />
            <i className="ghost" />
          </div>
        </div>
        <div className="site-img">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="site-cards">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

/* ---------- écrans « app » ---------- */
export function AppUI({ variant = "wallet" }: { variant?: "wallet" | "shop" | "dash" }) {
  if (variant === "shop") {
    return (
      <div className="app app-shop">
        <div className="app-top">
          <b>Boutique</b>
          <i />
        </div>
        <div className="app-search" />
        <div className="app-grid">
          {[1, 2, 3, 4].map((n) => (
            <div className={`tile t${n}`} key={n}>
              <span />
              <small />
            </div>
          ))}
        </div>
        <div className="app-tabs">
          <i className="on" />
          <i />
          <i />
          <i />
        </div>
      </div>
    );
  }
  if (variant === "dash") {
    return (
      <div className="app app-dash">
        <div className="app-top">
          <b>Aujourd&apos;hui</b>
          <i />
        </div>
        <div className="app-kpi">
          <div>
            <small>Ventes</small>
            <b>184 500 F</b>
          </div>
          <div>
            <small>Commandes</small>
            <b>32</b>
          </div>
        </div>
        <svg viewBox="0 0 120 60" className="app-bars" aria-hidden="true">
          {[18, 30, 24, 42, 36, 52, 46].map((h, i) => (
            <rect key={i} x={4 + i * 16.5} y={60 - h} width="10" height={h} rx="3" className={i === 5 ? "hi" : ""} />
          ))}
        </svg>
        <div className="app-list">
          <div>
            <span />
            <em>ok</em>
          </div>
          <div>
            <span />
            <em>ok</em>
          </div>
          <div>
            <span />
            <em className="w">wait</em>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="app app-wallet">
      <div className="app-top">
        <b>Bonjour 👋</b>
        <i />
      </div>
      <div className="app-balance">
        <small>Solde disponible</small>
        <b>96 400 F</b>
        <span>+12 % ce mois</span>
      </div>
      <div className="app-pay">
        <i className="om" />
        <i className="mtn" />
        <i className="wave" />
        <i className="card" />
      </div>
      <div className="app-list">
        <div>
          <span />
          <em>+ 15 000</em>
        </div>
        <div>
          <span />
          <em className="neg">- 4 500</em>
        </div>
        <div>
          <span />
          <em>+ 22 000</em>
        </div>
      </div>
    </div>
  );
}

/* ---------- scènes des 3 panneaux services ---------- */
export function WebScene() {
  return (
    <div className="scene scene-web">
      <div className="blob" aria-hidden="true" />
      <div className="sc-main" data-py="24">
        <Lottie name="web-anim" />
      </div>
      <div className="fcard fc-mini chip-live" data-py="-60">
        <i />
        <div>
          <b>Mis en ligne</b>
          <small>SSL · domaine · hébergement</small>
        </div>
      </div>
    </div>
  );
}

export function MobileScene() {
  return (
    <div className="scene scene-mobile">
      <div className="blob" aria-hidden="true" />
      <div className="sc-main" data-py="24">
        <Lottie name="mpay" />
      </div>
      <div className="fcard fc-notif" data-py="-70">
        <span className="avatar">✓</span>
        <div>
          <b>Paiement reçu</b>
          <small>Orange Money · 15 000 F</small>
        </div>
      </div>
      <div className="stores" aria-hidden="true">
        <span>▶ Play Store</span>
        <span> App Store</span>
      </div>
    </div>
  );
}

export function DataScene() {
  return (
    <div className="scene scene-data">
      <div className="blob" aria-hidden="true" />
      <div className="sc-main" data-py="24">
        <Lottie name="data-smashing" />
      </div>
      <div className="fcard fc-db" data-py="-60">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
        </svg>
        <div>
          <b>Sauvegarde OK</b>
          <small>Auto · 02:00 · chiffrée</small>
        </div>
      </div>
      <div className="fcard fc-ml" data-py="50">
        <small>Utilisateurs enregistrés</small>
        <b>1 500 <span>+</span></b>
        <i />
      </div>
    </div>
  );
}
