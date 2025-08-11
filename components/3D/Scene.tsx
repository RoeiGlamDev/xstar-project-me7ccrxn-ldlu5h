import React from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  title: string;
}

const Scene: React.FC<SceneProps> = ({ title }) => {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <motion.div
        className="absolute top-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold text-red-600">{title}</h1>
        <p className="mt-4 text-lg text-orange-500">
          Welcome to AI, your hub for creating stunning AI-generated videos.
        </p>
      </motion.div>
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <OrbitControls />
        {/ Add 3D models here /}
        <mesh
          onClick={() => console.log("3D Model Clicked")}
          onPointerOver={(e) => (e.target.scale.x = 1.2)}
          onPointerOut={(e) => (e.target.scale.x = 1)}
        >
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
      </Canvas>
      <motion.div
        className="absolute bottom-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300">
          Create My Video
        </button>
      </motion.div>
    </div>
  );
};

export default Scene;