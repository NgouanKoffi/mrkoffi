"use client";

import { useEffect } from "react";

// Quel élément entre comment. Les animations sont décrites dans motion.css ; elles se rejouent
// à chaque entrée dans l'écran, en descendant comme en remontant.
const ANIMS: [string, string][] = [
  [".h5-note:not(.h5-right)", "left"],
  [".h5-right", "right"],
  [".h5-fig", "up"],
  [".hero5 h1", "rise"],
  [".h5-cta", "pop"],
  [".kicker, .ztk-kicker", "kick"],
  [".zh h2, .ab3-text h2, .zct h2, .zdt-name", "rise"],
  [".zh > p, .ab3-text > p, .zdt-lead, .ab2-mission", "fade"],
  [".ab3-word:not(.ab3-outline)", "left"],
  [".ab3-stage img", "up"],
  [".ab3-outline", "fade"],
  [".ab3-facts li, .zdt-stats > div, .zct-ways li, .zcn-links a", "pop"],
  [".zsv-list > li, .zdt-progs article, .zpc-time li, .zdt-free li, .zcf-list li, .zaw-prizes li, .zfq-list details", "row"],
  [".zsv-list figure img, .zdt-photo, .zaw-main, .zcf-fig img", "wipe"],
  [".ztk", "flip"],
  [".ztk-flyer, .zaw-badge", "drop"],
  [".zaw-side", "tilt"],
  [".ztr-head > b, .zcn-count", "pop"],
  [".rail", "fade"],
  [".wall-item, .zaw-strip img", "zoom"],
  [".phone", "fan"],
  [".zpc aside h3", "kick"],
  [".zpc-tags li, .zpc aside .zplus li", "pop"],
  [".zft-top > *", "up"],
];

// Tout élément dont le texte contient un chiffre à faire défiler.
const COUNTERS = [
  ".h5-note b.serif em",
  ".h5-socials span b",
  ".h5-awards span b",
  ".h5-right .h5-does li",
  ".zsv-n",
  ".zdt-stats dt",
  ".ztk-date b",
  ".ztk-price s",
  ".ztk-price b",
  ".ztk-bonus b",
  ".ztk-seats",
  ".zdt-progs article > span",
  ".ztr-head > b",
  ".zcf-list span",
  ".zaw-year",
  ".zcn-count b",
].join(", ");

// Grands mots de fond : ils glissent à une autre vitesse que la page.
const PARALLAX: [string, number][] = [
  [".h5-word", 0.28],
  [".zct-word", 0.16],
  [".zaw-year", 0.2],
  [".zcf-fig p", 0.14],
  [".ztk-two", 0.1],
];

export default function Fx() {
  useEffect(() => {
    const root = document.documentElement;

    // Chaque section connaît la couleur de la précédente, pour le bord en vagues (voir sections.css).
    let prev = "";
    document.querySelectorAll<HTMLElement>("main > section, footer").forEach((z) => {
      const c = getComputedStyle(z).backgroundColor;
      const alpha = Number((c.match(/[\d.]+/g) ?? [])[3] ?? 1);
      const own = alpha > 0.5 ? c : "#2a0306";
      if (prev) {
        z.style.setProperty("--prev", prev);
        if (prev !== own && !z.classList.contains("refs")) z.classList.add("sheet");
      }
      prev = own;
    });

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const bar = document.createElement("div");
    bar.className = "progress";
    bar.setAttribute("aria-hidden", "true");
    document.body.appendChild(bar);
    const layers = PARALLAX.flatMap(([sel, speed]) =>
      Array.from(document.querySelectorAll<HTMLElement>(sel)).map((el) => ({ el, speed }))
    );

    let ticking = false;
    const frame = () => {
      ticking = false;
      const y = window.scrollY;
      const vh = window.innerHeight;
      root.classList.toggle("scrolled", y > 40);
      bar.style.transform = `scaleX(${Math.min(1, y / Math.max(1, root.scrollHeight - vh))})`;

      // Le header prend la couleur de la section qu'il survole, et passe en texte sombre sur fond clair.
      const under = Array.from(document.querySelectorAll<HTMLElement>("main > section, footer")).find((z) => {
        const r = z.getBoundingClientRect();
        return r.top <= 36 && r.bottom > 36;
      });
      if (under) {
        const [r, g, b, a = 1] = (getComputedStyle(under).backgroundColor.match(/[\d.]+/g) ?? [0, 0, 0, 0]).map(Number);
        const solid = a > 0.5;
        root.style.setProperty("--nav-bg", solid ? `rgba(${r}, ${g}, ${b}, 0.62)` : "rgba(150, 16, 27, 0.28)");
        root.classList.toggle("nav-light", solid && 0.299 * r + 0.587 * g + 0.114 * b > 160);
      }

      if (!reduced) {
        for (const { el, speed } of layers) {
          const r = el.getBoundingClientRect();
          if (r.bottom < -200 || r.top > vh + 200) continue;
          el.style.setProperty("--py", `${((r.top + r.height / 2 - vh / 2) * -speed).toFixed(1)}px`);
        }
      }
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(frame);
    };
    frame();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const cleanup = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      bar.remove();
    };
    if (reduced) return cleanup;

    // Étiquetage : type d'animation + rang parmi les frères (pour l'entrée en cascade).
    const tagged: HTMLElement[] = [];
    for (const [sel, anim] of ANIMS) {
      const seen = new Map<Element | null, number>();
      document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
        if (el.dataset.anim) return;
        const n = seen.get(el.parentElement) ?? 0;
        seen.set(el.parentElement, n + 1);
        el.dataset.anim = anim;
        if (n % 2) el.dataset.alt = "";
        el.style.setProperty("--i", String(Math.min(n, 9)));
        tagged.push(el);
      });
    }
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      // un conteneur dont les enfants s'animent déjà n'a pas besoin de sa propre entrée
      if (el.dataset.anim || el.querySelector("[data-anim]")) return;
      el.dataset.anim = "up";
      tagged.push(el);
    });
    root.classList.add("fx-ready");

    // Compteurs : tous les chiffres du site repartent de zéro à chaque entrée dans l'écran.
    // Gère « 800+ », « 5,1 K » (décimale), « 45.000 » (milliers), « 01 » (zéro initial), « 24 → 31 ».
    const NUM = /\d+(?:[.,]\d+)?/g;
    type Part = { to: number; from: number; fmt: (v: number) => string };
    const counters = new Map<HTMLElement, { text: string; parts: Part[] }>();
    document.querySelectorAll<HTMLElement>(COUNTERS).forEach((el) => {
      if (el.children.length) return;
      const text = el.textContent?.trim() ?? "";
      const parts = (text.match(NUM) ?? []).map((m): Part => {
        if (/\.\d{3}$/.test(m)) {
          return { to: Number(m.replace(".", "")), from: 0, fmt: (v) => String(Math.round(v)).replace(/\B(?=(\d{3})+$)/g, ".") };
        }
        if (/[.,]/.test(m)) {
          const sep = m.includes(",") ? "," : ".";
          const d = m.split(sep)[1].length;
          return { to: Number(m.replace(",", ".")), from: 0, fmt: (v) => v.toFixed(d).replace(".", sep) };
        }
        const to = Number(m);
        const year = to >= 1900 && to <= 2100;
        return { to, from: year ? to - 26 : 0, fmt: (v) => String(Math.round(v)).padStart(m.startsWith("0") ? m.length : 1, "0") };
      });
      if (parts.length) counters.set(el, { text, parts });
    });
    const running = new WeakMap<HTMLElement, number>();
    const count = (el: HTMLElement) => {
      const c = counters.get(el);
      if (!c) return;
      cancelAnimationFrame(running.get(el) ?? 0);
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / 1400);
        const eased = 1 - Math.pow(1 - t, 3);
        let k = 0;
        el.textContent = c.text.replace(NUM, () => {
          const p = c.parts[k++];
          return p.fmt(p.from + (p.to - p.from) * eased);
        });
        if (t < 1) running.set(el, requestAnimationFrame(tick));
      };
      running.set(el, requestAnimationFrame(tick));
    };

    // Un élément rogné par clip-path n'a plus de surface visible pour l'observateur :
    // pour ceux-là (« wipe »), c'est le parent qu'on surveille.
    const watch = new Map<Element, HTMLElement[]>();
    for (const el of tagged) {
      const target = el.dataset.anim === "wipe" && el.parentElement ? el.parentElement : el;
      watch.set(target, [...(watch.get(target) ?? []), el]);
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const els = watch.get(e.target) ?? [];
          if (e.isIntersecting && e.intersectionRatio >= 0.1) els.forEach((el) => el.classList.add("in"));
          else if (!e.isIntersecting) els.forEach((el) => el.classList.remove("in"));
        }
      },
      { threshold: [0, 0.1], rootMargin: "0px 0px -6% 0px" }
    );
    watch.forEach((_, target) => io.observe(target));

    const cio = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) count(e.target as HTMLElement);
      },
      { threshold: 0.5 }
    );
    counters.forEach((_, el) => cio.observe(el));

    return () => {
      cleanup();
      io.disconnect();
      cio.disconnect();
      tagged.forEach((el) => {
        delete el.dataset.anim;
        delete el.dataset.alt;
        el.classList.remove("in");
      });
      root.classList.remove("fx-ready");
    };
  }, []);

  return null;
}
