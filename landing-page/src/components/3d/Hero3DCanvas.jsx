import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // BRIGHT LIGHTS FOR LIGHT MODE
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    const primaryLight = new THREE.DirectionalLight(0x4f46e5, 3.8);
    primaryLight.position.set(12, 18, 12);
    scene.add(primaryLight);

    const goldLight = new THREE.PointLight(0xd97706, 4.5, 30);
    goldLight.position.set(-10, 6, 6);
    scene.add(goldLight);

    const cyanLight = new THREE.PointLight(0x0284c7, 3.5, 25);
    cyanLight.position.set(6, -10, 7);
    scene.add(cyanLight);

    // MAIN 3D ACADEMIC OBJECT GROUP
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Center Crystal Sapphire Polyhedron (Knowledge Core)
    const coreGeometry = new THREE.IcosahedronGeometry(2.2, 0);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x4338ca,
      emissive: 0x1e1b4b,
      roughness: 0.1,
      metalness: 0.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    mainGroup.add(coreMesh);

    // Wireframe cage over core
    const wireGeometry = new THREE.IcosahedronGeometry(2.35, 1);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(wireGeometry, wireMaterial);
    mainGroup.add(wireMesh);

    // 2. Gyroscopic Orbiting Rings (STEM / Innovation) - Golden & Royal Blue
    const ringMaterial1 = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0x92400e,
      emissiveIntensity: 0.2,
    });
    const ringGeometry1 = new THREE.TorusGeometry(3.6, 0.07, 16, 100);
    const ring1 = new THREE.Mesh(ringGeometry1, ringMaterial1);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ringMaterial2 = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x0369a1,
      emissiveIntensity: 0.2,
    });
    const ringGeometry2 = new THREE.TorusGeometry(4.2, 0.06, 16, 100);
    const ring2 = new THREE.Mesh(ringGeometry2, ringMaterial2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    mainGroup.add(ring2);

    const ringMaterial3 = new THREE.MeshStandardMaterial({
      color: 0x7c3aed,
      metalness: 0.85,
      roughness: 0.2,
      emissive: 0x5b21b6,
      emissiveIntensity: 0.2,
    });
    const ringGeometry3 = new THREE.TorusGeometry(4.8, 0.06, 16, 100);
    const ring3 = new THREE.Mesh(ringGeometry3, ringMaterial3);
    ring3.rotation.z = Math.PI / 3;
    mainGroup.add(ring3);

    // 3. Orbiting Electron Spheres
    const sphereGeo = new THREE.SphereGeometry(0.24, 16, 16);
    const sphereMat1 = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xd97706,
      emissiveIntensity: 1.2,
    });
    const sphereMat2 = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      emissive: 0x0369a1,
      emissiveIntensity: 1.2,
    });
    const electron1 = new THREE.Mesh(sphereGeo, sphereMat1);
    const electron2 = new THREE.Mesh(sphereGeo, sphereMat2);
    scene.add(electron1);
    scene.add(electron2);

    // 4. Floating 3D Geometric Glyphs (Books & Academic Gems)
    const glyphs = [];
    const glyphGeoList = [
      new THREE.BoxGeometry(0.85, 1.15, 0.28), // Book shape
      new THREE.OctahedronGeometry(0.6),
      new THREE.TetrahedronGeometry(0.65),
      new THREE.BoxGeometry(0.8, 1.05, 0.22),
      new THREE.DodecahedronGeometry(0.55)
    ];

    const glyphMat = new THREE.MeshPhysicalMaterial({
      color: 0x4f46e5,
      metalness: 0.6,
      roughness: 0.2,
      clearcoat: 0.9,
      transparent: true,
      opacity: 0.85,
    });

    for (let i = 0; i < 7; i++) {
      const geo = glyphGeoList[i % glyphGeoList.length];
      const mesh = new THREE.Mesh(geo, glyphMat.clone());
      const angle = (i / 7) * Math.PI * 2;
      const radius = 6.0 + (i % 3) * 0.8;
      mesh.position.set(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 5,
        Math.sin(angle) * (radius * 0.5)
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      mesh.userData = {
        speed: 0.005 + Math.random() * 0.01,
        angle: angle,
        radius: radius,
        yBase: mesh.position.y,
        bobSpeed: 1 + Math.random() * 1.5
      };
      scene.add(mesh);
      glyphs.push(mesh);
    }

    // 5. Starfield / Constellation Particles (Deep Royal Blue & Gold on Light)
    const particleCount = 600;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorPalette = [
      new THREE.Color(0x4338ca),
      new THREE.Color(0xd97706),
      new THREE.Color(0x0284c7),
      new THREE.Color(0x7c3aed),
    ];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 45;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 45;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 35 - 5;

      const chosenColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      particleColors[i * 3] = chosenColor.r;
      particleColors[i * 3 + 1] = chosenColor.g;
      particleColors[i * 3 + 2] = chosenColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // MOUSE INTERACTION & LERP
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouseX = (x / container.clientWidth) * 2 - 1;
      mouseY = -(y / container.clientHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // RESIZE LISTENER
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // ANIMATION LOOP
    let clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate Knowledge Core
      coreMesh.rotation.y = elapsedTime * 0.4 + targetX * 0.8;
      coreMesh.rotation.x = elapsedTime * 0.25 + targetY * 0.8;
      wireMesh.rotation.y = -elapsedTime * 0.3;
      wireMesh.rotation.x = -elapsedTime * 0.2;

      // Gyroscopic Ring Rotations
      ring1.rotation.x = Math.PI / 3 + elapsedTime * 0.35;
      ring1.rotation.y = elapsedTime * 0.25;

      ring2.rotation.y = Math.PI / 4 + elapsedTime * 0.45;
      ring2.rotation.z = -elapsedTime * 0.2;

      ring3.rotation.z = Math.PI / 3 + elapsedTime * 0.3;
      ring3.rotation.x = -elapsedTime * 0.4;

      // Orbiting Electrons
      const orbit1Speed = elapsedTime * 1.4;
      electron1.position.set(
        Math.cos(orbit1Speed) * 3.6,
        Math.sin(orbit1Speed) * Math.sin(Math.PI / 3) * 3.6,
        Math.sin(orbit1Speed) * Math.cos(Math.PI / 3) * 3.6
      );

      const orbit2Speed = -elapsedTime * 1.6;
      electron2.position.set(
        Math.cos(orbit2Speed) * Math.sin(Math.PI / 4) * 4.2,
        Math.cos(orbit2Speed) * Math.cos(Math.PI / 4) * 4.2,
        Math.sin(orbit2Speed) * 4.2
      );

      // Glyphs floating & bobbing
      glyphs.forEach((glyph) => {
        glyph.userData.angle += glyph.userData.speed;
        glyph.position.x = Math.cos(glyph.userData.angle) * glyph.userData.radius;
        glyph.position.z = Math.sin(glyph.userData.angle) * (glyph.userData.radius * 0.5);
        glyph.position.y = glyph.userData.yBase + Math.sin(elapsedTime * glyph.userData.bobSpeed) * 0.4;
        glyph.rotation.x += 0.01;
        glyph.rotation.y += 0.015;
      });

      // Ambient particle slow drift
      particles.rotation.y = elapsedTime * 0.02 + targetX * 0.1;
      particles.rotation.x = elapsedTime * 0.01 - targetY * 0.1;

      // Camera parallax tilt
      camera.position.x = targetX * 1.5;
      camera.position.y = targetY * 1.2;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      coreGeometry.dispose();
      coreMaterial.dispose();
      wireGeometry.dispose();
      wireMaterial.dispose();
      ringGeometry1.dispose();
      ringMaterial1.dispose();
      ringGeometry2.dispose();
      ringMaterial2.dispose();
      ringGeometry3.dispose();
      ringMaterial3.dispose();
      sphereGeo.dispose();
      sphereMat1.dispose();
      sphereMat2.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();

      glyphs.forEach((g) => {
        g.geometry.dispose();
        g.material.dispose();
      });

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ touchAction: 'none' }}
    />
  );
};
