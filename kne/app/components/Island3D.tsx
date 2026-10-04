"use client";

import { useEffect, useRef } from "react";

/**
 * Visuel du panneau « Jeux & 3D » : l'île flottante low-poly « Floating island [low poly] [VR] »
 * de pacoco (Sketchfab, CC BY 4.0), chargée en glTF et rendue en WebGL (Three.js).
 * Rotation lente + parallaxe souris, flottement doux. Chargé à la demande, rendu seulement
 * quand visible, rien sous 1000px.
 */
export default function Island3D({ className = "" }: { className?: string }) {
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    if (window.innerWidth < 1000) return;
    let dispose: (() => void) | null = null;
    let alive = true;

    Promise.all([import("three"), import("three/examples/jsm/loaders/GLTFLoader.js")]).then(([THREE, { GLTFLoader }]) => {
      if (!alive || !el) return;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 200);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.25;
      el.prepend(renderer.domElement);

      scene.add(new THREE.HemisphereLight(0xffffff, 0x3a3a44, 2.2));
      const sun = new THREE.DirectionalLight(0xffffff, 3.2);
      sun.position.set(5, 10, 6);
      scene.add(sun);
      const rim = new THREE.DirectionalLight(0xf0663f, 1.2);
      rim.position.set(-6, 3, -5);
      scene.add(rim);

      const world = new THREE.Group();
      scene.add(world);

      new GLTFLoader().load(
        "/models/island/island.glb",
        (gltf) => {
          if (!alive) return;
          const model = gltf.scene;
          model.updateMatrixWorld(true);
          // centrer + normaliser : mesure en coordonnées monde, puis pivot
          const bbox = new THREE.Box3().setFromObject(model);
          const center = bbox.getCenter(new THREE.Vector3());
          const size = bbox.getSize(new THREE.Vector3());
          const radius = Math.max(size.x, size.z) / 2;
          const pivot = new THREE.Group();
          pivot.add(model);
          model.position.sub(center);
          pivot.scale.setScalar(1 / radius);
          world.add(pivot);
          el.classList.add("is-ready");
        },
        undefined,
        () => {
          /* modèle indisponible : on laisse le halo seul */
        },
      );

      const resize = () => {
        const w = el.clientWidth || 1;
        const h = el.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        camera.position.set(0, 1.2, 3.15);
        camera.lookAt(0, 0.08, 0);
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(el);

      let visible = true;
      const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { threshold: 0.02 });
      io.observe(el);

      let tx = 0,
        ty = 0,
        mx = 0,
        my = 0;
      const onMove = (e: PointerEvent) => {
        tx = (e.clientX / window.innerWidth - 0.5) * 2;
        ty = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener("pointermove", onMove, { passive: true });

      const clock = new THREE.Clock();
      let raf = 0;
      const tick = () => {
        raf = requestAnimationFrame(tick);
        if (!visible) return;
        const t = clock.getElapsedTime();
        mx += (tx - mx) * 0.05;
        my += (ty - my) * 0.05;
        world.rotation.y = mx * 0.5 + (reduced ? 0.6 : t * 0.14);
        world.rotation.x = my * 0.08;
        world.position.y = reduced ? 0 : Math.sin(t * 0.9) * 0.04;
        renderer.render(scene, camera);
      };
      tick();

      dispose = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        io.disconnect();
        window.removeEventListener("pointermove", onMove);
        scene.traverse((o) => {
          const m = o as InstanceType<typeof THREE.Mesh>;
          if (m.geometry) m.geometry.dispose();
          const mm = m.material as InstanceType<typeof THREE.Material> | InstanceType<typeof THREE.Material>[] | undefined;
          if (Array.isArray(mm)) mm.forEach((x) => x.dispose());
          else if (mm) mm.dispose();
        });
        renderer.dispose();
        renderer.domElement.remove();
      };
    });

    return () => {
      alive = false;
      dispose?.();
    };
  }, []);

  return (
    <div ref={box} className={`island3d ${className}`} aria-hidden="true">
      <span className="island-credit">
        Modèle 3D :{" "}
        <a href="https://sketchfab.com/3d-models/floating-island-low-poly-vr-e03583671344487d8c853749f2de6d37" target="_blank" rel="noopener noreferrer">
          pacoco
        </a>{" "}
        · CC BY 4.0
      </span>
    </div>
  );
}
