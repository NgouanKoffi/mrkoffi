"use client";

import { useEffect, useRef } from "react";

/** Traînée de fragments de code derrière le curseur (desktop + souris uniquement). */

const SNIPPETS = [
  "{", "}", "(", ")", "[", "]", "<", ">", "</>", "=>", "->", "::", ";", "#", "$", "&&", "||", "===", "?.", "??",
  "λ", "fn", "def", "let", "const", "async", "await", "npm", "git", "py", "js", "ts", "sql", "0", "1", "0x1F", "/>",
  "print()", "map()", "useState", "SELECT", "return", "import", "class", "null", "true", "@", "%", "*", "/", "+",
];

// rouge + noir (le noir passe en blanc cassé en thème nuit, sinon invisible)
const RED = "#e11d2e";
const inkColor = () => (document.documentElement.dataset.theme === "dark" ? "#f2f2f2" : "#0a0a0a");

type P = { x: number; y: number; vx: number; vy: number; life: number; max: number; text: string; color: string; size: number; rot: number };

export default function CodeTrail() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0,
      h = 0,
      dpr = 1;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const parts: P[] = [];
    let lastX = -1,
      lastY = -1,
      acc = 0;
    const font = getComputedStyle(document.documentElement).getPropertyValue("--font-mono") || "ui-monospace, Menlo, Consolas, monospace";

    const spawn = (x: number, y: number, dx: number, dy: number) => {
      const text = SNIPPETS[(Math.random() * SNIPPETS.length) | 0];
      // décalage perpendiculaire au mouvement : la trace « déborde » légèrement du trait du curseur
      const len = Math.hypot(dx, dy) || 1;
      const nx = -dy / len,
        ny = dx / len;
      const off = (Math.random() - 0.5) * 18;
      parts.push({
        x: x + nx * off,
        y: y + ny * off,
        vx: nx * off * 0.01,
        vy: -0.15 - Math.random() * 0.2,
        life: 0,
        max: 28 + Math.random() * 16,
        text,
        color: Math.random() < 0.5 ? RED : inkColor(),
        size: 10 + Math.random() * 4,
        rot: 0,
      });
      if (parts.length > 40) parts.splice(0, parts.length - 40);
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
      // un fragment tous les ~28 px parcourus
      while (acc > 28) {
        acc -= 28;
        spawn(x, y, dx, dy);
      }
      lastX = x;
      lastY = y;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    // onglet caché : on purge la traînée pour ne pas retrouver des fragments figés au retour
    const onVis = () => {
      if (!document.hidden) return;
      parts.length = 0;
      lastX = lastY = -1;
      acc = 0;
      ctx.clearRect(0, 0, w, h);
    };
    document.addEventListener("visibilitychange", onVis);

    let raf = 0;
    let idle = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (parts.length === 0) {
        if (idle++ > 2) {
          ctx.clearRect(0, 0, w, h);
          idle = 0;
        }
        return;
      }
      ctx.clearRect(0, 0, w, h);
      ctx.textBaseline = "middle";
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        const t = p.life / p.max;
        if (t >= 1) {
          parts.splice(i, 1);
          continue;
        }
        const a = t < 0.1 ? t / 0.1 : 1 - (t - 0.1) / 0.9;
        ctx.globalAlpha = Math.max(0, Math.min(1, a)) * 0.5;
        ctx.font = `600 ${p.size}px ${font}`;
        ctx.fillStyle = p.color;
        ctx.textAlign = "center";
        ctx.fillText(p.text, p.x, p.y);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return <canvas ref={ref} className="code-trail" aria-hidden="true" />;
}
