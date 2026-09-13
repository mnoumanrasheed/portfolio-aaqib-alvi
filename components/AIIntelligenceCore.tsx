"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface AIIntelligenceCoreProps {
  mouseX: number;
  mouseY: number;
}

export default function AIIntelligenceCore({ mouseX, mouseY }: AIIntelligenceCoreProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    mouseRef.current = { x: mouseX, y: mouseY };
  }, [mouseX, mouseY]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // ─── Colors ──────────────────────────────────────────────────
    const cGold = new THREE.Color("#C9A227");
    const cGoldLight = new THREE.Color("#E8D9A6");
    const cWhite = new THREE.Color("#FFFFFF");

    // ─── 1. Neural Network Core (Icosahedron) ────────────────────
    const CORE_RADIUS = 3.5;
    
    // Inner glowing solid
    const innerGeo = new THREE.IcosahedronGeometry(CORE_RADIUS * 0.85, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: cGold,
      transparent: true,
      opacity: 0.15,
      wireframe: false,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerCore);

    // Outer wireframe structure
    const outerGeo = new THREE.IcosahedronGeometry(CORE_RADIUS, 2);
    const outerMat = new THREE.MeshBasicMaterial({
      color: cGoldLight,
      transparent: true,
      opacity: 0.4,
      wireframe: true,
    });
    const outerCore = new THREE.Mesh(outerGeo, outerMat);
    mainGroup.add(outerCore);

    // Core vertices (neural nodes)
    const nodeGeo = new THREE.BufferGeometry();
    const pos = outerGeo.attributes.position.array;
    nodeGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const nodeMat = new THREE.PointsMaterial({
      color: cWhite,
      size: 0.15,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const coreNodes = new THREE.Points(nodeGeo, nodeMat);
    mainGroup.add(coreNodes);

    // ─── 2. Rotating Energy Rings ────────────────────────────────
    const createRing = (radius: number, tube: number, segments: number, opacity: number, color: THREE.Color, tiltX: number, tiltY: number) => {
      const geo = new THREE.TorusGeometry(radius, tube, 4, segments);
      
      const ptsGeo = new THREE.BufferGeometry();
      const ptsPos = [];
      const ptsCol = [];
      for (let i = 0; i < segments; i++) {
        if (i % 3 === 0) continue; // Dashed effect
        
        const angle = (i / segments) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = (Math.random() - 0.5) * tube * 2;
        const z = Math.sin(angle) * radius;
        ptsPos.push(x, y, z);
        
        const c = Math.random() > 0.5 ? color : cWhite;
        ptsCol.push(c.r, c.g, c.b);
      }
      
      ptsGeo.setAttribute("position", new THREE.Float32BufferAttribute(ptsPos, 3));
      ptsGeo.setAttribute("color", new THREE.Float32BufferAttribute(ptsCol, 3));
      
      const ptsMat = new THREE.PointsMaterial({
        size: 0.08,
        vertexColors: true,
        transparent: true,
        opacity: opacity,
        blending: THREE.AdditiveBlending,
      });
      
      const pts = new THREE.Points(ptsGeo, ptsMat);
      
      const solidMat = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: opacity * 0.3,
        wireframe: true,
      });
      const solidRing = new THREE.Mesh(geo, solidMat);
      
      const group = new THREE.Group();
      group.add(pts);
      group.add(solidRing);
      
      group.rotation.x = tiltX;
      group.rotation.y = tiltY;
      
      return group;
    };

    const ring1 = createRing(5.5, 0.1, 120, 0.6, cGold, Math.PI / 3, Math.PI / 4);
    const ring2 = createRing(7.0, 0.08, 150, 0.4, cGoldLight, -Math.PI / 4, Math.PI / 3);
    const ring3 = createRing(8.5, 0.05, 180, 0.3, cGold, Math.PI / 2.5, -Math.PI / 5);
    
    mainGroup.add(ring1);
    mainGroup.add(ring2);
    mainGroup.add(ring3);

    // ─── 3. Golden Light Particles ───────────────────────────────
    const PARTICLE_COUNT = 200;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(PARTICLE_COUNT * 3);
    const pCol = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const r = CORE_RADIUS + 1 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      pPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pPos[i * 3 + 1] = r * Math.cos(phi);
      pPos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
      
      const c = Math.random() > 0.3 ? cGold : cGoldLight;
      pCol[i * 3] = c.r;
      pCol[i * 3 + 1] = c.g;
      pCol[i * 3 + 2] = c.b;
    }

    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    pGeo.setAttribute("color", new THREE.BufferAttribute(pCol, 3));
    
    const pMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(pGeo, pMat);
    mainGroup.add(particles);

    // ─── Ambient Glow ────────────────────────────────────────────
    const glowGeo = new THREE.SphereGeometry(CORE_RADIUS * 1.5, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: cGold,
      transparent: true,
      opacity: 0.05,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });
    const ambientGlow = new THREE.Mesh(glowGeo, glowMat);
    mainGroup.add(ambientGlow);

    // ─── Animation Loop ──────────────────────────────────────────
    let rafId: number;
    const clock = new THREE.Clock();
    
    let currentRotX = 0;
    let currentRotY = 0;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Continuous rotation
      innerCore.rotation.y = t * 0.2;
      innerCore.rotation.x = t * 0.1;
      
      outerCore.rotation.y = t * 0.15;
      outerCore.rotation.z = t * 0.05;
      
      coreNodes.rotation.y = t * 0.15;
      coreNodes.rotation.z = t * 0.05;

      // Pulse effect
      const pulse = 1 + Math.sin(t * 2) * 0.05;
      innerCore.scale.set(pulse, pulse, pulse);
      ambientGlow.scale.set(pulse, pulse, pulse);
      
      // Ring rotation
      ring1.rotation.z = t * 0.1;
      ring2.rotation.z = -t * 0.08;
      ring3.rotation.z = t * 0.05;

      // Particle slow drift
      particles.rotation.y = t * 0.03;
      particles.rotation.x = Math.sin(t * 0.05) * 0.05;

      // Smooth mouse parallax
      const targetX = mouseRef.current.x * 0.5; // -0.5 to 0.5
      const targetY = mouseRef.current.y * 0.5;
      
      currentRotX += (targetY - currentRotX) * 0.05;
      currentRotY += (targetX - currentRotY) * 0.05;
      
      mainGroup.rotation.x = currentRotX;
      mainGroup.rotation.y = currentRotY;

      renderer.render(scene, camera);
    };
    
    animate();

    // ─── Resize Handler ──────────────────────────────────────────
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
      if (container && renderer.domElement) container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
