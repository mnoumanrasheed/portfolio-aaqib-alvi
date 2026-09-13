"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useReducedMotion } from "framer-motion";
import Image from "next/image";

interface HeroPortrait3DProps {
  imageSrc: string;
  className?: string;
}

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D tDiffuse;
  uniform vec2 uMouse;
  uniform float uTime;
  uniform float uHover;
  uniform float uAspect;
  uniform float uImageAspect;
  
  varying vec2 vUv;

  void main() {
    // object-fit: cover calculation
    vec2 p = vUv;
    
    float canvasAspect = uAspect;
    float imgAspect = uImageAspect;
    
    vec2 scale = vec2(1.0, 1.0);
    if (canvasAspect > imgAspect) {
      scale.y = imgAspect / canvasAspect;
    } else {
      scale.x = canvasAspect / imgAspect;
    }
    
    // Scale from center
    p = (p - 0.5) * scale + 0.5;
    
    // Calculate distance from mouse
    float dist = distance(vUv, uMouse);
    
    // Subtle liquid displacement based on distance and time
    float ripple = sin(dist * 15.0 - uTime * 2.5) * 0.012 * uHover;
    
    // Falloff so the edges don't warp too much
    float falloff = smoothstep(0.6, 0.0, dist);
    
    vec2 offset = vec2(ripple * falloff, ripple * falloff);
    
    // Very slight constant parallax based on mouse
    vec2 parallax = (uMouse - 0.5) * 0.02 * uHover;
    
    vec4 texColor = texture2D(tDiffuse, p + offset + parallax);
    
    gl_FragColor = texColor;
  }
`;

export default function HeroPortrait3D({ imageSrc, className = "" }: HeroPortrait3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!mountRef.current) return;
    if (reducedMotion) return;

    // Setup Scene
    const scene = new THREE.Scene();
    
    // Setup Camera
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
    // Setup Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    mountRef.current.appendChild(renderer.domElement);
    
    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    let material: THREE.ShaderMaterial;
    
    textureLoader.load(imageSrc, (texture) => {
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      
      const imgAspect = texture.image.width / texture.image.height;
      const canvasAspect = mountRef.current!.clientWidth / mountRef.current!.clientHeight;
      
      material = new THREE.ShaderMaterial({
        uniforms: {
          tDiffuse: { value: texture },
          uMouse: { value: new THREE.Vector2(0.5, 0.5) },
          uTime: { value: 0 },
          uHover: { value: 0 },
          uAspect: { value: canvasAspect },
          uImageAspect: { value: imgAspect },
        },
        vertexShader,
        fragmentShader,
      });

      const geometry = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
    });

    // Handle Resize
    const handleResize = () => {
      if (!mountRef.current || !renderer) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      if (material) {
        material.uniforms.uAspect.value = width / height;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Mouse Interaction
    let targetMouse = new THREE.Vector2(0.5, 0.5);
    let targetHover = 0;
    
    const onMouseMove = (e: MouseEvent) => {
      if (!mountRef.current) return;
      const rect = mountRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - ((e.clientY - rect.top) / rect.height);
      targetMouse.set(x, y);
    };
    
    const onMouseEnter = () => { targetHover = 1; };
    const onMouseLeave = () => { 
      targetHover = 0; 
      targetMouse.set(0.5, 0.5); 
    };

    mountRef.current.addEventListener("mousemove", onMouseMove);
    mountRef.current.addEventListener("mouseenter", onMouseEnter);
    mountRef.current.addEventListener("mouseleave", onMouseLeave);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const render = () => {
      if (material) {
        material.uniforms.uTime.value = clock.getElapsedTime();
        material.uniforms.uMouse.value.lerp(targetMouse, 0.08);
        material.uniforms.uHover.value += (targetHover - material.uniforms.uHover.value) * 0.08;
      }
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeEventListener("mousemove", onMouseMove);
        mountRef.current.removeEventListener("mouseenter", onMouseEnter);
        mountRef.current.removeEventListener("mouseleave", onMouseLeave);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      cancelAnimationFrame(animationFrameId);
    };
  }, [imageSrc, reducedMotion]);

  return (
    <div 
      ref={mountRef} 
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{ touchAction: "none" }}
    >
      {/* Fallback image shown only if reduced motion is enabled */}
      {reducedMotion && (
        <Image 
          src={imageSrc} 
          alt="Aaqib Alvi Portrait" 
          fill
          priority
          sizes="(max-width: 768px) 90vw, (max-width: 1280px) 42vw, 480px"
          className="object-cover object-top hero-img" 
        />
      )}
    </div>
  );
}
