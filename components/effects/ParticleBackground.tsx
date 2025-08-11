import { useEffect } from 'react';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const particles: THREE.Sprite[] = [];
    const particleCount = 1000;
    const particleGeometry = new THREE.CircleGeometry(0.1, 16);
    const particleMaterial = new THREE.SpriteMaterial({ color: new THREE.Color(1, 0.5, 0), opacity: 0.8 });

    for (let i = 0; i < particleCount; i++) {
      const particle = new THREE.Sprite(particleMaterial);
      particle.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      );
      particles.push(particle);
      scene.add(particle);
    }

    camera.position.z = 30;

    const animate = () => {
      requestAnimationFrame(animate);
      particles.forEach((particle) => {
        particle.rotation.z += 0.01;
      });
      renderer.render(scene, camera);
    };
    
    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <motion.div
        className="flex flex-col justify-center items-center h-full text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 hover:text-red-500 transition-colors">
          Welcome to AI
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Experience the future of video creation with VidNexus, where AI meets creativity.
        </p>
        <button className="bg-orange-500 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded transition-colors">
          Get Started
        </button>
      </motion.div>
    </div>
  );
};

export default ParticleBackground;