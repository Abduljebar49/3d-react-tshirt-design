// src/components/ThreeDShirt.js
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const ShirtModel = () => {
  const shirtRef = useRef();

  useFrame(() => {
    shirtRef.current.rotation.y += 0.005; // Rotate the shirt for demonstration
  });

  return (
    <group>
      <mesh ref={shirtRef} receiveShadow castShadow>
        {/* Add your 3D shirt model or geometry here */}
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>

      <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, -1, 0]}>
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <shadowMaterial attach="material" opacity={0.3} />
      </mesh>
    </group>
  );
};

const ThreeDShirt = () => {
  const [zoom, setZoom] = useState(5);

  return (
    <div>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} castShadow />

        <PerspectiveCamera makeDefault position={[0, 0, zoom]} />

        <ShirtModel />
      </Canvas>

      <button className="absolute top-4 left-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={() => setZoom((prev) => prev - 1)}>
        Zoom Out
      </button>
      <button className="absolute top-4 left-16 bg-blue-500 text-white py-2 px-4 rounded" onClick={() => setZoom((prev) => prev + 1)}>
        Zoom In
      </button>
    </div>
  );
};

export default ThreeDShirt;
