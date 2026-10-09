"use client";

import { useEffect, useRef } from "react";

// Traînée derrière le curseur : une pastille par métier de Habib, dans l'ordre, en boucle.
// Souris uniquement ; rien sur tactile ni si « réduire les animations » est activé.
// Tracés sur une grille de 24 (trait, sauf `fill`).
const ICONS: { d: string[]; fill?: boolean }[] = [
  // IA — étincelle
  { d: ["M12 2.5l2.3 6.7 6.7 2.3-6.7 2.3L12 20.5l-2.3-6.7L3 11.5l6.7-2.3z"], fill: true },
  // Formation — toque
  { d: ["M2 9.5l10-5 10 5-10 5z", "M6.5 12v4c0 1.4 2.5 2.7 5.5 2.7s5.5-1.3 5.5-2.7v-4", "M22 9.5v5.5"] },
  // Conférences — micro
  { d: ["M12 3a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z", "M5.5 11a6.5 6.5 0 0 0 13 0", "M12 17.5V21", "M8.5 21h7"] },
  // Marketing digital — mégaphone
  { d: ["M3 10v4h3l8 4V6l-8 4z", "M17.5 9a4.2 4.2 0 0 1 0 6", "M7 14v4.5h2.6V15.3"] },
  // WordPress — W cerclé
  { d: ["M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18z", "M6.6 9.2l2.6 7.3 2.8-6.8 2.8 6.8 2.6-7.3"] },
  // Community management — bulle
  { d: ["M4 5h16v11H10.5L6 19.5V16H4z", "M8.5 9.3h7", "M8.5 12.2h4.5"] },
  // Création de contenu — vidéo
  { d: ["M3.5 6h17v12h-17z", "M10 9.3v5.4l4.8-2.7z"] },
  // Sites web — code
  { d: ["M8 8l-4.5 4L8 16", "M16 8l4.5 4L16 16", "M13.6 5.5l-3.2 13"] },
  // Résultats — courbe qui monte
  { d: ["M3 17l6-6 4 4 8-8", "M15 7h6v6"] },
  // Distinctions — trophée
  { d: ["M8 4h8v5a4 4 0 0 1-8 0z", "M8 5.5H5V7a3 3 0 0 0 3 3", "M16 5.5h3V7a3 3 0 0 1-3 3", "M12 13v4", "M8.5 20h7", "M10 17h4"] },
];

const YELLOW = "#ffd21f";
const INK = "#0e0607";
const STEP = 54; // px parcourus entre deux pastilles
const MAX = 18;
const LIFE = 900; // ms
const R = 11; // rayon d'une pastille, px

type P = { x: number; y: number; vx: number; vy: number; born: number; icon: number; dark: boolean; rot: number; r: number };

export default function IconTrail() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const paths = ICONS.map((i) => i.d.map((d) => new Path2D(d)));

    let w = 0,
      h = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const parts: P[] = [];
    let lastX = -1,
      lastY = -1,
      acc = 0,
      next = 0,
      raf = 0;

    const spawn = (x: number, y: number, dx: number, dy: number) => {
      const len = Math.hypot(dx, dy) || 1;
      // léger écart de part et d'autre du trajet, en alternance
      const side = next % 2 ? 1 : -1;
      const off = side * (6 + Math.random() * 8);
      parts.push({
        x: x + (-dy / len) * off,
        y: y + (dx / len) * off,
        vx: (-dy / len) * side * 0.012,
        vy: -0.03,
        born: performance.now(),
        icon: next % ICONS.length,
        dark: next % 2 === 1,
        rot: (Math.random() - 0.5) * 0.5,
        r: R + Math.random() * 2,
      });
      next++;
      if (parts.length > MAX) parts.shift();
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const x = e.clientX,
        y = e.clientY;
      if (lastX < 0) {
        lastX = x;
        lastY = y;
        return;
      }
      const dx = x - lastX,
        dy = y - lastY;
      acc += Math.hypot(dx, dy);
      if (acc > STEP) {
        acc = 0;
        spawn(x, y, dx, dy);
      }
      lastX = x;
      lastY = y;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    // onglet caché : on purge pour ne pas retrouver des pastilles figées au retour
    const onVis = () => {
      if (!document.hidden) return;
      parts.length = 0;
      lastX = lastY = -1;
      acc = 0;
    };
    document.addEventListener("visibilitychange", onVis);

    let prev = 0;
    const tick = (now: number) => {
      const dt = prev ? Math.min(now - prev, 50) : 16;
      prev = now;
      ctx.clearRect(0, 0, w, h);
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];
        const t = (now - p.born) / LIFE;
        if (t >= 1) {
          parts.splice(i, 1);
          continue;
        }
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        // entrée avec un petit rebond, puis la pastille rétrécit et s'efface
        const k = t < 0.18 ? t / 0.18 : 1;
        const scale = t < 0.18 ? 1.12 * (1 - (1 - k) * (1 - k)) : 1.12 - 0.12 * Math.min(1, (t - 0.18) / 0.1) - 0.45 * Math.max(0, (t - 0.55) / 0.45);
        ctx.globalAlpha = t < 0.55 ? 1 : 1 - (t - 0.55) / 0.45;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot * (1 - t));
        ctx.scale(scale, scale);
        ctx.fillStyle = p.dark ? INK : YELLOW;
        ctx.beginPath();
        ctx.arc(0, 0, p.r, 0, Math.PI * 2);
        ctx.fill();
        const s = (p.r * 1.16) / 24;
        ctx.scale(s, s);
        ctx.translate(-12, -12);
        const ink = p.dark ? YELLOW : INK;
        if (ICONS[p.icon].fill) {
          ctx.fillStyle = ink;
          for (const path of paths[p.icon]) ctx.fill(path);
        } else {
          ctx.strokeStyle = ink;
          ctx.lineWidth = 2;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          for (const path of paths[p.icon]) ctx.stroke(path);
        }
        ctx.restore();
      }
      ctx.globalAlpha = 1;
      if (parts.length) raf = requestAnimationFrame(tick);
      else {
        raf = 0;
        prev = 0;
      }
    };

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return <canvas ref={ref} className="icon-trail" aria-hidden="true" />;
}
