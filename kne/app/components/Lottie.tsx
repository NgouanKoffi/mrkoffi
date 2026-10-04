"use client";

import { useEffect, useRef } from "react";
import lottie, { type AnimationItem } from "lottie-web/build/player/lottie_svg";

type Props = {
  /** nom du fichier dans /public/lottie (sans .json) */
  name: string;
  className?: string;
  speed?: number;
  loop?: boolean;
};

/**
 * Animation Lottie (rendu SVG) chargée à la demande, jouée seulement quand visible.
 * Respecte prefers-reduced-motion (reste sur la première image).
 */
export default function Lottie({ name, className = "", speed = 1, loop = true }: Props) {
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    let anim: AnimationItem | null = null;
    let io: IntersectionObserver | null = null;
    let alive = true;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    fetch(`/lottie/${name}.json`)
      .then((r) => r.json())
      .then((data) => {
        if (!alive) return;
        anim = lottie.loadAnimation({
          container: el,
          renderer: "svg",
          loop,
          autoplay: false,
          animationData: data,
          rendererSettings: { preserveAspectRatio: "xMidYMid meet", progressiveLoad: true },
        });
        anim.setSpeed(speed);
        if (reduced) {
          anim.goToAndStop(0, true);
          return;
        }
        io = new IntersectionObserver(
          ([e]) => {
            if (!anim) return;
            if (e.isIntersecting) anim.play();
            else anim.pause();
          },
          { threshold: 0.15 },
        );
        io.observe(el);
      })
      .catch(() => {});

    return () => {
      alive = false;
      io?.disconnect();
      anim?.destroy();
    };
  }, [name, speed, loop]);

  return <div ref={box} className={`lottie ${className}`} aria-hidden="true" />;
}
