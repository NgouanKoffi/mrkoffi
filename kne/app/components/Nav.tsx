"use client";

import { useEffect, useState } from "react";
import { WHATSAPP } from "../data/projects";
import ThemeToggle from "./ThemeToggle";

/* desktop : 3 liens à gauche de la spirale, 3 à droite */
const LEFT = [
  ["Accueil", "#accueil"],
  ["Services", "#services"],
  ["Mon parcours", "#parcours"],
];
const RIGHT = [
  ["Process", "#process"],
  ["Projets", "#projets"],
  ["FAQ", "#faq"],
];
const LINKS = [...LEFT, ...RIGHT];

/* Thème du header selon la section qui passe dessous (le premier qui matche gagne). */
type Theme = "white" | "dark" | "peach" | "soft" | "orange" | "sand";
const THEMES: [string, Theme, boolean?][] = [
  [".dark-sec, .p-game, .channel, .cta", "dark"],
  [".p-mobile", "peach"],
  [".section.soft", "soft"],
  [".hero-left", "orange", true], // mobile uniquement (desktop : hero moitié blanc)
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>("white");

  useEffect(() => {
    let raf = 0;
    const probe = () => {
      raf = 0;
      setScrolled(window.scrollY > 20);
      const y = (document.querySelector<HTMLElement>(".nav-wrap")?.offsetHeight ?? 72) - 1;
      const mobile = window.innerWidth < 1000;
      let next: Theme = "white";
      outer: for (const [sel, t, mobileOnly] of THEMES) {
        if (mobileOnly && !mobile) continue;
        for (const el of document.querySelectorAll<HTMLElement>(sel)) {
          const r = el.getBoundingClientRect();
          if (r.top <= y && r.bottom >= y && r.height > 0) {
            next = t;
            break outer;
          }
        }
      }
      setTheme(next);
    };
    const f = () => {
      if (!raf) raf = requestAnimationFrame(probe);
    };
    probe();
    window.addEventListener("scroll", f, { passive: true });
    window.addEventListener("resize", f);
    return () => {
      window.removeEventListener("scroll", f);
      window.removeEventListener("resize", f);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    // verrouillage robuste (iOS compris) : on fige le body à la position courante
    const html = document.documentElement;
    if (!open) return;
    const y = window.scrollY;
    html.classList.add("menu-lock");
    document.body.style.position = "fixed";
    document.body.style.top = `-${y}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    return () => {
      html.classList.remove("menu-lock");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      window.scrollTo(0, y);
    };
  }, [open]);

  return (
    <>
    <header className={`nav-wrap t-${theme}${scrolled ? " scrolled" : ""}${open ? " menu-open" : ""}`}>
      <nav className="nav">
        <div className="nav-half">
          <a href="#accueil" className="brand">
            Mr<span>Koffi</span>
            <i>.</i>
          </a>
          <ul className="nav-links left">
            {LEFT.map(([l, h]) => (
              <li key={h}>
                <a href={h}>{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-half">
          <ul className="nav-links right">
            {RIGHT.map(([l, h]) => (
              <li key={h}>
                <a href={h}>{l}</a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn dark sm nav-cta">
            Me contacter
          </a>
        </div>
        <button
          className={`burger${open ? " open" : ""}`}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <i />
          <i />
        </button>
      </nav>
    </header>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        {LINKS.map(([l, h]) => (
          <a key={h} href={h} onClick={() => setOpen(false)}>
            {l}
          </a>
        ))}
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn orange" onClick={() => setOpen(false)}>
          Me contacter sur WhatsApp
        </a>
      </div>
    </>
  );
}
