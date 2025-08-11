import { useEffect, useRef } from 'react';
import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  position: [number, number, number];
}

const FloatingElement: React.FC<FloatingElementProps> = ({ position }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (ref.current) {
      ref.current.position.y += Math.sin(Date.now()  0.001)  0.01;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial color={'#FF5733'} />
    </mesh>
  );
};

const FloatingElements: React.FC = () => {
  return (
    <>
      <FloatingElement position={[1, 0, 0]} />
      <FloatingElement position={[-1, 0, 0]} />
      <FloatingElement position={[0, 1, 0]} />
    </>
  );
};

const FloatingElementsComponent: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-5xl font-bold text-red-600 mb-5">Welcome to AI</h1>
      <p className="text-xl text-orange-500 mb-10">Empowering your creativity with cutting-edge AI video solutions.</p>
      <motion.div
        className="bg-red-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-orange-500 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start Creating with AI
      </motion.button>
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingElements />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default FloatingElementsComponent;