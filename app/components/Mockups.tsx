/* Mockups d'interface en CSS/SVG — aucun visuel externe nécessaire. */

export function BrowserMock({ img, url }: { img: string; url: string }) {
  return (
    <div className="mock-browser">
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
      <div className="mb-screen">
        <img src={img} alt="" loading="lazy" />
      </div>
    </div>
  );
}

export function PhoneMock({ img }: { img: string }) {
  return (
    <div className="mock-phone">
      <div className="mp-notch" />
      <div className="mp-screen">
        <img src={img} alt="" loading="lazy" />
      </div>
    </div>
  );
}

export function ChartCard() {
  // courbe « avant / après » : chute sans suivi, croissance avec
  return (
    <div className="card chart-card">
      <div className="cc-head">
        <span className="lab">Chiffre d&apos;affaires</span>
        <b>
          +38 % <small>en 6 mois</small>
        </b>
      </div>
      <svg viewBox="0 0 320 150" className="cc-svg" aria-hidden="true">
        <defs>
          <linearGradient id="gOr" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FF7A52" stopOpacity=".28" />
            <stop offset="1" stopColor="#FF7A52" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[30, 60, 90, 120].map((y) => (
          <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="#EFE9E4" strokeDasharray="3 4" />
        ))}
        <path
          d="M0 118 C 40 112, 60 124, 90 108 S 140 90, 170 96 S 220 60, 250 52 S 300 30, 320 22 L320 150 L0 150 Z"
          fill="url(#gOr)"
        />
        <path
          d="M0 118 C 40 112, 60 124, 90 108 S 140 90, 170 96 S 220 60, 250 52 S 300 30, 320 22"
          fill="none"
          stroke="#FF7A52"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M0 100 C 40 104, 70 96, 100 110 S 160 126, 200 122 S 260 134, 320 138"
          fill="none"
          stroke="#D6D3CF"
          strokeWidth="2.5"
          strokeDasharray="5 5"
          strokeLinecap="round"
        />
        <circle cx="250" cy="52" r="5" fill="#FF7A52" stroke="#fff" strokeWidth="2.5" />
        <g transform="translate(200,26)">
          <rect width="112" height="26" rx="8" fill="#0F1115" />
          <text x="10" y="17" fill="#fff" fontSize="11" fontWeight="700">
            Mise en ligne ↗
          </text>
        </g>
      </svg>
      <div className="cc-legend">
        <span>
          <i style={{ background: "#FF7A52" }} /> Avec un suivi clair
        </span>
        <span>
          <i style={{ background: "#D6D3CF" }} /> Projet livré en retard
        </span>
      </div>
      <div className="cc-months">
        <span>Jan</span>
        <span>Fév</span>
        <span>Mar</span>
        <span>Avr</span>
        <span>Mai</span>
        <span>Juin</span>
      </div>
    </div>
  );
}

export function ChatMock() {
  return (
    <div className="mock-chat">
      <div className="mc-head">
        <span className="mc-avatar">MK</span>
        <div>
          <b>Mr Koffi</b>
          <small>
            <i /> en ligne · répond en ~10 min
          </small>
        </div>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="mc-wa">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.9 11.9 0 0 0 4.6 4.1c1.7.7 2.1.6 2.8.6a2.5 2.5 0 0 0 1.7-1.2 2 2 0 0 0 .1-1.2c0-.1-.2-.2-.4-.3z" />
        </svg>
      </div>
      <div className="mc-body">
        <div className="mc-msg them">
          Bonjour, le logo est trop petit sur mobile 🙏
          <time>09:12</time>
        </div>
        <div className="mc-msg me">
          Corrigé ✅ Regarde la preview : <u>preview.mrkoffi.dev/v3</u>
          <time>09:24 ✓✓</time>
        </div>
        <div className="mc-msg them">
          Parfait, on valide ! Prochaine étape ?
          <time>09:31</time>
        </div>
        <div className="mc-msg me">
          Mise en ligne vendredi, nom de domaine + hébergement inclus 🚀
          <time>09:33 ✓✓</time>
        </div>
      </div>
      <div className="mc-input">
        <span>Écrire un message…</span>
        <i>➤</i>
      </div>
    </div>
  );
}

export function DataMock() {
  const rows = [
    ["Commande #2841", "Payée", "ok"],
    ["Stock — Riz 25kg", "12 restants", "warn"],
    ["Sauvegarde", "Auto · 02:00", "ok"],
    ["Client — Kouassi A.", "RDV 14h", "info"],
  ];
  return (
    <div className="mock-data">
      <div className="md-head">
        <b>Tableau de bord</b>
        <span className="md-pill">Temps réel</span>
      </div>
      <div className="md-stats">
        <div>
          <small>Ventes du jour</small>
          <b>184 500 F</b>
        </div>
        <div>
          <small>Clients</small>
          <b>1 512</b>
        </div>
      </div>
      <div className="md-rows">
        {rows.map(([a, b, s]) => (
          <div className="md-row" key={a}>
            <span>{a}</span>
            <em className={`st-${s}`}>{b}</em>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Timeline() {
  const steps = [
    ["Brief", "On échange sur WhatsApp ou en appel. Objectifs, délais, budget."],
    ["Maquette", "Vous voyez le design avant la première ligne de code."],
    ["Développement", "Avancement visible en continu sur une URL de preview."],
    ["Mise en ligne", "Domaine, hébergement, formation. Vous êtes autonome."],
  ];
  return (
    <div className="timeline">
      {steps.map(([t, d], i) => (
        <div className={`tl-step${i === 2 ? " active" : ""}`} key={t}>
          <span className="tl-dot">{i + 1}</span>
          <div>
            <b>{t}</b>
            <p>{d}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
