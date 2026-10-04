"use client";

import { useEffect, useRef, useState } from "react";

/** Bouton flottant bas-droite : anneau de progression du scroll + remontée rapide en haut. */

const R = 22;
const C = 2 * Math.PI * R;

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const ring = useRef<SVGCircleElement>(null);
  const anim = useRef(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      // masqué quand la ligne copyright du footer entre à l'écran, pour ne pas la recouvrir
      const foot = document.querySelector(".foot-bottom");
      const atBottom = foot ? foot.getBoundingClientRect().top < window.innerHeight - 20 : y >= max - 80;
      setShow(y > 500 && !atBottom);
      if (ring.current) ring.current.style.strokeDashoffset = String(C * (1 - (max > 0 ? Math.min(1, y / max) : 0)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(anim.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const toTop = () => {
    const start = window.scrollY;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    // durée courte, légèrement plus longue sur les pages très longues
    const dur = Math.min(700, 320 + start / 40);
    const t0 = performance.now();
    cancelAnimationFrame(anim.current);
    const step = (now: number) => {
      const t = Math.min(1, (now - t0) / dur);
      const e = 1 - Math.pow(1 - t, 4);
      window.scrollTo({ top: start * (1 - e), behavior: "instant" });
      if (t < 1) anim.current = requestAnimationFrame(step);
    };
    anim.current = requestAnimationFrame(step);
  };

  return (
    <button
      type="button"
      className={`to-top${show ? " on" : ""}`}
      onClick={toTop}
      aria-label="Remonter en haut de la page"
      tabIndex={show ? 0 : -1}
    >
      <svg className="to-top-ring" viewBox="0 0 52 52" aria-hidden="true">
        <circle cx="26" cy="26" r={R} className="to-top-track" />
        <circle ref={ring} cx="26" cy="26" r={R} className="to-top-bar" strokeDasharray={C} strokeDashoffset={C} />
      </svg>
      <svg className="to-top-arrow" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
