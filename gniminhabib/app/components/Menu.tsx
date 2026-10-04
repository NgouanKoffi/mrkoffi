"use client";

import { useEffect, useState } from "react";

const LINKS = [
  ["#a-propos", "À propos"],
  ["#services", "Services"],
  ["#digital-tech", "Digital-Tech"],
  ["#conferences", "Conférences"],
  ["#distinctions", "Distinctions"],
  ["#parcours", "Parcours"],
  ["#faq", "Questions"],
  ["#contact", "Contact"],
];

// Menu mobile : bouton à barres + panneau plein écran (Échap ou clic sur un lien pour fermer).
export default function Menu({ whatsapp }: { whatsapp: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={`burger${open ? " open" : ""}`}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={() => setOpen((v) => !v)}
      >
        <i />
        <i />
        <i />
      </button>

      <div id="menu-mobile" className={`mmenu${open ? " open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Menu">
          {LINKS.map(([href, label], k) => (
            <a key={href} href={href} tabIndex={open ? 0 : -1} style={{ transitionDelay: `${80 + k * 45}ms` }} onClick={() => setOpen(false)}>
              <span>{String(k + 1).padStart(2, "0")}</span>
              {label}
            </a>
          ))}
        </nav>
        <a className="zpb" href={whatsapp} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
          Écrire sur WhatsApp
          <span>
            <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true">
              <path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </div>
    </>
  );
}
