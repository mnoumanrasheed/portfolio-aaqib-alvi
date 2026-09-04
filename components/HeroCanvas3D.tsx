"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // ─── Color Palette ───────────────────────────────────────────────
    const cCyan = new THREE.Color("#00D2FF");
    const cGold = new THREE.Color("#D4AF37");
    const cWhite = new THREE.Color("#FFFFFF");
    const cSkyBlue = new THREE.Color("#38BDF8");

    // ─── 1. Globe particle sphere ────────────────────────────────────
    const GLOBE_R = 5.5;
    const GLOBE_N = 2600;
    const gGeo = new THREE.BufferGeometry();
    const gPos = new Float32Array(GLOBE_N * 3);
    const gCol = new Float32Array(GLOBE_N * 3);

    for (let i = 0; i < GLOBE_N; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / GLOBE_N);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const x = GLOBE_R * Math.sin(phi) * Math.cos(theta);
      const y = GLOBE_R * Math.cos(phi);
      const z = GLOBE_R * Math.sin(phi) * Math.sin(theta);
      gPos[i * 3] = x;
      gPos[i * 3 + 1] = y;
      gPos[i * 3 + 2] = z;

      const t = Math.random();
      const c = new THREE.Color();
      if (t < 0.55) c.lerpColors(cCyan, cSkyBlue, Math.random());
      else if (t < 0.78) c.lerpColors(cGold, cWhite, Math.random() * 0.5);
      else c.copy(cWhite);
      gCol[i * 3] = c.r;
      gCol[i * 3 + 1] = c.g;
      gCol[i * 3 + 2] = c.b;
    }
    gGeo.setAttribute("position", new THREE.BufferAttribute(gPos, 3));
    gGeo.setAttribute("color", new THREE.BufferAttribute(gCol, 3));
    const globePoints = new THREE.Points(
      gGeo,
      new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    mainGroup.add(globePoints);

    // ─── 2. Dense wireframe latitude/longitude grid ─────────────────
    const wireGeo = new THREE.SphereGeometry(GLOBE_R * 0.995, 28, 20);
    const wireMat = new THREE.MeshBasicMaterial({
      color: "#0EA5E9",
      wireframe: true,
      transparent: true,
      opacity: 0.09,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    mainGroup.add(wireMesh);

    // ─── 3. Inner atmosphere glow sphere ────────────────────────────
    const atmoGeo = new THREE.SphereGeometry(GLOBE_R * 0.94, 32, 32);
    const atmoMat = new THREE.MeshBasicMaterial({
      color: "#00D2FF",
      transparent: true,
      opacity: 0.035,
      side: THREE.FrontSide,
    });
    mainGroup.add(new THREE.Mesh(atmoGeo, atmoMat));

    // ─── 4. Outer atmosphere haze ───────────────────────────────────
    const outerGeo = new THREE.SphereGeometry(GLOBE_R * 1.08, 32, 32);
    const outerMat = new THREE.MeshBasicMaterial({
      color: "#0284C7",
      transparent: true,
      opacity: 0.025,
      side: THREE.BackSide,
    });
    mainGroup.add(new THREE.Mesh(outerGeo, outerMat));

    // ─── 5. Primary orbital ring (gold/cyan particle halo) ──────────
    const buildRing = (
      ringR: number,
      count: number,
      spread: number,
      tiltX: number,
      tiltY: number,
      color1: THREE.Color,
      color2: THREE.Color,
      size: number,
      opacity: number
    ) => {
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      const col = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const s = (Math.random() - 0.5) * spread;
        const r = ringR + s;
        pos[i * 3] = Math.cos(angle) * r;
        pos[i * 3 + 1] = (Math.random() - 0.5) * spread * 0.6;
        pos[i * 3 + 2] = Math.sin(angle) * r;
        const c = Math.random() > 0.45 ? color1 : color2;
        col[i * 3] = c.r;
        col[i * 3 + 1] = c.g;
        col[i * 3 + 2] = c.b;
      }
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
      const pts = new THREE.Points(
        geo,
        new THREE.PointsMaterial({
          size,
          vertexColors: true,
          transparent: true,
          opacity,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
      );
      pts.rotation.x = tiltX;
      pts.rotation.y = tiltY;
      return pts;
    };

    const ring1 = buildRing(8.0, 700, 0.35, Math.PI / 3.5, Math.PI / 6, cGold, cCyan, 0.15, 0.95);
    const ring2 = buildRing(9.2, 500, 0.3, Math.PI / 2.2, -Math.PI / 5, cCyan, cSkyBlue, 0.12, 0.8);
    const ring3 = buildRing(7.0, 350, 0.25, Math.PI / 1.7, Math.PI / 3, cGold, cWhite, 0.13, 0.7);
    mainGroup.add(ring1);
    mainGroup.add(ring2);
    mainGroup.add(ring3);

    // ─── 6. Equatorial accent ring (solid arc line) ─────────────────
    const torusGeo = new THREE.TorusGeometry(GLOBE_R + 0.6, 0.035, 8, 200);
    const torusMat = new THREE.MeshBasicMaterial({
      color: "#00D2FF",
      transparent: true,
      opacity: 0.35,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.rotation.x = Math.PI / 2.3;
    mainGroup.add(torusMesh);

    const torusGeo2 = new THREE.TorusGeometry(GLOBE_R + 1.2, 0.025, 8, 200);
    const torusMat2 = new THREE.MeshBasicMaterial({
      color: "#D4AF37",
      transparent: true,
      opacity: 0.25,
    });
    const torusMesh2 = new THREE.Mesh(torusGeo2, torusMat2);
    torusMesh2.rotation.x = Math.PI / 3.2;
    torusMesh2.rotation.z = Math.PI / 4;
    mainGroup.add(torusMesh2);

    // ─── 7. Orbiting beacon satellite ───────────────────────────────
    const beaconGeo = new THREE.SphereGeometry(0.22, 16, 16);
    const beaconMat = new THREE.MeshBasicMaterial({ color: "#FFFFFF" });
    const beacon = new THREE.Mesh(beaconGeo, beaconMat);
    mainGroup.add(beacon);

    const haloGeo = new THREE.SphereGeometry(0.52, 16, 16);
    const haloMat = new THREE.MeshBasicMaterial({
      color: "#00D2FF",
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    beacon.add(new THREE.Mesh(haloGeo, haloMat));

    // Second beacon (gold)
    const beacon2Geo = new THREE.SphereGeometry(0.16, 16, 16);
    const beacon2Mat = new THREE.MeshBasicMaterial({ color: "#D4AF37" });
    const beacon2 = new THREE.Mesh(beacon2Geo, beacon2Mat);
    mainGroup.add(beacon2);
    const halo2Geo = new THREE.SphereGeometry(0.38, 16, 16);
    const halo2Mat = new THREE.MeshBasicMaterial({
      color: "#D4AF37",
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });
    beacon2.add(new THREE.Mesh(halo2Geo, halo2Mat));

    // ─── 8. Floating data-node particles ────────────────────────────
    const floatN = 80;
    const floatGeo = new THREE.BufferGeometry();
    const floatPos = new Float32Array(floatN * 3);
    const floatCol = new Float32Array(floatN * 3);
    for (let i = 0; i < floatN; i++) {
      const r = GLOBE_R + 2.5 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      floatPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      floatPos[i * 3 + 1] = r * Math.cos(phi);
      floatPos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
      const fc = Math.random() > 0.5 ? cCyan : cGold;
      floatCol[i * 3] = fc.r;
      floatCol[i * 3 + 1] = fc.g;
      floatCol[i * 3 + 2] = fc.b;
    }
    floatGeo.setAttribute("position", new THREE.BufferAttribute(floatPos, 3));
    floatGeo.setAttribute("color", new THREE.BufferAttribute(floatCol, 3));
    const floatPoints = new THREE.Points(
      floatGeo,
      new THREE.PointsMaterial({
        size: 0.18,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    scene.add(floatPoints);

    // ─── Mouse Interaction ───────────────────────────────────────────
    let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };
    window.addEventListener("mousemove", onMouseMove);

    // ─── Resize ─────────────────────────────────────────────────────
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // ─── Animation Loop ──────────────────────────────────────────────
    let rafId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Globe slow rotation
      globePoints.rotation.y = t * 0.1;
      wireMesh.rotation.y = t * 0.07;

      // Rings
      ring1.rotation.z = t * 0.15;
      ring2.rotation.z = -t * 0.12;
      ring3.rotation.z = t * 0.09;
      torusMesh.rotation.z = t * 0.05;
      torusMesh2.rotation.y = t * 0.08;

      // Beacon orbit
      const ob1 = t * 0.55;
      beacon.position.x = Math.cos(ob1) * 8.1;
      beacon.position.z = Math.sin(ob1) * 8.1;
      beacon.position.y = Math.sin(ob1 * 1.8) * 1.8;

      const ob2 = t * 0.38 + Math.PI;
      beacon2.position.x = Math.cos(ob2) * 9.3;
      beacon2.position.z = Math.sin(ob2) * 9.3;
      beacon2.position.y = Math.cos(ob2 * 2.2) * 2.2;

      // Float particles drift
      floatPoints.rotation.y = t * 0.04;
      floatPoints.rotation.x = Math.sin(t * 0.03) * 0.05;

      // Mouse follow
      targetX += (mouseX * 0.45 - targetX) * 0.045;
      targetY += (mouseY * 0.45 - targetY) * 0.045;
      mainGroup.rotation.y = targetX * 0.9;
      mainGroup.rotation.x = -targetY * 0.65;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
      if (container && renderer.domElement) container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="relative w-full h-[520px] md:h-[640px] lg:h-[760px] pointer-events-auto"
      style={{ touchAction: "none" }}
    />
  );
}
